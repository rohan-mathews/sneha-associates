"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- 1. THE PHOTO (Premium & Stable) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            {/* Sleek offset background element */}
            <div className="absolute inset-0 bg-orange-50 dark:bg-orange-500/5 rounded-3xl translate-x-6 translate-y-6 -z-10 border border-orange-100 dark:border-orange-500/10" />
            
            {/* Main Image Container (Group for hover effects) */}
            <div className="group relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-neutral-900">
              <Image 
                src="/founder.jpg" 
                alt="CJ Mathews - Founder of Sneha Associates" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              
              {/* Premium Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              {/* Nameplate */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full" />
                <p className="font-serif font-bold text-3xl text-white mb-1">Mr. CJ Mathews</p>
                <p className="text-orange-400 text-sm font-bold tracking-widest uppercase">Managing Director</p>
              </div>
            </div>
          </motion.div>

          {/* --- 2. THE STORY (Specifics & Trust) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <Quote className="text-orange-500/20 dark:text-orange-500/10 mb-6" size={64} />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white mb-8 leading-tight">
              "We don't just pour concrete. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                We keep our promises.
              </span>"
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                In 2005, I started Sneha Associates with a simple goal: 
                <strong className="text-neutral-900 dark:text-white font-semibold"> To stop the nightmares homeowners face in Bengaluru.</strong>
              </p>
              <p>
                I saw too many projects delayed by months, hidden costs appearing halfway through, and contractors vanishing after taking an advance. I wanted to build differently.
              </p>
              <p>
                Today, after <strong className="text-neutral-900 dark:text-white font-semibold">15+ years</strong> and over <strong className="text-neutral-900 dark:text-white font-semibold">45 completed projects</strong> in Sarjapur, Prestige Enterprises, and Kanakpura, our rule remains the same:
              </p>
              
              {/* Refined Bullet Points */}
              <ul className="space-y-4 mt-8 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2.5 bg-orange-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                  <span className="text-neutral-700 dark:text-neutral-200">No hidden costs in the BOQ.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2.5 bg-orange-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                  <span className="text-neutral-700 dark:text-neutral-200">Daily WhatsApp updates with photos.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2.5 bg-orange-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                  <span className="text-neutral-700 dark:text-neutral-200">We treat your budget like our own money.</span>
                </li>
              </ul>
            </div>

            {/* Signature Area */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-6">
              <div>
                <div className="font-serif italic text-3xl text-neutral-800 dark:text-neutral-200 opacity-80">
                  CJ Mathews
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}