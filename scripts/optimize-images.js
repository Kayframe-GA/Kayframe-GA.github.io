// scripts/optimize-images.js
/* eslint-disable @typescript-eslint/no-require-imports */
// Converts artwork PNGs to optimized WebP files for web display.
// Usage: node scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'public', 'images', 'Artworks');
const outDir = path.join(srcDir, 'optimized');

const MAX_WIDTH = 1600;
const QUALITY = 80;

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter((f) => /\.png$/i.test(f));

  for (const file of files) {
    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const outFile = path.join(outDir, `${base}.webp`);

    const src = path.join(srcDir, file);
    const before = fs.statSync(src).size;

    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);

    const after = fs.statSync(outFile).size;
    console.log(
      `${file}  ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(2)}MB  (${after < before ? 'reduced' : 'unchanged'})`
    );
  }

  console.log('Done. Optimized files written to', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
