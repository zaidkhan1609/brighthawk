"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-slate-100">
      
      {/* === Background Glow Layers === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-br from-orange-500 to-pink-600 blur-[140px] opacity-30"></div>
        <div className="absolute bottom-0 -right-20 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600 to-indigo-700 blur-[150px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* ==== TEXT BLOCK ==== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-wide font-semibold text-orange-400 mb-3">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Your Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Transformative Technology
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            At BrightHawk InfoTech Solution, we pride ourselves on being a trusted 
            technology partner for businesses across industries. With an unwavering 
            commitment to innovation, efficiency, and excellence, we provide 
            cutting-edge solutions that empower organizations to thrive.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our core expertise spans DevOps-as-a-Service, cloud automation, custom 
            software development, and big data services — enabling companies to 
            streamline operations, enhance efficiency, and make smarter, data-driven 
            decisions.
          </p>

          <button className="mt-8 px-8 py-3 rounded-lg text-black font-semibold bg-white shadow-lg hover:bg-gray-200 transition">
            Explore More
          </button>
        </motion.div>

        {/* ==== 3D SVG ILLUSTRATION ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <svg
            width="420"
            height="380"
            viewBox="0 0 420 380"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <defs>
              <linearGradient id="coreBlue" x1="0" x2="1">
                <stop offset="0" stopColor="#4dd0ff"/>
                <stop offset="1" stopColor="#008cff"/>
              </linearGradient>

              <linearGradient id="corePink" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6ec4"/>
                <stop offset="1" stopColor="#d946ef"/>
              </linearGradient>

              <radialGradient id="ringGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#7c3aed" stopOpacity="0.2" />
              </radialGradient>
            </defs>

            {/* Glowing ring */}
            <ellipse
              cx="210"
              cy="280"
              rx="150"
              ry="35"
              fill="url(#ringGlow)"
              opacity="0.5"
            />

            {/* Blue tech cube */}
            <rect
              x="120"
              y="90"
              width="180"
              height="180"
              rx="20"
              fill="url(#coreBlue)"
              stroke="#8be3ff"
              strokeWidth="3"
              style={{ filter: "drop-shadow(0 0 20px #32e1ff)" }}
            />

            {/* Pink overlay cube */}
            <rect
              x="150"
              y="120"
              width="150"
              height="150"
              rx="18"
              fill="url(#corePink)"
              opacity="0.85"
              style={{ filter: "drop-shadow(0 0 25px #ff5ec2)" }}
            />

            {/* Circuit dots */}
            {[...Array(18)].map((_, i) => (
              <circle
                key={i}
                cx={150 + (i % 6) * 22}
                cy={150 + Math.floor(i / 6) * 22}
                r="5"
                fill={i % 2 ? "#00eaff" : "#ff0077"}
                style={{ filter: "drop-shadow(0 0 8px #fff)" }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
