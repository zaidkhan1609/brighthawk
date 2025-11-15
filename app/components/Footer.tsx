"use client";
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-10 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-teal-500 tracking-wide">
            RecriX
          </h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            On-demand expert interviewers, AI-assisted scoring, and faster,
            fairer hiring for modern companies.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold text-teal-400 mb-4">
            Product
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#how-it-works" className="hover:text-teal-300">How It Works</Link></li>
            <li><Link href="#pricing" className="hover:text-teal-300">Pricing</Link></li>
            <li><Link href="#features" className="hover:text-teal-300">Features</Link></li>
            <li><Link href="#comparison" className="hover:text-teal-300">RecriX vs Traditional</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-teal-400 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-teal-300">About Us</Link></li>
            <li><Link href="#team" className="hover:text-teal-300">Our Team</Link></li>
            <li><Link href="#contact" className="hover:text-teal-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-teal-400 mb-4">
            Connect
          </h4>
          <div className="flex space-x-4">
            <Link href="#">
              <Linkedin className="w-5 h-5 hover:text-teal-300" />
            </Link>
            <Link href="#">
              <Twitter className="w-5 h-5 hover:text-teal-300" />
            </Link>
            <Link href="#">
              <Facebook className="w-5 h-5 hover:text-teal-300" />
            </Link>
            <Link href="#">
              <Instagram className="w-5 h-5 hover:text-teal-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-slate-800 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} RecriX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
