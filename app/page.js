// app/page.js
'use client';

import { useState } from 'react';
import { artworks } from './data'; // Import shared data
import Link from 'next/link';
import { useLanguage, useTranslations } from './context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const [selectedArt, setSelectedArt] = useState(null);

  // Take only the first 5 items for the "preview" on home page
  const highlightArtworks = artworks.slice(0, 5);

  const artDescription = (art) => (lang === 'de' ? art.descDE || art.desc : art.desc);

  return (
    <>
      {/* Nav and Footer are now in layout.js! */}

      <main>
        <section className="hero">
          <div className="hero-title-row">
            <img src="/images/01_Logo.png" alt={t.home.heroLogoAlt} className="hero-logo" />
            <h1><span className="highlight-title">Kayframe GA</span> <span className="skills-subtitle">{t.home.heroSubtitle}</span></h1>
          </div>
        </section>

        <section id="work" className="work-section">

          <h2 className="section-title projects-title">{t.home.projects}</h2>
          <div className="projects-container">
            <p>{t.home.projectsComingSoon}</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <h2 className="section-title artworks-title">{t.home.artworks}</h2>
             {/* Link to the full gallery */}
              <Link href="/gallery" className="gallery-link">{t.home.viewFullGallery} &rarr;</Link>
          </div>

          <div className="gallery-scroll-container">
            {highlightArtworks.map((art) => (
              <div
                key={art.id}
                className="gallery-item"
                onClick={() => setSelectedArt(art)}
              >
                <img src={art.src} alt={art.title} loading="lazy" />
              </div>
            ))}
          </div>

          </div>
        </section>

        <section id="about" className="about-section">
          {/* ... existing about content ... */}
          <div className="about-container">
            <div className="about-image">
              <img src="/images/sample-profile.png" alt={t.home.aboutImageAlt} />
            </div>
            <div className="about-content">
              <div className="bio-text">
                <h2>{t.home.aboutMe}</h2>
                <h3 className="bio-header">{t.home.bioHeader}</h3>
                <p>{t.home.bio1}</p>

                <h3 className="bio-header">{t.home.journeyHeader}</h3>
                <p>{t.home.journey}</p>

                <h3 className="bio-header">{t.home.skillsetHeader}</h3>
                <p>{t.home.skillset}</p>

                <div className="bio-spacer"></div>

                <p>{t.home.inspiration}</p>
                <p className="no-gap"><b>{t.home.cta}</b></p>
              </div>
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="skill-category">
              <h4>{t.home.specializations}</h4>
              <ul>
                {t.home.specializationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h4>{t.home.softwares}</h4>
              <ul>
                <li>Clip Studio Paint</li>
                <li>Adobe Photoshop</li>
                <li>ZBrush</li>
                <li>Autodesk Maya</li>
                <li>Marmoset Toolbag</li>
                <li>Adobe Substance Painter</li>
                <li>Unreal Engine 5</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal (Keep this here for home page interactions) */}
      <div className={`lightbox ${selectedArt ? 'active' : ''}`} onClick={() => setSelectedArt(null)}>
        <button className="close-btn">&times;</button>
        {selectedArt && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedArt.src} alt={selectedArt.title} />
            <div className="lightbox-info">
              <h3>{selectedArt.title}</h3>
              <p>{artDescription(selectedArt)}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}