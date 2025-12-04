"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative py-36 bg-[#050505] overflow-hidden">

      {/* Matching Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-orange-500 to-pink-600 blur-[150px] opacity-25" />
        <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-gradient-to-br from-blue-600 to-purple-600 blur-[150px] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-orange-400 tracking-wide font-semibold">
            Who We Are
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Your Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Transformative Technology
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            We help companies modernize, automate, and scale with cutting-edge
            DevOps, Cloud, Big Data, and Software Development services.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            From infrastructure automation to full-stack development, our team
            delivers tailored solutions built for performance, reliability, and
            long-term success.
          </p>

          <button className="mt-8 px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition shadow">
            Explore More
          </button>
        </motion.div>

        {/* Illustration (clean + lighter) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <svg
            width="420"
            height="360"
            viewBox="0 0 420 360"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <defs>
              <linearGradient id="blueG" x1="0" x2="1">
                <stop offset="0" stopColor="#4dd0ff" />
                <stop offset="1" stopColor="#009dff" />
              </linearGradient>
              <linearGradient id="pinkG" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6ec4" />
                <stop offset="1" stopColor="#d946ef" />
              </linearGradient>
            </defs>

            {/* Glow ellipse */}
            <ellipse cx="210" cy="270" rx="150" ry="40" fill="#ffffff22" />

            {/* Cube A */}
            <rect
              x="120"
              y="80"
              width="180"
              height="180"
              rx="24"
              fill="url(#blueG)"
              style={{ filter: "drop-shadow(0 0 20px #33caff)" }}
            />

            {/* Cube B */}
            <rect
              x="150"
              y="110"
              width="150"
              height="150"
              rx="22"
              fill="url(#pinkG)"
              opacity="0.9"
              style={{ filter: "drop-shadow(0 0 25px #ff48c0)" }}
            />
          </svg>
        </motion.div>

      </div>
    </section>
  );
}
