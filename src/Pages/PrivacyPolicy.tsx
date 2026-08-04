import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const lastUpdated = "August 2026";

  const policies = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Fill out forms on our website (such as our Contact or Consultation forms).</li>
            <li>Request a quote or feasibility study for solar EPC services.</li>
            <li>Communicate with us via email, phone, or WhatsApp.</li>
            <li>Subscribe to our newsletters or marketing communications.</li>
          </ul>
          <p>
            This information may include your name, company name, email address, phone number, location, and specific details regarding your energy requirements.
          </p>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, maintain, and improve our solar and EPC services.</li>
            <li>To process your requests, generate quotes, and manage transactions.</li>
            <li>To communicate with you regarding your inquiries, projects, and our services.</li>
            <li>To send you technical notices, updates, security alerts, and administrative messages.</li>
            <li>To comply with legal obligations and resolve any disputes.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: (
        <>
          <p className="mb-4">
            We do not sell, trade, or otherwise rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> With trusted third-party vendors, channel partners (such as Adani Solar or Microtek), or contractors who need access to such information to carry out work on our behalf.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations or protect the rights, property, or safety of Pride Eco Trade, our customers, or others.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Data Security",
      content: (
        <p>
          We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
        </p>
      ),
    },
    {
      title: "5. Your Data Rights",
      content: (
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal data we hold about you. If you wish to exercise any of these rights, please contact us using the details provided below.
        </p>
      ),
    },
    {
      title: "6. Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
        </p>
      ),
    },
    {
      title: "7. Contact Us",
      content: (
        <>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-800">Pride Eco Trade</p>
            <p className="text-slate-600 mt-2">Email: prideecomarketing@gmail.com</p>
            <p className="text-slate-600">Phone: +91 788 008 8921</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HEADER SECTION */}
      <div className="bg-[#2c245a] pt-32 pb-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-black text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg">
            How we collect, use, and protect your data at Pride Eco Trade.
          </p>
          <p className="text-white/60 text-sm mt-4">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-4xl mx-auto px-4 py-16 -mt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-12"
        >
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Pride Eco Trade, we are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at prideecomarketing@gmail.com.
            </p>

            {policies.map((policy, idx) => (
              <div key={idx} className="mb-10 last:mb-0">
                <h2 className="font-serif text-2xl font-bold text-[#2c245a] mb-4">
                  {policy.title}
                </h2>
                <div className="text-slate-600 leading-relaxed">
                  {policy.content}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
