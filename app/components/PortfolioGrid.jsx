"use client";
import { useState } from "react";
import { Maximize2, PlayCircle, Image as ImageIcon } from "lucide-react";

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("Civil Construction");

  // 📸 PHOTO SLOTS (Ready for your images)
  const projects = [
    // --- 1. CIVIL CONSTRUCTION ---
    {
      id: 1,
      category: "Civil Construction",
      title: "Civil Project 1",
      location: "Bengaluru",
      image: "", // 👈 PASTE YOUR IMAGE PATH HERE LATER (e.g. "/images/civil1.jpg")
      size: "large" 
    },
    {
      id: 2,
      category: "Civil Construction",
      title: "Civil Project 2",
      location: "Bengaluru",
      image: "", 
      size: "small"
    },
    {
      id: 3,
      category: "Civil Construction",
      title: "Civil Project 3",
      location: "Bengaluru",
      image: "", 
      size: "small"
    },

    // --- 2. WATERPROOFING ---
    {
      id: 4,
      category: "Waterproofing",
      title: "Waterproofing Site 1",
      location: "Bengaluru",
      image: "", // 👈 PASTE YOUR IMAGE PATH HERE LATER
      size: "large"
    },
    {
      id: 5,
      category: "Waterproofing",
      title: "Waterproofing Site 2",
      location: "Bengaluru",
      image: "",
      size: "small"
    },

    // --- 3. SWIMMING POOLS ---
    {
      id: 6,
      category: "Swimming Pools",
      title: "Swimming Pool 1",
      location: "Bengaluru",
      image: "", // 👈 PASTE YOUR IMAGE PATH HERE LATER
      size: "large"
    },
    {
      id: 7,
      category: "Swimming Pools",
      title: "Swimming Pool 2",
      location: "Bengaluru",
      image: "",
      size: "small"
    },
  ];

  // 🎥 VIDEO SLOTS (Ready for your videos)
  const videos = [
    {
      id: 1,
      title: "Site Walkthrough 1",
      videoUrl: "" // 👈 PASTE YOUTUBE EMBED LINK HERE LATER
    },
    {
      id: 2,
      title: "Site Walkthrough 2",
      videoUrl: "" // 👈 PASTE YOUTUBE EMBED LINK HERE LATER
    }
  ];

  // Filter logic
  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION 1: PHOTOS --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Our Featured Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse through our portfolio of completed sites across Bengaluru.
          </p>
        </div>

        {/* 🔘 CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Civil Construction", "Waterproofing", "Swimming Pools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🖼️ PHOTO GRID (With Placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 min-h-[400px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-sm border border-gray-200 bg-gray-100 flex items-center justify-center ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-video' : 'aspect-square'
              }`}
            >
              {project.image ? (
                // If you added an image, show it
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                // If NO image, show this nice placeholder
                <div className="flex flex-col items-center text-gray-400">
                  <ImageIcon size={48} className="mb-2 opacity-50" />
                  <span className="text-sm font-semibold">Image Coming Soon</span>
                  <span className="text-xs">{project.category}</span>
                </div>
              )}
              
              {/* Overlay (Only shows if there is an image) */}
              {project.image && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2 mt-2">
                    <Maximize2 size={14} /> {project.location}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- SECTION 2: VIDEOS --- */}
        <div className="border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Site Walkthroughs 🎥</h2>
            <p className="text-gray-500">Video updates coming soon.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 aspect-video flex items-center justify-center">
                {video.videoUrl ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.videoUrl} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="opacity-90 group-hover:opacity-100 transition-opacity"
                  ></iframe>
                ) : (
                  // Placeholder for Videos
                  <div className="flex flex-col items-center text-gray-400">
                    <PlayCircle size={48} className="mb-2 opacity-50" />
                    <span className="text-sm font-semibold">Video Coming Soon</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}