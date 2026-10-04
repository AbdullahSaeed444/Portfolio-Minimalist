import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const instrumentSans = localFont({
  src: "../../public/fonts/InstrumentSans-Variable.ttf",
  variable: "--font-instrument-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://TODO-real-domain.invalid";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TODO: real name | Software engineer & analyst",
    template: "%s | TODO: real name",
  },
  description:
    "Software engineer and data/business analyst. Open to remote and part-time contract work.",
  openGraph: {
    title: "TODO: real name | Software engineer & analyst",
    description:
      "Software engineer and data/business analyst. Open to remote and part-time contract work.",
    siteName: "TODO: real name",
    type: "website",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "TODO: real name, software engineer and analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={instrumentSans.variable} data-scroll-behavior="smooth">
      <body>
        <div className="siteShell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
