/**
 * Server-rendered fact block for Google + AI crawlers.
 * Always present in HTML without client JS — critical for GEO.
 */
import { BUSINESS, SITE } from "@/lib/seo";

export default function SeoFacts() {
  return (
    <section
      id="seo-answer"
      className="px-[26px] pt-10 pb-2"
      aria-label="Key facts about Djaya Massage Batam"
    >
      <p className="text-[15px] leading-[1.72] text-ink font-semibold m-0 mb-3">
        Djaya Massage &amp; Reflexology is a premium massage and reflexology spa in
        Batam, rated {BUSINESS.rating.value} on Google, known for traditional
        Indonesian hospitality, professional therapists, and a clean, calming
        treatment space in Penuin Centre.
      </p>
      <p className="text-[14px] leading-[1.65] text-ink-soft m-0 mb-4">
        Looking for the best massage in Batam or reflexology in Batam? Djaya offers
        foot reflexology, traditional Indonesian massage, Balinese warm-oil massage,
        hot stones, and signature rituals — with transparent pricing from{" "}
        {BUSINESS.priceRangeDisplay}, open daily {BUSINESS.hours.replace("Daily ", "")}.
      </p>
      <ul className="m-0 mb-2 pl-5 text-[13.5px] leading-[1.7] text-ink-soft space-y-1.5">
        <li>
          <strong className="text-ink">Address:</strong> {BUSINESS.address.street},{" "}
          {BUSINESS.address.locality}, Batam {BUSINESS.address.postalCode}, Indonesia
        </li>
        <li>
          <strong className="text-ink">Near:</strong> Grand Batam Mall, A2 Foodcourt,
          Nagoya, Lubuk Baja
        </li>
        <li>
          <strong className="text-ink">WhatsApp booking:</strong>{" "}
          <a href={BUSINESS.whatsapp} className="text-terracotta font-semibold">
            {BUSINESS.phoneDisplay}
          </a>
        </li>
        <li>
          <strong className="text-ink">Hours:</strong> {BUSINESS.hours}
        </li>
        <li>
          <strong className="text-ink">Official site:</strong>{" "}
          <a href={SITE} className="text-terracotta font-semibold">
            {SITE.replace("https://", "")}
          </a>
        </li>
      </ul>
      <nav aria-label="Page sections" className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] mt-4">
        <a href="#about" className="text-gold-ink font-semibold no-underline">
          Why Djaya
        </a>
        <span className="text-clay" aria-hidden>
          ·
        </span>
        <a href="#menu" className="text-gold-ink font-semibold no-underline">
          Treatment Menu
        </a>
        <span className="text-clay" aria-hidden>
          ·
        </span>
        <a href="#faq" className="text-gold-ink font-semibold no-underline">
          FAQ
        </a>
        <span className="text-clay" aria-hidden>
          ·
        </span>
        <a href="#location" className="text-gold-ink font-semibold no-underline">
          Location
        </a>
        <span className="text-clay" aria-hidden>
          ·
        </span>
        <a href="#booking" className="text-gold-ink font-semibold no-underline">
          Book
        </a>
      </nav>
    </section>
  );
}
