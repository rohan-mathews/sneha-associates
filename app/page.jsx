"use client";

// 👇 1. THEME & UI
import ThemeToggle from "./components/ThemeToggle"; 
import Reveal from "./components/Reveal"; 
import FloatingNav from "./components/FloatingNav";
import ScrollProgress from "./components/ScrollProgress";
import ChatWidget from "./components/ChatWidget"; 
import StickyContact from "./components/StickyContact"; 
import ConstellationBackground from "./components/ConstellationBackground";

// 👇 2. HERO & STORY
import HeroSection from "./components/HeroSection"; 
import Stats from "./components/Stats"; 
import ServiceCards from "./components/ServiceCards";
import WhyChooseUs from "./components/WhyChooseUs";
import FounderStory from "./components/FounderStory"; 

// 👇 3. SERVICES & PLANNING
import DetailedServices from "./components/DetailedServices";
import ProjectComparison from "./components/ProjectComparison";
import ProjectPlanner from "./components/ProjectPlanner";

// 👇 4. SHOWCASE & TRUST
import HomePortfolio from "./components/HomePortfolio";
import Locations from "./components/Locations"; // 👈 NEW LOCATIONS IMPORT
import CustomerRatings from "./components/CustomerRatings"; 
import FAQ from "./components/FAQ";

// 👇 5. CONTACT & CTAs
import ContactForm from "./components/ContactForm"; 
import EnquirySection from "./components/EnquirySection"; 
import ReadyToBuild from "./components/ReadyToBuild"; 
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#050505] transition-colors duration-500 selection:bg-orange-500 selection:text-white overflow-hidden font-sans">
      
      {/* --- 1. AMBIENT GLOWS (Background Effects) --- */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- 2. FIXED UI ELEMENTS --- */}
      <div className="fixed top-6 right-6 z-[9999]">
        <ThemeToggle />
      </div>
      <ScrollProgress />
      <FloatingNav />
      <StickyContact /> 
      <ChatWidget />
      <ConstellationBackground />

      {/* --- 3. HERO SECTION (Full Height) --- */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* --- 4. MAIN CONTENT (With Premium Spacing) --- */}
      <div className="relative z-10 flex flex-col space-y-32 pb-0"> 
        
        {/* STATS & CARDS */}
        <section>
          <Reveal width="100%"><Stats /></Reveal>
          <div className="flex justify-center relative z-20 -mt-24 px-4">
            <Reveal width="100%"><ServiceCards /></Reveal>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="container mx-auto px-4">
           <Reveal width="100%"><WhyChooseUs /></Reveal>
        </section>

        {/* FOUNDER STORY */}
        <section id="about" className="container mx-auto px-4">
          <Reveal width="100%"><FounderStory /></Reveal>
        </section>

        {/* SERVICES (Detailed) */}
        <section id="services" className="relative">
          <div className="absolute inset-0 bg-gray-50/50 dark:bg-white/5 -skew-y-1 z-0 transform scale-110" />
          <div className="relative z-10">
             <Reveal width="100%"><DetailedServices /></Reveal>
          </div>
        </section>

        {/* COMPARISON & PLANNER */}
        <section className="container mx-auto px-4 space-y-32">
          <Reveal width="100%"><ProjectComparison /></Reveal>
          <Reveal width="100%"><ProjectPlanner /></Reveal>
        </section>

        {/* PORTFOLIO */}
        <section id="projects" className="container mx-auto px-4">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </section>

        {/* 👇 NEW LOCATIONS SECTION ADDED HERE 👇 */}
        <section id="locations" className="w-full">
          <Reveal width="100%"><Locations /></Reveal>
        </section>

        {/* TRUST & REVIEWS */}
        <section className="space-y-20">
          <Reveal width="100%"><CustomerRatings /></Reveal>
          <div className="container mx-auto px-4">
             <Reveal width="100%"><FAQ /></Reveal>
          </div>
        </section>

        {/* CONTACT & FORMS */}
        <section id="contact-form" className="bg-gray-50 dark:bg-[#0a0a0a] py-20">
           <div className="container mx-auto px-4">
             <Reveal width="100%"><ContactForm /></Reveal>
           </div>
        </section>

        {/* ENQUIRY */}
        <section id="enquiry">
          <Reveal width="100%"><EnquirySection /></Reveal>
        </section>

        {/* FINAL CALL TO ACTION */}
        <ReadyToBuild />

      </div>

      {/* --- 5. FOOTER --- */}
      <section id="contact" className="relative z-20">
        <Footer />
      </section>
      
    </main>
  );
}