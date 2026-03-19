// ─────────────────────────────────────────────────────────────────────
//  MODELLI.JS  —  Aggiungi qui i tuoi modelli 3D
// ─────────────────────────────────────────────────────────────────────
//
//  Per aggiungere un nuovo modello:
//  1. Copia il blocco tra { ... } qui sotto
//  2. Metti il file .glb in /assets/models/
//  3. Scrivi il percorso nel campo "file", es: "assets/models/pila-v2.glb"
//
// ─────────────────────────────────────────────────────────────────────

const MODELLI = [

    {
        id: 1,
        title: "La porta",
        description: "Il primo modello. Forma essenziale da cui è tutto partito.",
        images: [
            "assets/images/models/porta/porta.png",
            "assets/images/models/porta/porta1.png",
            "assets/images/models/porta/porta2.png",
        ],
        file: "assets/models/porta_v1.glb",
        downloadable: true,
    },

    {
        id: 2,
        title: "L'onda",
        description: "La pila non si fa comandare..",
        images: [
            "assets/images/models/onda/lapila_surfonda.png",
        ],

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
    //   file: "assets/models/nuovo.glb",
    //   downloadable: true,
    // },

];
