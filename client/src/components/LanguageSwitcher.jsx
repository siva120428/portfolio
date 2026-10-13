import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ta', label: 'தமிழ்', short: 'தமிழ்' },
  { code: 'kn', label: 'ಕನ್ನಡ', short: 'ಕನ್ನಡ' }
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 dark:bg-slate-900/90 text-slate-300 hover:text-teal-glow hover:border-teal-glow/40 transition-all focus:outline-none focus:ring-1 focus:ring-teal-glow"
      >
        <Globe className="w-3.5 h-3.5 text-teal-400" />
        <span>{currentLang.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl glass-panel shadow-2xl py-1 z-50 border border-slate-700/50 dark:border-slate-800">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLanguage(item.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                language === item.code
                  ? 'text-teal-400 bg-teal-500/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>{item.label}</span>
              {language === item.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
