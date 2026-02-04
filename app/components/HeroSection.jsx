"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE - Replace '/images/hero-bg.jpg' with your best construction photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} 
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-neutral-900/70"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left pt-20">
        <span className="inline-block py-2 px-4 border border-orange-500/50 rounded-full bg-orange-500/10 text-orange-400 text-sm md:text-base font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          Since 2010 • Bengaluru
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
          Building Trust, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Constructing Dreams.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
          Sneha Associates delivers premium civil construction, waterproofing, and swimming pool solutions with engineering precision.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link 
            href="/#contact-form"
            className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
          >
            Get a Free Consultation <ArrowRight size={20} />
          </Link>
          <Link 
            href="/gallery"
            className="px-8 py-5 bg-transparent border-2 border-white/30 hover:bg-white hover:text-neutral-900 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* 3. THE TRUST BAR (Bottom of Hero) */}
      <div className="absolute bottom-0 left-0 right-0 bg-neutral-950/80 backdrop-blur-md border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-white/90 text-sm md:text-base font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-orange-500" /> 15+ Years of Excellence
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-orange-500" /> 50+ Completed Projects
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={20} className="text-orange-500" /> Certified Civil Engineers
          </div>
          <div className="flex items-center gap-3">
             <CheckCircle size={20} className="text-orange-500" /> On-Time Delivery
          </div>
        </div>
      </div>
    </section>
  );
}