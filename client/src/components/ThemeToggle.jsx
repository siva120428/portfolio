import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative flex items-center justify-between w-14 h-7 px-1 rounded-full bg-slate-800/80 dark:bg-slate-900/90 border border-teal-glow/30 dark:border-teal-glow/20 focus:outline-none focus:ring-2 focus:ring-teal-glow/50 transition-colors shadow-inner"
    >
      <Moon className="w-3.5 h-3.5 text-teal-300 ml-0.5" />
      <Sun className="w-3.5 h-3.5 text-amber-400 mr-0.5" />
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isDark ? 'translate-x-0' : 'translate-x-7'
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-slate-950" />
        ) : (
          <Sun className="w-3 h-3 text-slate-950" />
        )}
      </span>
    </button>
  );
};
