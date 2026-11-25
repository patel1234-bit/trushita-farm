import React, { useState, useEffect } from "react";
import { Search, User, Lock, ChevronDown, Package, ShieldCheck, LogOut, ShoppingBag, Menu, X } from "lucide-react";
import {
  useTrushitaStore,
  openAuthModal,
  logoutUser,
  setCartOpen,
  setAdminModalOpen,
  setOrdersModalOpen,
  checkoutWhatsApp
} from "../lib/store.js";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Oils Store", href: "/products" },
  { id: "process", label: "Process", href: "/process" },
  { id: "lab-reports", label: "Lab Reports", href: "/lab-reports", badge: "NABL" },
  { id: "calculator", label: "Oil Calculator", href: "/calculator" }
];

export default function NavbarIsland({ currentPage = "home" }) {
  const store = useTrushitaStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    const syncPath = () => {
      const p = window.location.pathname.replace(/\/+$/, "") || "/";
      if (p === "/") setActivePage("home");
      else if (p.startsWith("/products")) setActivePage("products");
      else if (p.startsWith("/process")) setActivePage("process");
      else if (p.startsWith("/lab-reports")) setActivePage("lab-reports");
      else if (p.startsWith("/calculator")) setActivePage("calculator");
    };
    syncPath();
    document.addEventListener("astro:page-load", syncPath);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });

    const closeDropdown = () => setMenuOpen(false);
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("astro:page-load", syncPath);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const totalCount = store.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = store.cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const isAdmin = store.currentUser?.role === "admin";
  const initials = (store.currentUser?.name || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  const userOrdersCount = store.currentUser
    ? store.orders.filter((o) => o.email === store.currentUser.email || isAdmin).length
    : 0;

  const handleSearchJump = () => {
    if (activePage === "products") {
      const el = document.getElementById("product-search-input");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => el.focus(), 250);
      }
    } else {
      window.location.href = "/products?focus=search";
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl border-b border-zinc-200/80 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/85"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-[64px]" : "h-[72px]"
        }`}
      >
        {/* Official Brand Lockup */}
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 flex items-center justify-center p-0.5 bg-[#f3f8f5] rounded-sm border border-emerald-200/70 shadow-2xs group-hover:border-emerald-500 transition-all">
            <img src="/trushita.svg" alt="Trushita Natural Food Logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-zinc-950">TRUSHITA</span>
              <span className="text-[9px] uppercase font-bold tracking-widest bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-sm border border-emerald-200/80">
                Natural Food
              </span>
              {isAdmin && (
                <span className="text-[9px] font-bold bg-zinc-950 text-emerald-400 px-1.5 py-0.5 rounded-sm border border-zinc-800">
                  ADMIN
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-500 font-medium tracking-wide block mt-0.5">
              Wood-Pressed Purity • Visnagar
            </span>
          </div>
        </a>

        {/* Center Segmented Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center bg-zinc-100/90 border border-zinc-200/80 p-1 rounded-sm gap-0.5"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link-pill ${
                activePage === item.id ? "active" : ""
              } px-3.5 py-1.5 rounded-sm text-xs font-medium text-zinc-600 hover:text-zinc-950 inline-flex items-center gap-1.5`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded-sm">
                  <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleSearchJump}
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-600 hover:text-zinc-950 transition-all"
            title="Search Oils Store"
            aria-label="Search Oils Store"
          >
            <Search className="w-4 h-4" />
          </button>

          {!store.currentUser ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => openAuthModal("customer")}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-800 text-xs font-semibold transition-all"
              >
                <User className="w-3.5 h-3.5 text-zinc-500" />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => openAuthModal("admin")}
                className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-zinc-50 hover:bg-emerald-50 hover:border-emerald-300 text-zinc-600 hover:text-emerald-700 transition-all"
                title="Farm Admin Portal"
                aria-label="Farm Admin Portal"
              >
                <Lock className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="inline-flex items-center gap-2 pl-1.5 pr-2.5 py-1.5 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-2xs"
              >
                <span className="w-6 h-6 rounded-sm bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {initials}
                </span>
                <span className="hidden sm:inline text-xs font-bold text-zinc-900 max-w-[100px] truncate">
                  {store.currentUser.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {menuOpen && (
                <div className="animate-dropdown absolute right-0 mt-2 w-56 bg-white rounded-sm border border-zinc-200 shadow-xl py-1.5 z-50">
                  <div className="px-3.5 py-2.5 border-b border-zinc-100">
                    <p className="text-xs font-bold text-zinc-900 truncate">{store.currentUser.name}</p>
                    <p className="text-[11px] text-zinc-500 truncate">{store.currentUser.email}</p>
                  </div>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setOrdersModalOpen(true);
                    }}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 flex items-center justify-between transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-zinc-500" />
                      My Orders &amp; Batches
                    </span>
                    <span className="text-[10px] font-bold bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded-sm">
                      {userOrdersCount}
                    </span>
                  </button>

                  {isAdmin && (
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setAdminModalOpen(true);
                      }}
                      className="w-full px-3.5 py-2 text-left text-xs font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Admin Dashboard</span>
                    </button>
                  )}

                  <div className="my-1 border-t border-zinc-100" />

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      logoutUser();
                    }}
                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Cart Button */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline text-xs font-bold">
              {subtotal > 0 ? `₹${subtotal}` : "Cart"}
            </span>
            {totalCount > 0 && (
              <span className="inline-flex absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full items-center justify-center border-2 border-white">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen((m) => !m)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-sm border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden animate-mobile-drawer border-t border-zinc-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-sm border text-xs font-bold flex items-center justify-between ${
                  activePage === item.id
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                    : "bg-zinc-50 border-zinc-200 text-zinc-900"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-sm">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                openAuthModal("admin");
              }}
              className="flex-1 py-2 px-3 rounded-sm border border-zinc-200 text-xs font-semibold text-zinc-700 bg-zinc-50"
            >
              Admin Portal
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                checkoutWhatsApp();
              }}
              className="flex-1 py-2 px-3 rounded-sm bg-emerald-600 text-white text-xs font-bold"
            >
              WhatsApp Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
