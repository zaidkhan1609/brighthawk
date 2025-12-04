"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = { q: string; a: string; };

type Props = { items: FAQItem[] };

export default function Faq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-slate-900 text-center">FAQs</h3>
        <div className="mt-8 space-y-4">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between bg-gradient-to-r from-white to-blue-50"
              >
                <div>
                  <div className="font-semibold text-slate-900">{it.q}</div>
                  <div className="text-slate-600 text-sm mt-1">{/* optional subtitle */}</div>
                </div>
                <div className="text-slate-600">{openIndex === i ? "−" : "+"}</div>
              </button>

              {openIndex === i && (
                <div className="px-5 py-4 text-slate-600">
                  {it.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
