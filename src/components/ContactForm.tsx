"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border border-border bg-card-bg px-3 py-2.5 text-sm text-foreground placeholder-muted focus:border-primary focus:outline-none disabled:opacity-60";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("send failed");
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const busy = status === "sending";

  return (
    <form onSubmit={send} className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="name"
          aria-label="Name"
          placeholder="Name"
          required
          value={form.name}
          onChange={update}
          disabled={busy}
          className={field}
        />
        <input
          name="email"
          type="email"
          aria-label="Email"
          placeholder="Email"
          required
          value={form.email}
          onChange={update}
          disabled={busy}
          className={field}
        />
      </div>
      <textarea
        name="message"
        aria-label="Message"
        placeholder="Tell me about your project"
        rows={4}
        required
        value={form.message}
        onChange={update}
        disabled={busy}
        className={field}
      />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={busy}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {busy ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && <p className="text-sm text-muted">Message sent. I&apos;ll reply soon.</p>}
        {status === "error" && (
          <p className="text-sm text-muted">Couldn&apos;t send it. Please email me instead.</p>
        )}
      </div>
    </form>
  );
}
