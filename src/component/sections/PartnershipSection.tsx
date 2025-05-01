import React from 'react';

const PartnershipSection = () => {
  const partners = [
    {
      name: 'Scroll',
      logo: '🏢',
      description: 'Strategic Technology Partner'
    },
    {
      name: 'Partner 2',
      logo: '💼',
      description: 'Innovation Partner'
    },
    {
      name: 'Partner 3',
      logo: '🌐',
      description: 'Global Solutions Partner'
    },
    {
      name: 'Partner 4',
      logo: '🔧',
      description: 'Technical Partner'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 