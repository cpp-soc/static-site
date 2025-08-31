// student-soc/src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


import { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black p-4 shadow-lg"
    >
      <link rel="icon" href="/favicon.ico" />
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-2xl font-bold"
        >
          <Image 
            src="/logo3.png" 
            alt="SOC" 
            width='75' 
            height='75'
          />
        </motion.div>
        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex space-x-6"
        >
          {/* ...existing code... */}
          <Link href="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>Home</span>
          </Link>
          <Link href="/projects" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>Projects</span>
          </Link>
          <Link href="/team" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>Team</span>
          </Link>
          <Link href="/schedule" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>Schedule</span>
          </Link>
          <Link href="/contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>Contact</span>
          </Link>
          <Link href="/faq" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium flex items-center space-x-2">
            {/* ...existing code... */}
            <span>FAQ</span>
          </Link>
          {/* More dropdown */}
          <div className="relative group">
            {/* ...existing code... */}
            <span>More</span>
            {/* ...existing code... */}
            <div className="absolute left-0 mt-2 w-40 bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <Link href="/discord" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-t-lg transition duration-300">Discord</Link>
              <Link href="/links" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Links</Link>
              <Link href="/sign-in" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Sign-in</Link>
              <Link href="/temp" className="block px-4 py-2 text-white hover:bg-gray-700 rounded-b-lg transition duration-300">Temp</Link>
            </div>
          </div>
        </motion.div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black px-4 py-2 rounded-lg mt-2 flex flex-col space-y-2 z-50">
          <Link href="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Home</Link>
          <Link href="/projects" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Projects</Link>
          <Link href="/team" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Team</Link>
          <Link href="/schedule" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Schedule</Link>
          <Link href="/contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Contact</Link>
          <Link href="/faq" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">FAQ</Link>
          <div className="border-t border-gray-700 my-2"></div>
          <Link href="/discord" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Discord</Link>
          <Link href="/links" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Links</Link>
          <Link href="/sign-in" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Sign-in</Link>
          <Link href="/temp" className="text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300 font-medium">Temp</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;