"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "25+", label: "Expert Team Members" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-neutral-800">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4"
            >
              <div className="text-5xl md:text-7xl font-serif font-bold text-orange-500 mb-4">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold tracking-widest uppercase text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}