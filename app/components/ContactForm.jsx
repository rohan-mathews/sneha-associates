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
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full border border-gray-100">
        
        <div className="bg-neutral-900 text-white p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-orange-600/20 blur-xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-3">Get a Free Quote</h2>
            <p className="text-gray-300">Fill in your details below and our experts will contact you directly on WhatsApp.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input type="text" name="name" placeholder="Enter Your Name*" required value={formData.name} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input type="tel" name="phone" placeholder="Enter Your Phone No*" required value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
          </div>

          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input type="text" name="pincode" placeholder="Project Pincode*" required value={formData.pincode} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
          </div>

          <div className="relative">
            <CheckSquare className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select name="service" value={formData.service} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none cursor-pointer">
              <option value="General Enquiry">Select Service Required</option>
              <option value="Tiling & Flooring">Tiling & Flooring</option>
              <option value="Waterproofing">Waterproofing</option>
              <option value="Swimming Pool">Swimming Pool Construction</option>
              <option value="Painting">Painting & Renovation</option>
              <option value="Fabrication">MS Fabrication</option>
            </select>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} id="terms" className="mt-1 w-5 h-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="text-sm text-gray-500 leading-tight cursor-pointer">I agree to be contacted via WhatsApp or Phone.</label>
          </div>

          <button type="submit" className="w-full bg-neutral-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg">
            Submit Enquiry <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}