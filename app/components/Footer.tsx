"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[#050505] pt-24 pb-12 text-gray-300 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[180px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 blur-[160px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-3xl font-extrabold text-white">
            Bright<span className="text-orange-500">Hawk</span>
          </h3>
          <p className="mt-4 text-gray-400">
            © 2023 BrightHawk. All rights reserved.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>
              <strong>Address:</strong><br />
              East Wing, Office No.-120, Aurora Tower, MG Road, Camp, Pune - 411001
            </p>
            <p><strong>Email:</strong> brighthawkinfotech@gmail.com</p>
            <p><strong>Phone:</strong> +91 9370320860</p>
          </div>
        </motion.div>

        {/* COMPANY */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition">About us</li>
            <li className="hover:text-orange-400 transition">Careers</li>
            <li className="hover:text-orange-400 transition">Blog</li>
          </ul>
        </motion.div>

        {/* SERVICES */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition">DevOps</li>
            <li className="hover:text-orange-400 transition">Big Data</li>
            <li className="hover:text-orange-400 transition">Software Development</li>
          </ul>
        </motion.div>
      </div>

      <div className="relative mt-14 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          Designed for modern DevOps-driven organizations.
        </p>
      </div>
    </footer>
  );
}
