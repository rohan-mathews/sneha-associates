import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Sneha<span className="text-orange-600">Associates</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
              Delivering excellence in construction and waterproofing since 2005. 
              Your trusted partner for durable, high-quality infrastructure in Bengaluru.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact-form" className="hover:text-white transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-500 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-orange-600" size={18} />
                <span>
                  No. 12, Hennur Main Road,<br/>
                  HBR Layout, Bengaluru,<br/>
                  Karnataka 560043
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-orange-600" size={18} />
                <a href="tel:+918867694625" className="hover:text-white transition-colors">+91 88676 94625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-orange-600" size={18} />
                <a href="mailto:snehaassociatesblr@gmail.com" className="hover:text-white transition-colors">snehaassociatesblr@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sneha Associates. All Rights Reserved.
          </p>

          {/* The "Designed in Bengaluru" Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-colors">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>in Bengaluru</span>
          </div>

        </div>
      </div>
    </footer>
  );
}