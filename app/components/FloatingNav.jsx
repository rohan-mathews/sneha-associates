"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 👈 Added Image Import
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact-form' },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' // Scrolled: White & Blurred
          : 'bg-transparent py-6' // Top: Invisible/Transparent
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* ✅ LOGO SECTION (Updated with Image) */}
        <Link href="#home" className="flex items-center gap-3 group">
          {/* The New Image Logo */}
          <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-500">
            <Image 
              src="/logo-sa.png" // 👈 Points to your new logo file
              alt="Sneha Associates Logo"
              fill
              className="object-contain rounded-full shadow-lg" // Added shadow for premium feel
            />
          </div>
          
          {/* Text that changes color on scroll */}
          <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
            Sneha<span className="text-orange-600">Associates</span>
          </span>
        </Link>

        {/* Desktop Links - BIGGER & BOLDER (Kept your premium styles) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-orange-600 hover:scale-105 ${
                scrolled ? 'text-neutral-800' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918867694625"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 text-sm"
          >
            <Phone size={18} /> +91 88676 94625
          </a>
        </div>

        {/* Mobile Menu Button (Changes color on scroll) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? 'text-neutral-900' : 'text-white'}`}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl p-6 flex flex-col gap-6 border-t border-gray-100">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-neutral-800 hover:text-orange-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+918867694625"
            className="px-5 py-4 bg-orange-600 text-white rounded-xl font-bold text-center justify-center flex items-center gap-2"
          >
            <Phone size={20} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
}