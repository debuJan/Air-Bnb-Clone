import { useState } from 'react';
import { Icon } from './icons.jsx';
import { LISTING, HIGHLIGHTS, DESCRIPTION } from '../data/listing.js';

export default function ListingInfo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* (a) Subtitle + facts */}
      <div className="mt-8">
        <h2 className="text-[22px] font-semibold">{LISTING.subtitle}</h2>
        <p className="mt-1">{LISTING.facts}</p>
      </div>

      {/* (b) Guest favourite band */}
      <div className="mt-6 border border-hairline rounded-xl px-6 py-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Icon name="laurelL" size={34} />
          <div className="text-center leading-tight">
            <div className="font-extrabold">Guest</div>
            <div className="font-extrabold">favourite</div>
          </div>
          <Icon name="laurelR" size={34} />
        </div>
        <p className="text-[15px] max-w-[280px]">
          One of the most loved homes on Airbnb, according to guests
        </p>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-xl font-extrabold">{LISTING.rating}</div>
            <div className="flex gap-0.5 justify-center mt-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon key={i} name="star" size={10} />
              ))}
            </div>
          </div>
          <div className="w-px h-12 bg-hairline" aria-hidden="true" />
          <div className="text-center">
            <div className="text-xl font-extrabold">{LISTING.reviewCount}</div>
            <div className="text-sm">Reviews</div>
          </div>
        </div>
      </div>

      {/* (c) Host row */}
      <div className="mt-2 py-6 border-b border-hairline flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#14532d] text-white flex items-center justify-center text-sm font-bold">
          M
        </div>
        <div>
          <p className="font-semibold">Hosted by {LISTING.host.name}</p>
          <p className="text-sm text-secondary">{LISTING.host.years} years hosting</p>
        </div>
      </div>

      {/* (d) Highlights */}
      <div>
        {HIGHLIGHTS.map((h) => (
          <div key={h.title} className="py-6 border-b border-hairline flex gap-6 items-start">
            <Icon name={h.icon} size={30} />
            <div>
              <p className="font-semibold">{h.title}</p>
              <p className="text-secondary text-[15px] mt-1">{h.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* (e) Description with expand */}
      <div className="py-8 border-b border-hairline">
        <div className="space-y-4 text-[15px] leading-relaxed">
          {DESCRIPTION.short.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {expanded &&
            DESCRIPTION.long.map((p, i) => <p key={`long-${i}`}>{p}</p>)}
        </div>
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 font-semibold underline underline-offset-2 flex items-center gap-1"
        >
          {expanded ? 'Show less' : 'Show more'}
          <Icon name={expanded ? 'chevU' : 'chevR'} size={16} />
        </button>
      </div>
    </div>
  );
}
