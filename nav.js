(function () {
  const t = (window.I18N && window.I18N.t.bind(window.I18N)) || function (k) { return k; };
  const lang = (window.I18N && window.I18N.lang) || 'it';

  const pages = [
    { href: 'manifesto.html', label: 'Manifesto' },
    { href: 'modelli.html',   label: t('nav.pile'),  i18n: 'nav.pile'  },
    { href: 'mappa.html',     label: t('nav.mappa'), i18n: 'nav.mappa' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const links = pages.map(p =>
    `<a href="${p.href}"${current === p.href ? ' class="active"' : ''}${p.i18n ? ` data-i18n="${p.i18n}"` : ''}>${p.label}</a>`
  ).join('\n      ');

  const itActive = lang === 'it' ? ' lang-active' : '';
  const enActive = lang === 'en' ? ' lang-active' : '';

  document.write(`<nav>
  <a href="index.html" class="nav-logo">La Pila</a>
  <div class="nav-links">
    ${links}
    <div class="nav-lang">
      <button class="lang-btn${itActive}" data-lang="it">IT</button>
      <span class="lang-sep">/</span>
      <button class="lang-btn${enActive}" data-lang="en">EN</button>
    </div>
  </div>
</nav>`);
})();
