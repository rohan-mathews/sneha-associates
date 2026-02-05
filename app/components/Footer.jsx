import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-serif font-bold">Sneha<span className="text-orange-600">Associates</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trusted civil contractors in Bengaluru since 2005. Specialized in waterproofing, renovation, and swimming pool construction.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/snehaassociatesblr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#contact-form" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Contact Us</h4>
            <ul className="space-y-6 text-gray-400 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-600 shrink-0 mt-1" size={20} />
                <span className="leading-relaxed">
                  No.75, 7/1, Ground Floor,<br />
                  Sudhama Nagar, Bengaluru,<br />
                  Karnataka 560027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-600 shrink-0" size={20} />
                <a href="tel:+918867694625" className="hover:text-white">+91 88676 94625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-600 shrink-0" size={20} />
                <a href="mailto:snehaassociatesblr@gmail.com" className="hover:text-white">snehaassociatesblr@gmail.com</a>
              </li>
              {/* ✅ ADDED WORKING HOURS */}
              <li className="flex items-center gap-3">
                <Clock className="text-orange-600 shrink-0" size={20} />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Find Us</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-neutral-800 shadow-xl relative">
              {/* ✅ FIXED MAP URL */}
              <iframe 
                src="https://maps.google.com/maps?q=No.75,+7/1,+Ground+Floor,+Sudhama+Nagar,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* ✅ COPYRIGHT 2026 */}
        <div className="pt-8 border-t border-neutral-900 text-center text-gray-500 text-xs">
          <p>© 2026 Sneha Associates. All Rights Reserved. | GSTIN: 29AGHPM4375P1ZJ</p>
        </div>
      </div>
    </footer>
  );
}