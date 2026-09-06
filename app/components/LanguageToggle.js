// app/components/LanguageToggle.js
'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'de' ? 'active' : ''}
        onClick={() => setLang('de')}
        aria-pressed={lang === 'de'}
      >
        DE
      </button>
    </div>
  );
}