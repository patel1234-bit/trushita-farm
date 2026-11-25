# Trushita Natural Food — Astro + React Islands Storefront

An ultra-fast, mobile-first Direct-to-Consumer (D2C) web application for **Trushita Natural Food** (*Visnagar, Gujarat*), built with **Astro 5 Islands Architecture**, **React 19**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## ⚡ Why Astro Islands for Mobile Speed

* **Zero JS for Static Content:** Announcement ticker, Hero copy, Why Choose Trushita, Refined vs. Wood-Pressed comparison table, Heritage Story, FAQs, and Footer compile to pure static HTML + purged CSS.
* **Selective React Hydration:** Only interactive widgets (`NavbarIsland`, `GhaniSimulator`, `ProductStore`, `ProcessExplorer`, `LabReportVerifier`, `OilCalculator`, `GlobalOverlays`) hydrate on the client.
* **Smooth Cross-Page Navigation:** Uses Astro's `<ClientRouter />` View Transitions for zero-flicker mobile navigation across all 5 routes.

---

## 📄 Multi-Page Routes

* `/` (`src/pages/index.astro`) — Home Overview, Interactive Wood-Ghani Simulator (Units #1 & #2), Why Choose Trushita, Featured Oils, and Marketplaces
* `/products` (`src/pages/products.astro`) — Full 7-oil Store with live search, category tabs, sorting, packaging switchers, and Quick View modal
* `/process` (`src/pages/process.astro`) — 5-Stage Wood-Ghani Explorer, Refined vs. Cold-Pressed comparison, and Visnagar Heritage
* `/lab-reports` (`src/pages/lab-reports.astro`) — NABL Batch Lab Report Verifier with printable holographic certificate and FAQs
* `/calculator` (`src/pages/calculator.astro`) — Smart Monthly Household Oil Calculator with 1-click bundle add-to-cart

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Start local Astro dev server
npm run dev

# Build static production output to ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Demo Credentials

* **Customer Demo:** Click `Sign In` $\rightarrow$ `Quick Demo Customer Login` (or `priya@example.com`).
* **Admin Portal:** Click the Lock icon in the navbar $\rightarrow$ `1-Click Demo Admin Login` (or `admin@trushita.farm` / `admin`).
