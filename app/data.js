// app/data.js
const rawArtworks = [
    { src: "/images/Artworks/optimized/01_Robin_Artwork.webp", title: "Female Robin from \"Fire Emblem Awakening\" - Fanart", desc: "Artwork from 2023.", descDE: "Kunstwerk aus 2023.", year: 2023 },
    { src: "/images/Artworks/optimized/02_Link_Botw_Artwork.webp", title: "Link from \"The Legend of Zelda BOTW\" - Fanart", desc: "Artwork from 2024.", descDE: "Kunstwerk aus 2024.", year: 2024 },
    { src: "/images/Artworks/optimized/03_Frieren_Artwork.webp", title: "Frieren from \"Frieren - Beyond journey's end\" - Fanart", desc: "Artwork from 2025.", descDE: "Kunstwerk aus 2025.", year: 2025 },
    { src: "/images/Artworks/optimized/04_Conan_Artwork.webp", title: "Conan Edogawa from \"Detective Conan\" - Fanart", desc: "Artwork from 2025.", descDE: "Kunstwerk aus 2025.", year: 2025 },
    { src: "/images/Artworks/optimized/05_pumkin_girl_artwork.webp", title: "Deer in the Forest - My OC", desc: "Artwork from 2026.", descDE: "Kunstwerk aus 2026.", year: 2026 },
    { src: "/images/Artworks/optimized/06_Law_Redraw_Artwork.webp", title: "Trafalgar D. Water Law from \"One Piece\" - Fanart", desc: "Artwork from 2026.", descDE: "Kunstwerk aus 2026.", year: 2026 },
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
    aboutDE: "F\u00FCr mein erstes Sculpting-Projekt habe ich drei Monate gelernt, die komplette 3D-Character-Pipeline umzusetzen, um diese vollst\u00E4ndig game-ready Kreatur zu erschaffen. Mein Ziel war es, die stilisierte \u00C4sthetik des Spiels originalgetreu nachzubilden und gleichzeitig ein paar pers\u00F6nliche Design-Akzente zu setzen.",
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
    aboutDE: "F\u00FCr mein Diplomprojekt habe ich 4,5 Monate lang mit Melanie Amon-Schwarz zusammengearbeitet, um Different Frame zu entwickeln \u2013 ein Walkthrough-Spiel, das neurotypischen Spieler:innen helfen soll, allt\u00E4gliche Aufgaben mit ADHS zu erleben. Ich war f\u00FCr die gesamte Charakter-Art-Pipeline verantwortlich, von unserem Protagonisten Rae vom ersten 2D-Konzept bis zum finalen, game-ready 3D-Modell. \nRae ist ein non-bin\u00E4rer junger Erwachsener, der das Universit\u00E4tsleben im Wohnheim meistert. Ich habe Rae ein lebendiges, eklektisches Design gegeben, das die ADHS visuell widerspiegelt \u2013 die energiegeladene Pers\u00F6nlichkeit direkt in Kleidung und Stil \u00FCbersetzt, sodass die Neurodivergenz genauso in der \u00C4sthetik repr\u00E4sentiert ist wie im Gameplay.",
    specs: [
      { label: "Polycount", value: "77.2K Tris" },
      { label: "Workflow", value: "High-to-Low Poly" },
      { label: "Software", value: "Adobe Photoshop, ZBrush, Autodesk Maya, Substance 3D Painter, Marmoset Toolbag 5, Unreal Engine 5" },
    ],
  },
];

export const projects = rawProjects;
export const getProject = (slug) => rawProjects.find((p) => p.slug === slug);