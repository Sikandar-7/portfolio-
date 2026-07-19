"use client";

import { Quote, ArrowUpRight } from "lucide-react";

interface Testimonial {
  id: number;
  /** The client's own words. Keep it short — 1–3 sentences reads best. */
  quote: string;
  /** Client's name, e.g. "Ali Raza" */
  name: string;
  /** Their role, e.g. "Owner" / "Operations Manager" */
  role: string;
  /** Their business, e.g. "Chaudary Mobile Parts" */
  company: string;
  /** Optional link to the client's public business site (never a personal number/email) */
  companyUrl?: string | null;
  /** Optional photo URL. If omitted, initials are shown instead. */
  avatar?: string | null;
}

/**
 * ─────────────────────────────────────────────────────────────
 *  HOW TO ADD A TESTIMONIAL
 * ─────────────────────────────────────────────────────────────
 *  1. Ask the client for permission first — to use their name,
 *     role, company and quote publicly.
 *  2. Add an entry below. Example:
 *
 *     {
 *       id: 1,
 *       quote: "Our wholesale orders used to run over WhatsApp. Sikandar built us a proper portal — orders now come in on their own.",
 *       name: "Malik Sahab",
 *       role: "Owner",
 *       company: "Chaudary Mobile Parts",
 *       companyUrl: "https://chaudharymobileparts.tech/pk",
 *       avatar: null,
 *     },
 *
 *  Never publish a client's phone number or email here, and never
 *  invent a quote — while this array is empty the whole section
 *  stays hidden, which is the correct default.
 * ─────────────────────────────────────────────────────────────
 */
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  // Nothing real to show yet — render nothing rather than placeholder praise.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="flex flex-col pt-12">
      <h2 className="text-[3rem] lg:text-[4rem] font-black font-sora leading-none uppercase mb-12">
        <span className="block text-white">Client</span>
        <span className="block text-[#333333]">Feedback</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="relative rounded-3xl bg-[#111111] border border-[#222222] p-7 flex flex-col gap-6 hover:border-[#333333] transition-colors"
          >
            <Quote size={28} className="text-secondary opacity-40 flex-shrink-0" aria-hidden="true" />

            <blockquote className="text-gray-300 text-base leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="flex items-center gap-4 pt-2 border-t border-[#222222]">
              <div className="w-11 h-11 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 overflow-hidden">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="text-white font-bold text-sm leading-tight truncate">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5 truncate">
                  {t.role}
                  {t.company && (
                    <>
                      {" · "}
                      {t.companyUrl ? (
                        <a
                          href={t.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-white transition-colors inline-flex items-center gap-0.5"
                        >
                          {t.company}
                          <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        t.company
                      )}
                    </>
                  )}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
