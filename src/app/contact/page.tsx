import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sikandar Abbas",
  description: "Hire Sikandar Abbas, full stack web developer in Lahore, for your next project.",
};

const links = [
  { label: "sikandar8sa@gmail.com", href: "mailto:sikandar8sa@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Sikandar-7", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sikandar-abbas-572b04287", icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
      <h1 className="font-sora text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together</h1>
      <p className="mt-3 text-muted">
        Available for freelance projects. Tell me what you need, and I&apos;ll reply by email.
      </p>

      <div className="mt-8 rounded-3xl border border-border bg-gradient-to-br from-orange-100 via-white to-teal-100 p-5 sm:p-8">
        <ContactForm />
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-primary"
            >
              <item.icon size={16} /> {item.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
