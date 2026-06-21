// One-off asset optimizer: produces .webp alongside the .jpg sources in assets/img,
// plus a 1200x630 social card (og). Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const IMG_DIR = path.resolve("assets/img");
const WEBP_QUALITY = 78;

const files = (await readdir(IMG_DIR)).filter((f) => f.toLowerCase().endsWith(".jpg"));

for (const file of files) {
  const input = path.join(IMG_DIR, file);
  const out = path.join(IMG_DIR, file.replace(/\.jpg$/i, ".webp"));
  await sharp(input).webp({ quality: WEBP_QUALITY }).toFile(out);
  console.log("webp ->", path.basename(out));
}

// Dedicated social card (Open Graph / WhatsApp) at the recommended 1200x630.
await sharp(path.join(IMG_DIR, "og.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82 })
  .toFile(path.join(IMG_DIR, "og-card.jpg"));
console.log("og-card.jpg written (1200x630)");
