import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of appliances do you repair?",
    answer: "At Appliance Vista, we specialize in a wide range of home appliances including washing machines (top-load, front-load, semi-automatic), refrigerators (single door, double door, side-by-side), air conditioners (split and window), microwave ovens, dishwashers, televisions, and more. Our technicians are trained to handle almost all major household brands."
  },
  {
    question: "Do you offer same-day repair services?",
    answer: "Yes, we understand that a broken appliance can disrupt your daily routine. We offer same-day repair services for bookings made before 2 PM. Our technicians usually arrive within 2 hours of your service request to diagnose and fix the issue promptly."
  },
  {
    question: "Are your technicians certified?",
    answer: "Absolutely. All our technicians are background-checked, highly trained, and certified experts in their respective fields. They have years of experience dealing with complex electrical and mechanical issues in modern home appliances."
  },
  {
    question: "Do you provide a warranty on your repairs?",
    answer: "Yes, we stand behind our work. We provide a standard 30-day warranty on all our labor and up to 90 days warranty on the spare parts we replace, depending on the component and brand. Your satisfaction and peace of mind are our top priorities."
  },
  {
    question: "What are your service charges?",
    answer: "Our diagnostic and visiting charges are very affordable. Once our technician inspects your appliance, they will provide a complete upfront cost estimate for the repair. We only proceed with the work once you approve the quote. There are no hidden costs."
  },
  {
    question: "Do you use genuine spare parts?",
    answer: "Yes, we only use 100% genuine and original spare parts sourced directly from manufacturers or authorized distributors. Using high-quality parts ensures that your appliance runs efficiently for a longer period."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Common Questions</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-500">Find quick answers to common queries about our appliance repair services, pricing, and warranties.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FaQuestionCircle className="text-secondary flex-shrink-0" />
                  <span className="font-bold text-gray-900 md:text-lg">{faq.question}</span>
                </div>
                {activeIndex === index ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-gray-400" />}
              </button>

              <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Our customer support team is available 24/7 to assist you with any specific queries you might have about your appliance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+14025089991" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg">Call Us Now</a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all">Contact Form</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;