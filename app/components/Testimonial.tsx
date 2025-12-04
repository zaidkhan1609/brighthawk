"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "BrightHawk transformed our delivery pipeline — releases are now weekly and reliable.",
    name: "Ayesha Khan",
    role: "CTO, Fintech",
  },
  {
    quote: "They designed a scalable infra that survived our Black Friday traffic spike.",
    name: "Markus Lee",
    role: "Head of Ops, E-Commerce",
  },
  {
    quote: "Excellent 24/7 support and fast incident remediation.",
    name: "Priya Nair",
    role: "IT Manager, Healthcare",
  },
];

export default function Testimonial() {
  return (
    <section className="relative py-36 bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-br from-purple-600 to-pink-500 blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600 to-cyan-400 blur-[150px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white"
        >
          Trusted by teams who ship with confidence
        </motion.h3>

        {/* Testimonial Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group rounded-xl p-[2px] bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
            >
              {/* Neon Hover Glow */}
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />

              {/* Inner Content */}
              <div className="relative bg-[#0f0f0f] rounded-xl p-8 border border-gray-700 h-full">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="mt-6 font-semibold text-white text-lg">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
