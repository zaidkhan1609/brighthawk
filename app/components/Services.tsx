"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "DevOps-as-a-Service",
    desc: "Seamless integration, automation, pipelines, and faster delivery with enterprise-grade DevOps.",
    color: "from-blue-500 to-cyan-400",
    details: (
      <>
        <p className="text-gray-300 leading-relaxed">
          We understand the importance of agility in software development. 
          Our DevOps-as-a-Service bridges the gap between development and operations,
          ensuring seamless collaboration and faster delivery.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• <b>CI/CD Pipeline Automation</b>: Automate delivery to reduce errors and deploy faster.</li>
          <li>• <b>Cloud Infrastructure Management</b>: AWS, Azure & GCP optimization for performance and cost.</li>
          <li>• <b>Containerization & Orchestration</b>: Docker & Kubernetes solutions for scalable deployments.</li>
          <li>• <b>Monitoring & Observability</b>: Prometheus, Grafana, ELK, New Relic insights.</li>
          <li>• <b>DevSecOps Integration</b>: Security embedded across the entire lifecycle.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Custom Software Development",
    desc: "Innovative, scalable, and secure applications tailored to your business goals.",
    color: "from-purple-500 to-pink-500",
    details: (
      <>
        <p className="text-gray-300 leading-relaxed">
          Our software team builds tailor-made solutions focused on quality,
          innovation, and long-term scalability.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• <b>Web Application Development</b>: Modern, fast, scalable web apps.</li>
          <li>• <b>Mobile App Development</b>: iOS, Android & cross-platform mobile apps.</li>
          <li>• <b>Enterprise Software Solutions</b>: Custom tools for large-scale operations.</li>
          <li>• <b>System Modernization</b>: Upgrade outdated systems to boost efficiency.</li>
          <li>• <b>Agile Development</b>: Iterative, fast delivery with continuous feedback.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Big Data Services",
    desc: "Unlock insights and make smarter decisions with enterprise-grade data engineering.",
    color: "from-orange-500 to-amber-500",
    details: (
      <>
        <p className="text-gray-300 leading-relaxed">
          Turn raw data into actionable intelligence using modern data platforms and analytics.
        </p>

        <ul className="mt-4 space-y-2 text-gray-300">
          <li>• <b>Data Engineering</b>: Build scalable data pipelines for ingestion & processing.</li>
          <li>• <b>Analytics & Insights</b>: Identify trends and business opportunities.</li>
          <li>• <b>Real-Time Processing</b>: Kafka + Spark Streaming for time-sensitive insights.</li>
          <li>• <b>Data Platform Expertise</b>: Hadoop, Elasticsearch & cloud-native stacks.</li>
          <li>• <b>Predictive Modeling</b>: Machine learning for future-driven decisions.</li>
        </ul>
      </>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 bg-[#0a0a0a] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-600 to-pink-500 blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600 to-indigo-600 blur-[160px] opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Tailored Solutions for Your Success
        </motion.h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Explore our core services designed to meet the diverse needs of your business.
        </p>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group rounded-lg p-[2px] bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl"
            >
              {/* Neon Glow */}
              <div
                className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r ${service.color}`}
              ></div>

              {/* Card */}
              <div className="relative bg-[#0f0f0f] rounded-lg p-8 h-full flex flex-col justify-between border border-gray-800">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>

                {/* OPEN MODAL BUTTON */}
                <button
                  onClick={() => setActiveService(index)}
                  className={`mt-8 px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${service.color} shadow-md hover:opacity-90 transition`}
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0f0f0f] max-w-xl w-full mx-6 p-8 rounded-2xl border border-gray-800 shadow-2xl relative"
            >
              <h3 className="text-3xl font-bold text-white">
                {services[activeService].title}
              </h3>

              <div className="mt-4">{services[activeService].details}</div>

              <button
                onClick={() => setActiveService(null)}
                className="mt-8 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                Close
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
