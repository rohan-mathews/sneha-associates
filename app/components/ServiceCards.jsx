"use client";
import { motion } from "framer-motion";
import { Ruler, Droplets, Waves, ArrowRight } from "lucide-react";

export default function ServiceCards() {
  
  const handleServiceClick = (category) => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
      const event = new CustomEvent("switchProjectTab", { detail: category });
      window.dispatchEvent(event);
    }
  };

  const services = [
    // ✅ 1. MOVED SWIMMING POOLS TO FIRST POSITION
    {
      category: "Swimming Pools",
      icon: <Waves size={32} />,
      title: "Swimming Pools",
      description: "Specialized contractors for luxury pool construction, repair, filtration systems, and maintenance.",
    },
    // 2. Civil Construction is now second
    {
      category: "Civil Construction",
      icon: <Ruler size={32} />,
      title: "Civil Construction",
      description: "Complete building services from foundation to finish. We handle residential homes and commercial structures.",
    },
    // 3. Waterproofing remains last
    {
      category: "Waterproofing",
      icon: <Droplets size={32} />,
      title: "Waterproofing",
      description: "Advanced waterproofing for terraces and tanks. We ensure your structure is leak-proof and weather-resistant.",
    },
  ];

  return (
    <section className="px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-10 rounded-xl shadow-2xl border-b-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              <button 
                onClick={() => handleServiceClick(service.category)}
                className="text-orange-600 font-bold text-sm tracking-wider flex items-center gap-2 group hover:gap-4 transition-all uppercase w-fit"
              >
                View Projects <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}