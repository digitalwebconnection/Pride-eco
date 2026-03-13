'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import footerlogo from "../assets/Pride-Eco.png";
import { useState } from 'react';

const SolarFooter = () => {

  const currentYear = new Date().getFullYear();

  const locations = [
    {
      city: "Jabalpur",
      address: "Plot No. 16, Karonda Maharajpur Transport Nagar, Jabalpur (M.P.) 482004",
      phone: ["7880088921", "8450892445"],
      email: "prideecomarketing@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=Karonda+Maharajpur+Transport+Nagar+Jabalpur"
    },
    {
      city: "Rewa",
      address: "Godown No. 3,4,5,6, Infront of Subhash Rice Mill, Umri Village, Rewa - 486006",
      phone: ["7880088921", "9755478923"],
      email: "prideecomarketing@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=Umri+Village+Rewa+486006"
    },
    {
      city: "Indore",
      address: "25, Sarvsuvidha Nagar, Behind Aadarsh Shishu Vihar, Indore - 452016",
      phone: ["9755958924"],
      email: "shivam.prideecotrade@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=Sarvsuvidha+Nagar+Indore"
    },
    {
      city: "Bhandara",
      address: "Near Shree Ganesh Traders, Mahatma Phule Colony, Bhandara Nagpur Highway, Bhojapur, Bhandara Maharashtra - 441904",
      phone: ["7880088921", "8450892445"],
      email: "prideecomarketing@gmail.com",
      map: "https://www.google.com/maps/search/?api=1&query=Bhandara+Nagpur+Highway+Bhojapur"
    }
  ];

  const [active, setActive] = useState<number | null>(null);

  const toggleLocation = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-0 py-10 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Brand */}
<div className="space-y-6">

  <motion.img
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    src={footerlogo}
    alt="Pride Eco Logo"
    className="h-14 w-auto object-contain"
  />

  {/* Tagline */}
  <div className="space-y-2">

    <p className="text-sm font-semibold text-white">
      Pride Eco Trade LLP
    </p>

    <p className="text-sm text-emerald-400 font-medium">
      Empowering India’s Solar Future
    </p>

  </div>

  {/* Partner Information */}
  <div className="text-xs text-slate-400 space-y-1 leading-relaxed">

    <p>
      Authorized Channel Partner of 
      <span className="text-emerald-400"> Adani Solar</span>
    </p>

    <p>
      Distribution Partner – 
      <span className="text-emerald-400"> Microtek Solar Inverters</span>
    </p>

  </div>

  {/* Social Icons */}
  <div className="flex space-x-5">
    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
      <motion.a
        key={i}
        whileHover={{ y: -3, scale: 1.1 }}
        href="#"
        className="bg-slate-900 p-2.5 rounded-lg hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-800"
      >
        <Icon size={18} />
      </motion.a>
    ))}
  </div>

</div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">
              Solutions
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                "Solar PV Modules",
                "Solar Inverters",
                "Solar EPC Projects",
                "Commercial Solar",
                "Industrial Solar"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-emerald-400 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">
              Support
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                "Solar Consultation",
                "EPC Partnership",
                "Logistics Support",
                "Privacy Policy",
                "Terms of Service"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-emerald-400 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Accordion */}
          <div>

            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">
              Our Locations
            </h4>

            <div className="space-y-2">

              {locations.map((loc, index) => {

                const isOpen = active === index;

                return (
                  <div
                    key={index}
                    className={`border rounded-xl overflow-hidden transition ${
                      isOpen
                        ? "border-emerald-500/50 bg-slate-900/40"
                        : "border-slate-800"
                    }`}
                  >

                    {/* City Header */}
                    <button
                      onClick={() => toggleLocation(index)}
                      className="w-full flex items-center justify-between px-5 py-2 text-left"
                    >
                      <span className={`text-sm font-semibold ${
                        isOpen ? "text-emerald-400" : "text-slate-200"
                      }`}>
                        {loc.city}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    {/* Location Details */}
                    <AnimatePresence>

                      {isOpen && (

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        >

                          <div className="px-5 pb-5 pt-1 space-y-2 text-sm text-slate-400 border-t border-slate-800">

                            {/* Address */}
                            <div className="flex items-start gap-3">

                              <MapPin size={26} className="text-emerald-500 mt-1" />

                              <a
                                href={loc.map}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition"
                              >
                                {loc.address}
                              </a>

                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 flex-wrap">

                              <Phone size={16} className="text-emerald-500" />

                              {loc.phone.map((num, i) => (
                                <a
                                  key={i}
                                  href={`tel:${num}`}
                                  className="hover:text-emerald-400 transition"
                                >
                                  {num}{i < loc.phone.length - 1 ? ", " : ""}
                                </a>
                              ))}

                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">

                              <Mail size={16} className="text-emerald-500" />

                              <a
                                href={`mailto:${loc.email}`}
                                className="hover:text-emerald-400 transition"
                              >
                                {loc.email}
                              </a>

                            </div>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-900 py-6">

        <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">

          <p>
            © {currentYear} Pride Eco Trade LLP. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">

            <span>Made with ☀️ in India</span>

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>

              <span className="text-emerald-500">
                Solar Powered Future
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default SolarFooter;