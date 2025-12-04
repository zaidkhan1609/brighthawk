"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "#who-we-are" },
  { label: "Our Services", href: "#services" },
  { label: "Sectors We Serve", href: "#sectors" },
  { label: "DevOps", href: "#devops-solutions" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const linksRef = useRef([]);

  // Scroll detection
  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 120;
      setScrolled(window.scrollY > 20);

      const sections = navLinks.filter(l => l.href.startsWith("#"));

      for (let sec of sections) {
        const el = document.querySelector(sec.href);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.clientHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(sec.label);
        }
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Underline indicator movement
  useEffect(() => {
    const index = navLinks.findIndex((link) => link.label === active);
    const el = linksRef.current[index];

    if (el) {
      setIndicatorProps({
        left: el.offsetLeft,
        width: el.clientWidth,
      });
    }
  }, [active]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 
          "backdrop-blur-xl bg-white/5 border-b border-white/10" : 
          "bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* TEXT LOGO (NO IMAGE) */}
        <a href="/" className="text-2xl font-extrabold tracking-tight text-white">
          Bright<span className="text-orange-500">Hawk</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 relative">
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
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setActive(item.label)}
              className={`
                text-sm font-medium transition relative pb-1
                ${active === item.label ? "text-orange-400" : "text-gray-200 hover:text-orange-300"}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-black/40 border-t border-white/10 px-6 py-4 space-y-3"
          >
            {navLinks.map((item) => (
              <button
                key={item.label}
                href={item.href}
                className={`
                  block text-lg py-2 w-full text-left
                  ${active === item.label ? "text-orange-400" : "text-gray-200"}
                  hover:text-orange-300
                `}
                onClick={() => { 
                  setActive(item.label);
                  setOpen(false);
                }}
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
