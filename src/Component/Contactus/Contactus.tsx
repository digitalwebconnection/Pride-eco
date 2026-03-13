'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";

const locations = [
  {
    city: "Jabalpur",
    tagline: "Head Office",
    address: "Plot No. 16, Karonda Maharajpur Transport Nagar, Jabalpur (M.P.) 482004",
    phone: ["7880088921", "8450892445"],
    email: "prideecomarketing@gmail.com",
    // Replace with your actual Google Maps Embed URLs
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.123456789!2d79.9!3d23.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA2JzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v123456789"
  },
  {
    city: "Rewa",
    tagline: "Distribution Hub",
    address: "Godown No. 3,4,5,6, Infront of Subhash Rice Mill, Umri Village, Rewa - 486006",
    phone: ["7880088921", "9755478923"],
    email: "prideecomarketing@gmail.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.345545387295!2d81.30111431042408!3d24.536252558063907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845b007b77af27%3A0x37d9cc2a522c9a94!2sSubhash%20rice%20mill!5e1!3m2!1sen!2sin!4v1773387880376!5m2!1sen!2sin"
  },
  {
    city: "Indore",
    tagline: "Regional Office",
    address: "25, Sarvsuvidha Nagar, Behind Aadarsh Shishu Vihar, Indore - 452016",
    phone: ["9755958924"],
    email: "shivam.prideecotrade@gmail.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4616.442297035907!2d75.90995554339281!3d22.717632243245003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2c524afebb9%3A0xc9d1719ae596d058!2s25%2C%20behind%20Adarsh%20Shishu%20Vihar%20School%2C%20near%20Bangali%20square%2C%20Sarv%20Suvidha%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e1!3m2!1sen!2sin!4v1773387828231!5m2!1sen!2sin"
  },
  {
    city: "Bhandara",
    tagline: "Logistics Center",
    address: "Near Shree Ganesh Traders, Mahatma Phule Colony, Bhojapur, Bhandara - 441904",
    phone: ["7880088921", "8450892445"],
    email: "prideecomarketing@gmail.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9351531222146!2d79.62705241032633!3d21.15833028323539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b390eeccc6c31%3A0x8966a60b066e7c!2sShree%20Ganesh%20Traders!5e1!3m2!1sen!2sin!4v1773387934704!5m2!1sen!2sin"
  }
];

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-slate-950 text-white pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-150 h-150 bg-green-500/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-green-400 font-bold tracking-[0.3em] uppercase text-sm">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 tracking-tight">
              Let's Power Your <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">Future.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about solar EPC, distribution, or partnerships? Our specialists are here to provide clear, actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN INTERACTIVE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 pb-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: PREMIUM FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Start a Conversation</h2>
              <p className="text-slate-500 mt-2">Expect a response within 24 business hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Phone Number</label>
                  <input type="text" placeholder="+91 00000 00000" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all outline-none resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-slate-200"
              >
                Send Inquiry <Send size={18} className="text-green-400" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: LOCATION SELECTOR */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-4 rounded-4xl shadow-xl border border-slate-100">
              <div className="grid grid-cols-2 gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-4 py-4 rounded-2xl text-sm font-bold transition-all ${
                      activeLocation.city === loc.city 
                      ? "bg-green-600 text-white shadow-lg shadow-green-200" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {loc.city}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLocation.city}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-green-600 text-xs font-black uppercase tracking-widest">{activeLocation.tagline}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeLocation.city}</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-4 group">
                        <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-green-100 transition-colors">
                          <MapPin size={20} className="text-slate-600 group-hover:text-green-600" />
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{activeLocation.address}</p>
                      </div>

                      <div className="flex gap-4 group">
                        <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-green-100 transition-colors">
                          <Phone size={20} className="text-slate-600 group-hover:text-green-600" />
                        </div>
                        <div className="flex flex-col">
                          {activeLocation.phone.map((num) => (
                            <a key={num} href={`tel:${num}`} className="text-slate-900 font-bold hover:text-green-600 transition-colors">
                              {num}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 group">
                        <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-green-100 transition-colors">
                          <Mail size={20} className="text-slate-600 group-hover:text-green-600" />
                        </div>
                        <a href={`mailto:${activeLocation.email}`} className="text-slate-900 font-bold hover:text-green-600 transition-colors break-all">
                          {activeLocation.email}
                        </a>
                      </div>
                    </div>

                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="inline-flex items-center gap-2 text-green-600 font-bold text-sm pt-4 border-t border-slate-100 w-full"
                    >
                      Get Directions <ArrowRight size={16} />
                    </motion.a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* QUICK CONTACT BAR */}
            <div className="bg-slate-900 p-8 rounded-4xl text-white flex items-center justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Urgent Support?</p>
                <p className="text-xl font-bold mt-1">Call Our Hotline</p>
              </div>
              <a href="tel:7880088921" className="relative z-10 bg-green-500 p-4 rounded-2xl hover:bg-green-400 transition-colors">
                <Phone fill="currentColor" size={24} />
              </a>
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-slate-800">Showing: {activeLocation.city} Hub</span>
            </div>
          </div>
          <motion.iframe
            key={activeLocation.city}
            initial={{ opacity: 0, filter: "grayscale(100%)" }}
            animate={{ opacity: 1, filter: "grayscale(0%)" }}
            transition={{ duration: 1 }}
            src={activeLocation.map}
            className="w-full h-112.5 border-none"
            loading="lazy"
          />
        </div>
      </section>

    </div>
  );
}