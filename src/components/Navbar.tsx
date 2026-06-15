import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingCart, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Story", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Special Deals", href: "#deals" },
    { name: "Outdoor Café", href: "#outdoor" },
    { name: "Locations", href: "#locations" },
    { name: "Reviews", href: "#reviews" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/[0.03] backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <span className="text-2xl font-bold font-sans tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
              MOMOS <span className="text-[#F97316] font-mono italic animate-pulse">BITE</span>
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-[#F97316] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:03066261298"
              className="px-4 py-2 border border-white/10 hover:border-[#F97316]/50 rounded-full text-xs font-semibold tracking-wider text-white hover:text-[#F97316] flex items-center gap-2 transition-all duration-300 bg-white/5 backdrop-blur-sm shadow-inner"
              id="nav-btn-reserve"
            >
              <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
              RESERVE TABLE
            </a>
            <a
              href="https://wa.me/923046986399"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#F97316] hover:bg-orange-600 rounded-full text-xs font-bold tracking-widest text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_4px_25px_rgba(249,115,22,0.5)]"
              id="nav-btn-order"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              ORDER NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F97316] focus:outline-none p-2"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/[0.04] border-b border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-gray-300 hover:text-[#F97316] hover:bg-white/5 text-base font-semibold transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <a
                  href="tel:03066261298"
                  className="w-full justify-center px-4 py-3 border border-white/10 rounded-lg text-sm font-semibold tracking-wider text-white hover:text-[#F97316] flex items-center gap-2 transition-all duration-300 bg-white/5 active:bg-white/10"
                  id="mobile-reserve-btn"
                >
                  <Calendar className="w-4 h-4 text-[#F97316]" />
                  RESERVE TABLE
                </a>
                <a
                  href="https://wa.me/923046986399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-4 py-3 bg-[#F97316] rounded-lg text-sm font-bold tracking-widest text-white flex items-center gap-2 shadow-[0_4px_15px_rgba(249,115,22,0.3)] active:scale-95"
                  id="mobile-order-btn"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ORDER ON WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
