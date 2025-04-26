import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your needs and requirements to understand your goals.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a detailed roadmap and strategy for implementation.',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our team builds your solution using cutting-edge technology.',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We deploy your solution and ensure everything runs smoothly.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 