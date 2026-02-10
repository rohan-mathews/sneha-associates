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
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectComparison from "./components/ProjectComparison";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] selection:bg-orange-500 selection:text-white overflow-hidden">
      
      {/* --- FIXED LAYERS (Always on top) --- */}
      <ScrollProgress />
      <FloatingNav />
      <StickyContact /> {/* Right Side */}
      <ChatWidget />    {/* Left Side */}
      
      {/* --- BACKGROUND LAYER --- */}
      <ConstellationBackground />

      {/* --- PAGE CONTENT --- */}
      
      {/* 1. Hero Section */}
      <section id="home"><HeroSection /></section>

      {/* 2. Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* 3. Service Cards (Floating Overlap Effect) */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      {/* 4. Why Choose Us */}
      <Reveal width="100%"><WhyChooseUs /></Reveal>

      {/* 5. About Section */}
      <section id="about" className="pt-10">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      {/* 6. Detailed Services */}
      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

      {/* 7. Before & After Proof */}
      <Reveal width="100%"><ProjectComparison /></Reveal>

      {/* 8. Cost Calculator */}
      <Reveal width="100%"><ProjectPlanner /></Reveal>

      {/* 9. Projects Gallery */}
      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      {/* 10. Contact Form */}
      <section id="contact-form">
        <Reveal width="100%"><ContactForm /></Reveal>
      </section>

      {/* 11. Large Enquiry Call-to-Action */}
      <section id="enquiry">
        <Reveal width="100%"><EnquirySection /></Reveal>
      </section>

      {/* 12. Reviews */}
      <Reveal width="100%"><CustomerRatings /></Reveal>

      {/* 13. Footer */}
      <section id="contact"><Footer /></section>
    </main>
  );
}