import React from 'react';
import { ExternalLink, Github, Activity, ShieldCheck, Zap, Radio, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';

export const Projects = () => {
  const { t } = useLanguage();
  const primaryProject = profileData.projects.find((p) => p.isPrimary);
  const secondaryProjects = profileData.projects.filter((p) => !p.isPrimary);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#07090D] border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-teal-glow text-xs uppercase font-semibold tracking-widest block mb-3">
            {t('projects.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Primary Project Spotlight: REDORA */}
        {primaryProject && (
          <div className="mb-14 rounded-3xl glass-panel border border-teal-glow/30 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl group">
            {/* Subtle glow accent in corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Project narrative & tech details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  <span>{t('projects.featuredBadge')}</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                    {primaryProject.title}
                  </h3>
                  <p className="text-teal-glow text-sm sm:text-base font-medium">
                    {primaryProject.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                  {primaryProject.description}
                </p>

                {/* Core Capabilities */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    {t('projects.keyFeatures')}:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {primaryProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-teal-glow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {primaryProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-teal-500/30 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={primaryProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-teal-glow text-slate-950 hover:bg-teal-300 transition-colors shadow-lg shadow-teal-500/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Custom line-based network visualization graphic */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner">
                  
                  {/* Decorative background grid and network circles */}
                  <div className="absolute inset-0 bg-[radial-gradient(#137f83_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  
                  {/* Graphic Card Top */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-xs font-mono text-slate-300 tracking-wider">REDORA PROTOCOL</span>
                    </div>
                    <span className="text-[11px] font-mono text-teal-glow bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">MERN + Socket</span>
                  </div>

                  {/* Network Topology Illustration */}
                  <div className="relative z-10 py-6 flex items-center justify-around">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-md">
                        <Activity className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">Patient</span>
                    </div>

                    <div className="h-0.5 flex-1 mx-2 bg-gradient-to-r from-teal-500/50 via-rose-500/50 to-teal-500/50 relative">
                      <Radio className="w-4 h-4 text-teal-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-xl bg-rose-950/50 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-900/30">
                        <Zap className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] text-slate-200 font-mono font-semibold">Dispatch Hub</span>
                    </div>

                    <div className="h-0.5 flex-1 mx-2 bg-gradient-to-r from-rose-500/50 via-teal-500/50 to-teal-500/50" />

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-md">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">Eligible Donor</span>
                    </div>
                  </div>

                  {/* Graphic Card Bottom */}
                  <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Target: Emergency Blood Relays</span>
                    <span className="text-teal-400">Response &lt; 2m</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Projects Grid: Zento & RideKart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl p-8 border border-white/5 hover:border-teal-glow/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Layers className="w-5 h-5 text-teal-glow" />
                  </div>
                  <div className="flex items-center gap-3">
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-glow transition-colors p-1"
                        aria-label={`Open ${proj.title} live website`}
                        title="View Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors p-1"
                        aria-label={`View ${proj.title} on GitHub`}
                        title="View Code on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs uppercase font-semibold tracking-wider text-teal-glow/80 mb-3">
                  {proj.subtitle}
                </p>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {proj.features.map((item, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-white/5 group-hover:border-teal-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 hover:border-teal-glow hover:bg-teal-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(0,214,201,0.35)] active:scale-[0.98] transition-all duration-300 group/btn"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-glow group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white bg-slate-900/60 border border-white/5 hover:border-white/20 transition-all duration-200"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{t('projects.viewCode')}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
