"use client";

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is SynthOS in one sentence?",
    answer: "SynthOS is a DeFi aggregator that uses AI to deliver personalized crypto yield plans, so you can invest instantly."
  },
  {
    question: "What is the main benefit of using SynthOS?",
    answer: "You save time and avoid information overload—SynthOS brings you the best, most relevant yield plans in one place, tailored just for you."
  },
  {
    question: "How does SynthOS personalize my investment options?",
    answer: "Our AI analyzes your wallet activity and preferences to recommend yield strategies that actually fit your goals and risk level."
  },
  {
    question: "Do I have to give up control of my assets?",
    answer: "Nope! SynthOS is non-custodial, so you always retain control. We only suggest options you choose when and where to invest. We are not holding users money."
  },
  {
    question: "Is SynthOS only for experienced DeFi users?",
    answer: "Not at all. Whether you're a DeFi pro or just getting started, SynthOS simplifies your choices and gives you a clear path to earning yield."
  },
  {
    question: "How quickly can I start investing with SynthOS?",
    answer: "As soon as you connect your wallet, you'll see instant recommendations and can act right away, no lengthy setup or learning curve."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 xl:py-40 text-white relative">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#150b39] via-[#150b39] via-[#030213] to-[#030213]"></div>
        <div className="absolute w-1/2 h-screen top-1/3 left-1/4 rounded-full bg-purple-100/5 blur-[80px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/10 blur-[70px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-wide text-center text-gray-200 leading-none" style={{letterSpacing: '0.04em', fontFamily: 'Montserrat-Regular'}}>ANY QUESTION<span className="font-thin">?</span></h2>
          <div className="mt-1 text-4xl md:text-5xl xl:text-6xl font-bold uppercase text-[#F1F1F1]" style={{
            textShadow: '0 0 16px #ffe066, 0 0 32px #ffe066, 0 0 8px #ffe066',
            fontFamily: 'Montserrat-Regular',
            letterSpacing: '0.04em',
            lineHeight: 1.1
          }}>WE GOT YOU</div>
        </div>
        
        <div className="max-w-4xl mx-auto border-b border-gray-700">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-6 py-6 border-t border-gray-700"
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
    </section>
  );
};

export default FAQSection; 