import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      {/* 1. Navigation Bar */}
      <FloatingNav />

      {/* 2. Hero Section (Visual Impact) */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 3. Intro/Services (The White Section) */}
      <section id="about">
        <IntroSection />
      </section>

      {/* 4. Portfolio (The Work Grid) */}
      <section id="projects">
        <PortfolioGrid />
      </section>

      {/* 5. Contact (Map & Footer) */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}