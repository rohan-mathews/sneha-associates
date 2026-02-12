"use client";
import { ArrowRight, Phone, CheckCircle } from "lucide-react"; 
import { motion } from "framer-motion";

export default function HeroSection() {
  
  // Smooth scroll helper
  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      
      {/* 1. BACKGROUND LAYER (Parallax & Scale Effect) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')" }} 
        >
          {/* Modern Gradient Overlay: Darker at bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/90"></div>
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center pt-28 md:pt-20">
        
        {/* Left Column: Text with Staggered Animation */}
        <div className="text-center md:text-left md:w-3/5">
          
          {/* Animated Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-2 px-5 border border-white/10 rounded-full bg-white/5 text-orange-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md shadow-lg">
              Est. 2005 • Bengaluru
            </span>
          </motion.div>
          
          {/* ✅ UPDATED HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl"
          >
            Trusted Civil <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
              Engineering Solutions
            </span>
          </motion.h1>
          
          {/* ✅ SUBTEXT */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 max-w-xl mb-10 font-medium leading-relaxed mx-auto md:mx-0"
          >
            Civil Construction <span className="text-orange-500 mx-2">•</span> 
            Swimming Pools <span className="text-orange-500 mx-2">•</span> 
            Waterproofing
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2"
            >
              <Phone size={20} className="fill-white" /> Get Free Quote
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white/5 border border-white/20 hover:bg-white hover:text-neutral-900 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center group"
            >
              View Projects <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        {/* Right Column: Empty Space */}
        <div className="hidden md:block md:w-2/5"></div>
      </div>

      {/* 3. BOTTOM STATS BAR */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-xl py-6 hidden md:block"
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white/90 text-sm font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-orange-500" /> 18+ Years Experience
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-orange-500" /> Skilled Workforce
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-orange-500" /> Quality Materials
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-3">
             <CheckCircle size={18} className="text-orange-500" /> On-Time Delivery
          </div>
        </div>
      </motion.div>
    </section>
  );
}