import { Lang } from "./i18n";

export type BlogPost = {
  id: string;
  slug: string;
  img: string;
  alt: string;
  treatment: string;
  priceFrom: string;
  duration: string;
  waName: { id: string; en: string };
  eyebrow: (l: Lang) => string;
  title: (l: Lang) => string;
  problem: (l: Lang) => string;
  solution: (l: Lang) => string;
  benefits: (l: Lang) => string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "travel-fatigue",
    slug: "massage-after-travel-batam",
    img: "/img/menu-signature.jpg",
    alt: "Private luxury treatment room with warm ambient lighting prepared for Djaya Signature massage ritual in Batam",
    treatment: "Djaya Signature 3-in-1",
    priceFrom: "Rp 420.000",
    duration: "150 min",
    waName: {
      id: "Djaya Signature 3-in-1 (150 menit)",
      en: "Djaya Signature 3-in-1 (150 min)",
    },
    eyebrow: (l) => (l === "en" ? "After Travel" : "Setelah Perjalanan"),
    title: (l) =>
      l === "en"
        ? "Why your body needs massage after ferry or flight travel"
        : "Mengapa tubuh butuh massage setelah ferry atau penerbangan",
    problem: (l) =>
      l === "en"
        ? "Sitting on planes, ferries, or exploring Batam all day compresses the spine, stiffens the hips, and leaves the legs heavy. Travel fatigue is not just tiredness — it is reduced circulation and a nervous system still in transit mode."
        : "Duduk lama di pesawat, ferry, atau menjelajah Batam seharian menekan tulang belakang, mengencangkan pinggul, dan membuat kaki terasa berat. Kelelahan perjalanan bukan sekadar lelah — itu sirkulasi menurun dan sistem saraf yang belum tenang.",
    solution: (l) =>
      l === "en"
        ? "The Djaya Signature 3-in-1 ritual combines body scrub, aromatherapy massage, and ear candling in one 150-minute session. Deep rhythmic pressure and warm oil strokes reset circulation after travel and guide the body out of tension into deep rest."
        : "Ritual Djaya Signature 3-in-1 menggabungkan lulur tubuh, pijat aromaterapi, dan ear candling dalam satu sesi 150 menit. Tekanan ritmis mendalam dan aliran minyak hangat memulihkan sirkulasi setelah perjalanan dan membawa tubuh dari tegang ke istirahat dalam.",
    benefits: (l) =>
      l === "en"
        ? [
            "Releases spinal and shoulder compression from long sitting",
            "Restores circulation in heavy legs after ferry or walking tours",
            "Calms the nervous system for deeper sleep the same night",
          ]
        : [
            "Melepas kompresi punggung dan bahu setelah duduk lama",
            "Memulihkan sirkulasi kaki berat setelah ferry atau jalan kaki",
            "Menenangkan sistem saraf agar tidur lebih nyenyak di malam yang sama",
          ],
  },
  {
    id: "sports-recovery",
    slug: "massage-for-sports-recovery-batam",
    img: "/img/menu-complete-foot.jpg",
    alt: "Therapist performing targeted back and shoulder massage for sports recovery at Djaya Massage Batam",
    treatment: "Complete Foot, Back, Shoulder & Head",
    priceFrom: "Rp 170.000",
    duration: "60–120 min",
    waName: {
      id: "Refleksi Kaki + Punggung, Bahu & Kepala",
      en: "Complete Foot, Back, Shoulder & Head",
    },
    eyebrow: (l) => (l === "en" ? "Sports & Strain" : "Olahraga & Pegal"),
    title: (l) =>
      l === "en"
        ? "The best massage in Batam for post-workout and sports recovery"
        : "Massage terbaik di Batam untuk recovery setelah olahraga",
    problem: (l) =>
      l === "en"
        ? "Golf, running, gym sessions, and intense activity leave lactic acid in the muscles and create tight bands across the feet, back, and shoulders. Without recovery, soreness lingers and mobility drops."
        : "Golf, lari, gym, dan aktivitas intens meninggalkan asam laktat di otot serta membuat area kaki, punggung, dan bahu kaku. Tanpa recovery, pegal bertahan dan mobilitas menurun.",
    solution: (l) =>
      l === "en"
        ? "Complete Foot, Back, Shoulder & Head systematically works the body’s highest-load zones. Foot reflexology plus upper-body massage helps flush metabolic waste, ease tight bands, and accelerate recovery so you move freely again."
        : "Refleksi Kaki + Punggung, Bahu & Kepala mengerjakan zona beban tertinggi tubuh secara sistematis. Refleksi kaki plus pijat tubuh atas membantu mengeluarkan limbah metabolik, melemaskan otot kaku, dan mempercepat recovery.",
    benefits: (l) =>
      l === "en"
        ? [
            "Targets feet, back, shoulders, and head in one focused session",
            "Supports lactic acid clearance after sports or heavy training",
            "Ideal the same day as golf, gym, or long walks around Batam",
          ]
        : [
            "Fokus pada kaki, punggung, bahu, dan kepala dalam satu sesi",
            "Membantu mengurangi pegal setelah olahraga atau latihan berat",
            "Ideal di hari yang sama setelah golf, gym, atau jalan jauh di Batam",
          ],
  },
  {
    id: "everyday-stress",
    slug: "foot-reflexology-for-stress-batam",
    img: "/img/menu-foot-only.jpg",
    alt: "Professional foot reflexology session with traditional batik linens at Djaya Massage & Reflexology Batam",
    treatment: "Foot Reflexology",
    priceFrom: "Rp 150.000",
    duration: "60–120 min",
    waName: {
      id: "Refleksi Kaki",
      en: "Foot Reflexology",
    },
    eyebrow: (l) => (l === "en" ? "Everyday Stress" : "Stres Sehari-hari"),
    title: (l) =>
      l === "en"
        ? "Why foot reflexology is the best basic relaxation in Batam"
        : "Mengapa refleksi kaki adalah relaksasi dasar terbaik di Batam",
    problem: (l) =>
      l === "en"
        ? "Desk work, screen fatigue, and mental overload settle as tension in the neck and lower limbs. The body stays alert even when you want to rest — a quiet, foundational reset is needed."
        : "Kerja di meja, kelelahan layar, dan beban mental menumpuk sebagai ketegangan di leher dan kaki. Tubuh tetap waspada meski Anda ingin istirahat — dibutuhkan reset yang tenang dan mendasar.",
    solution: (l) =>
      l === "en"
        ? "Foot Reflexology uses traditional zone therapy on the soles to stimulate nerve pathways linked to the whole body. Gentle, precise pressure helps lower stress response and triggers immediate, whole-body relaxation — without a full-body session."
        : "Refleksi Kaki menggunakan terapi zona tradisional pada telapak kaki untuk merangsang jalur saraf ke seluruh tubuh. Tekanan lembut dan tepat membantu menurunkan respons stres dan memicu relaksasi menyeluruh — tanpa sesi full-body.",
    benefits: (l) =>
      l === "en"
        ? [
            "Stimulates reflex points connected to organs and muscle groups",
            "Eases mental load through grounded, rhythmic footwork",
            "Accessible entry treatment from Rp 150.000 for 60 minutes",
          ]
        : [
            "Merangsang titik refleksi yang terhubung ke organ dan kelompok otot",
            "Meredakan beban mental melalui tekanan ritmis di telapak kaki",
            "Perawatan awal yang mudah dijangkau mulai Rp 150.000 / 60 menit",
          ],
  },
];
