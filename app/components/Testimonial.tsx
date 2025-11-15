import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Meteors } from "./ui/meteors";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 30,
  perspective: 2000,
  scale: 1.05,
  speed: 100,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

// 🔄 Replaced testimonials with 4-step hiring workflow
const steps = [
  {
    id: 1,
    title: "Post Your Job",
    description:
      "Upload job details and candidate CVs. RecriX instantly prepares structured interview criteria.",
    tag: "Step 1",
  },
  {
    id: 2,
    title: "Match With an Expert",
    description:
      "Our AI pairs you with a verified domain interviewer from a 15,000+ global pool.",
    tag: "Step 2",
  },
  {
    id: 3,
    title: "Run Secure Interviews",
    description:
      "Live code tests, video verification, anti-cheat, structured questions — all automated.",
    tag: "Step 3",
  },
  {
    id: 4,
    title: "Receive AI Reports",
    description:
      "Instant insights: candidate scoring, summaries, behavior analysis, and credibility index.",
    tag: "Step 4",
  },
];

// Avatar strip stays for visual flare
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
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Avatar Row */}
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 text-center text-teal-600">
          How It Works
        </h2>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-4">
          {steps.map((step) => (
            <div key={step.id} className="w-full relative max-w-xs mx-auto">
              <Tilt options={defaultOptions}>
                <div className="absolute inset-0 h-full w-full bg-teal-900/60 transform scale-[0.80] rounded-full blur-3xl opacity-30" />

                <div
                  className="relative shadow-[0_0_20px_rgba(0,128,128,0.4)] border border-teal-800 px-5 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
                  style={{ backgroundColor: "#123F36" }} // deep teal green
                >
                  {/* Step Circle */}
                  <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4 border border-teal-400 bg-teal-600/20">
                    <span className="text-teal-200 text-xs font-semibold">
                      {step.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-bold text-lg text-white mb-3 relative z-50">
                    {step.title}
                  </h1>

                  {/* Description */}
                  <p className="font-normal text-sm text-teal-200 mb-4 relative z-50 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Button Tag */}
                  <button className="border px-4 py-1 rounded-lg border-teal-500 text-teal-200 text-xs">
                    Learn More
                  </button>

                  {/* Meteors */}
                  <Meteors number={15} />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
