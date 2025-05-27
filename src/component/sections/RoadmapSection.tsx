'use client'
import React from 'react';
import { VerticalCurveTimeline } from '../ui/vertical-curve-timeline';

const timelineMilestones = [
  {
    date: '2025_APRIL',
    title: 'Foundation Building',
    description: 'Laying the groundwork: upgrading our infrastructure and finalizing a modular agentic system to power everything ahead.',
    align: 'left' as const,
  },
  {
    date: '2025_MAY',
    title: 'Early Collaborations',
    description: 'Enhancing integrations, building core app features, and starting key collaborations with protocols.',
    align: 'right' as const,
  },
   {
    date: '2025_JUNE',
    title: 'SynthOS Testnet Launch',
    description: 'Opening up for early user testing—gathering real-world feedback .',
    align: 'left' as const,
  },
  {
    date: '2025_JULY',
    title: 'SynthOS Mainnet Launch',
    description: 'Official release of SynthOS Mainnet: live on mainnet with core features and yield agent support.',
    align: 'right' as const,
  },
  {
    date: '2025_AUGUST',
    title: 'Growth & Community',
    description: 'Welcoming early contributors, launching educational campaigns, and expanding through ambassador programs.',
    align: 'left' as const,
  },
];

const RoadmapSection = () => {
  return (
    <section className="relative pt-16 bg-[#0A0B14] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030213]"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-[#030213] via-purple-900/20 via-[#150b39] via-[#150b39] via-[#030213] via-[#030213] to-[#030213]"></div>
        <div className="absolute w-1/2 h-screen top-1/3 left-1/4 rounded-full bg-purple-100/5 blur-[80px]"></div>
        <div className="absolute w-1/3 h-1/4 top-1/3 right-0 rounded-full bg-blue-900/20 blur-[100px]"></div>
        <div className="absolute w-2/4 h-1/4 bottom-52 right-2/4 rounded-full bg-purple-500/10 blur-[70px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[80rem]">
        <div className="text-center mb-24">
          <h2 
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-2 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent" 
            style={{ 
              letterSpacing: '0.08em',
              fontFamily: 'Montserrat-Regular'
            }}
          >
              HOW IT STARTED
          </h2>
          <div 
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-wider uppercase mb-10 text-white"
            style={{
              letterSpacing: '0.08em', 
              fontFamily: 'Montserrat-Regular',
              textShadow: '0 0 1px blue, 0 0 20px yellow, 0 0 10px orange'
            }}
          >
            WHERE WE'RE GOING
          </div>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg font-light">
          From core builds to going live. Here's the playbook.
          </p>
        </div>

        <VerticalCurveTimeline milestones={timelineMilestones} />
      </div>
    </section>
  );
};

export default RoadmapSection; 