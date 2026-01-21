"use client";
import { useState } from "react";
import { Send, MapPin, Phone, User, CheckSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    service: "General Enquiry",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the terms.");
      return;
    }

    const message = `*New Website Enquiry!* 🏠%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pincode:* ${formData.pincode}%0A*Looking For:* ${formData.service}`;
    window.open(`https://wa.me/918867694625?text=${message}`, '_blank');
  };

  return (
    <div className="py-24 bg-neutral-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full border border-gray-200">
        
        {/* Header - Dark & Bold */}
        <div className="bg-neutral-900 text-white p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-orange-600/20 blur-xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-3">Get a Free Quote</h2>
            <p className="text-gray-300">Fill in your details below to contact us on WhatsApp.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2 ml-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-4 text-orange-600" size={20} />
              <input 
                type="text" 
                name="name" 
                placeholder="Ex: Rajesh Kumar" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all font-medium text-neutral-900 placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2 ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-orange-600" size={20} />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Ex: 98765 43210" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all font-medium text-neutral-900 placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Pincode Field */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2 ml-1">Project Pincode</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-orange-600" size={20} />
              <input 
                type="text" 
                name="pincode" 
                placeholder="Ex: 560043" 
                required 
                value={formData.pincode} 
                onChange={handleChange} 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all font-medium text-neutral-900 placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-sm font-bold text-neutral-900 mb-2 ml-1">Service Required</label>
            <div className="relative">
              <CheckSquare className="absolute left-4 top-4 text-orange-600" size={20} />
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all font-medium text-neutral-900 appearance-none cursor-pointer"
              >
                <option value="General Enquiry">Select a Service...</option>
                <option value="Tiling & Flooring">Tiling & Flooring</option>
                <option value="Waterproofing">Waterproofing</option>
                <option value="Swimming Pool">Swimming Pool Construction</option>
                <option value="Painting">Painting & Renovation</option>
                <option value="Fabrication">MS Fabrication</option>
              </select>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input 
              type="checkbox" 
              name="agree" 
              checked={formData.agree} 
              onChange={handleChange} 
              id="terms" 
              className="mt-1 w-5 h-5 text-orange-600 focus:ring-orange-600 border-gray-300 rounded cursor-pointer" 
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-tight cursor-pointer font-medium">
              I agree to be contacted via WhatsApp or Phone.
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-neutral-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg text-lg"
          >
            Submit Enquiry <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}