"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    // ✅ CHANGED: Replaced 'bg-white' with 'bg-black/30 backdrop-blur-md' so stars show through
    <section className="py-20 bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Grid */}
          <div className="relative h-[500px] w-full hidden md:block">
             {/* BIG IMAGE */}
             <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
               <Image 
                 src="/images/about-1.jpg"   // 👈 Ensure these files exist in public/images/
                 alt="Construction Site" 
                 fill 
                 className="object-cover" 
               />
             </div>
             
             {/* DECORATIVE BOX - Darkened for theme */}
             <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-orange-600/20 rounded-2xl -z-0"></div>
             
             {/* SMALL OVERLAPPING IMAGE */}
             <div className="absolute bottom-8 right-8 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-black/50">
               <Image 
                 src="/images/about-2.jpg"   // 👈 Ensure these files exist in public/images/
                 alt="Architect Plans" 
                 fill 
                 className="object-cover" 
               />
             </div>
          </div>

          {/* Right: The "Human" Content */}
          <div>
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
            
            {/* ✅ CHANGED: Text color to white */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Building Trust, <br/>One Brick at a Time.
            </h2>
            
            {/* ✅ CHANGED: Text color to light gray */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sneha Associates was founded with a simple goal — delivering durable, high-quality civil and waterproofing solutions in Bengaluru. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With over 18 years of experience, we have completed hundreds of residential and commercial projects built on trust, precision, and long-term performance. Whether it is a luxury swimming pool or a critical terrace waterproofing job, we treat every home like our own.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               {/* ✅ CHANGED: Button to Orange for contrast */}
               <Link href="/#contact-form" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20">
                  Book Site Visit <ArrowRight size={18} />
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}