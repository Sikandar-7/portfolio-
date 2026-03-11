"use client";

import { Home, FolderDot, Briefcase, Wrench, PenTool } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: Home, href: "#home" },
    { id: "projects", icon: FolderDot, href: "#projects" },
    { id: "experience", icon: Briefcase, href: "#experience" },
    { id: "tools", icon: Wrench, href: "#tools" },
    { id: "blog", icon: PenTool, href: "#blog" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <nav className="flex items-center gap-6 px-6 py-3 bg-[#1A1A1A]/80 backdrop-blur-md border border-[#333333] rounded-full pointer-events-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className="relative p-2 group"
            >
              <Icon
                size={20}
                className={`transition-colors duration-300 z-10 relative ${
                  isActive ? "text-foreground" : "text-muted group-hover:text-foreground"
                }`}
              />
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[#333333] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
