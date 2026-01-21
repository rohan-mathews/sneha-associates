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

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-50 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Fixed Navigation (Transparent to White) */}
      <FloatingNav />
      <ChatWidget />

      {/* 2. Hero Section (Buttons are now fixed!) */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 3. Floating Service Cards */}
      <ServiceCards />

      {/* 4. About Us */}
      <section id="about" className="pt-20">
        <IntroSection />
      </section>

      {/* 5. Detailed Services */}
      <section id="services">
        <DetailedServices />
      </section>

      {/* 6. Projects */}
      <section id="projects">
        <PortfolioGrid />
      </section>

      {/* 7. Lead Gen Form (WhatsApp) */}
      <section id="contact-form">
        <ContactForm />
      </section>

      {/* 8. Founder Info */}
      <section id="enquiry">
        <EnquirySection />
      </section>

      {/* 9. Ratings & Justdial */}
      <CustomerRatings />

      {/* 10. Footer */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}