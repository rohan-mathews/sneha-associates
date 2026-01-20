"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "PORTFOLIO", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? "bg-[#1a1a1a] py-4 shadow-xl" : "bg-black/20 backdrop-blur-sm py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-600 rounded-sm"></div> 
          <span className="font-bold text-xl tracking-widest text-white uppercase">SNEHA<span className="font-light text-gray-400">.ASSCT</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold text-white uppercase tracking-widest hover:text-orange-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
           <a href="tel:+919999999999" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all">
            <Phone size={14} /> Call Now
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] border-t border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-white uppercase tracking-widest hover:text-orange-500">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}