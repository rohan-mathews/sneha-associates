"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// 📍 The 15 Bengaluru Locations 
const locations = [
  "L&T Constructions",
  "Brigade Group",
  "Serai Resorts",
  "Amsha Ventures",
  "SJR Redwoods",
  "PES Educations",
  "Sarjapura Road",
  "Devanahalli",
  "Whitefield",
  "NVJ Medical College And Hospital",
  "Cafe Coffee Day, Kempegowda International Airport",
  "IBC Group",
  "DSR Projects",
  "Garuda Group",
  "Andrea Dwellinton, Dollars Colony",
  "Renaissance Hotel", 
  "Race Course Road",
  "Marriott Group, Whitefield"
];

export default function Locations() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-y border-gray-200 dark:border-neutral-900">
      <div className="container mx-auto px-6 mb-16 text-center">
        
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4"
        >
          Where We <span className="text-orange-500">Build</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto"
        >
          Delivering excellence across Bengaluru's most prominent neighborhoods and emerging tech corridors.
        </motion.p>
      </div>

      {/* --- MARQUEE CONTAINER --- */}
      <div className="relative w-full flex items-center py-4">
        
        {/* Gradient Masks (Fades edges for professional look) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* MOVING TRACK */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ["0%", "-50%"] }} // Moves half the width to create seamless loop
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 // Slower speed so the longer location names are easy to read
            }}
          >
            {/* Render locations TWICE to create seamless loop */}
            {[...locations, ...locations].map((location, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-neutral-800 rounded-full shadow-sm hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all cursor-default"
              >
                <MapPin size={18} className="text-orange-500" />
                {/* whitespace-nowrap ensures long names like "Cafe Coffee Day..." stay on one line */}
                <span className="font-medium whitespace-nowrap text-neutral-700 dark:text-neutral-300">
                  {location}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}