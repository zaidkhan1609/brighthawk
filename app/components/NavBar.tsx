"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Company", href: "#who-we-are" },
  { label: "Our Services", href: "#services" },
  { label: "Sectors We Serve", href: "#sectors" },
  { label: "DevOps", href: "#devops-solutions" },
  { label: "Contact", href: "#footer" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // strictly typed refs for each desktop button
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const [indicatorProps, setIndicatorProps] = useState({
    left: 0,
    width: 0,
  });

  // helper: update indicator from index (if element exists)
  const updateIndicatorFromIndex = (index: number | null) => {
    if (index === null) {
      setIndicatorProps({ left: 0, width: 0 });
      return;
    }
    const el = linksRef.current[index];
    const container = navContainerRef.current;
    if (!el || !container) return;

    // compute left relative to nav container so absolute positioning works correctly
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setIndicatorProps({
      left: elRect.left - containerRect.left,
      width: elRect.width,
    });
  };

  // Scroll detection: highlights section on scroll
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 120;
      setScrolled(window.scrollY > 20);

      const sections = navLinks.filter((l) => l.href.startsWith("#"));

      for (let sec of sections) {
        const el = document.querySelector(sec.href) as HTMLElement | null;
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(sec.label);
          // update indicator to match the newly active label
          const idx = navLinks.findIndex((n) => n.label === sec.label);
          // slight defer to allow layout to stabilize
          requestAnimationFrame(() => updateIndicatorFromIndex(idx));
          break;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // move indicator when active changes (desktop)
  useEffect(() => {
    const idx = navLinks.findIndex((link) => link.label === active);
    // Slight delay so DOM paint finishes (helps when clicking then scrolling)
    const raf = requestAnimationFrame(() => updateIndicatorFromIndex(idx));
    return () => cancelAnimationFrame(raf);
  }, [active]);

  // recompute on resize (keeps indicator aligned)
  useEffect(() => {
    const onResize = () => {
      const idx = navLinks.findIndex((link) => link.label === active);
      updateIndicatorFromIndex(idx === -1 ? null : idx);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/5 border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO IMAGE (Unchanged) */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="BrightHawk Logo"
            className="h-14 w-auto md:h-16 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div
          ref={navContainerRef}
          className="hidden md:flex items-center gap-10 relative"
        >
          {/* Underline Indicator */}
          <motion.div
            className="absolute bottom-[-4px] h-[2.5px] bg-orange-400 rounded-full"
            animate={{
              left: indicatorProps.left,
              width: indicatorProps.width,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {navLinks.map((item, i) => (
            <button
              key={item.label}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              onClick={() => {
                // set active immediately so color changes on click
                setActive(item.label);

                // scroll to target section if available
                if (item.href.startsWith("#")) {
                  const target = document.querySelector(item.href) as HTMLElement | null;
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }

                // update indicator immediately based on clicked button
                // use requestAnimationFrame to ensure measurements are correct
                requestAnimationFrame(() => updateIndicatorFromIndex(i));
              }}
              className={`
                text-sm font-medium transition relative pb-1
                ${
                  active === item.label
                    ? "text-orange-400"
                    : "text-gray-200 hover:text-orange-300"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-black/40 border-t border-white/10 px-6 py-4 space-y-4"
          >
            {navLinks.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setOpen(false);
                  if (item.href.startsWith("#")) {
                    const target = document.querySelector(item.href) as HTMLElement | null;
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                  // in case user wants indicator updated after they open desktop later
                  requestAnimationFrame(() => updateIndicatorFromIndex(idx));
                }}
                className={`
                  block text-lg w-full text-left
                  ${
                    active === item.label
                      ? "text-orange-400"
                      : "text-gray-200"
                  }
                  hover:text-orange-300
                `}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
