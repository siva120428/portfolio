import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    state: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: '',
    errorCode: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name cannot exceed 100 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (formData.email.trim().length > 120) {
      newErrors.email = 'Email cannot exceed 120 characters.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length > 150) {
      newErrors.subject = 'Subject cannot exceed 150 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message cannot exceed 2000 characters.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while in-flight
    if (status.state === 'loading') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ state: 'loading', message: '', errorCode: '' });

    // In production, support configured VITE_API_BASE_URL (for decoupled frontend/backend) or default relative /api/contact
    const apiBase = import.meta.env.VITE_API_BASE_URL || '';
    const endpoint = `${apiBase}/api/contact`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      // Strictly verify that backend AND email provider confirmed acceptance
      if (response.ok && data.success && data.providerConfirmed) {
        setStatus({
          state: 'success',
          message: data.message || t('contact.successMsg'),
          errorCode: ''
        });
        // Reset form ONLY after verified provider acceptance
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        // Form fields preserved on error so visitor doesn't lose text
        setStatus({
          state: 'error',
          message:
            data.message ||
            (response.status === 503
              ? 'Email service is not yet configured with SMTP credentials. Please contact directly at manikounder1984@gmail.com.'
              : t('contact.errorMsg')),
          errorCode: data.errorCode || ''
        });
      }
    } catch (err) {
      // Network failure / server offline
      setStatus({
        state: 'error',
        message:
          'Unable to connect to the backend server. Please verify your connection or email directly at manikounder1984@gmail.com.',
        errorCode: 'NETWORK_ERROR'
      });
    }
  };

  const isSubmitting = status.state === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name Field */}
      <div>
        <label htmlFor="contact-name" className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
          {t('contact.nameLabel')} <span className="text-teal-glow">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          disabled={isSubmitting}
          value={formData.name}
          onChange={handleChange}
          placeholder={t('contact.namePlaceholder')}
          maxLength={100}
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-glow/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.name ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
          }`}
        />
        {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="contact-email" className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
          {t('contact.emailLabel')} <span className="text-teal-glow">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          disabled={isSubmitting}
          value={formData.email}
          onChange={handleChange}
          placeholder={t('contact.emailPlaceholder')}
          maxLength={120}
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-glow/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.email ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
          }`}
        />
        {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
          {t('contact.subjectLabel')} <span className="text-teal-glow">*</span>
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          disabled={isSubmitting}
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('contact.subjectPlaceholder')}
          maxLength={150}
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-glow/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.subject ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
          }`}
        />
        {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase font-medium tracking-wider text-slate-300 mb-2">
          {t('contact.messageLabel')} <span className="text-teal-glow">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          disabled={isSubmitting}
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder')}
          maxLength={2000}
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-glow/50 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
            errors.message ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
          }`}
        />
        {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Status Feedback Alerts */}
      {status.state === 'success' && (
        <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-start gap-3 text-teal-300 text-xs sm:text-sm animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-teal-glow mt-0.5" />
          <div className="space-y-1">
            <p className="font-medium text-white">{status.message}</p>
            <p className="text-[11px] text-teal-300/80">
              Verified transmission to <strong>manikounder1984@gmail.com</strong>.
            </p>
          </div>
        </div>
      )}

      {status.state === 'error' && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-3 text-rose-300 text-xs sm:text-sm animate-fadeIn">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-rose-200">{status.message}</p>
              {status.errorCode && (
                <p className="text-[10px] font-mono text-rose-400/80">Diagnostic Code: {status.errorCode}</p>
              )}
            </div>
          </div>
          <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:manikounder1984@gmail.com?subject=${encodeURIComponent(
                formData.subject || 'Portfolio Inquiry'
              )}&body=${encodeURIComponent(formData.message || '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/20 text-rose-200 hover:bg-rose-500/30 border border-rose-500/30 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send via Email App</span>
            </a>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-teal-primary to-teal-glow btn-glow tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{t('contact.sendingBtn')}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>{t('contact.submitBtn')}</span>
          </>
        )}
      </button>
    </form>
  );
};
