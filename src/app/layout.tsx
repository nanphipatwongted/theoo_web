import type { Metadata } from "next";
import { Poppins, League_Spartan, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://theoo-web.vercel.app";
const TITLE = "theoo | The Mood Lip Gloss — Tinted Lip Gloss, 5 Shades";
const DESCRIPTION =
  "The Mood Lip Gloss by theoo: a creamy, buildable-color lip gloss that nourishes and hydrates in one swipe. 5 shades, 4.5g, ฿299. Shop on Shopee, Instagram, and TikTok.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | theoo",
  },
  description: DESCRIPTION,
  keywords: [
    "theoo",
    "The Mood Lip Gloss",
    "lip gloss",
    "tinted lip gloss",
    "lip care",
    "ลิปกลอส",
    "theoo_store.th",
  ],
  authors: [{ name: "theoo" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "theoo",
    type: "website",
    locale: "th_TH",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "theoo — The Mood Lip Gloss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "GNAWZ93GhmW5dWSOiMWQgq2kIywqPRNZe0k4vZKkO_M",
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
      className={`${poppins.variable} ${leagueSpartan.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
