
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Student SOC at Cal Poly Pomona: Cybersecurity, student opportunities, security operations, hands-on experience, faculty mentorship, real-world skills, SIEM, Splunk, Rapid7, student data center." />
        <meta name="keywords" content="Cal Poly Pomona, student SOC, cybersecurity, student opportunities, security, SIEM, Splunk, Rapid7, student data center, faculty, mentorship, real-world experience, cyber club, student jobs, internships, cyber careers" />
        <meta name="author" content="Cal Poly Pomona Student SOC" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Student SOC @ Cal Poly Pomona" />
        <meta property="og:description" content="Explore student opportunities in cybersecurity, security operations, and hands-on learning at Cal Poly Pomona's Student SOC." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calpolysoc.org/" />
        <meta property="og:image" content="https://calpolysoc.org/assets/logo3.png" />
        <meta property="og:site_name" content="Cal Poly Pomona Student SOC" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student SOC @ Cal Poly Pomona" />
        <meta name="twitter:description" content="Explore student opportunities in cybersecurity, security operations, and hands-on learning at Cal Poly Pomona's Student SOC." />
        <meta name="twitter:image" content="https://calpolysoc.org/assets/logo3.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://calpolysoc.org/" />
        
        <title>Student SOC @ Cal Poly Pomona</title>
      </Head>
      <div className="bg-gradient-to-r from-gray-500 to-black min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;