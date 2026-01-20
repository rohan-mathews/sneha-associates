"use client";
import { useState } from "react";
import { MessageCircle, X, Phone, ExternalLink, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-neutral-900 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-sm">Sneha Associates</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 flex flex-col gap-3">
              {/* Bot Message */}
              <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-100 text-sm text-gray-600">
                👋 Namaste! Looking for luxury tiling or contract work? Choose an option below to connect with us instantly.
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                <a href="https://wa.me/919999999999" target="_blank" className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl text-sm font-medium transition-colors group">
                  <MessageCircle size={18} /> 
                  <span className="flex-1">Chat on WhatsApp</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                </a>
                
                <a href="tel:+919999999999" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-sm font-medium transition-colors">
                  <Phone size={18} /> 
                  <span className="flex-1">Call +91 999 999 9999</span>
                </a>

                 <a href="#projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3 bg-neutral-800 hover:bg-neutral-900 text-white p-3 rounded-xl text-sm font-medium transition-colors">
                  <ExternalLink size={18} /> 
                  <span className="flex-1">See Our Portfolio</span>
                </a>
              </div>
              
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">Usually replies within 1 hour</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50 ${isOpen ? 'bg-neutral-900 text-white' : 'bg-orange-600 text-white'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}