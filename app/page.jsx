"use client";
import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats"; // 👈 New Stats Bar
import ServiceCards from "./components/ServiceCards";
import DetailedServices from "./components/DetailedServices";
import IntroSection from "./components/IntroSection";
import HomePortfolio from "./components/HomePortfolio";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 
import EnquirySection from "./components/EnquirySection"; 
import ContactForm from "./components/ContactForm"; 
import CustomerRatings from "./components/CustomerRatings"; 
import Reveal from "./components/Reveal"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      <FloatingNav />
      <ChatWidget />

      <section id="home"><HeroSection /></section>

      {/* ✅ STATS BAR (Adds Authority) */}
      <Reveal width="100%"><Stats /></Reveal>

      <div className="flex justify-center -mt-10 relative z-20">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      <section id="about" className="pt-20">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

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