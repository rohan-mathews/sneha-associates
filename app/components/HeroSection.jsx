"use client";
import { ArrowRight, Phone, CheckCircle, ShieldCheck, HardHat, Waves, Droplets } from "lucide-react"; 
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
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/95"></div>
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20 pb-24 md:pb-0">
        
        <div className="max-w-4xl text-center md:text-left">
          
          {/* 👇 UX FIX 1: Animated Glass Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 border border-white/20 rounded-full bg-white/5 text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
              <ShieldCheck size={16} />
              Bengaluru's Civil & Waterproofing Experts
            </span>
          </motion.div>
          
          {/* MAIN HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-2xl"
          >
            Trusted Civil <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
              Engineering Solutions
            </span>
          </motion.h1>

          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-12"
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

          {/* 👇 UX FIX 2: Visual Service Cards (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
          >
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-orange-500/20 p-3 rounded-xl text-orange-400">
                <HardHat size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm">Civil Engineering</h4>
                <p className="text-xs text-neutral-400">Turnkey Construction</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                <Waves size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm">Swimming Pools</h4>
                <p className="text-xs text-neutral-400">Luxury & Commercial</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-teal-500/20 p-3 rounded-xl text-teal-400">
                <Droplets size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm">Waterproofing</h4>
                <p className="text-xs text-neutral-400">10-Year Guarantee</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. BOTTOM STATS BAR */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-xl py-6 hidden lg:block"
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-white/90 text-sm font-medium tracking-wide">
          {/* 👇 Changed to 15+ to match Founder Story */}
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-orange-500" /> 15+ Years Experience
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