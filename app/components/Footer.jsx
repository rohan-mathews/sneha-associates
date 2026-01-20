"use client";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-800 via-orange-600 to-neutral-800" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl font-bold mb-6 tracking-tight">Sneha Associates</h2>
            <p className="text-neutral-400 leading-relaxed mb-8">Expert craftsmanship in tiling and contract execution across Bangalore.</p>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-serif text-xl font-bold mb-8">Contact Us</h3>
            <div className="space-y-6">
              <a href="tel:+919999999999" className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-neutral-800 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors"><Phone size={20} /></div>
                <div><p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Call Us Now</p><p className="text-lg font-medium group-hover:text-orange-400">+91 999 999 9999</p></div>
              </a>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-neutral-800 text-orange-500"><MapPin size={20} /></div>
                <div><p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Office Location</p><p className="text-neutral-300">Kengeri Satellite Town, Bangalore</p></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
             <div className="rounded-2xl overflow-hidden h-full min-h-[250px] border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.583562479637!2d77.4667!3d12.9303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd08c90b639%3A0x7e296a29e46950!2sKengeri%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
             </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© 2026 Sneha Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}