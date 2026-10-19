'use strict';

const assert = require('node:assert/strict');
const { guardUnmergedClosure, hasValidReceipt } = require('./pr-retirement-guard');

const HEAD = '0123456789abcdef0123456789abcdef01234567';
const CLOSED_AT = '2026-09-06T04:00:00Z';
const RECEIPT_CREATED_AT = '2026-09-06T03:59:30Z';

function payload(overrides = {}) {
  return {
    pull_request: {
      number: 17,
      merged: false,
      closed_at: CLOSED_AT,
      head: { sha: HEAD, ref: 'codex/example', repo: { full_name: 'example/project' } },
      ...overrides,
    },
    repository: { name: 'project', full_name: 'example/project', owner: { login: 'example' } },
  };
}

function receiptBody(head = HEAD, path = 'docs/example.md') {
  return [
    'PR RETIREMENT REVIEW v1',
    '- Repository: `example/project`',
    '- PR: `#17`',
    `- Exact head: \`${head}\``,
    '- Disposition: `superseded`',
    '- Review summary: The replacement preserves the reviewed content.',
    '- Per-file review:',
    `  - \`${path}\` → \`preserved_exact\` → \`${path}\``,
    'This receipt records content disposition before exact-head branch retirement.',
  ].join('\n');
}

function receiptComment(overrides = {}) {
  return {
    body: receiptBody(),
    user: { login: 'example' },
    author_association: 'OWNER',
    created_at: RECEIPT_CREATED_AT,
    ...overrides,
  };
}

function harness({ comments = [], files = [{ filename: 'docs/example.md' }], ref = null, pullOverrides = {} } = {}) {
  const calls = [];
  const listComments = Symbol('listComments');
  const listFiles = Symbol('listFiles');
  const github = {
    paginate: async (endpoint) => (endpoint === listComments ? comments : files),
    rest: {
      issues: {
        listComments,
        createComment: async (args) => calls.push(['comment', args]),
      },
      git: {
        getRef: async () => {
          if (!ref) {
            const error = new Error('not found');
            error.status = 404;
            throw error;
          }
          return { data: ref };
        },
        createRef: async (args) => calls.push(['createRef', args]),
      },
      pulls: {
        listFiles,
        update: async (args) => calls.push(['updatePull', args]),
      },
    },
  };
  const failures = [];
  const core = { setFailed: (message) => failures.push(message) };
  return {
    github,
    context: { actor: 'example', payload: payload(pullOverrides) },
    core,
    calls,
    failures,
  };
}

async function main() {
  const receiptContext = {
    headSha: HEAD,
    repositoryName: 'example/project',
    pullNumber: 17,
    sourcePaths: ['docs/example.md'],
    authorizedActor: 'example',
    closedAt: CLOSED_AT,
  };
  assert.equal(hasValidReceipt([], receiptContext), false);
  assert.equal(
    hasValidReceipt([receiptComment()], receiptContext),
    true,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ body: receiptBody('f'.repeat(40)) })], receiptContext),
    false,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ body: receiptBody(HEAD, 'wrong.md') })], receiptContext),
    false,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ user: { login: 'outsider' } })], receiptContext),
    false,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ author_association: 'NONE' })], receiptContext),
    false,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ created_at: '2026-09-06T03:30:00Z' })], receiptContext),
    false,
  );
  assert.equal(
    hasValidReceipt([receiptComment({ created_at: '2026-09-06T04:00:01Z' })], receiptContext),
    false,
  );

  const merged = harness({ pullOverrides: { merged: true } });
  assert.deepEqual(await guardUnmergedClosure(merged), { action: 'merged-noop' });
  assert.deepEqual(merged.calls, []);

  const receipted = harness({
    comments: [receiptComment()],
  });
  assert.deepEqual(await guardUnmergedClosure(receipted), { action: 'receipted-noop' });
  assert.deepEqual(receipted.calls, []);

  const missing = harness();
  assert.deepEqual(await guardUnmergedClosure(missing), { action: 'restored-and-reopened' });
  assert.deepEqual(missing.calls.map(([name]) => name), ['createRef', 'updatePull', 'comment']);
  assert.equal(missing.calls[0][1].sha, HEAD);
  assert.equal(missing.failures.length, 1);

  const present = harness({ ref: { object: { sha: HEAD } } });
  assert.deepEqual(await guardUnmergedClosure(present), { action: 'reopened' });
  assert.deepEqual(present.calls.map(([name]) => name), ['updatePull', 'comment']);

  const raced = harness({ ref: { object: { sha: 'f'.repeat(40) } } });
  assert.deepEqual(await guardUnmergedClosure(raced), { action: 'head-race-blocked' });
  assert.deepEqual(raced.calls.map(([name]) => name), ['comment']);
  assert.equal(raced.failures.length, 1);

  console.log('PASS: unmerged PR guard validates receipts, restores exact heads, reopens, and fails closed on races');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
