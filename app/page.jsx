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
// 👇 IMPORT THIS
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent selection:bg-orange-500 selection:text-white">
      
      {/* ✅ ADD THE SCROLL BAR HERE */}
      <ScrollProgress />

      <ConstellationBackground />
      <FloatingNav />
      <StickyContact />

      <section id="home"><HeroSection /></section>

      {/* Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* Service Cards */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

      {/* About */}
      <section id="about" className="pt-20">
        <div className="container mx-auto">
          <Reveal width="100%"><IntroSection /></Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <Reveal width="100%"><DetailedServices /></Reveal>
      </section>

      {/* Calculator */}
      <Reveal width="100%"><ProjectPlanner /></Reveal>

      {/* Projects */}
      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      {/* Contact */}
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