import { Building2, Droplets, Waves } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "Civil Construction",
      desc: "Complete building services from foundation to finish. We handle residential homes, commercial structures, and civil repairs.",
      color: "bg-white",
      textColor: "text-neutral-900"
    },
    {
      icon: <Droplets size={40} />, 
      title: "Waterproofing Experts",
      desc: "Advanced waterproofing for terraces, basements, and tanks. We ensure your structure is leak-proof and weather-resistant.",
      color: "bg-orange-600", 
      textColor: "text-white"
    },
    {
      icon: <Waves size={40} />,
      title: "Swimming Pools",
      desc: "Specialized contractors for swimming pool construction, repair, and filtration systems. Luxury pools built to last.",
      color: "bg-white",
      textColor: "text-neutral-900"
    }
  ];

  return (
    <div className="relative z-20 -mt-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} p-10 flex flex-col items-center text-center group hover:bg-neutral-900 hover:text-white transition-colors duration-500`}
            >
              <div className="mb-6 p-4 rounded-full bg-white/10 group-hover:bg-orange-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
              <p className="opacity-80 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}