// app/data.js
const rawArtworks = [
    { src: "/images/Artworks/optimized/01_Robin_Artwork.webp", title: "Female Robin from \"Fire Emblem Awakening\" - Fanart", desc: "Artwork from 2023.", year: 2023 },
    { src: "/images/Artworks/optimized/02_Link_Botw_Artwork.webp", title: "Link from \"The Legend of Zelda BOTW\" - Fanart", desc: "Artwork from 2024.", year: 2024 },
    { src: "/images/Artworks/optimized/03_Frieren_Artwork.webp", title: "Frieren from \"Frieren - Beyond journey's end\" - Fanart", desc: "Artwork from 2025.", year: 2025 },
    { src: "/images/Artworks/optimized/04_Conan_Artwork.webp", title: "Conan Edogawa from \"Detective Conan\" - Fanart", desc: "Artwork from 2025.", year: 2025 },
    { src: "/images/Artworks/optimized/05_pumkin_girl_artwork.webp", title: "Deer in the Forest - My OC", desc: "Artwork from 2026.", year: 2026 },
    { src: "/images/Artworks/optimized/06_Law_Redraw_Artwork.webp", title: "Trafalgar D. Water Law from \"One Piece\" - Fanart", desc: "Artwork from 2026.", year: 2026 },
];

// The id is derived from the leading number in the filename.
function extractId(src) {
  const match = src.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// Sorted so the highest id number is shown first.
export const artworks = [...rawArtworks]
  .map((art) => ({ ...art, id: extractId(art.src) }))
  .sort((a, b) => b.id - a.id);