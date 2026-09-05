'use client';

import { useTranslations } from '../context/LanguageContext';

export default function Commissions() {
  const t = useTranslations();

  return (
    <main>
      <section className="commissions-hero">
        <h1>{t.commissions.title}</h1>
      </section>

      <section className="commissions-content">

        <div className="cta-section">
            <h2>{t.commissions.readyToStart}</h2>
            <p>{t.commissions.quoteIntro} <strong>&quot;{t.commissions.quoteSubject}: {t.commissions.quotePlaceholder}&quot;</strong> {t.commissions.quoteOutro}</p>
            <a href="mailto:email@example.com?subject=Commission%20Inquiry%3A%20%5BProject%20Type%5D" className="email-link">email@example.com</a>

            <div className="email-template">
                <h3>{t.commissions.emailTemplateTitle}</h3>
                <ul>
                    {t.commissions.emailItems.map(([label, hint]) => (
                        <li key={label}><strong>{label}</strong> {hint}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="terms-section">
            <h2>{t.commissions.tosTitle}</h2>
            <p className="terms-intro">{t.commissions.tosIntro}</p>

            <div className="term-item">
                <h3>{t.commissions.usageRightsTitle}</h3>
                <p>{t.commissions.usageRightsText}</p>
            </div>

            <div className="term-item">
                <h3>{t.commissions.portfolioRightsTitle}</h3>
                <p>{t.commissions.portfolioRightsText}</p>
            </div>

            <div className="term-item">
                <h3>{t.commissions.confidentialityTitle}</h3>
                <p>{t.commissions.confidentialityText}</p>
            </div>

            <div className="term-item">
                <h3>{t.commissions.creditTitle}</h3>
                <p>{t.commissions.creditText}</p>
            </div>
        </div>

        <div className="contact-section">
            <h2>{t.commissions.contactTitle}</h2>
            <p>{t.commissions.contactText}</p>
            <p>{t.commissions.contactEmailLabel} <a href="mailto:email@example.com" className="email-inline">email@example.com</a></p>
        </div>

      </section>
    </main>
  );
}