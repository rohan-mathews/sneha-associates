import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-[85vh] flex items-center justify-center bg-neutral-900 text-white text-center px-4">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }} 
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-[-50px]">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
          Established 2005
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Mastery in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Stone & Tiling</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Premium flooring solutions for Bengaluru's finest homes and commercial spaces. 
          Specializing in Italian marble, granite, and precision contract work.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2">
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <a href="#projects" className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 rounded-full font-medium transition-all">
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
}