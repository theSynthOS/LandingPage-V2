import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-32">
       <div className="absolute inset-0 overflow-hidden z-0">
         <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted>
           <source src="/bg-heroSection.mp4" type="video/mp4" />
         </video>
       </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold mb-6 bg-clip-text text-white" style={{fontFamily: 'Montserrat-LightItalic'}}>No-code </h1>
          <h1 className="text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold mb-6 bg-clip-text text-white text-nowrap " style={{fontFamily: 'Montserrat-LightItalic'}}>
            <span className="text-white" style={{ textShadow: '0 0 1px blue, 0 0 20px yellow, 0 0 10px orange' }}>AI agents </span> for DeFi
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-white mb-8 mt-14">
            SynthOS makes DeFi plug-and-play. Deploy intelligent, verifiable agents that automate your protocol logic in secure enclaves. Let users express intent, and let agents do the rest.
          </p>
          
          {/* Launch App Button - Visible only on mobile */}
          <div className="mt-8 md:hidden">
            <Link href="#" className="inline-block px-10 py-3 rounded-full bg-transparent text-white border border-gray-600 hover:bg-gray-800 transition duration-300">
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 