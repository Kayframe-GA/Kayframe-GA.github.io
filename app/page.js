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
          <h1><span className="highlight-title">Game Artist</span> <span className="skills-subtitle">Concept Art | Illustration | Sculpting | PBR Texturing</span></h1>
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
              <div className="bio-text">
                <h2>Hey, I'm Kay!</h2>
                <h3 className="sub-title">Austrian Game Artist | Concept Art, Sculpting & PBR Texturing</h3>
                <p>I am a passionate Game Artist currently completing my Diploma in Game Art & 3D Animation at SAE Vienna (expected graduation: Q3 2026). My work lives at the intersection of 2D imagination and 3D technical execution.</p>

                <h3 className="bio-header">My Journey</h3>
                <p>My artistic path began in 2014, sparked by a deep fascination for Manga, Anime, and Japanese culture. What started with traditional sketches and alcohol markers evolved into a dedicated career path. After years of sharpening my skills in traditional and digital illustration, I decided to take the next step in 2025 by joining the SAE Institute to bridge the gap between classic art and modern game development.</p>

                <h3 className="bio-header">Technical Skillset</h3>
                <p>During my studies and various projects (including Game Jams), I’ve built a solid foundation in the industry’s leading tools:</p>
                <ul className="text-list">
                  <li><strong>3D Pipeline:</strong> Sculpting in ZBrush, Modeling & Animation in Autodesk Maya.</li>
                  <li><strong>Texturing:</strong> Advanced PBR Texturing workflows in Adobe Substance Painter.</li>
                  <li><strong>Engine:</strong> Implementation and Animation within Unreal Engine 5.</li>
                  <li><strong>2D:</strong> Concept Art and Illustration (the core of my Diploma project).</li>
                </ul>

                <h3 className="bio-header">My Current Focus</h3>
                <p>For my Diploma project, I am exploring the synergy between 2D Concept Art and Sculpting. I am developing two production-ready characters for an animated short film, collaborating closely with a colleague specialized in 3D Animation to ensure a seamless pipeline from concept to movement.</p>

                <h3 className="bio-header">Beyond the Canvas</h3>
                <p>When I’m not pushing pixels or sculpting clay, I document my progress on my YouTube channel. I love sharing my "Art Journey" with the community, showing the behind-the-scenes of how a project grows from a simple sketch to a finished illustration.</p>
              </div>

              <div className="skills-sidebar">
                <div className="skill-category">
                  <h4>Specializations</h4>
                  <ul>
                    <li>Character Design</li>
                    <li>Concept Art</li>
                    <li>Illustration</li>
                    <li>High-Poly Sculpting (Stylized)</li>
                    <li>Characters</li>
                    <li>Creatures</li>
                    <li>Retopology</li>
                    <li>PBR Texturing (Stylized)</li>
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