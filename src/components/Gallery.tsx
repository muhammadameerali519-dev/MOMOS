import { ZoomIn, ChefHat, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { motion } from "motion/react";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#111111]/95 py-24 border-t border-white/5">
      {/* Background glow lanterns */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" id="gallery-container">
        
        {/* Title Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <ChefHat className="w-4 h-4 text-[#F97316]" />
            VISUAL SIGHTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Gallery
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Feast with your eyes first. Explore our handcrafted dumplings, spicy pan noodles, refreshing coolers, and happy dining memories!
          </p>
        </div>

        {/* Gallery Grid - Responsive Grid with varying aspect ratios for Masonry Feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md aspect-square hover:border-[#F97316]/30 transition-all duration-300"
            >
              {/* Image element with required referrer policy */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 filter brightness-[0.85] contrast-[1.02] group-hover:brightness-100"
              />

              {/* Black Gradient Absolute Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Centered Search Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 pointer-events-none">
                <div className="p-3 bg-orange-500 rounded-full text-white shadow-[0_4px_20px_#F97316]">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Absolute Corner labels */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#F97316] uppercase bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mt-1.5">{item.title}</h3>
                </div>
                
                <span className="text-white/40 text-xs font-mono hidden sm:block group-hover:text-white transition-colors">
                  Momos Bite ©
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
