export default function Contact() {
  return (
    <main>
      <section className="contact-hero">
        <h1>Work With Me: <span className="highlight-title">Commissions & Assets</span></h1>
        {/* WIP Status as requested */}
        <div className="status-box unavailable">
            <span className="status-label">Status:</span> Currently Not Available (Website WIP)
        </div>
      </section>

      <section className="contact-content">
        <div className="intro-text">
            <p>Whether you need a custom character illustration or a high-end, game-ready 3D sculpt, I’m here to bring your vision to life. My workflow ensures high-quality results from the first sketch to the final render.</p>
        </div>

        <div className="services-grid">
            <div className="service-card">
                <h2>What I Offer</h2>
                
                <div className="service-category">
                    <h3>2D Art Services</h3>
                    <ul>
                        <li>Original Characters (OCs)</li>
                        <li>Fanart & Illustrations</li>
                        <li>Concept Art: Character and Assets</li>
                    </ul>
                </div>

                <div className="service-category">
                    <h3>3D Game-Ready Pipeline</h3>
                    <ul>
                        <li>High-Poly Sculpting (ZBrush)</li>
                        <ul className="sub-list">
                            <li>Characters</li>
                            <li>Creatures</li>
                        </ul>
                        <li>Clean Retopology (Autodesk Maya)</li>
                        <li>Baking (Marmoset Toolbag + Adobe Substance Painter)</li>
                        <li>PBR Texturing (Adobe Substance Painter)</li>
                        <li>Rendering (Marmoset)</li>
                    </ul>
                </div>
            </div>

            <div className="boundary-card">
                <h2>Project Boundaries</h2>
                <p>To ensure the best quality and focus, I do not accept commissions for:</p>
                <ul>
                    <li>NSFW / Adult Content</li>
                    <li>Mecha / Complex Robotics</li>
                    <li>Extreme Gore</li>
                    <li>Political, controversial or harmful themes</li>
                </ul>
            </div>
        </div>

        <div className="pricing-section">
            <h2>Pricing & Payment</h2>
            <div className="pricing-details">
                <p><strong>Pricing:</strong> Every project is unique. Prices are calculated individually based on complexity, required assets, and estimated production time.</p>
                <p><strong>Payment:</strong> All payments are handled securely via PayPal.</p>
                <p><strong>Deposit Policy:</strong> Once we have agreed on the project details, a 50% upfront deposit is required before work begins. This deposit secures your slot in my schedule and confirms our mutual agreement to the project terms. The remaining 50% is due upon completion.</p>
            </div>
        </div>

        <div className="cta-section">
            <h2>Ready to Start?</h2>
            <p>To get a quote, please send an email with the subject line <strong>"Commission Inquiry: [Project Type]"</strong> to:</p>
            <a href="mailto:email@example.com" className="email-link">email@example.com</a>
            
            <div className="email-template">
                <h3>Please include the following in your message:</h3>
                <ul>
                    <li><strong>Project Type:</strong> (e.g., 3D Character Model, 2D Illustration, etc.)</li>
                    <li><strong>Description:</strong> A brief summary of your idea.</li>
                    <li><strong>References:</strong> Any mood boards, sketches, or style references you have.</li>
                    <li><strong>Deadline:</strong> When do you need the final file?</li>
                </ul>
            </div>
        </div>

      </section>
    </main>
  );
}
