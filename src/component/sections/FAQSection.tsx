"use client";

import React, { useState } from 'react';

const categories = [
  'Getting Started',
];

const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  'Getting Started': [
    { question: 'What is SynthOS in one sentence?', answer: 'SynthOS is a DeFi aggregator that uses AI to deliver personalized crypto yield plans, so you can invest instantly.' },
    { question: 'What’s the main benefit of using SynthOS?', answer: 'You save time and avoid information overload—SynthOS brings you the best, most relevant yield plans in one place, tailored just for you.' },
    { question: 'How does SynthOS personalize my investment options?', answer: 'Our AI analyzes your wallet activity and preferences to recommend yield strategies that actually fit your goals and risk level.' },
    { question: 'Do I have to give up control of my assets?', answer: 'Nope! SynthOS is non-custodial, so you always retain control. We only suggest options you choose when and where to invest. We are not holding users money.' },
    { question: 'Is SynthOS only for experienced DeFi users?', answer: 'Not at all. Whether you’re a DeFi pro or just getting started, SynthOS simplifies your choices and gives you a clear path to earning yield.' },
    { question: 'How quickly can I start investing with SynthOS?', answer: 'As soon as you connect your wallet, you’ll see instant recommendations and can act right away, no lengthy setup or learning curve.' },
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
    <section className="py-20 xl:py-40 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-wide text-center text-gray-200 leading-none" style={{letterSpacing: '0.04em', fontFamily: 'Montserrat-Regular'}}>ANY QUESTION<span className="font-thin">?</span></h2>
          <div className="mt-1 text-4xl md:text-5xl xl:text-6xl font-bold uppercase text-[#F1F1F1]" style={{
            textShadow: '0 0 16px #ffe066, 0 0 32px #ffe066, 0 0 8px #ffe066',
            fontFamily: 'Montserrat-Regular',
            letterSpacing: '0.04em',
            lineHeight: 1.1
          }}>WE GOT YOU</div>
        </div>
        <div className="flex flex-col md:flex-row mx-auto gap-8">
          {/* Categories: Top on mobile, left on desktop */}
          <div className="w-full md:w-2/5 lg:w-1/5 mb-6 md:mb-0">
            <ul className="flex md:flex-col flex-row gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-2 md:mx-0 md:border-l border-gray-700 md:pl-6">
              {categories.map((cat) => (
                <li key={cat} className="flex-shrink-0 w-auto md:w-full">
                  <button
                    className={`w-auto md:w-full whitespace-nowrap text-center md:text-left py-3 px-4 rounded-lg transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-purple-600 text-white font-bold' 
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
          <div className="w-full md:w-3/5 lg:w-4/5 border-b border-gray-700">
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