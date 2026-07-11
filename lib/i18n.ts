export type Lang = "id" | "en";

const L = (lang: Lang, id: string, en: string) => (lang === "en" ? en : id);

export const PHONE = "6285278355590";

export const wa = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export function bookMsg(lang: Lang) {
  return lang === "en"
    ? "Hello Djaya Massage Batam, I would like to book a treatment."
    : "Halo Djaya Massage Batam, saya ingin booking treatment.";
}

export function bookItem(lang: Lang, name: string) {
  const prefix =
    lang === "en"
      ? "Hello Djaya Massage Batam, I would like to book: "
      : "Halo Djaya Massage Batam, saya ingin booking: ";
  return wa(prefix + name + ".");
}

export function localPromoMsg(lang: Lang) {
  return wa(
    lang === "en"
      ? "Hello Djaya Massage Batam, I am a local resident and would like to claim the 30% discount."
      : "Halo Djaya Massage Batam, saya warga lokal dan ingin menggunakan diskon 30%.",
  );
}

export function t(lang: Lang) {
  return {
    heroEyebrow: "Batam · Penuin Centre",
    heroSub: L(
      lang,
      "Sanctuary premium untuk relaksasi & reflexology terbaik di Batam.",
      "The ultimate sanctuary for premium massage and reflexology in Batam.",
    ),
    ctaBook: L(lang, "Booking via WhatsApp", "Book via WhatsApp"),
    ctaMenu: L(lang, "Lihat Menu Treatment", "View Treatment Menu"),
    bookShort: L(lang, "Booking", "Book"),

    promoTitle: L(lang, "Diskon 30% untuk Warga Lokal", "30% Off for Locals"),
    promoSub: L(
      lang,
      "Tunjukkan KTP Kepri saat reservasi. Chat kami →",
      "Show your Riau ID when booking. Chat us →",
    ),

    aboutLabel: L(lang, "Tentang Kami", "Our Story"),
    aboutHead: L(lang, "Ketenangan yang berakar pada tradisi.", "Calm, rooted in tradition."),
    aboutBody1: L(
      lang,
      "Djaya Massage & Reflexology adalah spa massage dan reflexology premium di Batam — menghadirkan kehangatan keramahan Indonesia melalui terapis profesional dan ramuan tradisional pilihan.",
      "Djaya Massage & Reflexology is a premium massage and reflexology spa in Batam — bringing Indonesian hospitality through professional therapists and time-honoured traditional remedies.",
    ),
    aboutBody2: L(
      lang,
      "Dari refleksi kaki hingga pijat tradisional Bali, setiap perawatan dirancang untuk memulihkan tubuh dan menenangkan pikiran — di Penuin Centre, dekat Grand Batam Mall.",
      "From foot reflexology to Balinese warm-oil massage, every treatment restores body and mind — in Penuin Centre, near Grand Batam Mall and Nagoya.",
    ),

    whyLabel: L(lang, "Keunggulan Djaya", "The Djaya Difference"),
    whyHead: L(
      lang,
      "Mengapa Djaya adalah pilihan massage terbaik di Batam",
      "Why Djaya is the best massage in Batam",
    ),
    whyLead: L(
      lang,
      "Djaya Massage & Reflexology Batam dipercaya tamu lokal dan wisatawan Singapura karena terapis berpengalaman, kebersihan tinggi, dan perawatan tradisional yang autentik.",
      "Djaya Massage & Reflexology Batam is trusted by locals and Singapore travelers for experienced therapists, high hygiene standards, and authentic traditional treatments.",
    ),
    whyBody: L(
      lang,
      "Setiap sesi dirancang untuk hasil nyata: tubuh lebih ringan, pegal berkurang, dan pikiran lebih tenang — tanpa kompromi pada kenyamanan atau transparansi harga.",
      "Every session is designed for real results: a lighter body, less tension, and a quieter mind — without compromising comfort or price transparency.",
    ),
    whySub1: L(lang, "Standar E-E-A-T kami", "Our trust standards"),
    whyPoint1: L(
      lang,
      "Terapis profesional yang terlatih untuk pijat tradisional, reflexology, dan teknik penyembuhan Indonesia.",
      "Professional therapists trained in traditional massage, reflexology, and Indonesian healing techniques.",
    ),
    whyPoint2: L(
      lang,
      "Lingkungan bersih, tenang, dan premium di Penuin Centre — ideal setelah perjalanan ferry atau hari penuh di Batam.",
      "A clean, calm, premium environment in Penuin Centre — ideal after a ferry trip or a full day in Batam.",
    ),
    whyPoint3: L(
      lang,
      "Minyak pijat Indonesia autentik berkualitas tinggi untuk pengalaman penyembuhan yang natural.",
      "Authentic, high-quality Indonesian massage oils for a natural healing experience.",
    ),
    whyPoint4: L(
      lang,
      "Booking mudah via WhatsApp, buka setiap hari 10.00–22.00, rating 4.9 di Google.",
      "Easy WhatsApp booking, open daily 10 AM–10 PM, rated 4.9 on Google.",
    ),
    whySub2: L(
      lang,
      "Harga transparan — massage & reflexology Batam",
      "Transparent pricing — massage & reflexology Batam",
    ),
    whyColService: L(lang, "Perawatan", "Treatment"),
    whyColFrom: L(lang, "Mulai", "From"),
    whyRow1: L(lang, "Refleksi Kaki (60 menit)", "Foot Reflexology (60 min)"),
    whyRow2: L(lang, "Pijat Tradisional (60 menit)", "Traditional Massage (60 min)"),
    whyRow3: L(lang, "Pijat Minyak Hangat Bali (60 menit)", "Balinese Warm-Oil (60 min)"),
    whyRow4: L(lang, "Batu Panas Mineral (90 menit)", "Mineral Hot Stones (90 min)"),
    whyRow5: L(lang, "Signature 3-in-1 (150 menit)", "Signature 3-in-1 (150 min)"),
    pillar1t: L(lang, "Terapis Profesional", "Pro Therapists"),
    pillar1d: L(lang, "Terlatih & berpengalaman", "Trained & experienced"),
    pillar2t: L(lang, "Minyak Indonesia Asli", "Authentic Oils"),
    pillar2d: L(lang, "Berkualitas tinggi", "High-grade & natural"),
    pillar3t: L(lang, "Suasana Premium", "Premium Ambiance"),
    pillar3d: L(lang, "Tenang, bersih, nyaman", "Calm, clean, comfortable"),
    pillar4t: L(lang, "Pelayanan Ramah", "Warm Service"),
    pillar4d: L(lang, "Keramahan khas Indonesia", "True Indonesian hospitality"),

    menuLabel: L(lang, "Menu", "Menu"),
    menuHead: L(
      lang,
      "Menu massage & reflexology Batam",
      "Best massage & reflexology treatments in Batam",
    ),
    menuSub: L(
      lang,
      "Harga transparan dalam Rupiah. Sesi 30–150 menit. Booking via WhatsApp.",
      "Transparent prices in Rupiah. Sessions 30–150 minutes. Book via WhatsApp.",
    ),

    sigTitle: "3-in-1 Healing Ritual",
    sigDesc: L(
      lang,
      "Lulur tubuh, pijat aromaterapi, dan ear candling menyatu dalam satu ritual penyembuhan 150 menit — perawatan paling istimewa di Djaya.",
      "Body scrub, aromatherapy massage, and ear candling in one 150-minute healing ritual — the most indulgent treatment at Djaya.",
    ),
    sig150: L(lang, "150 menit", "150 minutes"),
    sigEyebrow: "Djaya Signature",

    bookLabel: L(lang, "Reservasi", "Reservation"),
    bookHead: L(lang, "Siap untuk beristirahat?", "Ready to unwind?"),
    bookBody: L(
      lang,
      "Booking langsung lewat WhatsApp. Tim kami akan membantu memilih waktu dan perawatan terbaik untuk Anda.",
      "Book directly via WhatsApp. Our team will help you choose the best time and treatment for you.",
    ),
    hours: L(lang, "Buka setiap hari · 10.00 – 22.00", "Open daily · 10 AM – 10 PM"),

    revLabel: L(lang, "Ulasan", "Reviews"),
    revHead: L(lang, "Dipercaya para tamu kami", "Loved by our guests"),
    revGoogleCta: L(lang, "Lihat di Google →", "View on Google →"),
    revTripCta: L(lang, "Lihat di Tripadvisor →", "View on Tripadvisor →"),
    revAll: L(lang, "Baca semua ulasan di Google", "Read all reviews on Google"),

    locLabel: L(lang, "Lokasi", "Location"),
    locHead: L(lang, "Kunjungi Kami di Batam", "Visit Us in Batam"),
    locNear: L(lang, "Dekat Grand Batam Mall & A2 Foodcourt", "Near Grand Batam Mall & A2 Foodcourt"),
    locBtn: L(lang, "Buka di Google Maps", "Open in Google Maps"),

    igHead: L(lang, "Ikuti Perjalanan Kami", "Follow Our Journey"),
    igFollow: L(lang, "Ikuti", "Follow"),
    igReels: L(lang, "Reels Pilihan", "Featured Reels"),

    faqLabel: L(lang, "Pertanyaan Umum", "FAQ"),
    faqHead: L(
      lang,
      "FAQ: massage & reflexology di Batam",
      "FAQ: best massage & reflexology in Batam",
    ),
    faqLead: L(
      lang,
      "Jawaban singkat untuk wisatawan dari Singapura dan Indonesia yang mencari massage terbaik di Batam.",
      "Clear answers for Singapore and Indonesian travelers searching for the best massage in Batam.",
    ),

    footerCredit: L(lang, "Website oleh", "Website by"),
  };
}

export type Dict = ReturnType<typeof t>;
