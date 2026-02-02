'use client';

import React from "react";
import { motion, useMotionValue, useSpring, easeOut } from "framer-motion";
import {
    ShieldCheck,
    Sun,
    Award,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};




const SolarHero = () => {
    // Mouse tracking for parallax and sunlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoother springs for the parallax effect
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Normalize values between -20 and 20 for subtle parallax
        const x = ((clientX - left) / width - 0.5) * 40;
        const y = ((clientY - top) / height - 0.5) * 40;

        mouseX.set(x);
        mouseY.set(y);
    }




    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-[#fafafa] selection:bg-yellow-200"
        >
            {/* ☀️ DYNAMIC SUNLIGHT GLOW */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 opacity-50"
                style={{
                    background: `radial-gradient(800px circle at 50% 50%, rgba(253, 224, 71, 0.15), transparent 80%)`,
                    x: springX,
                    y: springY
                }}
            />

            {/* 🔒 TOP TRUST BAR */}
            <div className="relative z-50 bg-slate-950 text-white/90 py-3 px-4 shadow-2xl">
                <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    <span className="flex items-center gap-2 text-yellow-400">
                        <Award size={14} /> Official Adani Solar Channel Partner
                    </span>
                    <span className="hidden md:inline text-slate-700">|</span>
                    <span className="hidden md:flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-500" /> Tier-1 Modules
                    </span>
                    <span className="hidden md:flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-500" /> Govt. Subsidy Ready
                    </span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 md:pt-12 pb-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center"
                >
                    {/* --- LEFT CONTENT --- */}
                    <motion.div className="lg:col-span-7  text-center lg:text-left pt-8">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">2026 Tech-Ready Installation</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8"
                        >
                            The Future is <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-br from-orange-600 via-yellow-500 to-orange-400">
                                Adani Solar.
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none"
                                >
                                    <path d="M1 10.5C50 3.5 150 3.5 299 10.5" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                                </motion.svg>
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                            Experience the power of India’s #1 solar modules. Slash bills by <span className="text-slate-900 font-bold underline decoration-yellow-400 decoration-4">90%</span> with next-gen Mono-PERC technology.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group relative overflow-hidden px-8 py-5 rounded-2xl font-bold text-white bg-slate-900 transition-all hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-green-800 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            <button className="px-8 py-5 rounded-2xl border-2 border-slate-200 font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:border-orange-500">
                                Check Availability
                            </button>
                        </motion.div>

                    </motion.div>

                    {/* --- RIGHT CONTENT: PREMIUM SOLAR VISUAL --- */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 px-10 relative h-140 flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-xl mt-15">

                            {/* PREMIUM SOLAR PANEL VISUALIZATION */}
                            <motion.div

                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                {/* Solar panel container with gradient border */}
                                <div className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-slate-800 to-slate-900 p-1">
                                    <div className="rounded-[2.9rem] overflow-hidden bg-slate-950 relative">
                                        {/* Solar cells grid */}
                                        <div className="relative w-full aspect-square bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
                                            {/* Grid overlay with energy flow */}
                                            <svg className="absolute inset-0 w-full h-full">
                                                {[...Array(5)].map((_, row) =>
                                                    [...Array(5)].map((_, col) => (
                                                        <g key={`cell-${row}-${col}`}>
                                                            <rect
                                                                x={`${(col * 20)}%`}
                                                                y={`${(row * 20)}%`}
                                                                width="20%"
                                                                height="20%"
                                                                fill="none"
                                                                stroke="rgba(253, 224, 71, 0.2)"
                                                                strokeWidth="2"
                                                            />
                                                        </g>
                                                    ))
                                                )}
                                            </svg>

                                        </div>
                                    </div>


                                </div>
                            </motion.div>


                            {/* ENHANCED ADANI SOLAR BADGE */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute -bottom-20 -right-16 z-40"
                            >
                                {/* ORBITAL GLOW RING */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full bg-linear-to-r from-yellow-300 via-orange-400 to-yellow-300 blur-xl opacity-40"
                                />

                                {/* PULSE GLOW */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative bg-linear-to-br from-yellow-400 via-orange-400 to-orange-500 p-0.5 rounded-[2.6rem] shadow-[0_30px_80px_-20px_rgba(251,191,36,0.6)]"
                                >
                                    <div className="relative bg-white rounded-[2.4rem] px-2 py-2 text-center overflow-hidden">

                                        {/* SUN RAYS SHIMMER */}
                                        <motion.div
                                            animate={{ x: ["-120%", "120%"] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-yellow-200/40 to-transparent rotate-50"
                                        />

                                        {/* ICON */}
                                        <motion.div
                                            animate={{ rotate: [0, 6, -6, 0] }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative z-10"
                                        >
                                            <Sun className="mx-auto text-orange-500 mb-3" size={34} />
                                        </motion.div>

                                        {/* TEXT */}
                                        <p className="relative z-10 text-[9px] uppercase font-bold tracking-[0.25em] text-slate-500">
                                            Official Channel Partner
                                        </p>
                                        <p className="relative z-10 ">
                                            <img
                                                src="https://www.pngall.com/wp-content/uploads/13/Adani-Green-Energy-PNG-Image.png"
                                                alt="Official Channel Partner"
                                                className=" h-15 w-20 mx-auto object-center"
                                            />
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>


                            {/* FIXED WARRANTY SEAL – ROTATE ONLY */}
                            <div className="absolute -top-9 -left-9 z-50 w-40 h-40">
                                <motion.div
                                    className="relative w-full h-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: "50% 50%" }}
                                >
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 120 120"
                                    >
                                        <defs>
                                            <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fbbf24" />
                                                <stop offset="100%" stopColor="#f59e0b" />
                                            </linearGradient>
                                        </defs>

                                        <path
                                            id="circlePath"
                                            d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                                            fill="none"
                                        />

                                        <text
                                            className="text-[10px] uppercase font-bold fill-orange-500 tracking-widest"
                                        >
                                            <textPath href="#circlePath">
                                                25-Year Warranty • 99.9% Uptime • Trusted Across 500+ Installations
                                            </textPath>
                                        </text>
                                    </svg>

                                    {/* CENTER ICON (STATIC – NO ROTATION) */}
                                    <div className="absolute inset-0 m-auto w-16 h-16 
      bg-linear-to-br from-green-400 to-green-500 
      rounded-full flex items-center justify-center shadow-2xl">
                                        <ShieldCheck className="text-orange-500" size={32} />
                                    </div>
                                </motion.div>
                            </div>


                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolarHero;
