
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 

} from 'lucide-react';
import footerlogo from "../assets/Pride-Eco.png"

const SolarFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/95 text-slate-300">
     

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={footerlogo} alt="Pride Eco Logo" className="h-12 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              India's leading Solar EPC provider specializing in high-efficiency PV systems for residential and industrial sectors. MNRE approved and ISO certified.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Commercial Rooftops</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Industrial EPC</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Solar Water Pumps</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">AMC & Maintenance</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Net Metering Guide</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Subsidy Information</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Solar ROI Calculator</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 text-emerald-500 shrink-0" size={18} />
                <span>petrol pump, Maharajpur, Jabalpur, GCF Jabalpur, Madhya Pradesh 482004</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-emerald-500 shrink-0" size={18} />
                <span>+91 78800 88921</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-emerald-500 shrink-0" size={18} />
                <span>prideecomarketing@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 ">
          <p className='text-sm'>© {currentYear} Pride eco Trade Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Made with ☀️ in India</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-emerald-500">Grid Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolarFooter;