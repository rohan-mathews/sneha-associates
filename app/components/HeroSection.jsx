import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center bg-neutral-900 text-white text-center px-4">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }} 
      ></div>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-neutral-900/90"></div>
      
      {/* 3. Content Area - INCREASED PADDING HERE TO FIX BUTTON VISIBILITY */}
      <div className="relative z-10 max-w-5xl mx-auto pt-44 pb-48 md:pt-32 md:pb-40">
        
        {/* Badge */}
        <div className="inline-block mb-8 px-5 py-2 border border-orange-500/50 rounded-full bg-orange-500/10 backdrop-blur-md">
           <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
             Established 2005
           </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
          Built on Experience. <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 bg-300% animate-gradient">
            Sealed with Quality.
          </span>
        </h1>
        
        {/* Sub-heading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4 drop-shadow-md">
          Over 19 years of expertise in mosaic flooring, tiling, and waterproofing services. 
          <span className="hidden md:inline"> We ensure durability, luxury, and precision in every single project we undertake.</span>
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full px-4">
          
          {/* LINK TO ENQUIRY FORM */}
          <a 
            href="#contact-form" 
            className="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-2"
          >
            Get a Free Quote <ArrowRight size={20} />
          </a>
          
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center"
          >
            View Gallery
          </a>
        </div>

      </div>
    </div>
  );
}