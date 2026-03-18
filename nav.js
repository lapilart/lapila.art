(function () {
  const pages = [
    { href: 'manifesto.html', label: 'Manifesto' },
    { href: 'modelli.html',   label: 'Modelli'   },
    { href: 'mappa.html',     label: 'Mappa'     },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const links = pages.map(p =>
    `<a href="${p.href}"${current === p.href ? ' class="active"' : ''}>${p.label}</a>`
  ).join('\n      ');

  document.write(`<nav>
  <a href="index.html" class="nav-logo">La Pila</a>
  <div class="nav-links">
    ${links}
  </div>
</nav>`);
})();
