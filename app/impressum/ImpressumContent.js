// app/impressum/ImpressumContent.js
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

export default function ImpressumContent() {
  const t = useTranslations();
  const im = t.legal.impressum;

  return (
    <main className="legal-page">
      <h1>{im.title}</h1>

      <section>
        <h2>{im.section1Title}</h2>
        <p>
          <BodyWithBreaks text={im.section1Body} />
        </p>
        <p>
          <BodyWithBreaks text={im.section1Contact} />
        </p>
      </section>

      <section>
        <h2>{im.section2Title}</h2>
        <p>{im.section2Body}</p>
      </section>

      <section>
        <h2>{im.section3Title}</h2>
        <p>{im.section3Body}</p>
      </section>

      <section>
        <h2>{im.section4Title}</h2>
        <p>{im.section4Body}</p>
      </section>

      <section>
        <h2>{im.section5Title}</h2>
        <p>
          {im.section5Body1.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <p>{im.section5Body2}</p>
      </section>

      <section>
        <h2>{im.section6Title}</h2>
        <p>{im.section6Body}</p>
      </section>

      <section>
        <h2>{im.section7Title}</h2>
        <p>{im.section7Body}</p>
      </section>

      <section>
        <h2>{im.section8Title}</h2>
        <p>{im.section8Body1}</p>
        <p>{im.section8Body2}</p>

        <h3>{im.section8Body3Title}</h3>
        <p>{im.section8Body3}</p>
        <p>{im.section8Body4}</p>
        <p>{im.section8Body5}</p>
        <p>{im.section8Body6}</p>
      </section>

      <Link href="/" className="legal-back-link">{t.legal.backHome}</Link>
    </main>
  );
}