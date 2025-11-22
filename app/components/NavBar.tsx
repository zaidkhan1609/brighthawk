"use client";

import React from "react";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";

/**
 * This NavBar is now ONLY a container for metadata.
 * It does NOT render FloatingNav — to prevent duplicate navbars.
 */

export const NavBar: React.FC = () => {
  // These items are already passed from Hero → FloatingNav.
  // We simply keep them here in case future pages need them.
  const navItems = [
    {
      name: "RecriX",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Contact us",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
    },
  ];

  // Nothing is rendered to avoid duplicate navbars.
  return null;
};

export default NavBar;
