import { Building2, Droplets, Waves, ArrowRight } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Civil Construction",
      desc: "Complete building services from foundation to finish. We handle residential homes and commercial structures.",
      color: "bg-white",
      textColor: "text-neutral-900",
      borderColor: "border-gray-100"
    },
    {
      icon: <Droplets size={32} />, 
      title: "Waterproofing",
      desc: "Advanced waterproofing for terraces and tanks. We ensure your structure is leak-proof and weather-resistant.",
      color: "bg-orange-600", 
      textColor: "text-white",
      borderColor: "border-orange-500"
    },
    {
      icon: <Waves size={32} />,
      title: "Swimming Pools",
      desc: "Specialized contractors for luxury pool construction, repair, filtration systems, and maintenance.",
      color: "bg-white",
      textColor: "text-neutral-900",
      borderColor: "border-gray-100"
    }
  ];

  return (
    <div className="relative z-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* The Grid: Negative Margin pulls it UP over the Hero Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 -mt-16 md:-mt-28 shadow-2xl rounded-2xl overflow-hidden border border-gray-200/50">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} p-8 md:p-10 flex flex-col items-center text-center group transition-all duration-300 hover:bg-neutral-900 hover:text-white relative border-b md:border-b-0 md:border-r ${service.borderColor} last:border-0`}
            >
              {/* Icon Circle */}
              <div className="mb-6 p-4 rounded-full bg-black/5 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 font-serif tracking-wide">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="opacity-80 leading-relaxed text-sm mb-6 max-w-xs mx-auto">
                {service.desc}
              </p>

              {/* Small 'View' Text that appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 mt-auto">
                View Service <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}