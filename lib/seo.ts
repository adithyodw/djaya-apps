import { faqEn } from "./faq";

export const SITE = "https://djaya-apps.vercel.app";

export const BUSINESS = {
  name: "Djaya Massage & Reflexology Batam",
  legalName: "Djaya Massage & Reflexology",
  phone: "+62-852-7835-5590",
  phoneDisplay: "+62 852-7835-5590",
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
  priceRange: "Rp 95.000 - Rp 420.000",
  hours: "Daily 10:00–22:00 WIB",
  rating: { value: "4.9", count: "37" },
};

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
          "Premium massage and reflexology spa in Batam, Indonesia — traditional Indonesian massage, foot reflexology, Balinese warm-oil massage near Penuin and Nagoya.",
        inLanguage: ["id-ID", "en-US"],
        publisher: { "@id": `${SITE}/#business` },
      },
      {
        "@type": ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": `${SITE}/#business`,
        name: BUSINESS.name,
        alternateName: ["Djaya Massage Batam", "Djaya Reflexology Batam", "Massage Batam Djaya"],
        description:
          "Premium traditional Indonesian massage and foot reflexology in Batam. Rated 4.9 stars on Google. Foot reflexology, Balinese massage, hot stones, and signature spa rituals in Penuin Centre, Lubuk Baja — near Grand Batam Mall and Nagoya.",
        url: SITE,
        image: [`${SITE}/img/og-card.jpg`, `${SITE}/img/hero.png`],
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "22:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Batam" },
          { "@type": "Place", name: "Penuin" },
          { "@type": "Place", name: "Nagoya, Batam" },
          { "@type": "Place", name: "Lubuk Baja" },
          { "@type": "Country", name: "Singapore" },
        ],
        knowsAbout: [
          "massage Batam",
          "reflexology Batam",
          "foot reflexology",
          "traditional Indonesian massage",
          "Balinese massage",
          "spa Batam",
          "massage near Grand Batam Mall",
        ],
        sameAs: [BUSINESS.instagram, BUSINESS.tripadvisor, BUSINESS.googleReview],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: BUSINESS.rating.value,
          reviewCount: BUSINESS.rating.count,
          bestRating: "5",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `https://wa.me/6285278355590?text=${encodeURIComponent("Hello Djaya Massage Batam, I would like to book a treatment.")}`,
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
          result: { "@type": "Reservation", name: "WhatsApp Booking" },
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        url: SITE,
        name: "Djaya Massage & Reflexology Batam | Massage & Reflexology Batam",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#business` },
        description:
          "Official website of Djaya Massage & Reflexology Batam — book premium massage and reflexology in Penuin, Lubuk Baja. Best-rated spa for massage Batam and reflexology Batam.",
        inLanguage: "id-ID",
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/img/hero.png` },
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
        "@type": "OfferCatalog",
        name: "Djaya Massage Batam Treatment Menu",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Foot Reflexology Batam",
              description: "Professional foot reflexology from Rp 150.000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Traditional Indonesian Massage Batam",
              description: "Classic Indonesian massage from Rp 170.000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Balinese Warm-Oil Massage",
              description: "Aromatherapy warm-oil massage from Rp 220.000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mineral Hot Stones",
              description: "Volcanic hot stone therapy from Rp 340.000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Djaya Signature 3-in-1 Ritual",
              description: "150-minute signature healing ritual Rp 420.000",
            },
          },
        ],
      },
    ],
  };
}
