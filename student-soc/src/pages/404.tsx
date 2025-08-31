import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Custom404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight text-yellow-400">404 - Page Not Found</h1>
          <p className="text-xl mb-6 leading-relaxed">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.<br />
            You will be redirected to the home page shortly.
          </p>
          <Link
            href="/"
            className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
          >
            Go Home Now
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
