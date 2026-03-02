'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Leaf, Sun, ShieldCheck, ArrowUpRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

/* ================= COUNTER COMPONENT ================= */

const StatCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

/* ================= MAIN COMPONENT ================= */

const AboutUsHome = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">

      {/* BACKGROUND SOFT ACCENT */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-green-100 to-yellow-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-yellow-100 to-green-100 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-green-600 mb-6 uppercase tracking-widest">
              <Leaf size={16} /> About Pride Eco Solar
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Delivering Sustainable <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-yellow-500">
                Solar Excellence Across India
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Pride Eco Solar empowers homes, businesses, and industries with
              reliable, high-efficiency solar energy solutions. Our mission is to
              accelerate India’s clean energy transition.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-10">
              {[
                { icon: ShieldCheck, color: "text-green-600", text: "ISO Certified & Tier-1 Solar Modules" },
                { icon: Sun, color: "text-yellow-500", text: "15+ Years Industry Experience" },
                { icon: Zap, color: "text-orange-500", text: "Government Subsidy & Net Metering Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <item.icon className={item.color} size={22} />
                  <span className="font-medium text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all hover:gap-4 shadow-lg shadow-green-100"
            >
              Learn More About Us <ArrowUpRight size={20} />
            </a>
          </motion.div>

          {/* RIGHT IMAGE + STATS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* IMAGE WITH PARALLAX EFFECT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* FLOATING STATS CARD */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-15  -left-6 sm:-left-18 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 grid grid-cols-4 gap-x-8 gap-y-2 border border-slate-100 max-w-lg sm:max-w-xl"
            >
              {[
                { label: "Projects Installed", val: 500, suffix: "+" },
                { label: "Years Warranty", val: 25, suffix: "+" },
                { label: "Capacity Delivered", val: 10, suffix: "MW+" },
                { label: "Satisfaction", val: 100, suffix: "%" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tabular-nums">
                    <StatCounter value={stat.val} suffix={stat.suffix} />
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;