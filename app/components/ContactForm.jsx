"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { User, Phone, MapPin, CheckCircle, Mail, Send, Loader2, CheckSquare } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    pincode: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. WhatsApp Message (Needs %0A for line breaks)
    const whatsappMessage = `*New Enquiry from Website* 🏗️%0A%0A*Name:* ${formData.user_name}%0A*Phone:* ${formData.user_phone}%0A*Email:* ${formData.user_email}%0A*Pincode:* ${formData.pincode}%0A*Service:* ${formData.service}`;
    const whatsappUrl = `https://wa.me/918867694625?text=${whatsappMessage}`;

    // 2. Email Message (Needs clean text, no symbols)
    const emailMessage = `
Name: ${formData.user_name}
Phone: ${formData.user_phone}
Email: ${formData.user_email}
Pincode: ${formData.pincode}
Service: ${formData.service}
    `;

    // 3. Send Email via EmailJS
    emailjs
      .send(
        "service_lpxd6cs",     // ✅ YOUR SERVICE ID
        "template_q1uutkm",    // ✅ YOUR TEMPLATE ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: emailMessage, // 👈 Sending the CLEAN message to email
        },
        "oKCFhN_lZs4cLSeKg"    // ✅ YOUR PUBLIC KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          
          // 4. Open WhatsApp after a small delay
          setTimeout(() => {
              window.open(whatsappUrl, "_blank");
          }, 2000); 
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again or call us directly.");
          console.error("FAILED...", error);
        }
      );
  };

  // ✨ SUCCESS STATE VIEW (Dark Theme)
  if (success) {
    return (
      <div className="bg-[#2A221B] p-8 rounded-3xl shadow-2xl text-center h-full flex flex-col justify-center items-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">Enquiry Sent!</h3>
        <p className="text-gray-300 mb-8 max-w-xs mx-auto">
          Thank you for choosing Sneha Associates. Please check your email for confirmation. Redirecting to WhatsApp...
        </p>
        <Loader2 className="animate-spin text-orange-500" size={24} />
      </div>
    );
  }

  // 📝 NORMAL FORM VIEW (Dark Theme + Visible Text)
  return (
    <div className="bg-[#2A221B] p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-700"></div>
      
      <h3 className="text-2xl font-serif font-bold text-white mb-2">Get a Free Quote</h3>
      <p className="text-gray-300 text-sm mb-8">Fill in your details below and our experts will contact you directly.</p>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-orange-300 uppercase mb-2 ml-1">Your Name</label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <input 
              required
              type="text" 
              name="user_name"
              placeholder="Ex: Rajesh Kumar"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:bg-white/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-orange-300 uppercase mb-2 ml-1">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <input 
              required
              type="tel" 
              name="user_phone"
              placeholder="Ex: 98765 43210"
              value={formData.user_phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:bg-white/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-orange-300 uppercase mb-2 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <input 
              required
              type="email" 
              name="user_email"
              placeholder="Ex: rajesh@gmail.com"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:bg-white/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-xs font-bold text-orange-300 uppercase mb-2 ml-1">Project Pincode</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <input 
              required
              type="text" 
              name="pincode"
              placeholder="Ex: 560043"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:bg-white/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-bold text-orange-300 uppercase mb-2 ml-1">Service Required</label>
          <div className="relative">
            <CheckSquare className="absolute left-4 top-3.5 text-gray-500" size={18} />
            <select 
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:bg-white/20 outline-none transition-all appearance-none"
            >
              <option value="" disabled className="text-gray-500">Select a Service...</option>
              <option value="Civil Construction" className="text-neutral-900">Civil Construction</option>
              <option value="Waterproofing" className="text-neutral-900">Waterproofing</option>
              <option value="Swimming Pools" className="text-neutral-900">Swimming Pools</option>
              <option value="Other" className="text-neutral-900">Other / General Enquiry</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <> <Loader2 className="animate-spin" /> Sending... </>
          ) : (
            <> Submit Enquiry <Send size={18} /> </>
          )}
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          By submitting, you agree to be contacted via WhatsApp or Email.
        </p>

      </form>
    </div>
  );
}