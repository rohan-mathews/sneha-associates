import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards"; // <--- Import the new boxes
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      <FloatingNav />
      <ChatWidget />

      {/* 1. Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 2. The Floating Boxes (Overlaps the Hero) */}
      <ServiceCards />

      {/* 3. The "About" Section (Your "Awesome Features" area) */}
      <section id="about" className="pt-20"> {/* Added padding top so boxes don't hide text */}
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