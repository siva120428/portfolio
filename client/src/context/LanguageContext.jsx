import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    // Set appropriate lang attribute on html tag
    document.documentElement.lang = language;
  }, [language]);

  // Safe translation retriever with English fallback
  const t = (path) => {
    const keys = path.split('.');
    
    // Try selected language
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        current = null;
        break;
      }
    }

    if (current !== null && current !== undefined) {
      return current;
    }

    // Fallback to English
    let fallback = translations.en;
    for (const key of keys) {
      if (fallback && fallback[key] !== undefined) {
        fallback = fallback[key];
      } else {
        return path; // Return key path if not found anywhere
      }
    }

    return fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
