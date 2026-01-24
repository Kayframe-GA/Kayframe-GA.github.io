'use client'; // Required for onClick events and state

import { useState } from 'react';

// Data for your Gallery (Easy to expand to 30+ items)
const artworks = [
  { id: 1, src: "/images/sample.png", title: "My Sample 1", desc: "Here will be a description for my first artwork." },
  { id: 2, src: "/images/sample.png", title: "My Sample 2", desc: "Here will be a description for my second artwork." },
  { id: 3, src: "/images/sample.png", title: "My Sample 3", desc: "Here will be a description for my third artwork." },
  { id: 4, src: "/images/sample.png", title: "My Sample 4", desc: "Here will be a description for my fourth artwork." },
  { id: 5, src: "/images/sample.png", title: "My Sample 5", desc: "Here will be a description for my fifth artwork." },
  { id: 6, src: "/images/sample.png", title: "My Sample 6", desc: "Here will be a description for my sixth artwork." },
];

export default function Home() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <>
      <header>
        <nav>
          <div className="logo">Kay</div>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="mailto:email@example.com">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Game Artist with Focus on Concept Art and Sculpting</h1>
          <p>Creating immersive worlds and character designs for games.</p>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="work-section">
          
          {/* 1. Gallery Subsection */}
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-scroll-container">
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

          {/* 2. Projects Subsection (Empty Placeholder) */}
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            <p>Projects coming soon...</p>
          </div>

        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img src="/images/sample-profile.png" alt="Kay - Game Artist" />
            </div>

            <div className="about-content">
              <h2>About Me</h2>
              <p>I am a Game Artist specialized in bringing digital characters and environments to life. My process blends traditional art fundamentals with modern 3D sculpting workflows.</p>

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

      {/* LIGHTBOX MODAL */}
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

      <footer>
        <p>&copy; 2026 Kay. Built with passion.</p>
        <div className="socials">
          <a href="#">ArtStation</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </>
  );
}