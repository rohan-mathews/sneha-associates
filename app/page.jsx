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
import ProjectPlanner from "./components/ProjectPlanner"; // 👈 IMPORT THE CALCULATOR

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* Navigation & Sticky Buttons */}
      <FloatingNav />
      <StickyContact />

      {/* Hero Section */}
      <section id="home"><HeroSection /></section>

      {/* Stats Bar */}
      <Reveal width="100%"><Stats /></Reveal>

      {/* Service Cards (Overlap Layout) */}
      <div className="flex justify-center relative z-20 -mt-24">
        <Reveal width="100%"><ServiceCards /></Reveal>
      </div>

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

      {/* ✅ COST CALCULATOR (PROJECT PLANNER) */}
      {/* Placed here to capture interest immediately after services */}
      <Reveal width="100%"><ProjectPlanner /></Reveal>

      {/* Recent Projects */}
      <section id="projects">
        <div className="container mx-auto">
          <Reveal width="100%"><HomePortfolio /></Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form">
        <Reveal width="100%"><ContactForm /></Reveal>
      </section>

      {/* Enquiry Banner */}
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