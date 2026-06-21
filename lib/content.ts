import { Lang } from "./i18n";

const L = (lang: Lang, id: string, en: string) => (lang === "en" ? en : id);

export type TreatmentOption = { dur: string; price: string };
export type Treatment = {
  slug: string;
  name: string;
  desc: string;
  img: string;
  opts: TreatmentOption[];
};
export type CategoryKey = "reflexology" | "body" | "signature" | "additional";

const opt = (lang: Lang, dur: number, price: string): TreatmentOption => ({
  dur: lang === "en" ? `${dur} min` : `${dur} menit`,
  price,
});

export function categories(lang: Lang): { key: CategoryKey; label: string }[] {
  return [
    { key: "reflexology", label: L(lang, "Refleksi", "Reflexology") },
    { key: "body", label: L(lang, "Pijat Badan", "Body Massage") },
    { key: "signature", label: L(lang, "Signature", "Signature") },
    { key: "additional", label: L(lang, "Tambahan", "Additional") },
  ];
}

export function treatments(lang: Lang): Record<CategoryKey, Treatment[]> {
  return {
    reflexology: [
      {
        slug: "foot-only",
        name: L(lang, "Refleksi Kaki", "Foot Reflexology"),
        desc: L(
          lang,
          "Tekanan pada titik refleksi telapak kaki untuk melancarkan peredaran darah, meredakan pegal, dan menyeimbangkan energi tubuh.",
          "Pressure on the reflex points of the soles to improve circulation, relieve fatigue, and rebalance the body’s energy.",
        ),
        img: "/img/menu-foot-only.jpg",
        opts: [opt(lang, 60, "Rp 150.000"), opt(lang, 90, "Rp 200.000"), opt(lang, 120, "Rp 250.000")],
      },
      {
        slug: "complete-foot",
        name: L(lang, "Refleksi Kaki + Punggung, Bahu & Kepala", "Complete Foot, Back, Shoulder & Head"),
        desc: L(
          lang,
          "Kombinasi refleksi kaki dengan pijatan punggung, bahu, dan kepala — melepas tegang menyeluruh dari ujung kaki hingga kepala.",
          "Foot reflexology combined with back, shoulder and head massage — full-body tension release from head to toe.",
        ),
        img: "/img/menu-complete-foot.jpg",
        opts: [opt(lang, 60, "Rp 170.000"), opt(lang, 90, "Rp 220.000"), opt(lang, 120, "Rp 270.000")],
      },
      {
        slug: "organic-scrub",
        name: L(lang, "Scrub Kaki Organik & Pijat", "Organic Foot Scrub Massage"),
        desc: L(
          lang,
          "Eksfoliasi lembut dengan scrub organik untuk kulit kaki halus, dilanjutkan pijatan menenangkan.",
          "Gentle exfoliation with an organic scrub for soft, renewed feet, followed by a soothing massage.",
        ),
        img: "/img/menu-organic-scrub.jpg",
        opts: [opt(lang, 90, "Rp 270.000"), opt(lang, 120, "Rp 320.000")],
      },
    ],
    body: [
      {
        slug: "traditional",
        name: L(lang, "Pijat Tradisional", "Traditional Massage"),
        desc: L(
          lang,
          "Teknik pijat khas Indonesia dengan tekanan menengah untuk meredakan otot kaku dan mengembalikan stamina.",
          "Classic Indonesian technique with medium pressure to ease stiff muscles and restore stamina.",
        ),
        img: "/img/menu-traditional.jpg",
        opts: [opt(lang, 60, "Rp 170.000"), opt(lang, 90, "Rp 220.000"), opt(lang, 120, "Rp 270.000")],
      },
      {
        slug: "balinese",
        name: L(lang, "Pijat Minyak Hangat Bali", "Balinese Warm-Oil Massage"),
        desc: L(
          lang,
          "Pijat aliran panjang dengan minyak aromaterapi hangat yang melemaskan otot dan menenangkan pikiran.",
          "Long, flowing strokes with warm aromatherapy oil that loosens muscles and calms the mind.",
        ),
        img: "/img/menu-balinese.jpg",
        opts: [opt(lang, 60, "Rp 220.000"), opt(lang, 90, "Rp 270.000"), opt(lang, 120, "Rp 320.000")],
      },
      {
        slug: "lulur",
        name: L(lang, "Lulur Badan & Pijat", "Body Lulur & Massage"),
        desc: L(
          lang,
          "Ritual lulur warisan keraton Jawa — mencerahkan dan menghaluskan kulit, dipadu pijatan relaksasi.",
          "A Javanese royal lulur ritual — brightens and smooths the skin, paired with a relaxing massage.",
        ),
        img: "/img/menu-lulur.jpg",
        opts: [opt(lang, 90, "Rp 270.000"), opt(lang, 120, "Rp 320.000")],
      },
      {
        slug: "hot-stones",
        name: L(lang, "Batu Panas Mineral", "Mineral Hot Stones"),
        desc: L(
          lang,
          "Batu vulkanik hangat diletakkan pada titik tegang untuk melancarkan aliran darah dan melepas stres mendalam.",
          "Warm volcanic stones placed on tension points to boost circulation and release deep-seated stress.",
        ),
        img: "/img/menu-hot-stones.jpg",
        opts: [opt(lang, 90, "Rp 340.000"), opt(lang, 120, "Rp 390.000")],
      },
      {
        slug: "foot-body",
        name: L(lang, "Kombinasi Kaki & Badan", "Foot & Body Combination"),
        desc: L(
          lang,
          "Paket lengkap refleksi kaki dan pijat badan dalam satu sesi — relaksasi total tanpa kompromi.",
          "A complete package of foot reflexology and body massage in one session — total, uncompromised relaxation.",
        ),
        img: "/img/menu-foot-body.jpg",
        opts: [opt(lang, 120, "Rp 320.000")],
      },
    ],
    signature: [
      {
        slug: "three-in-one",
        name: L(lang, "3-in-1: Lulur, Aromaterapi & Ear Candling", "3-in-1: Scrub, Aromatherapy & Ear Candling"),
        desc: L(
          lang,
          "Ritual istimewa Djaya: lulur tubuh, pijat aromaterapi, dan ear candling menyatu dalam satu pengalaman penyembuhan 150 menit.",
          "Djaya’s signature ritual: body scrub, aromatherapy massage, and ear candling woven into one 150-minute healing experience.",
        ),
        img: "/img/menu-signature.jpg",
        opts: [opt(lang, 150, "Rp 420.000")],
      },
    ],
    additional: [
      {
        slug: "neck-back",
        name: L(lang, "Leher, Punggung & Bahu", "Neck, Back & Shoulder"),
        desc: L(
          lang,
          "Fokus melepas ketegangan di area leher, punggung, dan bahu — ideal untuk pekerja kantoran.",
          "Targeted relief for the neck, back and shoulders — ideal for desk-bound workers.",
        ),
        img: "/img/menu-neck-back.jpg",
        opts: [opt(lang, 30, "Rp 95.000")],
      },
      {
        slug: "ear-candling",
        name: "Ear Candling",
        desc: L(
          lang,
          "Terapi lilin telinga tradisional yang menenangkan dan membantu membersihkan kotoran telinga.",
          "A traditional ear-candle therapy that soothes and helps clear the ear canal.",
        ),
        img: "/img/menu-ear-candling.jpg",
        opts: [opt(lang, 30, "Rp 100.000")],
      },
      {
        slug: "guasa",
        name: L(lang, "Guasa (Kerok)", "Gua Sha (Kerok)"),
        desc: L(
          lang,
          "Teknik kerok tradisional untuk melancarkan peredaran darah dan meredakan masuk angin.",
          "A traditional scraping technique to improve circulation and relieve aches and chills.",
        ),
        img: "/img/menu-guasa.jpg",
        opts: [opt(lang, 30, "Rp 120.000")],
      },
      {
        slug: "cupping",
        name: L(lang, "Cupping (Bekam)", "Cupping (Bekam)"),
        desc: L(
          lang,
          "Terapi bekam dengan gelas vakum untuk detoksifikasi dan meredakan nyeri otot.",
          "Cupping therapy with vacuum cups for detoxification and muscle-pain relief.",
        ),
        img: "/img/menu-cupping.jpg",
        opts: [opt(lang, 30, "Rp 120.000")],
      },
      {
        slug: "v-ratus",
        name: L(lang, "V-Ratus", "V-Ratus (V-Steam)"),
        desc: L(
          lang,
          "Perawatan uap herbal tradisional khusus wanita untuk kebersihan dan kesegaran area kewanitaan.",
          "A traditional herbal steam treatment for women, for feminine hygiene and freshness.",
        ),
        img: "/img/menu-v-ratus.jpg",
        opts: [opt(lang, 30, "Rp 175.000")],
      },
    ],
  };
}

