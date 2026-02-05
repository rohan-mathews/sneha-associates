"use client";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyContact() {
  return (
    <>
      {/* 1. WHATSAPP BUTTON (Visible on All Devices) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="https://wa.me/918867694625?text=Hi%20Sneha%20Associates,%20I%20would%20like%20a%20free%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 group"
      >
        <MessageCircle size={24} className="fill-white" />
        <span className="font-bold hidden md:block">Get Free Quote</span>
      </motion.a>

      {/* 2. CALL NOW BUTTON (Visible ONLY on Mobile) */}
      <motion.a
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href="tel:+918867694625"
        className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 animate-pulse"
      >
        <Phone size={24} className="fill-white" />
        <span className="font-bold">Call Now</span>
      </motion.a>
    </>
  );
}