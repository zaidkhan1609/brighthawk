"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DevOps-as-a-Service",
    desc: "Seamless integration, automation, pipelines, and faster delivery with enterprise-grade DevOps.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Custom Software Development",
    desc: "Innovative, scalable, and secure applications tailored to your business goals.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Big Data Services",
    desc: "Unlock actionable insights and make smarter decisions with powerful data engineering solutions.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-10 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 blur-[160px] opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
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
              {/* Neon Border Glow */}
              <div
                className={`absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r ${service.color}`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-[#0f0f0f] rounded-lg p-8 h-full flex flex-col justify-between border border-gray-800">
                
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                </div>

                {/* Learn More Button */}
                <button
                  className={`mt-8 px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${service.color} shadow-md hover:opacity-90 transition`}
                >
                  Learn More →
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
