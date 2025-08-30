import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import ImageCarousel from "@/components/imageCarousel";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to the <span className="text-black">Student SOC</span> @ Cal Poly Pomona
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              Empowering the next generation of cybersecurity professionals through hands-on monitoring of the Student Data Center using cutting-edge tools like Splunk, IBM QRadar, and Microsoft Sentinel.
            </p>
            <p className="text-lg mb-8">
              Join us to gain real-world skills and kickstart your career in cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a
                href="/team"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Meet the Team
              </a>
              <a
                href="/projects"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Our Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <ImageCarousel />
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto">
              Our mission is to monitor the Student Data Center and enhance its security posture by continuously analyzing logs with advanced SIEM technologies.
            </p>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our <a href="https://wiki.cppsoc.xyz" className="text-black hover:underline">Wiki</a> for a deeper dive into our operations and achievements.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;