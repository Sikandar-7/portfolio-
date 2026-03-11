import { Flame } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-full lg:w-[350px] shrink-0">
      <div className="sticky top-12 bg-card-bg text-card-fg rounded-[32px] p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
        {/* Background Decorative Arcs */}
        <div className="absolute top-0 right-0 w-64 h-64 border-[2px] border-dashed border-primary rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-48 border-[2px] border-solid border-primary rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none" />

        {/* Profile Image with Orange Backdrop */}
        <div className="relative w-64 h-64 sm:w-[280px] sm:h-[280px] rounded-[24px] overflow-hidden mb-6 z-10 border-4 border-card-bg shadow-lg">
          <Image
            src="/sikandar.webp"
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

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-8 mb-2 w-full">
          <button className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors py-3 rounded-full font-bold text-sm">
            Let's Talk
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-[#e64a2e] transition-colors shrink-0">
            <Flame size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}
