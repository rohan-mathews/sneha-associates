"use client";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerRatings() {
  
  // ✅ YOUR OFFICIAL GOOGLE REVIEW LINK
  const googleReviewLink = "https://g.page/r/CV9nrvs8HMeGEAE/review"; 

  const reviews = [
    {
      name: "Ramesh Kumar",
      role: "Homeowner, Jayanagar",
      text: "Sneha Associates did an excellent job with our terrace waterproofing. It's been 2 years and not a single leak. Highly professional team!",
      stars: 5,
    },
    {
      name: "Priya Menon",
      role: "Architect",
      text: "I regularly hire them for civil contracting work. Their finishing and tiling work is some of the best in Bengaluru. On-time delivery every time.",
      stars: 5,
    },
    {
      name: "Arun Gowda",
      role: "Business Owner",
      text: "Built our swimming pool exactly how we wanted. The filtration system suggestion was great. Very happy with the service.",
      stars: 5,
    },
  ];

  return (
    // ✅ CHANGED: Transparent background so stars show through
    <section className="py-24 bg-transparent overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-orange-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-gray-400">Rated 4.9/5 based on 100+ projects</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // ✅ CHANGED: Dark Glass Card Style
              className="bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md relative hover:bg-white/10 transition-colors group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-orange-900/50 group-hover:scale-110 transition-transform">
                <MessageSquare size={20} />
              </div>
              
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              
              <div>
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-wide">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ THE GOOGLE REVIEW CTA BUTTON */}
        <div className="flex justify-center">
          <a 
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            // ✅ CHANGED: White button for contrast against dark background
            className="group flex items-center gap-4 bg-white hover:bg-gray-100 border border-transparent px-8 py-4 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Google 'G' Logo */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              className="w-8 h-8" 
            />
            <div className="text-left">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Have we worked together?</p>
              <p className="text-neutral-900 font-bold text-lg group-hover:text-blue-600 transition-colors">Write a Review on Google</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}