import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "917880088921"; // Format for WhatsApp link
  const message = "Hello! I'm interested in your solar energy solutions. Can you help me?";

  useEffect(() => {
    // Auto-open tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-1000 flex flex-col items-end">
      {/* Tooltip/Chat Box */}
      <AnimatePresence>
        {(isOpen || showTooltip) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-green-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm">Pride Eco Trade</h3>
                  <p className="text-[10px] text-white/80">Online | Usually replies in minutes</p>
                </div>
              </div>
              <button 
                onClick={() => {
                    setIsOpen(false);
                    setShowTooltip(false);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#e5ddd5] min-h-[80px] relative">
               <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[90%]">
                 Hi there! 👋 <br /> How can we help you with your solar requirements today?
               </div>
               <div className="text-[10px] text-slate-500 mt-1 ml-1">11:49 AM</div>
            </div>

            {/* Footer / CTA */}
            <div className="p-3 bg-white">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white py-2 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-100"
              >
                Start Chat <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all relative group"
      >
        <MessageCircle size={32} />
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:hidden"></span>
      </motion.button>
    </div>
  );
}
