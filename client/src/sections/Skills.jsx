import React, { useState } from 'react';
import { Code, Layout, Server, Database, BookOpen, Wrench, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';

export const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming', label: t('skills.categories.programming'), icon: Code },
    { id: 'frontend', label: t('skills.categories.frontend'), icon: Layout },
    { id: 'backend', label: t('skills.categories.backend'), icon: Server },
    { id: 'databases', label: t('skills.categories.databases'), icon: Database },
    { id: 'foundations', label: t('skills.categories.foundations'), icon: BookOpen },
    { id: 'tools', label: t('skills.categories.tools'), icon: Wrench },
  ];

  const skillGroups = [
    {
      id: 'programming',
      title: t('skills.categories.programming'),
      icon: Code,
      items: profileData.skills.programming,
      accent: 'from-blue-500/20 to-teal-500/10'
    },
    {
      id: 'frontend',
      title: t('skills.categories.frontend'),
      icon: Layout,
      items: profileData.skills.frontend,
      accent: 'from-teal-500/20 to-cyan-500/10'
    },
    {
      id: 'backend',
      title: t('skills.categories.backend'),
      icon: Server,
      items: profileData.skills.backend,
      accent: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      id: 'databases',
      title: t('skills.categories.databases'),
      icon: Database,
      items: profileData.skills.databases,
      accent: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      id: 'foundations',
      title: t('skills.categories.foundations'),
      icon: BookOpen,
      items: profileData.skills.foundations,
      accent: 'from-indigo-500/20 to-teal-500/10'
    },
    {
      id: 'tools',
      title: t('skills.categories.tools'),
      icon: Wrench,
      items: profileData.skills.tools,
      accent: 'from-slate-500/20 to-teal-500/10'
    }
  ];

  const visibleGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#07090D]/95 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-teal-glow text-xs uppercase font-semibold tracking-widest block mb-3">
            {t('skills.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-teal-glow text-slate-950 font-semibold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white hover:border-teal-glow/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-teal-glow/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-teal-glow" />
                    </div>
                    <h3 className="font-medium text-base text-white group-hover:text-teal-300 transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-900/90 text-slate-300 border border-white/5 hover:border-teal-glow/40 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-glow/70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{group.items.length} competencies</span>
                  <span className="text-teal-glow/60 group-hover:text-teal-glow transition-colors">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
