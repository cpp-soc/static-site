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
  group: "SOC" | "SDC";
  media: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}


const TeamCard: React.FC<TeamCardProps> = ({ name, year, program, role, description, picture, group, media }) => {
  const [showModal, setShowModal] = useState(false);

  // Define colors based on group
  const groupColors = {
    SOC: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      gradient: "from-blue-400 to-blue-600",
      ring: "ring-blue-400",
      accent: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
    },
    SDC: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      gradient: "from-green-400 to-green-600",
      ring: "ring-green-400",
      accent: "bg-gradient-to-r from-green-400 via-green-500 to-green-600"
    }
  };

  const colors = groupColors[group];

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className={`group relative bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border-2 border-transparent hover:${colors.border} h-[360px] flex flex-col`}
        onClick={() => setShowModal(true)}
      >
        {/* Top accent bar with group badge */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.accent}`}></div>
        
        {/* Group Badge - Top Right Corner */}
        <div className="absolute top-3 right-3 z-10">
          <div className={`${colors.bg} ${colors.border} border-2 rounded-full px-3 py-1 shadow-md`}>
            <p className={`text-xs font-bold ${colors.text}`}>{group}</p>
          </div>
        </div>
        
        <div className="p-6 flex flex-col items-center flex-1 justify-between">
          {/* Top Section - Image and Info */}
          <div className="flex flex-col items-center">
            {/* Profile Image with ring */}
            <div className="relative mb-4">
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
              <div className={`relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:${colors.ring} transition-all duration-300 shadow-lg`}>
                <Image
                  src={picture}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  quality={100}
                />
              </div>
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-gray-900 mb-1 text-center leading-tight">
              {name}
            </h2>
            
            {/* Role with badge style */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1 mb-3">
              <p className="text-sm font-semibold text-yellow-700 text-center">
                {role}
              </p>
            </div>

            {/* Program */}
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">{program}</p>
            </div>
          </div>

          {/* Bottom Section - Social Icons and CTA */}
          <div className="flex flex-col items-center gap-3 w-full">
            {/* Social Icons - Enhanced */}
            <div className="flex justify-center space-x-3">
              {media.linkedin && (
                <a 
                  href={media.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-110" 
                  onClick={e => e.stopPropagation()}
                >
                  <FaLinkedin size={18} />
                </a>
              )}
              {media.github && (
                <a 
                  href={media.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-50 hover:bg-gray-800 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-110" 
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub size={18} />
                </a>
              )}
              {media.twitter && (
                <a 
                  href={media.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-110" 
                  onClick={e => e.stopPropagation()}
                >
                  <FaTwitter size={18} />
                </a>
              )}
              {media.instagram && (
                <a 
                  href={media.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-110" 
                  onClick={e => e.stopPropagation()}
                >
                  <FaInstagram size={18} />
                </a>
              )}
            </div>

            {/* View Profile Button - appears on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xs font-semibold text-yellow-600 flex items-center gap-1">
                <span>View Full Profile</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm" 
          onClick={() => setShowModal(false)}
        >
          <motion.div 
            initial={{ scale: 0.96, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 group"
              onClick={() => setShowModal(false)}
            >
              <span className="text-2xl leading-none group-hover:rotate-90 transition-transform duration-200">&times;</span>
            </button>

            {/* Content Container */}
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left Sidebar - Profile */}
              <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-10 flex flex-col items-center justify-center relative">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}></div>
                
                {/* Group Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className={`${colors.bg} ${colors.border} border rounded-lg px-3 py-1 shadow-sm`}>
                    <p className={`text-xs font-bold ${colors.text} tracking-wide`}>{group}</p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-full blur-2xl opacity-20`}></div>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
                      <Image
                        src={picture}
                        alt={name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        quality={100}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                  
                  {/* Academic Info */}
                  <div className="space-y-1 mb-6">
                    <p className="text-sm font-semibold text-gray-700">{year}</p>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{program}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {media.linkedin && (
                      <a 
                        href={media.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {media.github && (
                      <a 
                        href={media.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-800 text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {media.twitter && (
                      <a 
                        href={media.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-400 text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                    {media.instagram && (
                      <a 
                        href={media.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                      >
                        <FaInstagram size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Content - Role & Description */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                {/* Role Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-1 h-8 bg-gradient-to-b ${colors.gradient} rounded-full`}></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Position</h3>
                  </div>
                  <p className="text-xl font-bold text-gray-900 pl-7">{role}</p>
                </div>

                {/* About Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-8 bg-gradient-to-b ${colors.gradient} rounded-full`}></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">About</h3>
                  </div>
                  <div className="pl-7">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className={`h-1 ${colors.accent}`}></div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TeamCard;