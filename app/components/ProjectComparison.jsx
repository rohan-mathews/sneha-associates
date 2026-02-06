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
    // Support both Mouse and Touch events
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    
    // Calculate percentage position
    let position = ((x - rect.left) / rect.width) * 100;
    
    // Keep slider within 0% and 100% bounds
    position = Math.min(Math.max(position, 0), 100); 
    
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
           <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Work Speaks</span>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">See the Transformation</h2>
           <p className="text-gray-400">Drag the slider to see the quality of our Waterproofing work.</p>
        </div>

        {/* SLIDER CONTAINER */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none group"
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* 1. AFTER IMAGE (Background Layer - The "Finished" Look) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/waterproofing-after.jpg')" }} // ✅ UPDATED NAME
          >
             <span className="absolute top-6 right-6 bg-green-600/90 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">After</span>
          </div>

          {/* 2. BEFORE IMAGE (Foreground Layer - The "Start" Phase) */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r-4 border-orange-500"
            style={{ 
              backgroundImage: "url('/images/waterproofing-before.jpg')", // ✅ UPDATED NAME
              width: `${sliderPosition}%` 
            }}
          >
             {/* Slight dark overlay to make text pop */}
             <div className="absolute inset-0 bg-black/10"></div>
             
             <span className="absolute top-6 left-6 bg-neutral-900/80 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">Before</span>
          </div>

          {/* 3. SLIDER HANDLE (The Center Button) */}
          <div 
            className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
             <div className="w-12 h-12 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] flex items-center justify-center text-white border-4 border-white transform hover:scale-110 transition-transform">
               <ChevronsLeftRight size={20} />
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}