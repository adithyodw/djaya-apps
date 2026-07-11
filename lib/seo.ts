import { faqEn } from "./faq";

/** Canonical production domain */
export const SITE = "https://djayamassagebatam.com";

export const BUSINESS = {
  name: "Djaya Massage & Reflexology Batam",
  legalName: "Djaya Massage & Reflexology",
  phone: "+62-852-7835-5590",
  phoneDisplay: "+62 852-7835-5590",
  whatsapp: "https://wa.me/6285278355590",
  instagram: "https://www.instagram.com/djayamassage/",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=Djaya+Massage+Reflexology+Penuin+Centre+Blok+A+No+14+Batam",
  googleReview: "https://share.google/ChNvLsg4iA99wMZlD",
  tripadvisor:
    "https://www.tripadvisor.com.sg/Attraction_Review-g2270770-d32888084-Reviews-Djaya_Massage_Reflexology_Batam-Nagoya_Batam_Riau_Archipelago_Riau_Islands_Prov.html",
  address: {
    street: "Jl. Komp. Penuin Centre No. 14, Blok A, Batu Selicin",
    locality: "Lubuk Baja, Kota Batam",
    region: "Kepulauan Riau",
    postalCode: "29411",
    country: "ID",
  },
  geo: { lat: 1.1465, lng: 104.0089 },
  /** Schema.org priceRange signal for affordable luxury */
  priceRange: "$$",
  priceRangeDisplay: "Rp 95.000 – Rp 420.000",
  hours: "Daily 10:00–22:00 WIB",
  /** Verified public Google rating — do not inflate */
  rating: { value: "4.9", count: "37" },
};

const offer = (
  name: string,
  description: string,
  price: string,
  duration: string,
) => ({
  "@type": "Offer",
  priceCurrency: "IDR",
  price,
  availability: "https://schema.org/InStock",
  itemOffered: {
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE}/#business` },
    areaServed: "Batam",
    termsOfService: duration,
  },
});

export function structuredDataGraph() {
  const faq = faqEn;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: BUSINESS.name,
        description:
          "Best massage and reflexology in Batam — traditional Indonesian massage, foot reflexology, Balinese warm-oil, and signature spa rituals at Penuin Centre.",
        inLanguage: ["id-ID", "en-US"],
        publisher: { "@id": `${SITE}/#business` },
      },
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "DaySpa"],
        "@id": `${SITE}/#business`,
        name: BUSINESS.name,
        alternateName: [
          "Djaya Massage Batam",
          "Djaya Reflexology Batam",
          "D'Jaya Massage Batam",
          "Best Massage Batam",
        ],
        description:
          "Djaya Massage & Reflexology Batam is a premium spa in Penuin Centre, Lubuk Baja, offering traditional Indonesian massage, foot reflexology, Balinese warm-oil massage, hot stones, and signature healing rituals. Rated 4.9 on Google. Open daily 10:00–22:00 WIB. Ideal for Singapore day-trippers and Batam locals.",
        url: SITE,
        image: [`${SITE}/img/og-card.jpg`, `${SITE}/img/hero.png`],
        logo: `${SITE}/img/favicon.svg`,
        telephone: BUSINESS.phone,
        priceRange: BUSINESS.priceRange,
        currenciesAccepted: "IDR",
        paymentAccepted: "Cash, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          addressRegion: BUSINESS.address.region,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        hasMap: BUSINESS.googleMaps,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "22:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Batam" },
          { "@type": "Place", name: "Penuin" },
          { "@type": "Place", name: "Nagoya, Batam" },
          { "@type": "Place", name: "Lubuk Baja" },
          { "@type": "Place", name: "Batam Centre" },
          { "@type": "Country", name: "Singapore" },
        ],
        knowsAbout: [
          "massage in Batam",
          "best massage in Batam",
          "reflexology in Batam",
          "foot reflexology Batam",
          "traditional Indonesian massage",
          "Balinese massage Batam",
          "spa Batam",
          "massage near Grand Batam Mall",
          "massage for Singapore tourists Batam",
        ],
        sameAs: [BUSINESS.instagram, BUSINESS.tripadvisor, BUSINESS.googleReview],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: BUSINESS.rating.value,
          reviewCount: BUSINESS.rating.count,
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Djaya Massage Batam Treatment Menu",
          itemListElement: [
            offer(
              "Foot Reflexology Batam",
              "Pressure on reflex points of the soles to improve circulation, relieve fatigue, and rebalance body energy. Ideal for travelers after long walks or ferry trips.",
              "150000",
              "60–120 minutes",
            ),
            offer(
              "Traditional Indonesian Massage Batam",
              "Classic Indonesian technique with medium pressure to ease stiff muscles and restore stamina.",
              "170000",
              "60–120 minutes",
            ),
            offer(
              "Balinese Warm-Oil Massage",
              "Long, flowing strokes with warm aromatherapy oil that loosens muscles and calms the mind.",
              "220000",
              "60–120 minutes",
            ),
            offer(
              "Mineral Hot Stones Therapy",
              "Warm volcanic stones placed on tension points to boost circulation and release deep-seated stress.",
              "340000",
              "90–120 minutes",
            ),
            offer(
              "Djaya Signature 3-in-1 Healing Ritual",
              "Body scrub, aromatherapy massage, and ear candling in one 150-minute signature healing experience.",
              "420000",
              "150 minutes",
            ),
          ],
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `https://wa.me/6285278355590?text=${encodeURIComponent(
              "Hello Djaya Massage Batam, I would like to book a treatment.",
            )}`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: { "@type": "Reservation", name: "WhatsApp Booking" },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        url: SITE,
        name: "Best Massage in Batam | Djaya Massage & Reflexology",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#business` },
        description:
          "Official site of Djaya Massage & Reflexology Batam — premium massage and reflexology in Penuin Centre. Book via WhatsApp. Rated 4.9 on Google.",
        inLanguage: ["id-ID", "en-US"],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE}/img/hero.png`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#seo-answer", "#about-heading", "#faq-heading", "h1"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Treatment Menu",
            item: `${SITE}/#menu`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Location",
            item: `${SITE}/#location`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "FAQ",
            item: `${SITE}/#faq`,
          },
        ],
      },
    ],
  };
}
