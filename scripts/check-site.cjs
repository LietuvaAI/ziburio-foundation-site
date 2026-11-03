// Local QA only. Never uploads, deploys, or changes production data.
// NODE_PATH=<directory containing playwright> CHROME_EXECUTABLE=<optional browser> node scripts/check-site.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const base = process.env.SITE_URL || 'http://127.0.0.1:8766';
const output = process.env.QA_OUTPUT || fs.mkdtempSync(path.join(os.tmpdir(), 'ziburio-review-'));
const pages = ['index', 'about', 'work', 'support'];
const sourcePages = ['index', 'about', 'work', 'skaitmeniniai-knygnesiai', 'principles'];
const redirects = ['skaitmeniniai-knygnesiai', 'principles'];
const sourceRef = process.env.SOURCE_REF || '8253480'; // Original five-page launch; keep the audit stable after committing.
const normalize = text => text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
// Vilija explicitly approved the Lithuanian name change on 2026-10-21.
const approvedLtName = text => text.replaceAll('Žiburio Foundation', 'Žiburio Fondas');

(async () => {
  const original = Object.fromEntries(sourcePages.map(name => [name, execFileSync('git', ['show', `${sourceRef}:${name}.html`], { cwd: root, encoding: 'utf8' })]));
  const updated = Object.fromEntries(pages.map(name => [name, fs.readFileSync(path.join(root, `${name}.html`), 'utf8')]));
  const redirectPages = Object.fromEntries(redirects.map(name => [name, fs.readFileSync(path.join(root, `${name}.html`), 'utf8')]));
  const archived = fs.readdirSync(path.join(root, 'docs', 'review-archive')).filter(name => name.endsWith('.html')).map(name => fs.readFileSync(path.join(root, 'docs', 'review-archive', name), 'utf8')).join(' ');
  const allCopy = normalize(Object.values(updated).join(' '));
  const retainedCopy = normalize(`${Object.values(updated).join(' ')} ${archived}`);
  assert(!/CultureNet|\bLabs\b|Lietuva\.ai|501\s*\(|deductib/i.test(allCopy), 'Unapproved entity or tax language on public pages');
  assert(!Object.values(updated).some(html => /<form\b/i.test(html)), 'Unexpected form');
  const protectedLt = [...original.principles.matchAll(/<x-lt>([\s\S]*?)<\/x-lt>/g)].map(match => match[1]).filter(text => text.includes('Šaltinis išlaiko savo galią.') || text.includes('Trys dalykai niekada'));
  const footer = original.index.match(/<footer[\s\S]*?<\/footer>/)[0];
  protectedLt.push(...[...footer.matchAll(/<x-lt>([\s\S]*?)<\/x-lt>/g)].map(match => match[1]).filter(text => text.includes('Ateikite paremti') || text.includes('Mūsų darbas laikosi')));
  for (const block of protectedLt) {
    const paragraphs = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(match => match[1]);
    for (const text of paragraphs.length ? paragraphs : [block]) {
      if (/^\d+$/.test(normalize(text))) continue; // Display numbers now come from CSS counters.
      assert(retainedCopy.includes(normalize(approvedLtName(text))), `Protected Lithuanian lost: ${normalize(text)}`);
    }
  }
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  assert.equal(config.git.deploymentEnabled['codex/foundation-design-review-2026-10-21'], false, 'Review branch could auto-deploy');
  const externalLinks = html => [...html.matchAll(/<a\b[^>]*href="((?:https:|mailto:)[^"]+)"/g)].map(match => match[1]);
  const currentLinks = new Set(Object.values(updated).flatMap(externalLinks));
  const expectedNav = ['index.html', 'work.html', 'about.html', 'support.html'];
  for (const name of pages) {
    assert(!updated[name].includes('https://archyvas.ziburioltmokykla.org/internship'), `Old internship destination: ${name}`);
    for (const href of expectedNav) assert(updated[name].includes(`href="${href}"`), `Missing navigation link ${href}: ${name}`);
    for (const match of updated[name].matchAll(/href="([a-z-]+)\.html#([^"]+)"/g)) {
      assert(updated[match[1]]?.includes(`id="${match[2]}"`), `Missing cross-page anchor: ${match[0]}`);
    }
  }
  assert(updated.work.includes('id="internship"'), 'Internship section missing from Our work');
  assert(updated.work.includes('id="student-work"'), 'Student work missing from Our work');
  assert(redirectPages.principles.includes('about.html#principles'), 'Principles redirect is incorrect');
  assert(redirectPages['skaitmeniniai-knygnesiai'].includes('work.html#program'), 'Internship redirect is incorrect');
  for (const link of new Set(Object.values(original).flatMap(externalLinks))) {
    // Approved consolidation: the program narrative now lives on the Foundation.
    if (link === 'https://archyvas.ziburioltmokykla.org/internship') {
      assert(updated.work.includes('id="student-work"'));
      continue;
    }
    if (link === 'https://lietuva.ai/' || link === 'https://lietuva.ai') continue; // Explicitly removed from the public Foundation site.
    if (link.startsWith('mailto:')) {
      assert([...currentLinks].some(current => current.split('?')[0] === link.split('?')[0]), `Lost contact address: ${link}`);
      continue;
    }
    assert(currentLinks.has(link), `Lost link: ${link}`);
  }
  const founding = original.about.match(/<section id="why"[\s\S]*?<\/section>/)[0];
  for (const lang of ['en', 'lt']) {
    const passage = [...founding.matchAll(new RegExp(`<x-${lang}>([\\s\\S]*?)<\\/x-${lang}>`, 'g'))].at(-1)[1];
    for (const paragraph of passage.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
      assert(retainedCopy.includes(normalize(lang === 'lt' ? approvedLtName(paragraph[1]) : paragraph[1])), `Founding statement lost (${lang})`);
    }
  }
  const oldHero = original.index.match(/<section id="top"[\s\S]*?<\/section>/)[0];
  const newHero = updated.index.match(/<section id="top"[\s\S]*?<\/section>/)[0];
  const requestedHeroRevision = oldHero.replace('Preserving the sources of Lithuanian cultural memory, strengthening the institutions that transmit it, and preparing a new generation to carry that inheritance into the age of artificial intelligence.', 'Carrying Lithuanian cultural memory forward—through the language, faith, knowledge, and institutions that sustain it, and the young people who will shape what comes next.');
  assert.equal(normalize(newHero), normalize(requestedHeroRevision), 'Unexpected change to hero copy outside the requested English reframing');

  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
  const results = [];
  try {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    const englishWordmarkWidths = {};
    page.on('pageerror', error => errors.push(error.message));
    for (const width of [360, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const name of pages) {
        for (const lang of ['en', 'lt']) {
          await page.goto(`${base}/${name}.html`);
          await page.locator(`.langbtn[data-l="${lang}"]`).click();
          await page.evaluate(() => { document.querySelectorAll('img').forEach(img => img.loading = 'eager'); });
          await page.evaluate(() => Promise.all([...document.images].map(image => image.decode())));
          await page.evaluate(() => document.fonts.ready);
          assert.equal(await page.locator('html').getAttribute('lang'), lang);
          const wordmarkWidth = await page.locator('.wordmark').evaluate(el => el.getBoundingClientRect().width);
          if (lang === 'en') englishWordmarkWidths[width] = wordmarkWidth;
          else {
            assert(Math.abs(wordmarkWidth - englishWordmarkWidths[width]) < 1, 'Lithuanian wordmark changed the lockup width');
            const fondasWidth = await page.locator('.wm-lt').evaluate(el => el.getBoundingClientRect().width);
            assert(Math.abs(fondasWidth - wordmarkWidth) < 1, 'FONDAS does not span the wordmark');
            assert.equal((await page.locator('.wm2 x-lt').textContent()).replace(/\s/g, ''), 'FONDAS', 'Duplicate Lithuanian wordmark text');
            assert.equal(await page.locator('.brand').getAttribute('aria-label'), 'Žiburio Fondas pradžia', 'Accessible brand name missing');
            assert(!(await page.locator('body').innerText()).includes('Žiburio Foundation'), 'English Foundation name visible in Lithuanian');
            assert((await page.title()).startsWith('Žiburio Fondas'), 'Lithuanian page title not localized');
          }
          assert.equal(await page.locator(`.langbtn[data-l="${lang}"]`).getAttribute('aria-pressed'), 'true');
          assert.equal(await page.locator('h1:visible').count(), 1, `${name}/${lang}: visible h1`);
          assert.equal(await page.locator(`x-${lang === 'en' ? 'lt' : 'en'}`).evaluateAll(nodes => nodes.filter(node => getComputedStyle(node).display !== 'none').length), 0, `${name}/${lang}: inactive language visible`);
          const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
          assert(!overflow, `${name}/${lang}/${width}: horizontal overflow`);
          const badLinks = await page.locator('a[href]').evaluateAll(links => links.map(a => a.getAttribute('href')).filter(href => href.startsWith('#') && !document.getElementById(href.slice(1))));
          assert.deepEqual(badLinks, [], `${name}: broken anchors`);
          for (const href of await page.locator('a[href$=".html"]').evaluateAll(links => links.map(a => a.getAttribute('href')))) assert(fs.existsSync(path.join(root, href)), `Missing local page: ${href}`);
          if (width <= 900) {
            await page.locator('.menu-button').click();
            assert(await page.locator('#site-nav').isVisible(), 'Mobile menu did not open');
            assert.equal(await page.locator('#site-nav a:visible').count(), 4);
            await page.keyboard.press('Escape');
            assert(!(await page.locator('#site-nav').isVisible()), 'Mobile menu did not close');
          }
          if (name === 'index') {
            const heroLink = await page.locator('.hero a[href="about.html"]').evaluate(el => ({ background: getComputedStyle(el).backgroundColor, color: getComputedStyle(el).color }));
            assert.equal(heroLink.color, 'rgb(255, 255, 255)', 'Secondary hero link lost its white label');
            assert(!heroLink.background.includes('0, 106, 68'), 'Rejected green returned to the hero action');
          }
          await page.evaluate(() => document.activeElement?.blur());
          if (width === 390 || width === 1440) await page.screenshot({ path: path.join(output, `${name}-${lang}-${width}.png`), fullPage: true, animations: 'disabled' });
          if (name === 'index' && (width === 390 || width === 1440)) await page.locator('.brand').screenshot({ path: path.join(output, `wordmark-${lang}-${width}.png`) });
          results.push(`${name}/${lang}/${width}`);
        }
      }
    }
    await page.goto(`${base}/index.html`);
    assert.equal(await page.locator('html').getAttribute('lang'), 'lt', 'Language choice lost across pages');
    await page.goto(`${base}/about.html`);
    assert((await page.locator('main').innerText()).includes('Trys dalykai niekada nesuplaukia į vieną'));
    assert((await page.locator('main').innerText()).includes('Šaltinis išlaiko savo galią.'));
    await page.goto(`${base}/support.html`);
    assert((await page.locator('main').innerText()).includes('Ateikite paremti darbo, kurį perims kita karta.'));
    await page.screenshot({ path: path.join(output, 'support-lt.png'), fullPage: true });
    assert.deepEqual(errors, [], 'Browser JavaScript errors');
    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const fallback = await noJS.newPage();
    await fallback.goto(`${base}/work.html`);
    assert(await fallback.locator('#site-nav').isVisible(), 'Navigation unavailable without JavaScript');
    await noJS.close();
    const noStorage = await browser.newContext();
    await noStorage.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } }); });
    const privatePage = await noStorage.newPage();
    await privatePage.goto(`${base}/index.html`);
    await privatePage.locator('.langbtn[data-l="lt"]').click();
    assert.equal(await privatePage.locator('html').getAttribute('lang'), 'lt', 'Language switch requires localStorage');
    await noStorage.close();
    console.log(JSON.stringify({ passed: results.length, languages: ['en', 'lt'], widths: [360, 390, 768, 1440], checks: ['language isolation', 'image loading', 'heading structure', 'overflow', 'links', 'four-item mobile menu', 'language persistence', 'principles and support copy', 'no-JS navigation', 'blocked-storage switching', 'hero matches requested English reframing; Lithuanian unchanged', 'retired founding copy retained in review archive', 'protected Lithuanian retained', 'no restricted public claims or forms', 'review branch auto-deployment disabled', 'approved external links retained'], screenshots: output }, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
