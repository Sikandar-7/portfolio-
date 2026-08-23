import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase makes relative OG/Twitter image paths resolve against the
  // real domain. Vercel infers it in production, but without it a local
  // build resolves them to localhost and the warning hides real problems.
  metadataBase: new URL("https://portfolio-five-black-18.vercel.app"),
  title: "Sikandar Abbas - Full Stack Developer",
  // The description is the sentence Google shows under the title and the
  // one that appears on every shared link. It said "Premium Portfolio
  // built with Next.js and Tailwind CSS" — which describes the template,
  // not the person, and gives a reader no reason to click.
  description:
    "Full stack developer in Lahore. Founder of Buraq Tech, and the builder of hashChat — a multi-tenant WhatsApp CRM. Next.js, Node and Postgres, shipped and running in production.",
  openGraph: {
    title: "Sikandar Abbas — Full Stack Developer",
    description:
      "Founder of Buraq Tech. Builds WhatsApp CRM, B2B e-commerce and multi-panel platforms — live, not mockups.",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikandar Abbas — Full Stack Developer",
    description:
      "Founder of Buraq Tech. Builds WhatsApp CRM, B2B e-commerce and multi-panel platforms — live, not mockups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${inter.variable} antialiased font-inter bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
