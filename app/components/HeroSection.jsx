"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/hero1.jpg", "/images/hero2.jpg"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 0.5, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-[-50px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
          <span className="text-xs md:text-sm font-medium tracking-[0.25em] text-orange-200 uppercase">Est. 2005 • Kengeri, Bangalore</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none drop-shadow-xl">
          Sneha Associates
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Engineering perfection in every tile. We deliver premium contract solutions.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <a href="https://wa.me/919999999999" target="_blank" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all">Chat on WhatsApp</a>
        </motion.div>
      </div>
    </div>
  );
}