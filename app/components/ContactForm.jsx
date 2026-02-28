"use client";
import { useState } from "react";
import { Send, CheckCircle2, MapPin, Phone, Clock, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// 👇 1. IMPORT FIREBASE TOOLS
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

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
  const [error, setError] = useState("");

  // 👇 2. UPDATED HANDLE SUBMIT WITH FIREBASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Add a new document with a generated id to the "leads" collection
      await addDoc(collection(db, "leads"), {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        service: formState.service,
        message: formState.message,
        status: "New",
        createdAt: serverTimestamp(),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormState({ name: "", phone: "", email: "", service: "", message: "" });
      }, 5000);

    } catch (err) {
      console.error("Error adding lead: ", err);
      setError("Failed to send request. Please try again or call us.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-form" className="py-24 bg-[#0a0a0a] relative z-10 overflow-hidden">
      
      {/* 1. TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* 2. AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: THE PITCH --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Sparkles size={12} /> Start Your Vision
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1]">
                Let's Build <br/> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Iconic.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                Premium craftsmanship meets engineering precision. Get a detailed BOQ and consultation within 48 hours.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: "Site Inspection", desc: "Free on-site analysis in Bengaluru" },
                { title: "Transparent Pricing", desc: "Detailed BOQ with no hidden costs" },
                { title: "Material Quality", desc: "Premium grade specifications only" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-orange-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-orange-500 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative p-8 rounded-3xl bg-[#111] border border-white/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-3xl"></div>
                  <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <MapPin className="text-orange-500" size={18} /> Head Office
                  </h4>
                  <div className="space-y-5">
                    <p className="text-gray-300 leading-relaxed text-sm font-light border-l-2 border-orange-500/50 pl-5">
                      No.75, 7/1, Ground Floor,<br/>
                      Sudhama Nagar, Bengaluru,<br/>
                      Karnataka 560027
                    </p>
                    <div className="h-px w-full bg-white/5"></div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Clock size={16} className="text-orange-500" />
                        <span className="font-medium">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: THE GLASS FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="mb-8 border-b border-white/5 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get a Free Quote</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Response time: 24 Hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleChange}
                      placeholder="Ex: Rajesh Kumar"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      required
                    />
                  </div>
                  <div className="group space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formState.phone} 
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="group space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Service Required</label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formState.service} 
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-neutral-900 text-gray-500">Select a Service...</option>
                        <option value="Construction" className="bg-neutral-900">Civil Construction</option>
                        <option value="Renovation" className="bg-neutral-900">Home Renovation</option>
                        <option value="Waterproofing" className="bg-neutral-900">Waterproofing Solutions</option>
                        <option value="Pools" className="bg-neutral-900">Swimming Pools</option>
                        <option value="Other" className="bg-neutral-900">General Enquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-focus-within:text-orange-500 transition-colors">Project Details</label>
                  <textarea 
                    name="message"
                    value={formState.message} 
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your requirements (Location, Plot size, etc.)"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-[10px] font-bold uppercase">{error}</p>}

                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.2)] transform transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden ${
                    isSuccess 
                      ? "bg-green-600 text-white cursor-default border border-green-500"
                      : "bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white border border-orange-500/50"
                  }`}
                >
                  {!isSuccess && !isSubmitting && (
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine" />
                  )}

                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : isSuccess ? (
                    <>Request Sent <CheckCircle2 size={18} /></>
                  ) : (
                    <>
                      Get Free Quote 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-gray-600 mt-4 leading-tight">
                  Protected by standard privacy protocols. Your data is never shared.
                </p>

              </form>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}