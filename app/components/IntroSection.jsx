"use client";
import { motion } from "framer-motion";
import { User, Hammer, Zap, ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-24 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-400 uppercase tracking-widest mb-2">Overview</h2>
          <div className="h-1 w-20 bg-orange-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-start">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6"><User size={28} /></div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Who We Are</h3>
            <p className="text-gray-500 leading-relaxed mb-6">Founded in Kengeri, Sneha Associates bridges the gap between rough blueprints and luxury living, specializing in precision tiling.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col items-start">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6"><Hammer size={28} /></div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Our Expertise</h3>
            <ul className="text-gray-500 leading-loose space-y-2">
              <li>• Residential Flooring & Polishing</li>
              <li>• Commercial Contract Execution</li>
              <li>• Bathroom & Kitchen Renovation</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-start">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white mb-6"><Zap size={28} /></div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">Quick Actions</h3>
            <div className="flex flex-col w-full gap-3">
              <a href="https://wa.me/919999999999" target="_blank" className="flex items-center gap-3 px-5 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-semibold"><MessageCircle size={18} /> Chat on WhatsApp</a>
              <a href="tel:+919999999999" className="flex items-center gap-3 px-5 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors font-semibold"><Phone size={18} /> Call Now</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}