import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { SiteContent } from './types';
import defaultContent from './data/content.json';

const STORAGE_KEY = 'fengfan_content';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetContent: () => void;
  isDemoOpen: boolean;
  openDemo: () => void;
  closeDemo: () => void;
  lang: 'zh' | 'hk' | 'en';
  setLang: (lang: 'zh' | 'hk' | 'en') => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : (defaultContent as SiteContent);
    } catch {
      return defaultContent as SiteContent;
    }
  });
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [lang, setLang] = useState<'zh' | 'hk' | 'en'>('zh');

  const updateContent = useCallback((newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  }, []);

  const resetContent = useCallback(() => {
    setContent(defaultContent as SiteContent);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <ContentContext.Provider value={{
      content,
      updateContent,
      resetContent,
      isDemoOpen,
      openDemo: () => setIsDemoOpen(true),
      closeDemo: () => setIsDemoOpen(false),
      lang,
      setLang,
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
};
