import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elder2care.ca"),

  title: {
    default: "Elder2Care | Healthy Aging Starts Before Healthcare",
    template: "%s | Elder2Care",
  },

  description:
    "Elder2Care connects older adults, families, caregivers, communities and care systems through Community Navigation and Community Intelligence to support healthier aging.",

  alternates: {
    canonical: "https://elder2care.ca",
  },

  openGraph: {
    type: "website",
    url: "https://elder2care.ca",
    siteName: "Elder2Care",
    title: "Elder2Care | Healthy Aging Starts Before Healthcare",
    description:
      "Connecting older adults, families, caregivers and communities through Community Navigation and Community Intelligence.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elder2Care | Healthy Aging Starts Before Healthcare",
    description:
      "Connecting older adults, families, caregivers and communities through Community Navigation and Community Intelligence.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <Header />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://elder2care.ca/#organization",
                  name: "Elder2Care",
                  url: "https://elder2care.ca/",
                  logo: "https://elder2care.ca/images/elder2care-logo.png",
                  email: "info@elder2care.ca",
                  sameAs: [
                    "https://www.facebook.com/Elder2Care",
                    "https://www.linkedin.com/company/elder2care",
                    "https://www.instagram.com/elder2care",
                    "https://www.youtube.com/@elder2care",
                    "https://bsky.app/profile/elder2care.bsky.social"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://elder2care.ca/#website",
                  url: "https://elder2care.ca/",
                  name: "Elder2Care",
                  publisher: {
                    "@id": "https://elder2care.ca/#organization"
                  }
                }
              ]
            })
          }}
        />

        {children}

        <Footer />
      </body>
    </html>
  );
}
