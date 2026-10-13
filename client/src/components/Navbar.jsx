import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: t('nav.home'), href: '#home' },
    { id: 'about', label: t('nav.about'), href: '#about' },
    { id: 'skills', label: t('nav.skills'), href: '#skills' },
    { id: 'projects', label: t('nav.projects'), href: '#projects' },
    { id: 'timeline', label: t('nav.timeline'), href: '#timeline' },
    { id: 'contact', label: t('nav.contact'), href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background-dark/85 dark:bg-[#07090D]/90 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram Logo (SM) */}
        <a
          href="#home"
          className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-glow/50 rounded-lg p-1"
          aria-label="Siva M - Home"
        >
          <div className="w-9 h-9 rounded-full border border-teal-glow/40 dark:border-teal-glow/30 bg-teal-500/10 flex items-center justify-center transition-all group-hover:border-teal-glow group-hover:shadow-[0_0_12px_rgba(0,214,201,0.35)]">
            <span className="font-serif text-teal-glow font-bold text-base tracking-wider">SM</span>
          </div>
          <span className="hidden sm:inline font-serif text-sm tracking-wide text-slate-300 dark:text-slate-300 group-hover:text-white transition-colors">
            Siva M
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-xs tracking-wider uppercase font-medium transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-teal-glow rounded ${
                  isActive
                    ? 'text-teal-glow font-semibold'
                    : 'text-slate-400 dark:text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-glow to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right utility items: Language + Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-glow"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-teal-glow" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-5 mt-2 animate-fadeIn">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-500/10 text-teal-glow font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
