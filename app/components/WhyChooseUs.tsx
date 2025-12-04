"use client";

import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Integrated Approach",
    desc: "Seamless solutions combining DevOps, software development, and big data expertise.",
    icon: "/icons/integrated.svg",
  },
  {
    title: "Scalability & Agility",
    desc: "Services that grow with your business, from startups to enterprise.",
    icon: "/icons/scale.svg",
  },
  {
    title: "Experienced Team",
    desc: "Certified professionals delivering results-driven solutions.",
    icon: "/icons/team.svg",
  },
  {
    title: "Secure & Reliable",
    desc: "Advanced security and monitoring for optimal performance.",
    icon: "/icons/secure.svg",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock support for proactive maintenance and troubleshooting.",
    icon: "/icons/support2.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">

      {/* ---- Background Glow ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 blur-[170px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-[160px] opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            BrightHawk
          </span>
          ?
        </motion.h3>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-5 gap-10">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group rounded-lg p-[2px] bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
            >
              {/* Neon glow on hover */}
              <div
                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition duration-500 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              ></div>

              {/* Inner card */}
              <div className="relative bg-[#0f0f0f] rounded-lg p-8 text-center border border-gray-700 h-full flex flex-col justify-start group-hover:shadow-2xl transition">

                <img src={p.icon} className="mx-auto w-12 mb-5 opacity-80 group-hover:opacity-100 transition" />

                <h4 className="text-lg font-bold text-white">{p.title}</h4>
                <p className="text-gray-300 mt-3">{p.desc}</p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
