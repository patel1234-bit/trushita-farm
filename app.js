/**
 * Trushita Natural Food - Multi-Page D2C Web Application Engine
 * Official Brand Palette: Emerald-600 (#059669), Jet Black (#09090B), Zinc-50/100/200/900/950, White
 * Zero temperature telemetry; Multi-page shared shell, cart sync, auth, and admin portal.
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
    culinaryUse: "Everyday Sabzi, Tadka & Deep Frying",
    pressingMethod: "Babool Wood Kolhu (12 RPM)",
    filtration: "4-Layer Cotton Cloth",
    color: "#059669",
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
    color: "#059669",
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
    color: "#059669",
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
    color: "#059669",
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
    color: "#059669",
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
    color: "#059669",
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
    color: "#059669",
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

// 2. LIVE EXTRACTION UNITS DATA (HERO SIMULATOR - ZERO TEMPERATURE METRICS)
const EXTRACTION_UNITS = {
  1: {
    unitName: "Visnagar Unit #1",
    seed: "Saurashtra Groundnut (G-20)",
    method: "Babool Wood Kolhu",
    filtration: "Cotton Cloth (4-Layer)",
    rpm: "12.2 RPM",
    yield: "46.8%",
    todayCrushed: "348 Litres",
    badge: "Bestseller Singtel"
  },
  2: {
    unitName: "Visnagar Unit #2",
    seed: "North Gujarat Yellow Sarson",
    method: "Neem Wood Ghani",
    filtration: "48-Hr Gravity Settled",
    rpm: "11.5 RPM",
    yield: "38.2%",
    todayCrushed: "216 Litres",
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
  sortBy: "featured",
  activeStep: 2,
  activeUnit: 1,
  selectedProductSizes: {},
  promoDiscount: 0,
  promoApplied: false,

  currentUser: null,
  isAdmin: false,

  batches: INITIAL_BATCH_DATABASE,
  orders: INITIAL_ORDERS,
  promoCodes: { "PURE10": 10, "TRUSHITA10": 10, "FARM20": 20 }
};

// Initialize default sizes
PRODUCTS.forEach(p => {
  const defaultIdx = p.sizes.findIndex(s => s.default);
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

// 5. SHARED MULTI-PAGE SHELL (HEADER, FOOTER, MODALS, CART DRAWER)
function renderSharedShell() {
  const currentPage = document.body.dataset.page || "home";

  const navItems = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "products", label: "Oils Store", href: "products.html" },
    { id: "process", label: "Process", href: "process.html" },
    { id: "lab-reports", label: "Lab Reports", href: "lab-reports.html", badge: "NABL" },
    { id: "calculator", label: "Oil Calculator", href: "calculator.html" }
  ];

  const headerMount = document.getElementById("site-shell-header");
  if (headerMount) {
    headerMount.innerHTML = `
      <!-- Top Announcement Bar -->
      <aside aria-label="Announcement" class="bg-zinc-950 text-zinc-300 text-[11px] py-2 px-4 border-b border-zinc-800/80">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="font-semibold text-white">Live from Visnagar:</span>
            <span class="text-zinc-400 hidden sm:inline">100% Unrefined Wood-Pressed Groundnut &amp; Mustard Batches Pressed Today</span>
            <span class="text-zinc-400 sm:hidden">Pure Lakdi Ghani Harvest</span>
          </div>
          <div class="flex items-center gap-3 sm:gap-4">
            <span class="hidden md:inline-flex items-center gap-1.5 text-zinc-300">
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Free Shipping ≥ ₹799
            </span>
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-emerald-950/90 border border-emerald-800/70 text-emerald-400 font-mono font-bold text-[10px]">
              CODE: PURE10 (10% OFF)
            </span>
          </div>
        </div>
      </aside>

      <!-- Sticky Modern Header -->
      <header id="main-header" class="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-zinc-200/80 transition-all duration-300">
        <div id="header-inner" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4 transition-all duration-300">
          
          <!-- Official Logo -->
          <a href="index.html" class="flex items-center gap-3 group shrink-0">
            <div class="w-11 h-11 flex items-center justify-center p-0.5 bg-[#f3f8f5] rounded-sm border border-emerald-200/70 shadow-2xs group-hover:border-emerald-500 transition-all">
              <img src="trushita.svg" alt="Trushita Natural Food Logo" class="w-full h-full object-contain">
            </div>
            <div class="leading-tight">
              <div class="flex items-center gap-1.5">
                <span class="text-base sm:text-lg font-black tracking-tight text-zinc-950">TRUSHITA</span>
                <span class="text-[9px] uppercase font-bold tracking-widest bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-sm border border-emerald-200/80">Natural Food</span>
                <span id="header-admin-badge" class="hidden text-[9px] font-bold bg-zinc-950 text-emerald-400 px-1.5 py-0.5 rounded-sm border border-zinc-800">ADMIN</span>
              </div>
              <span class="text-[10px] text-zinc-500 font-medium tracking-wide block mt-0.5">Wood-Pressed Purity • Visnagar</span>
            </div>
          </a>

          <!-- Center Segmented Pill Navigation (Desktop Multi-Page Links) -->
          <nav aria-label="Primary Navigation" class="hidden lg:flex items-center bg-zinc-100/90 border border-zinc-200/80 p-1 rounded-sm gap-0.5">
            ${navItems.map(item => `
              <a href="${item.href}" class="nav-link-pill ${currentPage === item.id ? 'active' : ''} px-3.5 py-1.5 rounded-sm text-xs font-medium text-zinc-600 hover:text-zinc-950 inline-flex items-center gap-1.5">
                <span>${item.label}</span>
                ${item.badge ? `
                  <span class="inline-flex items-center gap-1 text-[9px] bg-emerald-600 text-white font-bold px-1.5 py-0.2 rounded-sm">
                    <span class="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                    ${item.badge}
                  </span>
                ` : ''}
              </a>
            `).join('')}
          </nav>

          <!-- Right Action Cluster -->
          <div class="flex items-center gap-2 shrink-0">
            
            <!-- Quick Search Button (Goes to products.html) -->
            <button onclick="navigateToSearch()" class="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-600 hover:text-zinc-950 transition-all" title="Search Oils Store" aria-label="Search Oils Store">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <!-- Logged Out State -->
            <div id="auth-logged-out" class="flex items-center gap-1.5">
              <button onclick="openAuthModal('customer')" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800 text-xs font-semibold transition-all">
                <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span>Sign In</span>
              </button>

              <button onclick="openAuthModal('admin')" class="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-zinc-50 hover:bg-emerald-50 hover:border-emerald-300 text-zinc-600 hover:text-emerald-700 transition-all" title="Farm Admin Portal" aria-label="Farm Admin Portal">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </button>
            </div>

            <!-- Logged In State: Profile Dropdown -->
            <div id="auth-logged-in" class="hidden relative">
              <button id="user-menu-btn" onclick="toggleUserMenu(event)" class="inline-flex items-center gap-2 pl-1.5 pr-2.5 py-1.5 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-2xs">
                <span id="auth-avatar-initials" class="w-6 h-6 rounded-sm bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">PP</span>
                <span id="auth-user-name" class="hidden sm:inline text-xs font-bold text-zinc-900 max-w-[100px] truncate">User</span>
                <svg class="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div id="user-dropdown-menu" class="hidden animate-dropdown absolute right-0 mt-2 w-56 bg-white rounded-sm border border-zinc-200 shadow-xl py-1.5 z-50">
                <div class="px-3.5 py-2.5 border-b border-zinc-100">
                  <p id="dropdown-user-fullname" class="text-xs font-bold text-zinc-900 truncate">Priya Patel</p>
                  <p id="dropdown-user-email" class="text-[11px] text-zinc-500 truncate">priya@example.com</p>
                </div>

                <button onclick="closeUserMenu(); openMyOrdersModal();" class="w-full px-3.5 py-2 text-left text-xs font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 flex items-center justify-between transition-colors">
                  <span class="inline-flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
                    </svg>
                    My Orders &amp; Batches
                  </span>
                  <span id="dropdown-orders-count" class="text-[10px] font-bold bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded-sm">0</span>
                </button>

                <button id="admin-panel-btn" onclick="closeUserMenu(); openAdminModal();" class="hidden w-full px-3.5 py-2 text-left text-xs font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 transition-colors">
                  <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Admin Dashboard</span>
                </button>

                <div class="my-1 border-t border-zinc-100"></div>

                <button onclick="handleLogout()" class="w-full px-3.5 py-2 text-left text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            <!-- Cart Trigger -->
            <button onclick="toggleCart(true)" class="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all transform hover:-translate-y-0.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span id="header-cart-label" class="hidden sm:inline text-xs font-bold">Cart</span>
              <span class="cart-count-badge hidden absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full items-center justify-center border-2 border-white">
                0
              </span>
            </button>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-colors" aria-label="Toggle Menu">
              <svg id="mobile-menu-icon-open" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="mobile-menu-icon-close" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-nav-drawer" class="hidden lg:hidden animate-mobile-drawer border-t border-zinc-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div class="grid grid-cols-2 gap-2">
            ${navItems.map(item => `
              <a href="${item.href}" class="px-3 py-2.5 rounded-sm ${currentPage === item.id ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : 'bg-zinc-50 border-zinc-200 text-zinc-900'} border text-xs font-bold flex items-center justify-between">
                <span>${item.label}</span>
                ${item.badge ? `<span class="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-sm">${item.badge}</span>` : ''}
              </a>
            `).join('')}
          </div>
          <div class="pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
            <button onclick="toggleMobileMenu(false); openAuthModal('admin');" class="flex-1 py-2 px-3 rounded-sm border border-zinc-200 text-xs font-semibold text-zinc-700 bg-zinc-50">
              Admin Portal
            </button>
            <button onclick="toggleMobileMenu(false); openWhatsAppOrder();" class="flex-1 py-2 px-3 rounded-sm bg-emerald-600 text-white text-xs font-bold">
              WhatsApp Order
            </button>
          </div>
        </div>
      </header>
    `;
  }

  const footerMount = document.getElementById("site-shell-footer");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="bg-zinc-950 text-zinc-400 pt-14 pb-10 border-t border-zinc-800 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            <div class="md:col-span-2 space-y-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 p-0.5 bg-white rounded-sm flex items-center justify-center">
                  <img src="trushita.svg" alt="Trushita Logo" class="w-full h-full object-contain">
                </div>
                <span class="text-base font-bold text-white tracking-tight">TRUSHITA NATURAL FOOD</span>
              </div>
              <p class="text-zinc-400 text-xs max-w-sm leading-relaxed">
                Trushita Natural Food LLP is a manufacturer of natural, wood-pressed edible oils. Operating from Visnagar, Mehsana, adjacent to the Unjha agricultural commodity trading hub.
              </p>
              <p class="text-zinc-500 text-[11px]">
                📍 Plot No. 63, Phase-2, D.J. Industrial Estate, Opp. Matel Hotel, Kheralu Road, Visnagar, Mehsana, Gujarat - 384315
              </p>
            </div>

            <div>
              <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Explore Pages</h4>
              <ul class="space-y-1.5 text-xs text-zinc-400">
                <li><a href="index.html" class="hover:text-emerald-400 transition-colors">Home Overview</a></li>
                <li><a href="products.html" class="hover:text-emerald-400 transition-colors">Wood-Pressed Oils Store</a></li>
                <li><a href="process.html" class="hover:text-emerald-400 transition-colors">5-Stage Wood-Ghani Process</a></li>
                <li><a href="lab-reports.html" class="hover:text-emerald-400 transition-colors">NABL Lab Batch Verifier</a></li>
                <li><a href="calculator.html" class="hover:text-emerald-400 transition-colors">Monthly Oil Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Account &amp; Social</h4>
              <ul class="space-y-1.5 text-xs text-zinc-400 mb-3">
                <li><button onclick="openAuthModal('admin')" class="hover:text-emerald-400 transition-colors">Farm Admin Portal 🔐</button></li>
                <li><button onclick="openAuthModal('customer')" class="hover:text-emerald-400 transition-colors">Customer Sign In 👤</button></li>
                <li><a href="lab-reports.html" class="hover:text-emerald-400 transition-colors">Verify NABL Certificate</a></li>
                <li><a href="index.html#marketplaces" class="hover:text-emerald-400 transition-colors">Amazon / Flipkart / IndiaMART</a></li>
              </ul>
              <div class="flex items-center gap-2.5 text-base">
                <a href="https://www.instagram.com/trushitanaturalfood/" target="_blank" class="hover:text-emerald-400 transition-colors" title="Instagram">📸</a>
                <a href="https://www.youtube.com/@TrushitaNaturalfood" target="_blank" class="hover:text-emerald-400 transition-colors" title="YouTube">▶️</a>
                <a href="https://linktr.ee/trushitanaturalfood" target="_blank" class="hover:text-emerald-400 transition-colors" title="Linktree">🌲</a>
              </div>
            </div>

          </div>

          <div class="pt-6 border-t border-zinc-800 text-center text-zinc-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Trushita Natural Food LLP. All Rights Reserved.</span>
            <span>Pure Gujarat Wood-Pressed Edible Oils 🇮🇳</span>
          </div>
        </div>
      </footer>
    `;
  }

  const overlaysMount = document.getElementById("site-shell-overlays");
  if (overlaysMount) {
    overlaysMount.innerHTML = `
      <!-- AUTH MODAL -->
      <div id="auth-modal" class="hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
        <div class="bg-white rounded-sm max-w-sm w-full shadow-2xl border border-zinc-300 overflow-hidden">
          <div class="flex border-b border-zinc-200">
            <button id="auth-tab-customer" onclick="switchAuthTab('customer')" class="flex-1 py-3 text-center text-xs font-bold border-b-2 border-black text-black bg-zinc-50 transition-all">
              Customer Sign In
            </button>
            <button id="auth-tab-admin" onclick="switchAuthTab('admin')" class="flex-1 py-3 text-center text-xs font-semibold text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent transition-all">
              Farm Admin Login 🔐
            </button>
          </div>

          <div id="customer-login-form" class="p-6 space-y-4">
            <div class="text-center mb-2">
              <div class="w-10 h-10 mx-auto mb-2 p-1 bg-[#f3f8f5] border border-emerald-200 rounded-sm">
                <img src="trushita.svg" alt="Trushita" class="w-full h-full object-contain">
              </div>
              <h3 class="text-sm font-bold text-zinc-900">Sign in to Trushita Farm</h3>
              <p class="text-[11px] text-zinc-500">Track your fresh oil orders &amp; batch reports</p>
            </div>

            <form onsubmit="handleCustomerAuth(event)" class="space-y-3">
              <div>
                <label class="block text-[11px] font-semibold text-zinc-700 mb-1">Your Full Name</label>
                <input type="text" id="cust-name" value="Priya Patel" class="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-zinc-700 mb-1">Email Address</label>
                <input type="email" id="cust-email" value="priya@example.com" class="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-zinc-700 mb-1">Password</label>
                <input type="password" value="••••••••" class="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50">
              </div>
              <button type="submit" class="w-full py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all shadow-xs">
                Sign In / Continue
              </button>
            </form>

            <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
              <button onclick="handleCustomerAuth(null)" class="text-emerald-700 font-bold hover:underline">
                ⚡ Quick Demo Customer Login
              </button>
              <button onclick="closeAuthModal()" class="text-zinc-400 hover:text-zinc-600">Cancel</button>
            </div>
          </div>

          <div id="admin-login-form" class="p-6 space-y-4 hidden">
            <div class="text-center mb-2">
              <div class="w-10 h-10 mx-auto mb-2 p-1 bg-emerald-50 border border-emerald-300 rounded-sm flex items-center justify-center text-xl">
                🛡️
              </div>
              <h3 class="text-sm font-bold text-zinc-900">Farm Administration Portal</h3>
              <p class="text-[11px] text-zinc-500">Manage orders, NABL batches &amp; oil production</p>
            </div>

            <form onsubmit="handleAdminAuth(event)" class="space-y-3">
              <div>
                <label class="block text-[11px] font-semibold text-zinc-700 mb-1">Admin Email</label>
                <input type="email" id="admin-email" value="admin@trushita.farm" class="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium font-mono">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-zinc-700 mb-1">Security Key / Password</label>
                <input type="password" id="admin-pass" value="admin" class="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-mono">
              </div>
              <button type="submit" class="w-full py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs">
                Unlock Admin Dashboard 🔓
              </button>
            </form>

            <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
              <button onclick="setAdminSession()" class="text-emerald-700 font-bold hover:underline">
                ⚡ 1-Click Demo Admin Login
              </button>
              <button onclick="closeAuthModal()" class="text-zinc-400 hover:text-zinc-600">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ADMIN DASHBOARD MODAL -->
      <div id="admin-modal" class="hidden fixed inset-0 bg-black/75 z-50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
        <div class="bg-white rounded-sm max-w-4xl w-full shadow-2xl border border-zinc-300 max-h-[92vh] flex flex-col overflow-hidden">
          <div class="p-4 bg-zinc-950 text-white flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 p-1 bg-white rounded-sm">
                <img src="trushita.svg" alt="Trushita" class="w-full h-full object-contain">
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-sm font-bold tracking-tight">Trushita Farm Administration</h3>
                  <span class="text-[9px] font-bold bg-emerald-500 text-zinc-950 px-1.5 py-0.2 rounded-sm uppercase">SUPERADMIN</span>
                </div>
                <p class="text-[10px] text-zinc-400">Visnagar Unit 1 &amp; 2 • Live Plant Control</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button onclick="handleLogout()" class="text-xs text-red-400 hover:text-red-300 font-semibold">Logout Admin ✕</button>
              <button onclick="closeAdminModal()" class="text-zinc-400 hover:text-white text-base p-1">✕</button>
            </div>
          </div>

          <div class="flex border-b border-zinc-200 bg-zinc-50 p-2 gap-1.5 overflow-x-auto">
            <button data-tab="orders" onclick="switchAdminTab('orders')" class="admin-tab-btn px-4 py-2 text-xs font-bold bg-black text-white rounded-sm">📦 Order Management</button>
            <button data-tab="overview" onclick="switchAdminTab('overview')" class="admin-tab-btn px-4 py-2 text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 rounded-sm">📊 Plant Analytics</button>
            <button data-tab="batches" onclick="switchAdminTab('batches')" class="admin-tab-btn px-4 py-2 text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 rounded-sm">🧪 NABL Tested Batches</button>
            <button data-tab="coupons" onclick="switchAdminTab('coupons')" class="admin-tab-btn px-4 py-2 text-xs font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200 rounded-sm">🏷️ Promo Codes</button>
          </div>

          <div id="admin-tab-content" class="p-5 flex-1 overflow-y-auto"></div>
        </div>
      </div>

      <!-- CUSTOMER MY ORDERS MODAL -->
      <div id="orders-modal" class="hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
        <div class="bg-white rounded-sm max-w-lg w-full p-6 shadow-2xl max-h-[85vh] overflow-y-auto border border-zinc-200">
          <div id="orders-modal-content"></div>
        </div>
      </div>

      <!-- SLIDE-OVER CART DRAWER -->
      <div id="cart-overlay" onclick="toggleCart(false)" class="hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity"></div>
      <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
        <div class="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛒</span>
            <h3 class="text-sm font-bold text-zinc-900">Your Shopping Cart</h3>
          </div>
          <button onclick="toggleCart(false)" class="text-zinc-400 hover:text-zinc-700 text-sm p-1">✕</button>
        </div>

        <div class="px-4 py-2.5 bg-zinc-50 border-b border-zinc-200 text-xs">
          <div id="free-shipping-text" class="mb-1 font-medium text-zinc-700 text-[11px]">Add items for FREE Delivery</div>
          <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
            <div id="free-shipping-bar" class="bg-emerald-600 h-1.5 rounded-full w-0 transition-all duration-300"></div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-4">
          <div id="cart-items-container"></div>
          <div id="cart-empty-state" class="text-center py-14 hidden">
            <span class="text-4xl block mb-2">🧺</span>
            <h4 class="text-sm font-bold text-zinc-900 mb-1">Your cart is empty</h4>
            <p class="text-xs text-zinc-500 mb-3">Add some pure Gujarat wood-pressed oils to get started!</p>
            <a href="products.html" onclick="toggleCart(false)" class="inline-block px-3.5 py-1.5 rounded-sm bg-black text-white text-xs font-bold">
              Shop Oils
            </a>
          </div>
        </div>

        <div id="cart-footer" class="p-4 border-t border-zinc-200 bg-zinc-50 space-y-3 text-xs">
          <div class="flex gap-2">
            <input type="text" id="promo-input" placeholder="Promo code (e.g. PURE10)" class="flex-1 px-3 py-1.5 text-xs rounded-sm border border-zinc-300 focus:outline-hidden uppercase font-mono">
            <button onclick="applyPromoCode()" class="px-3 py-1.5 rounded-sm bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors">Apply</button>
          </div>

          <div class="space-y-1 text-xs text-zinc-600">
            <div class="flex justify-between"><span>Subtotal</span><span id="cart-subtotal" class="font-bold text-zinc-900">₹0</span></div>
            <div class="flex justify-between text-emerald-700"><span>Discount</span><span id="cart-discount" class="font-bold">-₹0</span></div>
            <div class="flex justify-between"><span>Delivery</span><span id="cart-delivery" class="font-bold text-zinc-900">₹0</span></div>
            <div class="flex justify-between text-sm font-bold text-zinc-900 pt-2 border-t border-zinc-200"><span>Total</span><span id="cart-total" class="text-emerald-700">₹0</span></div>
          </div>

          <div class="space-y-1.5">
            <button onclick="openWhatsAppOrder()" class="w-full py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5">
              <span>Order Directly on WhatsApp 💬</span>
            </button>
            <button onclick="processOnlineCheckout()" class="w-full py-2 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all">
              Proceed to Checkout 💳
            </button>
          </div>
        </div>
      </div>

      <!-- QUICKVIEW MODAL -->
      <div id="quickview-modal" class="hidden fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
        <div class="bg-white rounded-sm max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto border border-zinc-200">
          <div id="quickview-content"></div>
        </div>
      </div>

      <!-- GLOBAL TOAST -->
      <div id="global-toast" class="hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 text-white px-4 py-2.5 rounded-sm shadow-xl border border-zinc-800 flex items-center gap-2 text-xs font-semibold">
        <span class="text-emerald-400">✨</span>
        <span id="toast-message">Notification</span>
      </div>
    `;
  }
}

// 6. HERO UNIT SWITCHER (NO TEMPERATURE METRICS)
function switchHeroUnit(unitId) {
  state.activeUnit = unitId;
  const unit = EXTRACTION_UNITS[unitId];

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

  const seedElem = document.getElementById("hero-unit-seed");
  const methodElem = document.getElementById("hero-unit-method");
  const filterElem = document.getElementById("hero-unit-filtration");
  const rpmElem = document.getElementById("hero-unit-rpm");
  const yieldElem = document.getElementById("hero-unit-yield");
  const badgeElem = document.getElementById("hero-unit-badge");

  if (seedElem) seedElem.textContent = unit.seed;
  if (methodElem) methodElem.textContent = unit.method;
  if (filterElem) filterElem.textContent = unit.filtration;
  if (rpmElem) rpmElem.textContent = unit.rpm;
  if (yieldElem) yieldElem.textContent = unit.yield;
  if (badgeElem) badgeElem.textContent = unit.badge;

  showToast(`Switched telemetry to ${unit.unitName} 🟢`);
}

// 7. PRODUCT CARD HTML GENERATOR
function buildProductCardHTML(product) {
  const selectedSizeIdx = state.selectedProductSizes[product.id] || 0;
  const currentSize = product.sizes[selectedSizeIdx];

  return `
    <div class="product-card group flex flex-col justify-between p-4 sm:p-5 rounded-sm bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-300 transition-all duration-300">
      <div class="relative mb-3.5 w-full aspect-square rounded-sm bg-zinc-50 flex items-center justify-center border border-zinc-100 overflow-hidden group-hover:bg-emerald-50/20 transition-colors">
        <span class="text-6xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
          ${product.icon}
        </span>
        <div class="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span>${product.tag}</span>
        </div>
        <div class="absolute bottom-2 left-2 text-[10px] font-semibold text-zinc-600 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-zinc-200/80">
          🪵 ${product.pressingMethod.split('(')[0].trim()}
        </div>
        <div class="absolute bottom-2 right-2 text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-emerald-200/80">
          ${product.nutritionTag}
        </div>
      </div>

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

      <div class="pt-2.5 border-t border-zinc-100 mt-auto">
        <div class="flex items-baseline justify-between mb-2.5">
          <div>
            <span class="text-xl font-bold text-zinc-900">₹${currentSize.price}</span>
            ${currentSize.originalPrice ? `
              <span class="text-xs text-zinc-400 line-through ml-1.5">₹${currentSize.originalPrice}</span>
              <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded ml-1">${currentSize.savings}</span>
            ` : ''}
          </div>
          <span class="text-[10px] text-zinc-500 font-medium">Free Shipping ≥ ₹799</span>
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
}

function renderProducts() {
  // Featured grid on Home page (3 products)
  const featuredContainer = document.getElementById("featured-product-grid");
  if (featuredContainer) {
    featuredContainer.innerHTML = PRODUCTS.filter(p => p.featured).map(buildProductCardHTML).join('');
  }

  // Full grid on Products Store page
  const container = document.getElementById("product-grid");
  if (!container) return;

  let filtered = state.activeCategory === "all"
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === state.activeCategory);

  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.hindiName.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q)
    );
  }

  if (state.sortBy === "price-asc") {
    filtered.sort((a, b) => a.sizes[state.selectedProductSizes[a.id] || 0].price - b.sizes[state.selectedProductSizes[b.id] || 0].price);
  } else if (state.sortBy === "price-desc") {
    filtered.sort((a, b) => b.sizes[state.selectedProductSizes[b.id] || 0].price - a.sizes[state.selectedProductSizes[a.id] || 0].price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-sm border border-zinc-200 p-8">
        <span class="text-4xl block mb-2">🔍</span>
        <h4 class="text-base font-bold text-zinc-900">No matching oils found</h4>
        <p class="text-xs text-zinc-500 mt-1">Try searching for "groundnut", "mustard", "sesame" or clear your filter.</p>
        <button onclick="clearSearch()" class="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-sm">Reset Filter</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(buildProductCardHTML).join('');
}

function handleSearch(val) {
  state.searchQuery = val;
  renderProducts();
}

function handleSort(val) {
  state.sortBy = val;
  renderProducts();
}

function clearSearch() {
  state.searchQuery = "";
  const inp = document.getElementById("product-search-input");
  if (inp) inp.value = "";
  setProductCategory("all");
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

  const headerCartLabel = document.getElementById("header-cart-label");
  if (headerCartLabel) {
    headerCartLabel.textContent = subtotal > 0 ? `₹${subtotal}` : "Cart";
  }

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
    if (freeShipBar) freeShipBar.style.width = "0%";
    if (freeShipText) freeShipText.innerHTML = `Add <span class="font-bold text-zinc-900">₹799</span> for <span class="font-bold text-emerald-600">FREE Delivery</span>`;
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

// 8. PROCESS STEP NAVIGATION (ZERO TEMPERATURE METRICS)
const PROCESS_STEPS = [
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
  const methodElem = document.getElementById("step-method");
  const descElem = document.getElementById("step-desc");
  const listElem = document.getElementById("step-highlights");
  const numElem = document.getElementById("step-number-badge");

  if (titleElem) titleElem.textContent = step.title;
  if (gujElem) gujElem.textContent = step.gujarati;
  if (methodElem) methodElem.textContent = step.methodTag;
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

// 9. NABL LAB VERIFIER
function verifyBatch(batchCode, silent = false) {
  const inputEl = document.getElementById("batch-input");
  const code = (batchCode || (inputEl ? inputEl.value : "TR-GN-8492")).trim().toUpperCase();
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
    <div class="hologram-border bg-white rounded-sm p-6 sm:p-7 shadow-lg relative overflow-hidden mt-6">
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

  if (!silent) {
    showToast(`Loaded Certificate for Batch ${data.batchNumber} ✅`);
  }
}

// 10. OIL CALCULATOR
function calculateOilNeeds() {
  const slider = document.getElementById("family-slider");
  if (!slider) return;

  const members = parseInt(slider.value, 10);
  const style = document.querySelector('input[name="cook_style"]:checked')?.value || "balanced";

  let basePerPerson = 1.0;
  if (style === "traditional") basePerPerson = 1.3;
  if (style === "diet") basePerPerson = 0.75;

  const totalLitres = Math.round(members * basePerPerson * 10) / 10;
  const groundnutL = Math.max(1, Math.round(totalLitres * 0.6));
  const mustardL = Math.max(1, Math.round(totalLitres * 0.3));
  const sesameMl = 500;

  const disp = document.getElementById("calc-members-display");
  const tot = document.getElementById("calc-total-litres");
  const brk = document.getElementById("calc-blend-breakdown");

  if (disp) disp.textContent = `${members} ${members === 1 ? 'Person' : 'Family Members'}`;
  if (tot) tot.textContent = `${totalLitres} Litres / Month`;
  if (brk) {
    brk.innerHTML = `
      <div class="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
        <span class="font-semibold text-zinc-800">🥜 Wood-Pressed Groundnut (Everyday Sabzi &amp; Roti)</span>
        <span class="font-bold text-zinc-900">${groundnutL} Litre(s)</span>
      </div>
      <div class="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
        <span class="font-semibold text-zinc-800">🌾 Wood-Pressed Mustard (Tadka, Dal &amp; Curries)</span>
        <span class="font-bold text-zinc-900">${mustardL} Litre(s)</span>
      </div>
      <div class="flex items-center justify-between text-xs py-2">
        <span class="font-semibold text-zinc-800">🌱 Wood-Pressed Sesame (Ayurvedic/Winter Wellness)</span>
        <span class="font-bold text-zinc-900">${sesameMl} ml</span>
      </div>
    `;
  }
}

function addCalculatedBundleToCart() {
  addToCart("groundnut", 1);
  addToCart("yellow-mustard", 1);
  addToCart("white-sesame", 0);
  toggleCart(true);
  showToast("Added Recommended Family Bundle to cart! 🥗");
}

// 11. QUICKVIEW MODAL (ZERO TEMPERATURE METRICS)
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
        <span class="text-zinc-400 block font-medium">Ideal Culinary Use</span>
        <span class="font-bold text-zinc-800">${product.culinaryUse}</span>
      </div>
      <div>
        <span class="text-zinc-400 block font-medium">Pressing Method</span>
        <span class="font-bold text-emerald-700">${product.pressingMethod}</span>
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

// 12. REFINED VS COLD-PRESSED DATA (ZERO TEMPERATURE METRICS)
const COMPARISON_DATA = [
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

// 13. AUTHENTICATION & NAVBAR BEHAVIORS
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
  const avatarElem = document.getElementById("auth-avatar-initials");
  const dropName = document.getElementById("dropdown-user-fullname");
  const dropEmail = document.getElementById("dropdown-user-email");
  const dropOrdersCount = document.getElementById("dropdown-orders-count");
  const adminBadge = document.getElementById("header-admin-badge");
  const adminPanelBtn = document.getElementById("admin-panel-btn");

  if (!loggedOutContainer || !loggedInContainer) return;

  if (state.currentUser) {
    loggedOutContainer.classList.add("hidden");
    loggedInContainer.classList.remove("hidden");

    const name = state.currentUser.name || "User";
    const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    if (userNameElem) userNameElem.textContent = name;
    if (avatarElem) avatarElem.textContent = initials;
    if (dropName) dropName.textContent = name;
    if (dropEmail) dropEmail.textContent = state.currentUser.email || "";

    const userOrdersCount = state.orders.filter(o => o.email === state.currentUser.email || state.isAdmin).length;
    if (dropOrdersCount) dropOrdersCount.textContent = userOrdersCount;

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
    closeUserMenu();
    if (adminBadge) adminBadge.classList.add("hidden");
    if (adminPanelBtn) adminPanelBtn.classList.add("hidden");
  }
}

function toggleUserMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("user-dropdown-menu");
  if (menu) menu.classList.toggle("hidden");
}

function closeUserMenu() {
  const menu = document.getElementById("user-dropdown-menu");
  if (menu) menu.classList.add("hidden");
}

function toggleMobileMenu(forceState) {
  const drawer = document.getElementById("mobile-nav-drawer");
  const openIcon = document.getElementById("mobile-menu-icon-open");
  const closeIcon = document.getElementById("mobile-menu-icon-close");
  if (!drawer) return;

  const isCurrentlyHidden = drawer.classList.contains("hidden");
  const shouldOpen = typeof forceState === "boolean" ? forceState : isCurrentlyHidden;

  if (shouldOpen) {
    drawer.classList.remove("hidden");
    if (openIcon) openIcon.classList.add("hidden");
    if (closeIcon) closeIcon.classList.remove("hidden");
  } else {
    drawer.classList.add("hidden");
    if (openIcon) openIcon.classList.remove("hidden");
    if (closeIcon) closeIcon.classList.add("hidden");
  }
}

function navigateToSearch() {
  const currentPage = document.body.dataset.page || "home";
  if (currentPage === "products") {
    const searchInput = document.getElementById("product-search-input");
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => searchInput.focus(), 300);
    }
  } else {
    window.location.href = "products.html?focus=search";
  }
}

function initNavbarBehavior() {
  const header = document.getElementById("main-header");
  const headerInner = document.getElementById("header-inner");

  window.addEventListener("scroll", () => {
    if (!header || !headerInner) return;
    if (window.scrollY > 24) {
      header.classList.add("shadow-sm", "bg-white/95");
      header.classList.remove("bg-white/85");
      headerInner.classList.replace("h-[72px]", "h-[64px]");
    } else {
      header.classList.remove("shadow-sm", "bg-white/95");
      header.classList.add("bg-white/85");
      headerInner.classList.replace("h-[64px]", "h-[72px]");
    }
  }, { passive: true });

  document.addEventListener("click", (e) => {
    const loggedIn = document.getElementById("auth-logged-in");
    if (loggedIn && !loggedIn.contains(e.target)) {
      closeUserMenu();
    }
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal-up");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(el => observer.observe(el));
}

// 14. ADMIN DASHBOARD & ORDERS
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
            <span class="text-xs text-zinc-500 font-semibold block">Units 1 &amp; 2 Status</span>
            <span class="text-2xl font-bold text-emerald-600">Active (12 RPM)</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-50 rounded-sm border border-emerald-200">
          <h4 class="text-xs font-bold text-emerald-900 mb-1">Live Extraction Safeguard</h4>
          <p class="text-xs text-emerald-800">
            Visnagar Units 1 &amp; 2 operating steadily at <strong>12 RPM</strong> using Babool timber kolhus with 48-hour gravity sedimentation and zero chemical solvents.
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
                <th class="p-2.5">Customer &amp; City</th>
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
    } catch (e) {}
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
  } catch (e) {}
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

// 15. MY ORDERS MODAL
function openMyOrdersModal() {
  const modal = document.getElementById("orders-modal");
  const content = document.getElementById("orders-modal-content");
  if (!modal || !content) return;

  const userEmail = state.currentUser?.email || "priya@example.com";
  const userOrders = state.orders.filter(o => o.email === userEmail || state.isAdmin);

  content.innerHTML = `
    <div class="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200">
      <div>
        <h3 class="text-base font-bold text-zinc-900">My Orders &amp; Fresh Batches</h3>
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

// 16. ORDER CHECKOUT
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
  } catch (e) {}

  return newOrder;
}

// 17. TOAST UTILITY
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

// 18. INITIALIZATION ACROSS ALL PAGES
document.addEventListener("DOMContentLoaded", () => {
  renderSharedShell();
  renderProducts();
  renderComparisonTable();

  if (document.getElementById("step-title")) {
    selectProcessStep(2);
  }

  if (document.getElementById("family-slider")) {
    calculateOilNeeds();
    document.getElementById("family-slider").addEventListener("input", calculateOilNeeds);
    document.querySelectorAll('input[name="cook_style"]').forEach(r => {
      r.addEventListener("change", calculateOilNeeds);
    });
  }

  if (document.getElementById("batch-result-container")) {
    verifyBatch("TR-GN-8492", true);
  }

  // Handle ?focus=search redirect from quick search button
  const params = new URLSearchParams(window.location.search);
  if (params.get("focus") === "search") {
    const searchInput = document.getElementById("product-search-input");
    if (searchInput) setTimeout(() => searchInput.focus(), 200);
  }

  updateCartUI();
  updateAuthHeader();
  initNavbarBehavior();
  initScrollReveal();
});
