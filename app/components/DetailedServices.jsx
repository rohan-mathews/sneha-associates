import { Check, ArrowRight } from "lucide-react";

export default function DetailedServices() {
  const serviceList = [
    "MS Fabricators (Grills & Gates)",
    "Painting Services (Interior & Exterior)",
    "Commercial Acid Wash Cleaning",
    "Epoxy Grouting & Tile Joint Filling",
    "Compound Wall Construction",
    "Bathroom Repairs & Renovation",
    "Swimming Pool Construction And Renovation",
    "Civil Repairs & Alterations",
    "Granite & Marble Polishing",
    "Terrace Waterproofing"
  ];

  return (
    <div className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Side: Title */}
          <div className="md:w-1/3">
            <h4 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Complete Building Solutions
            </h2>
            <p className="text-gray-400 mb-8">
              Sneha Associates is a one-stop solution for all construction needs. From fabrication to deep cleaning, we handle it all with our in-house team.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors">
              Get a Quote Now <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Side: The Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceList.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}