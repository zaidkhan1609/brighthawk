"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "BrightHawk transformed our delivery pipeline — releases are now weekly and reliable.", name: "Ayesha Khan, CTO", role: "Fintech" },
  { quote: "They designed a scalable infra that survived our Black Friday traffic spike.", name: "Markus Lee, Head of Ops", role: "E-Commerce" },
  { quote: "Excellent 24/7 support and fast incident remediation.", name: "Priya Nair, IT Manager", role: "Healthcare" },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-slate-900 text-center">Trusted by teams who ship with confidence</h3>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-white p-6 rounded-2xl shadow">
              <p className="text-slate-700 italic">“{t.quote}”</p>
              <div className="mt-4 font-semibold text-slate-900">{t.name}</div>
              <div className="text-slate-500 text-sm">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
