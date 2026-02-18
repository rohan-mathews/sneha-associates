"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

export default function ReadyToBuild() {
  const benefits = [
    "100% Vasthu Compliant",
    "Transparent BOQ Pricing",
    "Premium Materials Used",
    "Daily WhatsApp Updates",
    "No Hidden Costs",
    "On-Time Delivery Guarantee",
  ];

  // 👇 REPLACE THIS WITH YOUR REAL WHATSAPP NUMBER
  const phoneNumber = "918867694625"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20Sneha%20Associates,%20I%20am%20interested%20in%20starting%20a%20construction%20project!`;

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">
      
      {/* --- 1. DYNAMIC BACKGROUND (Deep & Glowing) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0f172a] to-[#000000] z-0" />
      
      {/* Moving Ambient Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none" />


      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* --- 2. GLASS BADGE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">
            Accepting New Projects
          </span>
        </motion.div>

        {/* --- 3. HERO TEXT --- */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Ready to build your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.3)]">
            dream masterpiece?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Join hundreds of happy families in Bengaluru. We combine <span className="text-white font-semibold">expert engineering</span> with <span className="text-white font-semibold">premium design</span> to build homes that last generations.
        </motion.p>

        {/* --- 4. CHECKMARKS GRID --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto mb-16 text-left"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
              <div className="p-2 bg-green-500/10 rounded-full shrink-0">
                <CheckCircle2 className="text-green-400" size={18} />
              </div>
              <span className="text-slate-200 text-sm font-medium tracking-wide">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* --- 5. PREMIUM BUTTONS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          {/* A. WHATSAPP BUTTON (Glowing & Shiny) */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-3">
              <MessageCircle className="text-blue-600" size={20} />
              Start My Project
            </span>
          </a>
          
          {/* B. PRICING BUTTON (Glass Effect) */}
          <a 
            href="#enquiry"
            className="group w-full md:w-auto px-10 py-5 border border-slate-700 bg-slate-800/30 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-slate-800/80 hover:border-slate-500 transition-all flex items-center justify-center gap-3"
          >
            Get a Quote 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}