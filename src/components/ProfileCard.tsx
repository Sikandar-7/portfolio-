
"use client";

import { Flame } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <div className="w-full lg:w-[350px] shrink-0">
      <motion.div className="sticky top-12 bg-card-bg text-card-fg rounded-[32px] p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
        {/* Background Decorative Arcs */}
        <div className="absolute top-0 right-0 w-64 h-64 border-[2px] border-dashed border-primary rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 border-[2px] border-solid border-primary rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none" />

        {/* Profile Image with Orange Backdrop */}
        <div className="relative w-64 h-64 sm:w-[280px] sm:h-[280px] rounded-[24px] overflow-hidden mb-6 z-10 border-4 border-card-bg shadow-lg">
          <Image
            src="/ss.webp"
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name and Title */}
        <h2 className="text-3xl font-bold font-sora mt-2 tracking-tight">
          Sikandar Abbas
        </h2>
        <p className="text-sm text-gray-600 mt-2 max-w-[250px] font-medium leading-relaxed">
          A Full Stack Developer dedicated to building highly performant and modern web applications.
        </p>

        {/* Social Icons Placeholder */}
        <div className="flex gap-4 mb-6"></div>

        {/* Let's Talk Button */}
        <Link href="#contact" className="bg-primary text-black font-semibold py-4 px-6 rounded-2xl w-full flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
          <span>Let&apos;s Talk</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 18H12.75V21H11.25V18ZM2 9.00001C2.00028 11.0253 2.94657 12.9324 4.56687 14.1687L5.5534 14.9213V18H7.0534V14.1687C5.4331 12.9324 4.4868 11.0253 4.48708 9.00001C4.48708 6.00001 7.48708 3.00001 12 3.00001C16.5129 3.00001 19.5129 6.00001 19.5129 9.00001C19.5132 11.0253 18.5669 12.9324 16.9466 14.1687V18H18.4466V14.9213L19.4331 14.1687C21.0534 12.9324 22 11.0253 22 9.00001C22 4.00001 17.0002 0.5 12 0.5C6.9998 0.5 2 4.00001 2 9.00001Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
