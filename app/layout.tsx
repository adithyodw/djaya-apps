import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { BUSINESS, SITE, structuredDataGraph } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

/** Under 60 characters — high-intent primary keywords */
const title = "Best Massage in Batam | Djaya Reflexology";
/** Under 155 characters */
const description =
  "Djaya Massage & Reflexology Batam — premium massage & reflexology in Penuin Centre. Rated 4.9 on Google. Book via WhatsApp. Open daily 10–22.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: title,
    template: "%s | Djaya Massage Batam",
  },
  description,
  keywords: [
    "massage in Batam",
    "best massage in Batam",
    "reflexology in Batam",
    "massage Batam",
    "reflexology Batam",
    "spa Batam",
    "foot reflexology Batam",
    "traditional Indonesian massage Batam",
    "Balinese massage Batam",
    "massage Penuin Batam",
    "massage near Grand Batam Mall",
    "massage Nagoya Batam",
    "massage Singapore ferry Batam",
    "Djaya Massage",
    "Djaya Reflexology",
    "pijat Batam",
    "refleksi kaki Batam",
  ],
  authors: [{ name: BUSINESS.name, url: SITE }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Health & Beauty",
  classification: "Spa, Massage, Reflexology",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    title: "Best Massage & Reflexology in Batam | Djaya",
    description,
    url: SITE,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/img/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Djaya Massage & Reflexology Batam — best massage and reflexology spa in Penuin Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Massage in Batam | Djaya Reflexology",
    description:
      "Premium massage & reflexology in Penuin Centre, Batam. Rated 4.9 on Google. Book via WhatsApp.",
    images: ["/img/og-card.jpg"],
  },
  icons: { icon: "/img/favicon.svg", apple: "/img/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "ID-KR",
    "geo.placename": "Batam, Kepulauan Riau",
    "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    ICBM: `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = structuredDataGraph();

  return (
    <html lang="id" className={`${cormorant.variable} ${mulish.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" hrefLang="id" href={`${SITE}/`} />
        <link rel="alternate" hrefLang="en" href={`${SITE}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />
      </head>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
