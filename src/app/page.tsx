import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

const skills = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Astro"],
    tint: "bg-orange-100 text-orange-800",
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "Medusa"],
    tint: "bg-teal-100 text-teal-800",
  },
  { group: "Mobile", items: ["Kotlin", "Flutter"], tint: "bg-indigo-100 text-indigo-800" },
  {
    group: "DevOps",
    items: ["Docker", "VPS hosting", "Automated deployments"],
    tint: "bg-amber-100 text-amber-800",
  },
  {
    group: "Growth",
    items: ["SEO", "Meta Ads", "Google Analytics"],
    tint: "bg-rose-100 text-rose-800",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-sora text-xl font-bold">{children}</h2>;
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-14 px-5 py-10 sm:px-6 sm:py-14">
      <header className="rounded-3xl border border-border bg-gradient-to-br from-orange-100 via-white to-teal-100 p-6 sm:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-secondary">
          <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden />
          Available for freelance projects
        </p>
        <h1 className="mt-5 font-sora text-4xl font-bold tracking-tight sm:text-5xl">Sikandar Abbas</h1>
        <p className="mt-2 text-lg font-semibold text-primary">Full Stack Web Developer</p>
        <p className="mt-5 leading-7 text-muted">
          Full stack web developer in Lahore, Pakistan, with {yearsOfExperience}+ years of experience
          building websites, e-commerce platforms and web applications for clients in Pakistan and
          abroad. I work across the stack with Next.js, React, TypeScript, Node.js and PostgreSQL, and
          deploy and run what I build. I also handle SEO and paid ads, so the work reaches customers.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-foreground/15 bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </Link>
        </div>
        <nav className="mt-6 flex gap-6 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-6 flex flex-col gap-9 border-l-2 border-primary/25 pl-6">
          {experience.map((job) => (
            <article key={job.company} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
              />
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
                <h3 className="font-semibold">
                  {job.role} <span className="text-primary">— {job.company}</span>
                </h3>
                <span className="shrink-0 rounded-full bg-teal-100 px-3 py-0.5 text-xs font-medium text-teal-800">
                  {job.date}
                </span>
              </div>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-6 text-muted marker:text-primary">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.group}>
              <h3 className="text-sm font-semibold">{skill.group}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li key={item} className={`rounded-full px-3 py-1 text-xs font-medium ${skill.tint}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-primary p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-sora text-xl font-bold">Want to see the work?</h2>
          <p className="mt-1 text-sm text-white/85">Client work, products and personal builds.</p>
        </div>
        <Link
          href="/projects"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
        >
          View Projects <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
