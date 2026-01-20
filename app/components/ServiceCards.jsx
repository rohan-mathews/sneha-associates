import { Home, Building2, Hammer } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Residential Flooring",
      desc: "Luxury Italian marble, granite, and vitrified tile installation for villas and apartments.",
      color: "bg-white", // Left Box
      textColor: "text-neutral-900"
    },
    {
      icon: <Building2 size={40} />,
      title: "Commercial Contracts",
      desc: "End-to-end flooring contracts for offices, malls, and tech parks with strict timelines.",
      color: "bg-orange-600", // Center Box (The "Purple" one in your reference)
      textColor: "text-white"
    },
    {
      icon: <Hammer size={40} />,
      title: "Renovation & Polish",
      desc: "Complete floor restoration, polishing, and bathroom remodeling services.",
      color: "bg-white", // Right Box
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