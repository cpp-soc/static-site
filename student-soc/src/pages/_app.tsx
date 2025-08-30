import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Cal Poly Pomona Cybersecurity SOC Club</title>
        <meta name="description" content="Cal Poly Pomona Student Security Operations Center (SOC) - advancing cybersecurity education, student operations, and research." />
        <meta property="og:title" content="Cal Poly Pomona Cybersecurity SOC Club" />
        <meta property="og:description" content="Join the Student SOC at Cal Poly Pomona for cybersecurity education, events, and student-led operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cppsoc.xyz" />
        <meta property="og:image" content="/public/assets/SOC.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cal Poly Pomona Cybersecurity SOC Club" />
        <meta name="twitter:description" content="Cal Poly Pomona Student SOC - cybersecurity education and student operations." />
        <meta name="twitter:image" content="/public/assets/SOC.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-r from-gray-500 to-black min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;