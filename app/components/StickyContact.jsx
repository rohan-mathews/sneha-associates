"use client";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-end">
      
      {/* 1. Phone Button (Top) */}
      <motion.a 
        href="tel:+918867694625"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="group relative w-14 h-14 bg-orange-600 rounded-full text-white shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:bg-orange-700 transition-all flex items-center justify-center"
        aria-label="Call Now"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-75"></span>
        
        <Phone size={24} fill="currentColor" className="relative z-10" />
        
        {/* Glass Tooltip (Slides out left) */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
          Call Now
        </span>
      </motion.a>

      {/* 2. WhatsApp Button (Bottom) */}
      <motion.a 
        href="https://wa.me/918867694625?text=Hi%20Sneha%20Associates,%20I%20would%20like%20to%20enquire%20about%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
        className="group relative w-14 h-14 bg-[#25D366] rounded-full text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20bd5a] transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Clean WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>

        {/* Glass Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
          WhatsApp Us
        </span>
      </motion.a>

    </div>
  );
}