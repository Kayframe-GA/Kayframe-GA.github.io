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

// ============================================================
// PROJECTS
// Each project is a separate page/site with its own layout.
// Add a new entry here to make it appear in the header dropdown.
// ============================================================
const rawProjects = [
  {
    slug: "roteater",
    title: "Rot Eater",
    subtitle: "Kena: Bridge of Spirits Fanart",
    hero: "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_2.webp",
    media: [
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_1.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_2.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_3.webp",
    ],
    video: "/images/Projects/01_RotEater/Rot_Eater.mp4",
    poster: "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_1.webp",
    about: "A stylized sculpted character with a distinct art direction and showcase.",
    tags: ["ZBrush", "Marmoset Toolbag", "Substance Painter"],
  },
  {
    slug: "diplom",
    title: "Rae - Diplom Project",
    subtitle: "Concept & Sculpting Showcase",
    hero: "/images/Projects/optimized/02_Diplom/02_Sculpting/HeroShot.webp",
    media: [
      "/images/Projects/optimized/02_Diplom/Concept/Design_Iterations_Rae.webp",
      "/images/Projects/optimized/02_Diplom/Concept/Turnaround_Rae.webp",
      "/images/Projects/optimized/02_Diplom/02_Sculpting/Beautyshot_Perspective.webp",
    ],
    video: "/images/Projects/02_Diplom/02_Sculpting/Rae_Turntable.mp4",
    poster: "/images/Projects/optimized/02_Diplom/02_Sculpting/HeroShot.webp",
    about: "Diploma project spanning concept art and 3D sculpting.",
    tags: ["Concept Art", "ZBrush", "Autodesk Maya"],
  },
];

export const projects = rawProjects;
export const getProject = (slug) => rawProjects.find((p) => p.slug === slug);