import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* 1. The Fixed Widgets (Navigation & Chat) */}
      <FloatingNav />
      <ChatWidget />

      {/* 2. The Page Sections */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <IntroSection />
      </section>

      <section id="projects">
        <PortfolioGrid />
      </section>

      <section id="contact">
        <Footer />
      </section>
      
    </main>
  );
}