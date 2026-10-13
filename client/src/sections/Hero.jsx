import React from 'react';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroWave } from '../components/HeroWave';
import portraitImg from '../assets/profile.png';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[92svh] md:min-h-screen flex items-center justify-center pt-24 pb-20 md:py-0 overflow-hidden hero-glow-dark dark:hero-glow-dark"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main container */}
      <div className="relative z-20 max-w-[1240px] w-full mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
        
        {/* Left text column: 58% on desktop */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-20">
          
          {/* Subtle role badge / intro */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-medium tracking-wide mb-5 backdrop-blur-sm animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5 text-teal-glow" />
            <span>{t('hero.subRole')}</span>
          </div>

          {/* Large High-Contrast Serif Name */}
          <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-bold tracking-tight text-white dark:text-white leading-[1.05] mb-4">
            Siva M
          </h1>

          {/* Role Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-medium text-teal-glow/90 tracking-wide mb-5">
            {t('hero.role')}
          </h2>

          {/* Editorial concise description */}
          <p className="text-slate-300 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-light">
            {t('hero.description')}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA with blue-teal gradient and soft glow */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-teal-primary to-teal-glow btn-glow tracking-wide transition-all hover:scale-[1.02]"
            >
              <span>{t('hero.viewWork')}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 dark:text-slate-200 bg-slate-900/60 dark:bg-slate-900/70 border border-slate-700 hover:border-teal-glow/50 hover:text-white transition-all backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>{t('hero.contactMe')}</span>
            </a>
          </div>

          {/* Quick tech pill indicators */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
            <span className="text-slate-400 uppercase tracking-widest text-[10px]">Stack Focus:</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-teal-300 border border-teal-500/20">MongoDB</span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-teal-300 border border-teal-500/20">Express</span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-teal-300 border border-teal-500/20">React</span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-teal-300 border border-teal-500/20">Node.js</span>
            </div>
          </div>
        </div>

        {/* Right portrait column: 42% on desktop */}
        <div className="md:col-span-5 relative flex items-center justify-center md:justify-end z-10 mt-6 md:mt-0">
          
          {/* Subtle teal backlight behind the portrait */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-teal-500/20 dark:bg-teal-500/25 blur-3xl -z-10 translate-x-4 pointer-events-none" />

          {/* Portrait frame with soft vignette mask blending into bottom */}
          <div className="relative w-64 sm:w-72 md:w-[340px] lg:w-[380px] aspect-[9/13] sm:aspect-[4/5] md:aspect-[9/13] rounded-2xl overflow-hidden portrait-mask shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-b-0 border border-teal-glow/15 bg-slate-900/40">
            <img
              src={portraitImg}
              alt="Siva M — Full Stack Developer"
              className="w-full h-full object-cover object-[center_6%] select-none filter contrast-[1.03] brightness-100 hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle bottom gradient to ensure zero sharp cut */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090D] via-[#07090D]/70 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Signature Teal Glowing Wave artwork across lower hero */}
      <HeroWave />
    </section>
  );
};
