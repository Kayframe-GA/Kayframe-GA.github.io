import Link from 'next/link';

export const metadata = {
  title: "Impressum | Kay",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <h1>Impressum</h1>

      <section>
        <h2>Informationen gemäß § 5 ECG</h2>
        <p>
          [Vor- und Nachname]<br />
          [Adresse]<br />
          [PLZ] Wien<br />
          Austria
        </p>
        <p>
          Tel.: +43 1111111<br /> 
          E-Mail: somemail@outlook.com 
        </p>
      </section>

      <section>
        <h2>Unternehmensgegenstand</h2>
        <p>Werbeagentur (Spezialisierung: Game Art, Concept Art &amp; 3D Sculpting)</p>
      </section>

      <section>
        <h2>UID-Nummer</h2>
        <p>[ATU-Nummer oder „nicht zutreffend"]</p>
      </section>

      <section>
        <h2>Mitglied bei</h2>
        <p>WKO Fachgruppe Werbung und Marktkommunikation</p>
      </section>

      <section>
        <h2>Berufsrecht</h2>
        <p>
          Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a><br />
          Gewerbewortlaut: Werbeagentur
        </p>
      </section>

      <section>
        <h2>Aufsichtsbehörde / Gewerbebehörde</h2>
        <p>Magistratisches Bezirksamt für den 22. Bezirk</p>
      </section>

      <section>
        <h2>Blattlinie</h2>
        <p>
          Diese Website dient der Präsentation meines Portfolios und der Information
          über meine Dienstleistungen als Game Artist.
        </p>
      </section>

      <Link href="/" className="legal-back-link">← Back to Home</Link>
    </main>
  );
}
