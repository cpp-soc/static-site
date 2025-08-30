import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import FacultyCard from "@/components/FacultyCard";
import teamData from "@/data/teamData";
import facultyData from "@/data/facultyData";



// Collect all years from teamData
const allYears = Array.from(new Set(teamData.map(m => m.teamYear).filter(Boolean))).sort((a, b) => b - a);


const Team: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Filter teamData by selected year, or show all (sorted) if none selected
  const filteredTeam = selectedYear
    ? teamData.filter(m => m.teamYear === selectedYear)
    : [...teamData].sort((a, b) => (b.teamYear || 0) - (a.teamYear || 0));

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <TeamCard
                  name={member.name}
                  year={member.year}
                  program={member.program}
                  role={member.role}
                  description={member.description}
                  picture={member.picture}
                  media={member.media}
                />
              </motion.div>
            ))}
          </div>
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
