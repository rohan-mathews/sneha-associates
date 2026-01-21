import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Brand & Justdial Link */}
          <div className="col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Sneha<span className="text-orange-600">Associates</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert tiling and flooring contractors serving Bengaluru. We bring precision and luxury to your spaces with granite, marble, and vitrified tiles.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={16} />
              </a>
            </div>

            {/* Verified Justdial Link */}
            <a 
              href="https://www.justdial.com/Bangalore/Sneha-Associates-Near-Zenith-Die-Makers-Sudhama-Nagar/080PXX80-XX80-140726125548-I8J8_BZDET" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline"
            >
              ⭐ View Verified Justdial Profile
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact-form" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: The Exact Address */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-orange-600" size={16} />
                <span className="text-white">
                  No.75, 7/1, Ground Floor,<br/>
                  1st Main, 2nd Cross Rd,<br/>
                  Near Zenith Die Makers,<br/>
                  Sudhama Nagar, Bengaluru - 560027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-orange-600" size={16} />
                <a href="tel:+918867694625" className="hover:text-white transition-colors font-bold">+91 88676 94625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-orange-600" size={16} />
                <a href="mailto:snehaassociatesblr@gmail.com" className="hover:text-white transition-colors break-all">snehaassociatesblr@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: The Pinpoint Map */}
          <div className="h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
            <iframe 
              title="Sneha Associates Location"
              /* We search specifically for 'Zenith Die Makers Sudhama Nagar' to pinpoint the location */
              src="https://maps.google.com/maps?q=Zenith+Die+Makers,+Sudhama+Nagar,+Bengaluru&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sneha Associates. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-colors">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>in Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}