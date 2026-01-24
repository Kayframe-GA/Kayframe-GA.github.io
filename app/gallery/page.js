// app/gallery/page.js
'use client';

import { useState } from 'react';
import { artworks } from '../data'; // Import shared data

export default function GalleryPage() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <>
      <main style={{ paddingTop: '80px' }}> {/* Padding to account for fixed header if needed, or just visual separation */}
        
        <section className="work-section">
          <h1 className="section-title" style={{ textAlign: 'center', border: 'none' }}>Artwork Collection</h1>
          <p style={{ textAlign: 'center', color: '#888', marginBottom: '3rem' }}>
            A complete collection of my artworks and creations.
          </p>

          <div className="gallery-grid">
            {artworks.map((art) => (
              <div 
                key={art.id} 
                className="gallery-item"
                onClick={() => setSelectedArt(art)}
              >
                <img src={art.src} alt={art.title} />
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
              <p>{selectedArt.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}