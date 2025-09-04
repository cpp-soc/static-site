import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  year: string;
  program: string;
  role: string;
  description: string;
  picture: string;
  media: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}


const TeamCard: React.FC<TeamCardProps> = ({ name, year, program, role, description, picture, media }) => {
  const [showModal, setShowModal] = useState(false);

  // Truncate description for card view
  const maxDescLength = 110;

  const shortDescription = description.length > maxDescLength
    ? description.slice(0, maxDescLength) + '...'
    : description;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center w-full max-w-xs min-h-[370px] h-[400px] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <Image
          src={picture}
          alt={name}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover mb-4"
          quality={100}
        />
  <h2 className="text-xl font-bold text-blue-600 mb-1 text-center">{name}</h2>
  <p className="text-md font-semibold mb-1 text-center text-gray-700">{role}</p>
  {/* <p className="text-md font-medium mb-2 text-center">{shortDescription}</p> */}
        <div className="flex justify-center space-x-4 mt-2">
          {media.linkedin && (
            <a href={media.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700" onClick={e => e.stopPropagation()}>
              <FaLinkedin size={22} />
            </a>
          )}
          {media.github && (
            <a href={media.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800" onClick={e => e.stopPropagation()}>
              <FaGithub size={22} />
            </a>
          )}
          {media.twitter && (
            <a href={media.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" onClick={e => e.stopPropagation()}>
              <FaTwitter size={22} />
            </a>
          )}
          {media.instagram && (
            <a href={media.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500" onClick={e => e.stopPropagation()}>
              <FaInstagram size={22} />
            </a>
          )}
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl" onClick={() => setShowModal(false)}>&times;</button>
            <Image
              src={picture}
              alt={name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              quality={100}
            />
            <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">{name}</h2>
            <p className="text-md font-medium mb-1 text-center">{year} &ndash; {program}</p>
            <p className="text-md font-semibold mb-2 text-center text-gray-700">{role}</p>
            <p className="text-base text-gray-700 mb-3 text-center">{description}</p>
            <div className="flex justify-center space-x-4 mt-2">
              {media.linkedin && (
                <a href={media.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  <FaLinkedin size={22} />
                </a>
              )}
              {media.github && (
                <a href={media.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                  <FaGithub size={22} />
                </a>
              )}
              {media.twitter && (
                <a href={media.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaTwitter size={22} />
                </a>
              )}
              {media.instagram && (
                <a href={media.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram size={22} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard;