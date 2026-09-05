// app/projects/[slug]/ProjectContent.js
'use client';

import { useLanguage, useTranslations } from '../../context/LanguageContext';
import Link from 'next/link';
import MediaGallery from './MediaGallery';
import DpGallery from './dp-gallery';

function RoteaterLayout({ project, t }) {
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
            <h2>{t.projects.projectContext}</h2>
            <p>{project.about}</p>
            <aside className="pp-specs pp-specs--box">
              <h3 className="pp-specs-title">{t.projects.technicalSpecs}</h3>
              <ul className="pp-spec-list">
                {techSpecs.map((s) => (
                  <li key={s.label} className="pp-spec-item">
                    <strong className="pp-spec-label">{t.projects.specLabels[s.label] || s.label}:</strong>{" "}
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

        {project.youtubeId && (
          <section className="pp-media">
            <h2>{t.projects.turntableVideo}</h2>
            <div className="pp-media-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=1`}
                title={t.projects.videoTitle}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <section className="pp-gallery">
          <h2>{t.projects.finalRenders}</h2>
          <MediaGallery media={project.media} title={project.title} />
        </section>
      </div>
    </div>
  );
}

function DiplomLayout({ project, t }) {
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
            <h2>{t.projects.projectContext}</h2>
            <p>{project.about}</p>
            <aside className="pp-specs pp-specs--box">
              <h3 className="pp-specs-title">{t.projects.technicalSpecs}</h3>
              <ul className="pp-spec-list">
                {techSpecs.map((s) => (
                  <li key={s.label} className="pp-spec-item">
                    <strong className="pp-spec-label">{t.projects.specLabels[s.label] || s.label}:</strong>{" "}
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
              <h2>{t.projects.conceptArt}</h2>
              <DpGallery media={project.conceptMedia} title={`${project.title} concept`} />
            </div>

            <div className="dp-final">
              <h2>{t.projects.finalRenders}</h2>
              <DpGallery media={project.finalAssets} title={`${project.title} sculpting`} />
            </div>
          </div>
        </section>

        {project.youtubeId && (
          <section className="pp-media">
            <h2>{t.projects.turntableVideo}</h2>
            <div className="pp-media-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=1`}
                title={t.projects.videoTitle}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
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

export default function ProjectContent({ project }) {
  const { lang } = useLanguage();
  const t = useTranslations();

  if (!project) {
    return (
      <main className="pp-notfound">
        <h1>{t.projects.notFound}</h1>
        <Link href="/">&larr; {t.projects.backHome}</Link>
      </main>
    );
  }

  const Template = templates[project.slug] || RoteaterLayout;

  const projectWithLang = {
    ...project,
    subtitle: lang === 'de' ? project.subtitleDE || project.subtitle : project.subtitle,
    about: lang === 'de' ? project.aboutDE || project.about : project.about,
  };

  return (
    <main className={`project-main ${project.slug === "roteater" || project.slug === "diplom" ? "project-main--flush" : ""}`}>
      <Template project={projectWithLang} t={t} />
    </main>
  );
}