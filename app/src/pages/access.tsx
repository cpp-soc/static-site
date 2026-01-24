import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type AccessPath = "internal" | "external";
type OSType = "windows" | "mac" | "linux";

const windowsInstallSlides = [
    { src: "/assets/access/win-1.png", alt: "Download installer" },
    { src: "/assets/access/win-2.png", alt: "Run installer" },
    { src: "/assets/access/win-3.png", alt: "Complete setup" },
    { src: "/assets/access/win-4.png", alt: "Ready to use" },
];

const macInstallSlides = [
    { src: "/assets/access/mac-1.png", alt: "Download .pkg" },
    { src: "/assets/access/mac-2.png", alt: "Run installer" },
    { src: "/assets/access/mac-3.png", alt: "Allow extension" },
    { src: "/assets/access/mac-4.png", alt: "Grant permissions" },
    { src: "/assets/access/mac-5.png", alt: "Complete setup" },
    { src: "/assets/access/mac-6.png", alt: "Ready to use" },
];

const gatewaySlides = [
    { src: "/assets/access/win-5.png", alt: "Enter gateway address" },
    { src: "/assets/access/win-6.png", alt: "SSO login" },
    { src: "/assets/access/win-7.png", alt: "Authentication" },
    { src: "/assets/access/win-8.png", alt: "Connected" },
    { src: "/assets/access/win-9.png", alt: "Connection complete" },
];

const externalGatewaySlides = [
    { src: "/assets/access/win-5.png", alt: "Enter gateway address" },
    { src: "/assets/access/ext-1.png", alt: "VPN login" },
    { src: "/assets/access/win-7.png", alt: "Authentication" },
    { src: "/assets/access/ext-2.png", alt: "Connected" },
    { src: "/assets/access/win-9.png", alt: "Connection complete" },
];

