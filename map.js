document.addEventListener('DOMContentLoaded', () => {

  // ── Init mappa ──
  const map = L.map('map', {
    center: [30, 10],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: false,
    maxBounds: [[-85.05, -18000], [85.05, 18000]],
    maxBoundsViscosity: 1.0,
  });

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Tile layer scuro (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // ── Custom pin icon ──
  const pinIcon = L.divIcon({
    className: 'custom-pin',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#f5e200"><path d="M8 24l2.674-9h-9.674l16-15-2.674 9h8.674l-15 15zm-1.586-11h6.912l-1.326 4 5.739-6h-6.065l1.304-4-6.564 6z"/></svg>`,
    iconSize: [22, 22],
    iconAnchor: [11, 22],
  });

  // ── Stato pin attivo ──
  let activeMarkerEl = null;

  // ── Elementi modal ──
  const overlay    = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalDate  = document.getElementById('modal-date');
  const modalDesc  = document.getElementById('modal-desc');
  const container  = document.getElementById('gallery-container');
  const closeBtn   = document.getElementById('modal-close');

  // ── Costruisce la gallery ──
  function buildGallery(pin) {
    const imgs = (pin.images || []).filter(Boolean);

    if (imgs.length === 0) {
      const emptyText = (window.I18N && window.I18N.t('map.empty')) || 'Nessuna immagine';
      container.innerHTML = `<div class="gallery-empty">${emptyText}</div>`;
      return;
    }

    // Costruisce HTML
    const imgTags = imgs.map((src, i) =>
      `<img src="${src}" class="gallery-img${i === 0 ? ' active' : ''}" alt="${pin.title}">`
    ).join('');

    const navHTML = imgs.length > 1 ? `
      <div class="gallery-nav">
        <button class="gallery-btn" id="g-prev">&#8592;</button>
        <button class="gallery-btn" id="g-next">&#8594;</button>
      </div>
      <span class="gallery-counter" id="g-counter">1 / ${imgs.length}</span>
    ` : '';

    container.innerHTML = `<div class="gallery">${imgTags}${navHTML}</div>`;

    if (imgs.length > 1) {
      let idx = 0;

      const update = () => {
        container.querySelectorAll('.gallery-img').forEach((el, i) => {
          el.classList.toggle('active', i === idx);
        });
        document.getElementById('g-counter').textContent = `${idx + 1} / ${imgs.length}`;
      };

      document.getElementById('g-prev').addEventListener('click', () => {
        idx = (idx - 1 + imgs.length) % imgs.length;
        update();
      });

      document.getElementById('g-next').addEventListener('click', () => {
        idx = (idx + 1) % imgs.length;
        update();
      });

      const gallery = container.querySelector('.gallery');
      let touchStartX = 0;
      gallery.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      gallery.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
          idx = dx < 0 ? (idx + 1) % imgs.length : (idx - 1 + imgs.length) % imgs.length;
          update();
        }
      });

      let mouseStartX = 0, mouseDragging = false;
      gallery.addEventListener('mousedown', e => { mouseStartX = e.clientX; mouseDragging = true; });
      gallery.addEventListener('mouseup', e => {
        if (!mouseDragging) return;
        mouseDragging = false;
        const dx = e.clientX - mouseStartX;
        if (Math.abs(dx) > 40) {
          idx = dx < 0 ? (idx + 1) % imgs.length : (idx - 1 + imgs.length) % imgs.length;
          update();
        }
      });
      gallery.addEventListener('mouseleave', () => { mouseDragging = false; });
    }
  }

  // ── Apre il modal ──
  function openModal(pin) {
    modalTitle.textContent = pin.title || '';
    modalDate.textContent  = pin.date  || '';
    modalDesc.textContent  = pin.description || '';
    buildGallery(pin);
    overlay.classList.add('open');
  }

  // ── Chiude il modal ──
  function closeModal() {
    overlay.classList.remove('open');
    if (activeMarkerEl) { activeMarkerEl.classList.remove('pin-active'); activeMarkerEl = null; }
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ── Cluster group ──
  const clusterGroup = L.markerClusterGroup({
    maxClusterRadius: 50,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    spiderfyOnMaxZoom: true,
    iconCreateFunction: cluster => L.divIcon({
      className: 'cluster-pin',
      html: `<div class="cluster-inner"><span>${cluster.getChildCount()}</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    }),
  });

  // ── Aggiunge i pin dalla lista ──
  PINS.forEach(pin => {
    const marker = L.marker([pin.lat, pin.lng], { icon: pinIcon });
    if (pin.noCard) {
      marker.on('add', () => {
        const el = marker.getElement();
        if (el) el.style.cursor = 'default';
      });
    } else {
      marker.on('click', () => {
        if (activeMarkerEl) activeMarkerEl.classList.remove('pin-active');
        activeMarkerEl = marker.getElement();
        if (activeMarkerEl) activeMarkerEl.classList.add('pin-active');
        openModal(pin);
      });
    }
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);

});
