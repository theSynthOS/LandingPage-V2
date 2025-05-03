'use client'
import React, { useState } from 'react';
import GlowButton from '../GlowButton';

const HowItWorksSection = () => {
  const [isProtocol, setIsProtocol] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  
  // Toggle switch handler
  const handleToggle = () => {
    setIsProtocol(!isProtocol);
    setSelectedFeature(0); // Reset selected feature when switching modes
  };

  // Features based on toggle state
  const features = isProtocol 
    ? ["Context-Aware Agents", "AgentKit SDK"] 
    : ["Simple", "Advanced"];

  // Video content based on selected feature and toggle state
  const getVideoContent = () => {
    if (isProtocol) {
      return selectedFeature === 0 
        ? "Video content for Context-Aware Agents (Protocol)" 
        : "Video content for AgentKit SDK (Protocol)";
    } else {
      return selectedFeature === 0 
        ? "Video content for Simple mode (User)" 
        : "Video content for Advanced mode (User)";
    }
  };

  return (
    <section id="how-it-works" className="scroll-mt-24 relative min-h-screen py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#060421] "></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#060421] via-[#150b39] to-[#060421]"></div>
        <div className="absolute w-1/2 h-screen top-1/3 left-1/4 rounded-full bg-purple-100/10 blur-[120px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/30 blur-[150px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/20 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        {/* Toggle Switch */}
        <div className="flex justify-center items-center mb-12">
          <div className="backdrop-blur-sm border border-purple-400/50 rounded-full py-2 px-4 md:px-10 inline-flex items-center shadow-sm shadow-purple-400">
            {/* Make User text clickable */}
            <button 
              onClick={() => setIsProtocol(false)}
              className={`text-lg md:text-xl mr-4 transition-all duration-300 ${
                !isProtocol 
                  ? 'text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              User
            </button>
            
            {/* Toggle switch */}
            <button 
              onClick={handleToggle}
              className="relative inline-flex h-8 w-16 items-center rounded-full border-2 border-purple-500/70 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
              aria-checked={isProtocol}
              role="switch"
            >
              <span className="sr-only">Toggle Protocol/User</span>
              <span 
                className={`
                  ${isProtocol ? 'translate-x-9 bg-purple-500' : 'translate-x-1 bg-purple-500'} 
                  inline-block h-5 w-5 transform rounded-full transition-transform duration-300 ease-in-out shadow-[0_0_6px_rgba(255,255,255,0.8)]
                `}
              />
            </button>
            
            {/* Make Protocol text clickable */}
            <button 
              onClick={() => setIsProtocol(true)}
              className={`text-lg md:text-xl ml-4 transition-all duration-300 ${
                isProtocol 
                  ? 'text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Protocol
            </button>
          </div>
        </div>
        
        {/* Main Title - Conditional based on toggle state */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-white text-center font-bold" style={{fontFamily: 'Montserrat-Regular'}}>
          {isProtocol ? (
            <>Build Your <span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>Agent</span> Stack</>
          ) : (
            <>DeFi made <span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>conversational</span></>
          )}
        </h1>
        
        {/* Subtext - Conditional based on toggle state */}
        <p className="text-white/80 text-xl md:text-2xl text-center mb-8 max-w-4xl mx-auto">
          {isProtocol ? "Users go brrrr..." : "Invest and actually forget"}
        </p>
        
        {/* Features Section - Make features clickable */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
            {features.map((feature, index) => (
              <GlowButton 
                key={index} 
                onClick={() => setSelectedFeature(index)}
                className={`w-auto rounded-full transition-all duration-700 text-lg md:text-xl text-center text-nowrap ${
                  selectedFeature === index 
                    ? 'text-purple-100 bg-purple-700/50 shadow-xl shadow-purple-200 ' 
                    : 'text-purple-300/80 hover:text-white bg-purple-900/10 hover:bg-blue-700/20'
                }`}
              >
                {feature}
              </GlowButton>
            ))}
          </div>
        </div>
        
        {/* Video Section - Dynamic content based on selected feature */}
        <div className="border border-gray-700/50 backdrop-blur-sm bg-black/20 rounded-xl p-6 aspect-video max-w-5xl mx-auto shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          <div className="w-full h-full flex flex-col items-center justify-center text-white/80 text-xl">
            <div className="bg-purple-500/10 border border-purple-500/30 px-6 py-3 rounded-lg mb-4">
              {isProtocol ? 'Protocol' : 'User'} &gt; {features[selectedFeature]}
            </div>
            <p className="text-center max-w-2xl">
              {getVideoContent()}
            </p>
          </div>
        </div>

      {/* Part 2 */}
      <h1 className='text-4xl md:text-5xl xl:text-6xl mb-8 text-white text-center font-bold mt-20' style={{fontFamily: 'Montserrat-Regular'}}><span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>SynthOS</span> is made for you who 👇🏻</h1>
      
      </div>
    </section>
  );
};

export default HowItWorksSection; 