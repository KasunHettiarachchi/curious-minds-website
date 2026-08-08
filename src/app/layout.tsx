import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Curious Minds — Interactive Science & Technology Publication",
  description:
    "An interactive publication exploring Space, Physics, Mathematics, Computer Science, and Nature through visual explanations and browser simulations.",
  keywords: [
    "science",
    "physics",
    "space",
    "mathematics",
    "computer science",
    "interactive simulations",
    "visual explanations",
  ],
  authors: [{ name: "Curious Minds" }],
  openGraph: {
    title: "Curious Minds — Interactive Science & Technology",
    description:
      "Read it → Understand it → Interact with it. Explore interactive science simulations and visual explanations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <Header />
        <main className="flex-1 bg-cosmic-grid">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
