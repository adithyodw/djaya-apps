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
      "Pengalaman penyembuhan tradisional Indonesia yang autentik & premium.",
      "An authentic, premium traditional Indonesian healing experience.",
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
      "Djaya menghadirkan kehangatan keramahan Indonesia melalui sentuhan terapis profesional dan ramuan tradisional pilihan. Setiap perawatan dirancang untuk memulihkan tubuh dan menenangkan pikiran.",
      "Djaya brings the warmth of Indonesian hospitality through the hands of professional therapists and time-honoured traditional remedies. Every treatment is designed to restore the body and quiet the mind.",
    ),
    aboutBody2: L(
      lang,
      "Kami hanya menggunakan minyak pijat Indonesia autentik berkualitas tinggi — sebuah ruang untuk benar-benar beristirahat di jantung Kota Batam.",
      "We use only authentic, high-quality Indonesian massage oils — a space to truly rest in the heart of Batam.",
    ),
    pillar1t: L(lang, "Terapis Profesional", "Pro Therapists"),
    pillar1d: L(lang, "Terlatih & berpengalaman", "Trained & experienced"),
    pillar2t: L(lang, "Minyak Indonesia Asli", "Authentic Oils"),
    pillar2d: L(lang, "Berkualitas tinggi", "High-grade & natural"),
    pillar3t: L(lang, "Suasana Premium", "Premium Ambiance"),
    pillar3d: L(lang, "Tenang, bersih, nyaman", "Calm, clean, comfortable"),
    pillar4t: L(lang, "Pelayanan Ramah", "Warm Service"),
    pillar4d: L(lang, "Keramahan khas Indonesia", "True Indonesian hospitality"),

    menuLabel: L(lang, "Menu", "Menu"),
    menuHead: L(lang, "Daftar Treatment", "Treatment Menu"),
    menuSub: L(
      lang,
      "Harga dalam Rupiah. Sesi tersedia 30–150 menit.",
      "Prices in Rupiah. Sessions from 30–150 minutes.",
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
    locHead: L(lang, "Kunjungi Kami", "Visit Us"),
    locNear: L(lang, "Dekat Grand Batam Mall & A2 Foodcourt", "Near Grand Batam Mall & A2 Foodcourt"),
    locBtn: L(lang, "Buka di Google Maps", "Open in Google Maps"),

    igHead: L(lang, "Ikuti Perjalanan Kami", "Follow Our Journey"),
    igFollow: L(lang, "Ikuti", "Follow"),
    igReels: L(lang, "Reels Pilihan", "Featured Reels"),
  };
}

export type Dict = ReturnType<typeof t>;
