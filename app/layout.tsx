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

const title = "Massage Batam & Reflexology Batam | Djaya Massage & Reflexology";
const description =
  "Djaya Massage & Reflexology Batam — premium massage Batam & reflexology Batam in Penuin Centre, Lubuk Baja. Traditional Indonesian massage, foot reflexology, Balinese warm-oil & hot stones. Rated 4.9 on Google. Book via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: title,
    template: "%s | Djaya Massage Batam",
  },
  description,
  keywords: [
    "massage Batam",
    "reflexology Batam",
    "spa Batam",
    "best massage in Batam",
    "foot reflexology Batam",
    "traditional Indonesian massage Batam",
    "Balinese massage Batam",
    "massage Penuin Batam",
    "massage near Grand Batam Mall",
    "massage Nagoya Batam",
    "spa near Singapore ferry Batam",
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
    title,
    description,
    url: SITE,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/img/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Djaya Massage & Reflexology Batam — premium massage and reflexology spa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage Batam & Reflexology Batam | Djaya Massage",
    description:
      "Premium massage Batam & reflexology Batam in Penuin Centre. Traditional Indonesian spa. Rated 4.9 on Google.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
