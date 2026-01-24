import Link from 'next/link';

export default function Home() {
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
        <section className="hero">
          <h1>Game Artist with Focus on Concept Art and Sculpting</h1>
          <p>Creating immersive worlds and character designs for games.</p>
        </section>

        <section id="work" className="gallery">
          <div className="card">
            <img src="/images/sample.png" alt="First Project" />
            <div className="overlay"><span>Project Title</span></div>
          </div>
          <div className="card">
            <img src="/images/sample.png" alt="Second Project" />
            <div className="overlay"><span>Project Title</span></div>
          </div>
          <div className="card">
            <img src="/images/sample.png" alt="Third Project" />
            <div className="overlay"><span>Project Title</span></div>
          </div>
          <div className="card">
            <img src="/images/sample.png" alt="Fourth Project" />
            <div className="overlay"><span>Project Title</span></div>
          </div>
        </section>

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