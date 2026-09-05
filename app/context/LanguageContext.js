// app/context/LanguageContext.js
'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';
import { translations } from '../translations';

const STORAGE_KEY = 'lang';
const listeners = new Set();

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getStoredLang() {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'de' ? 'de' : 'en';
  } catch {
    return 'en';
  }
}

function getSnapshot() {
  return getStoredLang();
}

function getServerSnapshot() {
  return 'en';
}

function setLanguage(next) {
  const val = next === 'de' ? 'de' : 'en';
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, val);
    document.documentElement.lang = val;
  }
  for (const cb of listeners) cb();
}

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslations() {
  const { lang } = useLanguage();
  return translations[lang] || translations.en;
}