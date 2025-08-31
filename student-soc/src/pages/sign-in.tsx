import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const SIGNIN_FORM_URL = "https://forms.office.com/r/y6zQAtF9wx";

const SignInPage: React.FC = () => {
  const handleRedirect = () => {
    window.open(SIGNIN_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
        >
          <h1 className="text-4xl font-bold mb-4 text-center">
            Daily <span className="text-yellow-400">Sign-In</span>
          </h1>
          <p className="text-lg mb-6 text-center text-gray-700 max-w-md">
            Please sign in for today. Click the button below or scan the QR code to access the sign-in form.
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6"
          >
            <Image
              src="/assets/links/qrforsoc.png"
              alt="Daily Sign-In QR"
              width={180}
              height={180}
              className="rounded-xl border border-gray-300 object-contain"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleRedirect}
            className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg mb-2"
          >
            Sign In (Redirect)
          </motion.button>
          <p className="text-sm text-gray-500 mt-2 text-center">Your sign-in is required for attendance and participation.</p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
