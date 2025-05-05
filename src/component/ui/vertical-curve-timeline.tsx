'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

export const VerticalCurveTimeline = ({ milestones }: { milestones: TimelineMilestone[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [mobileHeight, setMobileHeight] = useState(0);
  
  // Get container height for straight line in mobile view
  useEffect(() => {
    if (mobileContainerRef.current) {
      setMobileHeight(mobileContainerRef.current.scrollHeight);
    }
    
    // Update height on resize
    const handleResize = () => {
      if (mobileContainerRef.current) {
        setMobileHeight(mobileContainerRef.current.scrollHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Generate SVG path for the vertical S-curve (desktop only)
  const generatePath = () => {
    const path: string[] = [];
    const spacing = 1200 / (milestones.length - 1); // Reduced spacing for faster navigation
    
    milestones.forEach((_, i) => {
      const y = 180 + (i * spacing); // Consistent y position
      let x;
      if (i % 2 === 0) {
        x = 600; // Left points
      } else {
        x = 800; // Right points
      }
      
      if (i === 0) {
        path.push(`M${x},${y}`);
      } else {
        const prevY = 180 + ((i - 1) * spacing); // Match the y-coordinate calculation
        const prevX = i % 2 === 1 ? 600 : 800;
        
        // Use cubic bezier curve for smooth S-curve
        const controlY1 = prevY + (y - prevY) * 0.5;
        const controlY2 = prevY + (y - prevY) * 0.5;
        path.push(`C${prevX},${controlY1} ${x},${controlY2} ${x},${y}`);
      }
    });
    
    return path.join(' ');
  };
  
  const pathString = generatePath();
  
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);
  
  // Desktop timeline scroll tracking with adjusted offsets for faster progression
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end 40%"] // Changed from "start 85%", "end center" for faster progression
  });
  
  // Mobile timeline scroll tracking with adjusted offsets
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start 98%", "end 30%"] // Changed from "start 95%", "end 20%" for faster progression
  });
  
  // Transform scrollYProgress to pathLength for desktop
  const pathDrawn = useTransform(desktopScrollProgress, [0, 0.85], [0, pathLength]); // Changed from [0, 0.98] for faster line drawing
  const dashOffset = useTransform(pathDrawn, (value: number) => pathLength - value);
  const offsetDistance = useTransform(desktopScrollProgress, [0, 0.85], ['0%', '100%']); // Changed from [0, 0.98] for faster dot movement
  
  // For the straight line (mobile)
  const lineHeight = useTransform(mobileScrollProgress, [0, 0.85], [0, mobileHeight]); // Changed from [0, 1] for faster line growth
  const lineOpacity = useTransform(mobileScrollProgress, [0, 0.05], [0, 1]); // Changed from [0, 0.1] for faster fade-in
  
  // Update active index based on scroll progress
  useEffect(() => {
    // For desktop
    const desktopUnsubscribe = desktopScrollProgress.on('change', (value) => {
      const adjustedValue = Math.min(value * 1.15, 1); // Changed from 1.05 to activate milestones earlier
      const newIndex = Math.floor(adjustedValue * milestones.length);
      setActiveIndex(Math.min(newIndex, milestones.length - 1));
    });
    
    // For mobile
    const mobileUnsubscribe = mobileScrollProgress.on('change', (value) => {
      const adjustedValue = Math.min(value * 1.15, 1); // Changed from 1.05 to activate milestones earlier
      const newIndex = Math.floor(adjustedValue * milestones.length);
      setActiveIndex(Math.min(newIndex, milestones.length - 1));
    });
    
    return () => {
      desktopUnsubscribe();
      mobileUnsubscribe();
    };
  }, [desktopScrollProgress, mobileScrollProgress, milestones.length]);
  
  return (
    <div className="relative">
      {/* Desktop View - Curved Timeline */}
      <div className="relative min-h-[1400px] pb-[40vh] hidden md:block" ref={containerRef}> {/* Reduced height from 1800px to 1400px, pb from 50vh to 40vh */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1400 1600" // Reduced height from 2000 to 1600
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin slice"
          >
            {/* Background path */}
            <path
              d={pathString}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            
            {/* Animated path */}
            <motion.path
              ref={pathRef}
              d={pathString}
              stroke="url(#gradientColors)"
              strokeWidth="4"
              fill="none"
              strokeDasharray={pathLength}
              style={{
                strokeDashoffset: dashOffset
              }}
              transition={{ duration: 0.2 }} // Added faster transition
            />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradientColors" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Milestone dots */}
            {milestones.map((milestone, i) => {
              const isActive = i <= activeIndex;
              const spacing = 1200 / (milestones.length - 1); // Reduced spacing to match path
              const y = 180 + (i * spacing); // Consistent y position
              const x = i % 2 === 0 ? 600 : 800;
              
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="10"
                  fill={isActive ? "#ffe066" : "#333"}
                  className="transition-all duration-200" // Changed from 300 to 200ms for faster transition
                  style={{
                    filter: isActive ? "drop-shadow(0 0 16px #ffe066) drop-shadow(0 0 32px #ffe066)" : "none"
                  }}
                />
              );
            })}
            
            {/* Following dot */}
            {pathLength > 0 && (
              <motion.circle
                r="12"
                fill="#ffe066"
                style={{
                  offsetPath: `path('${pathString}')`,
                  offsetDistance: offsetDistance,
                  filter: "drop-shadow(0 0 16px #ffe066) drop-shadow(0 0 32px #ffe066)",
                }}
                transition={{ duration: 0.1 }} // Added faster transition
              />
            )}
          </svg>
        </div>
        
        {/* Desktop View - Content Boxes */}
        <div>
          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0;
            const spacing = 1200 / (milestones.length - 1); // Reduced spacing to match path
            const y = 180 + (i * spacing); // Consistent y position
            const x = isLeft ? 600 : 800;
            
            return (
              <div
                key={i}
                className={`absolute w-[350px] transition-opacity duration-300 ${
                  i <= activeIndex ? 'opacity-100' : 'opacity-40'
                }`} // Changed from 500 to 300ms for faster transition
                style={{
                  left: `${(x / 1400) * 100}%`,
                  top: `${(y / 1600) * 100}%`, // Adjusted from 2000 to 1600 to match viewBox
                  transform: `translate(${isLeft ? '-110%' : '10%'}, -50%)`,
                }}
              >
                <div className={`flex flex-col ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div
                    className="text-[#ffe066] text-2xl font-light tracking-widest mb-2"
                    style={{ fontFamily: 'TT Travels Next Trial Variable, sans-serif' }}
                  >
                    {milestone.date}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 max-w-[280px]">{milestone.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile View - Straight Timeline (Aceternity style) */}
      <div className="md:hidden pb-10" ref={mobileContainerRef}> {/* Reduced padding from pb-20 to pb-10 */}
        <div className="relative">
          {/* Vertical line - positioned first for correct z-index */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[2px] overflow-hidden"
          >
            {/* Add a static background line */}
            <div className="absolute inset-0 w-full h-full bg-[rgba(255,255,255,0.1)]"></div>
            
            {/* Add the gradient animated line */}
            <motion.div
              style={{
                height: lineHeight,
                opacity: lineOpacity,
                background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.6) 0%, rgba(236, 72, 153, 0.6) 50%, rgba(139, 92, 246, 0.6) 100%)',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          {/* Content items */}
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`flex justify-start py-6 transition-opacity duration-300 ${
                i <= activeIndex ? 'opacity-100' : 'opacity-40'
              }`} // Changed from py-10 to py-6 for more compact layout, and 500ms to 300ms for faster transition
            >
              <div className="flex-shrink-0 relative">
                <div className="h-8 w-8 absolute left-2 top-2 rounded-full bg-[#0A0B14] flex items-center justify-center">
                  <div 
                    className={`h-4 w-4 rounded-full transition-all duration-200 ${i <= activeIndex ? 'bg-[#ffe066]' : 'bg-gray-600'}`} // Changed from 300ms to 200ms
                    style={{
                      filter: i <= activeIndex ? "drop-shadow(0 0 8px #ffe066)" : "none"
                    }}
                  />
                </div>
              </div>

              <div className="pl-16 pr-4 flex-1">
                <h3 className="text-lg mb-1 text-left font-bold text-[#ffe066]">
                  {milestone.date}
                </h3>
                <h4 className="text-lg mb-2 text-left font-bold text-white">
                  {milestone.title}
                </h4>
                <p className="text-sm text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 