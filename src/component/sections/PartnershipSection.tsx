"use client";
 
import React, { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";
 
export function PartnershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section id="how-it-works" className="scroll-mt-24 relative overscroll-none" ref={sectionRef}>
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
    </section>
  );
}
 
const partners = [
  {
    icon: <Image src="/aave-logo.png" alt="Aave" width={120} height={60} className="object-contain h-16" />
  },
  {
    icon: <Image src="/compound.png" alt="Compound" width={120} height={60} className="object-contain h-16" />
  },
  {
    icon: <Image src="/scroll.webp" alt="Scroll" width={120} height={60} className="object-contain h-16" />
  },

];