// app/components/Footer.js
'use client';

import Link from 'next/link';
import { useTranslations } from '../context/LanguageContext';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer>
      <div className="footer-links">
        <Link href="/impressum">{t.footer.legalNotice}</Link>
        <Link href="/datenschutz">{t.footer.privacyPolicy}</Link>
        <a href="https://www.artstation.com/mixedmediakay" target="_blank" rel="noopener noreferrer">ArtStation</a>
        <a href="https://www.linkedin.com/in/monika-grabner-034432432/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/kayframe_ga/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <p>{t.footer.builtWith}</p>

      <img src="/images/01_Logo.png" alt={t.footer.logoAlt} className="footer-stamp" />
    </footer>
  );
}