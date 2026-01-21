import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import DetailedServices from "./components/DetailedServices";
import IntroSection from "./components/IntroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; 
import EnquirySection from "./components/EnquirySection"; 
import ContactForm from "./components/ContactForm"; 
import CustomerRatings from "./components/CustomerRatings"; 
import Reveal from "./components/Reveal"; // <--- 1. Import the Animator

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      <FloatingNav />
      <ChatWidget />

      {/* Hero Section (No animation needed, it's first) */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Service Cards - Slide Up */}
      <div className="flex justify-center">
        <Reveal width="100%">
          <ServiceCards />
        </Reveal>
      </div>

      {/* About Section */}
      <section id="about" className="pt-20">
        <div className="container mx-auto">
          <Reveal width="100%">
            <IntroSection />
          </Reveal>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services">
        <Reveal width="100%">
          <DetailedServices />
        </Reveal>
      </section>

      {/* Project Gallery */}
      <section id="projects">
        <div className="container mx-auto">
           {/* We don't wrap the whole grid, maybe just the header of it if needed, 
               but wrapping the whole section works too */}
          <Reveal width="100%">
            <PortfolioGrid />
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form">
        <Reveal width="100%">
          <ContactForm />
        </Reveal>
      </section>

      {/* Founder Enquiry */}
      <section id="enquiry">
        <Reveal width="100%">
          <EnquirySection />
        </Reveal>
      </section>

      {/* Ratings */}
      <Reveal width="100%">
        <CustomerRatings />
      </Reveal>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}