import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
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

const SITE = "https://djaya-apps.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Djaya Massage & Reflexology Batam | Premium Traditional Indonesian Spa",
  description:
    "Djaya Massage & Reflexology Batam — premium traditional Indonesian massage, Balinese warm-oil massage, foot reflexology & signature spa rituals in Penuin, Lubuk Baja, near Grand Batam Mall. Rated 4.9★ on Google.",
  keywords: [
    "massage Batam",
    "reflexology Batam",
    "spa Batam",
    "traditional Indonesian massage Batam",
    "best massage in Batam",
    "Batam spa for Singapore tourists",
    "massage Penuin",
    "massage near Nagoya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Djaya Massage & Reflexology Batam",
    title: "Djaya Massage & Reflexology Batam | Premium Traditional Indonesian Spa",
    description:
      "Premium traditional Indonesian healing, Balinese warm-oil massage & reflexology in the heart of Penuin, Batam. Rated 4.9★ on Google.",
    url: SITE,
    locale: "id_ID",
    alternateLocale: "en_US",
    images: [{ url: "/img/og-card.jpg", width: 1200, height: 630, alt: "Djaya Massage & Reflexology Batam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Djaya Massage & Reflexology Batam",
    description: "Premium traditional Indonesian healing & reflexology in the heart of Penuin, Batam.",
    images: ["/img/og-card.jpg"],
  },
  icons: { icon: "/img/favicon.svg", apple: "/img/favicon.svg" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "Djaya Massage & Reflexology Batam",
  description:
    "Premium traditional Indonesian massage, Balinese warm-oil massage, foot reflexology, and signature spa treatments in Penuin, Lubuk Baja, Batam.",
  url: SITE + "/",
  image: SITE + "/img/og-card.jpg",
  telephone: "+62-852-7835-5590",
  priceRange: "Rp 95.000 - Rp 420.000",
  currenciesAccepted: "IDR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Komp. Penuin Centre No. 14, Blok A, Batu Selicin",
    addressLocality: "Lubuk Baja, Batam",
    addressRegion: "Kepulauan Riau",
    postalCode: "29411",
    addressCountry: "ID",
  },
  areaServed: ["Batam", "Penuin", "Nagoya", "Lubuk Baja", "Singapore Tourists"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/djayamassage/",
    "https://www.tripadvisor.com.sg/Attraction_Review-g2270770-d32888084-Reviews-Djaya_Massage_Reflexology_Batam-Nagoya_Batam_Riau_Archipelago_Riau_Islands_Prov.html",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "37", bestRating: "5" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="font-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
