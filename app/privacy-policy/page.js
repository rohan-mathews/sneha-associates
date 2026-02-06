import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-neutral-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">Privacy Policy</h1>
          <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest font-bold">Last Updated: February 2026</p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm">01</span> Information We Collect
              </h2>
              <p>We collect information you provide directly to us, specifically your name, phone number, and email address when you fill out our contact forms or request a quote via WhatsApp. We do not use cookies to track your personal browsing history.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm">02</span> How We Use Your Data
              </h2>
              <p>We use your information solely to communicate with you regarding your civil construction enquiries, site visits, and service quotes. We strictly <strong>do not sell, rent, or share</strong> your data with third-party advertisers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-3">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm">03</span> Data Security
              </h2>
              <p>We implement industry-standard security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>
            </section>

            <div className="p-6 bg-neutral-100 rounded-xl mt-8">
              <h3 className="font-bold text-neutral-900 mb-2">Have questions?</h3>
              <p>Contact our data officer at <a href="mailto:snehaassociatesblr@gmail.com" className="text-orange-600 font-bold hover:underline">snehaassociatesblr@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}