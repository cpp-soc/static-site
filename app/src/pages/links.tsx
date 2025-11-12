


import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/linksData";
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.15,
    },
  }),
};

const LinksPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Quick Links | Student SOC @ Cal Poly Pomona</title>
        <meta name="description" content="Access important resources, forms, and platforms for Cal Poly Pomona's Student SOC. Quick links to essential tools and information." />
        <link rel="canonical" href="https://calpolysoc.org/links" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 flex flex-col items-center"
        >
          <h1 className="text-5xl font-bold mb-8 text-center">
            Quick <span className="text-yellow-400">Links</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl text-center text-gray-700">
            Access important resources, forms, and platforms for the Student SOC. Scan the QR codes or click below to get started!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full justify-items-center">
            {links.map((link, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-xl p-16 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 border border-gray-200 max-w-xl w-full"
              >
                <Image
                  src={link.qr}
                  alt={link.name + ' QR'}
                  width={288}
                  height={288}
                  className="w-72 h-72 object-contain"
                />
                
                <h2 className="text-2xl font-semibold mb-2 text-center text-gray-900">{link.name}</h2>
                <p className="text-xs text-gray-500 mb-2 break-all text-center">{link.url}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-8 rounded-lg transition duration-300 mt-3 shadow"
                >
                  Go to Link
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default LinksPage;
