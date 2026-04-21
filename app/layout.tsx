import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deserthorizon.ae"),
  title: {
    default: "Desert Horizon Contracting | Luxury Construction Dubai",
    template: "%s | Desert Horizon Contracting"
  },
  description:
    "Desert Horizon Contracting is a Dubai-based boutique construction firm delivering premium pools, landscaping, pergolas, sports courts, and private entertainment spaces since 2003.",
  keywords: [
    "Luxury Construction Dubai",
    "Padel Tennis Court Builders Dubai",
    "Swimming Pool Construction UAE",
    "Boutique Landscaping Dubai",
    "Dubai Pergola Contractor",
    "Luxury Pool & Landscaping Dubai"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/images/logo-new.png",
    shortcut: "/images/logo-new.png",
    apple: "/images/logo-new.png"
  },
  openGraph: {
    title: "Desert Horizon Contracting",
    description:
      "Your dream home, our passion project. Premium pool and landscaping craftsmanship across Dubai, Sharjah, and Ajman.",
    url: "/",
    siteName: "Desert Horizon Contracting",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/images/logo-new.png",
        width: 512,
        height: 512,
        alt: "Desert Horizon Contracting logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Desert Horizon Contracting",
    description:
      "Boutique luxury construction in Dubai for pools, landscaping, sports courts, and outdoor living.",
    images: ["/images/logo-new.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
