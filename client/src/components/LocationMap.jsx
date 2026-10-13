import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profileData';

export const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { city, state, country, coordinates } = profileData.location;

  // OpenStreetMap embed URL centered at Tiruvannamalai
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=79.00%2C12.18%2C79.14%2C12.28&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`;
  const directOsmLink = `https://www.openstreetmap.org/?mlat=${coordinates.lat}&mlon=${coordinates.lng}#map=14/${coordinates.lat}/${coordinates.lng}`;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/5 flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-teal-glow" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{city}, {state}</h4>
              <p className="text-[11px] text-slate-400">{country}</p>
            </div>
          </div>
          <a
            href={directOsmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-teal-glow hover:underline flex items-center gap-1 font-mono"
            aria-label="View on OpenStreetMap"
          >
            <span>Open Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Embedded Map Container */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
          <iframe
            title={`Map preview of ${city}, ${state}`}
            src={osmUrl}
            className={`w-full h-full border-0 filter invert-[0.88] hue-rotate-180 contrast-125 transition-opacity duration-500 ${
              mapLoaded ? 'opacity-90' : 'opacity-0'
            }`}
            onLoad={() => setMapLoaded(true)}
            loading="lazy"
          />

          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 gap-2">
              <Navigation className="w-6 h-6 text-teal-glow animate-pulse" />
              <span className="text-xs">Loading OpenStreetMap preview...</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span>Coordinates: {coordinates.lat}° N, {coordinates.lng}° E</span>
        <span className="text-[9px]">© OpenStreetMap contributors</span>
      </div>
    </div>
  );
};
