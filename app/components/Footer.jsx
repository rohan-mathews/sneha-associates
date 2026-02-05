"use client"; // 👈 Needed for animation
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10 overflow-hidden">
      
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-neutral-950 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-serif font-bold tracking-tight">Sneha<span className="text-orange-600">Associates</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Trusted civil contractors in Bengaluru since 2005. Specialized in waterproofing, renovation, and swimming pool construction.
            </p>
            
            <div className="flex gap-4">
              {/* Instagram Button */}
              <a 
                href="https://www.instagram.com/snehaassociatesblr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 border border-white/10 rounded-full hover:bg-orange-600 hover:border-orange-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:text-white" />
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/918867694625" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-600 hover:border-green-500 transition-all duration-300 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                  className="group-hover:fill-white transition-colors"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-600 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-2">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-orange-500 transition-colors flex items-center gap-2">Project Gallery</Link></li>
              <li><Link href="/#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">Services</Link></li>
              <li><Link href="/#contact-form" className="hover:text-orange-500 transition-colors flex items-center gap-2">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-600 inline-block pb-1">Get in Touch</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-orange-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  No.75, 7/1, Ground Floor,<br />
                  Sudhama Nagar, Bengaluru,<br />
                  Karnataka 560027
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="tel:+918867694625" className="hover:text-white transition-colors">+91 88676 94625</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="mailto:snehaassociatesblr@gmail.com" className="hover:text-white transition-colors">snehaassociatesblr@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="group-hover:text-white transition-colors">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Map */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-orange-600 inline-block pb-1">Visit Us</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
              {/* ✅ FIXED MAP URL */}
              <iframe 
                src="https://maps.google.com/maps?q=Sneha+Associates+Sudhama+Nagar+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-105 transition-transform duration-700"
              ></iframe>
              {/* Overlay that disappears on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Sneha Associates. All Rights Reserved. | GSTIN: 29AGHPM4375P1ZJ</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-orange-500 transition-colors uppercase tracking-wider font-bold"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}