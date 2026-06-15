import { useState } from "react";
import { Camera, Bike, Users, Sparkles, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function OutdoorScene() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  const hotspots = [
    {
      id: "selfies",
      icon: <Camera className="w-4 h-4 text-white" />,
      title: "Friendly Selfie Zone 📸",
      desc: "Bright neon signs and beautiful street lighting provide the perfect aesthetic backdrop for your food pictures.",
      top: "28%",
      left: "22%"
    },
    {
      id: "dining",
      icon: <Users className="w-4 h-4 text-white" />,
      title: "Family Dining Courtyard 🧡",
      desc: "Spacious outdoor seating where groups and families can enjoy piping hot steam momos and crispy noodles.",
      top: "48%",
      left: "60%"
    },
    {
      id: "delivery",
      icon: <Bike className="w-4 h-4 text-white" />,
      title: "Super-Fast Delivery Bay ⚡",
      desc: "Our delivery riders are on standby to take your hot, fresh orders and rush them straight to your doorstep.",
      top: "65%",
      left: "82%"
    },
    {
      id: "lighting",
      icon: <Sparkles className="w-4 h-4 text-white" />,
      title: "Cosy Golden Ambient Lighting ✨",
      desc: "Injected with gorgeous orange lanterns, creating a modern, warm, and highly relaxing street side dining vibe.",
      top: "15%",
      left: "48%"
    }
  ];

  return (
    <section id="outdoor" className="relative bg-[#111111] py-24 border-t border-white/5 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Caption Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            STREET ATMOSPHERE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Outdoor Street Café
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Experience the energetic street-food vibe under warm lights. Dive into our interactive outside dining projection below and click or hover over the glowing hotspots to explore!
          </p>
        </div>

        {/* 3D Scene Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Active Spot Text detail box (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:border-r lg:border-white/5 lg:pr-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#F97316]" />
              Explore the Vibe
            </h3>
            
            <AnimatePresence mode="wait">
              {activeSpot ? (
                (() => {
                  const spot = hotspots.find(h => h.id === activeSpot);
                  return (
                    <motion.div
                      key={spot?.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl"
                    >
                      <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="p-1.5 bg-[#F97316]/20 text-[#F97316] rounded-lg">
                          {spot?.icon}
                        </span>
                        {spot?.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {spot?.desc}
                      </p>
                    </motion.div>
                  );
                })()
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg"
                >
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    👈 Select or hover over any glowing green/orange pulse button in our virtual render to explore why Momos Bite serves the most sought-after hangouts in town!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Outdoor details */}
            <div className="space-y-3.5 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                <span className="text-xs font-semibold text-gray-300">DINE-IN SPACE OPEN (Model Town, Gujranwala)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-gray-300">50+ Beautiful Street Side Seats</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-gray-300">Cozy spot perfect for families & friends assemblies</span>
              </div>
            </div>
          </div>

          {/* Glowing Illustration Image with Coordinates (Right) */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/10 group shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
            {/* Embedded newly created image */}
            <img
              src="/src/assets/images/momos_bite_outdoor_scene_1781562182578.jpg"
              alt="Momos Bite Street dining render"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
            />
            
            {/* Absolute overlay of hotspots */}
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot.id)}
                onMouseEnter={() => setActiveSpot(spot.id)}
                className="absolute z-20 group/btn focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-black rounded-full"
                style={{
                  top: spot.top,
                  left: spot.left,
                  transform: "translate(-50%, -50%)"
                }}
              >
                {/* Glowing outward pulses */}
                <div className="absolute w-12 h-12 -inset-4 bg-[#F97316]/30 rounded-full animate-ping pointer-events-none group-hover/btn:bg-[#F97316]/50 transition-all duration-300" />
                <div className="absolute w-8 h-8 -inset-2 bg-orange-500/40 rounded-full animate-pulse pointer-events-none" />
                
                {/* Real interactive button core */}
                <div className={`relative w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  activeSpot === spot.id 
                    ? "bg-[#F97316] border-white scale-125 shadow-[0_0_15px_#F97316]" 
                    : "bg-[#111111]/90 border-[#F97316] hover:bg-orange-600 hover:scale-110"
                }`}>
                  <span className="text-[#F97316] group-hover/btn:text-white transition-colors">
                    {spot.icon}
                  </span>
                </div>
              </button>
            ))}

            {/* Glowing lantern light overlays */}
            <div className="absolute top-[10%] left-[45%] w-16 h-16 bg-orange-500/20 rounded-full blur-md animate-pulse pointer-events-none" />
            
            {/* Bottom shadow overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 text-white text-xs font-mono font-bold tracking-wider uppercase py-1 px-3 bg-black/70 rounded-full border border-white/5 backdrop-blur-sm">
              ✨ Momos Bite Outer Courtyard
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
