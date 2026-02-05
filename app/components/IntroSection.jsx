"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Grid */}
          <div className="relative h-[500px] w-full hidden md:block">
             <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10 bg-gray-200">
               {/* Replace src below with a real photo URL when you have one */}
               <Image 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
                 alt="Construction Site" 
                 fill 
                 className="object-cover" 
               />
             </div>
             <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-orange-50 rounded-2xl -z-0"></div>
             <div className="absolute bottom-8 right-8 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white bg-gray-300">
               <Image 
                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                 alt="Architect Plans" 
                 fill 
                 className="object-cover" 
               />
             </div>
          </div>

          {/* Right: The "Human" Content */}
          <div>
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Building Trust, <br/>One Brick at a Time.
            </h2>
            
            {/* ✅ NEW STORY TEXT */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sneha Associates was founded with a simple goal — delivering durable, high-quality civil and waterproofing solutions in Bengaluru. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 18 years of experience, we have completed hundreds of residential and commercial projects built on trust, precision, and long-term performance. Whether it is a luxury swimming pool or a critical terrace waterproofing job, we treat every home like our own.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <Link href="/#contact-form" className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  Book Site Visit <ArrowRight size={18} />
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}