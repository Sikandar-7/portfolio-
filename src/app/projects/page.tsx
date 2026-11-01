import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Sikandar Abbas",
  description: "Client work, products and personal builds by Sikandar Abbas, full stack web developer.",
};

const projects: { title: string; description: string; stack: string[]; link: string }[] = [
  {
    title: "Buraq Tech",
    description: "Software house website with a landing page for each service and structured data throughout.",
    stack: ["Next.js"],
    link: "https://buraqtech.uk",
  },
  {
    title: "hashChat",
    description: "Multi-tenant WhatsApp CRM with a shared team inbox, pipelines, broadcasts, automation flows and an Android app.",
    stack: ["Next.js", "Supabase", "Kotlin", "WhatsApp Business API"],
    link: "https://hashchat.uk",
  },
  {
    title: "Chaudary Mobile Parts",
    description: "B2B wholesale store with buyer-approval pricing, live stock and WhatsApp order sharing.",
    stack: ["Medusa v2", "Next.js"],
    link: "https://chaudharymobileparts.tech/pk",
  },
  {
    title: "Orbit API",
    description: "WhatsApp Business platform for a client, with multi-tenant onboarding, team inbox and campaigns.",
    stack: ["Next.js", "Node.js", "Express", "Flutter"],
    link: "https://orbit-api-landing.vercel.app/",
  },
  {
    title: "Order.pk",
    description: "Food delivery platform with customer, restaurant, rider and admin panels.",
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL"],
    link: "https://demo-food.buraqtech.uk/",
  },
  {
    title: "SK Modern Blog",
    description: "Fast static blog with accounts, a markdown editor, comments and an admin panel.",
    stack: ["Astro", "MDX", "Supabase"],
    link: "https://demo-blog.buraqtech.uk/",
  },
  {
    title: "Love & Joy",
    description: "Single-product store for a teddy bear brand, with cash on delivery and a short checkout.",
    stack: [],
    link: "https://loveandjoy.vercel.app/",
  },
  {
    title: "SK Fashion Store",
    description: "Fashion store demo with product pages, cart and a full checkout flow.",
    stack: ["Next.js", "Tailwind CSS"],
    link: "https://demo-store.buraqtech.uk/",
  },
  {
    title: "SK Player",
    description: "Free media player for Windows.",
    stack: ["Python", "PySide6", "libVLC"],
    link: "https://buraqtech.uk/apps",
  },
  {
    title: "SK Video Repair",
    description: "Free Windows tool that repairs damaged video files.",
    stack: ["Python"],
    link: "https://buraqtech.uk/apps",
  },
];

// Cycled across the cards, so the page has colour without any images.
const tints = [
  "bg-orange-100 text-orange-800",
  "bg-teal-100 text-teal-800",
  "bg-indigo-100 text-indigo-800",
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-800",
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
      <h1 className="font-sora text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-3 text-muted">Client work, products and personal builds.</p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => {
          const tint = tints[index % tints.length];
          return (
            <li key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card-bg p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-sora font-bold ${tint}`}
                  >
                    {project.title.charAt(0)}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-colors group-hover:text-primary"
                  />
                </span>
                <span className="mt-4 font-semibold">{project.title}</span>
                <span className="mt-1.5 flex-1 text-sm leading-6 text-muted">{project.description}</span>
                {project.stack.length > 0 && (
                  <span className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span key={item} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tint}`}>
                        {item}
                      </span>
                    ))}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
