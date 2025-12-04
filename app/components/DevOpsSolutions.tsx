"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "CI/CD Pipeline Automation",
    desc: "Automate build, test & deployment using Jenkins, GitLab & Azure DevOps.",
    icon: "/icons/cicd.svg"
  },
  {
    title: "Monitoring & Observability",
    desc: "Real-time health & performance insights using Prometheus, Grafana & ELK.",
    icon: "/icons/monitor.svg"
  },
  {
    title: "Scalable Infrastructure Design",
    desc: "High-performance systems with auto-scaling, load balancing & failover.",
    icon: "/icons/scalable.svg"
  },
  {
    title: "Cloud Infrastructure Management",
    desc: "AWS, Azure, GCP expertise with IaC using Terraform & Ansible.",
    icon: "/icons/cloud.svg"
  },
  {
    title: "DevSecOps",
    desc: "Security integrated in every stage with Snyk & Aqua Security.",
    icon: "/icons/security.svg"
  },
  {
    title: "Migration Services",
    desc: "Seamless on-prem to cloud migration with minimal downtime.",
    icon: "/icons/migration.svg"
  },
  {
    title: "Containerization & Orchestration",
    desc: "Docker + Kubernetes for scalability & high availability.",
    icon: "/icons/kubernetes.svg"
  },
  {
    title: "Configuration Management",
    desc: "Consistent environments using Chef, Puppet & Ansible.",
    icon: "/icons/config.svg"
  },
  {
    title: "Incident Management & Support",
    desc: "24/7 real-time monitoring & rapid issue resolution.",
    icon: "/icons/support.svg"
  },
];

export default function DevOpsSolutions() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-600 to-indigo-600 blur-[180px] opacity-25"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-600 to-pink-600 blur-[170px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          DevOps-as-a-Service:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
            What We Provide
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 25px rgba(0, 200, 255, 0.35)",
              }}
              className="relative group rounded-lg p-[2px] bg-gradient-to-br from-gray-700 to-gray-900 cursor-pointer"
            >
              {/* Neon hover glow */}
              <div
                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition duration-500 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              ></div>

              {/* Inner Card */}
              <div className="relative bg-[#0f0f0f] rounded-lg p-8 h-full border border-gray-700 shadow-xl transition group-hover:shadow-2xl">

                <img src={item.icon} className="w-14 mb-5 opacity-90 group-hover:opacity-100 transition" />

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-3">{item.desc}</p>

                <a
                  className="block mt-5 font-semibold text-cyan-300 hover:text-white transition"
                  href="#"
                >
                  Learn more →
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
