import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Cal Poly Pomona Cybersecurity SOC Club</title>
        <meta name="description" content="Contact the Cal Poly Pomona Student Security Operations Center (SOC) for cybersecurity education, events, and community. Email, Discord, and Linktree available." />
        <meta property="og:title" content="Contact | Cal Poly Pomona Cybersecurity SOC Club" />
        <meta property="og:description" content="Get in touch with the Student SOC at Cal Poly Pomona. Connect for cybersecurity events, education, and community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cppsoc.xyz/contact" />
        <meta property="og:image" content="/public/assets/SOC.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Cal Poly Pomona Cybersecurity SOC Club" />
        <meta name="twitter:description" content="Contact the Student SOC for cybersecurity education and events at Cal Poly Pomona." />
        <meta name="twitter:image" content="/public/assets/SOC.png" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-8 mb-8 lg:mb-0"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight text-yellow-400 text-center">
              Contact <span className="text-black">Us</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 text-center">
              We&apos;d love to hear from you! Reach out to us via email or join our Discord community.
            </p>
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg mb-2">Email us directly:</span>
              <a href="mailto:cpp.soc.club@gmail.com" className="text-yellow-400 text-xl font-semibold mb-6">cpp.soc.club@gmail.com</a>
            </div>
          </motion.div>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            <div className="mb-8 w-full flex justify-center">
              <iframe
                src="https://discord.com/widget?id=1222272548306292827&theme=dark"
                width="350"
                height="350"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-lg shadow-lg"
                title="Discord Widget"
              ></iframe>
            </div>
            <div className="w-full flex justify-center">
              <a href="https://linktr.ee/cppsoc" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://assets.production.linktr.ee/profiles/_next/static/logo-assets/default-meta-image.png"
                  width={350}
                  height={175}
                  alt="Linktree"
                  className="rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;