"use client";

import React from "react";
import { motion } from "framer-motion";

const sectors = [
  { name: "Healthcare", color: "from-blue-500 to-cyan-400" },
  { name: "E-Commerce", color: "from-purple-500 to-pink-500" },
  { name: "IT & Software Development", color: "from-indigo-500 to-blue-600" },
  { name: "Financial Services", color: "from-amber-500 to-orange-500" },
  { name: "Media & Entertainment", color: "from-pink-500 to-red-500" },
];

export default function Sectors() {
  return (
    <section id="sectors" className="relative py-32 bg-[#0a0a0a] overflow-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[160px] opacity-25"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 blur-[180px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Sectors We Serve
        </motion.h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Delivering reliable, scalable & secure DevOps solutions across multiple industries.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {sectors.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group rounded-lg p-[2px] bg-gradient-to-br from-gray-800 to-gray-900"
            >

              {/* Neon glow hover */}
              <div
                className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition duration-500 bg-gradient-to-r ${sec.color}`}
              ></div>

              {/* Inner card */}
              <div className="relative bg-[#0f0f0f] rounded-lg p-10 border border-gray-700 shadow-xl h-full flex items-center justify-center group-hover:shadow-2xl transition">

                <h3 className="text-xl font-semibold text-white text-center drop-shadow-sm">
                  {sec.name}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
