import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData";

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>SOC - Projects</title>
        <meta name="description" content="Project's for The Student Security Operations Center" />
      </Head>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center bg-transparent">
        <h1 className="text-6xl font-bold text-blue-600 mt-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
