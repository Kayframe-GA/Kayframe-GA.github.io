// app/datenschutz/DatenschutzContent.js
'use client';

import Link from 'next/link';
import { useTranslations } from '../context/LanguageContext';

function BodyWithBreaks({ text }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

export default function DatenschutzContent() {
  const t = useTranslations();
  const pr = t.legal.privacy;

  return (
    <main className="legal-page">
      <h1>{pr.title}</h1>

      <section>
        <h2>{pr.section1Title}</h2>
        <p>
          <BodyWithBreaks text={pr.section1Body} />
        </p>
      </section>

      <section>
        <h2>{pr.section2Title}</h2>
        <p>{pr.section2Body}</p>
      </section>

      <section>
        <h2>{pr.section3Title}</h2>
        <p>{pr.section3Body}</p>
      </section>

      <section>
        <h2>{pr.section4Title}</h2>
        <p>{pr.section4Body}</p>
      </section>

      <section>
        <h2>{pr.section5Title}</h2>
        <p>{pr.section5Body}</p>
      </section>

      <section>
        <h2>{pr.section6Title}</h2>
        <p>{pr.section6Body}</p>
      </section>

      <Link href="/" className="legal-back-link">{t.legal.backHome}</Link>
    </main>
  );
}