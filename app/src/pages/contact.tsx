import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Student SOC @ Cal Poly Pomona</title>
        <meta name="description" content="Get in touch with Cal Poly Pomona's Student Security Operations Center. Contact us for questions, opportunities, or to learn more about our program." />
        <link rel="canonical" href="https://calpolysoc.org/contact" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
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
              <a href="mailto:cpp.soc.club@gmail.com" className="text-black-400 text-xl font-semibold mb-6">cpp.soc.club@gmail.com</a>
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
      <Footer />
    </>
  );
};

export default ContactPage;