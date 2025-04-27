"use client";

import React, { useState } from 'react';

const categories = [
  'Getting Started',
  'Using Agents',
  'SDK & Integration',
  'User Experience',
];

const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  'Getting Started': [
    { question: 'What is SynthOS in one sentence?', answer: 'Dummy answer for signing up.' },
    { question: 'Do I need to know smart contracts to use this?', answer: 'Dummy answer for free trial.' },
    { question: 'Who is SynthOS built for — protocols or users?', answer: 'Dummy answer for requirements.' },
  ],
  'Using Agents': [
    { question: 'What are SynthOS agents, exactly?', answer: 'Dummy answer for creating agent.' },
    { question: 'How does agent selection work in simple mode?', answer: 'Dummy answer for customizing agents.' },
    { question: 'Can I customize or build my own agent?', answer: 'Dummy answer for monitoring.' },
  ],
  'SDK & Integration': [
    { question: 'How do I integrate SynthOS with my protocol?', answer: 'Dummy answer for SDK.' },
    { question: 'What chains does AgentKit currently support?', answer: 'Dummy answer for integration.' },
    { question: 'How long does it take to go live?', answer: 'Dummy answer for languages.' },
  ],
  'User Experience': [
    { question: 'What’s the difference between simple and advanced mode?', answer: 'Dummy answer for feedback.' },
    { question: 'Can I test SynthOS before deploying on mainnet?', answer: 'Dummy answer for UI customization.' },
    { question: 'How do users know they’re getting the best strategy?', answer: 'Dummy answer for dark mode.' },
  ],
};

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = categoryFaqs[selectedCategory];

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