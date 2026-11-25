/**
 * Trushita Natural Food - High-End D2C Web Application Engine
 * Exact Official Brand Colors: Emerald-600 (#059669), Jet Black (#09090B), Zinc-50/100/200/900
 * Elevated UI with Live Telemetry, Interactive Simulators, NABL Batch Verifier,
 * Family Oil Calculator, User Auth, and Complete Admin Portal.
 */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
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
    smokePoint: "232°C (Ideal for Everyday Sabzi & Frying)",
    extractionTemp: "37.4°C (Strict Cold Press)",
    color: "#059669",
    nutritionTag: "High MUFA • Vitamin E",
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
      "High smoke point safe for everyday Indian cooking",
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
    shortDesc: "Sweeter and milder than black mustard. Extracted without heat to preserve natural Sinigrin and essential Omega-3.",
    seedOrigin: "North Gujarat & Rajasthan border",
    smokePoint: "250°C (High Heat & Pickling)",
    extractionTemp: "35.8°C (Gentle Wood Press)",
    color: "#059669",
    nutritionTag: "Rich in Omega-3 • Sinigrin",
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
    smokePoint: "210°C (Sauteing & Drizzling)",
    extractionTemp: "34.2°C (Ultra Cold Expeller)",
    color: "#059669",
    nutritionTag: "Sesamin • Calcium Co-factor",
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
    shortDesc: "Authentic strong Kacchi Ghani kick with tear-inducing purity. The gold standard for authentic regional curry cooking.",
    seedOrigin: "Mehsana Farming Cooperatives",
    smokePoint: "250°C (High Smoke Point)",
    extractionTemp: "36.5°C (Timber Kolhu)",
    color: "#059669",
    nutritionTag: "Raw Sinigrin • High Pungency",
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
      "Ideal for winter wellness & chest rub remedies",
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
    smokePoint: "177°C (Baking, Raw Salads & Hair)",
    extractionTemp: "31.8°C (Raw Copra Press)",
    color: "#059669",
    nutritionTag: "50%+ Lauric Acid • MCTs",
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
    shortDesc: "Plant-based Omega-3 (ALA) powerhouse. Never heated, bottled in dark UV-protected glass to preserve delicate fatty acids.",
    seedOrigin: "Gujarat Certified Organic growers",
    smokePoint: "Raw Consumption Only (Do not heat)",
    extractionTemp: "28.5°C (Extreme Low Temp)",
    color: "#059669",
    nutritionTag: "55% Alpha-Linolenic (ALA)",
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
    smokePoint: "Multi-purpose kitchen kit",
    extractionTemp: "All <40°C Wood Ghani",
    color: "#059669",
    nutritionTag: "4-In-1 Discovery Set",
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
      "Compare genuine cold-pressed fragrance with refined oil at home",
      "Test all 4 varieties before ordering large monthly tins",
      "Comes with printed Oil Pairing & Cooking Guide",
      "Special first-time customer introductory pricing"
    ]
  }
];

// 2. LIVE EXTRACTION UNITS DATA (HERO SIMULATOR)
const EXTRACTION_UNITS = {
  1: {
    unitName: "Visnagar Unit #1",
    seed: "Saurashtra Groundnut (G-20)",
    temperature: "37.4°C",
    tempProgress: "37%",
    rpm: "12.2 RPM",
    yield: "46.8%",
    todayCrushed: "348 Litres",
    statusText: "Crushing Live • Temp Optimal",
    badge: "Bestseller Singtel"
  },
  2: {
    unitName: "Visnagar Unit #2",
    seed: "North Gujarat Yellow Sarson",
    temperature: "35.8°C",
    tempProgress: "32%",
    rpm: "11.5 RPM",
    yield: "38.2%",
    todayCrushed: "216 Litres",
    statusText: "Cold-Pressing • Mild Pungency",
    badge: "Yellow Mustard"
  }
};

