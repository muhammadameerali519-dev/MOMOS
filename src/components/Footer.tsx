import { Phone, Calendar, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-[#111111] text-gray-400 py-16 border-t border-white/5 font-sans">
      {/* Decorative colored glow circle under footer background */}
      <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Headline */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-black text-white tracking-widest uppercase">
              MOMOS <span className="text-[#F97316] font-mono italic">BITE</span>
            </h3>
            <p className="text-sm italic text-gray-500 font-mono">
              "One Bite, Endless Flavour"
            </p>
            <p className="text-sm max-w-sm leading-relaxed text-gray-400">
              Handcrafted hot steam dumplings, pan-fried crisps, creamy fusion sauces, wok-tossed hakka noodles, and icy margaritas under warm street café arrangements.
            </p>
          </div>

          {/* Quick branch order pathways */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-l-2 border-[#F97316] pl-2.5">
              Contact Channels
            </h4>
            
            <div className="space-y-3.5 pt-2">
              <a
                href="https://wa.me/923046986399"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#F97316] hover:text-orange-400 font-bold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Order: 0304-6986399</span>
              </a>

              <a
                href="tel:03066261298"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white font-semibold transition-all"
              >
                <Calendar className="w-4 h-4 text-[#F97316]" />
                <span>Table Reservation: 0306-6261298</span>
              </a>

              <div className="text-xs text-gray-500 space-y-1">
                <p>Owner: <strong className="text-gray-300 font-semibold text-xs font-sans">Arbaaz Mushtaq Ali</strong></p>
                <p>Catering & Parties: 0301-0731079</p>
              </div>
            </div>
          </div>

          {/* Navigation helpers */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest border-l-2 border-[#F97316] pl-2.5">
              Opening Hours
            </h4>
            <div className="text-xs pt-2 space-y-2 font-mono">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Monday - Thursday</span>
                <span className="text-gray-300 text-right">4:00 PM - 1:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Friday - Sunday</span>
                <span className="text-[#F97316] text-right font-semibold">4:00 PM - 2:00 AM</span>
              </div>
              <p className="text-[10px] text-gray-500 italic font-sans mt-2">Dine-in arrangement & super-fast drive-by pickups open daily.</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500">
            © 2026 Momos Bite. All Rights Reserved. Crafted with <Heart className="w-3 h-3 text-[#F97316] inline-block mx-0.5" /> in Pakistan.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-orange-500 text-gray-400 hover:text-white rounded-xl border border-white/5 hover:border-[#F97316]/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 font-bold"
            aria-label="Scroll to Top"
            id="footer-back-to-top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
