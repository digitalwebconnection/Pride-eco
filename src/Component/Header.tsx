import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/Pride-Eco.png"

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
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar */}
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

          <div className="flex items-center gap-1">
            <MapPin size={14} />
            petrol pump, Maharajpur, Jabalpur, GCF Jabalpur, Madhya Pradesh 482004
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Prideeco Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-14"
              }`}
            />
      
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-[#2c245a]">Home</a>
            <a href="#" className="hover:text-[#2c245a]">About Us</a>
            <a href="#" className="hover:text-[#2c245a]">Products</a>
            <a href="#" className="hover:text-[#2c245a]">Videos</a>
            <a
              href="#"
              className="border border-[#2c245a] px-4 py-2 rounded hover:bg-[#2c245a] hover:text-white transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col p-4 gap-4 font-medium text-gray-700">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Products</a>
              <a href="#">Videos</a>
              <a href="#" className="text-[#2c245a] font-semibold">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
