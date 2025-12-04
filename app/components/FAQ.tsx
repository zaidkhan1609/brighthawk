"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = { q: string; a: string };
type Props = { items: FAQItem[] };

export default function Faq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-36 bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-600 to-pink-500 blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-600 to-cyan-400 blur-[150px] opacity-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white"
        >
          Frequently Asked Questions
        </motion.h3>

        {/* FAQ Container */}
        <div className="mt-12 space-y-6">
          {items.map((it, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative rounded-xl p-[2px] bg-gradient-to-r from-gray-700 to-gray-900"
              >
                {/* Neon glow layer */}
                <div
                  className={`absolute inset-0 rounded-xl blur-xl transition-opacity duration-500
                  ${isOpen ? "opacity-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" : "opacity-0"}`}
                />

                {/* Inner FAQ card */}
                <div className="relative bg-[#0d0d0d] rounded-xl px-6 py-5 border border-gray-700">
                  
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-white text-lg font-semibold">{it.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-300 text-2xl leading-none select-none"
                    >
                      ▼
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 text-gray-300 leading-relaxed"
                      >
                        {it.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
