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

      <section>
        <h2>Urheberrechtshinweis</h2>
        <p>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht.
          Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder
          verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig,
          werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
        </p>
        <p>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen,
          bitten wir Sie uns zu kontaktieren.
        </p>

        <h3>Bildernachweis</h3>
        <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
        </p>
        <p>
          Die Bilderrechte liegen bei:
        </p>
        <p>
          Monika Grabner
        </p>
        <p>
          Alle Texte sind urheberrechtlich geschützt.
        </p>
      </section>

      <Link href="/" className="legal-back-link">← Back to Home</Link>
    </main>
  );
}
