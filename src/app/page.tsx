import { ArrowUpRight } from "lucide-react";

import ContactForm from "@/components/ContactForm";

const yearsOfExperience = new Date().getFullYear() - 2023;

const links = [
  { label: "Email", href: "mailto:sikandar8sa@gmail.com" },
  { label: "GitHub", href: "https://github.com/Sikandar-7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sikandar-abbas-572b04287" },
];

const experience = [
  {
    role: "Founder & Full Stack Developer",
    company: "Buraq Tech",
    date: "2026 — Present",
    points: [
      "Run a Lahore-based software house delivering websites, online stores, mobile apps and WhatsApp automation for clients in Pakistan and abroad.",
      "Give every client a working demo before payment and a fixed quote before work starts.",
      "Manage production hosting myself: Docker on a VPS, automated deployments and daily backups.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    date: "2024 — Present",
    points: [
      "Build custom web applications, e-commerce platforms and dashboards with Next.js, React and Node.js.",
      "Delivered a B2B wholesale platform with buyer-approval pricing, live inventory and a custom admin dashboard.",
      "Delivered a WhatsApp Business platform of four services: dashboard, API, marketing site and mobile app.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "xNerds Solutions",
    date: "2023 — 2024",
    points: [
      "Worked with senior engineers on scalable web applications.",
      "Contributed to frontend development, debugging and REST API integration.",
    ],
  },
];

const projects: { title: string; description: string; stack?: string; link: string }[] = [
  {
    title: "Buraq Tech",
    description: "Software house website with a landing page for each service and structured data throughout.",
    stack: "Next.js",
    link: "https://buraqtech.uk",
  },
  {
    title: "hashChat",
    description: "Multi-tenant WhatsApp CRM with a shared team inbox, pipelines, broadcasts, automation flows and an Android app.",
    stack: "Next.js, Supabase, Kotlin, WhatsApp Business API",
    link: "https://hashchat.uk",
  },
  {
    title: "Chaudary Mobile Parts",
    description: "B2B wholesale store with buyer-approval pricing, live stock and WhatsApp order sharing.",
    stack: "Medusa v2, Next.js",
    link: "https://chaudharymobileparts.tech/pk",
  },
  {
    title: "Orbit API",
    description: "WhatsApp Business platform for a client, with multi-tenant onboarding, team inbox and campaigns.",
    stack: "Next.js, Node.js, Express, Flutter",
    link: "https://orbit-api-landing.vercel.app/",
  },
  {
    title: "Order.pk",
    description: "Food delivery platform with customer, restaurant, rider and admin panels.",
    stack: "Next.js, Express, Prisma, PostgreSQL",
    link: "https://demo-food.buraqtech.uk/",
  },
  {
    title: "SK Modern Blog",
    description: "Fast static blog with accounts, a markdown editor, comments and an admin panel.",
    stack: "Astro, MDX, Supabase",
    link: "https://demo-blog.buraqtech.uk/",
  },
  {
    title: "Love & Joy",
    description: "Single-product store for a teddy bear brand, with cash on delivery and a short checkout.",
    link: "https://loveandjoy.vercel.app/",
  },
  {
    title: "SK Fashion Store",
    description: "Fashion store demo with product pages, cart and a full checkout flow.",
    stack: "Next.js, Tailwind CSS",
    link: "https://demo-store.buraqtech.uk/",
  },
  {
    title: "SK Player",
    description: "Free media player for Windows.",
    stack: "Python, PySide6, libVLC",
    link: "https://buraqtech.uk/apps",
  },
  {
    title: "SK Video Repair",
    description: "Free Windows tool that repairs damaged video files.",
    stack: "Python",
    link: "https://buraqtech.uk/apps",
  },
];

const skills = [
  { group: "Frontend", items: "Next.js, React, TypeScript, Tailwind CSS, Astro" },
  { group: "Backend", items: "Node.js, Express, Prisma, PostgreSQL, Supabase, Medusa" },
  { group: "Mobile", items: "Kotlin, Flutter" },
  { group: "DevOps", items: "Docker, VPS hosting, automated deployments" },
  { group: "Growth", items: "SEO, Meta Ads, Google Analytics" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-medium uppercase tracking-widest text-muted">{children}</h2>;
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-16 px-5 py-20 sm:px-6 sm:py-28">
      <header>
        <h1 className="font-sora text-3xl font-bold tracking-tight sm:text-4xl">Sikandar Abbas</h1>
        <p className="mt-2 font-medium">Full Stack Web Developer, Lahore, Pakistan</p>
        <p className="mt-6 leading-7 text-muted">
          Full stack web developer with {yearsOfExperience}+ years of experience building websites,
          e-commerce platforms and web applications for clients in Pakistan and abroad. I work across
          the stack with Next.js, React, TypeScript, Node.js and PostgreSQL, and deploy and run what I
          build. I also handle SEO and paid ads, so the work reaches customers.
        </p>
        <nav className="mt-6 flex gap-6 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-6 flex flex-col gap-10">
          {experience.map((job) => (
            <article key={job.company}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="font-medium">
                  {job.role} <span className="text-muted">— {job.company}</span>
                </h3>
                <span className="shrink-0 text-sm text-muted">{job.date}</span>
              </div>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-6 text-muted marker:text-border">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Projects</SectionTitle>
        <ul className="mt-2 divide-y divide-border">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 py-4"
              >
                <span>
                  <span className="block font-medium">{project.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{project.description}</span>
                  {project.stack && (
                    <span className="mt-1 block text-xs leading-5 text-muted/70">{project.stack}</span>
                  )}
                </span>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-foreground"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>Skills</SectionTitle>
        <dl className="mt-6 flex flex-col gap-2 text-sm leading-6">
          {skills.map((skill) => (
            <div key={skill.group} className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="shrink-0 font-medium sm:w-24">{skill.group}</dt>
              <dd className="text-muted">{skill.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact">
        <SectionTitle>Contact</SectionTitle>
        <p className="mt-6 text-sm leading-6 text-muted">
          Available for freelance projects. Tell me what you need, and I&apos;ll reply by email.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
