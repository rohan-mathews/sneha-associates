"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
      
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918867694625?text=Hi%20Sneha%20Associates,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] border border-white/20 relative group backdrop-blur-sm transition-colors"
      >
        <MessageCircle size={28} fill="currentColor" />
        
        {/* Tooltip (Left Side) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          Chat on WhatsApp
          {/* Tiny Arrow */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-y-4 border-y-transparent border-l-4 border-l-white/90"></span>
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918867694625"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] border border-white/20 relative group backdrop-blur-sm transition-colors"
      >
        <span className="absolute -inset-1 rounded-full border border-blue-500 opacity-0 group-hover:animate-ping duration-1000"></span>
        <Phone size={24} fill="currentColor" />
        
        {/* Tooltip (Left Side) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          Call Now
          {/* Tiny Arrow */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-y-4 border-y-transparent border-l-4 border-l-white/90"></span>
        </span>
      </motion.a>

    </div>
  );
}