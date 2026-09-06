// app/datenschutz/DatenschutzContent.js
'use client';

import Link from 'next/link';
import { useTranslations } from '../context/LanguageContext';

const URL_OR_EMAIL = /(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function linkifyLine(line) {
  return line.split(URL_OR_EMAIL).map((part, i) => {
    if (!part) return null;
    if (/^www\./i.test(part)) {
      return (
        <a key={i} href={`https://${part}`} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    if (/^https?:\/\//i.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className="email-inline">
          {part}
        </a>
      );
    }
    return part;
  });
}

function TextWithLinks({ text }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {linkifyLine(line)}
        </span>
      ))}
    </>
  );
}

function LegalList({ items }) {
  return (
    <ul className="legal-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function DatenschutzContent() {
  const t = useTranslations();
  const pr = t.legal.privacy;

  return (
    <main className="legal-page">
      <h1>{pr.title}</h1>

      <section>
        <h2>{pr.section0Title}</h2>
        <p>
          <TextWithLinks text={pr.section0Body} />
        </p>
      </section>

      <section>
        <h2>{pr.section1Title}</h2>
        <p>{pr.section1Body}</p>
        <p>
          <TextWithLinks text={pr.section1Contact} />
        </p>
      </section>

      <section>
        <h2>{pr.section2Title}</h2>
        <p>
          <TextWithLinks text={pr.section2Body} />
        </p>
      </section>

      <section>
        <h2>{pr.section3Title}</h2>
        <p>
          <TextWithLinks text={pr.section3Body} />
        </p>
      </section>

      <section>
        <h2>{pr.section4Title}</h2>
        <p>
          <TextWithLinks text={pr.section4Body1} />
        </p>
        <p>
          <TextWithLinks text={pr.section4Body2} />{' '}
          <a href={pr.section4Body2Link} target="_blank" rel="noopener noreferrer">
            {pr.section4Body2Link}
          </a>
        </p>
      </section>

      <section>
        <h2>{pr.section5Title}</h2>
        <p>
          <TextWithLinks text={pr.section5Intro} />
        </p>
        <LegalList items={pr.section5Items} />
        <p>{pr.section5Body}</p>
        <p>{pr.section5Body2}</p>
      </section>

      <section>
        <h2>{pr.section6Title}</h2>
        <p>
          <TextWithLinks text={pr.section6Body} />{' '}
          <a href={pr.section6Link} target="_blank" rel="noopener noreferrer">
            {pr.section6Link}
          </a>
        </p>
      </section>

      <section>
        <h2>{pr.section7Title}</h2>
        <p>
          <TextWithLinks text={pr.section7Body} />{' '}
          <a href={pr.section7Link} target="_blank" rel="noopener noreferrer">
            {pr.section7Link}
          </a>
        </p>
      </section>

      <section>
        <h2>{pr.section8Title}</h2>
        <p>{pr.section8Intro}</p>
        <LegalList items={pr.section8Items} />
        <p>
          <TextWithLinks text={pr.section8Body} />
        </p>
      </section>

      <section>
        <h2>{pr.section9Title}</h2>
        <p>
          <TextWithLinks text={pr.section9Contact} />
        </p>
        <p className="legal-source-line">
          {pr.source}
          <a href={pr.sourceUrl} target="_blank" rel="noopener noreferrer">
            {pr.sourceLink}
          </a>
          {pr.sourceMid}
          <a href={pr.sourceNameUrl} target="_blank" rel="noopener noreferrer">
            {pr.sourceName}
          </a>
        </p>
      </section>

      <Link href="/" className="legal-back-link">{t.legal.backHome}</Link>
    </main>
  );
}