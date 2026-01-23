
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS, Language, TranslationType } from './translations';

interface ContentContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
  isDemoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('zh');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const setLang = (newLang: Language) => setLangState(newLang);
  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const value = {
    lang,
    setLang,
    t: TRANSLATIONS[lang],
    isDemoOpen,
    openDemo,
    closeDemo
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
