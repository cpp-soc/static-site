import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Student SOC</title>
        <meta name="description" content="Projects for The Student Security Operations Center" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the diverse range of projects that drive our mission to advance cybersecurity education and operations at Cal Poly Pomona.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Want to learn more about our projects or get involved? Visit our documentation or contact us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wiki.cppsoc.xyz"
              className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              Visit Our Wiki
            </a>
            <a
              href="/contact"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
