/**
 * Trushita Natural Food - Central Data Catalog
 * Zero chamber/extraction temperature metrics anywhere.
 */

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
    shortDesc: "Single-origin Saurashtra peanuts crushed in traditional wood ghani. Rich, nutty aroma with natural vitamin E.",
    seedOrigin: "Saurashtra & Visnagar, Gujarat",
    culinaryUse: "Everyday Sabzi, Tadka & Deep Frying",
    pressingMethod: "Babool Wood Kolhu (12 RPM)",
    filtration: "4-Layer Cotton Cloth",
    nutritionTag: "High MUFA • Vitamin E",
    featured: true,
    sizes: [
      { size: "500 ml", price: 210, originalPrice: 240, savings: "12% OFF", perLiter: "₹420/L" },
      { size: "1 Litre", price: 395, originalPrice: 450, savings: "12% OFF", perLiter: "₹395/L", default: true },
      { size: "5 Litres Tin", price: 1850, originalPrice: 2150, savings: "14% OFF", perLiter: "₹370/L" }
    ],
    nutrition: {
      mufa: "51.8g",
      pufa: "32.2g",
      saturated: "16.0g",
      vitaminE: "18.4 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "No chemical solvents or hexane extraction",
      "Retains natural peanut resveratrol & tocopherols",
      "Naturally stable for everyday Indian cooking",
      "Zero trans fats and zero foaming in hot pans"
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
    shortDesc: "Sweeter and milder than black mustard. Crushed slowly to preserve natural Sinigrin and essential Omega-3.",
    seedOrigin: "North Gujarat & Rajasthan border",
    culinaryUse: "Dal Tadka, Curries & Pickling",
    pressingMethod: "Slow Wood Ghani Press",
    filtration: "48-Hr Gravity Settling",
    nutritionTag: "Rich in Omega-3 • Sinigrin",
    featured: true,
    sizes: [
      { size: "500 ml", price: 190, originalPrice: 220, savings: "14% OFF", perLiter: "₹380/L" },
      { size: "1 Litre", price: 360, originalPrice: 410, savings: "12% OFF", perLiter: "₹360/L", default: true },
      { size: "5 Litres Tin", price: 1690, originalPrice: 1980, savings: "15% OFF", perLiter: "₹338/L" }
    ],
    nutrition: {
      mufa: "60.4g",
      pufa: "28.1g",
      saturated: "11.5g",
      vitaminE: "14.2 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Milder, appetizing aroma suited for dal tadka and marinades",
      "Abundant natural allyl isothiocyanate (antibacterial)",
      "Non-irritating to eyes compared to chemical-spiked oils",
      "Ideal preservative for traditional homemade pickles"
    ]
  },
  {
    id: "white-sesame",
    name: "Wood-Pressed White Sesame Oil",
    hindiName: "સફેદ તલનું શુદ્ધ તેલ (Til Tel)",
    category: "wellness",
    tag: "Ayurvedic Gold",
    rating: 5.0,
    reviewsCount: 142,
    icon: "🌱",
    shortDesc: "Queen of edible oils. Rich in Sesamin & Sesamolin antioxidants, perfect for therapeutic tempering and wellness.",
    seedOrigin: "Unjha Mandi certified local sesame",
    culinaryUse: "Sauteing, Drizzling & Oil Pulling",
    pressingMethod: "Wooden Pestle Expeller",
    filtration: "Virgin Cotton Cloth",
    nutritionTag: "Sesamin • Calcium Co-factor",
    featured: true,
    sizes: [
      { size: "500 ml", price: 290, originalPrice: 330, savings: "12% OFF", perLiter: "₹580/L" },
      { size: "1 Litre", price: 540, originalPrice: 620, savings: "13% OFF", perLiter: "₹540/L", default: true },
      { size: "5 Litres Tin", price: 2550, originalPrice: 2950, savings: "14% OFF", perLiter: "₹510/L" }
    ],
    nutrition: {
      mufa: "40.5g",
      pufa: "42.0g",
      saturated: "17.5g",
      vitaminE: "16.1 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Natural Sesamol resists rancidity without preservatives",
      "Traditional choice for Ayurvedic oil pulling (Kavala)",
      "High calcium cofactor content for bone health",
      "Delicious subtle earthy aroma in South & Western Indian dishes"
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
    shortDesc: "Authentic strong Kacchi Ghani kick with tear-inducing purity. The gold standard for regional curry cooking.",
    seedOrigin: "Mehsana Farming Cooperatives",
    culinaryUse: "Authentic Curries, Tadka & Pickles",
    pressingMethod: "Timber Kolhu Crushing",
    filtration: "Natural Sedimentation",
    nutritionTag: "Raw Sinigrin • High Pungency",
    featured: false,
    sizes: [
      { size: "500 ml", price: 180, originalPrice: 210, savings: "14% OFF", perLiter: "₹360/L" },
      { size: "1 Litre", price: 340, originalPrice: 390, savings: "13% OFF", perLiter: "₹340/L", default: true },
      { size: "5 Litres Tin", price: 1590, originalPrice: 1890, savings: "16% OFF", perLiter: "₹318/L" }
    ],
    nutrition: {
      mufa: "62.0g",
      pufa: "26.5g",
      saturated: "11.5g",
      vitaminE: "15.0 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Classic strong pungency from pure allyl isothiocyanate",
      "Ideal for winter wellness & traditional massage remedies",
      "Heart-friendly ratio of Omega-3 to Omega-6 fatty acids",
      "Natural anti-fungal barrier for pickled vegetables"
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
    shortDesc: "Made from sun-dried sulfur-free copra. Water-clear when liquid, pure snow-white when solidified. Rich in Lauric Acid.",
    seedOrigin: "Coastal Farm Sourcing",
    culinaryUse: "Baking, Salads, Keto & Skin/Hair",
    pressingMethod: "Raw Copra Wood Press",
    filtration: "Micro Cotton Filter",
    nutritionTag: "50%+ Lauric Acid • MCTs",
    featured: false,
    sizes: [
      { size: "500 ml", price: 240, originalPrice: 280, savings: "14% OFF", perLiter: "₹480/L" },
      { size: "1 Litre", price: 460, originalPrice: 520, savings: "11% OFF", perLiter: "₹460/L", default: true }
    ],
    nutrition: {
      mufa: "6.0g",
      pufa: "2.0g",
      saturated: "92.0g (MCTs)",
      vitaminE: "2.5 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "50%+ Lauric Acid converts to beneficial Monolaurin in body",
      "Rich in Medium Chain Triglycerides (MCTs) for energy",
      "Multi-purpose: keto cooking, deep conditioning, and baby massage",
      "Completely unrefined, zero sulfur bleach"
    ]
  },
  {
    id: "flaxseed",
    name: "Pure Virgin Flaxseed Oil",
    hindiName: "અળસીનું તેલ (Alsi / Linseed Oil)",
    category: "wellness",
    tag: "Omega-3 King",
    rating: 4.8,
    reviewsCount: 94,
    icon: "🌾",
    shortDesc: "Plant-based Omega-3 (ALA) powerhouse. Bottled in dark UV-protected glass to preserve delicate essential fatty acids.",
    seedOrigin: "Gujarat Certified Organic Growers",
    culinaryUse: "Raw Salad Dressing & Smoothies",
    pressingMethod: "Gentle Timber Ghani",
    filtration: "Unrefined Gravity Filter",
    nutritionTag: "55% Alpha-Linolenic (ALA)",
    featured: false,
    sizes: [
      { size: "250 ml", price: 230, originalPrice: 270, savings: "15% OFF", perLiter: "₹920/L" },
      { size: "500 ml", price: 420, originalPrice: 490, savings: "14% OFF", perLiter: "₹840/L", default: true }
    ],
    nutrition: {
      mufa: "18.0g",
      pufa: "73.0g (Omega-3 ALA: 55g)",
      saturated: "9.0g",
      vitaminE: "19.5 mg",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Over 55% Alpha-Linolenic Acid (ALA) plant Omega-3",
      "Supports cardiovascular wellness and reduced inflammation",
      "Helps maintain joint flexibility and radiant skin",
      "Take 1 tablespoon directly or mix into warm rotis / salads"
    ]
  },
  {
    id: "taster-kit",
    name: "4-Oil Kitchen Discovery Box",
    hindiName: "ચાર શુદ્ધ તેલનું ટેસ્ટર બોક્સ (Sampler Set)",
    category: "bundles",
    tag: "Trial Pack",
    rating: 5.0,
    reviewsCount: 412,
    icon: "🎁",
    shortDesc: "Experience the real aroma difference! Includes 100ml bottles of Groundnut, Yellow Mustard, White Sesame, and Virgin Coconut Oil.",
    seedOrigin: "Curated Farm Selection",
    culinaryUse: "Multi-Purpose Kitchen Sampler",
    pressingMethod: "Traditional Wood Ghani",
    filtration: "100% Unrefined Natural",
    nutritionTag: "4-In-1 Discovery Set",
    featured: false,
    sizes: [
      { size: "4 x 100ml Set", price: 299, originalPrice: 399, savings: "25% OFF", perLiter: "Trial Box", default: true }
    ],
    nutrition: {
      mufa: "Varies",
      pufa: "Varies",
      saturated: "Varies",
      vitaminE: "High",
      transFat: "0g",
      cholesterol: "0mg"
    },
    benefits: [
      "Compare genuine wood-pressed fragrance with refined oil at home",
      "Test all 4 varieties before ordering large monthly tins",
      "Comes with printed Oil Pairing & Cooking Guide",
      "Special first-time customer introductory pricing"
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

export const INITIAL_BATCH_DATABASE = {
  "TR-GN-8492": {
    batchNumber: "TR-GN-8492",
    oilName: "Wood-Pressed Groundnut Oil",
    crushDate: "04-Nov-2026",
    testingDate: "06-Nov-2026",
    expiryDate: "03-Aug-2027",
    nablLab: "Vardhman Food Testing Laboratories (NABL ISO/IEC 17025 TC-5821)",
    seedSource: "Babra Cluster, Amreli & Visnagar Gujarat",
    status: "PASS - 100% PURE & UNADULTERATED",
    parameters: [
      { param: "Free Fatty Acids (FFA as Oleic Acid)", standard: "Max 1.5%", result: "0.42%", status: "PASSED (Superior)" },
      { param: "Moisture & Insoluble Impurities", standard: "Max 0.25%", result: "0.08%", status: "PASSED" },
      { param: "Aflatoxin Toxins (B1, B2, G1, G2)", standard: "Max 15.0 ppb", result: "NOT DETECTED (<1.0 ppb)", status: "PASSED (Safe)" },
      { param: "Mineral Oil / Argemone Test", standard: "Negative", result: "NEGATIVE (Nil)", status: "PASSED (Pure)" },
      { param: "Heavy Metals (Lead, Arsenic)", standard: "Below FSSAI Limit", result: "Below Detection Limit", status: "PASSED" },
      { param: "Hexane Solvent Residue", standard: "Nil", result: "0.00 ppm (Zero)", status: "PASSED" }
    ]
  },
  "TR-YM-5510": {
    batchNumber: "TR-YM-5510",
    oilName: "Wood-Pressed Yellow Mustard Oil",
    crushDate: "02-Nov-2026",
    testingDate: "05-Nov-2026",
    expiryDate: "01-Nov-2027",
    nablLab: "National Agri-Food Quality Laboratory (NABL Accredited)",
    seedSource: "Deesa & North Mehsana Farmers Group",
    status: "PASS - 100% UNADULTERATED",
    parameters: [
      { param: "Free Fatty Acids (FFA)", standard: "Max 1.5%", result: "0.38%", status: "PASSED" },
      { param: "Natural Allyl Isothiocyanate", standard: "Min 0.25%", result: "0.48% (Rich)", status: "PASSED" },
      { param: "Synthetic Pungency Agents", standard: "Negative", result: "NEGATIVE (100% Natural)", status: "PASSED" },
      { param: "Argemone Oil Check", standard: "Negative", result: "NEGATIVE", status: "PASSED" },
      { param: "Hexane Solvent Residue", standard: "Nil", result: "0.00 ppm", status: "PASSED" }
    ]
  },
  "TR-WS-3304": {
    batchNumber: "TR-WS-3304",
    oilName: "Wood-Pressed White Sesame Oil",
    crushDate: "28-Oct-2026",
    testingDate: "30-Oct-2026",
    expiryDate: "27-Oct-2027",
    nablLab: "Vardhman Food Testing Laboratories (NABL Accredited)",
    seedSource: "Unjha Mandi Single-Variety White Til",
    status: "PASS - HIGH ANTIOXIDANT GRADE",
    parameters: [
      { param: "Sesamolin & Sesamin Content", standard: "Natural Presence", result: "0.92% (High)", status: "PASSED" },
      { param: "Acid Value", standard: "Max 4.0", result: "1.12", status: "PASSED" },
      { param: "Adulteration with Palm/Cottonseed", standard: "Negative", result: "NEGATIVE", status: "PASSED" },
      { param: "Residual Hexane", standard: "Nil", result: "0.00 ppm", status: "PASSED" }
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
      { name: "Wood-Pressed Groundnut Oil", size: "5 Litres Tin", quantity: 1, price: 1850 },
      { name: "Wood-Pressed Yellow Mustard Oil", size: "1 Litre", quantity: 1, price: 360 }
    ],
    total: 2210,
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
      { name: "4-Oil Kitchen Discovery Box", size: "4 x 100ml Set", quantity: 1, price: 299 },
      { name: "Wood-Pressed White Sesame Oil", size: "500 ml", quantity: 1, price: 290 }
    ],
    total: 589,
    status: "Quality NABL Tested",
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
      { name: "Wood-Pressed Groundnut Oil", size: "1 Litre", quantity: 2, price: 395 }
    ],
    total: 790,
    status: "Delivered",
    paymentMethod: "Online UPI",
    batch: "TR-GN-8492"
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Single-Origin Seed Procurement",
    gujarati: "ગુજરાતના ખેડૂતો પાસેથી સીધા ઉત્તમ બિયારણ",
    methodTag: "Direct Gujarat Harvest",
    detail: "We procure non-hybrid, chemical-free oilseeds directly from Saurashtra groundnut farmers and the Unjha agricultural market. Every lot is hand-inspected so no rotten or fungus-affected seeds enter the mill.",
    highlights: ["Hand-sorted for seed density", "Zero aflatoxin guarantee", "Fair trade pricing to local farmers"]
  },
  {
    step: 2,
    title: "Natural Sun-Drying on Cloth Beds",
    gujarati: "સૂર્યપ્રકાશમાં કુદરતી રીતે સૂકવણી",
    methodTag: "Natural Solar Moisture Control",
    detail: "Seeds are spread on clean cotton tarpaulins under natural Gujarat sunlight to reduce residual moisture gently. We never use industrial diesel hot-air dryers that compromise fragile seed lipids.",
    highlights: ["Reduces moisture to optimal < 6%", "Naturally cleanses seed outer coat", "Preserves delicate seed enzymes"]
  },
  {
    step: 3,
    title: "Traditional Wooden Ghani (Lakdi Kolhu) Crushing",
    gujarati: "લાકડાની ઘાણીમાં ધીમી ગતિએ પીલાણ (12 RPM)",
    methodTag: "Babool Timber Kolhu • 12 RPM",
    detail: "Heavy Neem and Babool wooden pestles crush the seeds at ultra-low revolutions (12 RPM). Unlike harsh industrial steel screw expellers, natural timber presses gently, preserving authentic aroma and natural antioxidants.",
    highlights: ["Pure slow mechanical crushing", "Neem wood imparts natural purity", "Retains 100% natural aroma & tocopherols"]
  },
  {
    step: 4,
    title: "Gravity Sedimentation (Zero Centrifuge)",
    gujarati: "કુદરતી રીતે તેલને ઠરવા દેવું (48 કલાક)",
    methodTag: "48-Hour Natural Settling",
    detail: "Freshly pressed oil rests undisturbed in food-grade stainless steel tanks for 48 hours. Micro seed particles settle naturally by gravity. No chemical coagulants, degummers, or artificial clarifiers are ever added.",
    highlights: ["Preserves high micronutrient density", "No synthetic degumming agents", "Rich golden clarity without stripping fats"]
  },
  {
    step: 5,
    title: "Cotton Cloth Filtration & Tin/Glass Bottling",
    gujarati: "સુતરાઉ કાપડથી ગાળણ અને સ્વચ્છ પેકિંગ",
    methodTag: "4-Layer Cotton Filtration",
    detail: "The clarified oil passes slowly through 4 layers of unbleached virgin cotton cloth. It is immediately sealed in food-grade tin canisters and dark glass bottles with an individual batch verification code.",
    highlights: ["Food-grade certified containers", "Zero microplastic contamination", "Tamper-proof seal with NABL batch ID"]
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
    woodGhani: "100% natural Vitamin E & Polyphenols preserved intact"
  }
];
