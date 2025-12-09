"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <footer id="footer" className="relative bg-[#050505] pt-24 pb-12 text-gray-300 overflow-hidden">

      {/* Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[180px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 blur-[160px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-3xl font-extrabold text-white">
            Bright<span className="text-orange-500">Hawk</span>
          </h3>
          <p className="mt-4 text-gray-400">© 2023 BrightHawk. All rights reserved.</p>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p><strong>Address:</strong><br/>East Wing, Office No.-120, Aurora Tower, Mg Road, Camp, Pune - 411001</p>
            <p><strong>Email:</strong> brighthawkinfotech@gmail.com</p>
            <p><strong>Phone:</strong> +91 9370320860</p>
          </div>
        </motion.div>

        {/* Company */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition cursor-pointer">About us</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Careers</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Blog</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-orange-400 transition cursor-pointer">DevOps</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Big Data</li>
            <li className="hover:text-orange-400 transition cursor-pointer">Software Dev</li>
          </ul>
        </motion.div>

        {/* === CONTACT FORM === */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>

          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#0f0f0f] border border-gray-700 outline-none focus:border-orange-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#0f0f0f] border border-gray-700 outline-none focus:border-orange-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              required
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-[#0f0f0f] border border-gray-700 outline-none focus:border-orange-400"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <textarea
              required
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded bg-[#0f0f0f] border border-gray-700 outline-none focus:border-orange-400"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-black font-semibold hover:opacity-90 transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">Failed to send message.</p>
            )}
          </form>
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
