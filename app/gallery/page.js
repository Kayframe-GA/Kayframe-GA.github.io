// app/gallery/page.js
'use client';

import { useState } from 'react';
import { artworks } from '../data'; // Import shared data
import { useLanguage, useTranslations } from '../context/LanguageContext';

export default function GalleryPage() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const [selectedArt, setSelectedArt] = useState(null);

  const artDescription = (art) => (lang === 'de' ? art.descDE || art.desc : art.desc);

  return (
    <>
      <main style={{ paddingTop: '80px' }}> {/* Padding to account for fixed header if needed, or just visual separation */}

        <section className="work-section">
          <h1 className="section-title artworks-title gallery-page-title" style={{ textAlign: 'center' }}>{t.gallery.title}</h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            {t.gallery.description}
          </p>

          <div className="gallery-grid">
            {artworks.map((art) => (
              <div
                key={art.id}
                className="gallery-item"
                onClick={() => setSelectedArt(art)}
              >
                <img src={art.src} alt={art.title} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Reusing the Lightbox Logic */}
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