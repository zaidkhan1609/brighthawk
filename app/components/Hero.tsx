"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a0a0a] text-white py-20 md:py-32"
    >
      {/* === Background Glow Layers === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 blur-[150px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 blur-[160px] opacity-30" />
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* === IMAGE (mobile first) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center md:hidden"
        >
          <Image
            src="/images/cloud.svg"
            alt="Cloud Illustration"
            width={380}
            height={300}
            className="w-[80%] max-w-[360px] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          />
        </motion.div>

        {/* === TEXT === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Empower Your <br />
            Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Smart Tech Solutions
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
            Streamline processes, enhance efficiency, and unlock growth with our
            DevOps, custom software, and big data expertise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button className="px-8 py-3 rounded-lg text-black font-semibold bg-white shadow-md hover:bg-gray-200 transition">
              Explore More
            </button>

            <button className="px-8 py-3 rounded-lg border border-gray-600 text-white hover:bg-gray-900 transition">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* === IMAGE (desktop) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center"
        >
          <Image
            src="/images/cloud.svg"
            alt="Cloud Illustration"
            width={500}
            height={380}
            className="w-[85%] max-w-[450px] drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
