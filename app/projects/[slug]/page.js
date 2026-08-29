import Link from "next/link";
import { getProject, projects } from "../../data";
import "./projects.css";

export async function generateStaticParams() {
  return projects.map((proj) => ({ slug: proj.slug }));
}

// Each project can define its own `layout` key in data.js.
// The templates below give each project a distinct visual representation.
function RoteaterLayout({ project }) {
  return (
    <div className="project-project roteater-template">
      <div className="pp-hero">
        <img src={project.hero} alt={project.title} />
        <div className="pp-hero-caption">
          <h1>{project.title} - {project.subtitle}</h1>
        </div>
      </div>

      <div className="pp-body">
        <section className="pp-about">
          <h2>About the project</h2>
          <p>{project.about}</p>
          <div className="pp-tags">
            {project.tags.map((t) => (
              <span key={t} className="pp-tag">{t}</span>
            ))}
          </div>
        </section>

        {project.video && (
          <section className="pp-media">
            <h2>Showreel</h2>
            <video controls preload="none" poster={project.poster} src={project.video}>
              Your browser does not support the video tag.
            </video>
          </section>
        )}

        <section className="pp-gallery">
          <h2>Gallery</h2>
          <div className="pp-gallery-grid">
            {project.media.map((src, i) => (
              <img key={src} src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function DiplomLayout({ project }) {
  return (
    <div className="project-project diplom-template">
      <header className="dp-header">
        <h1>{project.title}</h1>
        <p className="pp-subtitle">{project.subtitle}</p>
      </header>

      <div className="dp-hero-row">
        <div className="dp-hero-main">
          <img src={project.hero} alt={project.title} />
        </div>
        <aside className="dp-about">
          <h2>About</h2>
          <p>{project.about}</p>
          <div className="pp-tags">
            {project.tags.map((t) => (
              <span key={t} className="pp-tag">{t}</span>
            ))}
          </div>
        </aside>
      </div>

      {project.video && (
        <section className="dp-media">
          <video controls preload="none" poster={project.poster} src={project.video}>
            Your browser does not support the video tag.
          </video>
        </section>
      )}

      <section className="dp-gallery">
        <h2>Showcase</h2>
        <div className="dp-gallery-grid">
          {project.media.map((src) => (
            <img key={src} src={src} alt={project.title} loading="lazy" />
          ))}
        </div>
      </section>
    </div>
  );
}

const templates = {
  roteater: RoteaterLayout,
  diplom: DiplomLayout,
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="pp-notfound">
        <h1>Project not found</h1>
        <Link href="/">&larr; Back home</Link>
      </main>
    );
  }

  const Template = templates[project.slug] || RoteaterLayout;

  return (
    <main className={`project-main ${project.slug === "roteater" ? "project-main--flush" : ""}`}>
      <Template project={project} />
    </main>
  );
}
