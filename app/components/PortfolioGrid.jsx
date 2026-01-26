"use client";
import { useState } from "react";
import { Maximize2, PlayCircle } from "lucide-react";

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("Civil Construction");

  // 📸 PHOTO DATA - currently using Online Placeholders so it looks good immediately
  const projects = [
    // --- 1. CIVIL CONSTRUCTION ---
    {
      id: 1,
      category: "Civil Construction",
      title: "Luxury Villa Project",
      location: "Whitefield, Bengaluru",
      // Placeholder image (Replace with your own later: "/images/my-villa.jpg")
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", 
      size: "large" 
    },
    {
      id: 2,
      category: "Civil Construction",
      title: "Modern Apartment Facade",
      location: "Indiranagar",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },
    {
      id: 3,
      category: "Civil Construction",
      title: "Structural Framework",
      location: "HSR Layout",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },

    // --- 2. WATERPROOFING ---
    {
      id: 4,
      category: "Waterproofing",
      title: "Terrace Waterproofing",
      location: "Koramangala",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2000&auto=format&fit=crop",
      size: "large"
    },
    {
      id: 5,
      category: "Waterproofing",
      title: "Epoxy Grouting",
      location: "Jayanagar",
      image: "https://plus.unsplash.com/premium_photo-1664302152996-547e1966a93d?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },

    // --- 3. SWIMMING POOLS ---
    {
      id: 6,
      category: "Swimming Pools",
      title: "Infinity Pool Design",
      location: "Sarjapur Road",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop",
      size: "large"
    },
    {
      id: 7,
      category: "Swimming Pools",
      title: "Mosaic Tiling",
      location: "Bannerghatta",
      image: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },
  ];

  // 🎥 VIDEO DATA 
  const videos = [
    {
      id: 1,
      title: "Civil Construction Walkthrough",
      // Placeholder video thumbnail
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example Link - Change this!
    },
    {
      id: 2,
      title: "Waterproofing Technique",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example Link - Change this!
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

        {/* 🖼️ PHOTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 min-h-[400px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-md cursor-pointer bg-gray-200 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-video' : 'aspect-square'
              }`}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-serif font-bold">{project.title}</h3>
                <p className="text-gray-300 text-sm flex items-center gap-2 mt-2">
                  <Maximize2 size={14} /> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* --- SECTION 2: VIDEOS --- */}
        <div className="border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Site Walkthroughs 🎥</h2>
            <p className="text-gray-500">Watch our team in action.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
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
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}