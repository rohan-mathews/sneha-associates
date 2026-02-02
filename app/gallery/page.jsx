import FloatingNav from "../components/FloatingNav";
import PortfolioGrid from "../components/PortfolioGrid";
import Footer from "../components/Footer"; // Assuming you have a Footer component

export default function GalleryPage() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <FloatingNav />
      
      <div className="pt-32 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6">
          Project Gallery
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Explore our complete collection of civil construction, swimming pools, and waterproofing projects across Bengaluru.
        </p>
      </div>

      {/* This reuses your existing grid of 19 photos */}
      <PortfolioGrid />
      
      <Footer />
    </main>
  );
}