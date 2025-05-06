import React from 'react';
import HeroSection from '../component/sections/HeroSection';
import PartnershipSection from '../component/sections/PartnershipSection';
import HowItWorksSection from '../component/sections/HowItWorks/HowItWorksSection';
import RoadmapSection from '../component/sections/RoadmapSection';
import TeamSection from '../component/sections/TeamSection';
import FAQSection from '../component/sections/FAQSection';
import CTASection from '../component/sections/CTASection';
import Navbar from '../component/layout/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <section id="partners" className=" min-h-screen scroll-mt-24">
        <PartnershipSection />
      </section> */}
      <section id="how-it-works" className=" min-h-screen">
        <HowItWorksSection />
      </section>
      <section id="roadmap" className="scroll-mt-24">
        <RoadmapSection />
      </section>
      <section id="our-team" className="scroll-mt-24">
        <TeamSection />
      </section>
      <section id="faq" className=" scroll-mt-24">
        <FAQSection />
      </section>
      <CTASection />
      <Navbar />
    </main>
  );
}
