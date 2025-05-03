"use client";

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including web development, mobile apps, cloud solutions, and digital transformation consulting.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A typical project can take anywhere from 4-12 weeks, but we\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive support and maintenance services to ensure your solution continues to perform optimally after launch.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models tailored to your specific needs. Contact us for a detailed quote based on your requirements.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices, conduct thorough testing, and maintain clear communication throughout the development process.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[56px] md:text-[80px] font-light tracking-wide text-center text-gray-200 leading-none" style={{letterSpacing: '0.04em'}}>ANY QUESTION<span className="font-thin">?</span></h2>
          <div className="mt-1 text-[56px] md:text-[80px] font-light uppercase text-[#F1F1F1]" style={{
            textShadow: '0 0 16px #ffe066, 0 0 32px #ffe066, 0 0 8px #ffe066',
            letterSpacing: '0.04em',
            lineHeight: 1.1
          }}>WE GOT YOU</div>
        </div>
        <div className="flex flex-col md:flex-row mx-auto gap-8">
          {/* Categories: Top on mobile, left on desktop */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <ul className="flex md:flex-col flex-row gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-2 md:mx-0 md:border-l border-gray-700 md:pl-6">
              {categories.map((cat) => (
                <li key={cat} className="flex-shrink-0 w-auto md:w-full">
                  <button
                    className={`w-auto md:w-full whitespace-nowrap text-center md:text-left py-3 px-4 rounded-lg transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-[#ffe066] text-gray-900 font-bold' 
                        : 'bg-gray-800 text-gray-300 hover:bg-[#ffe066] hover:text-gray-900'
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOpenIndex(null);
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Questions: Bottom on mobile, right on desktop */}
          <div className="w-full md:w-4/5 border-b border-gray-700">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-left px-6 py-14 border-t border-gray-700"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-[#ffe066]' : 'text-white'}`}>
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#ffe066]">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                    style={{
                      transitionProperty: 'max-height, opacity, margin-top',
                    }}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 