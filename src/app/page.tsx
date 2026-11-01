import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:sikandar8sa@gmail.com" },
  { label: "GitHub", href: "https://github.com/Sikandar-7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sikandar-abbas-572b04287" },
];

const projects = [
  {
    title: "Buraq Tech",
    description: "Software house for websites, online stores, apps and WhatsApp automation.",
    link: "https://buraqtech.uk",
  },
  {
    title: "hashChat",
    description: "WhatsApp CRM with a shared team inbox, on the official Business API.",
    link: "https://hashchat.uk",
  },
  {
    title: "Chaudary Mobile Parts",
    description: "B2B wholesale store with approved-buyer pricing and live stock.",
    link: "https://chaudharymobileparts.tech/pk",
  },
  {
    title: "Orbit API",
    description: "WhatsApp Business platform built for a client.",
    link: "https://orbit-api-landing.vercel.app/",
  },
  {
    title: "Order.pk",
    description: "Food delivery platform with customer, restaurant, rider and admin panels.",
    link: "https://demo-food.buraqtech.uk/",
  },
  {
    title: "SK Modern Blog",
    description: "Fast Astro blog with accounts, comments and an admin panel.",
    link: "https://demo-blog.buraqtech.uk/",
  },
  {
    title: "Love & Joy",
    description: "Online store for a teddy bear brand, with cash on delivery.",
    link: "https://loveandjoy.vercel.app/",
  },
  {
    title: "SK Fashion Store",
    description: "Fashion store demo with product pages, cart and checkout.",
    link: "https://demo-store.buraqtech.uk/",
  },
  {
    title: "SK Player",
    description: "Free media player for Windows.",
    link: "https://buraqtech.uk/apps",
  },
  {
    title: "SK Video Repair",
    description: "Free Windows tool that repairs damaged video files.",
    link: "https://buraqtech.uk/apps",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <h1 className="font-sora text-3xl font-bold tracking-tight sm:text-4xl">Sikandar Abbas</h1>

      <p className="mt-6 text-lg leading-8 text-muted">
        <span className="block">Full stack developer from Lahore, Pakistan, building since 2023.</span>
        <span className="block">I make websites, online stores, mobile apps and WhatsApp automation.</span>
        <span className="block">I also handle ads and SEO, so what I build gets customers.</span>
      </p>

      <nav className="mt-6 flex gap-6 text-sm font-medium">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <section className="mt-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">Projects</h2>
        <ul className="mt-4 divide-y divide-border">
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
    </main>
  );
}
