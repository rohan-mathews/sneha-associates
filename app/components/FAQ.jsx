"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the construction cost per sq. ft. in Bengaluru?",
    answer: "Our premium construction packages start from roughly ₹1,900/sq. ft. depending on the materials (Standard vs. Luxury). We provide a detailed, transparent Bill of Quantities (BOQ) so you know exactly where every rupee goes."
  },
  {
    question: "How long does it take to complete a swimming pool at max?",
    answer: "Typically, a swimming pool project takes between 1 - 2  months to complete. We provide a strict project schedule at the start and share weekly progress updates via WhatsApp."
  },
  {
    question: "Do you handle swimming pool construction?",
    answer: "Yes! We are experts in swimming pool construction and waterproofing. We have built pools for luxury villas, hotels, and farmhouses across Karnataka with zero-leakage guarantees."
  },
  {
    question: "Do you assist with BBMP plan approval?",
    answer: "Absolutely. While we focus on construction, we have a network of liaison officers and architects who can handle the entire BBMP/BDA plan sanctioning process for you."
  },
  {
    question: "What kind of warranty do you provide?",
    answer: "We offer a 5-year warranty on our waterproofing services and a 1-year general maintenance period for construction defects. We build to last for generations."
  },
  {
    question: "Can I customize the materials used?",
    answer: "100%. Unlike other builders, we don't force specific brands on you. You can choose your preferred cement, tiles, or bathroom fittings, and we will adjust the budget accordingly."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Everything you need to know about building your dream home with Sneha Associates.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-neutral-900 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="p-2 bg-white dark:bg-neutral-800 rounded-full text-orange-500 transition-transform duration-300">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-neutral-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}