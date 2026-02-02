"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ZoomIn, X } from "lucide-react";
import Image from "next/image";

// ✅ 1. DATA SEPARATED BY CATEGORY
const categories = [
  {
    title: "Civil Construction",
    projects: [
      { id: 1, title: "Commercial Complex", location: "Indiranagar", image: "/images/civil-1.jpg", size: "large" },
      { id: 2, title: "Luxury Villa Foundation", location: "Whitefield", image: "/images/civil-2.jpg", size: "small" },
      { id: 3, title: "Structural Framework", location: "Koramangala", image: "/images/civil-3.jpg", size: "small" },
      { id: 4, title: "Apartment Facade", location: "Hebbal", image: "/images/civil-4.jpg", size: "large" },
      { id: 5, title: "Site Overview", location: "Sarjapur", image: "/images/civil-5.jpg", size: "small" },
      { id: 6, title: "Flooring & Finishing", location: "HSR Layout", image: "/images/civil-6.jpg", size: "small" },
    ]
  },
  {
    title: "Swimming Pools",
    projects: [
      { id: 7, title: "Infinity Edge Pool", location: "Kanakapura Road", image: "/images/pool-1.jpg", size: "large" },
      { id: 10, title: "Resort Swimming Pool", location: "Devanahalli", image: "/images/pool-4.jpg", size: "large" },
      { id: 13, title: "Compact Indoor Pool", location: "Sadashivanagar", image: "/images/pool-7.jpg", size: "large" },
      { id: 17, title: "Furnished Outdoor Pool", location: "Sarjapur", image: "/images/pool-8.jpg", size: "large" },
      { id: 18, title: "Fully Completed Pool", location: "Sarjapur", image: "/images/pool-9.jpg", size: "large" },
      { id: 19, title: "Completed Pool", location: "Sarjapur", image: "/images/pool-10.jpg", size: "large" },
      // Smaller pool photos
      { id: 8, title: "Mosaic Tiling Detail", location: "Bannerghatta", image: "/images/pool-2.jpg", size: "small" },
      { id: 9, title: "Private Villa Pool", location: "Yelahanka", image: "/images/pool-3.jpg", size: "small" },
      { id: 11, title: "Pool Filtration System", location: "Electronic City", image: "/images/pool-5.jpg", size: "small" },
      { id: 12, title: "Night View Lighting", location: "JP Nagar", image: "/images/pool-6.jpg", size: "small" },
    ]
  },
  {
    title: "Waterproofing",
    projects: [
      { id: 14, title: "Terrace Leakage Solution", location: "Jayanagar", image: "/images/water-1.jpg", size: "large" },
      { id: 16, title: "Water Tank Sealing", location: "Banashankari", image: "/images/water-3.jpg", size: "small" },
      { id: 15, title: "Chemical Treatment", location: "BTM Layout", image: "/images/water-2.jpg", size: "small" },
    ]
  }
];

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Full Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-6">
            All Projects
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* ✅ LOOP THROUGH CATEGORIES (Civil -> Pools -> Water) */}
        {categories.map((category, index) => (
          <div key={index} className="mb-24">
            
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10">
               <div className="h-1 w-10 bg-orange-600 rounded-full"></div>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800">
                 {category.title}
               </h3>
               <div className="h-px bg-neutral-200 flex-grow"></div>
            </div>

            {/* The Grid for this Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-200 ${
                    // This logic keeps big photos BIG and spans 2 columns on large screens if needed, 
                    // or keeps them side-by-side as you requested.
                    "aspect-video md:aspect-[4/3]"
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
                    <h3 className="text-white text-2xl font-bold font-serif">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                      <MapPin size={16} className="text-orange-500" />
                      {project.location}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all delay-100 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Lightbox Modal (To view images full screen) */}
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