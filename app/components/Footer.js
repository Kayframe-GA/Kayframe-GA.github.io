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
        <a href="#">ArtStation</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>

      <p>{t.footer.builtWith}</p>

      <img src="/images/01_Logo.png" alt={t.footer.logoAlt} className="footer-stamp" />
    </footer>
  );
}