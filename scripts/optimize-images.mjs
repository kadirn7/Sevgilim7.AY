import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");
const files = await readdir(imagesDir);
const sources = files.filter((f) => f.endsWith(".DNG") || /\.(jpg|jpeg|png)$/i.test(f));

for (const file of sources) {
  const input = path.join(imagesDir, file);
  const num = file.match(/\d+/)?.[0] ?? file;
  const output = path.join(imagesDir, `${num}.jpg`);

  await sharp(input)
    .rotate()
    .resize(1400, 1400, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  const { size } = await import("fs/promises").then((fs) =>
    fs.stat(output)
  );
  console.log(`✓ ${file} → ${num}.jpg (${(size / 1024).toFixed(0)} KB)`);
}

console.log("Tamamlandı!");
