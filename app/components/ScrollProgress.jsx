"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // ⚡ TUNED PHYSICS: Smoother, more "expensive" feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    // Container with z-index to stay on top of everything (even the navbar)
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999]">
      
      {/* 1. Background Track (Subtle line showing total width) */}
      <div className="absolute inset-0 bg-white/5 w-full"></div>

      {/* 2. The Moving Bar */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400"
        style={{ scaleX }}
      >
        {/* 3. The Glow Effect (The "Laser" Look) */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent blur-[2px]"></div>
        <div className="absolute inset-0 shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
      </motion.div>
    </div>
  );
}