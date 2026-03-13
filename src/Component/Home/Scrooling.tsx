"use client";

import { useEffect, useMemo, useState } from "react";

const BASE_DURATION = 28;

export default function ProductScroll() {
    const [ prefersReducedMotion, setPRM] = useState(false);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const mqRM = window.matchMedia("(prefers-reduced-motion: reduce)");
        const mqSM = window.matchMedia("(max-width: 639px)");
        const setFlags = () => {
            setPRM(mqRM.matches);
            setIsSmall(mqSM.matches);
        };
        setFlags();
        mqRM.addEventListener?.("change", setFlags);
        mqSM.addEventListener?.("change", setFlags);
        return () => {
            mqRM.removeEventListener?.("change", setFlags);
            mqSM.removeEventListener?.("change", setFlags);
        };
    }, []);

    const duration = prefersReducedMotion ? 0 : Math.max(10, BASE_DURATION - (isSmall ? 8 : 0));

    return (
        <main className="w-full bg-slate-50 py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <header className="mb-6 text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">
                        Our Technology Stack
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                        Premium Solar Components
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-4xl mx-auto">
                        We use industry-leading Tier-1 modules and high-efficiency power electronics
                        to ensure your plant performs for 25+ years.
                    </p>
                </header>

                <section aria-label="Product Marquee" className="relative group">
                    {/* Glassmorphism Container */}
                    <div className="rounded-3xl bg-white/40 p-4 backdrop-blur-md  overflow-hidden">
                        <div className="relative overflow-hidden py-2">
                            <Marquee prefersReducedMotion={prefersReducedMotion} duration={duration} />

                            {/* Improved Edge Fades */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10" />
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
                @keyframes marqueeX {
                  0%   { transform: translate3d(0,0,0); }
                  100% { transform: translate3d(-50%,0,0); }
                }
                .marquee-track {
                  animation-name: marqueeX;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                  will-change: transform;
                }
                .group:hover .marquee-track { animation-play-state: paused; }
            `}</style>
        </main>
    );
}

function Marquee({ prefersReducedMotion, duration }: { prefersReducedMotion: boolean; duration: number; }) {
    const logos = [
        { label: "High Efficiency Panels", src: "https://static.vecteezy.com/system/resources/thumbnails/053/963/638/small/a-solar-panel-positioned-on-grassy-ground-designed-to-harness-sunlight-for-energy-production-png.png", alt: "Solar Panels" },
        { label: "Smart Inverters", src: "https://png.pngtree.com/png-vector/20240730/ourmid/pngtree-choosing-the-right-solar-power-inverter-for-your-system-png-image_13291828.png", alt: "Inverters" },
        { label: "ACDB Protection", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYWeOFM0wkT3AS4811uCPmzGRNQ5h6jqKjg&s", alt: "ACDB" },
        { label: "DCDB Enclosures", src: "https://cpimg.tistatic.com/9819920/b/4/solar-dcdb-box.png", alt: "DCDB" },
        { label: "Lithium Storage", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFj-QiurNv8WDP1MHNLdkIs2kCXOazanySA&s", alt: "Battery" },
        { label: "Structure Mounts", src: "https://5.imimg.com/data5/SELLER/Default/2024/8/443630910/JH/QY/GX/124228058/liberty-370-250x250.jpg", alt: "Mounts" },
        { label: "Safety Earthing", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqWRVCWcIeH8ehBt2nFzP18EVFHNM5mJcOQ&s", alt: "Earthing" },
    ];

    const sequence = useMemo(() => [...logos, ...logos, ...logos], []);

    return (
        <div className="flex">
            <div
                className={`marquee-track flex items-center ${prefersReducedMotion ? "marquee-paused" : ""}`}
                style={{ animationDuration: `${duration}s` }}
            >
                <ul className="flex items-center gap-6 sm:gap-12 px-6">
                    {sequence.map((item, idx) => (
                        <li key={idx} className="shrink-0">
                            <ProductCard item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ProductCard({ item }: { item: { src: string; alt: string; label: string } }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="
                relative flex items-center justify-center 
                bg-white p-4  transition-shadow
                h-28 w-40 sm:h-36 sm:w-52
            ">
                <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain  hover:scale-110 transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                />
            </div>

        </div>
    );
}