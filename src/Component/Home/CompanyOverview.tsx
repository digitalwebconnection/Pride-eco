'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutPrideEco = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-14 bg-slate-50 overflow-hidden">

      <motion.span
        variants={itemVariants}
        className="text-green-600 text-center font-bold uppercase text-sm tracking-[0.2em] mb-4 block"
      >
        About Pride Eco Trade
      </motion.span>
      <motion.h2
        variants={itemVariants}
        className="text-3xl lg:text-4xl text-center  font-bold text-slate-900 leading-tight"
      >
        Driving India's Solar Energy
        <span className="text-green-600"> Distribution & EPC Growth</span>
      </motion.h2>
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* RIGHT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="py-5"
            viewport={{ once: true }}
          >

            <motion.p
              variants={itemVariants}
              className="text-slate-600 mt-6 text-lg leading-relaxed"
            >
              <strong>Pride Eco Trade LLP</strong> is a renewable energy solutions company
              focused on accelerating the adoption of solar energy in India.
              Established in <strong>2024</strong>, the company is driven by a team
              that collectively brings <strong>more than 10 years of experience</strong>
              across renewable energy, infrastructure, and industrial distribution.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 mt-4 leading-relaxed"
            >
              Pride Eco Trade operates across two key verticals: solar equipment
              distribution and solar EPC services. The company supplies reliable
              solar products and delivers professional project execution for
              residential, commercial, and industrial installations.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 mt-4 leading-relaxed"
            >
              The company is an <strong>Authorized Channel Partner of Adani Solar
                for Solar PV Modules</strong> and a <strong>Distribution Partner of
                  Microtek for Solar Inverters</strong>, enabling access to trusted
              technology and high-performance solar equipment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 mt-4 leading-relaxed"
            >
              With a growing network of solar EPC companies, installers, and
              developers, Pride Eco Trade is committed to providing dependable
              supply, efficient logistics, and high-quality solar installations
              across India.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 mt-4 leading-relaxed"
            >
              Our mission is to strengthen the solar ecosystem by enabling
              faster adoption of renewable energy through reliable products
              and professional project execution.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-200 hover:bg-green-700 transition-all"
              >
                Partner With Us
                <ArrowUpRight size={20} />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                alt="Solar installation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stat */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-8 left-6 bg-white shadow-2xl rounded-2xl px-8 py-5 border border-slate-100"
            >
              <p className="text-4xl font-extrabold text-green-600">10+ Years</p>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-tighter">
                Industry Experience
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPrideEco;