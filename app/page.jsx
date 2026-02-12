"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Keep all your existing components
import FloatingNav from "./components/FloatingNav";
import Stats from "./components/Stats"; 
import ServiceCards from "./components/ServiceCards";
import DetailedServices from "./components/DetailedServices";
import IntroSection from "./components/IntroSection";
import HomePortfolio from "./components/HomePortfolio";
import Footer from "./components/Footer";
import EnquirySection from "./components/EnquirySection"; 
import ContactForm from "./components/ContactForm"; 
import CustomerRatings from "./components/CustomerRatings"; 
import Reveal from "./components/Reveal"; 
import StickyContact from "./components/StickyContact"; 
import ProjectPlanner from "./components/ProjectPlanner";
import ConstellationBackground from "./components/ConstellationBackground";
import ScrollProgress from "./components/ScrollProgress";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectComparison from "./components/ProjectComparison";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  // Setup Parallax Hooks
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Animation values: Background moves slower (0 to 50%), Text fades out
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] selection:bg-orange-500 selection:text-white overflow-hidden font-sans">
      
      {/* --- FIXED LAYERS (Always on top) --- */}
      <ScrollProgress />
      <FloatingNav />
      <StickyContact /> 
      <ChatWidget />
      
      {/* --- BACKGROUND LAYER --- */}
      <ConstellationBackground />

      {/* --- 1. NEW PARALLAX HERO SECTION (Replaces <HeroSection />) --- */}
      <section id="home" ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Parallax Background Image */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              // Replace this URL with your own best project image if you have one!
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
              filter: "brightness(0.4)" 
            }} 
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
        </motion.div>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-orange-500 tracking-[0.3em] text-xs md:text-sm uppercase font-bold border border-orange-500/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md">
              Est. 2005 • Bengaluru
            </span>
            
            <h1 className="text-5xl md:text-8xl font-extrabold mt-8 mb-6 leading-tight tracking-tight text-white">
              SNEHA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">ASSOCIATES</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              We don't just build structures; we engineer legacies. <br className="hidden md:block"/>
              Specializing in <span className="text-white font-medium">Luxury Villas</span>, <span className="text-white font-medium">Swimming Pools</span>, and <span className="text-white font-medium">Waterproofing</span>.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,88,12,0.4)]"
            >
              Start Your Project <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/20 transition-all"
            >
              View Gallery
            </button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10 flex flex-col items-center gap-2 opacity-70"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">Scroll Down</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-orange-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- 2. EXISTING COMPONENTS (Restored) --- */}

      {/* Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* Service Cards (Floating Overlap Effect) */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      {/* Why Choose Us */}
      <Reveal width="100%"><WhyChooseUs /></Reveal>

      {/* About Section */}
      <section id="about" className="pt-20">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

      {/* Before & After Proof */}
      <Reveal width="100%"><ProjectComparison /></Reveal>

      {/* Cost Calculator */}
      <Reveal width="100%"><ProjectPlanner /></Reveal>

      {/* Projects Gallery */}
      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form">
        <Reveal width="100%"><ContactForm /></Reveal>
      </section>

      {/* Large Enquiry Call-to-Action */}
      <section id="enquiry">
        <Reveal width="100%"><EnquirySection /></Reveal>
      </section>

      {/* Reviews */}
      <Reveal width="100%"><CustomerRatings /></Reveal>

      {/* Footer */}
      <section id="contact"><Footer /></section>
    </main>
  );
}