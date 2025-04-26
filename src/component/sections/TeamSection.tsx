import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of industry experience',
      image: '👨‍💼',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical expert specializing in scalable architectures',
      image: '👩‍💻',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with passion for innovation',
      image: '👨‍💻',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      bio: 'Product strategist focused on user experience',
      image: '👩‍💼',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
                {member.image}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                  <span className="sr-only">LinkedIn</span>
                  🔗
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 