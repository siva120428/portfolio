import React from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profileData';
import { ContactForm } from '../components/ContactForm';
import { LocationMap } from '../components/LocationMap';

export const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "Direct Email",
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      icon: Mail,
      isExternal: false
    },
    {
      name: "GitHub",
      value: "github.com/siva120428",
      href: profileData.contact.github,
      icon: Github,
      isExternal: true
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/siva-m-321178383",
      href: profileData.contact.linkedin,
      icon: Linkedin,
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#07090D] border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-teal-glow text-xs uppercase font-semibold tracking-widest block mb-3">
            {t('contact.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-teal-glow" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {t('contact.formTitle')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sends directly to {profileData.contact.email}
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Right Column: Social channels & Location map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Links */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/5 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Verified Direct Channels
              </h4>
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-glow/30 hover:bg-slate-900/90 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-teal-glow" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">{link.name}</span>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                          {link.value}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 group-hover:text-teal-glow transition-colors text-xs">
                      {link.isExternal ? "↗" : "→"}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Location Map Preview */}
            <LocationMap />

          </div>

        </div>

      </div>
    </section>
  );
};
