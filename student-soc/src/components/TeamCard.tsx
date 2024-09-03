import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  year: string;
  program: string;
  description: string;
  picture: string;
  media: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ name, year, program, description, picture, media }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <Image src={picture} 
      alt={name} 
      width='256' 
      height='256' 
      className="w-32 h-32 rounded-lg mx-auto"
      quality={100}/>
      <h2 className="text-4xl font-bold text-blue-600 mt-4">{name}</h2>
      <p className="mt-2 text-lg">{year} - {program}</p>
      <p className="mt-3 text-lg">{description}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {media.linkedin && (
          <a href={media.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        )}
        {media.github && (
          <a href={media.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        )}
        {media.twitter && (
          <a href={media.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        )}
        {media.instagram && (
          <a href={media.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;