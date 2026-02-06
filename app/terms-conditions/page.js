import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <main className="pt-32 pb-20 bg-neutral-50 text-neutral-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-neutral-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">Terms & Conditions</h1>
          <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest font-bold">Last Updated: February 2026</p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">1. Scope of Services</h2>
              <p>Sneha Associates provides civil construction, waterproofing, swimming pool construction, and renovation services in Bengaluru. All online quotes are estimates and are subject to final site inspection and measurements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">2. Payment Terms</h2>
              <p>Payment schedules will be outlined in your specific project contract. We reserve the right to pause or halt work if payments are not made according to the agreed milestones.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">3. Cancellations & Refunds</h2>
              <p>Project cancellations must be made in writing. Any costs already incurred for materials, labor, or transportation will be deducted from the advance payment before any refund is processed.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">4. Warranty</h2>
              <p>We provide specific warranties for waterproofing and construction structural integrity as defined in your final handover document. Warranties are void if the structure is altered by third parties.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}