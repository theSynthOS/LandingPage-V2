import React from 'react';
import HeroSection from '../component/sections/HeroSection';
import {PartnershipSection} from '../component/sections/PartnershipSection';
import WhyUsSection from '../component/sections/HowItWorks/Why-Us';
import RoadmapSection from '../component/sections/RoadmapSection';
import FlowSection from '../component/sections/FlowSection';
import FAQSection from '../component/sections/FAQSection';
import CTASection from '../component/sections/CTASection';
import Navbar from '../component/layout/Navbar';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <section id="partners" className="scroll-mt-24">
        <PartnershipSection />
      </section>
      <section id="why-us" className=" ">
        <WhyUsSection />
      </section>
      <section id="roadmap" className="scroll-mt-24">
        <RoadmapSection />
      </section>
      <section id="how-it-works" className="scroll-mt-24">
        <FlowSection />
      </section>
      <section id="faq" className=" scroll-mt-24">
        <FAQSection />
      </section>
      <CTASection />
      <Navbar />
    </main>
  );
}
