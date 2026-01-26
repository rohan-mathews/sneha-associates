"use client";
import { ArrowRight } from "lucide-react";

export default function Services() {
  
  // This function handles the "Scroll & Switch" magic
  const handleServiceClick = (category) => {
    // 1. Find the Projects section
    const projectSection = document.getElementById("projects");
    
    if (projectSection) {
      // 2. Smooth Scroll to it
      projectSection.scrollIntoView({ behavior: "smooth" });
      
      // 3. Send a signal to PortfolioGrid to change the tab
      // We use a custom event named 'switchProjectTab'
      const event = new CustomEvent("switchProjectTab", { detail: category });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide end-to-end construction solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* CARD 1: CIVIL CONSTRUCTION (Black) */}
          <div className="bg-neutral-900 p-12 text-white flex flex-col justify-center group hover:bg-black transition-colors">
            <h3 className="text-2xl font-serif font-bold mb-4">Civil Construction</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Complete building services from foundation to finish. We handle residential homes and commercial structures.
            </p>
            <button 
              onClick={() => handleServiceClick("Civil Construction")}
              className="text-orange-500 font-bold text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all uppercase"
            >
              View Service <ArrowRight size={16} />
            </button>
          </div>

          {/* CARD 2: WATERPROOFING (Orange - Center) */}
          <div className="bg-orange-600 p-12 text-white flex flex-col justify-center relative transform md:-translate-y-4 shadow-xl z-10">
            <h3 className="text-2xl font-serif font-bold mb-4">Waterproofing</h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              Advanced waterproofing for terraces and tanks. We ensure your structure is leak-proof and weather-resistant.
            </p>
            <button 
              onClick={() => handleServiceClick("Waterproofing")}
              className="text-white font-bold text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all uppercase border-b border-transparent hover:border-white w-fit"
            >
              View Service <ArrowRight size={16} />
            </button>
          </div>

          {/* CARD 3: SWIMMING POOLS (White with Border) */}
          <div className="bg-white p-12 text-neutral-900 border border-gray-100 flex flex-col justify-center shadow-lg group hover:border-orange-100 transition-colors">
            <h3 className="text-2xl font-serif font-bold mb-4">Swimming Pools</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Specialized contractors for luxury pool construction, repair, filtration systems, and maintenance.
            </p>
            <button 
              onClick={() => handleServiceClick("Swimming Pools")}
              className="text-neutral-900 font-bold text-sm tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all uppercase"
            >
              View Service <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}