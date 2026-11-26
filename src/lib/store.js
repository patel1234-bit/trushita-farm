/**
 * Lightweight Reactive Shared Store for Astro React Islands
 * Synchronizes Cart, Auth, Orders, Batches, Modals, and Toasts across islands & pages.
 */

import { useState, useEffect } from "react";
import { PRODUCTS, INITIAL_BATCH_DATABASE, INITIAL_ORDERS } from "../data/catalog.js";

const initialSizes = {};
PRODUCTS.forEach((p) => {
  const idx = p.sizes.findIndex((s) => s.default);
  initialSizes[p.id] = idx !== -1 ? idx : 0;
});

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, val) {
  if (typeof window === "undefined") return;
  try {
    if (val === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

let storeState = {
  cart: [],
  selectedSizes: { ...initialSizes },
  promoDiscount: 0,
  promoCodes: { PURE10: 10, TRUSHITA10: 10, FARM20: 20 },
  currentUser: null,
  orders: INITIAL_ORDERS,
  batches: INITIAL_BATCH_DATABASE,

  // Global Modal / Drawer states
  cartOpen: false,
  authModalOpen: false,
  authMode: "customer", // 'customer' | 'admin'
  adminModalOpen: false,
  ordersModalOpen: false,
  quickViewProductId: null,
  toastMessage: ""
};

let hydrated = false;
const listeners = new Set();

function hydrateFromStorage() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  storeState = {
    ...storeState,
    cart: readStorage("trushita_cart", []),
    currentUser: readStorage("trushita_user", null),
    orders: readStorage("trushita_orders_v2", INITIAL_ORDERS),
    batches: readStorage("trushita_batches_v2", INITIAL_BATCH_DATABASE)
  };
}

function notify() {
  listeners.forEach((fn) => fn(storeState));
}

export function useTrushitaStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    hydrateFromStorage();
    setTick((t) => t + 1);
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return storeState;
}

// --- Store Actions ---

let toastTimer = null;
export function showToast(msg) {
  storeState = { ...storeState, toastMessage: msg };
  notify();
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    storeState = { ...storeState, toastMessage: "" };
    notify();
  }, 3200);
}

export function selectProductSize(productId, sizeIdx) {
  storeState = {
    ...storeState,
    selectedSizes: { ...storeState.selectedSizes, [productId]: sizeIdx }
  };
  notify();
}

export function addToCart(productId, sizeIdx) {
  hydrateFromStorage();
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const idx = typeof sizeIdx === "number" ? sizeIdx : storeState.selectedSizes[productId] || 0;
  const sizeObj = product.sizes[idx];
  const cartItemId = `${productId}-${sizeObj.size}`;

  const existing = storeState.cart.find((i) => i.id === cartItemId);
  const nextCart = existing
    ? storeState.cart.map((i) => (i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i))
    : [
        ...storeState.cart,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          size: sizeObj.size,
          price: sizeObj.price,
          icon: product.icon,
          image: sizeObj.image || product.image,
          quantity: 1
        }
      ];

  storeState = { ...storeState, cart: nextCart };
  writeStorage("trushita_cart", nextCart);
  notify();
  showToast(`Added ${product.name} (${sizeObj.size}) to cart!`);
}

export function changeCartQty(cartItemId, delta) {
  const nextCart = storeState.cart
    .map((i) => (i.id === cartItemId ? { ...i, quantity: i.quantity + delta } : i))
    .filter((i) => i.quantity > 0);
  storeState = { ...storeState, cart: nextCart };
  writeStorage("trushita_cart", nextCart);
  notify();
}

export function removeCartItem(cartItemId) {
  const nextCart = storeState.cart.filter((i) => i.id !== cartItemId);
  storeState = { ...storeState, cart: nextCart };
  writeStorage("trushita_cart", nextCart);
  notify();
  showToast("Item removed from cart");
}

export function applyPromoCode(rawCode) {
  const code = (rawCode || "").trim().toUpperCase();
  if (storeState.promoCodes[code]) {
    const pct = storeState.promoCodes[code];
    storeState = { ...storeState, promoDiscount: pct };
    notify();
    showToast(`${pct}% Farm discount (${code}) applied!`);
    return true;
  }
  showToast("Invalid promo code. Try 'PURE10'");
  return false;
}

export function setCartOpen(open) {
  storeState = { ...storeState, cartOpen: open };
  notify();
}

export function openAuthModal(mode = "customer") {
  storeState = { ...storeState, authModalOpen: true, authMode: mode };
  notify();
}

export function closeAuthModal() {
  storeState = { ...storeState, authModalOpen: false };
  notify();
}

export function loginCustomer(name, email) {
  const user = {
    name: (name || "Priya Patel").trim(),
    email: (email || "priya@example.com").trim(),
    role: "customer"
  };
  storeState = { ...storeState, currentUser: user, authModalOpen: false };
  writeStorage("trushita_user", user);
  notify();
  showToast(`Welcome back, ${user.name}!`);
}

export function loginAdmin() {
  const admin = {
    name: "Farm Administrator",
    email: "admin@trushita.farm",
    role: "admin"
  };
  storeState = {
    ...storeState,
    currentUser: admin,
    authModalOpen: false,
    adminModalOpen: true
  };
  writeStorage("trushita_user", admin);
  notify();
  showToast("Logged in as Trushita Farm Admin");
}