const Access: React.FC = () => {
    const [selectedPath, setSelectedPath] = useState<AccessPath>("internal");
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [selectedOS, setSelectedOS] = useState<OSType>("windows");
    const [windowsInstallSlide, setWindowsInstallSlide] = useState(0);
    const [macInstallSlide, setMacInstallSlide] = useState(0);
    const [gatewaySlide, setGatewaySlide] = useState(0);
    const [externalGatewaySlide, setExternalGatewaySlide] = useState(0);

    // Auto-advance slideshows every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setWindowsInstallSlide((prev) => (prev + 1) % windowsInstallSlides.length);
            setMacInstallSlide((prev) => (prev + 1) % macInstallSlides.length);
            setGatewaySlide((prev) => (prev + 1) % gatewaySlides.length);
            setExternalGatewaySlide((prev) => (prev + 1) % externalGatewaySlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Access Guide | Cal Poly SOC - How to Access the SDC</title>
                <meta name="description" content="Step-by-step guide to accessing Student Development Center resources at Cal Poly Pomona" />
            </Head>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            How to access the <span className="text-yellow-400">SDC</span>?
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            Follow this guide to gain access to the Mitchell C. Hill Student Data Center, monitored by the Security Operations Center.
                        </p>
                    </motion.div>

                    {/* Path Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex bg-white rounded-lg shadow-lg p-1">
                            <button
                                onClick={() => setSelectedPath("internal")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all ${selectedPath === "internal"
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Internal Student
                            </button>
                            <button
                                onClick={() => setSelectedPath("external")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all ${selectedPath === "external"
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                External Visitor
                            </button>
                        </div>
                    </motion.div>

                    {/* Path Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-gray-600 mb-10"
                    >
                        {selectedPath === "internal"
                            ? "For CPP students with an active @cpp.edu email address"
                            : "For non-CPP students, external collaborators, or guests"
                        }
                    </motion.p>

                    {/* Internal Student Steps */}
                    {selectedPath === "internal" && (
                        <div className="max-w-4xl mx-auto space-y-8">

                            {/* Step 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Submit a ServiceNow Ticket</h3>
                                        <p className="text-gray-600">
                                            Request access to the Student Data Center through the campus ServiceNow portal.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Await Approval</h3>
                                        <p className="text-gray-600">
                                            Check your <strong>@cpp.edu inbox</strong> for approval confirmation. This typically takes 1-3 business days.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Download & Install GlobalProtect</h3>
                                        <p className="text-gray-600 mb-4">
                                            Visit <a href="https://vpn.connect.cpp.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">vpn.connect.cpp.edu</a> to download GlobalProtect VPN client for your operating system.
                                        </p>

                                        {/* OS Tabs - Pill Style */}
                                        <div className="inline-flex bg-gray-100 rounded-full p-1 mb-6">
                                            <button
                                                onClick={() => setSelectedOS("windows")}
                                                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "windows"
                                                    ? "bg-white text-gray-900 shadow-sm"
                                                    : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                                                </svg>
                                                Windows
                                            </button>
                                            <button
                                                onClick={() => setSelectedOS("mac")}
                                                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "mac"
                                                    ? "bg-white text-gray-900 shadow-sm"
                                                    : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                </svg>
                                                Mac
                                            </button>
                                            <button
                                                onClick={() => setSelectedOS("linux")}
                                                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "linux"
                                                    ? "bg-white text-gray-900 shadow-sm"
                                                    : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
                                                </svg>
                                                Linux
                                            </button>
                                        </div>

                                        {/* OS-specific installation steps - Carousel */}
                                        {selectedOS === "windows" && (
                                            <div className="relative max-w-md">
                                                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={windowsInstallSlide}
                                                            initial={{ opacity: 0, x: 50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -50 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                            onClick={() => setLightboxImage(windowsInstallSlides[windowsInstallSlide].src)}
                                                        >
                                                            <Image
                                                                src={windowsInstallSlides[windowsInstallSlide].src}
                                                                alt={windowsInstallSlides[windowsInstallSlide].alt}
                                                                fill
                                                                className="object-contain"
                                                                unoptimized
                                                            />
                                                        </motion.div>
                                                    </AnimatePresence>

                                                    {/* Navigation Arrows */}
                                                    <button
                                                        onClick={() => setWindowsInstallSlide((prev) => (prev - 1 + windowsInstallSlides.length) % windowsInstallSlides.length)}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setWindowsInstallSlide((prev) => (prev + 1) % windowsInstallSlides.length)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* Caption & Progress */}
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                                        <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">{windowsInstallSlide + 1}</span>
                                                        {windowsInstallSlides[windowsInstallSlide].alt}
                                                    </p>
                                                    <div className="flex gap-1.5">
                                                        {windowsInstallSlides.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setWindowsInstallSlide(index)}
                                                                className={`h-1.5 rounded-full transition-all ${index === windowsInstallSlide
                                                                    ? "bg-yellow-400 w-4"
                                                                    : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Thumbnail Preview */}
                                                <div className="mt-3 flex gap-2">
                                                    {windowsInstallSlides.map((slide, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setWindowsInstallSlide(index)}
                                                            className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === windowsInstallSlide
                                                                ? "border-yellow-400 shadow-md"
                                                                : "border-transparent opacity-60 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {selectedOS === "mac" && (
                                            <div className="relative max-w-md">
                                                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={macInstallSlide}
                                                            initial={{ opacity: 0, x: 50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -50 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                            onClick={() => setLightboxImage(macInstallSlides[macInstallSlide].src)}
                                                        >
                                                            <Image
                                                                src={macInstallSlides[macInstallSlide].src}
                                                                alt={macInstallSlides[macInstallSlide].alt}
                                                                fill
                                                                className="object-contain"
                                                                unoptimized
                                                            />
                                                        </motion.div>
                                                    </AnimatePresence>

                                                    {/* Navigation Arrows */}
                                                    <button
                                                        onClick={() => setMacInstallSlide((prev) => (prev - 1 + macInstallSlides.length) % macInstallSlides.length)}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setMacInstallSlide((prev) => (prev + 1) % macInstallSlides.length)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* Caption & Progress */}
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                                        <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">{macInstallSlide + 1}</span>
                                                        {macInstallSlides[macInstallSlide].alt}
                                                    </p>
                                                    <div className="flex gap-1.5">
                                                        {macInstallSlides.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setMacInstallSlide(index)}
                                                                className={`h-1.5 rounded-full transition-all ${index === macInstallSlide
                                                                    ? "bg-yellow-400 w-4"
                                                                    : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Thumbnail Preview */}
                                                <div className="mt-3 flex gap-2">
                                                    {macInstallSlides.map((slide, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setMacInstallSlide(index)}
                                                            className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === macInstallSlide
                                                                ? "border-yellow-400 shadow-md"
                                                                : "border-transparent opacity-60 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {selectedOS === "linux" && (
                                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">Linux Instructions</h4>
                                                        <p className="text-gray-500 text-xs">Screenshots coming soon</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                                        <p className="text-gray-700 text-sm">Download the Linux package (.deb or .rpm) from <a href="https://vpn.connect.cpp.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">vpn.connect.cpp.edu</a></p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                                        <div className="text-gray-700 text-sm">
                                                            Install via terminal:
                                                            <div className="mt-1 flex flex-wrap gap-2">
                                                                <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">sudo dpkg -i GlobalProtect.deb</code>
                                                                <span className="text-gray-400 text-xs">or</span>
                                                                <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">sudo rpm -i GlobalProtect.rpm</code>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                                                        <p className="text-gray-700 text-sm">Launch GlobalProtect from your applications menu</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4">Connect to SDC Gateway</h3>

                                        {/* Two Column Layout */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Left: Instructions */}
                                            <div className="space-y-4">
                                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                                    <p className="text-sm text-gray-500 mb-1">Gateway Address</p>
                                                    <code className="text-lg font-mono font-semibold text-gray-900">mgmt.sdc.cpp.edu</code>
                                                </div>
                                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <p className="font-medium text-blue-900">Sign In</p>
                                                    </div>
                                                    <p className="text-sm text-blue-700">Use your <strong>Cal Poly Pomona&apos;s Single Sign-On (SSO)</strong> (same as your BroncoDirect login)</p>
                                                </div>
                                                <p className="text-xs text-gray-500">Click through the slideshow to see the connection process →</p>
                                            </div>

                                            {/* Right: Slideshow */}
                                            <div className="relative">
                                                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={gatewaySlide}
                                                            initial={{ opacity: 0, x: 50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -50 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                            onClick={() => setLightboxImage(gatewaySlides[gatewaySlide].src)}
                                                        >
                                                            <Image
                                                                src={gatewaySlides[gatewaySlide].src}
                                                                alt={gatewaySlides[gatewaySlide].alt}
                                                                fill
                                                                className="object-contain"
                                                                unoptimized
                                                            />
                                                        </motion.div>
                                                    </AnimatePresence>

                                                    {/* Navigation Arrows */}
                                                    <button
                                                        onClick={() => setGatewaySlide((prev) => (prev - 1 + gatewaySlides.length) % gatewaySlides.length)}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setGatewaySlide((prev) => (prev + 1) % gatewaySlides.length)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* Caption & Progress */}
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm text-gray-600">{gatewaySlides[gatewaySlide].alt}</p>
                                                    <div className="flex gap-1.5">
                                                        {gatewaySlides.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setGatewaySlide(index)}
                                                                className={`h-1.5 rounded-full transition-all ${index === gatewaySlide
                                                                    ? "bg-yellow-400 w-4"
                                                                    : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Thumbnail Preview */}
                                                <div className="mt-3 flex gap-2">
                                                    {gatewaySlides.map((slide, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setGatewaySlide(index)}
                                                            className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === gatewaySlide
                                                                ? "border-yellow-400 shadow-md"
                                                                : "border-transparent opacity-60 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>


                            {/* Step 5 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Create Your SDC Domain Account</h3>
                                        <p className="text-gray-600 mb-4">
                                            Once connected to the VPN, visit <a href="https://portal.sdc.cpp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">portal.sdc.cpp</a> to create an account on the <strong>SDC.CPP domain</strong>. This is our domain for the SDC environment.
                                        </p>
                                        <div
                                            className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition-opacity max-w-md"
                                            onClick={() => setLightboxImage("/assets/access/win-10.png")}
                                        >
                                            <Image src="/assets/access/win-10.png" alt="SDC Portal account creation" width={800} height={600} className="w-full h-auto" unoptimized />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Success Note */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="bg-green-50 border border-green-200 p-6 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">You&apos;re all set!</h4>
                                        <p className="text-green-700 text-sm">Once your domain account is created you will have access to SDC Resources. More instructions will be provided once your account is created and activated.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* External Visitor Steps */}
                    {selectedPath === "external" && (
                        <div className="max-w-4xl mx-auto space-y-8">
                            {/* Step 1 - Contact SOC */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Contact SOC to Start Your Request</h3>
                                        <p className="text-gray-600 mb-4">
                                            Email <a href="mailto:soc@cpp.edu" className="text-blue-600 hover:text-blue-800 underline font-medium">soc@cpp.edu</a> to request access to the SDC. The more details the better!
                                        </p>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3">
                                            <div className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-gray-700 text-sm">Explain <strong>why</strong> you need access to the SDC</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-gray-700 text-sm">If there is an associated <strong>event</strong>, reference it in your email</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-gray-700 text-sm"><strong>CC</strong> anyone relevant (e.g., Faculty, project sponsors)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 - SOC Review */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">SOC Reviews Your Request</h3>
                                        <p className="text-gray-600 mb-4">
                                            SOC will review your request and send you an update regarding the status of your access request.
                                        </p>
                                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <p className="font-medium text-blue-900">Check Your Inbox</p>
                                            </div>
                                            <p className="text-sm text-blue-700">You will receive an email update from SOC regarding your request status.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 - Receive Credentials + Installation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">Receive Your Credentials & Install GlobalProtect</h3>
                                        <p className="text-gray-600 mb-4">
                                            Due to the nature of your external account, we generate <strong>VPN Credentials</strong> and your <strong>SDC Account Credentials</strong> with an expiration date.
                                        </p>

                                        {/* Credentials Info Box */}
                                        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-6">
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                                </svg>
                                                <div>
                                                    <p className="font-medium text-amber-800 mb-1">Credentials Delivered via Email</p>
                                                    <p className="text-sm text-amber-700">
                                                        You will receive your credentials from either <strong>soc@cpp.edu</strong> or <strong>noreply@calpolysoc.org</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-gray-200 pt-5 mt-2">
                                            <h4 className="font-semibold text-gray-800 mb-3">Download & Install GlobalProtect VPN</h4>
                                            <p className="text-gray-600 mb-4">
                                                {/* Visit <a href="https://vpn.connect.cpp.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">vpn.connect.cpp.edu</a> to download a VPN client for your operating system. */}
                                                Attached will in the email from above will be a link to download the GlobalProtect VPN client for your operating system.
                                            </p>

                                            {/* OS Tabs - Pill Style */}
                                            <div className="inline-flex bg-gray-100 rounded-full p-1 mb-6">
                                                <button
                                                    onClick={() => setSelectedOS("windows")}
                                                    className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "windows"
                                                        ? "bg-white text-gray-900 shadow-sm"
                                                        : "text-gray-600 hover:text-gray-900"
                                                        }`}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                                                    </svg>
                                                    Windows
                                                </button>
                                                <button
                                                    onClick={() => setSelectedOS("mac")}
                                                    className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "mac"
                                                        ? "bg-white text-gray-900 shadow-sm"
                                                        : "text-gray-600 hover:text-gray-900"
                                                        }`}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                    </svg>
                                                    Mac
                                                </button>
                                                <button
                                                    onClick={() => setSelectedOS("linux")}
                                                    className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${selectedOS === "linux"
                                                        ? "bg-white text-gray-900 shadow-sm"
                                                        : "text-gray-600 hover:text-gray-900"
                                                        }`}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
                                                    </svg>
                                                    Linux
                                                </button>
                                            </div>

                                            {/* OS-specific installation steps - Carousel */}
                                            {selectedOS === "windows" && (
                                                <div className="relative max-w-md">
                                                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                        <AnimatePresence mode="wait">
                                                            <motion.div
                                                                key={windowsInstallSlide}
                                                                initial={{ opacity: 0, x: 50 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -50 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                                onClick={() => setLightboxImage(windowsInstallSlides[windowsInstallSlide].src)}
                                                            >
                                                                <Image
                                                                    src={windowsInstallSlides[windowsInstallSlide].src}
                                                                    alt={windowsInstallSlides[windowsInstallSlide].alt}
                                                                    fill
                                                                    className="object-contain"
                                                                    unoptimized
                                                                />
                                                            </motion.div>
                                                        </AnimatePresence>

                                                        {/* Navigation Arrows */}
                                                        <button
                                                            onClick={() => setWindowsInstallSlide((prev) => (prev - 1 + windowsInstallSlides.length) % windowsInstallSlides.length)}
                                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => setWindowsInstallSlide((prev) => (prev + 1) % windowsInstallSlides.length)}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* Caption & Progress */}
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <p className="text-sm text-gray-600 flex items-center gap-2">
                                                            <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">{windowsInstallSlide + 1}</span>
                                                            {windowsInstallSlides[windowsInstallSlide].alt}
                                                        </p>
                                                        <div className="flex gap-1.5">
                                                            {windowsInstallSlides.map((_, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => setWindowsInstallSlide(index)}
                                                                    className={`h-1.5 rounded-full transition-all ${index === windowsInstallSlide
                                                                        ? "bg-gray-800 w-4"
                                                                        : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Thumbnail Preview */}
                                                    <div className="mt-3 flex gap-2">
                                                        {windowsInstallSlides.map((slide, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setWindowsInstallSlide(index)}
                                                                className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === windowsInstallSlide
                                                                    ? "border-gray-800 shadow-md"
                                                                    : "border-transparent opacity-60 hover:opacity-100"
                                                                    }`}
                                                            >
                                                                <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {selectedOS === "mac" && (
                                                <div className="relative max-w-md">
                                                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                        <AnimatePresence mode="wait">
                                                            <motion.div
                                                                key={macInstallSlide}
                                                                initial={{ opacity: 0, x: 50 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -50 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                                onClick={() => setLightboxImage(macInstallSlides[macInstallSlide].src)}
                                                            >
                                                                <Image
                                                                    src={macInstallSlides[macInstallSlide].src}
                                                                    alt={macInstallSlides[macInstallSlide].alt}
                                                                    fill
                                                                    className="object-contain"
                                                                    unoptimized
                                                                />
                                                            </motion.div>
                                                        </AnimatePresence>

                                                        {/* Navigation Arrows */}
                                                        <button
                                                            onClick={() => setMacInstallSlide((prev) => (prev - 1 + macInstallSlides.length) % macInstallSlides.length)}
                                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => setMacInstallSlide((prev) => (prev + 1) % macInstallSlides.length)}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                        >
                                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* Caption & Progress */}
                                                    <div className="mt-3 flex items-center justify-between">
                                                        <p className="text-sm text-gray-600 flex items-center gap-2">
                                                            <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold">{macInstallSlide + 1}</span>
                                                            {macInstallSlides[macInstallSlide].alt}
                                                        </p>
                                                        <div className="flex gap-1.5">
                                                            {macInstallSlides.map((_, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => setMacInstallSlide(index)}
                                                                    className={`h-1.5 rounded-full transition-all ${index === macInstallSlide
                                                                        ? "bg-gray-800 w-4"
                                                                        : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Thumbnail Preview */}
                                                    <div className="mt-3 flex gap-2">
                                                        {macInstallSlides.map((slide, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setMacInstallSlide(index)}
                                                                className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === macInstallSlide
                                                                    ? "border-gray-800 shadow-md"
                                                                    : "border-transparent opacity-60 hover:opacity-100"
                                                                    }`}
                                                            >
                                                                <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {selectedOS === "linux" && (
                                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">Linux Instructions</h4>
                                                            <p className="text-gray-500 text-xs">Screenshots coming soon</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-start gap-3">
                                                            <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                                            <p className="text-gray-700 text-sm">Download the Linux package (.deb or .rpm) from <a href="https://vpn.connect.cpp.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">vpn.connect.cpp.edu</a></p>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                                            <div className="text-gray-700 text-sm">
                                                                Install via terminal:
                                                                <div className="mt-1 flex flex-wrap gap-2">
                                                                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">sudo dpkg -i GlobalProtect.deb</code>
                                                                    <span className="text-gray-400 text-xs">or</span>
                                                                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono">sudo rpm -i GlobalProtect.rpm</code>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <span className="w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                                                            <p className="text-gray-700 text-sm">Launch GlobalProtect from your applications menu</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 4 - Connect (Skeleton) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-4">Connect to SDC Gateway</h3>

                                        {/* Two Column Layout */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Left: Instructions */}
                                            <div className="space-y-4">
                                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                                    <p className="text-sm text-gray-500 mb-1">Gateway Address</p>
                                                    <code className="text-lg font-mono font-semibold text-gray-900">vpn.sdc.cpp.edu</code>
                                                </div>
                                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <p className="font-medium text-blue-900">Sign In</p>
                                                    </div>
                                                    <p className="text-sm text-blue-700">Use your <strong>VPN credentials</strong> provided via email (not CPP SSO)</p>
                                                </div>
                                            </div>

                                            {/* Right: Slideshow */}
                                            <div className="relative">
                                                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={externalGatewaySlide}
                                                            initial={{ opacity: 0, x: 50 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -50 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="cursor-pointer absolute inset-0 flex items-center justify-center"
                                                            onClick={() => setLightboxImage(externalGatewaySlides[externalGatewaySlide].src)}
                                                        >
                                                            <Image
                                                                src={externalGatewaySlides[externalGatewaySlide].src}
                                                                alt={externalGatewaySlides[externalGatewaySlide].alt}
                                                                fill
                                                                className="object-contain"
                                                                unoptimized
                                                            />
                                                        </motion.div>
                                                    </AnimatePresence>

                                                    {/* Navigation Arrows */}
                                                    <button
                                                        onClick={() => setExternalGatewaySlide((prev) => (prev - 1 + externalGatewaySlides.length) % externalGatewaySlides.length)}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => setExternalGatewaySlide((prev) => (prev + 1) % externalGatewaySlides.length)}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-colors shadow-md"
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* Caption & Progress */}
                                                <div className="mt-3 flex items-center justify-between">
                                                    <p className="text-sm text-gray-600">{externalGatewaySlides[externalGatewaySlide].alt}</p>
                                                    <div className="flex gap-1.5">
                                                        {externalGatewaySlides.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setExternalGatewaySlide(index)}
                                                                className={`h-1.5 rounded-full transition-all ${index === externalGatewaySlide
                                                                    ? "bg-gray-800 w-4"
                                                                    : "bg-gray-300 hover:bg-gray-400 w-1.5"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Thumbnail Preview */}
                                                <div className="mt-3 flex gap-2">
                                                    {externalGatewaySlides.map((slide, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setExternalGatewaySlide(index)}
                                                            className={`flex-1 rounded overflow-hidden border-2 transition-all ${index === externalGatewaySlide
                                                                ? "border-gray-800 shadow-md"
                                                                : "border-transparent opacity-60 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <Image src={slide.src} alt={slide.alt} width={100} height={48} className="w-full h-12 object-cover" unoptimized />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Success Note */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-green-50 border border-green-200 p-6 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">You&apos;re all set!</h4>
                                        <p className="text-green-700 text-sm">Once connected, you&apos;ll have access to SDC resources. Remember that your credentials have an expiration date.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                    }

                </div >
            </div >
            <Footer />

            {/* Lightbox Modal */}
            {lightboxImage && (() => {
                // Determine which slide set this image belongs to
                const allSlides = [
                    ...windowsInstallSlides,
                    ...macInstallSlides,
                    ...gatewaySlides,
                    { src: "/assets/access/win-10.png", alt: "SDC Portal account creation" }
                ];

                let currentSlides = allSlides;
                if (windowsInstallSlides.some(s => s.src === lightboxImage)) {
                    currentSlides = windowsInstallSlides;
                } else if (macInstallSlides.some(s => s.src === lightboxImage)) {
                    currentSlides = macInstallSlides;
                } else if (gatewaySlides.some(s => s.src === lightboxImage)) {
                    currentSlides = gatewaySlides;
                } else {
                    currentSlides = [{ src: lightboxImage, alt: "Enlarged view" }];
                }

                const currentIndex = currentSlides.findIndex(s => s.src === lightboxImage);

                return (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                            onClick={() => setLightboxImage(null)}
                        >
                            ×
                        </button>

                        {/* Main Image */}
                        <div className="flex-1 flex items-center justify-center w-full max-h-[70vh]">
                            <Image
                                src={lightboxImage}
                                alt="Enlarged view"
                                width={1200}
                                height={900}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                                unoptimized
                            />
                        </div>

                        {/* Navigation Arrows */}
                        {currentSlides.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const prevIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
                                        setLightboxImage(currentSlides[prevIndex].src);
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const nextIndex = (currentIndex + 1) % currentSlides.length;
                                        setLightboxImage(currentSlides[nextIndex].src);
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Thumbnail Strip */}
                        {currentSlides.length > 1 && (
                            <div
                                className="mt-4 flex gap-2 max-w-full overflow-x-auto pb-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {currentSlides.map((slide, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setLightboxImage(slide.src)}
                                        className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${slide.src === lightboxImage
                                            ? "border-yellow-400 shadow-lg"
                                            : "border-transparent opacity-50 hover:opacity-100"
                                            }`}
                                    >
                                        <Image src={slide.src} alt={slide.alt} fill className="object-cover" unoptimized />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Caption */}
                        {currentSlides.length > 1 && currentIndex >= 0 && (
                            <p className="mt-2 text-white/80 text-sm">
                                {currentIndex + 1} / {currentSlides.length} — {currentSlides[currentIndex]?.alt}
                            </p>
                        )}
                    </div>
                );
            })()}
        </>
    );
};

export default Access;