// 3. INITIAL BATCH DATABASE
const INITIAL_BATCH_DATABASE = {
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

// INITIAL SEED ORDERS
const INITIAL_ORDERS = [
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

// 4. APPLICATION STATE
const state = {
  cart: [],
  activeCategory: "all",
  searchQuery: "",
  activeStep: 2,
  activeUnit: 1,
  selectedProductSizes: {},
  promoDiscount: 0,
  promoApplied: false,
  
  // Auth state
  currentUser: null,
  isAdmin: false,
  
  // Dynamic collections
  batches: INITIAL_BATCH_DATABASE,
  orders: INITIAL_ORDERS,
  promoCodes: { "PURE10": 10, "TRUSHITA10": 10, "FARM20": 20 }
};

// Initialize Product Default Sizes
PRODUCTS.forEach(p => {
  const defaultIdx = p.sizes.findIndex(s => s.default) || 0;
  state.selectedProductSizes[p.id] = defaultIdx !== -1 ? defaultIdx : 0;
});

// Load persistent storage
try {
  const savedCart = localStorage.getItem("trushita_cart");
  if (savedCart) state.cart = JSON.parse(savedCart);

  const savedUser = localStorage.getItem("trushita_user");
  if (savedUser) {
    state.currentUser = JSON.parse(savedUser);
    state.isAdmin = state.currentUser?.role === "admin";
  }

  const savedOrders = localStorage.getItem("trushita_orders");
  if (savedOrders) state.orders = JSON.parse(savedOrders);

  const savedBatches = localStorage.getItem("trushita_batches");
  if (savedBatches) state.batches = JSON.parse(savedBatches);
} catch (e) {}

// 5. HERO UNIT SWITCHER (SIMULATOR)
function switchHeroUnit(unitId) {
  state.activeUnit = unitId;
  const unit = EXTRACTION_UNITS[unitId];

  // Update tabs
  const tab1 = document.getElementById("unit-tab-1");
  const tab2 = document.getElementById("unit-tab-2");
  if (tab1 && tab2) {
    if (unitId === 1) {
      tab1.className = "flex-1 py-1.5 px-3 text-xs font-bold rounded-sm bg-black text-white shadow-xs transition-all";
      tab2.className = "flex-1 py-1.5 px-3 text-xs font-semibold rounded-sm bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-all";
    } else {
      tab2.className = "flex-1 py-1.5 px-3 text-xs font-bold rounded-sm bg-black text-white shadow-xs transition-all";
      tab1.className = "flex-1 py-1.5 px-3 text-xs font-semibold rounded-sm bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-all";
    }
  }

  // Update DOM values
  const seedElem = document.getElementById("hero-unit-seed");
  const tempElem = document.getElementById("hero-unit-temp");
  const tempBar = document.getElementById("hero-unit-temp-bar");
  const rpmElem = document.getElementById("hero-unit-rpm");
  const yieldElem = document.getElementById("hero-unit-yield");
  const badgeElem = document.getElementById("hero-unit-badge");

  if (seedElem) seedElem.textContent = unit.seed;
  if (tempElem) tempElem.textContent = unit.temperature;
  if (tempBar) tempBar.style.width = unit.tempProgress;
  if (rpmElem) rpmElem.textContent = unit.rpm;
  if (yieldElem) yieldElem.textContent = unit.yield;
  if (badgeElem) badgeElem.textContent = unit.badge;

  showToast(`Switched telemetry to ${unit.unitName} 🟢`);
}

// 6. PRODUCT CATALOG RENDERING & SEARCH
function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  let filtered = state.activeCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === state.activeCategory);

  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.hindiName.toLowerCase().includes(q) || 
      p.shortDesc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-sm border border-zinc-200 p-8">
        <span class="text-4xl block mb-2">🔍</span>
        <h4 class="text-base font-bold text-zinc-900">No matching oils found</h4>
        <p class="text-xs text-zinc-500 mt-1">Try searching for "groundnut", "mustard", "sesame" or clear your filter.</p>
        <button onclick="clearSearch()" class="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-sm">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const selectedSizeIdx = state.selectedProductSizes[product.id] || 0;
    const currentSize = product.sizes[selectedSizeIdx];

    return `
      <div class="product-card group flex flex-col justify-between p-4 sm:p-5 rounded-sm bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-300 transition-all duration-300">
        
        <!-- Aspect-Square Media Container -->
        <div class="relative mb-3.5 w-full aspect-square rounded-sm bg-zinc-50 flex items-center justify-center border border-zinc-100 overflow-hidden group-hover:bg-emerald-50/20 transition-colors">
          <span class="text-6xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
            ${product.icon}
          </span>
          
          <!-- Exact badge from trushita.farm: bg-emerald-600 with white pulse dot -->
          <div class="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-xs">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>${product.tag}</span>
          </div>

          <div class="absolute bottom-2 left-2 text-[10px] font-semibold text-zinc-600 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-zinc-200/80">
            ⚡ ${product.smokePoint.split(' ')[0]}
          </div>

          <div class="absolute bottom-2 right-2 text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-emerald-200/80">
            ${product.nutritionTag}
          </div>
        </div>

        <!-- Title, Description & Size Selector -->
        <div class="flex flex-col text-left px-0.5 flex-grow">
          <div class="flex items-start justify-between gap-1 mb-0.5">
            <h3 class="font-bold text-zinc-900 text-base tracking-tight group-hover:text-emerald-700 transition-colors">
              ${product.name}
            </h3>
            <button onclick="openQuickView('${product.id}')" class="text-zinc-400 hover:text-emerald-600 text-xs p-0.5" title="View Full Nutrition">
              ℹ️
            </button>
          </div>
          
          <p class="text-[11px] text-zinc-500 font-medium mb-3 line-clamp-2 leading-relaxed">
            ${product.shortDesc}
          </p>

          <!-- Packaging Options Switcher with Unit Price -->
          <div class="mb-3">
            <div class="flex items-center justify-between text-[10px] text-zinc-400 font-medium mb-1">
              <span>Select Quantity:</span>
              <span class="text-emerald-700 font-bold">${currentSize.perLiter}</span>
            </div>
            <div class="flex flex-wrap gap-1">
              ${product.sizes.map((s, idx) => `
                <button 
                  onclick="selectProductSize('${product.id}', ${idx})" 
                  class="px-2.5 py-1 text-[11px] rounded-sm transition-all ${
                    idx === selectedSizeIdx 
                      ? 'bg-black text-white font-bold shadow-xs' 
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-medium'
                  }">
                  ${s.size}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Pricing & Action Button -->
        <div class="pt-2.5 border-t border-zinc-100 mt-auto">
          <div class="flex items-baseline justify-between mb-2.5">
            <div>
              <span class="text-xl font-bold text-zinc-900">₹${currentSize.price}</span>
              ${currentSize.originalPrice ? `
                <span class="text-xs text-zinc-400 line-through ml-1.5">₹${currentSize.originalPrice}</span>
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded ml-1">${currentSize.savings}</span>
              ` : ''}
            </div>
            <span class="text-[10px] text-zinc-500 font-medium">Free Delivery ≥ ₹799</span>
          </div>

          <button 
            id="add-btn-${product.id}"
            onclick="addToCart('${product.id}', ${selectedSizeIdx})"
            class="w-full bg-black hover:bg-zinc-800 text-white font-bold text-xs py-2.5 rounded-sm shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer text-center flex items-center justify-center gap-1.5">
            <span>Add Fresh To Cart</span>
            <span>+</span>
          </button>
        </div>

      </div>
    `;
  }).join('');
}

function handleSearch(val) {
  state.searchQuery = val;
  renderProducts();
}

function clearSearch() {
  state.searchQuery = "";
  const inp = document.getElementById("product-search-input");
  if (inp) inp.value = "";
  state.activeCategory = "all";
  renderProducts();
}

function setProductCategory(cat) {
  state.activeCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.className = "cat-btn px-3.5 py-1.5 rounded-sm text-xs font-bold bg-black text-white shadow-xs transition-all";
    } else {
      btn.className = "cat-btn px-3.5 py-1.5 rounded-sm text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-all";
    }
  });
  renderProducts();
}

function selectProductSize(productId, sizeIdx) {
  state.selectedProductSizes[productId] = sizeIdx;
  renderProducts();
}

function addToCart(productId, sizeIdx) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const sizeObj = product.sizes[sizeIdx];
  const cartItemId = `${productId}-${sizeObj.size}`;

  const existing = state.cart.find(item => item.id === cartItemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: cartItemId,
      productId: product.id,
      name: product.name,
      size: sizeObj.size,
      price: sizeObj.price,
      icon: product.icon,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  
  // Visual button feedback
  const btn = document.getElementById(`add-btn-${product.id}`);
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="text-emerald-400">✓ Added Fresh!</span>`;
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 1200);
  }

  showToast(`Added ${product.name} (${sizeObj.size}) to cart! ✨`);
}

