import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/Pride-Eco.webp";
import ContactPopup from "./ContactPopup";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Highlights", path: "/#highlights" },
    { name: "Services", path: "/#services" },
    { name: "Partners", path: "/#partners" },
    { name: "Leadership", path: "/#leadership" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <header className="w-full fixed top-0 z-999">
      {/* TOP BAR */}
      <div className="bg-[#2c245a] text-white text-[11px] sm:text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between py-2 gap-2">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a href="tel:+917880088921" className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Phone size={14} className="shrink-0" /> +91 788 008 8921
            </a>
            <a href="mailto:prideecomarketing@gmail.com" className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Mail size={14} className="shrink-0" /> prideecomarketing@gmail.com
            </a>
          </div>

          <div className="flex space-x-5 sm:space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61579463065815" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Facebook size={16} className="md:w-4.5 md:h-4.5" /></a>
            <a href="https://www.linkedin.com/company/108973195/admin/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Linkedin size={16} className="md:w-4.5 md:h-4.5" /></a>
            <a href="https://www.instagram.com/prideecotrade/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Instagram size={16} className="md:w-4.5 md:h-4.5" /></a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white pt-4"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Prideeco Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"} select-none`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-5 font-bold text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#2c245a] transition-colors uppercase text-[12px] lg:text-[13px] tracking-tight lg:tracking-wider whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#2c245a] text-white px-4 py-2 rounded-full hover:bg-[#3d327a] transition shadow-md uppercase text-[12px] lg:text-[13px] tracking-wider font-bold ml-2 whitespace-nowrap"
            >
              Contact
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden p-2 text-[#2c245a]" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* MOBILE SIDEBAR MENU */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* BACKDROP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-1000 md:hidden"
              />

              {/* SIDEBAR */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed top-0 right-0 w-70 sm:w-[320px] h-dvh bg-white shadow-2xl z-1001 md:hidden flex flex-col"
              >
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-[#2c245a] text-white">
                  <span className="font-black text-xl tracking-widest">MENU</span>
                  <button onClick={() => setMenuOpen(false)} className="p-2 text-white hover:text-green-400 bg-white/10 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col p-6 gap-6 font-bold text-slate-700 overflow-y-auto custom-scrollbar flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-green-500 uppercase text-sm tracking-widest border-b border-slate-100 pb-3 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setIsPopupOpen(true);
                    }}
                    className="bg-green-500 hover:bg-green-600 transition-colors text-white p-4 rounded-xl uppercase text-sm tracking-widest font-bold shadow-lg mt-4 w-full"
                  >
                    Contact Us
                  </button>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
}

