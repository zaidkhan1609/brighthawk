"use client";

import React from "react";
import { motion } from "framer-motion";
import { useConsultation } from "@/app/context/ConsultationContext";

export default function ExplorePage() {
  const { openModal } = useConsultation();

  return (
    <div className="bg-[#0a0a0a] text-white">

      {/* SECTION 1 — Hero */}
      <section className="pt-44 pb-24 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore How BrightHawk Builds <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            Reliable, Modern Tech Solutions
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
          {`From idea to deployment, we help you design, build, and scale secure digital systems tailored to your business.`}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={openModal}
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-black hover:opacity-90"
          >
            Get a Free Consultation
          </button>

          <a
            href="#expertise"
            className="px-8 py-3 rounded-lg border border-gray-500 hover:bg-gray-900"
          >
            View Our Services
          </a>
        </div>
      </section>

      {/* SECTION 2 — Core Expertise */}
      <section id="expertise" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          What You Can Build With BrightHawk
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          {`We combine DevOps, software engineering, and cloud expertise so you can launch and scale fast without compromising on security or quality.`}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "DevOps & Cloud Engineering",
              desc:
                "Automated CI/CD, containerization, IaC, monitoring, and high-availability environments.",
            },
            {
              title: "Custom Software Development",
              desc:
                "Web platforms, backend systems, and internal tools built with clean scalable architecture.",
            },
            {
              title: "Data & Analytics",
              desc:
                "Pipelines, processing, big-data storage, dashboards, and insights for decision making.",
            },
            {
              title: "Web & App Development",
              desc:
                "Modern, responsive, high-performance frontend and full-stack applications.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-[#0f0f0f] border border-gray-800 hover:border-orange-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Delivery Process */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          Our 5-Step Delivery Process
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          {`Every project follows a clear, structured process so you always know what is happening and what comes next.`}
        </p>

        <div className="mt-14 grid md:grid-cols-5 gap-8">
          {[
            "Discovery & Requirements",
            "Solution Design & Architecture",
            "Build & Implement",
            "Testing & Launch",
            "Support & Optimization",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[#0f0f0f] border border-gray-800 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                Step {i + 1}
              </h3>
              <p className="text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Who We Work With */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Built for Startups & Growing Businesses
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-300">
          {`We are a focused engineering team that knows how to ship under constraints such as budget, time, and resources.`}
        </p>

        <ul className="mt-10 grid md:grid-cols-2 gap-4 text-gray-300 text-lg max-w-3xl mx-auto">
          <li>• Startups building their first MVP</li>
          <li>• SMEs modernizing legacy systems</li>
          <li>• Product companies needing backend and DevOps</li>
          <li>• Businesses moving to cloud-native infrastructure</li>
        </ul>
      </section>

      {/* SECTION 5 — Why Choose Us */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Why BrightHawk?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-14">
          {[
            "Small expert team – you work directly with engineers.",
            "Security-first approach – designed for reliability from day one.",
            "Startup-friendly – flexible and cost-effective.",
            "Real-world experience – production systems across industries.",
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-300 text-lg"
            >
              • {point}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold">
          Ready to Explore{" "}
          <span className="text-orange-500">Working With Us?</span>
        </h2>

        <p className="text-gray-300 mt-4 text-lg">
          {`Tell us what you are building or struggling with and we will suggest a practical technical path forward.`}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={openModal}
            className="px-10 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 font-semibold hover:opacity-90"
          >
            Get a Free Consultation
          </button>

          <a
            href="mailto:info@brighthawk.com"
            className="px-10 py-3 rounded-lg border border-gray-500 hover:bg-gray-900"
          >
            Email Us Directly
          </a>
        </div>
      </section>

    </div>
  );
}
