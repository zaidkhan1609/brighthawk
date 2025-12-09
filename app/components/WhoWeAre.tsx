"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative bg-[#000] py-24 md:py-32 overflow-hidden"
    >
      {/* === ORANGE DECORATIVE SHAPES === */}
      <div className="absolute top-10 left-0 w-40 h-40 md:w-56 md:h-56 bg-orange-500 rounded-br-[60px] md:rounded-br-[80px]" />
      <div className="absolute bottom-10 right-0 w-40 h-40 md:w-56 md:h-56 bg-orange-500 rounded-tl-[60px] md:rounded-tl-[80px]" />

      {/* === MAIN GRID === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* === IMAGE BLOCK === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Rounded photo card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#222]">
            <Image
              src="/images/team-working.jpg"
              alt="Team working together"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* === TEXT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-400 uppercase text-sm font-semibold tracking-wider">
            WHO WE ARE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-3">
            Your Partner in <br />
            Transformative Technology
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed text-lg">
            At BrightHawk Info Tech Solution, we pride ourselves on being a
            trusted technology partner for businesses across industries. With an
            unwavering commitment to innovation, efficiency, and excellence, we
            provide cutting-edge solutions that empower organizations to thrive in
            today’s dynamic digital environment.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed text-lg">
            Our core expertise lies in DevOps-as-a-Service, custom software
            development, and big data services — enabling businesses to streamline
            processes, enhance operational efficiency, and make smarter,
            data-driven decisions. With a customer-first approach, we deliver
            tailor-made solutions addressing unique challenges while ensuring
            long-term scalability and success.
          </p>

          {/* 🚫 Removed Explore More Button */}
        </motion.div>
      </div>
    </section>
  );
}
