import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';

export const EducationExperience = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="timeline" className="py-24 sm:py-32 relative bg-[#07090D]/95 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-teal-glow text-xs uppercase font-semibold tracking-widest block mb-3">
            {t('timeline.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('timeline.title')}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-12 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-teal-glow/15 text-teal-glow border border-teal-glow/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Milestones
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'education'
                ? 'bg-teal-glow/15 text-teal-glow border border-teal-glow/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('timeline.educationTab')}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'experience'
                ? 'bg-teal-glow/15 text-teal-glow border border-teal-glow/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('timeline.experienceTab')}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Vertical Timeline (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-8 border-l border-teal-500/30 space-y-12">
              
              {/* Education Items */}
              {(activeTab === 'all' || activeTab === 'education') &&
                profileData.education.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07090D] border-2 border-teal-glow shadow-[0_0_8px_rgba(0,214,201,0.6)] group-hover:scale-125 transition-transform" />

                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-teal-glow/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-glow bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3 font-light">
                        <span className="text-slate-300 font-medium">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-teal-glow/70" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

              {/* Experience / Internship Items */}
              {(activeTab === 'all' || activeTab === 'experience') &&
                profileData.experience.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07090D] border-2 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform" />

                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-teal-glow/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3 font-light">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-glow hover:underline flex items-center gap-1 font-medium"
                        >
                          <span>{item.organization}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-slate-300 text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

            </div>
          </div>

          {/* Compact Certifications Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-teal-glow" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {t('timeline.certificationsTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {profileData.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-white/5 hover:border-teal-glow/30 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] text-teal-glow/80 mb-1">
                      <span>{cert.issuer}</span>
                      <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono">
                        {cert.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-slate-200">
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* LeetCode Achievement Card */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Problem Solving</span>
                    <span className="text-xl font-bold font-serif text-white">70+ LeetCode</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    DSA Milestone
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
