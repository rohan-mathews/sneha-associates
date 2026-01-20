import { Phone, Mail, User } from "lucide-react";

export default function EnquirySection() {
  return (
    <div className="bg-orange-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-8">Got Questions? Speak to Us Directly.</h2>
        
        <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            
            {/* Founder Info */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-lg">
                <User size={40} />
              </div>
              <h3 className="text-2xl font-bold">C J Mathews</h3>
              <p className="opacity-90 text-sm uppercase tracking-wider font-medium">Founder</p>
            </div>

            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-32 bg-white/30"></div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6 text-left">
              <a href="tel:+918867694625" className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-xl transition-all">
                <div className="p-3 bg-white text-orange-600 rounded-full shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wide">Call for Enquiry</p>
                  <p className="text-xl font-bold">+91 88676 94625</p>
                </div>
              </a>

              <a href="mailto:snehaassociatesblr@gmail.com" className="flex items-center gap-4 hover:bg-white/10 p-2 rounded-xl transition-all">
                <div className="p-3 bg-white text-orange-600 rounded-full shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wide">Email Us At</p>
                  <p className="text-lg font-bold break-all">snehaassociatesblr@gmail.com</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}