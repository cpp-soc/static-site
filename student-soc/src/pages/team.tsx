import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import teamData from '@/data/teamData';
import facultyData from '@/data/facultyData';


const Team: React.FC = () => {
  return (
    <>
      <Head>
        <title>Meet the SOC</title>
        <meta name="description" content="Team page for Student Soc" />
      </Head>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-600 mt-8">Meet the SOC</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              year={member.year}
              program={member.program}
              description={member.description}
              picture={member.picture}
              media={member.media}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-600 mt-8">Meet the Faculty</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {facultyData.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              year={member.year}
              program={member.program}
              description={member.description}
              picture={member.picture}
              media={member.media}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;