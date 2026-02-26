"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// 📍 The 15 Bengaluru Locations (You can edit these anytime)
const locations = [
  "L&T Constructions",
  "Brigade Group",
  "Serai Resorts",
  "Amsha Ventures",
  "SJR Redwoods",
  "PES Educations",
  "Srjapura Road",
  "Devanahalli",
  "Whitefield",
  "NVJ Medical College And Hospital",
  "Cafe Coffee Day,Kempegowda International Airport",
  "IBC Group",
  "DSR Projects",
  "Garuda Group",
  "Andrea Dwellinton,Dollars Colony"
];

// Animation variants for the staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Locations() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-neutral-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Locations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-neutral-800 rounded-full shadow-sm hover:shadow-md hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all cursor-default group"
            >
              <MapPin size={18} className="text-neutral-400 group-hover:text-orange-500 transition-colors" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {location}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}