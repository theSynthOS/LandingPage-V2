'use client'
import React, { useState, useRef, useMemo, useEffect } from 'react';
import GlowButton from '../../GlowButton';
import { useTransform, motion, useScroll } from 'framer-motion';
import ScrollCard from './ScrollCard';
import { stakeCards } from './CardText';

const HowItWorksSection = () => {
  const [isProtocol, setIsProtocol] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  // Scroll progress for cards with optimized performance
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  // Scroll progress for controlling the title's sticky behavior
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  
  // Control sticky behavior based on scroll position
  useEffect(() => {
    if (!titleRef.current || !container.current) return;
    
    const handleScroll = () => {
      if (!titleRef.current || !container.current || !sectionRef.current) return;
      
      const containerRect = container.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const containerBottom = containerRect.bottom;
      
      // Make title sticky only when we're scrolling within the cards section
      if (containerBottom < 0 || sectionRect.bottom < window.innerHeight) {
        titleRef.current.style.position = 'relative';
        titleRef.current.style.top = 'auto';
      } else {
        titleRef.current.style.position = 'sticky';
        titleRef.current.style.top = '8px';
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
    <section id="how-it-works" className="scroll-mt-24 relative min-h-screen overscroll-none" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#150b39] via-[#150b39] via-[#030213] via-[#030213] to-[#030213]"></div>
        <div className="absolute w-1/2 h-screen top-1/3 left-1/4 rounded-full bg-purple-100/5 blur-[80px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/10 blur-[70px]"></div>
      </div>
      
      <div className="relative z-10">

        {/* Part 2 - Scroll Cards */}
        <div className="relative px-3">
          {/* Background effects for card section */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-[400px] rounded-full bg-purple-900/30 blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#090538] to-transparent opacity-70"></div>
            <div className="absolute w-full h-full bg-repeat opacity-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>

          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-5xl xl:text-6xl mb-8 text-white text-center font-bold z-20 py-4 backdrop-blur-md"
            style={{
              fontFamily: 'Montserrat-Regular',
              position: 'sticky',
              top: '8px'
            }}
          >
            <span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>
              SynthOS
            </span> is made for you who 👇🏻
          </motion.h1>
            
          {/* Scroll Cards Container - Optimized */}
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

export default HowItWorksSection; 