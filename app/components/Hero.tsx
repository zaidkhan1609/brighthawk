"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
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
                className="px-8 py-3 rounded-lg bg-white text-black font-semibold"
              >
                Explore More
              </button>

              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 font-semibold"
              >
                Book a Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === MODAL FORM === */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#0f0f0f] rounded-2xl p-8 max-w-lg w-full border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  placeholder="Name"
                  className="w-full p-3 rounded bg-black border border-gray-700"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-black border border-gray-700"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  required
                  placeholder="Phone"
                  className="w-full p-3 rounded bg-black border border-gray-700"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Message"
                  className="w-full p-3 rounded bg-black border border-gray-700"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 font-semibold">
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    We’ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong.
                  </p>
                )}
              </form>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
