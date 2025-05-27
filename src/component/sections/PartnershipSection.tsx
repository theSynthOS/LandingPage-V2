"use client";
 
import React, { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";
 
export function PartnershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section id="partners" className="scroll-mt-24 relative overscroll-none py-20" ref={sectionRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#150b39] via-[#150b39] via-[#030213] to-[#030213]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/10 blur-[70px]"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-24">
          <h2 
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-2 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent" 
            style={{ 
              letterSpacing: '0.08em',
              fontFamily: 'Montserrat-Regular'
            }}
          >
              Our{" "}
              <span className="text-white" style={{ textShadow: '0 0 10px white, 0 0 40px yellow, 0 0 30px orange' }}>
                Partners
              </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light">
            We are proud to partner with these amazing companies.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <InfiniteMovingCards
            items={partners}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
 
const partners = [
  {
    icon: <Image src="/Aave.webp" alt="Aave" width={120} height={80} className="object-contain h-20" />
  },
  {
    icon: <Image src="/compound.png" alt="Compound" width={120} height={80} className="object-contain h-20" />
  },
  {
    icon: <Image src="/scroll-black.png" alt="Scroll" width={120} height={80} className="object-contain h-20" />
  },
];