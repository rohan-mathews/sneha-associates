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
            
            {/* Social Icons - Official Instagram Link Added */}
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/snehaassociatesblr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 transition-all duration-300"
              >
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
                <span className="text-white leading-relaxed">
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

          {/* Column 4: The FIXED Satellite Map */}
          <div className="h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
            <iframe 
              title="Sneha Associates Precise Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9333838421473!2d77.5898869!3d12.9550302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dfa92f02f9%3A0xc0746b198124b890!2sZenith%20Die%20Makers!5e1!3m2!1sen!2sin!4v1716384294567!5m2!1sen!2sin"
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

          {/* Official Developer Signature */}
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-colors shadow-sm">
            <span>Designed by</span>
            <span className="text-orange-500 font-bold tracking-wide uppercase">DEV ROHAN MATHEWS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}