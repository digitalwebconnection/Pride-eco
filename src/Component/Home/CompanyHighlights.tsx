'use client';

import { motion, useMotionValue, useTransform, animate, useInView, type Variants } from "framer-motion";
import { Zap, Sun, MapPin, Building2 } from "lucide-react";
import { useEffect, useRef } from "react";

const Counter = ({ targetValue }: { targetValue: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count, targetValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const highlights = [
  {
    icon: Zap,
    numericValue: 10,
    suffix: "+ Years",
    title: "Leadership Experience",
    desc: "Decade-long expertise across renewable energy and infrastructure."
  },
  {
    icon: Sun,
    numericValue: 100,
    suffix: " MW+",
    title: "Solar Capacity",
    desc: "Total capacity supplied and installed through strategic EPC partnerships."
  },
  {
    icon: MapPin,
    numericValue: 4,
    suffix: " Strategic Hubs",
    title: "Warehouses & Offices",
    desc: "Optimized logistics across Central India for rapid equipment delivery."
  },
  {
    icon: Building2,
    numericValue: 50,
    suffix: "+ Projects",
    title: "Growing Portfolio",
    desc: "Residential and industrial solar projects executed with precision."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const CompanyHighlights = () => {
  return (
    <section className="relative py-8  bg-white overflow-hidden">


      <div className="max-w-7xl mx-auto px-0   relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-green-600 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Our Impact in Numbers
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Key Company Highlights
          </motion.h2>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.04
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center hover:shadow-2xl hover:bg-white transition-all duration-300 group overflow-hidden"
            >

              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center text-green-600"
              >
                <data.icon size={28} />
              </motion.div>

              {/* Stat */}
              <div className="text-3xl font-bold text-slate-900 mb-2">
                <Counter targetValue={data.numericValue} />
                <span className="text-green-600">{data.suffix}</span>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-slate-800 mb-2">
                {data.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {data.desc}
              </p>

              {/* Bottom Animated Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-0.75 bg-green-500"
              />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyHighlights;