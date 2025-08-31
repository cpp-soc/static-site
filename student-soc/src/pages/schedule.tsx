
import React from "react";
import Link from "next/link";
import eventData from "../data/schedule";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Schedule: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight text-yellow-400">
              Event <span className="text-black">Schedule</span>
            </h1>
            <p className="text-xl mb-6 leading-relaxed max-w-2xl mx-auto">
              Stay up to date with our daily SOC operations and special events. All activities are held at <span className="font-semibold">CLA Building 98 C5-15</span> unless otherwise noted.
            </p>
          </motion.div>

          {/* Daily SOC Operations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">Daily SOC Operations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-12">
              {eventData.dailySOCOperations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                >
                  <span className="text-xl font-semibold mb-2 text-black">{item.day}</span>
                  <span className="text-lg text-gray-700 mb-1">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Want to learn more about our operations or join the team? Explore our documentation or reach out to us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wiki.cppsoc.xyz"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
              >
                Visit Our Wiki
              </a>
                <Link href="/contact" className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center">
                  Contact Us
                </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
