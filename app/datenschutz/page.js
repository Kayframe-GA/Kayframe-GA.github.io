import Link from 'next/link';

export const metadata = {
  title: "Datenschutzerklärung | Kay",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          [Vorname Nachname]<br />
          [Straße Hausnummer]<br />
          [PLZ Ort]<br />
          E-Mail: [E-Mail-Adresse]
        </p>
      </section>

      <section>
        <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          [Beschreiben Sie hier, welche Daten erhoben werden, zu welchem Zweck und auf
          welcher Rechtsgrundlage. Z. B.: Beim Besuch dieser Website werden durch den
          Hosting-Anbieter automatisch Informationen wie IP-Adresse, Datum und Uhrzeit
          des Zugriffs verarbeitet.]
        </p>
      </section>

      <section>
        <h2>3. Kontaktformular / E-Mail-Kontakt</h2>
        <p>
          [Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von
          Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.]
        </p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          [Diese Website verwendet keine Cookies / verwendet folgende Cookies: ...]
        </p>
      </section>

      <section>
        <h2>5. Externe Inhalte / Social Media</h2>
        <p>
          [Falls Verlinkungen zu ArtStation, LinkedIn, Instagram etc. bestehen, hier die
          entsprechenden Hinweise zur Datenverarbeitung durch Drittanbieter ergänzen.]
        </p>
      </section>

      <section>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde.
        </p>
      </section>

      <Link href="/" className="legal-back-link">← Back to Home</Link>
    </main>
  );
}
