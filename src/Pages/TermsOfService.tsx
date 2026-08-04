import { motion } from "framer-motion";

export default function TermsOfService() {
  const lastUpdated = "August 2026";

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-[#2c245a] pt-32 pb-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-black text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/80 text-lg">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-white/60 text-sm mt-4">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-8"
        >
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-8">
              By accessing and using the website and services of Pride Eco Trade, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">2. Services Provided</h2>
            <p className="mb-8">
              Pride Eco Trade provides solar EPC (Engineering, Procurement, and Construction) services, solar PV module supply, inverter supply, and related logistical and consultation services. We reserve the right to modify or discontinue any service at any time without notice.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">3. Quotations and Pricing</h2>
            <p className="mb-8">
              All quotes, feasibility reports, and pricing provided through our website or via email are estimates and are subject to final site inspection and formal contract agreement. Prices are subject to change based on market conditions.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">4. Intellectual Property</h2>
            <p className="mb-8">
              All content on this website, including text, graphics, logos, images, and software, is the property of Pride Eco Trade and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">5. Limitation of Liability</h2>
            <p className="mb-8">
              Pride Eco Trade shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any products supplied, except as explicitly stated in a formal contract.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">6. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
              <br/><br/>
              <strong>Pride Eco Trade</strong><br/>
              Email: prideecomarketing@gmail.com<br/>
              Phone: +91 788 008 8921
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
