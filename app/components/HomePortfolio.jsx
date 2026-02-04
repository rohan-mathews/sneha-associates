"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="text-center mb-20">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mt-4 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Categories Loop */}
        {categories.map((cat, index) => (
          <div key={index} className="mb-24">
            {/* Category Title with Lines */}
            <div className="flex items-center gap-6 mb-10">
               <div className="h-0.5 bg-neutral-300 flex-grow"></div>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800">{cat.title}</h3>
               <div className="h-0.5 bg-neutral-300 flex-grow"></div>
            </div>

            {/* 2 Photos Grid - FORCED BIG ASPECT RATIO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-gray-200 aspect-[4/3]" // 👈 Forced Big Ratio
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <Link href="/gallery" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl font-bold font-serif mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-base mb-6">
                      <MapPin size={18} className="text-orange-500" />
                      {project.location}
                    </div>
                    <div className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full w-fit hover:bg-orange-600 hover:border-orange-600 transition-colors">
                      View Gallery <ArrowRight size={16} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 hover:bg-orange-600 text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            View All 19 Projects <ArrowRight size={22} />
          </Link>
        </div>

      </div>
    </section>
  );
}