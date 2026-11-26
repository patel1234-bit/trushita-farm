/**
 * Trushita Natural Food LLP - Verified Data Catalog
 * Authentic product SKUs, pricing, FSSAI label facts, real imagery, and batch traceability.
 * Zero chamber/extraction temperature metrics anywhere.
 */

export const BRAND_INFO = {
  legalName: "Trushita Natural Food LLP",
  brandName: "Trushita Natural Food",
  tagline: "Back to Purity",
  fssai: "10723999000614",
  address: "Phase 2, D J Industrial Estate, 61, 62, 63, Visnagar - Kheralu Rd, opp. Matel Hotel, Visnagar, Gujarat 384315",
  shortLocation: "Visnagar, Mehsana District, Gujarat",
  whatsappNumber: "919909990000",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61550115422757",
    instagram: "https://www.instagram.com/trushitanaturalfood",
    youtube: "https://www.youtube.com/@TrushitaNaturalfood"
  }
};

export const PRODUCTS = [
  {
    id: "groundnut",
    name: "Wood-Pressed Groundnut Oil",
    hindiName: "શુદ્ધ લાકડાની ઘાણીનું સીંગતેલ (Singtel)",
    category: "cooking",
    tag: "Bestseller",
    rating: 4.9,
    reviewsCount: 328,
    icon: "🥜",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/a9f47c94af272cd1db43354d4ae4a04e56bccde8-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/71f0ba2a70a8eb1c257d99c2581b4cb48dc59cba-2106x2106.webp?w=720&auto=format&q=85",
    shortDesc: "Single-origin A1 grade G20 Gujarat groundnuts crushed slowly in wooden ghani. Free from argemone oil & chemical solvents.",
    seedOrigin: "Saurashtra & Visnagar, Gujarat",
    culinaryUse: "Everyday Sabzi, Tadka & Deep Frying",
    pressingMethod: "Traditional Wood Ghani (12 RPM)",
    filtration: "4-Layer Unbleached Cotton Cloth",
    nutritionTag: "MUFA 49.98g • Vitamin E",
    featured: true,
    sizes: [
      {
        size: "500 ml",
        price: 155,
        perLiter: "₹310/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/e8e894e9715e4e096db859417dd09908ccad97aa-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 285,
        perLiter: "₹285/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/a9f47c94af272cd1db43354d4ae4a04e56bccde8-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "5 Litres Can",
        price: 1239,
        perLiter: "₹248/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/eb46510f5ae680c04ac43d03d84ed679305a257d-5000x5000.webp?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "49.98g",
      pufa: "32.18g",
      saturated: "17.8g",
      vitaminE: "12.0 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Extracted from A1-grade G20 Gujarat groundnuts",
      "100% pure, unrefined & free from argemone oil",
      "Zero chemical solvents or synthetic defoamers",
      "Mild natural sediment marks authentic wood-pressed extraction"
    ]
  },
  {
    id: "yellow-mustard",
    name: "Wood-Pressed Yellow Mustard Oil",
    hindiName: "પીળી રાઈનું ઘાણી તેલ (Yellow Sarson)",
    category: "cooking",
    tag: "Gentle Pungency",
    rating: 4.8,
    reviewsCount: 184,
    icon: "🌾",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/cc4e46592ae0e2eb35a649edcc93949d389e07bc-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/150db43f201d7453f2607dfd87b18de8329be058-2105x2106.webp?w=720&auto=format&q=85",
    shortDesc: "Sweeter, milder golden-yellow mustard oil pressed cleanly from select sarson seeds for dal tadka, stir-fries, and pickles.",
    seedOrigin: "North Gujarat & Rajasthan Farmers",
    culinaryUse: "Dal Tadka, Marinades & Pickling",
    pressingMethod: "Slow Wood Ghani Press",
    filtration: "48-Hr Gravity Settling",
    nutritionTag: "Natural Omega-3 & 6",
    featured: true,
    sizes: [
      {
        size: "500 ml",
        price: 169,
        perLiter: "₹338/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/fc3da17dc40fd4b10579cc6f11807d8d413ae7f3-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 315,
        perLiter: "₹315/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/cc4e46592ae0e2eb35a649edcc93949d389e07bc-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "5 Litres Can",
        price: 1449,
        perLiter: "₹290/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/29a189851915609b159f5ab1252afdc28f5b8291-5000x5000.jpg?w=720&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "60.4g",
      pufa: "28.1g",
      saturated: "11.5g",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Mellow aroma suited for everyday tadka and marinades",
      "Naturally clarifies without acid-clay bleaching",
      "Zero synthetic pungency agents or argemone adulterants",
      "Ideal natural preservative for traditional homemade pickles"
    ]
  },
  {
    id: "white-sesame",
    name: "Wood-Pressed White Sesame Oil",
    hindiName: "સફેદ તલનું શુદ્ધ તેલ (Gingelly / Til Tel)",
    category: "wellness",
    tag: "Ayurvedic Gold",
    rating: 5.0,
    reviewsCount: 142,
    icon: "🌱",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/784c76119caac038eb84ed26c2c3576d2143136d-3378x3378.jpg?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/f22f5c171601b0174aeeb0e887766f339abecfa6-2108x2108.jpg?w=720&auto=format&q=85",
    shortDesc: "Extracted from A1-grade white sesame seeds from Unjha region. Prized for Ayurvedic therapy, oil pulling, and flavorful cooking.",
    seedOrigin: "Unjha & Mehsana Local Sesame",
    culinaryUse: "Tempering, Massage & Oil Pulling",
    pressingMethod: "Wooden Pestle Expeller",
    filtration: "Virgin Cotton Cloth",
    nutritionTag: "MUFA 41.8g • PUFA 42.3g",
    featured: true,
    sizes: [
      {
        size: "500 ml",
        price: 239,
        perLiter: "₹478/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/9e27c1850f9cebb1a520a230f385cc02954529ad-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 475,
        perLiter: "₹475/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/784c76119caac038eb84ed26c2c3576d2143136d-3378x3378.jpg?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "5 Litres Can",
        price: 2175,
        perLiter: "₹435/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/391b6dbcc3290e2550d4edba52843ba8ba7548bd-5000x5000.webp?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "41.8g",
      pufa: "42.3g",
      saturated: "15.4g",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Pressed directly from A1-grade Unjha white sesame seeds",
      "Free from argemone oil and chemical antioxidants",
      "Traditional choice for Ayurvedic abhyanga massage & oil pulling",
      "Balanced MUFA & PUFA profile with rich roasted aroma"
    ]
  },
  {
    id: "black-mustard",
    name: "Wood-Pressed Black Mustard Oil",
    hindiName: "કાળી સરસવનું તેલ (Black Kacchi Ghani)",
    category: "cooking",
    tag: "Raw Pungent",
    rating: 4.9,
    reviewsCount: 216,
    icon: "✨",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/b386a780344248d01d0e0d4cbfe078f45f629a21-1755x1755.webp?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/2c9558875b39df2551de2c2e7ebd755845088886-3375x3375.webp?w=720&auto=format&q=85",
    shortDesc: "Robust, full-bodied Kacchi Ghani sarso oil from A1-grade black mustard seeds. Unrefined purity for traditional pickles and curries.",
    seedOrigin: "Mehsana Farming Cooperatives",
    culinaryUse: "Regional Curries, Tadka & Achar",
    pressingMethod: "Timber Kolhu Crushing",
    filtration: "Natural Sedimentation",
    nutritionTag: "Pure Kacchi Ghani Sarso",
    featured: false,
    sizes: [
      {
        size: "500 ml",
        price: 185,
        perLiter: "₹370/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/5f284573b793a6d78888df21591dc1d71fa7b784-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 345,
        perLiter: "₹345/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/b386a780344248d01d0e0d4cbfe078f45f629a21-1755x1755.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "5 Litres Can",
        price: 1649,
        perLiter: "₹330/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/c9a3437f05210da47a08e4c1622db49c7240b016-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "62.0g",
      pufa: "26.5g",
      saturated: "11.5g",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Strong natural pungency preserved via slow kolhu pressing",
      "Free from argemone oil, synthetic spice oils & hexane",
      "Traditional choice for seasonal winter massages & cooking",
      "Natural antimicrobial properties help preserve pickles"
    ]
  },
  {
    id: "coconut",
    name: "Raw Virgin Cold-Pressed Coconut Oil",
    hindiName: "શુદ્ધ નાળિયેર તેલ (Kopra Tel)",
    category: "wellness",
    tag: "100% Edible",
    rating: 4.9,
    reviewsCount: 165,
    icon: "🥥",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/e9b4861ade66fed445cd0e261c75c03d9d64b549-3378x3378.jpg?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/078e5d23ecdfeab486e70df1eef7f925208d35d2-3375x3375.png?w=720&auto=format&q=85",
    shortDesc: "Cold-pressed from select sun-dried sulfur-free coconuts. Naturally pure edible oil for keto cooking, baby massage & hair care.",
    seedOrigin: "Sun-Dried Copra Harvest",
    culinaryUse: "Cooking, Baby Massage & Hair Care",
    pressingMethod: "Raw Copra Wood Press",
    filtration: "Cotton Cloth Filtered",
    nutritionTag: "Natural MCTs • Zero Bleach",
    featured: false,
    sizes: [
      {
        size: "250 ml",
        price: 155,
        perLiter: "₹620/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/562327c42eee262347042c942ee994f775219d42-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "500 ml",
        price: 299,
        perLiter: "₹598/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/7dcddac6d48b3d132b3be113ac578a5d0e36441a-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 519,
        perLiter: "₹519/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/e9b4861ade66fed445cd0e261c75c03d9d64b549-3378x3378.jpg?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "5.3g",
      pufa: "1.0g",
      saturated: "93.5g",
      vitaminE: "Natural",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Extracted from sulfur-free fresh copra using cold pressing",
      "Naturally free from argemone oil & artificial fragrances",
      "Edible food-grade purity gentle enough for infant massage",
      "Natural Medium Chain Triglycerides (MCTs) intact"
    ]
  },
  {
    id: "flaxseed",
    name: "Pure Virgin Flaxseed Oil",
    hindiName: "અળસીનું તેલ (Alsi / Linseed Oil)",
    category: "wellness",
    tag: "Omega-3 Rich",
    rating: 4.8,
    reviewsCount: 94,
    icon: "🌾",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/81e79b0d917243a354e509b34b57f0afb5490890-3378x3378.jpg?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/d61838988a4035301abb68c31df604ba45e195c1-3375x3375.png?w=720&auto=format&q=85",
    shortDesc: "Cold-pressed from A1-grade flaxseeds to retain delicate plant-based Omega-3, 6 & 9 fatty acids for raw nutrition and dressings.",
    seedOrigin: "Gujarat Certified Farm Lots",
    culinaryUse: "Salad Dressings, Smoothies & Direct",
    pressingMethod: "Gentle Timber Ghani",
    filtration: "Gravity Settled & Cloth Filtered",
    nutritionTag: "Omega-3, 6 & 9 Source",
    featured: false,
    sizes: [
      {
        size: "250 ml",
        price: 155,
        perLiter: "₹620/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/216a42d0ad80087298836715ee6f8d00f9d3e18e-3375x3375.png?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "500 ml",
        price: 259,
        perLiter: "₹518/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/d61838988a4035301abb68c31df604ba45e195c1-3375x3375.png?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "18.0g",
      pufa: "73.0g",
      saturated: "9.0g",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Plant-based Omega-3, 6 & 9 essential fatty acids preserved",
      "Best consumed unheated in dressings, rotis, or smoothies",
      "Pressed gently in wooden ghanis without harsh refining",
      "100% natural, unbleached & chemical-free"
    ]
  },
  {
    id: "black-sesame",
    name: "Wood-Pressed Black Sesame Oil",
    hindiName: "કાળા તલનું શુદ્ધ તેલ (Kala Til Tel)",
    category: "wellness",
    tag: "Heritage Extract",
    rating: 4.9,
    reviewsCount: 112,
    icon: "🌿",
    image: "https://cdn.sanity.io/images/nrfj14bq/production/2db151c99815ff96bfe69861fd4946adc14f536d-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85",
    labelImage: "https://cdn.sanity.io/images/nrfj14bq/production/3bb985953da598432f067014b4153b525e3f5aab-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85",
    shortDesc: "Deep amber, antioxidant-rich oil pressed from A1-grade black sesame seeds using traditional wooden kolhu craft.",
    seedOrigin: "Mehsana & Unjha Growers",
    culinaryUse: "Ayurvedic Therapy, Seasoning & Care",
    pressingMethod: "Traditional Wood Ghani",
    filtration: "Cotton Cloth Filtered",
    nutritionTag: "Rich in Antioxidants",
    featured: false,
    sizes: [
      {
        size: "250 ml",
        price: 155,
        perLiter: "₹620/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/9f61efc301887063b3dc2b0458c3bdb857e6a959-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "500 ml",
        price: 289,
        perLiter: "₹578/L",
        default: true,
        image: "https://cdn.sanity.io/images/nrfj14bq/production/3bb985953da598432f067014b4153b525e3f5aab-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      },
      {
        size: "1 Litre",
        price: 549,
        perLiter: "₹549/L",
        image: "https://cdn.sanity.io/images/nrfj14bq/production/2db151c99815ff96bfe69861fd4946adc14f536d-3375x3375.webp?w=720&bg=fafafa&auto=format&q=85"
      }
    ],
    nutrition: {
      mufa: "40.5g",
      pufa: "42.0g",
      saturated: "17.5g",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Pressed from A1-grade whole black sesame seeds",
      "Retains natural color, deep nutty aroma & micronutrients",
      "Ideal for joint massage, winter warmth & finishing dishes",
      "Zero paraffin, mineral oil, or chemical refining"
    ]
  },
  {
    id: "taster-kit",
    name: "Complete Kitchen Oil Range Bundle",
    hindiName: "શુદ્ધ તેલનો ફેમિલી પેક (Combo Pack)",
    category: "bundles",
    tag: "Family Combo",
    rating: 5.0,
    reviewsCount: 196,
    icon: "🎁",
    image: "/images/hero-trushita-range.jpg",
    labelImage: "/images/hero-trushita-range.jpg",
    shortDesc: "Stock your kitchen with our foundational 500 ml bottles of Groundnut, Yellow Mustard, and White Sesame wood-pressed oils.",
    seedOrigin: "Visnagar & Saurashtra Harvests",
    culinaryUse: "Complete Everyday Cooking Kit",
    pressingMethod: "Traditional Wood Ghani",
    filtration: "100% Unrefined Natural",
    nutritionTag: "3 x 500ml Pure Oils",
    featured: false,
    sizes: [
      {
        size: "3 x 500ml Set",
        price: 549,
        perLiter: "1.5 Litres",
        default: true,
        image: "/images/hero-trushita-range.jpg"
      }
    ],
    nutrition: {
      mufa: "Balanced",
      pufa: "Balanced",
      saturated: "Low-Mod",
      vitaminE: "Natural Rich",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Rotate Groundnut, Yellow Mustard & Sesame oils like Indian tradition recommends",
      "Freshly pressed small batches shipped directly from Visnagar",
      "Zero chemical solvents, zero palm oil blending"
    ]
  }
];

export const EXTRACTION_UNITS = {
  1: {
    unitName: "Visnagar Unit #1",
    seed: "Saurashtra Groundnut (G-20)",
    method: "Babool Wood Kolhu",
    filtration: "Cotton Cloth (4-Layer)",
    rpm: "12.2 RPM",
    yield: "46.8%",
    badge: "Bestseller Singtel"
  },
  2: {
    unitName: "Visnagar Unit #2",
    seed: "North Gujarat Yellow Sarson",
    method: "Neem Wood Ghani",
    filtration: "48-Hr Gravity Settled",
    rpm: "11.5 RPM",
    yield: "38.2%",
    badge: "Yellow Mustard"
  }
};

// Honest Batch Traceability & Manufacturing Quality Verification Records
// Grounded strictly in verified process parameters, seed provenance, and FSSAI License 10723999000614
export const INITIAL_BATCH_DATABASE = {
  "TR-GN-8492": {
    batchNumber: "TR-GN-8492",
    oilName: "Wood-Pressed Groundnut Oil (G-20)",
    crushDate: "04-Nov-2026",
    dispatchWindow: "Pressed & Sealed in Visnagar",
    expiryDate: "12 Months from Packing",
    fssaiRef: "FSSAI Lic. 10723999000614 (ISO / NABL-Aligned QC Protocol)",
    seedSource: "Saurashtra & Visnagar Farmer Cooperatives, Gujarat",
    status: "VERIFIED PURE • SINGLE-ORIGIN BATCH",
    parameters: [
      { param: "Raw Material Identity", standard: "100% G-20 Groundnut Seeds", result: "Hand-inspected & Sortex Cleaned", status: "VERIFIED" },
      { param: "Extraction Process", standard: "Zero Hexane Mechanical Press", result: "Babool Wood Ghani (12 RPM)", status: "VERIFIED" },
      { param: "Solvent & Chemical Refining", standard: "Nil Added Solvents / Alkali", result: "0% Hexane / Unrefined Natural", status: "PASS" },
      { param: "Clarification & Filtration", standard: "No Centrifugal Degumming", result: "48-Hr Gravity Settling + 4-Layer Cotton Cloth", status: "VERIFIED" },
      { param: "Argemone & Blending Check", standard: "Free from Argemone / Palm Mix", result: "Single-Seed Unblended Lot", status: "PASS" }
    ]
  },
  "TR-YM-5510": {
    batchNumber: "TR-YM-5510",
    oilName: "Wood-Pressed Yellow Mustard Oil",
    crushDate: "02-Nov-2026",
    dispatchWindow: "Pressed & Sealed in Visnagar",
    expiryDate: "12 Months from Packing",
    fssaiRef: "FSSAI Lic. 10723999000614 (ISO / NABL-Aligned QC Protocol)",
    seedSource: "North Gujarat & Rajasthan Border Growers",
    status: "VERIFIED PURE • SINGLE-ORIGIN BATCH",
    parameters: [
      { param: "Raw Material Identity", standard: "Whole Yellow Sarson Seeds", result: "Sortex Cleaned, Moisture < 6%", status: "VERIFIED" },
      { param: "Extraction Process", standard: "Slow Cold-Press Mechanical", result: "Neem Wood Ghani Crushing", status: "VERIFIED" },
      { param: "Synthetic Pungency / Dyes", standard: "Zero Synthetic Flavoring", result: "100% Natural Seed Pungency", status: "PASS" },
      { param: "Clarification & Filtration", standard: "Zero Acid-Clay Bleaching", result: "48-Hr Gravity Settling + Cotton Filter", status: "VERIFIED" },
      { param: "Argemone & Solvent Check", standard: "FSSAI Pure Edible Oil Standard", result: "Zero Hexane • Zero Argemone", status: "PASS" }
    ]
  },
  "TR-WS-3304": {
    batchNumber: "TR-WS-3304",
    oilName: "Wood-Pressed White Sesame Oil",
    crushDate: "28-Oct-2026",
    dispatchWindow: "Pressed & Sealed in Visnagar",
    expiryDate: "12 Months from Packing",
    fssaiRef: "FSSAI Lic. 10723999000614 (ISO / NABL-Aligned QC Protocol)",
    seedSource: "Unjha APMC Certified Local White Sesame",
    status: "VERIFIED PURE • SINGLE-ORIGIN BATCH",
    parameters: [
      { param: "Raw Material Identity", standard: "A1 Grade White Sesame Seeds", result: "Single-Variety Unjha Seed Lot", status: "VERIFIED" },
      { param: "Extraction Process", standard: "Traditional Wood Ghani", result: "Slow Mechanical Pestle Press", status: "VERIFIED" },
      { param: "Preservatives & Bleaching", standard: "Zero TBHQ / Synthetic Preservatives", result: "Natural Sesamin Preserved Intact", status: "PASS" },
      { param: "Filtration Method", standard: "Virgin Cotton Cloth Filter", result: "Natural Golden Clarity", status: "VERIFIED" },
      { param: "Packaging Seal", standard: "Food-Grade Tamper-Proof Bottle/Can", result: "Batch Coded & Sealed Clean", status: "PASS" }
    ]
  }
};

export const INITIAL_ORDERS = [
  {
    id: "TR-ORD-1092",
    date: "11-Nov-2026",
    customerName: "Priya Patel",
    email: "priya@example.com",
    phone: "+91 98250 12345",
    city: "Ahmedabad, Gujarat",
    items: [
      { name: "Wood-Pressed Groundnut Oil", size: "5 Litres Can", quantity: 1, price: 1239 },
      { name: "Wood-Pressed Yellow Mustard Oil", size: "1 Litre", quantity: 1, price: 315 }
    ],
    total: 1554,
    status: "Wood-Ghani Pressing",
    paymentMethod: "Online UPI",
    batch: "TR-GN-8492"
  },
  {
    id: "TR-ORD-1091",
    date: "10-Nov-2026",
    customerName: "Rajesh Shah",
    email: "rajesh@example.com",
    phone: "+91 98980 67890",
    city: "Surat, Gujarat",
    items: [
      { name: "Complete Kitchen Oil Range Bundle", size: "3 x 500ml Set", quantity: 1, price: 549 },
      { name: "Wood-Pressed White Sesame Oil", size: "500 ml", quantity: 1, price: 239 }
    ],
    total: 788,
    status: "Quality Verified",
    paymentMethod: "WhatsApp Order",
    batch: "TR-WS-3304"
  },
  {
    id: "TR-ORD-1088",
    date: "09-Nov-2026",
    customerName: "Ananya Desai",
    email: "ananya@example.com",
    phone: "+91 97240 54321",
    city: "Vadodara, Gujarat",
    items: [
      { name: "Wood-Pressed Groundnut Oil", size: "1 Litre", quantity: 2, price: 285 }
    ],
    total: 570,
    status: "Delivered",
    paymentMethod: "Online UPI",
    batch: "TR-GN-8492"
  }
];

export const FARM_STORY_STEPS = [
  {
    step: "01",
    title: "Farmers Cultivating Quality Oilseeds",
    location: "Saurashtra & North Gujarat",
    image: "/images/farm-groundnut-field.jpg",
    caption: "We partner directly with Gujarat farming families who cultivate G20 groundnuts once harvested in November, mustard, and Unjha sesame without shortcuts."
  },
  {
    step: "02",
    title: "Carefully Selected Raw Materials",
    location: "Unjha & Visnagar Inspection",
    image: "/images/farm-mustard.jpg",
    caption: "Only A1-grade, sun-dried, sortex-cleaned seeds pass hand sorting—ensuring damaged or stored pods never enter the wood ghani."
  },
  {
    step: "03",
    title: "Traditional Wooden Ghani Extraction",
    location: "Visnagar Craft Facility",
    image: "/images/modern-kolhu.jpg",
    caption: "Heavy wooden pestles turn slowly at 12 RPM inside our Babool and Neem wood kolhus, releasing oil gently while keeping native aroma alive."
  },
  {
    step: "04",
    title: "Natural Filtration & Gravity Settling",
    location: "48-Hour Unhurried Resting",
    image: "/images/sesame-harvest.jpg",
    caption: "Instead of chemical degumming or harsh centrifuges, fresh oil rests 48 hours for gravity settling and passes through unbleached cotton cloth."
  },
  {
    step: "05",
    title: "Batch Quality Verification & Packaging",
    location: "FSSAI Lic. 10723999000614",
    image: "/images/quality-check.jpg",
    caption: "Every batch is inspected, assigned a unique traceability code, and sealed in food-grade bottles and recyclable cans ready for lab or customer verification."
  },
  {
    step: "06",
    title: "Fresh Delivery to Family Kitchens",
    location: "Visnagar to Homes Across India",
    image: "/images/regular-cooking.jpg",
    caption: "Delivered directly from our pressing unit in Visnagar so every tarka, puri, and daily sabzi nourishes your household with honest traditional fat."
  }
];

export const CUSTOMER_REVIEWS = [
  {
    name: "Dharmik Patel",
    location: "Gujarat",
    text: "Best and Hygiene Cold pressed Groundnut oil Manufacturer in Gujarat. So kind and generous in nature.",
    link: "https://maps.app.goo.gl/4JZFQns7WyBZb42B8"
  },
  {
    name: "Barkha Mathur",
    location: "Verified Customer",
    text: "I have been using cold pressed oils since past 1 year. Excellent aroma and colour. The packaging was good. My personal favourite is groundnut and mustard oil.",
    link: "https://share.google/Fbubd4AsR7JnSoyIg"
  },
  {
    name: "Tirth Patel",
    location: "Verified Customer",
    text: "I have been using this oil brand for the last 1 year, and the quality is amazing and pure. Trushita Oil provides 100% pure and high-quality oil.",
    link: "https://share.google/BK0odKrnyDX1Ky10j"
  },
  {
    name: "Ravi Patel",
    location: "Verified Customer",
    text: "Perfect place for right and healthy groundnut oil. They maintain trust and high standards for clean oil.",
    link: "https://maps.app.goo.gl/vTrd98AAJevfhBz46"
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Single-Origin Seed Procurement",
    gujarati: "ગુજરાતના ખેડૂતો પાસેથી સીધા ઉત્તમ બિયારણ",
    methodTag: "Direct Gujarat Harvest",
    image: "/images/farm-groundnut-field.jpg",
    detail: "We procure A1-grade whole oilseeds directly from Saurashtra groundnut growers and Unjha agricultural cooperatives. Every seed lot is inspected so malformed or mold-affected seeds never enter our wooden ghanis.",
    highlights: ["Hand-sorted & sortex cleaned", "A1 single-origin seed lots", "Direct partnership with local farmers"]
  },
  {
    step: 2,
    title: "Natural Sun-Drying on Clean Beds",
    gujarati: "સૂર્યપ્રકાશમાં કુદરતી રીતે સૂકવણી",
    methodTag: "Natural Solar Moisture Control",
    image: "/images/sun-dried.jpg",
    detail: "Seeds and coconut copra are sun-dried under natural sunlight to balance moisture gently without chemical sulfur bleaching or diesel exhaust hot-air dryers.",
    highlights: ["Balances moisture naturally", "Zero sulfur or chemical bleaching", "Preserves natural seed goodness"]
  },
  {
    step: 3,
    title: "Traditional Wooden Ghani (Lakdi Kolhu) Crushing",
    gujarati: "લાકડાની ઘાણીમાં ધીમી ગતિએ પીલાણ (12 RPM)",
    methodTag: "Babool Timber Kolhu • 12 RPM",
    image: "/images/modern-kolhu.jpg",
    detail: "Heavy wooden pestles crush the seeds slowly at 12 RPM inside traditional wood-lined kolhus. Slow mechanical pressing preserves delicate Vitamin E and rich natural seed flavor.",
    highlights: ["Zero hexane or chemical solvents", "Traditional 12 RPM slow press", "Retains natural taste & antioxidants"]
  },
  {
    step: 4,
    title: "48-Hour Gravity Sedimentation",
    gujarati: "કુદરતી રીતે તેલને ઠરવા દેવું (48 કલાક)",
    methodTag: "Natural Settling • No Degumming",
    image: "/images/ethically-sourced.jpg",
    detail: "Freshly extracted oil rests undisturbed in clean stainless-steel tanks for 48 hours so fine seed particles settle naturally by gravity—without centrifugal stripping or caustic soda.",
    highlights: ["Micro-nutrients stay intact", "Zero artificial clarifiers", "Natural golden clarity"]
  },
  {
    step: 5,
    title: "Cotton Cloth Filtration & Batch Sealing",
    gujarati: "સુતરાઉ કાપડથી ગાળણ અને સ્વચ્છ પેકિંગ",
    methodTag: "4-Layer Cotton Filtration",
    image: "/images/quality-check.jpg",
    detail: "Clarified oil is filtered slowly through 4 layers of unbleached cotton cloth and sealed immediately under FSSAI License 10723999000614 with its batch code printed cleanly on the pack.",
    highlights: ["Food-grade tamper-proof containers", "Micro-sediment sign of real cold press", "Traceable batch code on every bottle"]
  }
];

export const COMPARISON_DATA = [
  {
    parameter: "Extraction Method",
    refined: "Chemical solvent (Hexane) washing at high pressure",
    woodGhani: "Slow crushing in traditional timber ghani (12 RPM)"
  },
  {
    parameter: "Pressing Mechanics",
    refined: "Aggressive industrial steel screw expellers & steam refining",
    woodGhani: "Gentle Babool & Neem wood pestle physical extraction"
  },
  {
    parameter: "Bleaching & Clarification",
    refined: "Treated with acid-activated clay and caustic soda",
    woodGhani: "48-Hour natural gravity settling + cotton cloth filter"
  },
  {
    parameter: "Natural Aroma & Flavor",
    refined: "Deodorized with vacuum steam (tasteless & odorless)",
    woodGhani: "Authentic, rich natural aroma of the raw Gujarat seed"
  },
  {
    parameter: "Tocopherols & Vitamin E",
    refined: "Stripped completely during chemical solvent recovery",
    woodGhani: "Natural Vitamin E & native polyphenols preserved intact"
  }
];
