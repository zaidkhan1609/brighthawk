"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const showcaseItems = [
  {
    id: 1,
    title: "AI-Powered Candidate Journey",
    description:
      "Track every step — effortlessly. From application to final decision, RecriX visualizes each stage with AI insights, signals, documents, and interview progress in one clean dashboard.",
    image: "/landing-ui/ui1.png",
  },
  {
    id: 2,
    title: "Live Interview Workspace",
    description:
      "Everything interviewers need — in one screen. Live video, coding editor, auto notes, AI questions, and real-time scoring to streamline every technical interview.",
    image: "/landing-ui/ui2.png",
  },
  {
    id: 3,
    title: "Structured Interview Reports",
    description:
      "Beautiful, trustworthy reports — instantly generated. Get credibility scores, competency bars, behavior cues, tech proficiency, and skill gaps for confident hiring decisions.",
    image: "/landing-ui/ui3.png",
  },
  {
    id: 4,
    title: "Smart Interviewer Matching",
    description:
      "Upload a job — get the best interviewer. RecriX automatically selects the ideal verified interviewer using skills, domain fit, and performance data.",
    image: "/landing-ui/ui4.png",
  },
  {
    id: 5,
    title: "Deep AI-Driven Insights",
    description:
      "Uncover real skill and potential. Our AI analyzes coding ability, system design, communication, and patterns to deliver credibility scores and detailed gap analysis.",
    image: "/landing-ui/ui5.png",
  },
];

export default function LandingShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const item = showcaseItems[index];

  return (
    <section className="w-full py-20 bg-white relative">
      <h2 className="text-center text-4xl font-bold text-emerald-600 mb-12">
        What RecriX Can Do
      </h2>

      <div className="relative w-full flex justify-center items-center px-4">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-12 bg-emerald-600 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-emerald-700 transition"
        >
          ←
        </button>

        {/* Slide */}
        <div className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-xl border border-emerald-100 rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold text-emerald-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-4 md:right-12 bg-emerald-600 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-emerald-700 transition"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {showcaseItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              index === i ? "bg-emerald-600" : "bg-emerald-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
