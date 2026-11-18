# Trushita Natural Food - Wood-Pressed Oils Store & Traceability Platform

A modern, responsive, and animated Direct-to-Consumer (D2C) web application for **Trushita Natural Food** (*Visnagar, Gujarat*). It showcases farm-to-bottle unrefined cold-pressed (*Lakdi Ghani*) edible and wellness oils with batch-level NABL lab test verification, interactive process simulations, smart oil requirement calculators, user authentication, and an administrative control portal.

---

## 🌿 Key Features

### 1. Interactive Experience & Animations
* **Live Wood Ghani Simulator:** Animated SVG/CSS wooden expeller (*Kolhu*) with rotating pestle, rotating seed chamber, center oil reservoir, and ambient dripping droplet physics.
* **Extraction Telemetry:** Real-time simulated temperature display (`37.4°C - Safe Cold Press`) and mechanical speed meter (`12 RPM`).
* **5-Stage Process Explorer:** Interactive step-by-step pipeline (*Seed Procurement $\rightarrow$ Sun Drying $\rightarrow$ Wood Ghani Crushing $\rightarrow$ Sedimentation $\rightarrow$ Cotton Filtration*).
* **Refined vs. Cold-Pressed Reality Check:** Side-by-side comparison matrix highlighting industrial chemical bleaching/hexane solvent extraction vs. Trushita's 100% natural cold pressing.

### 2. Product Catalog & Commerce
* **Full Product Line:**
  * Wood-Pressed Groundnut (Peanut) Oil
  * Wood-Pressed Yellow Mustard Oil
  * Wood-Pressed Black Mustard Oil
  * Wood-Pressed White Sesame Oil
  * Raw Virgin Cold-Pressed Coconut Oil
  * Pure Virgin Flaxseed Oil
  * 4-Oil Kitchen Discovery Taster Box
* **Dynamic Packaging Switcher:** Real-time pricing, savings calculation, and smoke-point indicators for 500ml, 1 Litre, and 5 Litre Tins.
* **Slide-over Cart Drawer:** Quantity adjustments, free delivery threshold meter (₹799), coupon engine (e.g., `PURE10`, `TRUSHITA10`), and 1-Click WhatsApp direct ordering.

### 3. Radical Transparency & Trust Tools
* **NABL Batch Lab Report Verifier:** Enter or select batch codes (e.g., `TR-GN-8492`, `TR-YM-5510`, `TR-WS-3304`) to view accredited lab test results (Free Fatty Acids, Moisture, Aflatoxin, Solvent Residues) with print support.
* **Smart Family Oil Calculator:** Slider-based monthly consumption estimator tailored to family size and cooking style (Traditional, Balanced, Light).

### 4. Authentication & Administration
* **Customer Authentication:** Sign in / Sign up with persistent local sessions, personal order history tracking, and fulfillment updates (*Pending*, *Wood-Ghani Pressing*, *Quality NABL Tested*, *Dispatched*, *Delivered*).
* **Farm Admin Portal:** Protected management dashboard with:
  * **Plant Analytics:** Total sales volume, order counters, and litres pressed.
  * **Order Fulfillment Manager:** Live status updater across online and WhatsApp orders.
  * **NABL Batch Manager:** Create and publish new verified batches with custom test metrics.
  * **Promo Code Manager:** Create custom discount percentages live.

---

## 🎨 Color Palette & Branding

Matches the official [trushita.farm](https://www.trushita.farm/) branding:
* **Primary Emerald:** `#059669` (Emerald-600) & `#047857` (Emerald-700)
* **Action Accent:** `#000000` (Matte Jet Black) with `#27272A` (Zinc-800) hover
* **Backgrounds:** `#FFFFFF` (Pure White) & `#FAFAFA` (Zinc-50)
* **Borders:** `#E4E4E7` (Zinc-200) & `#D4D4D8` (Zinc-300)
* **Logo:** Official `trushita.svg` vector asset.

---

## 🚀 Getting Started

The project is completely self-contained with no heavy build requirements.

### Option 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer to open it in any modern web browser.

### Option 2: Local HTTP Server
Run a local static server using Python or Node.js:

```bash
# Using Python
python -m http.server 3000

# Or using Node.js
npx serve .
```
Then visit `http://localhost:3000`.

---

## 🔐 Demo Credentials

* **Customer Demo:** Click `⚡ Quick Demo Customer Login` in the Sign In modal (or use `priya@example.com`).
* **Admin Demo:** Click `⚡ 1-Click Demo Admin Login` in the Admin tab (or use `admin@trushita.farm` / `admin`).

---

## 📄 License
MIT License. Created for Trushita Natural Food LLP.
