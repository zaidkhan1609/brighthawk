"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    title: "CI/CD Pipeline Automation",
    desc: "Automate build, test & deployment using Jenkins, GitLab & Azure DevOps.",
    icon: "/icons/cicd.svg",
    details: (
      <>
        <p className="text-gray-300">
          Automate and streamline your software delivery pipeline with modern DevOps tooling.
        </p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Automated build, test, and deployment</li>
          <li>• Zero-downtime releases</li>
          <li>• Jenkins, GitHub Actions, GitLab CI</li>
          <li>• Parallel pipelines for faster delivery</li>
          <li>• Rollback & version control automation</li>
        </ul>
      </>
    ),
  },

  {
    title: "Monitoring & Observability",
    desc: "Real-time insights using Prometheus, Grafana & ELK.",
    icon: "/icons/monitor.svg",
    details: (
      <>
        <p className="text-gray-300">Monitor performance, logs, metrics, and system health in real time.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Prometheus metrics + Grafana dashboards</li>
          <li>• Centralized logging with ELK</li>
          <li>• Alerting & on-call workflows</li>
          <li>• SLO, SLA, and SLI tracking</li>
        </ul>
      </>
    ),
  },

  {
    title: "Scalable Infrastructure Design",
    desc: "Auto-scaling, load balancing & high availability.",
    icon: "/icons/scalable.svg",
    details: (
      <>
        <p className="text-gray-300">
          Build infrastructure that grows with your traffic and business demands.
        </p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Auto-scaling groups</li>
          <li>• High availability clusters</li>
          <li>• Distributed system design</li>
          <li>• Load balancing & failover routing</li>
        </ul>
      </>
    ),
  },

  {
    title: "Cloud Infrastructure Management",
    desc: "AWS, Azure, GCP with Terraform & Ansible automation.",
    icon: "/icons/cloud.svg",
    details: (
      <>
        <p className="text-gray-300">End-to-end cloud management using IaC best practices.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• AWS, Azure, and Google Cloud</li>
          <li>• Terraform, Pulumi, and Ansible automation</li>
          <li>• Secure VPC + networking setup</li>
          <li>• Cost optimization strategies</li>
        </ul>
      </>
    ),
  },

  {
    title: "DevSecOps",
    desc: "Security integrated throughout the pipeline.",
    icon: "/icons/security.svg",
    details: (
      <>
        <p className="text-gray-300">Security is embedded at every stage of the SDLC.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• SAST, DAST & dependency scanning</li>
          <li>• Vulnerability reports</li>
          <li>• Snyk, Aqua Security, Trivy</li>
          <li>• Secrets & access management</li>
        </ul>
      </>
    ),
  },

  {
    title: "Migration Services",
    desc: "Seamless on-prem to cloud migration.",
    icon: "/icons/migration.svg",
    details: (
      <>
        <p className="text-gray-300">Move from legacy systems to modern cloud with zero disruption.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• On-prem to AWS / Azure / GCP</li>
          <li>• Database migration without downtime</li>
          <li>• Refactoring monoliths</li>
          <li>• Hybrid cloud configurations</li>
        </ul>
      </>
    ),
  },

  {
    title: "Containerization & Orchestration",
    desc: "Docker + Kubernetes for high availability.",
    icon: "/icons/kubernetes.svg",
    details: (
      <>
        <p className="text-gray-300">Modern, scalable, and self-healing deployment platforms.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Docker containerization</li>
          <li>• Kubernetes orchestration</li>
          <li>• Helm, ArgoCD, Flux CD</li>
          <li>• Blue/green & canary deployments</li>
        </ul>
      </>
    ),
  },

  {
    title: "Configuration Management",
    desc: "Standardized environments with Ansible & Puppet.",
    icon: "/icons/config.svg",
    details: (
      <>
        <p className="text-gray-300">Ensure consistent environments across all deployments.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• Ansible playbooks</li>
          <li>• Puppet manifests</li>
          <li>• Version-controlled infrastructure</li>
          <li>• Automated provisioning</li>
        </ul>
      </>
    ),
  },

  {
    title: "Incident Management & Support",
    desc: "24/7 monitoring & rapid issue resolution.",
    icon: "/icons/support.svg",
    details: (
      <>
        <p className="text-gray-300">We ensure uptime and reliability through continuous monitoring.</p>
        <ul className="mt-4 space-y-2 text-gray-300 text-sm md:text-base">
          <li>• 24/7 real-time monitoring</li>
          <li>• Automated alert escalation</li>
          <li>• On-call SRE teams</li>
          <li>• Root cause analysis & prevention</li>
        </ul>
      </>
    ),
  },
];

export default function DevOpsSolutions() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="devops-solutions" className="py-20 md:py-28 relative bg-[#0a0a0a]">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] bg-gradient-to-br from-blue-600 to-indigo-600 blur-[150px] opacity-25"></div>
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] md:w-[32rem] md:h-[32rem] bg-gradient-to-br from-purple-600 to-pink-600 blur-[150px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          DevOps-as-a-Service:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            What We Provide
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-xl p-[2px] bg-gradient-to-br from-gray-700 to-gray-900 cursor-pointer"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>

              {/* Card */}
              <div className="relative bg-[#0f0f0f] rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg min-h-[260px] flex flex-col">
                <img src={item.icon} className="w-12 md:w-14 mb-5 opacity-90" />

                <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">{item.desc}</p>

                <button
                  onClick={() => setActive(i)}
                  className="mt-4 md:mt-auto font-semibold text-cyan-300 hover:text-white text-sm md:text-base transition"
                >
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-[#0f0f0f] w-[90%] max-w-lg mx-auto p-6 md:p-8 rounded-2xl border border-gray-700 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">{solutions[active].title}</h3>

              <div className="mt-4">{solutions[active].details}</div>

              <button
                onClick={() => setActive(null)}
                className="mt-8 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition w-full md:w-auto"
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
