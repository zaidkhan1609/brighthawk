"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useConsultation } from "@/app/context/ConsultationContext";

export default function Hero() {
  const router = useRouter();
  const { openModal } = useConsultation();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a0a0a] text-white py-20 md:py-32"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 blur-[150px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 blur-[160px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empower Your <br />
            Business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Smart Tech Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Streamline processes, enhance efficiency, and unlock growth with our
            DevOps, custom software, and big data expertise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/explore")}
              className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Explore More
            </button>

            {/* ✅ GLOBAL MODAL BUTTON */}
            <button
              onClick={openModal}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 font-semibold hover:opacity-90 transition"
            >
              Book a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
