import React from 'react';
import HeroSection from '../component/sections/HeroSection';
import PartnershipSection from '../component/sections/PartnershipSection';
import HowItWorksSection from '../component/sections/HowItWorksSection';
import RoadmapSection from '../component/sections/RoadmapSection';
import TeamSection from '../component/sections/TeamSection';
import FAQSection from '../component/sections/FAQSection';
import CTASection from '../component/sections/CTASection';
import Footer from '../component/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnershipSection />
      <HowItWorksSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      
    </main>
  );
}
