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
    image: "/landing-ui/ui1.webp",
  },
  {
    id: 2,
    title: "Live Interview Workspace",
    description:
      "Everything interviewers need — in one screen. Live video, coding editor, auto notes, AI questions, and real-time scoring to streamline every technical interview.",
    image: "/landing-ui/ui2.webp",
  },
  {
    id: 3,
    title: "Structured Interview Reports",
    description:
      "Beautiful, trustworthy reports — instantly generated. Get credibility scores, competency bars, behavior cues, tech proficiency, and skill gaps for confident hiring decisions.",
    image: "/landing-ui/ui3.webp",
  },
  {
    id: 4,
    title: "Smart Interviewer Matching",
    description:
      "Upload a job — get the best interviewer. RecriX automatically selects the ideal verified interviewer using skills, domain fit, and performance data.",
    image: "/landing-ui/ui4.webp",
  },
  {
    id: 5,
    title: "Deep AI-Driven Insights",
    description:
      "Uncover real skill and potential. Our AI analyzes coding ability, system design, communication, and patterns to deliver credibility scores and detailed gap analysis.",
    image: "/landing-ui/ui5.webp",
  },
];

export default function LandingShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % showcaseItems.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);

  const item = showcaseItems[index];

  return (
    <section className="w-full py-16 bg-white relative">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-emerald-600 mb-12">
        What RecriX Can Do
      </h2>

      <div className="flex flex-col items-center w-full px-4">
        {/* FIXED RESPONSIVE HEIGHT */}
        <div className="w-full max-w-5xl min-h-[600px] sm:min-h-[520px] lg:min-h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white shadow-xl border border-emerald-100 rounded-2xl sm:rounded-3xl 
                         p-6 sm:p-10 flex flex-col md:flex-row gap-8 sm:gap-10 w-full items-center"
            >
              {/* FIXED IMAGE SIZE WRAPPER */}
              <div className="w-full md:w-1/2">
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CENTERED BUTTONS */}
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={prev}
            className="bg-emerald-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                       shadow-md hover:bg-emerald-700 transition"
          >
            ←
          </button>

          <div className="flex space-x-2 sm:space-x-3">
            {showcaseItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition ${
                  index === i ? "bg-emerald-600" : "bg-emerald-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="bg-emerald-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                       shadow-md hover:bg-emerald-700 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
