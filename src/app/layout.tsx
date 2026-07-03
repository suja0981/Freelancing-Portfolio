import type { Metadata } from "next";
import { Inter, Instrument_Serif, Caveat } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeCrew — We Build Ideas Into Digital Products",
    template: "%s | CodeCrew",
  },
  description:
    "We help startups and businesses build beautiful, fast, and scalable websites and web applications. Premium web development, UI design, and SEO services.",
  keywords: [
    "web development",
    "web applications",
    "UI design",
    "SEO",
    "freelance agency",
    "CodeCrew",
  ],
  openGraph: {
    title: "CodeCrew — We Build Ideas Into Digital Products",
    description:
      "We help startups and businesses build beautiful, fast, and scalable websites and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen antialiased font-body bg-background text-primary">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
