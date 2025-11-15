import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Meteors } from "./ui/meteors";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 25,
  perspective: 1800,
  scale: 1.04,
  speed: 800,
  transition: true,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

// 4-step refined hiring workflow
const steps = [
  {
    id: 1,
    title: "Post Your Job",
    description:
      "Add job details and candidate CVs. RecriX instantly generates structured interview criteria.",
    tag: "Step 1",
  },
  {
    id: 2,
    title: "Match With an Expert",
    description:
      "Our AI pairs you with a verified domain interviewer from a global 15,000+ expert network.",
    tag: "Step 2",
  },
  {
    id: 3,
    title: "Run Secure Interviews",
    description:
      "AI-led questions, live coding, anti-cheat, video verification — fully automated.",
    tag: "Step 3",
  },
  {
    id: 4,
    title: "Receive AI Reports",
    description:
      "Structured scoring, behavior signals, credibility index, and full interview summary.",
    tag: "Step 4",
  },
];

// Avatar group
const people = [
  {
    id: 1,
    name: "RecriX Experts",
    designation: "Panel",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Global Recruiters",
    designation: "Team",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Tech Interviewers",
    designation: "Engineers",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 4,
    name: "Hiring Managers",
    designation: "Experts",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F1A] to-[#071712]">
      <div className="container mx-auto px-6">

        {/* Avatar Row */}
        <div className="flex flex-row items-center justify-center mb-12">
          <AnimatedTooltip items={people} />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-14 text-center bg-gradient-to-r from-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-md">
          How RecriX Works
        </h2>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Tilt options={defaultOptions} key={step.id}>
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-teal-500/40 to-emerald-600/40 shadow-lg">
                <div className="relative bg-[#0B2620] rounded-2xl p-7 h-full overflow-hidden group border border-teal-700/40">

                  {/* Glow Background */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-all duration-500 bg-gradient-to-br from-teal-400 to-emerald-400 blur-2xl" />

                  {/* Step Tag */}
                  <div className="h-9 w-9 rounded-full flex items-center justify-center mb-5 
                    border border-teal-400 bg-teal-500/20 shadow-inner">
                    <span className="text-teal-200 text-xs font-semibold">
                      {step.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-white mb-3 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-teal-200/90 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* CTA */}
                  <button className="px-4 py-1.5 rounded-lg text-xs border border-teal-400/70 text-teal-200 hover:bg-teal-600/20 transition-all">
                    Learn More
                  </button>

                  {/* Meteors */}
                  <Meteors number={12} />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
