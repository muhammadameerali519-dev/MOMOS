import { Award, Flame, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-5 h-5 text-[#F97316]" />,
      title: "Handcrafted Love",
      desc: "Every single momo wrapper is rolled and stuffed by hand daily with utmost craft and warmth.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#F97316]" />,
      title: "Premium Spices",
      desc: "An organic blend of authentic Asian herbs and curated Pakistani chillies for that endless flavor.",
    },
    {
      icon: <Flame className="w-5 h-5 text-[#F97316]" />,
      title: "Sizzling Freshness",
      desc: "No preservatives or freezing. Steamed and pan-fried straight from cooker to plate on order.",
    }
  ];

  return (
    <section id="story" className="relative bg-[#111111]/95 py-24 border-t border-white/5 overflow-hidden">
      {/* Soft backlighting */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel: Aesthetics Image showcase */}
          <div className="lg:col-span-5 relative group" id="about-image-panel">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F97316] to-amber-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden p-2">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=620"
                alt="Momos Bite Kitchen Crafting"
                referrerPolicy="no-referrer"
                className="rounded-xl w-full h-[380px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-2xl">
                <p className="text-2xl font-mono font-bold text-[#F97316]">EST. 2024</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Gujranwala, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right panel: Written storyline and values */}
          <div className="lg:col-span-7 flex flex-col space-y-8" id="about-content-panel">
            <div className="space-y-4">
              <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase">OUR HEIRLOOM</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Our Story
              </h2>
              <div className="w-12 h-1 bg-[#F97316] rounded-full" />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
              Momos Bite was founded with a passion for bringing unforgettable flavours to every customer. Under the leadership of <strong className="text-white hover:text-[#F97316] transition-colors">Arbaaz Mushtaq Ali</strong>, we proudly serve handcrafted momos, noodles, soups, and signature drinks prepared with quality ingredients and authentic taste.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-white/10 hover:border-[#F97316]/30 transition-all duration-300"
                >
                  <div className="p-2.5 bg-orange-500/10 rounded-xl w-fit mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
