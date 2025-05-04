import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import GlowButton from '../GlowButton';

const CTASection = () => {
  return (
    <section className="py-12 md:py-24 shadow-blue-900/10 shadow-xl  bg-gradient-to-b from-[#060421] via-[#150b39] to-[#060421]">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center text-white">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/white-logo.png"
              alt="SynthOS Logo"
              width={500}
              height={500}
              className="object-contain w-[220px] md:w-[280px]"
            />
          </div>
          <h2 className="text-3xl md:text-[4rem] lg:text-[5.5rem] font-light mb-4">
            GET START WITH
            <br />
            YOUR <span className="text-white-800 " style={{ textShadow: '0 0 1px blue, 0 0 20px yellow, 0 0 10px orange' }}>DEFAI AGENT</span>
          </h2>
          <div className="flex justify-center mt-6 md:mt-8">
           
          <GlowButton className=' md:text-lg lg:text-xl '  >
            <span>Try Now</span>
            
          </GlowButton>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 