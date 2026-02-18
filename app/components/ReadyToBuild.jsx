"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ReadyToBuild() {
  const benefits = [
    "100% Vasthu Compliant",
    "Transparent BOQ Pricing",
    "Premium Materials Used",
    "Daily WhatsApp Updates",
    "No Hidden Costs",
    "On-Time Delivery Guarantee",
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* BACKGROUND (The "Deep Blue" Look) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] z-0" />
      
      {/* SUBTLE GLOW EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide"
        >
          ✨ START BUILDING TODAY
        </motion.div>

        {/* HEADLINE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to launch your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            dream project?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-12"
        >
          Join hundreds of happy families in Bengaluru. Create an elegant, high-quality home that highlights your lifestyle in months, not years.
        </motion.p>

        {/* CHECKMARKS GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 max-w-4xl mx-auto mb-12 text-left md:text-center"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center md:justify-center gap-3 text-slate-200">
              <CheckCircle2 className="text-green-400 shrink-0" size={20} />
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <button className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
            🚀 Start My Project
          </button>
          
          <button className="w-full md:w-auto px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            View Pricing <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}