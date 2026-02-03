"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ✅ TEASER DATA: 2 Photos per Category
const categories = [
  {
    title: "Civil Construction",
    projects: [
      { id: 1, title: "Commercial Complex", location: "Indiranagar", image: "/images/civil-1.jpg" },
      { id: 4, title: "Apartment Facade", location: "Hebbal", image: "/images/civil-4.jpg" }
    ]
  },
  {
    title: "Swimming Pools",
    projects: [
      { id: 7, title: "Infinity Edge Pool", location: "Kanakapura Road", image: "/images/pool-1.jpg" },
      { id: 10, title: "Resort Swimming Pool", location: "Devanahalli", image: "/images/pool-4.jpg" }
    ]
  },
  {
    title: "Waterproofing",
    projects: [
      { id: 14, title: "Terrace Leakage Solution", location: "Jayanagar", image: "/images/water-1.jpg" },
      { id: 16, title: "Water Tank Sealing", location: "Banashankari", image: "/images/water-3.jpg" }
    ]
  }
];

export default function HomePortfolio() {
  return (
    <section id="projects" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Categories Loop */}
        {categories.map((cat, index) => (
          <div key={index} className="mb-20">
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px bg-neutral-300 flex-grow"></div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-800">{cat.title}</h3>
               <div className="h-px bg-neutral-300 flex-grow"></div>
            </div>

            {/* 2 Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-200 aspect-video md:aspect-[4/3]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <Link href="/gallery" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold font-serif">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                      <MapPin size={16} className="text-orange-500" />
                      {project.location}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm">
                      View in Gallery <ArrowRight size={16} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            View All 19 Projects <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}