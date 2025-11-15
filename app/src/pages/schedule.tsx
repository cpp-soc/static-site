import React from "react";
import Link from "next/link";
import Head from "next/head";
import eventData from "../data/schedule";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Schedule: React.FC = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Schedule & Events | Cal Poly SOC - SOC Operations Hours & Activities</title>
        <meta name="description" content="View Cal Poly SOC schedule: daily SOC operations hours, upcoming events, meetings, and cybersecurity activities at Cal Poly Pomona's Student Security Operations Center. Open 5 days a week in the Mitchell C. Hill Center." />
        <meta name="keywords" content="Cal Poly SOC schedule, CalPolySoc events, CPP SOC hours, SOC operations schedule, cybersecurity events, Cal Poly Pomona security, student SOC meetings, Mitchell C. Hill Center" />
        <link rel="canonical" href="https://calpolysoc.org/schedule" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/schedule" />
        <meta property="og:title" content="Schedule & Events | Cal Poly SOC" />
        <meta property="og:description" content="View Cal Poly SOC schedule: daily operations, upcoming events, and cybersecurity activities." />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calpolysoc.org/schedule" />
        <meta name="twitter:title" content="Schedule & Events | Cal Poly SOC" />
        <meta name="twitter:description" content="View Cal Poly SOC schedule and upcoming events." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight text-yellow-400">
              Operation <span className="text-black">Schedule</span>
            </h1>
            <p className="text-xl mb-6 leading-relaxed max-w-2xl mx-auto">
              All activities are held at{" "}
              <a href="https://www.cpp.edu/maps?id=1130#!m/282696?share" className="font-semibold text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">CLA Building 98C 5-15</a>{" "}
              unless otherwise noted.
            </p>
          </motion.div>

          {/* Daily SOC Operations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">
              Daily SOC Operations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center mb-8 sm:mb-12">
              {eventData.dailySOCOperations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                >
                  <span className="text-xl font-semibold mb-2 text-black">
                    {item.day}
                  </span>
                  <span className="text-lg text-gray-700 mb-1">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
