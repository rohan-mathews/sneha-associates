import { Target, Eye, Award, History } from "lucide-react";

export default function IntroSection() {
  return (
    <div className="container mx-auto px-6 py-20">
      
      {/* 1. Main About Us Narrative */}
      <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6">
          <h4 className="text-orange-600 font-bold uppercase text-sm tracking-widest shrink-0">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
            Building Trust Since 2005
          </h2>
        </div>

        <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
          <p>
            Founded in 2005, <strong>Sneha Associates</strong> is a trusted name in the field of contracting and building services, committed to delivering high-quality, reliable, and cost-effective construction solutions. With nearly two decades of industry experience, we have successfully executed projects of varying scales while maintaining the highest standards of workmanship and professionalism.
          </p>
          <p>
            At Sneha Associates, we specialize in providing comprehensive construction services, including residential, commercial, and specialized contracting works. Our strength lies in our experienced team, attention to detail, and a client-centric approach that ensures every project is completed on time and to exact specifications.
          </p>
          <p>
            We believe that quality construction is built on strong foundations of trust, transparency, and technical expertise. From planning to execution, we work closely with our clients to understand their requirements and transform their vision into durable, functional, and aesthetically pleasing structures.
          </p>
          <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl italic text-neutral-800">
            "Over the years, Sneha Associates has earned a reputation for reliability, efficient project management, and long-lasting results. Our commitment to quality materials, skilled workmanship, and customer satisfaction continues to drive our growth and success."
          </div>
          <p>
            With a focus on excellence and continuous improvement, Sneha Associates remains dedicated to building spaces that stand the test of time.
          </p>
        </div>
      </div>

      {/* 2. Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Mission Card */}
        <div className="bg-neutral-900 text-white p-10 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-6">
              <Target size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to deliver high-quality construction and contracting services that exceed client expectations through reliability, technical expertise, and timely execution. We are committed to maintaining the highest standards of workmanship, using quality materials, and following best industry practices to ensure durable and cost-effective solutions. By focusing on customer satisfaction, transparency, and continuous improvement, we aim to build long-term relationships based on trust and performance.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-white border border-gray-200 p-10 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye size={120} className="text-orange-600" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
              <Eye size={24} className="text-orange-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our vision is to be a leading and trusted construction service provider, recognized for quality, integrity, and excellence in execution. We aspire to create sustainable, functional, and aesthetically strong structures that stand the test of time. Through innovation, skilled manpower, and a client-focused approach, we aim to consistently grow while contributing positively to the built environment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}