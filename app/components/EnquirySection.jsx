import { Phone, Mail, User } from "lucide-react";

export default function EnquirySection() {
  return (
    <div className="bg-orange-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Got Questions? Speak to Us Directly.</h2>
        
        <div className="bg-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto backdrop-blur-md border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-orange-600 mb-5 shadow-lg">
                <User size={48} />
              </div>
              <h3 className="text-2xl font-bold">C J Mathews</h3>
              <p className="opacity-90 text-sm uppercase tracking-wider font-medium mt-1">Founder</p>
            </div>

            <div className="hidden md:block w-px h-32 bg-white/30"></div>

            <div className="flex flex-col gap-6 text-left w-full md:w-auto">
              <a href="tel:+918867694625" className="flex items-center gap-5 hover:bg-white/10 p-3 rounded-2xl transition-all group">
                <div className="p-4 bg-white text-orange-600 rounded-full shadow-md group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wide font-medium">Call for Enquiry</p>
                  <p className="text-2xl font-bold">+91 88676 94625</p>
                </div>
              </a>

              <a href="mailto:snehaassociatesblr@gmail.com" className="flex items-center gap-5 hover:bg-white/10 p-3 rounded-2xl transition-all group">
                <div className="p-4 bg-white text-orange-600 rounded-full shadow-md group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wide font-medium">Email Us At</p>
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