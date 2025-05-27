'use client'
import React from 'react';

const FlowSection = () => {
  const investmentSteps = [
    {
      step: 1,
      title: "Connect",
      description: "Log in with your social account or wallet",
      icon: "🔗"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: " AI analyzes your wallet to understand your investment patterns ",
      icon: "🧠"
    },
    {
      step: 3,
      title: "Explore ",
      description: "Browse AI-generated APY pairs tailored to your profile",
      icon: "🔍"
    },
    {
      step: 4,
      title: "Invest",
      description: "Select your preferred pair & invest with one click",
      icon: "💰"
    }
  ];

  return (
    <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className='mb-10 text-center items-center flex justify-center'>
        <h2
          className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-8 md:mb-12 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent text-center" 
          style={{ 
            letterSpacing: '0.05em',
            fontFamily: 'Montserrat-Regular'
          }}
        >
          Your Path to 
           <div 
            className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-10 text-white text-center"
            style={{
              letterSpacing: '0.08em', 
              fontFamily: 'Montserrat-Regular',
              textShadow: '0 0 1px blue, 0 0 20px yellow, 0 0 10px orange'
            }}
          >
            Smart Investing
          </div>
        </h2>
        </div>
       
        
        {/* Mobile view: vertical steps with center alignment */}
        <div className="md:hidden flex flex-col items-center">

          
          {investmentSteps.map((step, index) => (
            <div key={index} className="mb-16 flex flex-col items-center relative z-10">
              {/* Step circle */}
              <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              
              {/* Step content */}
              <div className='text-center px-4 max-w-xs'>
                <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop view: horizontal timeline */}
        <div className="hidden md:block relative ">
          {/* Timeline connector line */}
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gray-200 z-0"></div>
          
          {/* Steps */}
          <div className="flex justify-between relative z-10">
            {investmentSteps.map((step, index) => (
              <div key={index} className="flex-1 px-3 lg:px-4">
                <div className="flex flex-col items-center">
                  {/* Step number */}
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
  
                  
                  {/* Step content */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-center text-white">{step.title}</h3>
                  <p className="text-gray-400 text-center text-sm lg:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;