"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ZoomIn, X } from "lucide-react";
import Image from "next/image";

// ✅ YOUR 16 PROJECTS (Now using .jpg)
const projects = [
  // --- CIVIL CONSTRUCTION (6 Photos) ---
  {
    id: 1,
    category: "Civil Construction",
    title: "Commercial Complex",
    location: "Indiranagar",
    image: "/images/civil-1.jpg", // 👈 Fixed: .jpg
    size: "large"
  },
  {
    id: 2,
    category: "Civil Construction",
    title: "Luxury Villa Foundation",
    location: "Whitefield",
    image: "/images/civil-2.jpg", 
    size: "small"
  },
  {
    id: 3,
    category: "Civil Construction",
    title: "Structural Framework",
    location: "Koramangala",
    image: "/images/civil-3.jpg",
    size: "small"
  },
  {
    id: 4,
    category: "Civil Construction",
    title: "Apartment Facade",
    location: "Hebbal",
    image: "/images/civil-4.jpg",
    size: "large"
  },
  {
    id: 5,
    category: "Civil Construction",
    title: "Site Overview",
    location: "Sarjapur",
    image: "/images/civil-5.jpg",
    size: "small"
  },
  {
    id: 6,
    category: "Civil Construction",
    title: "Flooring & Finishing",
    location: "HSR Layout",
    image: "/images/civil-6.jpg", 
    size: "small"
  },

  // --- SWIMMING POOLS (7 Photos) ---
  {
    id: 7,
    category: "Swimming Pools",
    title: "Infinity Edge Pool",
    location: "Kanakapura Road",
    image: "/images/pool-1.jpg", // 👈 Fixed: .jpg
    size: "large"
  },
  {
    id: 8,
    category: "Swimming Pools",
    title: "Mosaic Tiling Detail",
    location: "Bannerghatta",
    image: "/images/pool-2.jpg",
    size: "small"
  },
  {
    id: 9,
    category: "Swimming Pools",
    title: "Private Villa Pool",
    location: "Yelahanka",
    image: "/images/pool-3.jpg",
    size: "small"
  },
  {
    id: 10,
    category: "Swimming Pools",
    title: "Resort Swimming Pool",
    location: "Devanahalli",
    image: "/images/pool-4.jpg",
    size: "large"
  },
  {
    id: 11,
    category: "Swimming Pools",
    title: "Pool Filtration System",
    location: "Electronic City",
    image: "/images/pool-5.jpg",
    size: "small"
  },
  {
    id: 12,
    category: "Swimming Pools",
    title: "Night View Lighting",
    location: "JP Nagar",
    image: "/images/pool-6.jpg",
    size: "small"
  },
  {
    id: 13,
    category: "Swimming Pools",
    title: "Compact Indoor Pool",
    location: "Sadashivanagar",
    image: "/images/pool-7.jpg",
    size: "large"
  },

  // --- WATERPROOFING (3 Photos) ---
  {
    id: 14,
    category: "Waterproofing",
    title: "Terrace Leakage Solution",
    location: "Jayanagar",
    image: "/images/water-1.jpg", // 👈 Fixed: .jpg
    size: "large"
  },
  {
    id: 15,
    category: "Waterproofing",
    title: "Chemical Treatment",
    location: "BTM Layout",
    image: "/images/water-2.jpg",
    size: "small"
  },
  {
    id: 16,
    category: "Waterproofing",
    title: "Water Tank Sealing",
    location: "Banashankari",
    image: "/images/water-3.jpg",
    size: "small"
  },
];

const categories = ["All", "Civil Construction", "Waterproofing", "Swimming Pools"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-lg scale-105"
                  : "bg-white text-neutral-500 border-gray-200 hover:border-orange-500 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-200 ${
                  project.size === "large" ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
                onClick={() => setSelectedImage(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold font-serif">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                    <MapPin size={14} className="text-orange-500" />
                    {project.location}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all delay-100 transform translate-y-4 group-hover:translate-y-0">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 text-white backdrop-blur-md">
                 <h3 className="text-2xl font-serif font-bold">{selectedImage.title}</h3>
                 <p className="text-gray-300 flex items-center gap-2 mt-2">
                   <MapPin size={16} className="text-orange-500" /> {selectedImage.location}
                 </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}