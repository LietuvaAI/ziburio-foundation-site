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
const pages = ['index', 'about', 'work', 'skaitmeniniai-knygnesiai', 'principles'];
const sourceRef = process.env.SOURCE_REF || '8253480'; // Original five-page launch; keep the audit stable after committing.
const normalize = text => text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

(async () => {
  const original = Object.fromEntries(pages.map(name => [name, execFileSync('git', ['show', `${sourceRef}:${name}.html`], { cwd: root, encoding: 'utf8' })]));
  const updated = Object.fromEntries(pages.map(name => [name, fs.readFileSync(path.join(root, `${name}.html`), 'utf8')]));
  const allCopy = normalize(Object.values(updated).join(' '));
  assert(!/CultureNet|\bLabs\b|501\s*\(|deductib/i.test(allCopy), 'Unapproved entity or tax language on public pages');
  assert(!Object.values(updated).some(html => /<form\b/i.test(html)), 'Unexpected form');
  const protectedLt = [...original.principles.matchAll(/<x-lt>([\s\S]*?)<\/x-lt>/g)].map(match => match[1]).filter(text => text.includes('Šaltinis išlaiko savo galią.') || text.includes('Trys dalykai niekada'));
  const footer = original.index.match(/<footer[\s\S]*?<\/footer>/)[0];
  protectedLt.push(...[...footer.matchAll(/<x-lt>([\s\S]*?)<\/x-lt>/g)].map(match => match[1]).filter(text => text.includes('Ateikite paremti') || text.includes('Mūsų darbas laikosi')));
  for (const block of protectedLt) {
    const paragraphs = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(match => match[1]);
    for (const text of paragraphs.length ? paragraphs : [block]) {
      if (/^\d+$/.test(normalize(text))) continue; // Display numbers now come from CSS counters.
      assert(allCopy.includes(normalize(text)), `Protected Lithuanian changed: ${normalize(text)}`);
    }
  }
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  assert.equal(config.git.deploymentEnabled['codex/foundation-design-review-2026-10-21'], false, 'Review branch could auto-deploy');
  const externalLinks = html => [...html.matchAll(/<a\b[^>]*href="((?:https:|mailto:)[^"]+)"/g)].map(match => match[1]);
  const currentLinks = new Set(Object.values(updated).flatMap(externalLinks));
  for (const link of new Set(Object.values(original).flatMap(externalLinks))) assert(currentLinks.has(link), `Lost link: ${link}`);
  const founding = original.about.match(/<section id="why"[\s\S]*?<\/section>/)[0];
  for (const lang of ['en', 'lt']) {
    const passage = [...founding.matchAll(new RegExp(`<x-${lang}>([\\s\\S]*?)<\\/x-${lang}>`, 'g'))].at(-1)[1];
    for (const paragraph of passage.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
      assert(normalize(updated.about).includes(normalize(paragraph[1])), `Founding statement changed (${lang})`);
    }
  }
  const oldHero = original.index.match(/<section id="top"[\s\S]*?<\/section>/)[0];
  const newHero = updated.index.match(/<section id="top"[\s\S]*?<\/section>/)[0];
  assert.equal(normalize(newHero), normalize(oldHero), 'Home hero copy changed');

  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_EXECUTABLE ? { executablePath: process.env.CHROME_EXECUTABLE } : {}) });
  const results = [];
  try {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
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
            assert.equal(await page.locator('#site-nav a:visible').count(), 5);
            await page.keyboard.press('Escape');
            assert(!(await page.locator('#site-nav').isVisible()), 'Mobile menu did not close');
          }
          if (name === 'index') assert.equal(await page.locator('.hero a[href="about.html"]').evaluate(el => getComputedStyle(el).backgroundColor), 'rgba(0, 0, 0, 0)', 'Outlined hero link lost its transparent background');
          await page.evaluate(() => document.activeElement?.blur());
          if (width === 390 || width === 1440) await page.screenshot({ path: path.join(output, `${name}-${lang}-${width}.png`), fullPage: true, animations: 'disabled' });
          results.push(`${name}/${lang}/${width}`);
        }
      }
    }
    await page.goto(`${base}/index.html`);
    assert.equal(await page.locator('html').getAttribute('lang'), 'lt', 'Language choice lost across pages');
    await page.goto(`${base}/about.html`);
    await page.locator('summary').first().click();
    assert.equal(await page.locator('details').first().getAttribute('open'), '');
    assert((await page.locator('details').first().innerText()).includes('Be kalbos nėra tautos.'));
    await page.locator('#support-statement summary').click();
    assert((await page.locator('#support-statement').innerText()).includes('Ateikite paremti darbo, kurį perims kita karta.'));
    await page.screenshot({ path: path.join(output, 'about-lt-expanded.png'), fullPage: true });
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
    console.log(JSON.stringify({ passed: results.length, languages: ['en', 'lt'], widths: [360, 390, 768, 1440], checks: ['language isolation', 'image loading', 'heading structure', 'overflow', 'links', 'mobile menu', 'language persistence', 'expanded founding and support statements', 'no-JS navigation', 'blocked-storage switching', 'hero unchanged', 'founding statement intact', 'protected Lithuanian retained', 'no restricted public claims or forms', 'review branch auto-deployment disabled', 'original external links retained'], screenshots: output }, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
