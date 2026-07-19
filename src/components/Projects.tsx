"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chaudary Mobile Parts",
      category: "B2B Wholesale E-Commerce",
      description: "A B2B wholesale mobile parts platform built with Medusa v2 & Next.js — buyer-approval price gating, real-time inventory with stock badges, dark mode, and a custom admin dashboard with WhatsApp order sharing. Security-hardened (9/10) with CSP, rate limiting, and strict CORS.",
      image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=800&auto=format&fit=crop",
      link: "https://chaudharymobileparts.tech/pk",
      github: null,
      tag: "Live",
    },
    {
      id: 2,
      title: "Order.pk — Food Delivery Platform",
      category: "Full Stack Platform",
      description: "A multi-panel food delivery platform with customer, restaurant, rider and admin dashboards — Next.js + Express + Prisma on Supabase Postgres. JWT role-based auth, server-side order pricing and coupon validation, deployed as separate frontend and API projects on Vercel.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop",
      link: "https://food-delivery-app-beta-ochre.vercel.app/",
      github: "https://github.com/Sikandar-7/food-delivery-app",
      tag: "Live",
    },
    {
      id: 3,
      title: "Love & Joy",
      category: "Full Stack App",
      description: "A modern full stack application built with cutting-edge web technologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://loveandjoy.vercel.app/",
      github: null,
      tag: "Live",
    },
    {
      id: 4,
      title: "SK Fashion Store",
      category: "Premium E-Commerce",
      description: "A premium fashion e-commerce store with a polished UI and full shopping experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      link: "https://dev-sk-fashion-store.pantheonsite.io/",
      github: null,
      tag: "Live",
    },
    {
      id: 5,
      title: "SK Modern Blog",
      category: "Next.js Fullstack",
      description: "A fully functional blog platform with dynamic content, markdown support, and clean design.",
      image: "/blog.png",
      link: "https://sk-blog-nextjs-8fw1.vercel.app/",
      github: null,
      tag: "Live",
    },
  ];

  return (
    <section id="projects" className="flex flex-col pt-12">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-12">
        <span className="block text-white">Recent</span>
        <span className="block text-[#333333]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#111111] border border-[#222222] flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

              {/* Tag Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${project.tag === 'Live' ? 'bg-green-500/90 text-white' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'}`}>
                {project.tag === 'Live' ? '🟢 Live' : '⬡ GitHub'}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="p-5 flex items-end justify-between bg-gradient-to-t from-[#111111] to-transparent">
              <div className="flex-1">
                <p className="text-secondary text-xs font-bold tracking-wider uppercase mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white font-sora mb-2">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                )}
              </div>
              <div className="flex gap-2 ml-4 flex-shrink-0">
                {project.github && (
                  <div
                    onClick={(e) => { e.preventDefault(); window.open(project.github!, '_blank'); }}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Github size={16} />
                  </div>
                )}
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
