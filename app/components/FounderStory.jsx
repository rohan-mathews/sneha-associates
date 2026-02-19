"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 1. THE PHOTO (Human Connection) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* 👇 REPLACE THIS WITH YOUR REAL PHOTO LATER */}
              <Image 
                src="/images/founder.jpg" 
                alt="Founder of Sneha Associates" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Mr.CJ mATHEWS</p>
                <p className="text-orange-400 text-sm tracking-widest uppercase">Managing Director</p>
              </div>
            </div>
            
            {/* Decorative Background Element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-orange-500/20 rounded-2xl" />
          </motion.div>

          {/* 2. THE STORY (Specifics & Trust) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <Quote className="text-orange-500 mb-6" size={48} />
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              "We don't just pour concrete. <br/>
              <span className="text-orange-500">We keep our promises.</span>"
            </h2>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                In 2005, I started Sneha Associates with a simple goal: 
                <strong className="text-gray-900 dark:text-white"> To stop the nightmares homeowners face in Bengaluru.</strong>
              </p>
              <p>
                I saw too many projects delayed by months, hidden costs appearing halfway through, and contractors vanishing after taking an advance. I wanted to build differently.
              </p>
              <p>
                Today, after <strong className="text-gray-900 dark:text-white">15+ years</strong> and over <strong className="text-gray-900 dark:text-white">45 completed projects</strong> in Sarjapur, Prestige Enterprises, and Kanakpura, our rule remains the same:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  No hidden costs in the BOQ.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  Daily WhatsApp updates with photos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  We treat your budget like our own money.
                </li>
              </ul>
            </div>

            {/* Signature Area */}
            <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="font-handwriting text-3xl text-gray-800 dark:text-gray-200 transform -rotate-2">
                [CJ Mathews]
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}