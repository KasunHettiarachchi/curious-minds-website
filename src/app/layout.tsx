import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kasunhettiarachchi.github.io/curious-minds-website";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b11",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Curious Minds — Interactive Science & Technology Publication",
    template: "%s | Curious Minds",
  },
  description:
    "An interactive science and technology publication exploring Space, Physics, Mathematics, Computer Science, and Nature through visual explanations and browser simulations.",
  keywords: [
    "science",
    "physics",
    "space",
    "mathematics",
    "computer science",
    "interactive simulations",
    "visual explanations",
    "educational website",
  ],
  authors: [{ name: "Curious Minds" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Curious Minds — Interactive Science & Technology",
    description:
      "Read it → Understand it → Interact with it. Explore interactive science simulations and visual explanations.",
    url: baseUrl,
    siteName: "Curious Minds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curious Minds — Interactive Science & Technology",
    description:
      "Read it → Understand it → Interact with it. Explore interactive science simulations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 antialiased">
        <Header />
        <main className="flex-1 bg-cosmic-grid">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
