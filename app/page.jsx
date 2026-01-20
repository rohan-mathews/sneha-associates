import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import DetailedServices from "./components/DetailedServices";
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 
import EnquirySection from "./components/EnquirySection"; // <--- 1. Import New File

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      <FloatingNav />
      <ChatWidget />

      <section id="home">
        <HeroSection />
      </section>

      <ServiceCards />

      <section id="about" className="pt-20">
        <IntroSection />
      </section>

      <section id="services">
        <DetailedServices />
      </section>

      <section id="projects">
        <PortfolioGrid />
      </section>

      {/* 2. Add Enquiry Section Here */}
      <section id="enquiry">
        <EnquirySection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}