import { useRef } from 'react';
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
  
  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0 scroll-smooth"
    >
      <motion.div 
        style={{ 
          scale,
          rotate,
          filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))',
        }} 
        className="flex flex-col relative h-[600px] md:h-[500px] md:w-[70%] lg:w-[50%] rounded-[25px] p-[20px] md:p-[50px] origin-center bg-gradient-to-br from-[#4E37FF]/50  via-[#09092F]/100 to-[#09092F]/100  backdrop-blur-2xl border border-purple-500/30 shadow-black/30 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex h-full mt-[10px] gap-[50px] items-center">
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
            <p className="text-xl text-white/80 leading-relaxed mt-4">{description}</p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-5 right-5 text-sm text-white/60">
          {i + 1} / {total}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <div 
              key={index} 
              className={`transition-all duration-300 ease-in-out ${
                index === i 
                  ? 'w-6 rounded bg-purple-500/80 shadow-[0_0_10px_rgba(139,92,246,0.4)]' 
                  : 'w-2 rounded-full bg-white/30'
              } h-2`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollCard; 