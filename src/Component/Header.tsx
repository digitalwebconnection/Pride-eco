import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/Pride-Eco.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header className="w-full  fixed top-0 z-999">
      
      {/* TOP BAR */}
      <div className="bg-[#2c245a] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-2 gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +91 7880088921
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> prideecomarketing@gmail.com
            </span>
          </div>

          <div className="flex space-x-4">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-3" : "bg-white py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Prideeco Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-14"}`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-[#2c245a]">Home</Link>
            <Link to="/about" className="hover:text-[#2c245a]">About Us</Link>
            <Link to="/products" className="hover:text-[#2c245a]">Products</Link>
            <Link to="/services" className="hover:text-[#2c245a]">Services</Link>
            <Link to="/careers" className="hover:text-[#2c245a]">Careers</Link>
            <Link to="/blog" className="hover:text-[#2c245a]">Blog</Link>
            <Link
              to="/contact"
              className="border border-[#2c245a] px-6 py-2 rounded-3xl hover:bg-[#2c245a] hover:text-white transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 gap-4 font-medium text-gray-700">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact" className="text-[#2c245a] font-semibold">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}