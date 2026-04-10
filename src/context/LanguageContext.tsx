import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Lang, type Translations } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = translations[lang];
  const toggleLang = () => setLang(l => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
