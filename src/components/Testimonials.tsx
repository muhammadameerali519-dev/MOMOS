import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-[#111111] py-24 border-t border-white/5">
      {/* Soft orange decorative glows */}
      <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4.5 h-4.5 text-[#F97316]" />
            VERIFIED FEEDBACK
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight animate-fade-in-down">
            Customer Testimonials
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            See why street-food lovers and happy families continuously choose Momos Bite for their culinary highlights and weekly gatherings!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-[#F97316]/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 group hover:bg-white/[0.08]"
            >
              <div className="space-y-4">
                {/* Large quote mark */}
                <div className="text-orange-500/10 absolute top-4 right-6 pointer-events-none group-hover:text-orange-500/25 transition-colors">
                  <MessageSquareQuote className="w-16 h-16" />
                </div>

                {/* Stars container */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-300 text-sm leading-relaxed font-sans italic pt-2 relative z-10 min-h-[72px]">
                  "{t.comment}"
                </p>
              </div>

              {/* Verified metadata */}
              <div className="flex items-center space-x-3.5 border-t border-white/5 pt-5 mt-6">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] flex items-center justify-center font-bold text-sm shrink-0">
                  {t.name.split(" ").map((word) => word[0]).join("")}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5 leading-tight">
                    <span>{t.name}</span>
                    <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                  </h4>
                  <div className="flex items-center justify-between gap-4 mt-0.5">
                    <span className="text-[10px] text-gray-500 font-medium">{t.role}</span>
                    <span className="text-[9px] text-[#F97316] font-mono">{t.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
