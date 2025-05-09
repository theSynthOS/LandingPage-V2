// // src/components/sections/TeamSection.tsx
// import React from 'react';

// interface Member {
//   name: string;
//   role: string;
//   imageUrl: string;
// }

// const teamMembers: Member[] = [
//   {
//     name: 'Yudhisthra Sugumaran',
//     role: 'Founder & CEO',
//     imageUrl: '/images/ken.jpg',
//   },
//   {
//     name: 'Yee Chian',
//     role: 'Co-Founder + Frontend Developer',
//     imageUrl: '/images/ken.jpg',
//   },
//   {
//     name: 'Vincent',
//     role: 'Head of Programmer',
//     imageUrl: '/images/nick.jpg',
//   },
//   {
//     name: 'Ronny',
//     role: 'Senior Programmer',
//     imageUrl: '/images/joey.jpg',
//   },
//   {
//     name: 'Wei Han',
//     role: 'Frontend Developer',
//     imageUrl: '/images/chloe.jpg',
//   },
//   {
//     name: 'Britney',
//     role: 'Marketing + Frontend Developer',
//     imageUrl: '/images/chloe.jpg',
//   },
// ];

// // Just point at the public folder URLs:
// const frames = [
//   '/images/frame1.svg',
//   '/images/frame2.svg',
// ];

// const TeamSection: React.FC = () => (
//   <section className="py-20 bg-black text-white">
//     {/* Heading */}
//     <div className="max-w-4xl mx-auto px-4 text-center mb-12">
//       <h2 className="text-4xl md:text-5xl font-bold">
//         MEET OUR{' '}
//         <span className="text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">
//           TEAM
//         </span>
//       </h2>
//       <p className="text-gray-400">Team Description.</p>
//     </div>

//     {/* Grid */}
//     <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {teamMembers.map((member, idx) => {
//         const frameSrc = frames[idx % frames.length];
//         return (
//           <div key={member.name} className="flex flex-col items-center">
//             <div className="relative w-48 h-48 mb-4">
//               {/* Frame backplate via public URL */}
//               <img
//                 src={frameSrc}
//                 alt={`Frame ${idx % frames.length + 1}`}
//                 className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//               />

//               {/* Portrait overlay */}
//               <img
//                 src={member.imageUrl}
//                 alt={member.name}
//                 className="relative z-10 w-36 h-36 mx-auto -mt-20 object-cover rounded-2xl border-4 border-black"
//               />
//             </div>

//             <h3 className="text-xl font-semibold">{member.name}</h3>
//             <p className="mt-1 text-gray-300 italic">{member.role}</p>
//           </div>
//         );
//       })}
//     </div>
//   </section>
// );

// export default TeamSection;


//import React from 'react';
// src/components/sections/TeamSection.tsx
import React from 'react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: Member[] = [
  { name: 'Yudhishthra Sugumaran', role: 'Founder & CEO',            imageUrl: '/images/smiling-asian-man-using-tablet-computer copy 2.svg' },
  { name: 'Yee Chian', role: 'Co-Founder + Frontend', imageUrl: '/images/yeechiannft (2).svg' },
  { name: 'Vincent', role: 'Head of Programmer', imageUrl: '/images/yeechiannft (2).svg' },
  { name: 'Ronny', role: 'Senior Programmer', imageUrl: '/images/yeechiannft (2).svg' },
  { name: 'Wei Han', role: 'Frontend Developer', imageUrl: '/images/yeechiannft (2).svg' },
  { name: 'Britney', role: 'Marketing + Frontend', imageUrl: '/images/yeechiannft (2).svg' },
];

const frames = ['/frame1.svg', '/frame2.svg'];

const TeamSection: React.FC = () => (
  <section className="py-20 bg-black text-white">
    {/* Heading */}
    <div className="max-w-5xl mx-auto px-4 text-center mb-16">
      <h2 className="text-[2.5rem] md:text-[4rem] font-bold">
        MEET OUR{' '}
        <span className="text-yellow-300 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]">
          TEAM
        </span>
      </h2>
      <p className="text-gray-400">Our passionate team driving innovation and excellence.</p>
    </div>

    {/* Cards Grid */}
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl">
      {teamMembers.map((member, idx) => {
        const frameSrc = frames[idx % frames.length];
        return (
          <div className="flex flex-col items-center">
            {/* Card with frame background */}
            <div
              className="relative rounded-3xl shadow-2xl flex items-center justify-center mb-4 overflow-visible"
              style={{
                width: '320px',
                height: '320px',
                backgroundImage: `url(${frameSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Person image, bigger than the frame and overflowing above */}
              <Image
                src={member.imageUrl}
                alt={member.name}
                height={500}
                width={500}
                className="absolute left-1/2 -translate-x-1/2 h-[50%]"
                style={{ width: '260px', height: '380px', top: '-60px', objectFit: 'contain', zIndex: 10 }}
              />
            </div>
            {/* Name and role outside the frame, centered below, tight spacing */}
            <div className="w-full text-center -mt-2">
              <h3 className="text-3xl font-bold text-white mb-0 leading-tight">{member.name}</h3>
              <p className="text-lg italic text-gray-300 font-normal mt-1">{member.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default TeamSection;
