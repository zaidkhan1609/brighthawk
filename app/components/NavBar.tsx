"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  /** Scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let link of navLinks) {
        if (!link.href.startsWith("#")) continue;
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(link.label);
        }

        if (link.href === "#footer") {
          if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
            setActive("Contact");
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Move underline */
  useEffect(() => {
    const container = navContainerRef.current;
    if (!container) return;

    const index = navLinks.findIndex((l) => l.label === active);
    const el = linkRefs.current[index];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const crect = container.getBoundingClientRect();

    setIndicator({
      left: rect.left - crect.left,
      width: rect.width,
    });
  }, [active]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const item = navLinks[index];
    setActive(item.label);

    const target = document.querySelector(item.href) as HTMLElement | null;
    if (target) target.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/5 border-b border-white/10"
                 : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-3 md:px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="BrightHawk Logo"
            className="h-12 w-auto md:h-24 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <div ref={navContainerRef} className="hidden md:flex items-center gap-10 relative">

          {/* Underline */}
          <motion.div
            className="absolute bottom-[-4px] h-[2.5px] bg-orange-400 rounded-full"
            animate={{ left: indicator.left, width: indicator.width }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              ref={(el) => {
                linkRefs.current[i] = el; // <-- FIXED (void return)
              }}
              onClick={(e) => handleClick(e, i)}
              className={`text-sm font-medium pb-1 transition ${
                active === item.label
                  ? "text-orange-400"
                  : "text-gray-200 hover:text-orange-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/40 border-t border-white/10 px-6 py-4 space-y-4">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, i)}
              className={`block text-lg ${
                active === item.label ? "text-orange-400" : "text-gray-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
