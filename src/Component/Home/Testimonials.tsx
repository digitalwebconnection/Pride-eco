'use client';

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Residential Solar Customer",
    message:
      "From consultation to installation, the entire process was smooth and transparent. The system performance is excellent and savings are beyond expectations!",
    location: "Ahmedabad",
  },
  {
    name: "Anita Sharma",
    role: "Commercial Project Client",
    message:
      "Partnering with an authorized solar company gave us confidence. Quality components, timely delivery, and professional execution on our rooftop.",
    location: "Surat",
  },
  {
    name: "Vikram Desai",
    role: "Factory Owner",
    message:
      "Reliable brands like Adani Solar, skilled team, and proper documentation support. Our energy costs reduced by 85% after installation.",
    location: "Vadodara",
  },
  {
    name: "Sunil Mehta",
    role: "Industrial Client",
    message:
      "Professional team, trusted brands, and seamless execution. They handled the government subsidy paperwork perfectly. Highly recommended!",
    location: "Rajkot",
  },
];

// Repeat array for infinite scroll
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const Testimonials = () => {
  return (
    <section className="relative bg-slate-50 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/40 rounded-full blur-3xl -mr-40 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl -ml-40 -mb-24" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-green-600 font-bold tracking-[0.25em] uppercase text-sm block mb-4">
            Customer Success
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-yellow-500">
              500+ Happy Clients
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Real experiences from homeowners, businesses, and industries who
            switched to solar for long-term savings and sustainability.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative min-w-[320px] md:min-w-95 
                           rounded-3xl bg-white/80 backdrop-blur-xl
                           border border-slate-200 shadow-xl
                           hover:shadow-2xl hover:border-green-400
                           transition-all duration-500 overflow-hidden"
              >
                {/* Top Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-green-500 via-yellow-400 to-green-500" />

                {/* Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-300/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-slate-100 group-hover:text-green-100 transition-colors duration-500">
                  <Quote size={56} fill="currentColor" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-7">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-slate-700 text-[17px] italic leading-relaxed mb-6">
                    “{item.message}”
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-slate-200 mb-5" />

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-500 to-yellow-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        {item.name}
                        <CheckCircle
                          size={14}
                          className="text-blue-500 fill-blue-50"
                        />
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {item.role} • {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
