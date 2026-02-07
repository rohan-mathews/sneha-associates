"use client";
import { useState } from "react";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: "", phone: "", email: "", service: "", message: "" });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative">

        {/* Ambient Background Glows */}
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: The Pitch & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                Start Your Project
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Let's Build <br/> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Iconic.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Don't settle for average. Get a free consultation and a detailed BOQ (Bill of Quantities) within 48 hours.
              </p>
            </div>

            {/* Premium Trust Badges */}
            <div className="space-y-5">
              {[
                "Free On-Site Inspection (Bengaluru)",
                "Transparent Pricing - No Hidden Costs",
                "Detailed Material Specification Sheet"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform">
                    <CheckCircle size={18} />
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* Office Info Card */}
            <div className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors"></div>
               
               <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                 <MapPin className="text-orange-500" size={20} /> Head Office
               </h4>
               <div className="space-y-4 text-sm text-gray-400">
                  <p className="leading-relaxed pl-7 border-l-2 border-white/10">
                    #45, 2nd Main, Industrial Town, <br/> Rajajinagar, Bengaluru - 560010
                  </p>
                  <div className="flex items-center gap-3 pl-7">
                     <Clock className="text-gray-500" size={16} />
                     <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm">Fill out the form below and we will contact you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all hover:bg-black/40"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formState.phone} 
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all hover:bg-black/40"
                      required
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">Service Required</label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formState.service} 
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all appearance-none cursor-pointer hover:bg-black/40"
                        required
                      >
                        <option value="" className="bg-neutral-900 text-gray-500">Select a Service...</option>
                        <option value="Construction" className="bg-neutral-900">Civil Construction (New Build)</option>
                        <option value="Renovation" className="bg-neutral-900">Home Renovation</option>
                        <option value="Waterproofing" className="bg-neutral-900">Waterproofing</option>
                        <option value="Pools" className="bg-neutral-900">Swimming Pool Construction</option>
                        <option value="Other" className="bg-neutral-900">Other / General Enquiry</option>
                      </select>
                      {/* Custom Arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">Project Details</label>
                  <textarea 
                    name="message"
                    value={formState.message} 
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your project (Area size, location, specific issues...)"
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none hover:bg-black/40"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-bold py-4 rounded-xl shadow-lg transform transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden ${
                    isSuccess 
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white hover:-translate-y-1 hover:shadow-orange-600/30"
                  }`}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : isSuccess ? (
                    <>Message Sent <CheckCircle size={18} /></>
                  ) : (
                    <>
                      Get Free Quote 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-gray-500 mt-4 leading-tight">
                  By submitting, you consent to allow Sneha Associates to store and process the personal information submitted above to provide you the content requested.
                </p>

              </form>
            </div>
            
            {/* Decorative Element Behind Form */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}