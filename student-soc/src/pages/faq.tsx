import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import faqData from "@/data/faqData";
import Navbar from "@/components/Navbar";

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        <Head>
          <title>FAQ - Student SOC</title>
          <meta name="description" content="FAQ page for Student SOC" />
        </Head>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight text-yellow-400 text-center">
              Frequently Asked <span className="text-black">Questions</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 text-center">
              Find answers to common questions about the Student SOC, our mission, and how you can get involved.
            </p>
            <div className="w-full">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer border border-gray-200 hover:bg-yellow-50"
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="text-xl font-semibold text-black flex items-center justify-between">
                    {item.question}
                    <span className="ml-2 text-yellow-400">{expandedIndex === index ? '-' : '+'}</span>
                  </h3>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-left"
                    >
                      <p className="text-lg text-gray-800">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
