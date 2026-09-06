// app/impressum/ImpressumContent.js
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

function TextWithLinks({ text, className }) {
  return (
    <span className={className}>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {linkifyLine(line)}
        </span>
      ))}
    </span>
  );
}

function LegalLine({ title, body, bodyClass }) {
  return (
    <h2 className="legal-line">
      <span className="legal-line-title">{title}</span>{' '}
      <TextWithLinks text={body} className={bodyClass} />
    </h2>
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
          <TextWithLinks text={im.section1Body} />
        </p>
      </section>

      <div className="legal-pair">
        <LegalLine title={im.section2Title} body={im.section2Body} bodyClass="legal-line-text" />
        <LegalLine title={im.section3Title} body={im.section3Body} bodyClass="legal-line-text" />
      </div>

      <div className="legal-pair">
        <LegalLine title={im.section4Title} body={im.section4Body} bodyClass="legal-line-text" />
        <LegalLine title={im.section5Title} body={im.section5Body} bodyClass="legal-line-text" />
      </div>

      <div className="legal-pair">
        <LegalLine title={im.section6Title} body={im.section6Body} bodyClass="legal-line-text" />
        <LegalLine title={im.section7Title} body={im.section7Body} bodyClass="legal-line-text" />
      </div>

      <section>
        <LegalLine title={im.section8Title} body={im.section8Body} bodyClass="legal-line-text" />
      </section>

      <section>
        <h2>{im.section9Title}</h2>
        <p>{im.section9Body}</p>
        <p>
          <TextWithLinks text={im.section9Contact} />
        </p>
      </section>

      <section>
        <h2>{im.section10Title}</h2>
        <p>{im.section10Body1}</p>
        <p>{im.section10Body2}</p>
      </section>

      <section>
        <h2>{im.section11Title}</h2>
        <p>{im.section11Body1}</p>
        <p>{im.section11Body2}</p>
      </section>

      <section>
        <h2>{im.section12Title}</h2>
        <p>
          <TextWithLinks text={im.section12Body1} />
        </p>
        <p>{im.section12Body2}</p>
        <p>{im.section12Body3}</p>
      </section>

      <section>
        <h2>{im.section13Title}</h2>
        <p>{im.section13Body}</p>
        <p className="legal-source-line">
          {im.section13Source}
          <a href={im.section13SourceLinkUrl} target="_blank" rel="noopener noreferrer">
            {im.section13SourceLink}
          </a>
          {im.section13SourceMid}
          <a href={im.section13SourceNameUrl} target="_blank" rel="noopener noreferrer">
            {im.section13SourceName}
          </a>
        </p>
      </section>

      <Link href="/" className="legal-back-link">{t.legal.backHome}</Link>
    </main>
  );
}