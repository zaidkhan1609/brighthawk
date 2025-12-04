"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-40 text-white">

      {/* === Background Glow === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[45rem] h-[45rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 blur-[150px] opacity-35" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 blur-[160px] opacity-35" />
      </div>

      {/* === Content Grid === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* ==== Text ==== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Empower Your <br />
            Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Smart Tech Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
            Streamline processes, enhance efficiency, and unlock growth with our
            DevOps, custom software, and big data expertise.
          </p>

          <div className="mt-8 flex gap-5">
            <button className="px-8 py-3 rounded-lg text-black font-semibold bg-white shadow-md hover:bg-gray-200 transition">
              Explore More
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-600 text-white hover:bg-gray-900 transition">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* ==== Illustration (simplified + professional) ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <svg
            width="430"
            height="330"
            viewBox="0 0 430 330"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <defs>
              <linearGradient id="heroBlue" x1="0" x2="1">
                <stop offset="0" stopColor="#4dd0ff" />
                <stop offset="1" stopColor="#009dff" />
              </linearGradient>

              <linearGradient id="heroPink" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6ec4" />
                <stop offset="1" stopColor="#d946ef" />
              </linearGradient>
            </defs>

            {/* Glow ring */}
            <ellipse cx="215" cy="280" rx="150" ry="35" fill="#ffffff33" />

            {/* Blue cube */}
            <rect
              x="120"
              y="90"
              width="180"
              height="180"
              rx="20"
              fill="url(#heroBlue)"
              className="shadow-lg"
              style={{ filter: "drop-shadow(0 0 20px #33caff)" }}
            />

            {/* Pink cube overlay */}
            <rect
              x="150"
              y="120"
              width="150"
              height="150"
              rx="18"
              fill="url(#heroPink)"
              opacity="0.85"
              style={{ filter: "drop-shadow(0 0 25px #ff3cb6)" }}
            />
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
