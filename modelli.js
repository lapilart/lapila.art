// ─────────────────────────────────────────────────────────────────────
//  MODELLI.JS  —  Aggiungi qui i tuoi modelli 3D
// ─────────────────────────────────────────────────────────────────────
//
//  Per aggiungere un nuovo modello:
//  1. Copia il blocco tra { ... } qui sotto
//  2. Metti il file .glb nella cartella del progetto (o in /models/)
//  3. Scrivi il percorso nel campo "file", es: "models/pila-v2.glb"
//
// ─────────────────────────────────────────────────────────────────────

const MODELLI = [

  {
    id: 1,
    title: "La porta v1",
    description: "Il primo modello. Forma essenziale da cui è tutto partito. Rappresenta una Pila che ti invita ad entrare in un portale magico.",
    images: [
      // "images/porta_01.jpg",
      // "images/porta_02.jpg",
    ],
    file: "models/porta_v1.glb",
    downloadable: false,
  },

  {
    id: 2,
    title: "L'onda",
    description: "La pila non si fa comandare..",
    images: [
      // "images/onda_01.jpg",
      // "images/onda_02.jpg",
    ],
    file: "models/lapila_surf_onda_v2.glb",
    downloadable: false,
  },

  // ── AGGIUNGI ALTRI MODELLI QUI ──
  // {
  //   id: 3,
  //   title: "Nuovo modello",
  //   description: "...",
  //   images: [
  //     "images/nuovo_01.jpg",
  //     "images/nuovo_02.jpg",
  //   ],
  //   file: "models/nuovo.glb",
  //   downloadable: true,
  // },

];
