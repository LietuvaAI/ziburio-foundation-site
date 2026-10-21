(() => {
  const key = 'zf-lang';
  function sync(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.langbtn').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.l === lang));
    });
    document.querySelectorAll('[data-en][data-lt]').forEach(element => {
      const value = element.dataset[lang];
      if (element.tagName === 'IMG') element.alt = value;
      else element.setAttribute('aria-label', value);
    });
    if (document.body?.dataset[`${lang}Title`]) document.title = document.body.dataset[`${lang}Title`];
  }
  window.setLang = lang => {
    if (lang !== 'en' && lang !== 'lt') return;
    try { localStorage.setItem(key, lang); } catch (_) { /* Language still works without storage. */ }
    sync(lang);
  };
  let initial = 'en';
  try { if (localStorage.getItem(key) === 'lt') initial = 'lt'; } catch (_) {}
  sync(initial);
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');
  const mobile = window.matchMedia('(max-width: 900px)');
  function resetMenu() {
    nav.hidden = mobile.matches;
    menu.setAttribute('aria-expanded', String(!nav.hidden));
  }
  menu.addEventListener('click', () => {
    nav.hidden = !nav.hidden;
    menu.setAttribute('aria-expanded', String(!nav.hidden));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && !nav.hidden) {
      nav.hidden = true;
      menu.setAttribute('aria-expanded', 'false');
      menu.focus();
    }
  });
  mobile.addEventListener('change', resetMenu);
  resetMenu();
})();
