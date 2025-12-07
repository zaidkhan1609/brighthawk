"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#050505] pt-24 pb-12 text-gray-300 overflow-hidden">

      {/* Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[180px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 blur-[160px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-3xl font-extrabold text-white">
            Bright<span className="text-orange-500">Hawk</span>
          </h3>
          <p className="mt-4 text-gray-400">
            © 2023 BrightHawk. All rights reserved.
          </p>
        </motion.div>

        {/* COLUMN 1 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition cursor-pointer">About us</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Careers</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Blog</li>
          </ul>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition cursor-pointer">DevOps</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Big Data</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Software Dev</li>
          </ul>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Industries</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition cursor-pointer">Healthcare</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Finance</li>
            <li className="hover:text-orange-400 transition cursor-pointer">E-Commerce</li>
            <li className="hover:text-orange-400 transition cursor-pointer">IT & Software</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="relative mt-14 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          Designed for modern DevOps-driven organizations.
        </p>
      </div>
    </footer>
  );
}
