import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import faqData from "@/data/faqData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <html lang="en" />
        <title>FAQ | Cal Poly SOC - Frequently Asked Questions About Joining Our SOC</title>
        <meta name="description" content="Frequently asked questions about joining Cal Poly SOC. Learn about opportunities, requirements, benefits, training, and how to get involved with Cal Poly Pomona's Student Security Operations Center." />
        <meta name="keywords" content="Cal Poly SOC FAQ, CalPolySoc questions, how to join SOC, CPP SOC requirements, student cybersecurity FAQ, Cal Poly Pomona SOC, SOC training, security operations questions" />
        <link rel="canonical" href="https://calpolysoc.org/faq" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/faq" />
        <meta property="og:title" content="FAQ | Cal Poly SOC" />
        <meta property="og:description" content="Frequently asked questions about joining Cal Poly SOC. Learn about opportunities, requirements, and benefits." />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://calpolysoc.org/faq" />
        <meta name="twitter:title" content="FAQ | Cal Poly SOC" />
        <meta name="twitter:description" content="Frequently asked questions about joining Cal Poly SOC." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
      </Head>
      
      {/* FAQPage Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }),
        }}
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
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
      <Footer />
    </>
  );
};

export default FAQ;
