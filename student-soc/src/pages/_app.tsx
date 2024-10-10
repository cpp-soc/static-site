import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-black min-h-screen">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;