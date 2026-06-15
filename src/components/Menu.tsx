import { useState } from "react";
import { MENU_CATEGORIES } from "../data";
import { MenuItem } from "../types";
import { Flame, Star, Sparkles, MessageSquareShare, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("classic-momos");

  const currentCategory = MENU_CATEGORIES.find((cat) => cat.id === activeCategory);

  const getWhatsAppOrderLink = (item: MenuItem) => {
    const text = `Hi Momos Bite! I would like to order "${item.name}" (Rs. ${item.price}) from your menu. Please confirm my order!`;
    return `https://wa.me/923046986399?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="relative bg-[#111111]/95 py-24 border-t border-white/5">
      {/* Decorative colored lights */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-yellow-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-[#F97316]" />
            OUR CRAFTED SELECTION
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured Menu
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Piped and crafted under the keen eye of Arbaaz Mushtaq Ali. Select a category below and tap the order button to secure your fresh momo plate on WhatsApp!
          </p>
        </div>

        {/* Category Tabs (Scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 max-w-full justify-start lg:justify-center border-b border-white/5 scroll-smooth px-2">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold tracking-widest whitespace-nowrap transition-all duration-300 focus:outline-none flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? "bg-[#F97316] text-white border-[#F97316]/50 shadow-[0_4px_20px_rgba(249,115,22,0.4)] scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-white/5 backdrop-blur-md"
              }`}
              id={`cat-btn-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Feature Plate Showcase Banner */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 mb-12 hover:border-[#F97316]/30 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              {/* Category banner image thumbnail */}
              <div className="md:col-span-4 h-[200px] md:h-[260px] rounded-2xl overflow-hidden relative group">
                <img
                  src={currentCategory.imageUrl}
                  alt={currentCategory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-lg font-black tracking-wider uppercase flex items-center gap-1.5">
                    <Sparkles className="w-5 h-5 text-[#F97316]" />
                    {currentCategory.name}
                  </span>
                </div>
              </div>

              {/* Category specifications / description list */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Traditional Asian Style</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  Our {currentCategory.name} collection features meticulous craftsmanship. We use finest fine-refined wheat flour wrappers, perfectly measured organic proteins, and intense wok steam, allowing each bite to burst with authentic Asian umami. Served with homemade chili garlic sauce and sweet mint dipping arrays.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <span className="text-xs text-[#F97316] bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold">
                    🔥 Freshly Wok Steam
                  </span>
                  <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold">
                    ⭐ Arbaaz's Recommendation
                  </span>
                  <span className="text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold">
                    🥬 Veg Options Available
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="menu-grid-container"
          >
            {currentCategory?.items.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#F97316]/30 rounded-2xl p-5 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300"
              >
                {/* Glowing neon edge cover on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                <div className="space-y-3">
                  {/* Item Badges / Status */}
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-base font-bold text-white group-hover:text-[#F97316] transition-colors leading-tight">
                      {item.name}
                    </h4>
                    
                    <div className="flex gap-1.5 shrink-0">
                      {item.spicy && (
                        <span className="bg-red-500/10 border border-red-500/20 text-red-400 uppercase text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                          Spicy 🔥
                        </span>
                      )}
                      {item.popular && (
                        <span className="bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] uppercase text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                          BEST SELL ⭐
                        </span>
                      )}
                      {item.veg && (
                        <span className="bg-green-500/10 border border-green-500/20 text-green-400 uppercase text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                          VEG 🥬
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-sans min-h-[32px]">
                    {item.description || "Freshly rolled dumplings stuffed with aromatic local seasonings, seasoned with secret spices."}
                  </p>
                </div>

                {/* Bottom line: Pricing & Dynamic Quick Whatsapp Order */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-5">
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono block uppercase">PRICE</span>
                    <span className="text-lg font-bold font-mono text-[#F97316]">Rs. {item.price}</span>
                  </div>

                  <a
                    href={getWhatsAppOrderLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 border border-white/5 hover:border-[#F97316]/30 rounded-xl text-xs text-gray-300 hover:text-[#F97316] flex items-center gap-2 transition-all duration-300 hover:bg-orange-500/5 hover:scale-105 active:scale-95 group-hover:bg-[#F97316] group-hover:text-white"
                  >
                    <MessageSquareShare className="w-3.5 h-3.5" />
                    <span className="font-bold tracking-wide">ORDER</span>
                    <ArrowUpRight className="w-3 h-3 block opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