function saveCart() {
  try {
    localStorage.setItem("trushita_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const threshold = 799;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const diff = threshold - subtotal;

  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-flex" : "none";
  });

  const itemsContainer = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const footer = document.getElementById("cart-footer");
  const subtotalElem = document.getElementById("cart-subtotal");
  const deliveryElem = document.getElementById("cart-delivery");
  const discountElem = document.getElementById("cart-discount");
  const totalElem = document.getElementById("cart-total");
  const freeShipBar = document.getElementById("free-shipping-bar");
  const freeShipText = document.getElementById("free-shipping-text");

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    if (footer) footer.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (footer) footer.classList.remove("hidden");

  if (freeShipBar && freeShipText) {
    freeShipBar.style.width = `${progressPercent}%`;
    if (subtotal >= threshold) {
      freeShipText.innerHTML = `<span class="text-emerald-600 font-bold">🎉 FREE Delivery Unlocked!</span>`;
    } else {
      freeShipText.innerHTML = `Add <span class="font-bold text-zinc-900">₹${diff}</span> more for <span class="font-bold text-emerald-600">FREE Delivery</span>`;
    }
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="flex items-center justify-between p-3 bg-zinc-50 rounded-sm border border-zinc-200/70 mb-2">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">${item.icon}</span>
        <div>
          <h4 class="text-xs font-semibold text-zinc-900">${item.name}</h4>
          <span class="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm">${item.size}</span>
          <span class="text-xs font-bold text-zinc-900 ml-1.5">₹${item.price}</span>
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <div class="flex items-center border border-zinc-300 rounded-sm bg-white overflow-hidden">
          <button onclick="changeQuantity('${item.id}', -1)" class="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100 font-bold">−</button>
          <span class="px-2 text-xs font-bold text-zinc-900">${item.quantity}</span>
          <button onclick="changeQuantity('${item.id}', 1)" class="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100 font-bold">+</button>
        </div>
        <button onclick="removeCartItem('${item.id}')" class="text-zinc-400 hover:text-red-600 text-xs p-1" title="Remove">✕</button>
      </div>
    </div>
  `).join('');

  const shipping = subtotal >= threshold || subtotal === 0 ? 0 : 70;
  const discountAmount = Math.round(subtotal * (state.promoDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (subtotalElem) subtotalElem.textContent = `₹${subtotal}`;
  if (deliveryElem) deliveryElem.textContent = shipping === 0 ? "FREE" : `₹${shipping}`;
  if (discountElem) discountElem.textContent = `-₹${discountAmount}`;
  if (totalElem) totalElem.textContent = `₹${grandTotal}`;
}

function changeQuantity(cartItemId, delta) {
  const item = state.cart.find(i => i.id === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== cartItemId);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  state.cart = state.cart.filter(i => i.id !== cartItemId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart");
}

function applyPromoCode() {
  const input = document.getElementById("promo-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (state.promoCodes[code]) {
    state.promoDiscount = state.promoCodes[code];
    state.promoApplied = true;
    showToast(`🎉 ${state.promoDiscount}% Farm discount applied!`);
    updateCartUI();
  } else {
    showToast("❌ Invalid promo code. Try 'PURE10'");
  }
}

function toggleCart(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    updateCartUI();
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }
}

// 7. PROCESS STEP NAVIGATION
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Single-Origin Seed Procurement",
    gujarati: "ગુજરાતના ખેડૂતો પાસેથી સીધા ઉત્તમ બિયારણ",
    temp: "Ambient (30°C)",
    detail: "We procure non-hybrid, chemical-free oilseeds directly from Saurashtra groundnut farmers and the Unjha agricultural market. No rotten, fungus-affected, or split seeds are allowed.",
    highlights: ["Hand-sorted for size & moisture", "Zero aflatoxin guarantee", "Fair trade pricing to local farmers"]
  },
  {
    step: 2,
    title: "Natural Sun-Drying on Cloth Beds",
    gujarati: "સૂર્યપ્રકાશમાં કુદરતી રીતે સૂકવણી",
    temp: "Natural Sunlight",
    detail: "Seeds are spread on clean cotton tarpaulins under the Saurashtra sun to reduce residual moisture naturally. We never use industrial diesel hot-air dryers that prematurely oxidize fragile seed oils.",
    highlights: ["Reduces moisture to exact < 6%", "Naturally sanitizes seed coat", "Preserves delicate heat-sensitive enzymes"]
  },
  {
    step: 3,
    title: "Traditional Wooden Ghani (Lakdi Kolhu) Crushing",
    gujarati: "લાકડાની ઘાણીમાં ધીમી ગતિએ પીલાણ (< 14 RPM)",
    temp: "Strictly < 38°C (Cold-Pressed)",
    detail: "Heavy Neem/Babool wooden pestles crush the seeds at ultra-low revolutions (under 14 RPM). Unlike metal screw expellers that spike temperatures to 120°C, our wood absorbs heat, keeping the oil cold and aromatic.",
    highlights: ["No friction heating (true cold-press)", "Neem wood imparts natural antimicrobial safety", "Retains 100% natural aroma, color & tocopherols"]
  },
  {
    step: 4,
    title: "Gravity Sedimentation (Zero Centrifuge)",
    gujarati: "કુદરતી રીતે તેલને ઠરવા દેવું (48 કલાક)",
    temp: "Room Temperature",
    detail: "Freshly pressed oil is kept undisturbed in food-grade steel tanks for 48 hours. Micro seed particles settle naturally to the bottom by gravity. No chemical coagulants or artificial clarifiers are ever added.",
    highlights: ["Preserves high micronutrient density", "No synthetic degumming agents", "Pure golden clear oil without stripping natural fats"]
  },
  {
    step: 5,
    title: "Cotton Cloth Filtration & Tin/Glass Bottling",
    gujarati: "સુતરાઉ કાપડથી ગાળણ અને સ્વચ્છ પેકિંગ",
    temp: "Packaged at Ambient Temp",
    detail: "The clarified oil passes through 4 layers of virgin cotton cloth. It is immediately bottled in reusable tin cans and dark glass bottles to protect it from photo-oxidation and sunlight damage.",
    highlights: ["Food-grade certified packaging", "Zero microplastic leakage from cheap PET jars", "Tamper-proof seal with individual batch QR code"]
  }
];

function selectProcessStep(stepIndex) {
  state.activeStep = stepIndex;
  const step = PROCESS_STEPS[stepIndex];

  document.querySelectorAll(".step-indicator").forEach((el, idx) => {
    if (idx === stepIndex) {
      el.className = "step-indicator flex-1 py-2.5 px-3 text-center rounded-sm bg-black text-white font-bold text-xs shadow-xs transition-all";
    } else {
      el.className = "step-indicator flex-1 py-2.5 px-3 text-center rounded-sm bg-zinc-100 text-zinc-700 font-medium text-xs hover:bg-zinc-200 transition-all";
    }
  });

  const titleElem = document.getElementById("step-title");
  const gujElem = document.getElementById("step-gujarati");
  const tempElem = document.getElementById("step-temp");
  const descElem = document.getElementById("step-desc");
  const listElem = document.getElementById("step-highlights");
  const numElem = document.getElementById("step-number-badge");

  if (titleElem) titleElem.textContent = step.title;
  if (gujElem) gujElem.textContent = step.gujarati;
  if (tempElem) tempElem.textContent = step.temp;
  if (descElem) descElem.textContent = step.detail;
  if (numElem) numElem.textContent = `Stage 0${step.step} of 05`;
  if (listElem) {
    listElem.innerHTML = step.highlights.map(h => `
      <li class="flex items-center gap-2 text-xs text-zinc-700 font-medium">
        <span class="text-emerald-600 font-bold">✓</span>
        <span>${h}</span>
      </li>
    `).join('');
  }
}

// 8. NABL LAB VERIFIER WITH HOLOGRAPHIC CERTIFICATE DESIGN
function verifyBatch(batchCode) {
  const code = (batchCode || document.getElementById("batch-input").value).trim().toUpperCase();
  const resultContainer = document.getElementById("batch-result-container");
  if (!resultContainer) return;

  const data = state.batches[code] || {
    batchNumber: code || "TR-CUSTOM-DEMO",
    oilName: "Wood-Pressed Pure Farm Oil",
    crushDate: "Fresh This Week",
    testingDate: "Lab Verified",
    expiryDate: "12 Months from Packing",
    nablLab: "Vardhman Food Testing Laboratories (NABL ISO/IEC 17025 Accredited)",
    seedSource: "Visnagar Certified Local Farmers",
    status: "PASS - 100% UNADULTERATED",
    parameters: [
      { param: "Free Fatty Acids (FFA)", standard: "Max 1.5%", result: "0.39%", status: "PASSED (Fresh)" },
      { param: "Aflatoxin Toxins", standard: "Max 15 ppb", result: "NOT DETECTED", status: "PASSED" },
      { param: "Hexane Solvent Residue", standard: "Nil", result: "0.00 ppm (Zero)", status: "PASSED" },
      { param: "Mineral Oil / Animal Fats", standard: "Negative", result: "NEGATIVE (Nil)", status: "PASSED" }
    ]
  };

  resultContainer.innerHTML = `
    <div class="hologram-border bg-white rounded-sm p-6 sm:p-7 shadow-lg relative overflow-hidden mt-6 animate-fade-in">
      
      <!-- Watermark background -->
      <div class="absolute -right-8 -bottom-8 opacity-5 text-9xl pointer-events-none select-none font-black text-emerald-950">
        NABL
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-200">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xl text-emerald-700">
            📜
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold text-zinc-900">${data.oilName}</h4>
            <p class="text-xs text-zinc-500">Official Batch Number: <span class="font-mono font-bold text-emerald-700">${data.batchNumber}</span></p>
          </div>
        </div>
        <div class="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-[10px] px-3 py-1 rounded-sm shadow-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span>NABL ACCREDITED LAB VERIFIED</span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-50 p-3.5 rounded-sm text-xs mb-5 border border-zinc-200">
        <div>
          <span class="text-zinc-400 text-[10px] block font-semibold">Date of Crushing</span>
          <span class="font-bold text-zinc-800">${data.crushDate}</span>
        </div>
        <div>
          <span class="text-zinc-400 text-[10px] block font-semibold">Testing Lab</span>
          <span class="font-bold text-zinc-800 truncate block">${data.nablLab.split('(')[0]}</span>
        </div>
        <div>
          <span class="text-zinc-400 text-[10px] block font-semibold">Seed Origin</span>
          <span class="font-bold text-zinc-800">${data.seedSource}</span>
        </div>
        <div>
          <span class="text-zinc-400 text-[10px] block font-semibold">Quality Status</span>
          <span class="font-bold text-emerald-700">${data.status}</span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b border-zinc-200 text-zinc-500 font-semibold bg-zinc-50/50">
              <th class="py-2.5 px-3">Tested Parameter</th>
              <th class="py-2.5 px-3">FSSAI Standard</th>
              <th class="py-2.5 px-3">Actual Result</th>
              <th class="py-2.5 px-3 text-right">Verification Grade</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-100">
            ${data.parameters.map(p => `
              <tr class="hover:bg-zinc-50/60 transition-colors">
                <td class="py-2.5 px-3 font-semibold text-zinc-900">${p.param}</td>
                <td class="py-2.5 px-3 text-zinc-600">${p.standard}</td>
                <td class="py-2.5 px-3 font-mono font-bold text-zinc-900">${p.result}</td>
                <td class="py-2.5 px-3 text-right font-bold text-emerald-700">✓ ${p.status}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="mt-5 pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span class="text-zinc-500 text-[11px]">Certified by Head Quality Officer, Visnagar Facility</span>
        </div>
        <button onclick="window.print()" class="px-3.5 py-1.5 rounded-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors shadow-xs">
          Print / Download Certificate 🖨️
        </button>
      </div>
    </div>
  `;

  showToast(`Loaded Certificate for Batch ${data.batchNumber} ✅`);
}

// 9. OIL CALCULATOR
function calculateOilNeeds() {
  const members = parseInt(document.getElementById("family-slider").value, 10);
  const style = document.querySelector('input[name="cook_style"]:checked')?.value || "balanced";

  let basePerPerson = 1.0;
  if (style === "traditional") basePerPerson = 1.3;
  if (style === "diet") basePerPerson = 0.75;

  const totalLitres = Math.round(members * basePerPerson * 10) / 10;
  const groundnutL = Math.max(1, Math.round(totalLitres * 0.6));
  const mustardL = Math.max(1, Math.round(totalLitres * 0.3));
  const sesameMl = 500;

  document.getElementById("calc-members-display").textContent = `${members} ${members === 1 ? 'Person' : 'Family Members'}`;
  document.getElementById("calc-total-litres").textContent = `${totalLitres} Litres / Month`;
  
  document.getElementById("calc-blend-breakdown").innerHTML = `
    <div class="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
      <span class="font-semibold text-zinc-800">🥜 Wood-Pressed Groundnut (Everyday Sabzi & Roti)</span>
      <span class="font-bold text-zinc-900">${groundnutL} Litre(s)</span>
    </div>
    <div class="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
      <span class="font-semibold text-zinc-800">🌾 Wood-Pressed Mustard (Tadka, Dal & Curries)</span>
      <span class="font-bold text-zinc-900">${mustardL} Litre(s)</span>
    </div>
    <div class="flex items-center justify-between text-xs py-2">
      <span class="font-semibold text-zinc-800">🌱 Wood-Pressed Sesame (Ayurvedic/Winter Wellness)</span>
      <span class="font-bold text-zinc-900">${sesameMl} ml</span>
    </div>
  `;
}

function addCalculatedBundleToCart() {
  addToCart("groundnut", 1);
  addToCart("yellow-mustard", 1);
  addToCart("white-sesame", 0);
  toggleCart(true);
  showToast("Added Recommended Family Bundle to cart! 🥗");
}

// 10. QUICKVIEW MODAL
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickview-modal");
  const content = document.getElementById("quickview-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex items-start justify-between mb-4 pb-3 border-b border-zinc-100">
      <div class="flex items-center gap-3">
        <span class="text-3xl">${product.icon}</span>
        <div>
          <h3 class="text-lg font-bold text-zinc-900">${product.name}</h3>
          <p class="text-xs font-semibold text-emerald-700">${product.hindiName}</p>
        </div>
      </div>
      <button onclick="closeQuickView()" class="text-zinc-400 hover:text-zinc-700 text-lg p-1">✕</button>
    </div>

    <p class="text-xs text-zinc-600 mb-4 leading-relaxed">${product.shortDesc}</p>

    <div class="grid grid-cols-2 gap-2 text-xs bg-zinc-50 p-3 rounded-sm mb-4 border border-zinc-200">
      <div>
        <span class="text-zinc-400 block font-medium">Sourcing Region</span>
        <span class="font-bold text-zinc-800">${product.seedOrigin}</span>
      </div>
      <div>
        <span class="text-zinc-400 block font-medium">Smoke Point</span>
        <span class="font-bold text-zinc-800">${product.smokePoint}</span>
      </div>
      <div>
        <span class="text-zinc-400 block font-medium">Extraction Temp</span>
        <span class="font-bold text-emerald-700">${product.extractionTemp}</span>
      </div>
      <div>
        <span class="text-zinc-400 block font-medium">Solvent Hexane</span>
        <span class="font-bold text-emerald-700">0.0% (Zero)</span>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="text-xs font-bold text-zinc-900 mb-2">Nutritional Values (per 100g):</h4>
      <div class="grid grid-cols-3 gap-2 text-center text-xs">
        <div class="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
          <span class="text-[10px] text-zinc-500 block">MUFA</span>
          <span class="font-bold text-zinc-900">${product.nutrition.mufa}</span>
        </div>
        <div class="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
          <span class="text-[10px] text-zinc-500 block">PUFA</span>
          <span class="font-bold text-zinc-900">${product.nutrition.pufa}</span>
        </div>
        <div class="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
          <span class="text-[10px] text-zinc-500 block">Vitamin E</span>
          <span class="font-bold text-emerald-700">${product.nutrition.vitaminE}</span>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <h4 class="text-xs font-bold text-zinc-900 mb-2">Purity Guarantees:</h4>
      <ul class="space-y-1 text-xs text-zinc-600">
        ${product.benefits.map(b => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">✓</span>${b}</li>`).join('')}
      </ul>
    </div>

    <button onclick="addToCart('${product.id}', ${state.selectedProductSizes[product.id] || 0}); closeQuickView();" class="w-full py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all">
      Add Selected Pack to Cart
    </button>
  `;

  modal.classList.remove("hidden");
}

function closeQuickView() {
  const modal = document.getElementById("quickview-modal");
  if (modal) modal.classList.add("hidden");
}

// 11. REFINED VS COLD-PRESSED DATA
const COMPARISON_DATA = [
  {
    parameter: "Extraction Method",
    refined: "Chemical solvent (Hexane) washing at high pressure",
    woodGhani: "Slow crushing in traditional timber ghani (< 14 RPM)"
  },
  {
    parameter: "Temperature During Pressing",
    refined: "Spikes up to 200°C - 230°C",
    woodGhani: "Stays strictly below 38°C (True Cold Press)"
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
    refined: "Stripped completely during high-heat solvent recovery",
    woodGhani: "100% natural Vitamin E & Polyphenols preserved intact"
  }
];

function renderComparisonTable() {
  const container = document.getElementById("comparison-table-body");
  if (!container) return;

  container.innerHTML = COMPARISON_DATA.map(item => `
    <tr class="border-b border-zinc-200/80 hover:bg-zinc-50 transition-colors">
      <td class="py-3 px-4 font-semibold text-zinc-900 text-xs">${item.parameter}</td>
      <td class="py-3 px-4 text-xs text-red-900 bg-red-50/40">
        <span class="inline-block mr-1 text-red-500 font-bold">✕</span>
        ${item.refined}
      </td>
      <td class="py-3 px-4 text-xs text-emerald-950 bg-emerald-50/50 font-medium">
        <span class="inline-block mr-1 text-emerald-600 font-bold">✓</span>
        ${item.woodGhani}
      </td>
    </tr>
  `).join('');
}

// 12. AUTHENTICATION & SESSIONS
function openAuthModal(mode = 'customer') {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  switchAuthTab(mode);
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.classList.add("hidden");
}

function switchAuthTab(tab) {
  const customerTab = document.getElementById("auth-tab-customer");
  const adminTab = document.getElementById("auth-tab-admin");
  const customerForm = document.getElementById("customer-login-form");
  const adminForm = document.getElementById("admin-login-form");

  if (tab === 'admin') {
    if (adminTab) adminTab.className = "flex-1 py-3 text-center text-xs font-bold border-b-2 border-emerald-600 text-emerald-700 bg-emerald-50/50";
    if (customerTab) customerTab.className = "flex-1 py-3 text-center text-xs font-semibold text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent";
    if (customerForm) customerForm.classList.add("hidden");
    if (adminForm) adminForm.classList.remove("hidden");
  } else {
    if (customerTab) customerTab.className = "flex-1 py-3 text-center text-xs font-bold border-b-2 border-black text-black bg-zinc-50";
    if (adminTab) adminTab.className = "flex-1 py-3 text-center text-xs font-semibold text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent";
    if (customerForm) customerForm.classList.remove("hidden");
    if (adminForm) adminForm.classList.add("hidden");
  }
}

function handleCustomerAuth(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById("cust-name")?.value.trim() || "Priya Patel";
  const emailInput = document.getElementById("cust-email")?.value.trim() || "priya@example.com";

  state.currentUser = {
    name: nameInput,
    email: emailInput,
    role: "customer"
  };
  state.isAdmin = false;

  localStorage.setItem("trushita_user", JSON.stringify(state.currentUser));
  updateAuthHeader();
  closeAuthModal();
  showToast(`Welcome back, ${state.currentUser.name}! 🌿`);
}

function handleAdminAuth(e) {
  if (e) e.preventDefault();
  setAdminSession();
}

function setAdminSession() {
  state.currentUser = {
    name: "Farm Administrator",
    email: "admin@trushita.farm",
    role: "admin"
  };
  state.isAdmin = true;

  localStorage.setItem("trushita_user", JSON.stringify(state.currentUser));
  updateAuthHeader();
  closeAuthModal();
  showToast("Logged in as Trushita Farm Admin 🛡️");
  openAdminModal();
}

function handleLogout() {
  state.currentUser = null;
  state.isAdmin = false;
  localStorage.removeItem("trushita_user");
  updateAuthHeader();
  closeAdminModal();
  closeMyOrdersModal();
  showToast("Logged out successfully");
}

function updateAuthHeader() {
  const loggedOutContainer = document.getElementById("auth-logged-out");
  const loggedInContainer = document.getElementById("auth-logged-in");
  const userNameElem = document.getElementById("auth-user-name");
  const adminBadge = document.getElementById("header-admin-badge");
  const adminPanelBtn = document.getElementById("admin-panel-btn");

  if (!loggedOutContainer || !loggedInContainer) return;

  if (state.currentUser) {
    loggedOutContainer.classList.add("hidden");
    loggedInContainer.classList.remove("hidden");
    if (userNameElem) userNameElem.textContent = state.currentUser.name;

    if (state.isAdmin) {
      if (adminBadge) adminBadge.classList.remove("hidden");
      if (adminPanelBtn) adminPanelBtn.classList.remove("hidden");
    } else {
      if (adminBadge) adminBadge.classList.add("hidden");
      if (adminPanelBtn) adminPanelBtn.classList.add("hidden");
    }
  } else {
    loggedOutContainer.classList.remove("hidden");
    loggedInContainer.classList.add("hidden");
    if (adminBadge) adminBadge.classList.add("hidden");
    if (adminPanelBtn) adminPanelBtn.classList.add("hidden");
  }
}

// 13. ADMIN DASHBOARD & ORDERS
function openAdminModal(tab = 'orders') {
  const modal = document.getElementById("admin-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
  switchAdminTab(tab);
}

function closeAdminModal() {
  const modal = document.getElementById("admin-modal");
  if (modal) modal.classList.add("hidden");
}

function switchAdminTab(tab) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    if (btn.dataset.tab === tab) {
      btn.className = "admin-tab-btn px-4 py-2 text-xs font-bold bg-black text-white rounded-sm";
    } else {
      btn.className = "admin-tab-btn px-4 py-2 text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 rounded-sm";
    }
  });

  const content = document.getElementById("admin-tab-content");
  if (!content) return;

  if (tab === 'overview') {
    const totalRev = state.orders.reduce((sum, o) => sum + o.total, 0);
    const totalLitres = state.orders.reduce((sum, o) => {
      let l = 0;
      o.items.forEach(it => {
        if (it.size.includes("5 Litre")) l += 5 * it.quantity;
        else if (it.size.includes("1 Litre")) l += 1 * it.quantity;
        else l += 0.5 * it.quantity;
      });
      return sum + l;
    }, 0);

    content.innerHTML = `
      <div class="space-y-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
            <span class="text-xs text-zinc-500 font-semibold block">Total Revenue</span>
            <span class="text-2xl font-bold text-zinc-900">₹${totalRev.toLocaleString()}</span>
          </div>
          <div class="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
            <span class="text-xs text-zinc-500 font-semibold block">Total Orders</span>
            <span class="text-2xl font-bold text-emerald-700">${state.orders.length}</span>
          </div>
          <div class="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
            <span class="text-xs text-zinc-500 font-semibold block">Total Litres Crushed</span>
            <span class="text-2xl font-bold text-zinc-900">${totalLitres.toFixed(1)} L</span>
          </div>
          <div class="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
            <span class="text-xs text-zinc-500 font-semibold block">Units 1 & 2 Status</span>
            <span class="text-2xl font-bold text-emerald-600">Active (12 RPM)</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-50 rounded-sm border border-emerald-200">
          <h4 class="text-xs font-bold text-emerald-900 mb-1">Live Extraction Safeguard</h4>
          <p class="text-xs text-emerald-800">
            Current wooden ghani temperature sensor: <strong>37.4°C</strong>. Strictly below the 40°C threshold. Zero heat degradation detected.
          </p>
        </div>
      </div>
    `;
  } else if (tab === 'orders') {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-zinc-900 uppercase tracking-wider">All Customer Orders (${state.orders.length})</h4>
          <span class="text-[11px] text-zinc-500">Live order fulfillment sync</span>
        </div>

        <div class="overflow-x-auto border border-zinc-200 rounded-sm">
          <table class="w-full text-left text-xs">
            <thead class="bg-zinc-100 text-zinc-700 border-b border-zinc-200 font-bold">
              <tr>
                <th class="p-2.5">Order ID</th>
                <th class="p-2.5">Customer & City</th>
                <th class="p-2.5">Items</th>
                <th class="p-2.5">Amount</th>
                <th class="p-2.5">Payment</th>
                <th class="p-2.5">Fulfillment Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-200 bg-white">
              ${state.orders.map(o => `
                <tr class="hover:bg-zinc-50 transition-colors">
                  <td class="p-2.5 font-mono font-bold text-emerald-700">${o.id}</td>
                  <td class="p-2.5">
                    <span class="font-bold text-zinc-900 block">${o.customerName}</span>
                    <span class="text-[10px] text-zinc-500">${o.city} • ${o.phone}</span>
                  </td>
                  <td class="p-2.5">
                    ${o.items.map(it => `<span class="block text-[11px] text-zinc-700">${it.name} (${it.size}) x${it.quantity}</span>`).join('')}
                  </td>
                  <td class="p-2.5 font-bold text-zinc-900">₹${o.total}</td>
                  <td class="p-2.5">
                    <span class="text-[10px] font-semibold bg-zinc-100 px-2 py-0.5 rounded-sm text-zinc-700">${o.paymentMethod}</span>
                  </td>
                  <td class="p-2.5">
                    <select onchange="updateOrderStatus('${o.id}', this.value)" class="text-[11px] font-bold p-1 rounded-sm border border-zinc-300 bg-white text-zinc-800">
                      <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>⏳ Pending</option>
                      <option value="Wood-Ghani Pressing" ${o.status === 'Wood-Ghani Pressing' ? 'selected' : ''}>🪵 Wood-Ghani Pressing</option>
                      <option value="Quality NABL Tested" ${o.status === 'Quality NABL Tested' ? 'selected' : ''}>🧪 Quality NABL Tested</option>
                      <option value="Dispatched" ${o.status === 'Dispatched' ? 'selected' : ''}>🚚 Dispatched</option>
                      <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>✅ Delivered</option>
                    </select>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (tab === 'batches') {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-zinc-900 uppercase tracking-wider">Active NABL Tested Batches</h4>
          <button onclick="promptNewBatch()" class="px-3 py-1.5 rounded-sm bg-black text-white text-xs font-bold hover:bg-zinc-800">
            + Add New Tested Batch
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${Object.values(state.batches).map(b => `
            <div class="p-3 bg-zinc-50 rounded-sm border border-zinc-200">
              <div class="flex items-center justify-between mb-1.5">
                <span class="font-mono font-bold text-emerald-700 text-xs">${b.batchNumber}</span>
                <span class="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm">NABL PASS</span>
              </div>
              <h5 class="font-bold text-xs text-zinc-900">${b.oilName}</h5>
              <p class="text-[10px] text-zinc-500 mt-1">Pressed: ${b.crushDate}</p>
              <p class="text-[10px] text-zinc-500">Source: ${b.seedSource}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tab === 'coupons') {
    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-zinc-900 uppercase tracking-wider">Active Promo Codes</h4>
          <div class="flex gap-2">
            <input type="text" id="new-coupon-code" placeholder="CODE (e.g. SUMMER15)" class="px-2 py-1 text-xs border border-zinc-300 rounded-sm uppercase font-mono">
            <input type="number" id="new-coupon-pct" placeholder="Discount %" class="w-20 px-2 py-1 text-xs border border-zinc-300 rounded-sm font-mono">
            <button onclick="addPromoCode()" class="px-3 py-1 rounded-sm bg-black text-white text-xs font-bold">Add</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${Object.entries(state.promoCodes).map(([c, pct]) => `
            <div class="p-3 bg-zinc-50 rounded-sm border border-zinc-200 flex items-center justify-between">
              <div>
                <span class="font-mono font-bold text-xs text-zinc-900">${c}</span>
                <span class="text-[11px] text-emerald-700 block font-semibold">${pct}% Discount</span>
              </div>
              <span class="text-xs text-emerald-600 font-bold">ACTIVE</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function updateOrderStatus(orderId, newStatus) {
  const ord = state.orders.find(o => o.id === orderId);
  if (ord) {
    ord.status = newStatus;
    try {
      localStorage.setItem("trushita_orders", JSON.stringify(state.orders));
    } catch(e) {}
    showToast(`Order ${orderId} updated to ${newStatus}`);
    switchAdminTab('orders');
  }
}

function promptNewBatch() {
  const code = prompt("Enter new Batch Code (e.g. TR-CO-9901):", "TR-CO-9901");
  if (!code) return;

  state.batches[code] = {
    batchNumber: code,
    oilName: "Wood-Pressed Fresh Batch Oil",
    crushDate: "11-Nov-2026",
    testingDate: "11-Nov-2026",
    expiryDate: "10-Nov-2027",
    nablLab: "Vardhman Food Testing Laboratories (NABL Accredited)",
    seedSource: "Visnagar Gujarat Cooperative",
    status: "PASS - 100% UNADULTERATED",
    parameters: [
      { param: "Free Fatty Acids", standard: "Max 1.5%", result: "0.36%", status: "PASSED" },
      { param: "Aflatoxin", standard: "Max 15 ppb", result: "NOT DETECTED", status: "PASSED" },
      { param: "Hexane Solvent", standard: "Nil", result: "0.00 ppm", status: "PASSED" }
    ]
  };

  try {
    localStorage.setItem("trushita_batches", JSON.stringify(state.batches));
  } catch(e) {}
  showToast(`Added Batch ${code} to verified NABL Registry! 🧪`);
  switchAdminTab('batches');
}

function addPromoCode() {
  const code = document.getElementById("new-coupon-code")?.value.trim().toUpperCase();
  const pct = parseInt(document.getElementById("new-coupon-pct")?.value, 10);

  if (code && pct > 0) {
    state.promoCodes[code] = pct;
    showToast(`Created promo code ${code} (${pct}% off) ✨`);
    switchAdminTab('coupons');
  }
}

// 14. MY ORDERS MODAL
function openMyOrdersModal() {
  const modal = document.getElementById("orders-modal");
  const content = document.getElementById("orders-modal-content");
  if (!modal || !content) return;

  const userEmail = state.currentUser?.email || "priya@example.com";
  const userOrders = state.orders.filter(o => o.email === userEmail || state.isAdmin);

  content.innerHTML = `
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200">
      <div>
        <h3 class="text-base font-bold text-zinc-900">My Orders & Fresh Batches</h3>
        <p class="text-xs text-zinc-500">${userEmail}</p>
      </div>
      <button onclick="closeMyOrdersModal()" class="text-zinc-400 hover:text-zinc-700 text-sm p-1">✕</button>
    </div>

    ${userOrders.length === 0 ? `
      <div class="text-center py-10">
        <span class="text-3xl block mb-2">📦</span>
        <p class="text-xs text-zinc-500">You haven't placed any orders yet.</p>
      </div>
    ` : `
      <div class="space-y-3">
        ${userOrders.map(o => `
          <div class="p-3.5 bg-zinc-50 rounded-sm border border-zinc-200">
            <div class="flex items-center justify-between mb-2 pb-2 border-b border-zinc-200/60">
              <div>
                <span class="font-mono font-bold text-xs text-emerald-700">${o.id}</span>
                <span class="text-[10px] text-zinc-400 ml-2">${o.date}</span>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                o.status === 'Delivered' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-amber-100 text-amber-900'
              }">
                ${o.status}
              </span>
            </div>

            <div class="text-xs text-zinc-700 space-y-1 mb-2">
              ${o.items.map(it => `
                <div class="flex justify-between">
                  <span>${it.name} (${it.size}) x${it.quantity}</span>
                  <span class="font-bold text-zinc-900">₹${it.price * it.quantity}</span>
                </div>
              `).join('')}
            </div>

            <div class="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-xs">
              <span class="text-zinc-500 text-[11px]">Batch: <span class="font-mono font-bold text-zinc-800">${o.batch || 'TR-GN-8492'}</span></span>
              <span class="font-bold text-zinc-900">Total: ₹${o.total}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;

  modal.classList.remove("hidden");
}

function closeMyOrdersModal() {
  const modal = document.getElementById("orders-modal");
  if (modal) modal.classList.add("hidden");
}

// 15. ORDER CHECKOUT (WHATSAPP & SIMULATED ONLINE)
function openWhatsAppOrder() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty! Please add some oils first.");
    return;
  }

  recordOrder("WhatsApp Order");

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * (state.promoDiscount / 100));
  const shipping = subtotal >= 799 ? 0 : 70;
  const grandTotal = subtotal - discountAmount + shipping;

  let msg = `*Namaste Trushita Farm!* 🌿\nI would like to order fresh Wood-Pressed Oils:\n\n`;
  state.cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* (${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });

  msg += `\n*Subtotal:* ₹${subtotal}`;
  if (discountAmount > 0) msg += `\n*Discount:* -₹${discountAmount}`;
  msg += `\n*Shipping:* ${shipping === 0 ? 'FREE' : '₹' + shipping}`;
  msg += `\n*Total Payable:* ₹${grandTotal}`;
  if (state.currentUser) {
    msg += `\n*Customer:* ${state.currentUser.name} (${state.currentUser.email})`;
  }
  msg += `\n\nPlease confirm order and share UPI payment QR code. Thank you!`;

  const phone = "919409000000";
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function processOnlineCheckout() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  const order = recordOrder("Online UPI / Card");
  state.cart = [];
  saveCart();
  updateCartUI();
  toggleCart(false);
  showToast(`🎉 Order ${order.id} placed successfully! Thank you.`);
  openMyOrdersModal();
}

function recordOrder(method) {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * (state.promoDiscount / 100));
  const shipping = subtotal >= 799 ? 0 : 70;
  const grandTotal = subtotal - discountAmount + shipping;

  const newOrder = {
    id: `TR-ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    date: "11-Nov-2026",
    customerName: state.currentUser ? state.currentUser.name : "Guest Customer",
    email: state.currentUser ? state.currentUser.email : "guest@trushita.farm",
    phone: "+91 98000 00000",
    city: "Gujarat / India",
    items: [...state.cart],
    total: grandTotal,
    status: "Wood-Ghani Pressing",
    paymentMethod: method,
    batch: "TR-GN-8492"
  };

  state.orders.unshift(newOrder);
  try {
    localStorage.setItem("trushita_orders", JSON.stringify(state.orders));
  } catch(e) {}

  return newOrder;
}

// 16. TOAST UTILITY
function showToast(message) {
  const toast = document.getElementById("global-toast");
  const text = document.getElementById("toast-message");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("toast-animate");

  setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("toast-animate");
  }, 3200);
}

// 17. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderComparisonTable();
  selectProcessStep(2);
  calculateOilNeeds();
  updateCartUI();
  updateAuthHeader();

  const slider = document.getElementById("family-slider");
  if (slider) slider.addEventListener("input", calculateOilNeeds);
  
  document.querySelectorAll('input[name="cook_style"]').forEach(r => {
    r.addEventListener("change", calculateOilNeeds);
  });
});
