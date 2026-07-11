/**
 * SSR fact block for Google + AI crawlers — visually refined for luxury UX.
 * Content stays machine-readable; presentation is editorial, not a keyword dump.
 */
import { BUSINESS } from "@/lib/seo";

export default function SeoFacts() {
  return (
    <section
      id="seo-answer"
      className="px-[26px] pt-12 pb-4"
      aria-label="Key facts about Djaya Massage Batam"
    >
      <div className="w-8 h-px bg-gold mb-6" aria-hidden />
      <p className="font-display text-[22px] leading-[1.35] text-ink m-0 mb-5 italic">
        A premium massage and reflexology sanctuary in Batam — rated{" "}
        {BUSINESS.rating.value} on Google — for travelers and locals who seek
        authentic Indonesian healing.
      </p>
      <p className="text-[13.5px] leading-[1.75] text-ink-soft m-0 mb-8">
        Djaya Massage &amp; Reflexology offers foot reflexology, traditional
        Indonesian massage, Balinese warm-oil, hot stones, and signature rituals
        in Penuin Centre, near Grand Batam Mall and Nagoya. Open daily{" "}
        {BUSINESS.hours.replace("Daily ", "")}. Treatments from{" "}
        {BUSINESS.priceRangeDisplay}.
      </p>

      <dl className="m-0 grid gap-0 border-t border-card-line">
        <div className="flex gap-4 py-3.5 border-b border-card-line">
          <dt className="flex-none w-[72px] text-[10px] tracking-[0.18em] uppercase text-gold-ink font-bold pt-0.5">
            Visit
          </dt>
          <dd className="m-0 text-[13px] leading-[1.55] text-ink-soft">
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.locality}, Batam {BUSINESS.address.postalCode}
          </dd>
        </div>
        <div className="flex gap-4 py-3.5 border-b border-card-line">
          <dt className="flex-none w-[72px] text-[10px] tracking-[0.18em] uppercase text-gold-ink font-bold pt-0.5">
            Book
          </dt>
          <dd className="m-0 text-[13px] leading-[1.55]">
            <a
              href={BUSINESS.whatsapp}
              className="text-ink font-semibold no-underline border-b border-gold/40"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <span className="text-clay"> · WhatsApp</span>
          </dd>
        </div>
        <div className="flex gap-4 py-3.5 border-b border-card-line">
          <dt className="flex-none w-[72px] text-[10px] tracking-[0.18em] uppercase text-gold-ink font-bold pt-0.5">
            Hours
          </dt>
          <dd className="m-0 text-[13px] leading-[1.55] text-ink-soft">{BUSINESS.hours}</dd>
        </div>
      </dl>

      <nav
        aria-label="Page sections"
        className="flex flex-wrap gap-x-4 gap-y-2 mt-7 text-[11px] tracking-[0.12em] uppercase"
      >
        {[
          ["#why-djaya", "Why Djaya"],
          ["#journal", "Journal"],
          ["#menu", "Menu"],
          ["#faq", "FAQ"],
          ["#location", "Location"],
          ["#booking", "Book"],
        ].map(([href, label]) => (
          <a key={href} href={href} className="text-gold-ink font-bold no-underline hover:text-ink transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
