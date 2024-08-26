import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import faqData from '@/data/faqData';
import Navbar from '@/components/Navbar';

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center bg-transparent">
        <Head>
          <title>FAQ - Student Soc</title>
          <meta name="description" content="FAQ page for Student Soc" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            <h1 className="text-6xl font-bold text-blue-600">FAQ</h1>
            <p className="mt-3 text-2xl text-black">Frequently Asked Questions</p>
<div className="w-full max-w-2xl mt-8">
  {faqData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
      onClick={() => toggleExpand(index)}
    >
      <h3 className="text-xl font-bold text-black">{item.question}</h3>
      {expandedIndex === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-left"
        >
          <p className="text-lg text-black">{item.answer}</p>
        </motion.div>
      )}
    </motion.div>
  ))}
</div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default FAQ;