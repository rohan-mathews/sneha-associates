"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ZoomIn, X } from "lucide-react";
import Image from "next/image";

// FULL DATA
const categories = [
  {
    title: "Civil Construction",
    projects: [
      { id: 1, title: "Commercial Complex", location: "Indiranagar", image: "/images/civil-1.jpg" },
      { id: 2, title: "Luxury Villa Foundation", location: "Whitefield", image: "/images/civil-2.jpg" },
      { id: 3, title: "Structural Framework", location: "Koramangala", image: "/images/civil-3.jpg" },
      { id: 4, title: "Apartment Facade", location: "Hebbal", image: "/images/civil-4.jpg" },
      { id: 5, title: "Site Overview", location: "Sarjapur", image: "/images/civil-5.jpg" },
      { id: 6, title: "Flooring & Finishing", location: "HSR Layout", image: "/images/civil-6.jpg" },
    ]
  },
  {
    title: "Swimming Pools",
    projects: [
      { id: 7, title: "Infinity Edge Pool", location: "Kanakapura Road", image: "/images/pool-1.jpg" },
      { id: 10, title: "Resort Swimming Pool", location: "Devanahalli", image: "/images/pool-4.jpg" },
      { id: 13, title: "Compact Indoor Pool", location: "Sadashivanagar", image: "/images/pool-7.jpg" },
      { id: 17, title: "Furnished Outdoor Pool", location: "Sarjapur", image: "/images/pool-8.jpg" },
      { id: 18, title: "Fully Completed Pool", location: "Sarjapur", image: "/images/pool-9.jpg" },
      { id: 19, title: "Completed Pool", location: "Sarjapur", image: "/images/pool-10.jpg" },
      { id: 8, title: "Mosaic Tiling Detail", location: "Bannerghatta", image: "/images/pool-2.jpg" },
      { id: 9, title: "Private Villa Pool", location: "Yelahanka", image: "/images/pool-3.jpg" },
      { id: 11, title: "Pool Filtration System", location: "Electronic City", image: "/images/pool-5.jpg" },
      { id: 12, title: "Night View Lighting", location: "JP Nagar", image: "/images/pool-6.jpg" },
    ]
  },
  {
    title: "Waterproofing",
    projects: [
      { id: 14, title: "Terrace Leakage Solution", location: "Jayanagar", image: "/images/water-1.jpg" },
      { id: 16, title: "Water Tank Sealing", location: "Banashankari", image: "/images/water-3.jpg" },
      { id: 15, title: "Chemical Treatment", location: "BTM Layout", image: "/images/water-2.jpg" },
    ]
  }
];

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Full Gallery</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mt-4 mb-6">
            All Projects
          </h2>
          <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {categories.map((cat, index) => (
          <div key={index} className="mb-24">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-1 w-12 bg-orange-600 rounded-full"></div>
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800">{cat.title}</h3>
               <div className="h-px bg-neutral-300 flex-grow"></div>
            </div>

            {/* Grid - Ensures good sizing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.projects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-200 aspect-[4/3]"
                  onClick={() => setSelectedImage(project)}
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <ZoomIn size={32} className="mb-2" />
                    <span className="font-bold text-lg">View Project</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white"><X size={40} /></button>
            <div className="relative w-full max-w-6xl aspect-video">
              <Image src={selectedImage.image} alt={selectedImage.title} fill className="object-contain" />
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
}