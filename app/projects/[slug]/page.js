import Link from "next/link";
import { getProject, projects } from "../../data";
import MediaGallery from "./MediaGallery";
import DpGallery from "./dp-gallery";
import "./projects.css";

export async function generateStaticParams() {
  return projects.map((proj) => ({ slug: proj.slug }));
}

// Each project can define its own `layout` key in data.js.
// The templates below give each project a distinct visual representation.
function RoteaterLayout({ project }) {
  const techSpecs = project.specs.filter((s) => s.label !== "Software");
  const software = project.specs.find((s) => s.label === "Software");

  return (
    <div className="project-project roteater-template">
      <div className="pp-hero">
        <img src={project.hero} alt={project.title} />
      </div>
      <div className="pp-hero-caption pp-hero-caption--below">
        <h1>{project.title} - {project.subtitle}</h1>
      </div>

      <div className="pp-body">
        <section className="pp-about">
          <div className="pp-about-grid">
            <h2>Project Context</h2>
            <p>{project.about}</p>
            <aside className="pp-specs pp-specs--box">
              <h3 className="pp-specs-title">Technical specs</h3>
              <ul className="pp-spec-list">
                {techSpecs.map((s) => (
                  <li key={s.label} className="pp-spec-item">
                    <strong className="pp-spec-label">{s.label}:</strong>{" "}
                    <span className="pp-spec-value">{s.value}</span>
                  </li>
                ))}
              </ul>
              {software && (
                <ul className="pp-spec-sub pp-spec-sub--break">
                  {software.value.split(", ").map((sw) => (
                    <li key={sw}>{sw}</li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </section>

        {project.video && (
          <section className="pp-media">
            <h2>Turntable Video</h2>
            <video controls autoPlay loop muted playsInline poster={project.poster} src={project.video}>
              Your browser does not support the video tag.
            </video>
          </section>
        )}

        <section className="pp-gallery">
          <h2>Final Renders</h2>
          <MediaGallery media={project.media} title={project.title} />
        </section>
      </div>
    </div>
  );
}

function DiplomLayout({ project }) {
  const techSpecs = project.specs.filter((s) => s.label !== "Software");
  const software = project.specs.find((s) => s.label === "Software");

  return (
    <div className="project-project diplom-template">
      <div className="pp-hero">
        <img src={project.hero} alt={project.title} />
      </div>
      <div className="pp-hero-caption pp-hero-caption--below">
        <h1>{project.title} - {project.subtitle}</h1>
      </div>

      <div className="pp-body">
        <section className="pp-about">
          <div className="pp-about-grid">
            <h2>Project Context</h2>
            <p>{project.about}</p>
            <aside className="pp-specs pp-specs--box">
              <h3 className="pp-specs-title">Technical specs</h3>
              <ul className="pp-spec-list">
                {techSpecs.map((s) => (
                  <li key={s.label} className="pp-spec-item">
                    <strong className="pp-spec-label">{s.label}:</strong>{" "}
                    <span className="pp-spec-value">{s.value}</span>
                  </li>
                ))}
              </ul>
              {software && (
                <ul className="pp-spec-sub pp-spec-sub--break">
                  {software.value.split(", ").map((sw) => (
                    <li key={sw}>{sw}</li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </section>

        <section className="dp-character">
          <div className="dp-character-main">
            <img
              className="dp-hero-transparent"
              src={project.transparentHero}
              alt={`${project.title} hero shot`}
            />
          </div>

          <div className="dp-assets">
            <div className="dp-concept">
              <h2>2D Concept Art</h2>
              <DpGallery media={project.conceptMedia} title={`${project.title} concept`} />
            </div>

            <div className="dp-final">
              <h2>Final Renders</h2>
              <DpGallery media={project.finalAssets} title={`${project.title} sculpting`} />
            </div>
          </div>
        </section>

        {project.video && (
          <section className="pp-media">
            <h2>Turntable Video</h2>
            <video controls autoPlay loop muted playsInline poster={project.poster} src={project.video}>
              Your browser does not support the video tag.
            </video>
          </section>
        )}
      </div>
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
    <main className={`project-main ${project.slug === "roteater" || project.slug === "diplom" ? "project-main--flush" : ""}`}>
      <Template project={project} />
    </main>
  );
}
