'use client';

import { motion } from "framer-motion";
import { ShieldCheck, Sun, Truck, Users, Wrench, Handshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Industry Partnerships",
    desc: "Pride Eco Trade is an Authorized Channel Partner of Adani Solar and a Distribution Partner of Microtek, ensuring reliable and high-quality solar products."
  },
  {
    icon: Sun,
    title: "Integrated Solar Solutions",
    desc: "We provide both solar product supply and EPC project execution, enabling customers to access complete solar solutions from a single trusted partner."
  },
  {
    icon: Truck,
    title: "Strong Supply Chain",
    desc: "With warehouses in multiple locations, we ensure timely product availability and efficient logistics support for EPC companies and installers."
  },
  {
    icon: Users,
    title: "Experienced Leadership",
    desc: "Our leadership team brings over a decade of experience across renewable energy, infrastructure, and industrial supply chains."
  },
  {
    icon: Wrench,
    title: "Reliable EPC Execution",
    desc: "We focus on quality engineering, professional installation, and long-term system performance."
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    desc: "We build long-term relationships with EPC partners and customers through reliable service and transparent business practices."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-14 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0">
        
        {/* Header Logic from Image */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our <span className="text-green-600">Core Strengths</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-4xl mx-auto leading-relaxed">
            At the heart of <span className="font-bold text-slate-800">Pride Eco Trade</span> lie the principles that define how we serve our clients and lead the solar industry.
          </p>
        </div>

        {/* Floating Card List */}
        <div className="space-y-10">
          {features.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center w-full max-w-6xl mx-auto ${
                  isEven ? "justify-start" : "justify-end"
                }`}
              >
            

                <div className="relative w-full md:w-[80%] bg-white border border-slate-400 rounded-2xl p-8 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
                  
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row " : "md:flex-row-reverse text-right ms-10"
                  }`}>
                    
                    {/* The "Popped Out" Icon Container */}
                    <div className={`shrink-0 w-24 h-24 rounded-full bg-linear-to-br from-green-500 to-green-700 p-0.5 shadow-lg transform transition-transform group-hover:scale-110 ${
                       isEven 
                       ? "md:absolute -right-12 top-1/2 -translate-y-1/2" 
                       : "md:absolute -left-12 top-1/2 -translate-y-1/2"
                    }`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-slate-50">
                        <item.icon size={36} className="text-green-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-600 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base  md:text-lg ">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;