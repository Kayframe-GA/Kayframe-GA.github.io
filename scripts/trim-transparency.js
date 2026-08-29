// scripts/trim-transparency.js
/* eslint-disable @typescript-eslint/no-require-imports */
// Auto-crops transparent images to the visible content bounding box,
// removing unnecessary canvas margins.
// Usage:
//   node scripts/trim-transparency.js <fileOrGlob> [--out DIR] [--pad N] [--lossless]
//   node scripts/trim-transparency.js public/images/x.png
//   node scripts/trim-transparency.js "public/images/**/*.png" --pad 20
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith('--'));
const outFlag = args.indexOf('--out');
const padFlag = args.indexOf('--pad');
const outDir = outFlag !== -1 ? args[outFlag + 1] : null;
const PAD = padFlag !== -1 ? parseInt(args[padFlag + 1], 10) : 20;
const LOSSLESS = args.includes('--lossless');

function expandGlob(pattern, out = []) {
  const hasMagic = /[*?[\]]/.test(pattern);
  if (!hasMagic) return [pattern];
  const base = pattern.split(/[*?[\]]/)[0];
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      const rel = full.replace(/\//g, '/');
      const matches = new RegExp(
        pattern
          .replace(/[.+^${}()|\\]/g, '\\$&')
          .replace(/\*\*/g, '.*')
          .replace(/\*/g, '[^/]*')
          .replace(/\?/g, '[^/]')
      ).test(rel);
      if (entry.isDirectory()) walk(full);
      else if (matches) out.push(full);
    }
  };
  walk(base);
  return out;
}

async function trim(srcFile) {
  const { data, info } = await sharp(srcFile)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  let minX = w;
  let minY = h;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX === -1) {
    console.log(`SKIP (fully transparent): ${srcFile}`);
    return;
  }

  const left = Math.max(0, minX - PAD);
  const top = Math.max(0, minY - PAD);
  const width = Math.min(w - left, maxX - minX + 2 * PAD);
  const height = Math.min(h - top, maxY - minY + 2 * PAD);

  const ext = path.extname(srcFile).toLowerCase();
  const outFile = outDir
    ? path.join(outDir, path.basename(srcFile))
    : srcFile;

  if (outDir) fs.mkdirSync(outDir, { recursive: true });

  let pipe = sharp(srcFile).extract({ left, top, width, height });
  if (ext === '.webp') pipe = pipe.webp({ lossless: LOSSLESS });
  else if (ext === '.png') pipe = pipe.png();
  await pipe.toFile(outFile);

  const srcSize = fs.statSync(srcFile).size;
  const outSize = fs.statSync(outFile).size;
  const rel = path.relative(process.cwd(), srcFile);
  console.log(
    `CROP ${rel} :: canvas ${w}x${h} -> ${width}x${height} (bbox ${minX},${minY} to ${maxX},${maxY}, pad ${PAD}) :: ${(srcSize / 1024).toFixed(1)}KB -> ${(outSize / 1024).toFixed(1)}KB`
  );
}

async function main() {
  if (!target) {
    console.log(
      'Usage: node scripts/trim-transparency.js <fileOrGlob> [--out DIR] [--pad N] [--lossless]'
    );
    process.exit(1);
  }
  const files = expandGlob(target);
  for (const file of files) {
    await trim(file);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});