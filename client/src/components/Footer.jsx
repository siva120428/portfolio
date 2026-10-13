import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05070A] border-t border-white/5 relative z-20">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Monogram and Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-teal-glow/30 bg-teal-500/10 flex items-center justify-center">
            <span className="font-serif text-teal-glow font-bold text-xs">SM</span>
          </div>
          <div className="text-xs text-slate-400">
            <p className="font-medium text-slate-300">
              © {new Date().getFullYear()} {profileData.name}. {t('footer.rights')}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-teal-glow bg-slate-900/80 border border-white/5 hover:border-teal-glow/30 transition-all focus:outline-none focus:ring-1 focus:ring-teal-glow"
          aria-label="Scroll to top"
        >
          <span>{t('footer.backToTop')}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
