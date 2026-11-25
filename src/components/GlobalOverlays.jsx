import React, { useState, useEffect } from "react";
import { X, ShoppingBag, ShieldCheck, MessageCircle, CreditCard, Sparkles } from "lucide-react";
import { PRODUCTS } from "../data/catalog.js";
import {
  useTrushitaStore,
  setCartOpen,
  changeCartQty,
  removeCartItem,
  applyPromoCode,
  checkoutWhatsApp,
  checkoutOnline,
  closeAuthModal,
  loginCustomer,
  loginAdmin,
  logoutUser,
  setAdminModalOpen,
  setOrdersModalOpen,
  setQuickViewProduct,
  addToCart,
  updateOrderStatus,
  addTestedBatch,
  addPromoCode
} from "../lib/store.js";

export default function GlobalOverlays() {
  const store = useTrushitaStore();

  // Auth form local inputs
  const [authTab, setAuthTab] = useState(store.authMode || "customer");
  useEffect(() => {
    setAuthTab(store.authMode);
  }, [store.authMode, store.authModalOpen]);
  const [custName, setCustName] = useState("Priya Patel");
  const [custEmail, setCustEmail] = useState("priya@example.com");
  const [adminEmail, setAdminEmail] = useState("admin@trushita.farm");
  const [adminPass, setAdminPass] = useState("admin");

  // Cart promo local input
  const [promoInput, setPromoInput] = useState("");

  // Admin Dashboard tab & inputs
  const [adminTab, setAdminTab] = useState("orders");
  const [newCouponCode, setNewCouponCode] = useState("");
  const [newCouponPct, setNewCouponPct] = useState("");
  const [newBatchCode, setNewBatchCode] = useState("");

  // Cart calculations
  const subtotal = store.cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const threshold = 799;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const diff = threshold - subtotal;
  const shipping = subtotal >= threshold || subtotal === 0 ? 0 : 70;
  const discountAmount = Math.round(subtotal * (store.promoDiscount / 100));
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  // QuickView Product
  const quickProduct = store.quickViewProductId
    ? PRODUCTS.find((p) => p.id === store.quickViewProductId)
    : null;

  // User Orders
  const isAdmin = store.currentUser?.role === "admin";
  const userEmail = store.currentUser?.email || "priya@example.com";
  const userOrders = store.orders.filter((o) => o.email === userEmail || isAdmin);

  // Admin Analytics
  const totalRev = store.orders.reduce((s, o) => s + o.total, 0);
  const totalLitres = store.orders.reduce((sum, o) => {
    let l = 0;
    o.items.forEach((it) => {
      if (it.size.includes("5 Litre")) l += 5 * it.quantity;
      else if (it.size.includes("1 Litre")) l += 1 * it.quantity;
      else l += 0.5 * it.quantity;
    });
    return sum + l;
  }, 0);

  return (
    <>
      {/* ================= AUTH MODAL ================= */}
      {store.authModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-sm w-full shadow-2xl border border-zinc-300 overflow-hidden">
            <div className="flex border-b border-zinc-200">
              <button
                onClick={() => setAuthTab("customer")}
                className={`flex-1 py-3 text-center text-xs transition-all border-b-2 ${
                  authTab === "customer"
                    ? "font-bold border-black text-black bg-zinc-50"
                    : "font-semibold text-zinc-500 border-transparent hover:text-zinc-900"
                }`}
              >
                Customer Sign In
              </button>
              <button
                onClick={() => setAuthTab("admin")}
                className={`flex-1 py-3 text-center text-xs transition-all border-b-2 ${
                  authTab === "admin"
                    ? "font-bold border-emerald-600 text-emerald-700 bg-emerald-50/50"
                    : "font-semibold text-zinc-500 border-transparent hover:text-zinc-900"
                }`}
              >
                Farm Admin Login
              </button>
            </div>

            {authTab !== "admin" ? (
              <div className="p-6 space-y-4">
                <div className="text-center mb-2">
                  <div className="w-10 h-10 mx-auto mb-2 p-1 bg-[#f3f8f5] border border-emerald-200 rounded-sm">
                    <img src="/trushita.svg" alt="Trushita" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900">Sign in to Trushita Farm</h3>
                  <p className="text-[11px] text-zinc-500">Track your fresh oil orders &amp; batch reports</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    loginCustomer(custName, custEmail);
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={custEmail}
                      onChange={(e) => setCustEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Password</label>
                    <input
                      type="password"
                      defaultValue="••••••••"
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    Sign In / Continue
                  </button>
                </form>

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                  <button
                    onClick={() => loginCustomer("Priya Patel", "priya@example.com")}
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    Quick Demo Customer Login
                  </button>
                  <button onClick={closeAuthModal} className="text-zinc-400 hover:text-zinc-600">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                <div className="text-center mb-2">
                  <div className="w-10 h-10 mx-auto mb-2 p-1 bg-emerald-50 border border-emerald-300 rounded-sm flex items-center justify-center text-emerald-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900">Farm Administration Portal</h3>
                  <p className="text-[11px] text-zinc-500">Manage orders, NABL batches &amp; oil production</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    loginAdmin();
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Admin Email</label>
                    <input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-medium font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">Security Key / Password</label>
                    <input
                      type="password"
                      value={adminPass}
                      onChange={(e) => setAdminPass(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 rounded-sm focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-zinc-50 font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    Unlock Admin Dashboard
                  </button>
                </form>

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                  <button onClick={loginAdmin} className="text-emerald-700 font-bold hover:underline">
                    1-Click Demo Admin Login
                  </button>
                  <button onClick={closeAuthModal} className="text-zinc-400 hover:text-zinc-600">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= ADMIN DASHBOARD MODAL ================= */}
      {store.adminModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white rounded-sm max-w-4xl w-full shadow-2xl border border-zinc-300 max-h-[92vh] flex flex-col overflow-hidden">
            <div className="p-4 bg-zinc-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 p-1 bg-white rounded-sm">
                  <img src="/trushita.svg" alt="Trushita" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold tracking-tight">Trushita Farm Administration</h3>
                    <span className="text-[9px] font-bold bg-emerald-500 text-zinc-950 px-1.5 py-0.5 rounded-sm uppercase">
                      SUPERADMIN
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400">Visnagar Unit 1 &amp; 2 • Live Plant Control</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={logoutUser} className="text-xs text-red-400 hover:text-red-300 font-semibold">
                  Logout Admin
                </button>
                <button onClick={() => setAdminModalOpen(false)} className="text-zinc-400 hover:text-white p-1">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex border-b border-zinc-200 bg-zinc-50 p-2 gap-1.5 overflow-x-auto">
              {[
                { id: "orders", label: "Order Management" },
                { id: "overview", label: "Plant Analytics" },
                { id: "batches", label: "NABL Tested Batches" },
                { id: "coupons", label: "Promo Codes" }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setAdminTab(t.id)}
                  className={`px-4 py-2 text-xs rounded-sm transition-colors ${
                    adminTab === t.id
                      ? "font-bold bg-black text-white"
                      : "font-semibold bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="p-5 flex-1 overflow-y-auto">
              {adminTab === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
                      <span className="text-xs text-zinc-500 font-semibold block">Total Revenue</span>
                      <span className="text-2xl font-bold text-zinc-900">₹{totalRev.toLocaleString()}</span>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
                      <span className="text-xs text-zinc-500 font-semibold block">Total Orders</span>
                      <span className="text-2xl font-bold text-emerald-700">{store.orders.length}</span>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
                      <span className="text-xs text-zinc-500 font-semibold block">Total Litres Crushed</span>
                      <span className="text-2xl font-bold text-zinc-900">{totalLitres.toFixed(1)} L</span>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-200">
                      <span className="text-xs text-zinc-500 font-semibold block">Units 1 &amp; 2 Status</span>
                      <span className="text-2xl font-bold text-emerald-600">Active (12 RPM)</span>
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-sm border border-emerald-200">
                    <h4 className="text-xs font-bold text-emerald-900 mb-1">Live Extraction Safeguard</h4>
                    <p className="text-xs text-emerald-800">
                      Visnagar Units 1 &amp; 2 operating steadily at <strong>12 RPM</strong> using Babool timber kolhus with 48-hour gravity sedimentation and zero chemical solvents.
                    </p>
                  </div>
                </div>
              )}

              {adminTab === "orders" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                      All Customer Orders ({store.orders.length})
                    </h4>
                    <span className="text-[11px] text-zinc-500">Live order fulfillment sync</span>
                  </div>
                  <div className="overflow-x-auto border border-zinc-200 rounded-sm">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-zinc-100 text-zinc-700 border-b border-zinc-200 font-bold">
                        <tr>
                          <th className="p-2.5">Order ID</th>
                          <th className="p-2.5">Customer &amp; City</th>
                          <th className="p-2.5">Items</th>
                          <th className="p-2.5">Amount</th>
                          <th className="p-2.5">Payment</th>
                          <th className="p-2.5">Fulfillment Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 bg-white">
                        {store.orders.map((o) => (
                          <tr key={o.id} className="hover:bg-zinc-50 transition-colors">
                            <td className="p-2.5 font-mono font-bold text-emerald-700">{o.id}</td>
                            <td className="p-2.5">
                              <span className="font-bold text-zinc-900 block">{o.customerName}</span>
                              <span className="text-[10px] text-zinc-500">
                                {o.city} • {o.phone}
                              </span>
                            </td>
                            <td className="p-2.5">
                              {o.items.map((it, idx) => (
                                <span key={idx} className="block text-[11px] text-zinc-700">
                                  {it.name} ({it.size}) x{it.quantity}
                                </span>
                              ))}
                            </td>
                            <td className="p-2.5 font-bold text-zinc-900">₹{o.total}</td>
                            <td className="p-2.5">
                              <span className="text-[10px] font-semibold bg-zinc-100 px-2 py-0.5 rounded-sm text-zinc-700">
                                {o.paymentMethod}
                              </span>
                            </td>
                            <td className="p-2.5">
                              <select
                                value={o.status}
                                onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                                className="text-[11px] font-bold p-1 rounded-sm border border-zinc-300 bg-white text-zinc-800"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Wood-Ghani Pressing">Wood-Ghani Pressing</option>
                                <option value="Quality NABL Tested">Quality NABL Tested</option>
                                <option value="Dispatched">Dispatched</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {adminTab === "batches" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                      Active NABL Tested Batches
                    </h4>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newBatchCode}
                        onChange={(e) => setNewBatchCode(e.target.value)}
                        placeholder="e.g. TR-CO-9901"
                        className="px-2.5 py-1 text-xs border border-zinc-300 rounded-sm uppercase font-mono"
                      />
                      <button
                        onClick={() => {
                          addTestedBatch(newBatchCode || "TR-CO-9901");
                          setNewBatchCode("");
                        }}
                        className="px-3 py-1.5 rounded-sm bg-black text-white text-xs font-bold hover:bg-zinc-800"
                      >
                        + Add Batch
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {Object.values(store.batches).map((b) => (
                      <div key={b.batchNumber} className="p-3 bg-zinc-50 rounded-sm border border-zinc-200">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono font-bold text-emerald-700 text-xs">{b.batchNumber}</span>
                          <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm">
                            NABL PASS
                          </span>
                        </div>
                        <h5 className="font-bold text-xs text-zinc-900">{b.oilName}</h5>
                        <p className="text-[10px] text-zinc-500 mt-1">Pressed: {b.crushDate}</p>
                        <p className="text-[10px] text-zinc-500">Source: {b.seedSource}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {adminTab === "coupons" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Active Promo Codes</h4>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newCouponCode}
                        onChange={(e) => setNewCouponCode(e.target.value)}
                        placeholder="CODE (e.g. SUMMER15)"
                        className="px-2 py-1 text-xs border border-zinc-300 rounded-sm uppercase font-mono"
                      />
                      <input
                        type="number"
                        value={newCouponPct}
                        onChange={(e) => setNewCouponPct(e.target.value)}
                        placeholder="%"
                        className="w-16 px-2 py-1 text-xs border border-zinc-300 rounded-sm font-mono"
                      />
                      <button
                        onClick={() => {
                          addPromoCode(newCouponCode, newCouponPct);
                          setNewCouponCode("");
                          setNewCouponPct("");
                        }}
                        className="px-3 py-1 rounded-sm bg-black text-white text-xs font-bold"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.entries(store.promoCodes).map(([c, pct]) => (
                      <div
                        key={c}
                        className="p-3 bg-zinc-50 rounded-sm border border-zinc-200 flex items-center justify-between"
                      >
                        <div>
                          <span className="font-mono font-bold text-xs text-zinc-900">{c}</span>
                          <span className="text-[11px] text-emerald-700 block font-semibold">{pct}% Discount</span>
                        </div>
                        <span className="text-xs text-emerald-600 font-bold">ACTIVE</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MY ORDERS MODAL ================= */}
      {store.ordersModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-lg w-full p-6 shadow-2xl max-h-[85vh] overflow-y-auto border border-zinc-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200">
              <div>
                <h3 className="text-base font-bold text-zinc-900">My Orders &amp; Fresh Batches</h3>
                <p className="text-xs text-zinc-500">{userEmail}</p>
              </div>
              <button onClick={() => setOrdersModalOpen(false)} className="text-zinc-400 hover:text-zinc-700 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            {userOrders.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-xs text-zinc-500">You haven&apos;t placed any orders yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {userOrders.map((o) => (
                  <div key={o.id} className="p-3.5 bg-zinc-50 rounded-sm border border-zinc-200">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-200/60">
                      <div>
                        <span className="font-mono font-bold text-xs text-emerald-700">{o.id}</span>
                        <span className="text-[10px] text-zinc-400 ml-2">{o.date}</span>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                          o.status === "Delivered"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-zinc-200 text-zinc-900"
                        }`}
                      >
                        {o.status}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-700 space-y-1 mb-2">
                      {o.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>
                            {it.name} ({it.size}) x{it.quantity}
                          </span>
                          <span className="font-bold text-zinc-900">₹{it.price * it.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-xs">
                      <span className="text-zinc-500 text-[11px]">
                        Batch: <span className="font-mono font-bold text-zinc-800">{o.batch || "TR-GN-8492"}</span>
                      </span>
                      <span className="font-bold text-zinc-900">Total: ₹{o.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= SLIDE-OVER CART DRAWER ================= */}
      {store.cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col justify-between ${
          store.cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold text-zinc-900">Your Shopping Cart</h3>
          </div>
          <button onClick={() => setCartOpen(false)} className="text-zinc-400 hover:text-zinc-700 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-2.5 bg-zinc-50 border-b border-zinc-200 text-xs">
          <div className="mb-1 font-medium text-zinc-700 text-[11px]">
            {subtotal >= threshold ? (
              <span className="text-emerald-600 font-bold">FREE Delivery Unlocked!</span>
            ) : (
              <>
                Add <span className="font-bold text-zinc-900">₹{diff}</span> more for{" "}
                <span className="font-bold text-emerald-600">FREE Delivery</span>
              </>
            )}
          </div>
          <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {store.cart.length === 0 ? (
            <div className="text-center py-14">
              <ShoppingBag className="w-10 h-10 text-zinc-300 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-zinc-900 mb-1">Your cart is empty</h4>
              <p className="text-xs text-zinc-500 mb-3">
                Add some pure Gujarat wood-pressed oils to get started!
              </p>
              <a
                href="/products"
                onClick={() => setCartOpen(false)}
                className="inline-block px-3.5 py-1.5 rounded-sm bg-black text-white text-xs font-bold"
              >
                Shop Oils
              </a>
            </div>
          ) : (
            store.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 bg-zinc-50 rounded-sm border border-zinc-200/70 mb-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-900">{item.name}</h4>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                      {item.size}
                    </span>
                    <span className="text-xs font-bold text-zinc-900 ml-1.5">₹{item.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-zinc-300 rounded-sm bg-white overflow-hidden">
                    <button
                      onClick={() => changeCartQty(item.id, -1)}
                      className="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100 font-bold"
                    >
                      −
                    </button>
                    <span className="px-2 text-xs font-bold text-zinc-900">{item.quantity}</span>
                    <button
                      onClick={() => changeCartQty(item.id, 1)}
                      className="px-2 py-0.5 text-xs text-zinc-600 hover:bg-zinc-100 font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="text-zinc-400 hover:text-red-600 text-xs p-1"
                    title="Remove"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {store.cart.length > 0 && (
          <div className="p-4 border-t border-zinc-200 bg-zinc-50 space-y-3 text-xs">
            <div className="flex gap-2">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Promo code (e.g. PURE10)"
                className="flex-1 px-3 py-1.5 text-xs rounded-sm border border-zinc-300 focus:outline-hidden uppercase font-mono bg-white"
              />
              <button
                onClick={() => applyPromoCode(promoInput)}
                className="px-3 py-1.5 rounded-sm bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-colors"
              >
                Apply
              </button>
            </div>

            <div className="space-y-1 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-zinc-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Discount</span>
                <span className="font-bold">-₹{discountAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-bold text-zinc-900">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-zinc-900 pt-2 border-t border-zinc-200">
                <span>Total</span>
                <span className="text-emerald-700">₹{grandTotal}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <button
                onClick={checkoutWhatsApp}
                className="w-full py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Order Directly on WhatsApp</span>
              </button>
              <button
                onClick={checkoutOnline}
                className="w-full py-2 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Proceed to Checkout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ================= QUICKVIEW MODAL ================= */}
      {quickProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto border border-zinc-200">
            <div className="flex items-start justify-between mb-4 pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{quickProduct.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{quickProduct.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700">{quickProduct.hindiName}</p>
                </div>
              </div>
              <button onClick={() => setQuickViewProduct(null)} className="text-zinc-400 hover:text-zinc-700 p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">{quickProduct.shortDesc}</p>

            <div className="grid grid-cols-2 gap-2 text-xs bg-zinc-50 p-3 rounded-sm mb-4 border border-zinc-200">
              <div>
                <span className="text-zinc-400 block font-medium">Sourcing Region</span>
                <span className="font-bold text-zinc-800">{quickProduct.seedOrigin}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">Ideal Culinary Use</span>
                <span className="font-bold text-zinc-800">{quickProduct.culinaryUse}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">Pressing Method</span>
                <span className="font-bold text-emerald-700">{quickProduct.pressingMethod}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">Solvent Hexane</span>
                <span className="font-bold text-emerald-700">0.0% (Zero)</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-zinc-900 mb-2">Nutritional Values (per 100g):</h4>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">MUFA</span>
                  <span className="font-bold text-zinc-900">{quickProduct.nutrition.mufa}</span>
                </div>
                <div className="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">PUFA</span>
                  <span className="font-bold text-zinc-900">{quickProduct.nutrition.pufa}</span>
                </div>
                <div className="bg-zinc-50 p-2 rounded-sm border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 block">Vitamin E</span>
                  <span className="font-bold text-emerald-700">{quickProduct.nutrition.vitaminE}</span>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-zinc-900 mb-2">Purity Guarantees:</h4>
              <ul className="space-y-1 text-xs text-zinc-600">
                {quickProduct.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                addToCart(quickProduct.id, store.selectedSizes[quickProduct.id] ?? 0);
                setQuickViewProduct(null);
              }}
              className="w-full py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all"
            >
              Add Selected Pack to Cart
            </button>
          </div>
        </div>
      )}

      {/* ================= GLOBAL TOAST ================= */}
      {store.toastMessage && (
        <div className="toast-animate fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 text-white px-4 py-2.5 rounded-sm shadow-xl border border-zinc-800 flex items-center gap-2 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{store.toastMessage}</span>
        </div>
      )}
    </>
  );
}
