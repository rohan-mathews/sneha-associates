import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import DetailedServices from "./components/DetailedServices";
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Fixed Elements */}
      <FloatingNav />
      <ChatWidget />

      {/* 2. Hero Area */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 3. Floating Services (Top 3) */}
      <ServiceCards />

      {/* 4. About Company */}
      <section id="about" className="pt-20">
        <IntroSection />
      </section>

      {/* 5. Detailed Service List (Black Section) */}
      <section id="services">
        <DetailedServices />
      </section>

      {/* 6. Projects & Contact */}
      <section id="projects">
        <PortfolioGrid />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}