"use client";
import { useState, useRef } from "react";
import { ChevronsLeftRight } from "lucide-react";

export default function ProjectComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    
    // Calculate percentage
    let position = ((x - rect.left) / rect.width) * 100;
    position = Math.min(Math.max(position, 0), 100); // Clamp between 0 and 100
    
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
           <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Work Speaks</span>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">See the Transformation</h2>
           <p className="text-gray-400">Drag the slider to see the quality of our Renovation & Waterproofing work.</p>
        </div>

        {/* SLIDER CONTAINER */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none group"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* 1. AFTER IMAGE (Background Layer) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/after-1.jpg')" }} // 🔴 Ensure this image exists
          >
             <span className="absolute top-6 right-6 bg-green-600/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">After</span>
          </div>

          {/* 2. BEFORE IMAGE (Foreground Layer - Clipped) */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r-4 border-orange-500"
            style={{ 
              backgroundImage: "url('/images/before-1.jpg')", // 🔴 Ensure this image exists
              width: `${sliderPosition}%` 
            }}
          >
             <div className="absolute inset-0 bg-black/20"></div> {/* Slight darken for effect */}
             <span className="absolute top-6 left-6 bg-neutral-900/80 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">Before</span>
          </div>

          {/* 3. SLIDER HANDLE (The Center Button) */}
          <div 
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
             <div className="w-12 h-12 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] flex items-center justify-center text-white border-4 border-white">
               <ChevronsLeftRight size={20} />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}