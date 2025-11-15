import React from "react";
import Link from "next/link";
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
        <html lang="en" />
        <title>Cybersecurity Projects | Cal Poly SOC - SIEM, Threat Detection & Security Research</title>
        <meta name="description" content="Explore cybersecurity projects and initiatives from Cal Poly SOC, including threat detection, SIEM implementation with Splunk, security monitoring, incident response, and hands-on security research at Cal Poly Pomona." />
        <meta name="keywords" content="Cal Poly SOC projects, CalPolySoc initiatives, cybersecurity projects, SIEM implementation, Splunk projects, threat detection, security research, CPP SOC, student cybersecurity" />
        <link rel="canonical" href="https://calpolysoc.org/projects" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/projects" />
        <meta property="og:title" content="Cybersecurity Projects | Cal Poly SOC" />
        <meta property="og:description" content="Explore cybersecurity projects from Cal Poly SOC including threat detection, SIEM implementation, and security research." />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calpolysoc.org/projects" />
        <meta name="twitter:title" content="Cybersecurity Projects | Cal Poly SOC" />
        <meta name="twitter:description" content="Explore cybersecurity projects from Cal Poly SOC." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-14 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
      </div>
      <Footer />
    </>
  );
};

export default Projects;
