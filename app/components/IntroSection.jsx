export default function IntroSection() {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h4 className="text-orange-600 font-bold uppercase text-sm tracking-widest mb-2">Why Choose Sneha Associates?</h4>
      <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-8">
        Precision. Speed. Perfection.
      </h2>
      <p className="max-w-3xl mx-auto text-neutral-600 leading-relaxed mb-12">
        Based in Sudhama Nagar, Bengaluru, we have built a reputation for delivering high-end flooring solutions. 
        Whether it is a single bathroom renovation or a 10,000 sq ft commercial contract, we treat every inch with the same level of care.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
        <div>
          <span className="block text-4xl font-bold text-neutral-900 mb-1">20+</span>
          <span className="text-sm text-neutral-500">Years Experience</span>
        </div>
        <div>
          <span className="block text-4xl font-bold text-neutral-900 mb-1">500+</span>
          <span className="text-sm text-neutral-500">Projects Done</span>
        </div>
        <div>
          <span className="block text-4xl font-bold text-neutral-900 mb-1">100%</span>
          <span className="text-sm text-neutral-500">On-Time Delivery</span>
        </div>
        <div>
          <span className="block text-4xl font-bold text-neutral-900 mb-1">4.8</span>
          <span className="text-sm text-neutral-500">JustDial Rating</span>
        </div>
      </div>
    </div>
  );
}