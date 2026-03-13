import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Award, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface Slide {
  topBadge: string;
  normal: string;
  highlight: string;
  desc: string;
  bottomTitle: string;
  bottomSubtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    topBadge: "Renewable Energy Solutions",
    normal: "Powering India’s",
    highlight: "Solar Future",
    desc:
      "Pride Eco Trade LLP is a renewable energy company delivering reliable solar products and EPC solutions across India. As an Authorized Channel Partner of Adani Solar and Distribution Partner of Microtek, we provide complete solar system solutions.",
    bottomTitle: "Solar Solutions",
    bottomSubtitle: "Solar PV Modules • Solar Inverters & BOS Products • End-to-End Solar EPC Services",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
  },
  {
    topBadge: "Trusted Solar Supply Partner",
    normal: "Complete Solar Supply",
    highlight: "& EPC Solutions",
    desc:
      "From solar modules to inverters and complete balance-of-system components, Pride Eco Trade supports solar installers, EPC companies, and businesses with dependable solar equipment and professional EPC execution.",
    bottomTitle: "Trusted Equipment",
    bottomSubtitle: "Premium Solar PV Modules from Adani Solar • Reliable Solar Inverters from Microtek • Complete BOS Products",
    image:
      "https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_rp_progressive&w=740&q=80"
  },
  {
    topBadge: "Solar EPC Services",
    normal: "End-to-End",
    highlight: "Solar EPC Services",
    desc:
      "Pride Eco Trade is actively delivering solar EPC solutions for residential, commercial, and industrial projects with a focus on quality engineering, reliable components, and long-term performance.",
    bottomTitle: "Solar Installations",
    bottomSubtitle: "Residential Solar Systems • Commercial & Industrial Solar Plants • Professional Project Execution",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1975&auto=format&fit=crop"
  },
  {
    topBadge: "Supporting India’s Solar Growth",
    normal: "100 MW+ Solar",
    highlight: "Capacity Delivered",
    desc:
      "With over 100 MW of solar capacity supplied and installed, Pride Eco Trade is contributing to India’s renewable energy transition through strong EPC partnerships and reliable product distribution.",
    bottomTitle: "Nationwide Network",
    bottomSubtitle: "Strong EPC Network • Reliable Supply Chain • Multi-location Warehousing",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
  }
];

const SolarHero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered] = useState(false);

  /* AUTO SLIDER */
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
     
      className="relative py-20 h-screen w-full overflow-hidden"
    >
      {/* BACKGROUND IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Solar Background"
            className="w-full h-full bg-cover object-cover"
          />
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* TOP TRUST BAR */}
      <div className="absolute top-0 w-full z-40 bg-black/40 backdrop-blur-md text-white py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs uppercase tracking-widest font-bold">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-yellow-400">
              <Award size={14} /> Official Channel Partner
            </span>
            <span className="hidden sm:flex items-center gap-2 text-white/80">
              <ShieldCheck size={14} /> Tier-1 Modules
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-yellow-400 animate-pulse" />
            <span>Trusted by 10,000+ Customers</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-30 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-0 w-full">
          <div className="max-w-5xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -70 }}
                transition={{ duration: 0.5 }}
              >
                {/* BADGE */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-xs font-bold uppercase tracking-widest text-yellow-400">
                  {slides[current].topBadge}
                </div>

                {/* TITLE */}
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-6">
                  {slides[current].normal} <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-yellow-300 to-orange-500">
                    {slides[current].highlight}
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="text-lg text-white/80 mb-10 max-w-xl">
                  {slides[current].desc}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 flex-wrap">
                  <button className="px-8 py-4 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-500 transition flex items-center gap-2 shadow-xl">
                    Get Free Consultation
                    <ArrowRight size={18} />
                  </button>
                  <button className="px-8 py-4 hover:border-orange-500 rounded-xl border border-white/30 font-bold text-white hover:bg-white/10 transition">
                    View Projects
                  </button>
                </div>

                {/* FLOATING INFO CARD */}
                <div className="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 inline-flex items-center gap-4">
                  <Sun className="text-yellow-400" size={28} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60 font-bold">
                      {slides[current].bottomTitle}
                    </p>
                    <p className="text-xl font-bold text-white">
                      {slides[current].bottomSubtitle}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${current === idx ? "w-10 bg-white" : "w-4 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SolarHero;