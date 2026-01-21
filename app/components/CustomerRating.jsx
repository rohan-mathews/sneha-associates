import { Star } from 'lucide-react';

export default function CustomerRatings() {
  return (
    <div className="bg-neutral-50 py-20 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-bold mb-8 text-neutral-600 tracking-widest uppercase text-sm">Customer Feedback</h2>
        
        <div className="bg-white px-8 py-10 rounded-3xl shadow-xl inline-block max-w-2xl w-full border border-gray-100">
          <div className="flex flex-col items-center">
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-2">Excellent Quality</h3>
            
            {/* Star Rating */}
            <div className="flex items-center gap-2 my-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-orange-500 fill-orange-500" />
              ))}
            </div>
            
            <p className="text-gray-500 mb-8 text-lg">Rated <strong>4.8/5</strong> based on client reviews</p>
            
            {/* Justdial Link Button */}
            <a 
              href="https://www.justdial.com/Bangalore/Sneha-Associates-Near-Hennur-Bus-Depot-Hbr-Layout/080PXX80-XX80-180511133523-L7Q3_BZDET" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0076d7] hover:bg-[#0065b8] text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg group"
            >
              <div className="w-8 h-8 bg-white text-[#0076d7] rounded-full flex items-center justify-center font-black text-xs">JD</div>
              Read Reviews on Justdial
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}