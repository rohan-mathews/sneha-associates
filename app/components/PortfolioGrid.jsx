"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, PlayCircle } from "lucide-react";

// DATA
const photoProjects = [
  { id: 1, title: "Luxury Living Room", category: "Residential", image: "/images/p1.jpg", className: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Corporate Office", category: "Commercial", image: "/images/p2.jpg", className: "md:col-span-1 md:row-span-1" },
];

const videoProjects = [
  { id: 1, title: "Site Walkthrough", description: "Project Tour", video: "/videos/v1.mp4", thumbnail: "/images/p1.jpg" },
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <section className="py-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-600 font-medium tracking-widest uppercase text-sm">Our Masterpieces</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-8">Selected Works</h2>
          <div className="inline-flex bg-neutral-100 p-1 rounded-full">
            <button onClick={() => setActiveTab("photos")} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === "photos" ? "bg-neutral-900 text-white shadow-lg" : "text-neutral-500 hover:text-neutral-900"}`}><ImageIcon size={16} /> Photos</button>
            <button onClick={() => setActiveTab("videos")} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === "videos" ? "bg-orange-600 text-white shadow-lg" : "text-neutral-500 hover:text-neutral-900"}`}><PlayCircle size={16} /> Videos</button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "photos" && (
            <motion.div key="photos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {photoProjects.map((item) => (
                <div key={item.id} className={`relative group overflow-hidden rounded-3xl bg-neutral-100 ${item.className}`}>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-orange-600 rounded-full">{item.category}</span>
                    <h3 className="text-2xl font-bold text-white font-serif">{item.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "videos" && (
            <motion.div key="videos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoProjects.map((item) => (
                <div key={item.id} className="group">
                  <div className="relative overflow-hidden rounded-3xl aspect-video bg-black shadow-2xl mb-4">
                    <video controls poster={item.thumbnail} className="w-full h-full object-cover"><source src={item.video} type="video/mp4" /></video>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 font-serif">{item.title}</h3>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}