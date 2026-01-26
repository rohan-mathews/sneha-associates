"use client";
import { useState } from "react";
import { MessageCircle, X, Phone, Image as ImageIcon, Star, ExternalLink } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      
      {/* 1. The Chat Menu Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100 transition-all animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="bg-neutral-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">👷</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-neutral-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Sneha Associates</h3>
                <p className="text-orange-400 text-xs">Online • Replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50">
            
            {!showCard ? (
              <div className="space-y-3">
                {/* Greeting */}
                <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm text-gray-700 border border-gray-100 mb-2">
                  Hello! 👋 How can we help you with your construction needs today?
                </div>
                
                {/* 1. View Card Button */}
                <button 
                  onClick={() => setShowCard(true)}
                  className="w-full flex items-center gap-3 bg-white hover:bg-orange-50 text-neutral-800 text-sm font-bold p-3 rounded-xl border border-gray-200 transition-colors shadow-sm group text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ImageIcon size={16} />
                  </div>
                  View Visiting Card
                </button>

                {/* 2. WhatsApp Button */}
                <a 
                  href="https://wa.me/918867694625?text=Hi,%20I%20saw%20your%20website%20and%20want%20to%20enquire%20about%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 bg-white hover:bg-green-50 text-neutral-800 text-sm font-bold p-3 rounded-xl border border-gray-200 transition-colors shadow-sm group text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={16} />
                  </div>
                  Chat on WhatsApp
                </a>

                {/* 3. Call Now Button */}
                <a 
                  href="tel:+918867694625"
                  className="w-full flex items-center gap-3 bg-white hover:bg-blue-50 text-neutral-800 text-sm font-bold p-3 rounded-xl border border-gray-200 transition-colors shadow-sm group text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={16} />
                  </div>
                  Call Us Directly
                </a>

                {/* 4. Justdial Button */}
                <a 
                  href="https://www.justdial.com/Bangalore/Sneha-Associates-Near-Zenith-Die-Makers-Sudhama-Nagar/080PXX80-XX80-140726125548-I8J8_BZDET"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 bg-white hover:bg-orange-50 text-neutral-800 text-sm font-bold p-3 rounded-xl border border-gray-200 transition-colors shadow-sm group text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star size={16} />
                  </div>
                  Check Reviews on Justdial
                </a>

              </div>
            ) : (
              // VISITING CARD VIEW
              <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                  <span className="font-bold uppercase tracking-wider">Digital Card</span>
                  <button onClick={() => setShowCard(false)} className="text-orange-600 hover:underline flex items-center gap-1">
                    Back to options <ExternalLink size={12}/>
                  </button>
                </div>
                
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md bg-white">
                  {/* Ensure visiting-card.png is in 'public' folder */}
                  <img src="/visiting-card.png" alt="Visiting Card" className="w-full h-auto" />
                </div>

                <a 
                  href="/visiting-card.png" 
                  download="Sneha_Associates_Card.png"
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white text-xs font-bold py-3 rounded-lg hover:bg-black transition-colors"
                >
                  Download to Phone ⬇️
                </a>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 2. Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'} transition-all duration-300 shadow-xl bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full flex items-center justify-center`}
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </button>

      {/* Close Button (only shows when menu is open) */}
      <button 
        onClick={() => setIsOpen(false)}
        className={`${!isOpen ? 'rotate-90 scale-0 absolute' : 'rotate-0 scale-100'} transition-all duration-300 shadow-xl bg-neutral-900 hover:bg-black text-white p-4 rounded-full flex items-center justify-center`}
      >
        <X size={24} />
      </button>

    </div>
  );
}