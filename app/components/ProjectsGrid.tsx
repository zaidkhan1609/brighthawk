// app/components/ProjectsGrid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  ShieldCheck,
  Cpu,
  FileSearch,
  Users,
  Video,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Interview Analytics",
    description:
      "Get instant structured reports, credibility scoring, summaries, and skill-gap analysis.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Candidate Authenticity Check",
    description:
      "Advanced anti-cheat, code similarity detection, and secure identity verification.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Expert Interviewer Matching",
    description:
      "Get paired with a verified domain-specific professional in seconds.",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "AI-Generated Candidate Reports",
    description:
      "Deep candidate profiling including behavioural scoring and technical performance review.",
    icon: FileSearch,
  },
  {
    id: 5,
    title: "15,000+ Multi-Domain Interviewers",
    description:
      "A panel of global experts ready to interview candidates across any industry.",
    icon: Users,
  },
  {
    id: 6,
    title: "Structured Video Interview Platform",
    description:
      "Live code execution, recorded sessions, question timers, and skill benchmarking.",
    icon: Video,
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div
      id="features"
      className="max-w-7xl mx-auto px-4 pb-10 md:py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
        Core Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-teal-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-green-500 text-white mb-4">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
