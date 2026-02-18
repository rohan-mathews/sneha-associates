"use client";

// 👇 IMPORT THE NEW THEME TOGGLE
import ThemeToggle from "./components/ThemeToggle"; 

// 👇 IMPORT THE NEW HERO COMPONENT
import HeroSection from "./components/HeroSection"; 

// Components
import Reveal from "./components/Reveal"; 
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
import StickyContact from "./components/StickyContact"; 
import ProjectPlanner from "./components/ProjectPlanner";
import ConstellationBackground from "./components/ConstellationBackground";
import ScrollProgress from "./components/ScrollProgress";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectComparison from "./components/ProjectComparison";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  return (
    // 1. UPDATED: Removed fixed bg color so Dark Mode works
    <main className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 selection:bg-orange-500 selection:text-white overflow-hidden font-sans">
      
      {/* --- THEME TOGGLE BUTTON --- */}
      <div className="fixed top-4 right-4 z-[9999]">
        <ThemeToggle />
      </div>

      {/* --- FIXED LAYERS (Always on top) --- */}
      <ScrollProgress />
      <FloatingNav />
      <StickyContact /> 
      <ChatWidget />
      
      {/* --- BACKGROUND LAYER --- */}
      <ConstellationBackground />

      {/* --- 1. HERO SECTION --- */}
      <HeroSection />

      {/* --- REST OF THE PAGE --- */}

      {/* Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* Service Cards */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      <Reveal width="100%"><WhyChooseUs /></Reveal>

      <section id="about" className="pt-20">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

      <Reveal width="100%"><ProjectComparison /></Reveal>

      <Reveal width="100%"><ProjectPlanner /></Reveal>

      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      <section id="contact-form">
        <Reveal width="100%"><ContactForm /></Reveal>
      </section>

      <section id="enquiry">
        <Reveal width="100%"><EnquirySection /></Reveal>
      </section>

      <Reveal width="100%"><CustomerRatings /></Reveal>

      <section id="contact"><Footer /></section>
    </main>
  );
}