// Real, verified guest reviews (Google + Tripadvisor) — kept in original wording, lightly cleaned.
export type Review = { initial: string; color: string; name: string; via: (l: Lang) => string; text: string };
export const reviews: Review[] = [
  {
    initial: "L",
    color: "#b15a2b",
    name: "Lim C.",
    via: (l) => (l === "en" ? "Google review" : "Ulasan Google"),
    text: "If you want a very good and relaxing massage, ask for Dede. I had a 2-hour leg massage from him — really, highly recommended.",
  },
  {
    initial: "S",
    color: "#3d6b4a",
    name: "Guest from Singapore",
    via: (l) => (l === "en" ? "Tripadvisor review" : "Ulasan Tripadvisor"),
    text: "Great massage spot in Batam! Affordable prices and the massage is really strong, almost like a sports massage. Totally worth it — highly recommended!",
  },
  {
    initial: "D",
    color: "#9c6b2e",
    name: "Dewa D.",
    via: (l) => (l === "en" ? "Google review" : "Ulasan Google"),
    text: "Comfortable massages, cheaper and the best price I’ve ever seen. All the staff are very kind with great service.",
  },
];

export type Reel = { n: number; img: string; cap: (l: Lang) => string };
export const reels: Reel[] = [
  { n: 1, img: "/img/reel-1.jpg", cap: (l) => (l === "en" ? "Spa Tour" : "Suasana Spa") },
  { n: 2, img: "/img/reel-2.jpg", cap: (l) => (l === "en" ? "First Look" : "First Impression") },
  { n: 3, img: "/img/reel-3.jpg", cap: (l) => (l === "en" ? "Hot Stone" : "Hot Stone") },
];

export const igPhotos = ["/img/ig-1.jpg", "/img/ig-2.jpg", "/img/ig-3.jpg"];
