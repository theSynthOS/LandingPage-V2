import React from 'react';

const RoadmapSection = () => {
  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Phase 1: Foundation',
      items: [
        'Platform Architecture',
        'Core Features Development',
        'Initial Testing'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'Phase 2: Growth',
      items: [
        'Advanced Features',
        'Beta Testing',
        'Partner Integration'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'Phase 3: Expansion',
      items: [
        'Global Launch',
        'Market Expansion',
        'Enhanced Features'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Phase 4: Innovation',
      items: [
        'AI Integration',
        'Advanced Analytics',
        'Enterprise Solutions'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Roadmap
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24">
                    <div className="text-blue-600 font-bold">{milestone.quarter}</div>
                  </div>
                  <div className="flex-grow pl-8 border-l-2 border-blue-200">
                    <h3 className="text-xl font-semibold mb-4">{milestone.title}</h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection; 