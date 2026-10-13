import React from 'react';

export const HeroWave = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-10"
      style={{ height: '180px' }}
    >
      <svg
        className="w-[200%] sm:w-[150%] md:w-[130%] h-full transform -translate-x-12 animate-wave-slow opacity-85"
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#137F83" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#00D6C9" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#00AFA8" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#137F83" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00AFA8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00D6C9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D6C9" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#137F83" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#00AFA8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Deep subtle base wave fill */}
        <path
          d="M0 190 C 240 160, 480 230, 720 180 C 960 130, 1200 210, 1440 180 L 1440 280 L 0 280 Z"
          fill="url(#waveGrad3)"
          opacity="0.25"
        />

        {/* Primary sharp glowing wave line */}
        <path
          d="M0 160 C 260 110, 490 220, 720 150 C 980 90, 1220 200, 1440 140"
          stroke="url(#waveGrad1)"
          strokeWidth="2.2"
          strokeLinecap="round"
          filter="url(#tealGlow)"
        />

        {/* Secondary intertwining thin wave line */}
        <path
          d="M0 185 C 220 215, 460 135, 720 185 C 980 235, 1210 145, 1440 175"
          stroke="url(#waveGrad2)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Subtle third rhythmic line */}
        <path
          d="M0 140 C 300 180, 520 110, 780 165 C 1020 210, 1250 125, 1440 155"
          stroke="#00D6C9"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.45"
        />
      </svg>
    </div>
  );
};
