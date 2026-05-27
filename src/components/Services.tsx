"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Megaphone, BarChart3, Code2 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Custom websites, e-commerce stores, and web applications built with modern tech like Next.js, React, and Node.js.",
    icon: <Code2 size={32} className="text-primary mb-4" />,
  },
  {
    id: 2,
    title: "Social Media Management",
    description: "End-to-end management of your social profiles. Content strategy, posting schedules, and engaging with your audience.",
    icon: <MonitorSmartphone size={32} className="text-primary mb-4" />,
  },
  {
    id: 3,
    title: "Digital Growth & Marketing",
    description: "Data-driven strategies, paid ad campaigns, and SEO to increase your reach, drive traffic, and boost conversions.",
    icon: <BarChart3 size={32} className="text-primary mb-4" />,
  },
  {
    id: 4,
    title: "Brand Strategy & Creation",
    description: "Crafting a unique brand identity, designing eye-catching visuals, and establishing a strong voice for your business.",
    icon: <Megaphone size={32} className="text-primary mb-4" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-5xl md:text-7xl font-black font-sora tracking-tighter uppercase text-white">
          My <span className="text-[#333333]">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card-bg border border-white/5 rounded-3xl p-8 hover:bg-[#1A1A1A] transition-colors group"
          >
            {service.icon}
            <h3 className="text-2xl font-bold font-sora mb-3 text-white group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
