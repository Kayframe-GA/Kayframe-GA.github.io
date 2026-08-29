// scripts/optimize-images.js
/* eslint-disable @typescript-eslint/no-require-imports */
// Converts artwork & project PNGs to optimized WebP files for web display.
// Usage: node scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAX_WIDTH = 1600;
const QUALITY = 80;

// Each root folder is processed; artifact PNGs are converted to WebP.
// WebP output goes next to the source (inside the source folder).
const roots = [
  {
    srcDir: path.join(__dirname, '..', 'public', 'images', 'Artworks'),
    outDir: path.join(__dirname, '..', 'public', 'images', 'Artworks', 'optimized'),
  },
  {
    srcDir: path.join(__dirname, '..', 'public', 'images', 'Projects'),
    // All project WebP files go under a single top-level optimized/ folder,
    // keeping the source PNGs separate and the structure mirror.
    outDir: path.join(__dirname, '..', 'public', 'images', 'Projects', 'optimized'),
    perFolderOut: false,
  },
];

// Recursively collect files with a given extension under a directory.
function collectFiles(dir, extRegex, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'optimized') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(full, extRegex, out);
    } else if (extRegex.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

// Compute the WebP output path, mirroring the source subfolder structure
// under outDir.
function webpPathFor(srcFile, ext, srcDir, outDir) {
  const rel = path.relative(srcDir, srcFile);
  const relNoExt = rel.replace(new RegExp(`${ext}$`, 'i'), '');
  return path.join(outDir, `${relNoExt}.webp`);
}

function formatMB(bytes) {
  return (bytes / 1048576).toFixed(2);
}

async function processDir({ srcDir, outDir }) {
  const srcFiles = collectFiles(srcDir, /\.png$/i);
  if (srcFiles.length === 0) {
    console.log(`No PNGs found in ${srcDir}`);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const srcFile of srcFiles) {
    const ext = path.extname(srcFile);
    const outFile = webpPathFor(srcFile, ext, srcDir, outDir);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    const before = fs.statSync(srcFile).size;

    await sharp(srcFile)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);

    const after = fs.statSync(outFile).size;
    const rel = path.relative(path.join(__dirname, '..'), srcFile);
    console.log(
      `${rel}  ${formatMB(before)}MB -> ${formatMB(after)}MB  (${after < before ? 'reduced' : 'unchanged'})`
    );
  }
}

async function main() {
  for (const root of roots) {
    await processDir(root);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
