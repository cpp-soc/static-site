import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col lg:flex-row justify-center items-start bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full lg:w-2/3"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
{/*           <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Submit</button>
          </form> */}
          <div className="container mx-auto p-4 flex flex-col justify-center items-center bg-transparent">
            Email us directly! <a href="mailto:cpp.soc.club@gmail.com">cpp.soc.club@gmail.com</a>
          </div>
        </motion.div>
        <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-col items-center lg:w-1/3">
          <div className="mb-8">
            <iframe
              src="https://discord.com/widget?id=1222272548306292827&theme=dark"
              width="500"
              height="500"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <div>
            <a href="https://linktr.ee/cppsoc">
              <img
                src="https://assets.production.linktr.ee/profiles/_next/static/logo-assets/default-meta-image.png"
                width="500"
                height="250"
                alt="Linktree"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;