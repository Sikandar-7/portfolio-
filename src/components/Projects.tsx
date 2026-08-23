"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

type ProjectType = "client" | "self" | "mockup";

export default function Projects() {
  const projects: {
    id: number;
    type: ProjectType;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
    github: string | null;
    tag: string;
  }[] = [
    {
      id: 8,
      type: "self",
      title: "Buraq Tech — Software House",
      category: "Founder",
      description: "The software house I founded in Lahore — websites, online stores, mobile apps and WhatsApp automation for clients in Pakistan and abroad. Every client sees a working demo before paying anything, and the price is quoted before the work starts, not after. Next.js, with a landing page per service, structured data throughout and content written to be quotable by answer engines.",
      image: "/buraqtech.png",
      link: "https://buraqtech.uk",
      github: null,
      tag: "Live",
    },
    {
      id: 3,
      type: "self",
      title: "hashChat — WhatsApp CRM",
      category: "My SaaS Product",
      description: "A multi-tenant WhatsApp CRM I built and run as a subscription product — shared team inbox on the official WhatsApp Business API, contacts with tags and custom fields, Kanban pipelines, broadcast campaigns, no-code automation flows and AI replies. Runs on my own infrastructure: Docker on a VPS, self-hosted Supabase, nightly verified backups and uptime monitoring. Android app packaged with Capacitor.",
      image: "/hashchat.png",
      link: "https://hashchat.uk",
      github: "https://github.com/Sikandar-7/personal-wa-crm",
      tag: "Live",
    },
    {
      id: 1,
      type: "client",
      title: "Chaudary Mobile Parts",
      category: "B2B Wholesale E-Commerce",
      description: "A B2B wholesale mobile parts platform built with Medusa v2 & Next.js — buyer-approval price gating, real-time inventory with stock badges, dark mode, and a custom admin dashboard with WhatsApp order sharing. Security-hardened (9/10) with CSP, rate limiting, and strict CORS.",
      image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=800&auto=format&fit=crop",
      link: "https://chaudharymobileparts.tech/pk",
      github: null,
      tag: "Live",
    },
    {
      id: 4,
      type: "client",
      title: "Orbit API — WhatsApp Business Platform",
      category: "Client Project",
      description: "A WhatsApp Business API platform delivered for a client — multi-tenant WABA onboarding, plan-gated messaging limits, team inbox and campaign tooling. Built as four services: a Next.js dashboard, Node/Express API, marketing site and a Flutter mobile app.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      link: "https://orbit-api-landing.vercel.app/",
      github: "https://github.com/Sikandar-7/orbit-api-landing",
      tag: "Live",
    },
    {
      id: 2,
      type: "mockup",
      title: "Order.pk — Food Delivery Platform",
      category: "Full Stack Platform",
      description: "A multi-panel food delivery platform with customer, restaurant, rider and admin dashboards — Next.js + Express + Prisma on Supabase Postgres. JWT role-based auth, server-side order pricing and coupon validation, deployed as separate frontend and API projects on Vercel.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop",
      link: "https://food-delivery-app-beta-ochre.vercel.app/",
      github: "https://github.com/Sikandar-7/food-delivery-app",
      tag: "Live",
    },
    {
      id: 6,
      type: "self",
      title: "SK Modern Blog",
      category: "Astro + Supabase",
      description: "A fast, static-first blog rebuilt on Astro — MDX articles ship almost no JavaScript, with a Supabase-backed community layer for accounts, a markdown editor, comments and an admin panel. Per-article share cards and an llms.txt for answer engines.",
      image: "/blog.png",
      link: "https://sk-blog-nextjs-8fw1.vercel.app/",
      github: null,
      tag: "Live",
    },
    {
      id: 5,
      type: "mockup",
      title: "Love & Joy",
      category: "Full Stack App",
      description: "A modern full stack application built with cutting-edge web technologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      link: "https://loveandjoy.vercel.app/",
      github: null,
      tag: "Live",
    },
    {
      id: 7,
      type: "mockup",
      title: "SK Fashion Store",
      category: "E-Commerce Mockup",
      description: "A premium fashion e-commerce storefront — polished product pages, cart and a full checkout flow. A design/build mockup.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
      link: "https://dev-sk-fashion-store.pantheonsite.io/",
      github: null,
      tag: "Live",
    },
  ];

  const filters: { key: ProjectType | "all"; label: string }[] = [
    { key: "all", label: "All" },
    { key: "client", label: "Client Work" },
    { key: "self", label: "Self Projects" },
    { key: "mockup", label: "Mockups" },
  ];

  const [active, setActive] = useState<ProjectType | "all">("all");

  // Only show a filter tab when at least one project belongs to it,
  // so an empty "Mockups" tab never appears until there is a mockup.
  const present = new Set(projects.map((p) => p.type));
  const visibleFilters = filters.filter((f) => f.key === "all" || present.has(f.key));

  const shown = active === "all" ? projects : projects.filter((p) => p.type === active);
  const countFor = (key: ProjectType | "all") =>
    key === "all" ? projects.length : projects.filter((p) => p.type === key).length;

  return (
    <section id="projects" className="flex flex-col pt-12">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-8">
        <span className="block text-white">Recent</span>
        <span className="block text-[#333333]">Projects</span>
      </h2>

      {/* Filter tabs — client work vs personal builds vs mockups */}
      <div className="flex flex-wrap gap-2 mb-10">
        {visibleFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              active === f.key
                ? "bg-primary text-white"
                : "bg-[#111111] border border-[#222222] text-gray-400 hover:text-white hover:border-[#333333]"
            }`}
          >
            {f.label}
            <span className="ml-1.5 opacity-60">{countFor(f.key)}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shown.map((project) => (
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

              {/* Type Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white border border-white/20">
                {project.type === 'client' ? 'Client' : project.type === 'mockup' ? 'Mockup' : 'Personal'}
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
