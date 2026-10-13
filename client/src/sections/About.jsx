import React from 'react';
import { GraduationCap, MapPin, Code2, Terminal, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';

export const About = () => {
  const { t } = useLanguage();

  const facts = [
    {
      icon: GraduationCap,
      label: t('about.statusLabel'),
      value: t('about.statusValue'),
      subtext: "Nandha Engineering College, Erode"
    },
    {
      icon: MapPin,
      label: t('about.locationLabel'),
      value: t('about.locationValue'),
      subtext: "India"
    },
    {
      icon: Code2,
      label: t('about.focusLabel'),
      value: t('about.focusValue'),
      subtext: "Clean Architecture & REST Design"
    },
    {
      icon: Terminal,
      label: t('about.problemSolvingLabel'),
      value: t('about.problemSolvingValue'),
      subtext: "Data Structures & Algorithms"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#07090D] border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-teal-glow text-xs uppercase font-semibold tracking-widest block mb-3">
            {t('about.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* Narrative & Highlights grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p className="text-slate-400 text-base">
              My engineering approach prioritizes modular codebases, defensive backend logic, efficient database schemas, and accessible web standards that empower end users.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-glow hover:underline underline-offset-4 flex items-center gap-1.5"
              >
                <span>GitHub Profile</span>
                <span className="text-xs">↗</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-glow hover:underline underline-offset-4 flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Key Facts / Highlights (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Developer Profile Card with Photograph */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-teal-glow/25 flex items-center gap-4 hover:border-teal-glow/40 transition-all duration-300 shadow-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-teal-glow/40 shrink-0 bg-slate-900 shadow-md">
                <img
                  src={profileData.profileImage}
                  alt="Siva M — Full Stack Developer"
                  className="w-full h-full object-cover object-[center_8%]"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-white truncate">Siva M</h4>
                  <span className="w-2 h-2 rounded-full bg-teal-glow animate-pulse" />
                </div>
                <p className="text-xs text-teal-glow font-medium">Full Stack & MERN Developer</p>
                <p className="text-[11px] text-slate-400 truncate">MCA Scholar • Nandha Engineering College</p>
              </div>
            </div>

            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-teal-glow/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-teal-500/20 transition-all">
                      <Icon className="w-5 h-5 text-teal-glow" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                        {fact.label}
                      </span>
                      <h4 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                        {fact.value}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {fact.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
