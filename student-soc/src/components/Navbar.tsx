// student-soc/src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo3.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Image 
            src={logo} 
            alt="SOC" 
            width='128' 
            height='128'
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>
          <Link href="/team" className="text-white hover:text-gray-300">Team</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link href="/faq" className="text-white hover:text-gray-300">FAQ</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;