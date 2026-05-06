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
        descriptionEn: "The first model. An essential form — where it all began.",
        images: [
            "assets/images/models/porta/porta2.png",
            "assets/images/models/porta/porta1.png",
            "assets/images/models/porta/porta.png",

        ],
        file: "assets/models/porta_v1.glb",
        downloadable: true,
    },

    {
        id: 2,
        title: "L'onda",
        description: "La pila non si fa comandare..",
        descriptionEn: "La pila won't be told what to do.",
        images: [
            "assets/images/models/onda/ondav1.png",
            "assets/images/models/onda/lapila_surfonda.png",
        ],

    },


    {
        id: 3,
        title: "L'onda v2",
        description: "La pila non si fa comandare..",
        descriptionEn: "La pila won't be told what to do.",
        images: [
            "assets/images/models/ondav2/pilav2.png",
        ],

    },

    {
        id: 4,
        title: "transformer",
        description: "Giocattolo senza pile",
        descriptionEn: "A toy with no batteries.",
        images: [
            "assets/images/models/transformer/trans1.jpeg",
            "assets/images/models/transformer/trans2.jpeg",
            "assets/images/models/transformer/trans3.jpeg",
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
