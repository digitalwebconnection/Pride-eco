'use client';

import { motion } from "framer-motion";
import { Leaf, Sun, ShieldCheck, ArrowUpRight } from "lucide-react";

const AboutUsHome = () => {
  return (
    <section
      className="
        relative w-full py-10 flex items-center overflow-hidden
        bg-[url('https://img.freepik.com/premium-photo/solar-panels_1304147-57074.jpg')]
        bg-cover bg-center bg-no-repeat bg-fixed
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-green-400 mb-4 uppercase tracking-widest">
            <Leaf size={16} /> About Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Powering India with <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-yellow-300">
              Clean Solar Energy
            </span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            <strong>Pride Eco Solar</strong> helps homes and businesses switch to
            reliable, cost-saving solar solutions using high-efficiency Adani Solar
            modules and expert installation.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="flex items-center gap-3 text-white/90">
              <Sun className="text-yellow-400" size={20} />
              <span>15+ Years Experience</span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <ShieldCheck className="text-green-400" size={20} />
              <span>ISO 9001:2015 Certified</span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <Leaf className="text-green-400" size={20} />
              <span>Subsidy Assistance</span>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <Sun className="text-yellow-400" size={20} />
              <span>Tier-1 Solar Modules</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all active:scale-95 shadow-lg"
          >
            Explore Our Journey <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsHome;
