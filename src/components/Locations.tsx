import { MapPin, Phone, ExternalLink, Compass } from "lucide-react";
import { BRANCHES } from "../data";

export default function Locations() {
  return (
    <section id="locations" className="relative bg-[#111111]/95 py-24 border-t border-white/5">
      {/* Decorative colored glow circles */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" id="locations-wrapper">
        
        {/* Title / Description */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#F97316] font-mono text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-[#F97316]" />
            FIND OUR OUTLETS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Locations
          </h2>
          <div className="w-12 h-1 bg-[#F97316] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Visit us to pick up your steaming momo boxes or experience lively outdoor dining in person under cozy street arrangements!
          </p>
        </div>

        {/* Branch grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Detailed Branch Information Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {BRANCHES.map((branch) => (
              <div
                key={branch.name}
                className="bg-white/5 border border-white/10 hover:border-[#F97316]/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl group"
              >
                <div>
                  {/* Branch name & Pin badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-orange-500/10 text-[#F97316] rounded-xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wider uppercase">{branch.name}</h3>
                  </div>

                  {/* Address */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {branch.address}
                  </p>

                  <div className="h-[1px] bg-white/5 my-4" />

                  {/* Phones list */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">ORDER & RESERVATIONS</span>
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/-/g, "")}`}
                        className="flex items-center gap-3 text-[#F97316] hover:text-orange-400 text-sm font-semibold transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4 text-[#F97316]" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Optional Location map URL Trigger */}
                {branch.mapsUrl && (
                  <div className="mt-8">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#F97316] border-b border-dashed border-white/20 hover:border-[#F97316] pb-1 transition-all"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Google Map Embedding (Right) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl h-full overflow-hidden flex flex-col justify-between group">
              <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-full min-h-[350px]">
                {/* Wazirabad embedded Google Map */}
                <iframe
                  title="Momos Bite Wazirabad Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.494747206121!2d74.1165682!3d32.433994799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1ba4f76ccb5d%3A0xc3ab0f8e91cb7708!2sMomos%20Bite!5e0!3m2!1sen!2s!4v1718491200000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2] opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Minimal caption details */}
              <div className="flex items-center justify-between pt-3 px-3">
                <span className="text-gray-400 text-xs font-mono">📍 Map projection: Wazirabad Branch</span>
                <span className="text-[10px] text-[#F97316] font-mono">LIVE CONNECTED</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
