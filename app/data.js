// app/data.js
import rawArtworksJson from '../public/data/artworks.json';

// The JSON file (public/data/artworks.json) is the single source of truth.
// Fields there: filename, year, en_title, de_title.
function buildArtwork(item) {
  const base = item.filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  return {
    src: `/images/Artworks/optimized/${base}.webp`,
    title: item.en_title,
    titleDE: item.de_title,
    desc: `Artwork from ${item.year}.`,
    descDE: `Kunstwerk aus ${item.year}.`,
    year: item.year,
  };
}

const rawArtworks = rawArtworksJson.map(buildArtwork);

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
    subtitleDE: "Kena: Bridge of Spirits Fanart",
    hero: "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_2.webp",
    media: [
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_0.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_1.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_2.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_3.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_4.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_5.webp",
      "/images/Projects/optimized/01_RotEater/Rot_Eater_Beautyshot_6.webp",
    ],
    youtubeId: "88dNcWgHN5M",
    about: "For my first sculpting project, I spent three months learning the complete 3D character pipeline to create this fully game-ready creature. My goal was to faithfully recreate the game's stylized aesthetic while adding a few personal design touches.",
    aboutDE: "In meinem ersten Sculpting-Projekt habe ich mir über drei Monate hinweg die gesamte 3D-Character-Pipeline angeeignet, um diese komplett game-ready optimierte Creature zu entwickeln. Mein Fokus lag darauf, die stilisierte Ästhetik des Spiels detailgetreu einzufangen, während ich dem Modell gleichzeitig eine persönliche Design-Note verliehen habe.",
    specs: [
      { label: "Polycount", value: "23.3K Tris" },
      { label: "Workflow", value: "High-to-Low Poly" },
      { label: "Software", value: "ZBrush, Autodesk Maya, Substance 3D Painter, Marmoset Toolbag 5" },
    ],
  },
  {
    slug: "diplom",
    title: "Rae",
    navTitle: "Rae (Diploma)",
    navTitleDE: "Rae (Diplom)",
    subtitle: "Different Frame (Diploma Project)",
    subtitleDE: "Different Frame (Diplomprojekt)",
    hero: "/images/Projects/optimized/02_Diplom/02_Sculpting/HeroShot.webp",
    transparentHero: "/images/Projects/optimized/02_Diplom/02_Sculpting/Heroshot_transparent.webp",
    conceptMedia: [
      "/images/Projects/optimized/02_Diplom/Concept/01_Silhouetten_Rae.webp",
      "/images/Projects/optimized/02_Diplom/Concept/02_Thumbnails_Rae.webp",
      "/images/Projects/optimized/02_Diplom/Concept/03_Design_Iterations_Rae.webp",
      "/images/Projects/optimized/02_Diplom/Concept/04_Color_Variation_Rae.webp",
      "/images/Projects/optimized/02_Diplom/Concept/05_Turnaround_Rae.webp",
    ],
    finalAssets: [
      "/images/Projects/optimized/02_Diplom/02_Sculpting/A_Pose_Turnaround.webp",
      "/images/Projects/optimized/02_Diplom/02_Sculpting/Beautyshot_Portrait.webp",
      "/images/Projects/optimized/02_Diplom/02_Sculpting/Beautyshot_Perspective.webp",
      "/images/Projects/optimized/02_Diplom/02_Sculpting/Wireframe_and_TextureSets_Overview.webp",
    ],
    youtubeId: "iUhlIM7viTY",
    about: "For my diploma project, I collaborated with Melanie Amon-Schwarz over 4.5 months to create Different Frame, a walkthrough game designed to help neurotypical players experience everyday tasks with ADHD. I was responsible for the entire character art pipeline, taking our protagonist, Rae, from the initial 2D concept to the final, game-ready 3D model. \nRae is a non-binary young adult navigating university life in a dorm. I gave them a vibrant, eclectic design to visually reflect their ADHD, translating their energetic personality directly into their clothing and style so their neurodivergence is represented in their aesthetic just as much as the gameplay.",
    aboutDE: "In meinem Diplomprojekt Different Frame, das in einer 4,5-monatigen Zusammenarbeit mit Melanie Amon-Schwarz entstand, machen wir den Alltag mit ADHS für neurotypische Spieler*innen erlebbar. Als Verantwortliche für die komplette Character-Art-Pipeline habe ich unseren non-binären Hauptcharakter Rae vom allerersten 2D-Concept bis hin zum finalen, game-ready 3D-Modell entwickelt. \nRae ist eine junge, non-binäre Person, die den Uni-Alltag in einem Studentenwohnheim navigiert. Um Raes ADHS visuell greifbar zu machen, habe ich mich für ein farbenfrohes, unkonventionelles Design entschieden. Raes energiegeladene Art fließt direkt in die Kleidung und den Stil ein – so wird die Neurodivergenz in der Ästhetik genauso spürbar wie im Gameplay selbst.",
    specs: [
      { label: "Polycount", value: "77.2K Tris" },
      { label: "Workflow", value: "High-to-Low Poly" },
      { label: "Software", value: "Adobe Photoshop, ZBrush, Autodesk Maya, Substance 3D Painter, Marmoset Toolbag 5, Unreal Engine 5" },
    ],
  },
];

export const projects = rawProjects;
export const getProject = (slug) => rawProjects.find((p) => p.slug === slug);