import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site";
import "./globals.css";

const instrumentSans = localFont({
  src: "../../public/fonts/InstrumentSans-Variable.ttf",
  variable: "--font-instrument-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteContent.metadata.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteContent.metadata.title,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.metadata.description,
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    siteName: siteContent.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1eb" },
    { media: "(prefers-color-scheme: dark)", color: "#11110f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={instrumentSans.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){var root=document.documentElement;var theme;try{var saved=localStorage.getItem("theme");theme=saved==="light"||saved==="dark"?saved:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}root.dataset.theme=theme;document.querySelectorAll('meta[name="theme-color"]').forEach(function(meta){meta.dataset.theme=meta.media.includes("dark")?"dark":"light";meta.media=meta.dataset.theme===theme?"all":"not all"})})();`}
        </Script>
        <div className="siteShell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
