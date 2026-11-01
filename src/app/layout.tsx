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
  metadataBase: new URL("https://sikandarabbas.com"),
  title: "Sikandar Abbas - Full Stack Developer",
  description:
    "Full stack developer from Lahore, Pakistan. Websites, online stores, mobile apps and WhatsApp automation.",
  openGraph: {
    title: "Sikandar Abbas — Full Stack Developer",
    description:
      "Full stack developer from Lahore, Pakistan. Websites, online stores, mobile apps and WhatsApp automation.",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikandar Abbas — Full Stack Developer",
    description:
      "Full stack developer from Lahore, Pakistan. Websites, online stores, mobile apps and WhatsApp automation.",
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
