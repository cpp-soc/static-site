import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import FacultyCard from "@/components/FacultyCard";
import teamData from "@/data/teamData";
import facultyData from "@/data/facultyData";


const socCurrent = teamData.filter(m => m.group === 'SOC' && !m.year.includes('Lead'));
const sdcCurrent = teamData.filter(m => m.group === 'SDC' && !m.year.includes('Lead'));
const socDirectors = teamData.filter(m => m.group === 'SOC' && m.year.includes('Lead'));
const sdcDirectors = teamData.filter(m => m.group === 'SDC' && m.year.includes('Lead'));

const Team: React.FC = () => {
  // No filter or year logic needed for split grid layout

  return (
    <>
      <Head>
        <title>Meet the Team - Student SOC</title>
        <meta name="description" content="Meet The Student Security Operations Center (SOC)" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Meet the <span className="text-yellow-400">Student SOC</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the people, history, and faculty behind Cal Poly Pomona&apos;s Security Operations Center and Student Data Center.
            </p>
          </motion.div>
        </div>

        {/* Current Team Split Grid */}
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Current Student Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Meet our active SOC and SDC members.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black text-center">Security Operations Center</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {socCurrent.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <TeamCard
                      name={member.name}
                      year={member.year}
                      program={member.program}
                      description={member.description}
                      picture={member.picture}
                      media={member.media}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Student Data Center</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {sdcCurrent.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <TeamCard
                      name={member.name}
                      year={member.year}
                      program={member.program}
                      description={member.description}
                      picture={member.picture}
                      media={member.media}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Former Student Directors */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black text-center">Former SOC Directors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {socDirectors.map((leader, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <TeamCard
                      name={leader.name}
                      year={leader.year}
                      program={leader.program}
                      description={leader.description}
                      picture={leader.picture}
                      media={leader.media}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Former SDC Directors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {sdcDirectors.map((leader, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <TeamCard
                      name={leader.name}
                      year={leader.year}
                      program={leader.program}
                      description={leader.description}
                      picture={leader.picture}
                      media={leader.media}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Faculty Grid with Distinct Background */}
        <div className="w-full bg-yellow-50 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-yellow-400">Faculty Advisors</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our faculty advisors provide guidance, mentorship, and expertise to ensure the success of the SOC.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyData.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <FacultyCard
                    name={member.name}
                    description={member.description}
                    picture={member.picture}
                    media={member.media}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
