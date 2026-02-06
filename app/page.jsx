"use client";
import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
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

// 👇 NEW IMPORTS
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectComparison from "./components/ProjectComparison";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent selection:bg-orange-500 selection:text-white">
      
      {/* 1. Top Layers */}
      <ScrollProgress />
      <ConstellationBackground />
      <FloatingNav />
      <StickyContact />

      {/* 2. Hero Section (New Split Layout) */}
      <section id="home"><HeroSection /></section>

      {/* 3. Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* 4. Service Cards (Overlap) */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      {/* 5. Why Choose Us (NEW) - Builds Trust immediately */}
      <Reveal width="100%"><WhyChooseUs /></Reveal>

      {/* 6. About Section */}
      <section id="about" className="pt-10">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      {/* 7. Detailed Services */}
      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

      {/* 8. Before & After Slider (NEW) - The "Proof" */}
      <Reveal width="100%"><ProjectComparison /></Reveal>

      {/* 9. Cost Calculator */}
      <Reveal width="100%"><ProjectPlanner /></Reveal>

      {/* 10. Projects Gallery */}
      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      {/* 11. Contact & Enquiry */}
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