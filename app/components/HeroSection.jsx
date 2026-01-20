import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-neutral-900 text-white text-center px-4">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }} 
      ></div>

      {/* 2. Professional Gradient Overlay (Better Text Readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-neutral-900/90"></div>
      
      {/* 3. Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto pt-32 pb-20 md:pt-0 md:pb-0">
        
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 border border-orange-500/50 rounded-full bg-orange-500/10 backdrop-blur-md">
           <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
             Established 2005
           </span>
        </div>
        
        {/* Main Heading (Responsive Text Sizing) */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight drop-shadow-lg">
          Built on Experience. <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-300% animate-gradient">
            Sealed with Quality.
          </span>
        </h1>
        
        {/* Sub-heading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4">
          Over 19 years of expertise in mosaic flooring, tiling, and waterproofing services. 
          <span className="hidden md:inline"> We ensure durability, luxury, and precision in every single project we undertake.</span>
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2"
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
          
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm flex items-center justify-center"
          >
            View Gallery
          </a>
        </div>

      </div>
    </div>
  );
}