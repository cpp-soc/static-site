import React from "react";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/imageCarousel";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
        >
          <ImageCarousel />
        </motion.div>
      </div>

      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">
            Welcome to the Student Security Operations Center (SOC) @ Cal Poly
            Pomona
          </h3>
          <p className="text-lg mb-4">
            Our mission is to monitor the Student Data Center (SDC) and improve
            its security posture by continuously monitoring logs using System
            Information and Event Monitoring technologies like Splunk, IBM
            QRadar and Microsoft Sentinel.
          </p>
          <p className="text-lg">
            Our goal is also to provide students interested in Cybersecurity the
            relevant skills that they will need to give them a head start on
            their Cybersecurity careers.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
