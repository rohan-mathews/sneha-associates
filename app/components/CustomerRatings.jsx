"use client";
import { Star, Quote, ArrowRight } from "lucide-react"; // Using 'Quote' instead of 'MessageSquare' for a cleaner look
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Priya Menon",
    role: "Architect",
    text: "I regularly hire them for civil contracting work. Their finishing and tiling work is some of the best in Bengaluru. On-time delivery every time.",
    stars: 5,
  },
  {
    name: "Arun Gowda",
    role: "Business Owner",
    text: "Built our swimming pool with the latest filtration systems. Very professional team, and the service support after completion is excellent.",
    stars: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Homeowner",
    text: "They fixed a severe terrace leakage issue that three other contractors couldn't solve. Their waterproofing expertise is genuine.",
    stars: 5,
  },
];

export default function CustomerRatings() {
  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Ambient Glow Behind Text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] -z-10"></div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Bengaluru.</span>
          </motion.h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl relative group hover:bg-white/[0.07] hover:border-orange-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-orange-500 shadow-xl group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8 font-light text-lg">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base group-hover:text-orange-400 transition-colors">{review.name}</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ THE PREMIUM "GLASS" GOOGLE REVIEW BUTTON */}
        <div className="flex justify-center">
          <motion.a
            href="https://g.page/r/CV9nrvs8HMeGEAE/review" // 🔴 REPLACE THIS LINK
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full p-[1px] shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] hover:shadow-[0_0_60px_-10px_rgba(234,88,12,0.5)] transition-shadow duration-500"
          >
            {/* 1. Animated Border Gradient */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#ea580c_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 2. Inner Content Container */}
            <div className="relative flex items-center gap-6 bg-neutral-900/90 backdrop-blur-xl rounded-full px-8 py-4 md:px-12 md:py-6 border border-white/10 group-hover:border-transparent transition-colors">
              
              {/* "G" Icon Box */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-900/40 shrink-0 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-serif font-bold text-3xl drop-shadow-md">G</span>
              </div>

              {/* Text Content */}
              <div className="text-left">
                <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-[0.2em] uppercase mb-1 group-hover:text-gray-300 transition-colors">
                  Have we worked together?
                </p>
                <div className="flex items-center gap-2">
                   <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all">
                     Write a Review on Google
                   </h3>
                   <ArrowRight className="text-orange-500 w-0 group-hover:w-6 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}