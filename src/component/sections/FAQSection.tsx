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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-2xl text-blue-600">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 