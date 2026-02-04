"use client";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* PART 1: Introduction */}
        <div className="flex flex-col md:flex-row items-start gap-16 mb-24">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-4 mb-6 leading-tight">
              Building Trust <br/> Since 2005.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2005, <strong>Sneha Associates</strong> is a trusted name in contracting and building services. With nearly two decades of industry experience, we successfully execute projects of varying scales while maintaining the highest standards of workmanship.
              </p>
              <p>
                We believe quality construction is built on strong foundations of trust, transparency, and expertise. From planning to execution, we transform your vision into durable structures.
              </p>
            </div>
            
            {/* Quote Box */}
            <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl italic text-neutral-800 text-base">
              "Our commitment to quality materials, skilled workmanship, and customer satisfaction continues to drive our growth and success."
            </div>
          </motion.div>

          {/* Right: Mission & Vision Grid */}
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
             {/* Mission */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-neutral-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Target size={100} /></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                   <div className="p-3 bg-orange-600 rounded-full"><Target size={24} /></div>
                   <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-400 relative z-10 text-sm leading-relaxed">
                   To deliver high-quality construction services that exceed client expectations through reliability, technical expertise, and timely execution.
                </p>
             </motion.div>

             {/* Vision */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-orange-200"
             >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Eye size={100} className="text-orange-600"/></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                   <div className="p-3 bg-orange-50 text-orange-600 rounded-full"><Eye size={24} /></div>
                   <h3 className="text-2xl font-serif font-bold text-neutral-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 relative z-10 text-sm leading-relaxed">
                   To be a leading and trusted construction service provider, recognized for quality, integrity, and excellence in execution.
                </p>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}