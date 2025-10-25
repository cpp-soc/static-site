
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DISCORD_URL = "https://discord.gg/R3d3EEhpbY";


const DiscordPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      window.location.replace(DISCORD_URL);
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center mt-16"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4"
          >
            Redirecting to Discord...
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={countdown}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-lg mb-2"
            >
              You will be redirected in <span className="font-semibold text-yellow-500">{countdown}</span> second{countdown !== 1 ? "s" : ""}.
            </motion.p>
          </AnimatePresence>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            Destination: <a href={DISCORD_URL} className="text-blue-600 underline break-all" target="_blank" rel="noopener noreferrer">{DISCORD_URL}</a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700"
          >
            If the redirect fails, <a href={DISCORD_URL} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">click here</a>.
          </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/assets/links/qrfordisc.png"
                alt="Discord QR Code"
                width={160}
                height={160}
                className="w-40 h-40 object-contain rounded shadow"
              />
            </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default DiscordPage;
