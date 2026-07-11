"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { t, bookItem } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";

export default function BlogSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="journal" className="px-[26px] pt-14 pb-2" aria-labelledby="journal-heading">
      <Reveal>
        <div className="text-[11px] tracking-[0.26em] uppercase text-gold-ink font-bold mb-3.5">
          {tr.blogLabel}
        </div>
        <h2
          id="journal-heading"
          className="font-display font-semibold text-[32px] leading-[1.12] text-ink m-0 mb-3"
        >
          {tr.blogHead}
        </h2>
        <p className="text-[14.5px] leading-[1.75] text-ink-soft m-0 mb-10 max-w-[340px]">
          {tr.blogLead}
        </p>
      </Reveal>

      <div className="flex flex-col gap-12">
        {blogPosts.map((post, i) => {
          const waName = lang === "en" ? post.waName.en : post.waName.id;
          return (
            <article
              key={post.id}
              id={post.slug}
              className="m-0"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Reveal delay={0.03 * i}>
                <meta itemProp="headline" content={post.title(lang)} />
                <div className="relative w-full overflow-hidden mb-5 border border-card-line bg-[#efe6d4]" style={{ aspectRatio: "16 / 10" }}>
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    sizes="480px"
                    className="object-cover"
                    itemProp="image"
                  />
                </div>

                <div className="text-[10.5px] tracking-[0.22em] uppercase text-gold-ink font-bold mb-2.5">
                  {post.eyebrow(lang)}
                </div>
                <h3
                  className="font-display font-semibold text-[24px] leading-[1.2] text-ink m-0 mb-4"
                  itemProp="name"
                >
                  {post.title(lang)}
                </h3>

                <div itemProp="articleBody">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-clay font-bold m-0 mb-2">
                    {tr.blogProblem}
                  </p>
                  <p className="text-[13.5px] leading-[1.7] text-ink-soft m-0 mb-5">{post.problem(lang)}</p>

                  <p className="text-[11px] tracking-[0.16em] uppercase text-clay font-bold m-0 mb-2">
                    {tr.blogSolution}
                  </p>
                  <p className="text-[13.5px] leading-[1.7] text-ink-soft m-0 mb-4">{post.solution(lang)}</p>

                  <ul className="m-0 mb-6 pl-4 text-[13px] leading-[1.65] text-ink-soft space-y-1.5">
                    {post.benefits(lang).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-end justify-between gap-3 pt-4 border-t border-card-line mb-4">
                  <div>
                    <div className="font-display font-bold text-[17px] text-ink leading-tight">
                      {post.treatment}
                    </div>
                    <div className="text-[12px] text-clay mt-1">
                      {post.duration} · {tr.blogFrom}{" "}
                      <span className="font-display font-bold text-[15px] text-terracotta">
                        {post.priceFrom}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={bookItem(lang, waName)}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 bg-ink text-cream no-underline p-[13px] rounded-[11px] font-bold text-[13px]"
                >
                  <WhatsAppIcon size={15} />
                  {tr.blogCta} — {post.treatment}
                </a>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
