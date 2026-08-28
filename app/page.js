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
          <div className="hero-title-row">
            <img src="/images/01_Logo.png" alt="Kayframe GA Logo" className="hero-logo" />
            <h1><span className="highlight-title">Kayframe GA</span> <span className="skills-subtitle">Stylized Character Artist | Concept & 3D Sculpting</span></h1>
          </div>
        </section>

        <section id="work" className="work-section">
          
          <h2 className="section-title projects-title">Projects</h2>
          <div className="projects-container">
            <p>Projects coming soon...</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <h2 className="section-title artworks-title">Artworks</h2>
             {/* Link to the full gallery */}
              <Link href="/gallery" style={{ color: 'var(--green-accent)', textDecoration: 'underline' }}>View Full Gallery &rarr;</Link>
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

          </div>
        </section>

        <section id="about" className="about-section">
          {/* ... existing about content ... */}
          <div className="about-container">
            <div className="about-image">
              <img src="/images/sample-profile.png" alt="Kay - Game Artist" />
            </div>
            <div className="about-content">
              <div className="bio-text">
                <h2>About Me</h2>
                <h3 className="bio-header">Hi, I’m Monika, but you can call me Kay!</h3>
                <p>I am an Austrian Game Artist specializing in Concept Art and (Soft) Stylized Sculpting. My mission is simple: translating creative visions into immersive worlds and memorable character designs that make games unforgettable for players.</p>

                <h3 className="bio-header">My Journey & Inspiration</h3>
                <p>My creative journey started back in 2014. To this day, I’m a massive, proud nerd for manga, anime, and Japanese culture — which heavily influences my love for stylized art! In 2025, I took the professional leap and began my Game Art and 3D Animation Diploma at the SAE Institute in Vienna. Here, I fully dedicated myself to specializing in Character Concept Art and 3D Sculpting.</p>

                <h3 className="bio-header">Technical Skillset</h3>
                <p>Through rigorous studies, personal projects, and fast-paced Game Jams, I’ve developed a strong workflow across industry-standard software to bring my artistic visions to life.</p>

                <div className="bio-spacer"></div>

                <p>When I’m not busy bringing new characters to life, I find inspiration by watching a variety of anime or playing immersive games.</p>
                <p className="no-gap"><b>Curious to see my skills in action? Feel free to explore my portfolio!</b></p>
              </div>
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="skill-category">
              <h4>Specializations</h4>
              <ul>
                <li>Character Concept Art</li>
                <li>Stylized Character Sculpting</li>
                <li>Retopology</li>
                <li>(Stylized) PBR Texturing</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Softwares</h4>
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
              <p>{selectedArt.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}