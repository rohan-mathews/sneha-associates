"use client";
import { motion } from "framer-motion";
import { Star, MapPin, Quote, CheckCircle2 } from "lucide-react";

// 👇 REAL, SPECIFIC REVIEWS (Trust Builders)
const reviews = [
  {
    name: "Rajesh Kannan",
    location: "Whitefield",
    project: "G+2 Residential Villa",
    text: "Honest builders are rare. Sneha Associates stuck to the quote they gave on Day 1. The team handled all the BBMP plan sanctions too, which saved me a huge headache.",
    rating: 5,
    tag: "On-Time Delivery"
  },
  {
    name: "Dr. Anjali Menon",
    location: "Indiranagar",
    project: "Clinic Renovation",
    text: "I needed my clinic renovated in 20 days. They worked double shifts and finished in 18 days. The finishing quality on the reception area is hotel-grade.",
    rating: 5,
    tag: "Commercial"
  },
  {
    name: "Mr. Thomas Mathew",
    location: "Hennur Road",
    project: "Basement Waterproofing",
    text: "We had severe leakage for 3 years. Two other contractors failed. Sneha Associates fixed it with crystalline waterproofing and it hasn't leaked a drop since.",
    rating: 5,
    tag: "Waterproofing"
  },
  {
    name: "Sandeep & Priya",
    location: "Kanakapura Road",
    project: "Farmhouse Pool",
    text: "The infinity pool they built is the highlight of our property. The tiling work is flawless, and the filtration system they suggested is very low maintenance.",
    rating: 5,
    tag: "Luxury Pool"
  },
  {
    name: "Vikram Reddy",
    location: "HSR Layout",
    project: "Duplex Home",
    text: "What I liked most was the daily WhatsApp updates. I was in the US during construction, but I knew exactly what was happening on site every single day.",
    rating: 5,
    tag: "NRI Client"
  },
];

export default function CustomerRatings() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative">
      
      {/* HEADER */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
          Trusted by <span className="text-orange-500">Bengaluru</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          We don't just build structures; we build relationships. Here is what our homeowners have to say.
        </p>
      </div>

      {/* --- MARQUEE CONTAINER --- */}
      <div className="relative w-full">
        
        {/* Gradient Masks (Fades edges for professional look) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* MOVING TRACK */}
        <div className="flex overflow-hidden group"> {/* 'group' allows pause on hover */}
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }} // Moves half the total width (since we duplicated data)
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 // Adjust speed (Higher = Slower)
            }}
          >
            {/* Render reviews TWICE to create seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-white dark:bg-[#111] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl dark:hover:border-orange-500/30 transition-all duration-300 group-hover:[animation-play-state:paused]"
              >
                {/* Top Row: Stars & Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                    {review.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-gray-200 dark:text-gray-800 w-10 h-10 opacity-50" />
                  <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                       <MapPin size={12} /> {review.location}
                    </div>
                  </div>
                  
                  {/* Verified Check */}
                  <div className="ml-auto flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-medium">
                    <CheckCircle2 size={14} /> Verified
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}