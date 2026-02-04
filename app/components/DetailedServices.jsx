"use client";
import { Check, ArrowRight } from "lucide-react";

export default function DetailedServices() {
  // ✅ Kept your complete list of 10 services
  const serviceList = [
    "MS Fabricators (Grills & Gates)",
    "Painting Services (Interior & Exterior)",
    "Commercial Acid Wash Cleaning",
    "Epoxy Grouting & Tile Joint Filling",
    "Compound Wall Construction",
    "Bathroom Repairs & Renovation",
    "Swimming Pool Construction",
    "Civil Repairs & Alterations",
    "Granite & Marble Polishing",
    "Terrace Waterproofing"
  ];

  return (
    <section className="bg-neutral-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Side: Sticky Title */}
          <div className="md:w-1/3 md:sticky md:top-24">
            <h4 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Complete <br/> Building Solutions.
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Sneha Associates is your one-stop solution. From heavy fabrication to delicate deep cleaning, we handle it all with our in-house team.
            </p>
            <a href="#contact-form" className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 rounded-full font-bold text-white hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20">
              Get a Quote Now <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Side: The Professional Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceList.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all border border-white/5 hover:border-orange-500/30 group"
              >
                <div className="h-10 w-10 rounded-full bg-orange-600/20 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors">
                  <Check size={18} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-lg text-gray-200 group-hover:text-white">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}