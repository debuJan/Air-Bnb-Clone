import React, { useState } from 'react';
import { Icon } from './icons.jsx';
import { NEIGHBOURHOOD } from '../data/listing.js';

const EXTRA_ROWS = [
  { icon: 'coffee', title: 'Caf\u00e9 Chocolatti', text: '8 min walk \u2014 beloved dessert caf\u00e9' },
  { icon: 'sun', title: 'Candolim Market', text: '6 min walk \u2014 fresh produce and souvenirs' },
];

/* Stylized map drawn from scratch — not traced from any real map tiles. */
function MapArt() {
  return (
    <svg
      viewBox="0 0 1120 420"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Map of Candolim, Goa"
    >
      {/* land */}
      <rect x="0" y="0" width="1120" height="420" fill="#dcebd4" />
      {/* water with wavy right edge */}
      <path
        d="M0 0 L300 0 C 260 80, 345 140, 300 210 C 255 280, 345 340, 292 420 L0 420 Z"
        fill="#a9d4e6"
      />
      {/* street grid */}
      <g stroke="#ffffff" strokeLinecap="round">
        <line x1="400" y1="0" x2="360" y2="420" strokeWidth="12" />
        <line x1="560" y1="0" x2="560" y2="420" strokeWidth="8" />
        <line x1="720" y1="0" x2="760" y2="420" strokeWidth="10" />
        <line x1="900" y1="0" x2="880" y2="420" strokeWidth="7" />
        <line x1="1040" y1="0" x2="1080" y2="420" strokeWidth="9" />
        <line x1="300" y1="90" x2="1120" y2="140" strokeWidth="8" />
        <line x1="320" y1="230" x2="1120" y2="200" strokeWidth="11" />
        <line x1="310" y1="340" x2="1120" y2="330" strokeWidth="6" />
        <line x1="520" y1="0" x2="700" y2="420" strokeWidth="6" />
        <line x1="950" y1="420" x2="1120" y2="60" strokeWidth="7" />
      </g>
      {/* parks */}
      <ellipse cx="820" cy="120" rx="70" ry="44" fill="#c4e0b2" />
      <ellipse cx="470" cy="300" rx="52" ry="34" fill="#c4e0b2" />
      {/* pin shadow */}
      <ellipse cx="620" cy="208" rx="26" ry="8" fill="rgba(0,0,0,0.25)" />
      {/* pin */}
      <circle cx="620" cy="190" r="30" fill="#222222" />
      <path
        d="M608 192 L620 182 L632 192 M611 190 V200 H629 V190"
        stroke="#ffffff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Location() {
  const [expanded, setExpanded] = useState(false);
  const rows = expanded ? [...NEIGHBOURHOOD, ...EXTRA_ROWS] : NEIGHBOURHOOD;

  return (
    <section id="location" className="py-12 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">Where you&rsquo;ll be</h2>
      <p className="mt-1">Candolim, Goa, India</p>

      <div className="mt-6 relative h-[420px] rounded-xl overflow-hidden border border-hairline">
        <MapArt />
        <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow border border-hairline flex flex-col">
          <button
            type="button"
            aria-label="Zoom in"
            className="w-10 h-10 flex items-center justify-center border-b border-hairline hover:bg-fill"
          >
            <Icon name="plus" size={18} />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            className="w-10 h-10 flex items-center justify-center hover:bg-fill"
          >
            <Icon name="minus" size={18} />
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-secondary">
        Exact location will be provided after booking
      </p>

      <div className="mt-8">
        {rows.map((n) => (
          <div key={n.title} className="flex gap-4 py-4 border-b border-hairline">
            <Icon name={n.icon} size={26} className="shrink-0" />
            <div>
              <p className="font-semibold">{n.title}</p>
              <p className="text-sm text-secondary mt-0.5">{n.text}</p>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 font-semibold underline underline-offset-2 flex items-center gap-1"
        >
          {expanded ? 'Show less' : 'Show more'}
          <Icon name="chevD" size={16} />
        </button>
      </div>
    </section>
  );
}
