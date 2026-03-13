'use client';

import { motion } from "framer-motion";
import { Award, Leaf, Zap, GraduationCap, ChevronRight } from "lucide-react";

const Leadership = () => {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-green-100/50 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-100/40 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />
      
      {/* SVG Pattern Grid */}
      <div className="absolute inset-0 opacity-[0.03] -z-10 mask-[linear-gradient(to_bottom,white,transparent)]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Image Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Decorative Frame Element */}
              <div className="absolute -inset-2 border-2 border-green-500/60 rounded-[2.5rem] -rotate-12 -z-10" />
              
              <div className="rounded-4xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFMLBwrlxgRrA/profile-displayphoto-scale_200_200/B4EZiEahP2GcAk-/0/1754568202391?e=2147483647&v=beta&t=4yhn4297SS-EXZdjrlFk0tQcr1QjkMrBeEGpv3B-8Uw"
                  className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-10 -right-6 md:right-10 bg-white shadow-2xl rounded-3xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Award className="text-green-600" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 leading-none">10+ Years</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter mt-1">Industry Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold tracking-wide mb-6"
              >
                EXECUTIVE LEADERSHIP
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
              >
                Driving Pride Eco Trade <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">Toward a Greener Future</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                Mr. Shiva Dixit
         
                <span className="text-lg font-medium text-green-600">Managing Partner</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Shiva Dixit is a <span className="text-slate-900 font-semibold italic">second-generation entrepreneur</span> with a decade of expertise in transforming complex industrial supply chains. 
                </p>
                <p>
                  An engineer by trade, his leadership bridges the gap between technical excellence and sustainable infrastructure. Under his guidance, we are not just selling products; we are building India's solar backbone.
                </p>
              </div>
            </motion.div>

            {/* Key Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Leaf, text: "Renewable Energy Strategy" },
                { icon: Zap, text: "Solar Supply Ecosystem" },
                { icon: GraduationCap, text: "Engineering Excellence" },
                { icon: ChevronRight, text: "Strategic EPC Partnerships" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="bg-slate-50 group-hover:bg-green-500 transition-colors p-2 rounded-lg">
                    <item.icon className="text-green-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;