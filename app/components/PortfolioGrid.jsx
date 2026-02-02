"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ✅ TEASER LIST: 6 Photos (Big ones have size: "large")
const teaserProjects = [
  // --- CIVIL (Big Complex + Facade) ---
  {
    id: 1,
    category: "Civil Construction",
    title: "Commercial Complex",
    location: "Indiranagar",
    image: "/images/civil-1.jpg",
    size: "large" // 👈 This will now make it BIG
  },
  {
    id: 4,
    category: "Civil Construction",
    title: "Apartment Facade",
    location: "Hebbal",
    image: "/images/civil-4.jpg",
    size: "small"
  },

  // --- POOLS (Big Infinity Pool + Resort) ---
  {
    id: 7,
    category: "Swimming Pools",
    title: "Infinity Edge Pool",
    location: "Kanakapura Road",
    image: "/images/pool-1.jpg",
    size: "large" // 👈 BIG
  },
  {
    id: 10,
    category: "Swimming Pools",
    title: "Resort Swimming Pool",
    location: "Devanahalli",
    image: "/images/pool-4.jpg",
    size: "small"
  },

  // --- WATERPROOFING (Big Terrace + Tank) ---
  {
    id: 14,
    category: "Waterproofing",
    title: "Terrace Leakage Solution",
    location: "Jayanagar",
    image: "/images/water-1.jpg",
    size: "large" // 👈 BIG
  },
  {
    id: 16,
    category: "Waterproofing",
    title: "Water Tank Sealing",
    location: "Banashankari",
    image: "/images/water-3.jpg",
    size: "small"
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

        {/* ✅ THE GRID (Now supports BIG Layouts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teaserProjects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={project.id}
              // 👇 THIS LINE RESTORES THE BIG SIZE LOGIC 👇
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-200 ${
                project.size === "large" ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <Link href="/gallery" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold font-serif">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                  <MapPin size={14} className="text-orange-500" />
                  {project.location}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm">
                  View Full Gallery <ArrowRight size={16} />
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all delay-100 transform translate-y-4 group-hover:translate-y-0">
                  <ZoomIn size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
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