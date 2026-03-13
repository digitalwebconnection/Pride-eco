'use client';

import { motion, type Variants } from "framer-motion";
import { Sun, Wrench, Home, Building, Factory, CheckCircle2 } from "lucide-react";

const distributionProducts = [
    "Solar PV Modules", "Solar Inverters", "Mounting Structures",
    "Solar Cables", "DC & AC Boxes", "Protection Equipment"
];

const epcServices = [
    "Site Assessment & Design", "Plant Engineering",
    "Govt Approvals & Net Metering", "Commissioning & AMC"
];

const customers = [
    { icon: Home, label: "Residential" },
    { icon: Building, label: "Commercial" },
    { icon: Factory, label: "Industrial" }
];

const BusinessVerticals = () => {
    // Animation Variants
    const listContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const listItem: Variants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } as const }
    };

    const listItemRight: Variants = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } as const }
    };

    return (
        <section className="py-8 bg-slate-950 text-white relative overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-green-900/30 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[70%] bg-blue-900/20 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-7xl  mx-auto px-0 relative z-10">

                {/* Header with Motion Underline */}
                <div className="mb-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                            Our Business <span className="text-green-500 text-glow">Verticals</span>
                        </h2>


                    </motion.div>
                </div>
                {/* Service Badges */}
                <div className="mb-16  justify-center flex flex-wrap gap-3">
                    {customers.map((c, i) => (
                        <motion.div
                            whileHover={{ y: -5 }}
                            key={i}
                            className="flex items-center gap-2 px-10 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-bold uppercase tracking-tighter text-slate-300"
                        >
                            <c.icon size={14} className="text-green-500" />
                            {c.label}
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 relative">

                    {/* Vertical Separator Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="hidden lg:block absolute left-1/2 top-0 w-px bg-linear-to-b from-transparent via-slate-700 to-transparent"
                    />

                    {/* LEFT SIDE: DISTRIBUTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:pr-20 space-y-8"
                    >
                        <div className="relative">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                                    <Sun className="text-green-400" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold">Solar Distribution</h3>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Premium equipment supply chain powered by a pan-India warehousing network.
                            </p>

                            <motion.div variants={listContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {distributionProducts.map((item, i) => (
                                    <motion.div
                                        variants={listItem}
                                        key={i}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 transition-colors group"
                                    >
                                        <CheckCircle2 size={16} className="text-green-500 group-hover:scale-110 transition" />
                                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: EPC */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:pl-20 space-y-8 mt-12 lg:mt-0"
                    >
                        <div className="relative">
                            <div className="flex items-center gap-5 mb-6">
                                <div className="p-4 bg-orange-400/10 rounded-2xl border border-orange-400/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                                    <Wrench className="text-orange-400" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-white">EPC Services</h3>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed mb-4">
                                End-to-end solar solutions from conceptual design to lifetime maintenance.
                            </p>

                            <motion.div variants={listContainer} className="space-y-4">
                                {epcServices.map((item, i) => (
                                    <motion.div
                                        variants={listItemRight}
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-orange-400/10 border border-orange-400 hover:bg-orange-400/50 transition-all group"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>


                        </div>
                    </motion.div>

                </div>
            </div>

            <style >{`
        .text-glow {
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
        }
      `}</style>
        </section>
    );
};

export default BusinessVerticals;