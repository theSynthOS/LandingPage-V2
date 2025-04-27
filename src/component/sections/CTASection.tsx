import React from 'react';
import Image from 'next/image';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8">
            <Image
              src="/SynthOS.svg"
              alt="SynthOS Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            GET START WITH
            <br />
            YOUR <span className="text-white-800 drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">DEFAI AGENT</span>
          </h2>
          <div className="flex justify-center mt-8">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-transparent bg-transparent text-black dark:text-white flex items-center space-x-2"
            >
              <span>Try Now</span>
              <FaArrowRight className="ml-2" />
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 