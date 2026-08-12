import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import logo from "../assets/Pride-Eco.webp";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirementType: string;
  location: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  description?: string;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirementType: "Residential",
    location: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form on close
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirementType: "Rooftop – Residential",
        location: "",
        description: "",
      });
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    
    if (!formData.location.trim()) newErrors.location = "City / Location is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "5e16eb98-ca7a-4345-981a-db330b55d399", // Replace with your Web3Forms Access Key
            subject: `New Solar Enquiry from ${formData.name}`,
            from_name: "Pride Eco Website",
            ...formData,
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Enquiry submitted successfully! We'll contact you soon.");
          
          // Reset form
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            requirementType: "Residential",
            location: "",
            description: "",
          });
          onClose();
        } else {
          toast.error("Something went wrong! Please try again later.");
        }
      } catch (error) {
        toast.error("Failed to submit form. Please check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Allow only exactly up to 10 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-green-500 to-emerald-500 p-4 md:p-6 text-white relative shrink-0 text-center flex flex-col items-center">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="bg-white inline-block px-4 py-2 rounded-xl mb-3 shadow-md">
                <img src={logo} alt="Pride Eco" className="h-8 md:h-12 object-contain" />
              </div>
              <h2 className="font-serif text-xl md:text-3xl font-bold">Send us your requirement</h2>
              <p className="text-white mt-1 md:mt-2 text-xs md:text-sm leading-relaxed max-w-md">
                Share a few details and our team will get back with feasibility, savings estimate and next steps.
              </p>
            </div>

            {/* Form */}
            <div className="p-3 md:p-6 overflow-y-auto custom-scrollbar">
              <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none`}
                    />
                    {errors.name && <p className="text-[10px] md:text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none`}
                    />
                    {errors.email && <p className="text-[10px] md:text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">Phone <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91......"
                      className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none`}
                    />
                    {errors.phone && <p className="text-[10px] md:text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        name="requirementType"
                        value={formData.requirementType}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Utility Scale</option>
                        <option>EPC Services</option>
                        <option>Distribution</option>
                      </select>
                      <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs md:text-sm font-bold text-slate-700">City <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City"
                      className={`w-full bg-white border ${errors.location ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none`}
                    />
                    {errors.location && <p className="text-[10px] md:text-xs text-red-500 mt-1">{errors.location}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs md:text-sm font-bold text-slate-700">Requirement <span className="text-red-500">*</span></label>
                  <textarea
                    rows={2}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="E.g. 200 kW rooftop for factory..."
                    className={`w-full bg-white border ${errors.description ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 md:px-4 py-1.5 md:py-2.5 text-xs md:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none resize-none`}
                  />
                  {errors.description && <p className="text-[10px] md:text-xs text-red-500 mt-1">{errors.description}</p>}
                </div>

                <div className="pt-1">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`bg-[#2c245a] text-white px-8 py-2 md:py-2.5 text-sm md:text-base rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
