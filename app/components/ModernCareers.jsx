"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock, Briefcase } from "lucide-react";

// --- ANIMATION SETTINGS (The "Krytil" Feel) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This makes them flow in one-by-one
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 } 
  },
};

const jobs = [
  {
    id: 1,
    role: "Civil Engineer Intern",
    type: "Internship",
    salary: "₹15k/mo",
    loc: "Bengaluru",
    color: "bg-blue-500",
  },
  {
    id: 2,
    role: "Senior Architect",
    type: "Full-Time",
    salary: "₹12L/yr",
    loc: "Hybrid",
    color: "bg-orange-500",
  },
  {
    id: 3,
    role: "Site Supervisor",
    type: "Contract",
    salary: "₹35k/mo",
    loc: "Whitefield",
    color: "bg-green-500",
  },
  {
    id: 4,
    role: "3D Visualizer",
    type: "Freelance",
    salary: "Project Basis",
    loc: "Remote",
    color: "bg-purple-500",
  },
];

export default function ModernCareers() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Builders.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just build houses; we build careers. Work on Bengaluru's most premium projects.
          </p>
        </motion.div>

        {/* --- THE BENTO GRID LAYOUT --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl dark:hover:shadow-orange-900/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${job.color}`} />

              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${job.color} bg-opacity-10 text-black dark:text-white`}>
                  <Briefcase size={24} className={job.color.replace('bg-', 'text-')} />
                </div>
                <div className="p-2 bg-gray-100 dark:bg-neutral-800 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                {job.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                {job.type} • {job.salary}
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-t border-gray-100 dark:border-neutral-800 pt-4">
                <div className="flex items-center gap-1">
                   <MapPin size={14} /> {job.loc}
                </div>
                <div className="flex items-center gap-1">
                   <Clock size={14} /> ASAP
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
        
        {/* BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg">
            View All 12 Openings
          </button>
        </motion.div>

      </div>
    </section>
  );
}