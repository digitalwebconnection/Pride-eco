import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much can I save by installing solar panels?",
    answer:
      "Savings depend on your electricity usage and system size. Most customers save 60%–90% on monthly electricity bills after switching to solar.",
  },
  {
    question: "Do you help with government subsidy and net metering?",
    answer:
      "Yes. We provide complete support for government subsidy documentation, approvals, and net metering to ensure a smooth and hassle-free process.",
  },
  {
    question: "Which brands do you use for solar panels and inverters?",
    answer:
      "We work only with officially authorized and trusted brands like Adani Solar and Microtek Inverters to ensure long-term performance and reliability.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Residential installations typically take 3–5 working days after site survey and approvals. Commercial projects may take slightly longer based on capacity.",
  },
  {
    question: "What maintenance is required after installation?",
    answer:
      "Solar systems require minimal maintenance. Periodic panel cleaning and basic inspection are sufficient to maintain optimal performance.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know before switching to solar energy.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-500/50 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <Minus className="text-green-600" />
                ) : (
                  <Plus className="text-green-600" />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-600 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition">
            Talk to a Solar Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
