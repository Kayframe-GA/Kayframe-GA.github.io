// app/page.js
'use client';

import { useState } from 'react';
import { artworks } from './data'; // Import shared data
import Link from 'next/link';

export default function Home() {
  const [selectedArt, setSelectedArt] = useState(null);

  // Take only the first 6 items for the "preview" on home page
  const highlightArtworks = artworks.slice(0, 6); 

  return (
    <>
      {/* Nav and Footer are now in layout.js! */}

      <main>
        <section className="hero">
          <h1>Game Artist with Focus on Concept Art and Sculpting</h1>
          <p>Creating immersive worlds and character designs for games.</p>
        </section>

        <section id="work" className="work-section">
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <h2 className="section-title">Artworks</h2>
             {/* Link to the full gallery */}
             <Link href="/gallery" style={{ color: '#fff', textDecoration: 'underline' }}>View Full Gallery &rarr;</Link>
          </div>

          <div className="gallery-scroll-container">
            {highlightArtworks.map((art) => (
              <div 
                key={art.id} 
                className="gallery-item"
                onClick={() => setSelectedArt(art)}
              >
                <img src={art.src} alt={art.title} />
              </div>
            ))}
          </div>

          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <p>Projects coming soon...</p>
          </div>
        </section>

        <section id="about" className="about-section">
          {/* ... existing about content ... */}
          <div className="about-container">
            <div className="about-image">
              <img src="/images/sample-profile.png" alt="Kay - Game Artist" />
            </div>
            <div className="about-content">
              <h2>About Me</h2>
              <p>I am a Game Artist specialized in bringing digital characters and environments to life.</p>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Specializations</h3>
                  <ul>
                    <li>Character Design</li>
                    <li>High-Poly Sculpting</li>
                    <li>PBR Texturing</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Software</h3>
                  <ul>
                    <li>ZBrush & Blender</li>
                    <li>Substance Painter</li>
                    <li>Unreal Engine 5</li>
                  </ul>
                </div>
              </div>
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
              <p>{selectedArt.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}