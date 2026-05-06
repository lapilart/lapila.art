// ─────────────────────────────────────────────────────────────────────
//  I18N.JS  —  Gestione lingua IT / EN
//  Caricato nel <head> di ogni pagina.
//  Espone window.I18N  →  .lang  .t(key)  .setLang(lang)  .apply()
// ─────────────────────────────────────────────────────────────────────

(function () {

  var T = {
    it: {
      // nav
      'nav.pile':  'Pile',
      'nav.mappa': 'Mappa',

      // home
      'home.desc': 'Modelli 3D stampati, colorati a mano,<br>incollati sui muri delle città.',
      'home.cta':  'Vedi la mappa →',

      // manifesto
      'manifesto.headline': 'La Pila<br>è un oggetto<br>&nbsp;simpatico.',
      'manifesto.lead':     'Ogni città lascia un segno su chi ci passa.<br><em>La pila lascia un segno sulla città.</em>',
      'manifesto.p1':       'La pila rappresenta una parte di tutti noi, alcuni cel\'hanno scarica altri carica. Alcuni la tengono nascosta, altri la tirano fuori.<br><em>Alcune semplicemente se ne vanno lasciando un giocattolo senza pile.</em><br>È una cosa che esiste nello spazio urbano come esistono i cartelli stradali, i tombini, le crepe nell\'intonaco, i pendolari e i bambini al parco.',
      'manifesto.p2':       'L\'energia si espande.<br>Una pila alla volta.',
      'manifesto.contact':  'Contatti',

      // modelli / pile
      'modelli.label':    'Pile',
      'modelli.download': 'Scarica modello',

      // mappa
      'map.empty': 'Nessuna immagine',
    },

    en: {
      // nav
      'nav.pile':  'Batteries',
      'nav.mappa': 'Map',

      // home
      'home.desc': '3D models printed, hand-painted,<br>glued on city walls.',
      'home.cta':  'View the map →',

      // manifesto
      'manifesto.headline': 'La Pila<br>is a nice<br>&nbsp;object.',
      'manifesto.lead':     'Every city leaves a mark on those who pass through.<br><em>La pila leaves its mark on the city.</em>',
      'manifesto.p1':       'La pila represents a part of all of us — some drained, some fully charged. Some keep it hidden, others bring it out.<br><em>Some simply disappear, leaving behind a toy with no batteries.</em><br>It\'s something that exists in urban space just like road signs, manholes, cracks in the plaster, commuters, and children in the park.',
      'manifesto.p2':       'Energy spreads.<br>One battery at a time.',
      'manifesto.contact':  'Contact',

      // modelli / pile
      'modelli.label':    'Batteries',
      'modelli.download': 'Download model',

      // mappa
      'map.empty': 'No images',
    },
  };

  var KEY = 'lapila_lang';

  function getLang() {
    return localStorage.getItem(KEY) || 'it';
  }

  function applyLang(lang) {
    var tr = T[lang] || T.it;

    // Elementi con data-i18n → innerHTML
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = tr[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });

    // Elementi con data-i18n-it / data-i18n-en (contenuto generato da JS)
    document.querySelectorAll('[data-i18n-it]').forEach(function (el) {
      el.innerHTML = lang === 'en'
        ? (el.dataset.i18nEn || el.dataset.i18nIt)
        : el.dataset.i18nIt;
    });

    // Stato attivo sui bottoni lingua
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });

    // Attributo lang sull'elemento html
    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    applyLang(lang);
  }

  // API pubblica
  window.I18N = {
    get lang() { return getLang(); },
    t: function (key) { return (T[getLang()] || T.it)[key] || key; },
    setLang: setLang,
    apply: function () { applyLang(getLang()); },
  };

  // Applica traduzioni e collega i bottoni al caricamento del DOM
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(this.dataset.lang); });
    });
  });

})();
