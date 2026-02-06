"use client";
import { ShieldCheck, Clock, Award, PenTool } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={32} />,
      title: "18+ Years Experience",
      desc: "We don't just build; we engineer solutions that last for generations. Proven track record in Bengaluru."
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Delivery",
      desc: "We respect your time. Strict timelines with zero compromise on quality or safety."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Warranty Protection",
      desc: "Peace of mind included. We provide written warranties on our waterproofing and structural work."
    },
    {
      icon: <PenTool size={32} />,
      title: "In-House Team",
      desc: "No random subcontractors. Our skilled workforce handles everything from design to finish."
    }
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              The Difference is <br/> in the <span className="text-orange-500">Details.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Construction is easy. Perfection is hard. At Sneha Associates, we bridge the gap between "getting it done" and "getting it done right." 
            </p>
            <p className="text-gray-400 leading-relaxed">
              We understand that your home is your biggest investment. That is why we use only premium grade cement, steel, and waterproofing compounds.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all group backdrop-blur-sm">
                <div className="w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-900/20">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}