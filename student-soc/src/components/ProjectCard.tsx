import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-blue-600">{title}</h2>
      <p className="mt-3 text-lg">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;