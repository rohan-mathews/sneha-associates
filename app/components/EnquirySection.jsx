"use client";
import { Phone, Mail, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EnquirySection() {
  return (
    // ✅ 1. SECTION: Fully Transparent so stars are visible
    <section className="py-24 bg-transparent border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">

        {/* Header with gradient text */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Speak to Us.</span>
          </motion.h2>
          <p className="text-gray-400">Direct access to our founders for urgent queries.</p>
        </div>

        {/* ✅ 2. THE GLASS CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl group">
            
            {/* Ambient Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-600/30 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: Founder Profile */}
              <div className="flex items-center gap-6 md:border-r border-white/10 md:pr-12">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 p-[2px]">
                    <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                       <User size={40} className="text-gray-400" />
                       {/* If you have a real photo, use: <Image src="..." fill /> */}
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white">C J Mathews</h3>
                  <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">Founder</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "I personally oversee all major projects to ensure quality isn't compromised."
                  </p>
                </div>
              </div>

              {/* Right: Contact Actions */}
              <div className="space-y-6">
                
                {/* Phone Card */}
                <a href="tel:+918867694625" className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group/link border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-500 group-hover/link:bg-orange-600 group-hover/link:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Directly</p>
                    <p className="text-xl font-bold text-white group-hover/link:text-orange-400 transition-colors">+91 88676 94625</p>
                  </div>
                  <ArrowRight className="ml-auto text-white/20 group-hover/link:text-white transition-colors" size={20} />
                </a>

                {/* Email Card */}
                <a href="mailto:snehaassociatesblr@gmail.com" className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 transition-all group/link border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-500 group-hover/link:bg-orange-600 group-hover/link:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Support</p>
                    <p className="text-lg font-bold text-white group-hover/link:text-orange-400 transition-colors break-all">snehaassociatesblr@gmail.com</p>
                  </div>
                  <ArrowRight className="ml-auto text-white/20 group-hover/link:text-white transition-colors" size={20} />
                </a>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}