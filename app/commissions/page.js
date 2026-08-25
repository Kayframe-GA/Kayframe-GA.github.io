export default function Commissions() {
  return (
    <main>
      <section className="commissions-hero">
        <h1>Commissions</h1>
      </section>

      <section className="commissions-content">

        <div className="cta-section">
            <h2>✉️ Ready to Start?</h2>
            <p>To get a quote, please send an email with the subject line <strong>&quot;Commission Inquiry: [Project Type]&quot;</strong> to:</p>
            <a href="mailto:email@example.com?subject=Commission%20Inquiry%3A%20%5BProject%20Type%5D" className="email-link">email@example.com</a>

            <div className="email-template">
                <h3>Please include the following in your message:</h3>
                <ul>
                    <li><strong>Project Type:</strong> (e.g., 3D Character Model, 2D Concept Art)</li>
                    <li><strong>Description:</strong> A brief summary of your idea or the required scope of work.</li>
                    <li><strong>References:</strong> Any mood boards, sketches, or style references you have.</li>
                    <li><strong>Deadline:</strong> When do you need the final files?</li>
                </ul>
            </div>
        </div>

        <div className="terms-section">
            <h2>Terms of Services</h2>
            <p className="terms-intro">By choosing to commission me, you acknowledge that you have read and understood my Terms of Service.</p>

            <div className="term-item">
                <h3>Usage Rights &amp; Copyright</h3>
                <p>Upon full and final payment of the invoice, the Client is granted exclusive, worldwide, and unlimited commercial rights to use, modify, and distribute the final artwork.</p>
            </div>

            <div className="term-item">
                <h3>Portfolio Rights</h3>
                <p>The Artist retains the non-exclusive right to display the commissioned artwork in their personal portfolio (website, ArtStation, social media) and promotional materials.</p>
            </div>

            <div className="term-item">
                <h3>Confidentiality (Embargo)</h3>
                <p>The Artist agrees to keep all artwork confidential and will not publish or share it publicly until the Client’s project has been officially released, announced, or until mutual written consent is provided.</p>
            </div>

            <div className="term-item">
                <h3>Credit &amp; Authorship</h3>
                <p>The Client agrees to appropriately credit the Artist (&quot;Monika &apos;Kay&apos; Grabner – Character Concept/Sculpting&quot;) in the project&apos;s credits or promotional material where applicable and standard for the industry.</p>
            </div>
        </div>

        <div className="contact-section">
            <h2>Contact</h2>
            <p>Let&apos;s build something extraordinary. I am currently open for new opportunities in concept art and 3D sculpting. For business inquiries, freelance projects, or just to say hi, feel free to drop me a message.</p>
            <p>You can reach me at: <a href="mailto:email@example.com" className="email-inline">email@example.com</a></p>
        </div>

      </section>
    </main>
  );
}
