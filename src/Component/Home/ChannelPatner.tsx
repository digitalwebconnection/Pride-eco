
import { ShieldCheck, Leaf } from "lucide-react";
import { easeInOut,  motion } from "framer-motion";

const partners = [
  {
    name: "Adani Solar",
    logo: "https://i0.wp.com/solarquarter.com/wp-content/uploads/2019/10/Adani-Solar.png?fit=200%2C124&ssl=1",
    description:
      "India’s leading solar manufacturer, powering large-scale and residential clean energy projects.",
  },
  {
    name: "Microtek Inverter",
    logo: "https://storage.googleapis.com/pitchonnet-news-photo/news-photo/34736.New-Project---2024-04-18T201527.119.jpg",
    description:
      "Trusted inverter technology brand ensuring reliable and efficient solar performance.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const ChannelPartners = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Company Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We work only with officially authorized, sustainability-driven brands
            to deliver reliable and future-ready solar solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Official Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute z-80 -top-4 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2"
              >
                <ShieldCheck size={16} />
                Official Partner
              </motion.div>

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-6"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 object-contain"
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-5">
                {partner.description}
              </p>

              {/* Eco Pride */}
              <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
                <Leaf size={18} />
                Pride Eco Company Partner
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-green-500 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChannelPartners;
