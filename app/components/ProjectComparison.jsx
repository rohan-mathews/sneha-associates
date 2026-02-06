"use client";
import { useState, useRef } from "react";
import { ChevronsLeftRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    let position = ((x - rect.left) / rect.width) * 100;
    position = Math.min(Math.max(position, 0), 100); 
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/10 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        {/* ✅ GLASS CARD CONTAINER */}
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
          
          <div className="text-center mb-10">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4"
             >
               <Sparkles size={12} /> Real Results
             </motion.div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
               See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Transformation</span>
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               Drag the slider to witness the difference. We turn damaged, leaking structures into pristine, durable spaces.
             </p>
          </div>

          {/* SLIDER COMPONENT */}
          <div 
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl cursor-ew-resize select-none group"
            onMouseMove={handleDrag}
            onTouchMove={handleDrag}
          >
            {/* 1. AFTER IMAGE (Background) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/waterproofing-after.jpg')" }} 
            >
               <div className="absolute top-6 right-6 bg-green-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg border border-white/20">
                 After
               </div>
            </div>

            {/* 2. BEFORE IMAGE (Foreground) */}
            <div 
              className="absolute inset-0 bg-cover bg-center border-r-4 border-orange-500"
              style={{ 
                backgroundImage: "url('/images/waterproofing-before.jpg')", 
                width: `${sliderPosition}%` 
              }}
            >
               <div className="absolute inset-0 bg-black/20"></div> {/* Slight dark overlay for drama */}
               <div className="absolute top-6 left-6 bg-neutral-900/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg border border-white/20">
                 Before
               </div>
            </div>

            {/* 3. INTERACTIVE SLIDER HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
               {/* The Glowing Circle Button */}
               <div className="w-14 h-14 bg-orange-600 rounded-full shadow-[0_0_30px_rgba(234,88,12,0.6)] flex items-center justify-center text-white border-[3px] border-white z-20 transform group-hover:scale-110 transition-transform duration-200">
                 <ChevronsLeftRight size={24} />
               </div>
               {/* The Vertical Line Glow */}
               <div className="absolute top-0 bottom-0 w-0.5 bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)] z-10"></div>
            </div>

          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 font-medium animate-pulse">
              ← Drag slider to compare →
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}