export function logoutUser() {
  storeState = {
    ...storeState,
    currentUser: null,
    adminModalOpen: false,
    ordersModalOpen: false
  };
  writeStorage("trushita_user", null);
  notify();
  showToast("Signed out successfully");
}

export function setAdminModalOpen(open) {
  storeState = { ...storeState, adminModalOpen: open };
  notify();
}

export function setOrdersModalOpen(open) {
  storeState = { ...storeState, ordersModalOpen: open };
  notify();
}

export function setQuickViewProduct(productId) {
  storeState = { ...storeState, quickViewProductId: productId };
  notify();
}

export function updateOrderStatus(orderId, status) {
  const nextOrders = storeState.orders.map((o) => (o.id === orderId ? { ...o, status } : o));
  storeState = { ...storeState, orders: nextOrders };
  writeStorage("trushita_orders_v2", nextOrders);
  notify();
  showToast(`Order ${orderId} updated to ${status}`);
}

export function addTestedBatch(batchCode) {
  const code = (batchCode || "").trim().toUpperCase();
  if (!code) return;
  const nextBatches = {
    ...storeState.batches,
    [code]: {
      batchNumber: code,
      oilName: "Wood-Pressed Fresh Batch Oil",
      crushDate: "25-Nov-2026",
      dispatchWindow: "Pressed & Sealed in Visnagar",
      expiryDate: "12 Months from Packing",
      fssaiRef: "FSSAI Lic. 10723999000614 (ISO / NABL-Aligned QC Protocol)",
      seedSource: "Visnagar & Saurashtra Farmer Cooperative",
      status: "VERIFIED PURE • SINGLE-ORIGIN BATCH",
      parameters: [
        { param: "Raw Material Identity", standard: "100% Single-Origin Seeds", result: "Sortex Cleaned & Inspected", status: "VERIFIED" },
        { param: "Extraction Method", standard: "Zero Hexane Mechanical Press", result: "Traditional Wood Ghani (12 RPM)", status: "VERIFIED" },
        { param: "Clarification & Filtration", standard: "No Solvent / Acid Refining", result: "48-Hr Gravity Settling + Cotton Filter", status: "PASS" }
      ]
    }
  };
  storeState = { ...storeState, batches: nextBatches };
  writeStorage("trushita_batches_v2", nextBatches);
  notify();
  showToast(`Added Batch ${code} to Trushita Traceability Registry!`);
}

export function addPromoCode(code, pct) {
  const clean = (code || "").trim().toUpperCase();
  const num = parseInt(pct, 10);
  if (!clean || !(num > 0)) return;
  storeState = {
    ...storeState,
    promoCodes: { ...storeState.promoCodes, [clean]: num }
  };
  notify();
  showToast(`Created promo code ${clean} (${num}% off)`);
}

function recordOrder(method) {
  const subtotal = storeState.cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const discount = Math.round(subtotal * (storeState.promoDiscount / 100));
  const shipping = subtotal >= 799 || subtotal === 0 ? 0 : 70;
  const total = Math.max(0, subtotal - discount + shipping);

  const order = {
    id: `TR-ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    date: "25-Nov-2026",
    customerName: storeState.currentUser ? storeState.currentUser.name : "Guest Customer",
    email: storeState.currentUser ? storeState.currentUser.email : "guest@trushita.farm",
    phone: "+91 98000 00000",
    city: "Gujarat / India",
    items: [...storeState.cart],
    total,
    status: "Wood-Ghani Pressing",
    paymentMethod: method,
    batch: "TR-GN-8492"
  };

  const nextOrders = [order, ...storeState.orders];
  storeState = { ...storeState, orders: nextOrders };
  writeStorage("trushita_orders_v2", nextOrders);
  notify();
  return order;
}

export function checkoutWhatsApp() {
  if (storeState.cart.length === 0) {
    showToast("Your cart is empty! Please add some oils first.");
    return;
  }
  recordOrder("WhatsApp Order");

  const subtotal = storeState.cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const discount = Math.round(subtotal * (storeState.promoDiscount / 100));
  const shipping = subtotal >= 799 ? 0 : 70;
  const total = Math.max(0, subtotal - discount + shipping);

  let msg = `*Namaste Trushita Farm!*\nI would like to order fresh Wood-Pressed Oils:\n\n`;
  storeState.cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}* (${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });
  msg += `\n*Subtotal:* ₹${subtotal}`;
  if (discount > 0) msg += `\n*Discount:* -₹${discount}`;
  msg += `\n*Shipping:* ${shipping === 0 ? "FREE" : "₹" + shipping}`;
  msg += `\n*Total Payable:* ₹${total}`;
  if (storeState.currentUser) {
    msg += `\n*Customer:* ${storeState.currentUser.name} (${storeState.currentUser.email})`;
  }
  msg += `\n\nPlease confirm order and share UPI payment QR code. Thank you!`;

  window.open(`https://api.whatsapp.com/send?phone=919409000000&text=${encodeURIComponent(msg)}`, "_blank");
}

export function checkoutOnline() {
  if (storeState.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  const order = recordOrder("Online UPI / Card");
  storeState = {
    ...storeState,
    cart: [],
    cartOpen: false,
    ordersModalOpen: true
  };
  writeStorage("trushita_cart", []);
  notify();
  showToast(`Order ${order.id} placed successfully!`);
}
