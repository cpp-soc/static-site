import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import FacultyCard from "@/components/FacultyCard";
import teamData from "@/data/teamData";
import facultyData from "@/data/facultyData";



// Collect all years from teamData
const allYears = Array.from(new Set(teamData.map(m => m.teamYear).filter(Boolean))).sort((a, b) => b - a);


const Team: React.FC = () => {
  // default behvaior
  const [selectedYear, setSelectedYear] = useState<number | null>(allYears[0] || null);

  // Filter teamData by selected year, or show all (sorted) if none selected
  const filteredTeam = selectedYear
    ? teamData.filter(m => m.teamYear === selectedYear)
    : [...teamData].sort((a, b) => (b.teamYear || 0) - (a.teamYear || 0));

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Our Team | Cal Poly SOC - Student Cybersecurity Professionals</title>
        <meta name="description" content="Meet the students and faculty behind Cal Poly SOC. Discover our dedicated team of student cybersecurity professionals, SOC analysts, and faculty mentors at Cal Poly Pomona's Security Operations Center." />
        <meta name="keywords" content="Cal Poly SOC team, CalPolySoc students, CPP SOC members, student SOC analysts, cybersecurity students, Cal Poly Pomona security team, SOC faculty" />
        <link rel="canonical" href="https://calpolysoc.org/team" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/team" />
        <meta property="og:title" content="Our Team | Cal Poly SOC" />
        <meta property="og:description" content="Meet the students and faculty behind Cal Poly SOC. Dedicated cybersecurity professionals and mentors." />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calpolysoc.org/team" />
        <meta name="twitter:title" content="Our Team | Cal Poly SOC" />
        <meta name="twitter:description" content="Meet the students and faculty behind Cal Poly SOC." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
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
              Meet the <span className="text-yellow-400">Students</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the people, history, and faculty behind Cal Poly Pomona&apos;s Security Operations Center and Student Data Center.
            </p>
          </motion.div>
        </div>

        {/* Year Filter */}
        <div className="container mx-auto px-4 pb-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              className={`px-4 py-2 rounded-full font-semibold border ${selectedYear === null ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-400 border-yellow-400'} transition`}
              onClick={() => setSelectedYear(null)}
            >
              All Years
            </button>
            {allYears.map(year => (
              <button
                key={year}
                className={`px-4 py-2 rounded-full font-semibold border ${selectedYear === year ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-400 border-yellow-400'} transition`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Team Block Grid */}
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Student Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Browse all SOC and SDC members by year.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredTeam.map((member, index) => (
                <motion.div
                  key={`${member.name}-${member.teamYear}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <TeamCard
                    name={member.name}
                    year={member.year}
                    program={member.program}
                    role={member.role}
                    description={member.description}
                    picture={member.picture}
                    group={member.group as "SOC" | "SDC"}
                    media={member.media}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Faculty Grid */}
        <div className="w-full py-16">
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
