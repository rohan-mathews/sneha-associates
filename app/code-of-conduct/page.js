import Link from "next/link";
import { ArrowLeft, Heart, Shield, Users } from "lucide-react";

export default function CodeOfConduct() {
  return (
    <main className="pt-32 pb-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-neutral-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-900">Code of Conduct</h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            At Sneha Associates, building trust is as important as building structures. We are committed to maintaining the highest standards of professionalism, safety, and integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <Shield className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Integrity & Honesty</h3>
              <p className="text-gray-700">We provide transparent pricing with no hidden costs. We do not cut corners on materials or safety.</p>
            </div>

            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <Users className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Respect for Property</h3>
              <p className="text-gray-700">We treat your home like our own. Our teams are trained to maintain a clean workspace and respect your privacy.</p>
            </div>

            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <Heart className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Zero Tolerance</h3>
              <p className="text-gray-700">We have a zero-tolerance policy towards discrimination, harassment, or unethical behavior from our staff or contractors.</p>
            </div>
            
             <div className="p-6 bg-neutral-900 text-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Reporting Issues</h3>
              <p className="text-gray-300 text-sm mb-4">If you witness any behavior that violates this code, please contact management immediately.</p>
              <a href="tel:+918867694625" className="text-orange-500 font-bold hover:underline">Call Management &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}