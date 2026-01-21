"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
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
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' // Semi-transparent white on scroll
          : 'bg-transparent py-6' // Invisible at top
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange-600 rounded-r-xl rounded-t-xl flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
            <span className="text-white font-bold text-xl">SA</span>
          </div>
          <span className={`text-2xl font-serif font-bold transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
            Sneha<span className="text-orange-600">Associates</span>
          </span>
        </Link>

        {/* Desktop Links - BIGGER & BOLDER */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-bold tracking-wide transition-all hover:text-orange-600 hover:scale-105 ${
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

        {/* Mobile Menu Button */}
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