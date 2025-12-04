"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-32 text-white">
      
      {/* ===== Saturated Background Glow Layer ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 blur-[140px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 blur-[140px] opacity-40"></div>
      </div>

      {/* ===== Neon Blobs (Circle accents) ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 w-52 h-52 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-3xl opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 blur-3xl opacity-40"
      />

      {/* ===== CONTENT GRID ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ==== TEXT CONTENT ==== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Empower Your <br />
            Business with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Smart Tech Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Streamline processes, enhance efficiency, and unlock growth with our
            DevOps, custom software, and big data expertise.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 rounded-lg text-black font-semibold bg-white hover:bg-gray-200 transition shadow-lg">
              Explore More
            </button>

            <button className="px-8 py-3 rounded-lg font-semibold border border-gray-500 hover:bg-gray-800 transition">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* ==== 3D NEON CLOUD (PURE SVG) ==== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <svg
            width="480"
            height="330"
            viewBox="0 0 480 330"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            <defs>
              {/* Cloud Gradient */}
              <linearGradient id="cloudG" x1="0" x2="1">
                <stop offset="0" stopColor="#4dd0ff" />
                <stop offset="1" stopColor="#00b5ff" />
              </linearGradient>

              {/* Base glowing board */}
              <linearGradient id="baseG" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6a00" />
                <stop offset="1" stopColor="#ff2d55" />
              </linearGradient>

              {/* Purple glow */}
              <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                <stop offset="0" stopColor="#d946ef" stopOpacity="0.9" />
                <stop offset="1" stopColor="#581c87" stopOpacity="0.3" />
              </radialGradient>
            </defs>

            {/* Outer Purple Glow */}
            <circle cx="240" cy="150" r="160" fill="url(#glow)" opacity="0.35" />

            {/* Cloud Shape */}
            <path
              d="M140 185c-35-6-58-28-58-58s23-55 58-57c12-35 45-59 82-59s70 21 82 52c35 5 63 29 63 62s-28 65-75 65H140z"
              fill="url(#cloudG)"
              stroke="#7df3ff"
              strokeWidth="4"
              style={{ filter: "drop-shadow(0 0 18px #4de3ff)" }}
            />

            {/* Neon board */}
            <rect
              x="130"
              y="185"
              rx="16"
              width="220"
              height="95"
              fill="url(#baseG)"
              opacity="0.95"
              style={{ filter: "drop-shadow(0 0 22px #ff5e00)" }}
            />

            {/* Circuit Neon Lights */}
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={150 + i * 10}
                cy={225 + ((i % 2) * 10)}
                r="4"
                fill={i % 2 ? "#ff0080" : "#00e5ff"}
                style={{ filter: "drop-shadow(0 0 6px #fff)" }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
