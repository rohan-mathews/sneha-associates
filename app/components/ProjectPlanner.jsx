"use client";
import { useState } from "react";
import { Calculator, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectPlanner() {
  const [service, setService] = useState("Civil Construction");
  const [area, setArea] = useState("");
  
  const handleGetQuote = () => {
    if (!area) return alert("Please enter the approximate area size.");
    
    // Create the WhatsApp Message
    const message = `Hi Sneha Associates, I am interested in *${service}*. The approximate area is *${area} sq ft*. Please provide an estimate.`;
    const url = `https://wa.me/918867694625?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background Pattern (Subtle Grid) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      
      {/* Orange Glow Effect */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Persuasive Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
              <Calculator size={18} /> Project Estimator
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Plan Your Budget <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Before You Start.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Don't guess the costs. Select your service and area size to get a quick, professional estimate directly on WhatsApp. We believe in transparent pricing.
            </p>
            
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <CheckCircle size={24} className="text-orange-500 shrink-0" /> 
                <span className="font-medium">Free Site Inspection & Consultation</span>
              </li>
              <li className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <CheckCircle size={24} className="text-orange-500 shrink-0" /> 
                <span className="font-medium">Transparent Material & Labor Pricing</span>
              </li>
              <li className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <CheckCircle size={24} className="text-orange-500 shrink-0" /> 
                <span className="font-medium">No Hidden Charges or Last-Minute Costs</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Side: The Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-neutral-900/80 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl relative">
              
              {/* Decorative Corner Icon */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-700 p-4 rounded-2xl shadow-lg rotate-6 hidden md:block">
                <Calculator size={32} className="text-white" />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Quote</h3>
                
                {/* 1. Select Service */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">I am looking for...</label>
                  <div className="relative">
                    <select 
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 text-white p-5 rounded-xl focus:outline-none focus:border-orange-500 transition-colors appearance-none text-lg cursor-pointer"
                    >
                      <option value="Civil Construction">Civil Construction (Home/Commercial)</option>
                      <option value="Waterproofing">Waterproofing (Terrace/Tank)</option>
                      <option value="Swimming Pool">Swimming Pool Construction</option>
                      <option value="Renovation">Home Renovation / Tiling</option>
                      <option value="Interior Work">Interior / Painting</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>

                {/* 2. Enter Area */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Approx Area (Sq. Ft)</label>
                  <input 
                    type="number" 
                    placeholder="Ex: 1200" 
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 text-white p-5 rounded-xl focus:outline-none focus:border-orange-500 transition-colors text-lg placeholder:text-gray-600"
                  />
                </div>

                {/* 3. Action Button */}
                <button 
                  onClick={handleGetQuote}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 group shadow-lg hover:shadow-orange-500/20 text-lg mt-4"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Get Estimate on WhatsApp
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-2">
                  *Clicking this will open WhatsApp with your details pre-filled.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}