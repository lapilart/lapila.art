// ─────────────────────────────────────────────────────────────────────
//  PINS.JS  —  Aggiungi qui le tue pile
// ─────────────────────────────────────────────────────────────────────
//
//  Per aggiungere una nuova pila:
//  1. Copia il blocco tra { ... } qui sotto
//  2. Modifica i valori
//  3. Per le immagini: metti i file nella cartella /assets/images/pins/
//     e scrivi il percorso, es: "assets/images/pins/roma/foto1.jpg"
//
//  Le coordinate (lat, lng) le trovi su Google Maps:
//  tasto destro sul punto → "Che cosa c'è qui?" → copia i numeri
//
//  FLAG OPZIONALE — noCard: true
//  Aggiungendo "noCard: true" al pin, il punto appare sulla mappa
//  ma non è cliccabile e non apre nessuna card.
//  Esempio:
//    { id: 5, title: "Napoli", lat: 40.85, lng: 14.27, noCard: true }
// ─────────────────────────────────────────────────────────────────────

const PINS = [

    // ── ESEMPIO — modifica o cancella ──
    {
        noCard: true,
        id: 1,
        title: "Torino",
        date: "2026",
        lat: 45.070900886937814,
        lng: 7.6852575163260255,
        description: "La prima Pila. Grande soddisfazione ma ancora molto lavoro da fare per migliorare la pila, La pila è tutto",
        images: [
            "assets/images/pins/torino/torino-1.jpeg",
            // "assets/images/pins/milano/2.jpg",
            // "assets/images/pins/milano/3.jpg",
        ]
    },

    {
        noCard: true,
        id: 2,
        title: "Roma",
        date: "2026",
        lat: 41.93056725227886,
        lng: 12.512019909278726,
        description: "Quanto se bella Romaaaa",
        images: [
            "assets/images/pins/roma/roma1.jpeg",
            "assets/images/pins/roma/roma2.jpeg",

            // "assets/images/pins/milano/3.jpg",
        ]
    },

    {
        noCard: true,
        id: 3,
        title: "Perugia",
        date: "2026",
        lat: 43.110750348606935,
        lng: 12.390804224284588,
        description: "In via delle gotiche troverai sicuramente qualche Pila, le altre cercale in città",
        images: [
            "assets/images/pins/perugia/perugia-2.jpeg",
            "assets/images/pins/perugia/perugia-1.jpeg",

            // "assets/images/pins/milano/3.jpg",
        ]
    },


    {
        noCard: true,
        id: 3,
        title: "Tokyo",
        date: "2026",
        lat: 35.694702898058146,
        lng: 139.7047606924342,
    },

    {
        noCard: true,
        id: 3,
        title: "Osaka",
        date: "2026",
        lat: 34.67141201816773,
        lng: 135.49394589538667,
    },

    // ── AGGIUNGI ALTRE PILE QUI ──
    // {
    //   id: 2,
    //   title: "Roma",
    //   date: "Aprile 2025",
    //   lat: 41.9028,
    //   lng: 12.4964,
    //   description: "...",
    //   images: [
    //     "assets/images/pins/roma/1.jpg",
    //   ]
    // },

];
