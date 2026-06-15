import { FAMILY_DEALS } from "../data";
import { FamilyDeal } from "../types";
import { CheckCircle, ShoppingCart, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function Deals() {
  
  const getWhatsAppDealLink = (deal: FamilyDeal) => {
    const text = `Hi Momos Bite! I would like to order the amazing combo: "${deal.name}" (Rs. ${deal.price}). Please write back to confirm instructions!`;
    return `https://wa.me/923046986399?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="deals" className="relative bg-[#111111] py-24 border-t border-white/5">
      {/* Decorative colored glow circles */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-[#F97316]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title / Description */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4 text-[#F97316]" />
            UNBEATABLE VALUE combos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Family Deals
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Feast together with our premium handpicked combination meals. Perfect layouts designed for couples, gatherings, and celebrations. Savor more for less!
          </p>
        </div>

        {/* Deals Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FAMILY_DEALS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative bg-white/5 border rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 ${
                deal.badge === "Best Seller"
                  ? "border-[#F97316] scale-103 md:-translate-y-2 ring-1 ring-[#F97316]/30 shadow-[0_10px_40px_rgba(249,115,22,0.25)] bg-[#F97316]/5"
                  : "border-white/10 hover:border-[#F97316]/30"
              }`}
            >
              {/* Highlight best seller stripe */}
              {deal.badge === "Best Seller" && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-[#F97316] text-white text-[10px] font-black tracking-widest uppercase py-1 px-4 rounded-full shadow-[0_4px_10px_rgba(249,115,22,0.3)]">
                  🔥 BEST SELLER Combo
                </div>
              )}

              {/* Deal Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block">{deal.badge || "SPECIAL BOARD"}</span>
                    <h3 className="text-2xl font-black text-white mt-1 group-hover:text-[#F97316] transition-colors">{deal.name}</h3>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                {/* Price tag */}
                <div className="py-2 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-400">Rs.</span>
                  <span className="text-4xl font-mono font-black text-[#F97316] block">{deal.price}</span>
                  <span className="text-xs text-gray-500 font-mono">/ combo nett</span>
                </div>

                {/* Inclusions Check List */}
                <div className="space-y-3.5 pt-4">
                  <span className="text-xs text-gray-400 font-bold tracking-widest uppercase block mb-1">What's Included:</span>
                  {deal.includes.map((inc) => (
                    <div key={inc} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#F97316] pt-0.5 shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm font-medium leading-normal">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deal Footer Call to Action */}
              <div className="pt-8">
                <a
                  href={getWhatsAppDealLink(deal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl text-center text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 ${
                    deal.badge === "Best Seller"
                      ? "bg-[#F97316] hover:bg-orange-600 text-white shadow-[0_8px_25px_rgba(249,115,22,0.33)]"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#F97316]/30"
                  }`}
                  id={`deal-btn-${deal.id}`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  ORDER COMBO
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
