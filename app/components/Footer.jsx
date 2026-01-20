import { MapPin, Phone, Mail, Instagram, Facebook, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Sneha Associates</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Expert tiling and flooring contractors serving Bengaluru. We bring precision and luxury to your spaces with granite, marble, and vitrified tiles.
            </p>
            <a href="https://www.justdial.com/Bangalore/Sneha-Associates-Near-Zenith-Die-Makers-Sudhama-Nagar/080PXX80-XX80-140726125548-I8J8_BZDET" target="_blank" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
              <Star size={18} />
              <span className="underline">View us on JustDial</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-orange-500" size={20} />
                <span>
                  No.75, 7/1, Ground Floor,<br/>
                  1st Main, 2nd Cross Rd,<br/>
                  Near Zenith Die Makers,<br/>
                  Sudhama Nagar, Bengaluru - 560027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-orange-500" size={20} />
                <a href="tel:+918867694625" className="hover:text-white transition-colors">+91 88676 94625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-orange-500" size={20} />
                <a href="mailto:snehaassociatesblr@gmail.com" className="hover:text-white transition-colors">snehaassociatesblr@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="h-64 rounded-xl overflow-hidden bg-neutral-800 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Sneha%20Associates%2C%20Sudhama%20Nagar%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Sneha Associates. All rights reserved.</p>
          <p>Designed with ❤️ in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}