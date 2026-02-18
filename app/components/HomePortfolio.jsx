"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
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
    // 1. UPDATED: Removed 'bg-neutral-50'. Now it is transparent so Stars show through!
    <section id="projects" className="relative py-32 z-10">
      
      {/* Optional: A very subtle gradient to make text readable over stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-black/80 dark:via-transparent dark:to-black/80 pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-bold tracking-widest uppercase text-xs mb-4"
          >
            Our Masterpieces
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 dark:text-white mb-6"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg"
          >
            From luxury villas to commercial landmarks, explore our finest construction work across Bengaluru.
          </motion.p>
        </div>

        {/* Categories Loop */}
        {categories.map((cat, index) => (
          <div key={index} className="mb-32 last:mb-0">
            
            {/* Category Title with Glass Lines */}
            <div className="flex items-center gap-6 mb-12">
               <div className="h-[1px] bg-gradient-to-r from-transparent to-neutral-300 dark:to-neutral-700 flex-grow"></div>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 dark:text-neutral-200">{cat.title}</h3>
               <div className="h-[1px] bg-gradient-to-l from-transparent to-neutral-300 dark:to-neutral-700 flex-grow"></div>
            </div>

            {/* 2 Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {cat.projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 border border-white/20 dark:border-white/10 aspect-[4/3] cursor-pointer"
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay (Only appears on Hover) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white text-3xl font-bold font-serif mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-base mb-6">
                      <MapPin size={18} className="text-orange-500" />
                      {project.location}
                    </div>
                    
                    <Link href="/gallery" className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase border border-white/30 px-6 py-3 rounded-full w-fit hover:bg-orange-600 hover:border-orange-600 transition-colors backdrop-blur-md">
                      View Details <ExternalLink size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* View All Button */}
        <div className="text-center mt-20">
          <Link 
            href="/gallery"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">View All 19 Projects</span>
            <ArrowRight size={22} className="relative z-10 transition-transform group-hover:translate-x-1" />
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}