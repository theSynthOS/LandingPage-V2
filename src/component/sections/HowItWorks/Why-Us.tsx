'use client'
import React, { useState, useRef, useMemo, useEffect } from 'react';
import GlowButton from '../../GlowButton';
import { useTransform, motion, useScroll } from 'framer-motion';
import ScrollCard from './ScrollCard';
import { stakeCards } from './CardText';

const WhyUsSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  

  // Scroll progress for cards with optimized performance
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Control when title should stop being sticky
  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !container.current) return;
      
      const containerRect = container.current.getBoundingClientRect();
      const containerHeight = container.current.offsetHeight;
      const singleCardHeight = containerHeight / stakeCards.length;
      
      // Calculate when we reach the last card (top of last card)
      const lastCardPosition = containerHeight - singleCardHeight;
      const scrollProgress = Math.abs(containerRect.top) / containerHeight;
      
      // When we reach approximately 80% through the container (start of last card area)
      if (scrollProgress >= 0.1) {
        titleRef.current.style.position = 'relative';
        titleRef.current.style.top = 'auto';
      } else {
        titleRef.current.style.position = 'sticky';
        titleRef.current.style.top = '5rem'; // top-20 equivalent
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-compute card information to avoid recalculations during renders
  const renderCards = useMemo(() => {
    return stakeCards.map((card, i) => {
      const targetScale = 1 - ((stakeCards.length - i) * 0.05);
      return (
        <ScrollCard
          key={i}
          i={i}
          title={card.title}
          description={card.description}
          icon={card.icon}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
          targetScale={targetScale}
          total={stakeCards.length}
        />
      );
    });
  }, [scrollYProgress]); // Only re-compute when scrollYProgress changes

  return (
    <section id="why-us" className="relative overscroll-none mt-24" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#150b39] via-[#150b39] via-[#030213] via-[#030213] to-[#030213]"></div>
        <div className="absolute w-1/2 h-screen top-1/3 left-1/4 rounded-full bg-purple-100/5 blur-[80px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/10 blur-[70px]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Sticky Title Container */}
        <div ref={titleRef} className="sticky top-20 z-50 transition-all duration-300">
          <div className="relative px-3">
            {/* Shadow gradient below the heading */}
            <div className="absolute top-[3rem] left-1/2 -translate-x-1/4 w-[30%] md:w-[50%] h-[120px] rounded-[50%] bg-purple-500/20 blur-[60px] -z-10"></div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[70%] md:w-[60%] h-[80px] rounded-[50%] bg-blue-400/10 blur-[50px] -z-10"></div>
            
            <h2 
              className="text-center text-4xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-2 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent" 
              style={{ 
                letterSpacing: '0.08em',
                fontFamily: 'Montserrat-Regular'
              }}
            >
                Why{" "}
                <span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>
                  SynthOS
                </span>
            </h2>
          </div>
        </div>
        
        {/* Scroll Cards Container - Optimized */}
        <div className="relative px-3">
          <div 
            ref={container} 
            className="relative min-h-[200vh] w-full will-change-transform perspective-[1200px] overflow-visible"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            {renderCards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 