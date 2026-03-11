"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col justify-center mt-12 lg:mt-0 pt-0 sm:pt-4">
      {/* Massive Typography Title */}
      <h1 className="text-[5rem] sm:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black font-sora leading-[0.9] tracking-tighter uppercase">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block text-white"
        >
          Full Stack
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block text-[#333333]"
        >
          Developer
        </motion.span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-muted text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed font-medium"
      >
        I specialize in transforming complex problems into elegant, user-friendly solutions. With a focus on Next.js, React, and modern backend technologies, I build digital experiences from the ground up.
      </motion.p>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-[#222222]">
        <div className="flex items-center gap-4 group cursor-pointer hover:bg-[#1A1A1A] p-2 rounded-2xl transition-colors col-span-2 md:col-span-1">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
            <ArrowUpRight size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-muted group-hover:text-white transition-colors">
            Dynamic<br />Animation
          </span>
        </div>

        <div>
          <h3 className="text-5xl lg:text-6xl font-black font-sora mb-2">+02</h3>
          <p className="text-sm font-bold uppercase tracking-widest text-muted">Years of<br />Experience</p>
        </div>
        <div>
          <h3 className="text-5xl lg:text-6xl font-black font-sora mb-2">10+</h3>
          <p className="text-sm font-bold uppercase tracking-widest text-muted">Projects<br />Completed</p>
        </div>
        <div>
          <h3 className="text-5xl lg:text-6xl font-black font-sora mb-2">01</h3>
          <p className="text-sm font-bold uppercase tracking-widest text-muted">Professional<br />Internship</p>
        </div>
      </div>
    </section>
  );
}
