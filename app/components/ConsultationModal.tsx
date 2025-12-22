"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useConsultation } from "@/app/context/ConsultationContext";
import React, { useState } from "react";

export default function ConsultationModal() {
  const { isOpen, closeModal } = useConsultation();
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-lg flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-[#0f0f0f] border border-gray-700 rounded-2xl p-8 max-w-lg w-full text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              {["name", "email", "phone"].map((field) => (
                <input
                  key={field}
                  required
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  className="w-full p-3 rounded bg-black border border-gray-700 text-white"
                  value={(form as any)[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              ))}

              <textarea
                required
                rows={4}
                placeholder="Message"
                className="w-full p-3 rounded bg-black border border-gray-700 text-white"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
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
              onClick={closeModal}
              className="mt-4 text-sm text-gray-400 hover:text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
