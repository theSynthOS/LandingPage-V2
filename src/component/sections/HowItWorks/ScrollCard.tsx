import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollCardProps {
  i: number;
  title: string;
  description: string;
  icon: any;
  progress: any;
  range: number[];
  targetScale: number;
  total: number;
}

const ScrollCard = ({ i, title, description, icon, progress, range, targetScale, total }: ScrollCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Set different initial rotation for each card
  const initialRotation = (i - Math.floor(total / 2)) * 3; // -6, -3, 0, 3, 6 degrees (for 5 cards)
  
  // Transform values based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  const rotate = useTransform(progress, range, [initialRotation, 0]); // All cards align to 0 rotation at end
  
  // Pre-generate dot indicators to avoid recalculating in render
  const dotIndicators = Array.from({ length: total }).map((_, index) => (
    <div 
      key={index} 
      className={`${
        index === i 
          ? 'w-6 rounded bg-purple-500/80 shadow-[0_0_10px_rgba(139,92,246,0.4)]' 
          : 'w-2 rounded-full bg-white/30'
      } h-2`}
    />
  ));
  
  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0 scroll-smooth will-change-transform"
    >
      <motion.div 
        style={{ 
          scale,
          rotate,
          filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))',
          willChange: 'transform, opacity',
        }} 
        className="flex flex-col relative h-[600px] md:h-[500px] md:w-[70%] lg:w-[50%] rounded-[25px] p-[20px] md:p-[50px] origin-center bg-gradient-to-br bg-purple-800/50  backdrop-blur-2xl border border-purple-500/30 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: 'easeOut'
        }}
        layoutId={`card-${i}`}
      >
        {/* Card content - Optimize with memo or simplified DOM */}
        <div className="flex h-full mt-[10px] gap-[50px] items-center translate-z-0">
          <div className="w-full text-center">
            <div className="flex justify-center mb-2">{icon}</div>
            <h2 
              className="text-white text-center m-0 text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ 
                textShadow: '0 0 10px yellow, 0 0 30px white' 
              }}
            >
              {title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mt-4">{description}</p>
          </div>
        </div>

        {/* Progress indicators optimized: simplified DOM structure */}
        <div className="absolute bottom-5 right-5 text-sm text-white/60">
          {i + 1} / {total}
        </div>

        {/* Dot indicators - using pre-generated array */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {dotIndicators}
        </div>
      </motion.div>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ScrollCard); 