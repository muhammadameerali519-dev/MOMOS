import { ShoppingCart, Phone, Calendar, ArrowRight, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const floatingImages = [
    {
      title: "Steamed Momos",
      desc: "Delicate stuffing with warm spicy broth",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400",
      price: "Rs. 440",
      rotate: "-6deg",
      translateY: "10px",
    },
    {
      title: "Mint Margarita",
      desc: "Ice blended fresh mint & zesty fizz",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400",
      price: "Rs. 290",
      rotate: "5deg",
      translateY: "-20px",
    },
    {
      title: "Hot Dynamite Momos",
      desc: "Smothered in creamy sriracha glaze",
      img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=400",
      price: "Rs. 620",
      rotate: "-3deg",
      translateY: "40px",
    }
  ];

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-[#111111] overflow-hidden flex items-center pt-24 pb-16"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Traditional Asian Pattern Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Pitch */}
          <div className="lg:col-span-7 flex flex-col space-y-8 z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center space-x-2 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-[#F97316] text-xs font-semibold tracking-wider uppercase"
            >
              <Flame className="w-3.5 h-3.5 animate-bounce text-[#F97316]" />
              <span>Authentic Pakistani & Modern Asian Fusion</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                MOMOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#fb923c] drop-shadow-[0_0_30px_rgba(249,115,22,0.15)]">BITE</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-mono text-gray-300 tracking-wide font-medium">
                One Bite, Endless Flavour
              </p>
              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-sans">
                Experience the perfect blend of authentic Chinese-inspired momos, delicious noodles, refreshing drinks, and irresistible flavours made with love.
              </p>
            </motion.div>

            {/* Glowing Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://wa.me/923046986399"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-[#F97316] hover:from-orange-600 hover:to-orange-700 rounded-full text-sm font-bold tracking-widest text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] group"
                id="hero-whatsapp"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                ORDER ON WHATSAPP
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:03046986399"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-orange-500/50 rounded-full text-sm font-bold tracking-wider text-white hover:text-[#F97316] flex items-center justify-center gap-3 transition-all duration-300 bg-white/5 hover:bg-white/10"
                id="hero-call-now"
              >
                <Phone className="w-4 h-4 text-[#F97316]" />
                CALL NOW
              </a>

              <a
                href="tel:03066261298"
                className="w-full sm:w-auto px-8 py-4 border border-orange-500/30 hover:border-orange-500 rounded-full text-sm font-bold tracking-wider text-white flex items-center justify-center gap-3 transition-all duration-300 bg-orange-500/5 hover:bg-orange-900/10 shadow-[0_0_15px_rgba(249,115,22,0.08)]"
                id="hero-reserve"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                RESERVE TABLE
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div>
                <p className="text-2xl font-mono font-bold text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Fresh Daily</p>
              </div>
              <div className="border-x border-white/5">
                <p className="text-2xl font-mono font-bold text-white">30+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Dishes Variety</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-white">4.9★</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Google Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive 3D Overlapping Food Deck */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center items-center select-none">
            {/* Ambient orange backend spotlight */}
            <div className="absolute w-[280px] h-[280px] bg-[#F97316]/20 rounded-full blur-[70px]" />

            <div className="relative w-[320px] h-[400px] flex items-center justify-center">
              {floatingImages.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.8, rotate: "-15deg" }}
                  animate={{ opacity: 1, scale: 1, rotate: card.rotate, y: card.translateY }}
                  transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.15 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: "0deg", 
                    y: "-15px", 
                    zIndex: 20,
                    boxShadow: "0px 10px 40px rgba(249, 115, 22, 0.4)" 
                  }}
                  className="absolute w-[240px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-3.5 cursor-pointer shadow-2xl backdrop-blur-xl transition-shadow group"
                  style={{ zIndex: idx }}
                >
                  {/* Photo with steam overlay on top */}
                  <div className="relative h-[200px] w-full rounded-xl overflow-hidden bg-gray-900">
                    {/* Steam overlay effect (Only for steamed/hot food cards) */}
                    {card.title !== "Mint Margarita" && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 flex justify-center items-end" id="steam-container">
                        <div className="w-12 h-20 bg-gradient-to-t from-white/0 via-white/5 to-white/0 rounded-full blur-md animate-[pulse_3s_infinite] transform translate-y-4 opacity-50" />
                        <div className="w-8 h-24 bg-gradient-to-t from-white/0 via-white/8 to-white/0 rounded-full blur-md animate-[pulse_2s_infinite] delay-300 transform translate-y-6 opacity-40" />
                      </div>
                    )}
                    
                    <img
                      src={card.img}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Detail */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-semibold text-sm tracking-wide">{card.title}</h3>
                      <span className="text-[#F97316] font-mono text-xs font-bold">{card.price}</span>
                    </div>
                    <p className="text-gray-400 text-[11px] leading-tight font-sans">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative glassmorphic floating lighting specks */}
      <div className="absolute top-[40%] right-[15%] w-4 h-4 bg-[#F97316] rounded-full blur-[2px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[45%] w-2 h-2 bg-[#F97316] rounded-full blur-[1px] opacity-30 pointer-events-none" />
    </div>
  );
}
