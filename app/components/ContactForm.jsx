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

    // 1. Prepare WhatsApp Logic
    const message = `*New Enquiry from Website* 🏗️%0A%0A*Name:* ${formData.user_name}%0A*Phone:* ${formData.user_phone}%0A*Email:* ${formData.user_email}%0A*Pincode:* ${formData.pincode}%0A*Service:* ${formData.service}`;
    const whatsappUrl = `https://wa.me/918867694625?text=${message}`;

    // 2. Send Email via EmailJS (Updated with your Real Keys)
    emailjs
      .send(
        "service_lpxd6cs",     // ✅ YOUR SERVICE ID
        "template_q1uutkm",    // ✅ YOUR TEMPLATE ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email, // Matches {{user_email}} in your template
          message: message,
        },
        "oKCFhN_lZs4cLSeKg"    // ✅ YOUR PUBLIC KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          
          // 3. Open WhatsApp after successful email trigger
          window.open(whatsappUrl, "_blank");
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again or call us directly.");
          console.error("FAILED...", error);
        }
      );
  };

  // ✨ SUCCESS STATE VIEW
  if (success) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 text-center h-full flex flex-col justify-center items-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">Enquiry Sent!</h3>
        <p className="text-gray-500 mb-6 max-w-xs mx-auto">
          Thank you for choosing Sneha Associates. Check your email for confirmation. We are redirecting you to WhatsApp...
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-orange-600 font-bold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  // 📝 NORMAL FORM VIEW
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6">Get a Free Quote</h3>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Your Name</label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              required
              type="text" 
              name="user_name"
              placeholder="Ex: Rajesh Kumar"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              required
              type="tel" 
              name="user_phone"
              placeholder="Ex: 98765 43210"
              value={formData.user_phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              required
              type="email" 
              name="user_email"
              placeholder="Ex: rajesh@gmail.com"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Project Pincode</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <input 
              required
              type="text" 
              name="pincode"
              placeholder="Ex: 560043"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Service Required</label>
          <div className="relative">
            <CheckSquare className="absolute left-4 top-3.5 text-gray-400" size={18} />
            <select 
              required
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all appearance-none bg-white text-gray-700"
            >
              <option value="" disabled>Select a Service...</option>
              <option value="Civil Construction">Civil Construction</option>
              <option value="Waterproofing">Waterproofing</option>
              <option value="Swimming Pools">Swimming Pools</option>
              <option value="Other">Other / General Enquiry</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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