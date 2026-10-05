import { useState } from 'react';
import { Icon } from './icons.jsx';
import { AMENITIES, AMENITIES_ALL } from '../data/listing.js';

const EXTRA = AMENITIES_ALL.slice(AMENITIES.length);

function AmenityRow({ item }) {
  return (
    <div className="flex items-center gap-4">
      <Icon name={item.icon} size={28} />
      <p>
        <span className={item.missing ? 'line-through text-secondary' : ''}>
          {item.name}
        </span>
        {item.desc && <span className="text-secondary"> {item.desc}</span>}
      </p>
    </div>
  );
}

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="amenities" className="py-8 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">What this place offers</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 max-w-[760px]">
        {AMENITIES.map((item) => (
          <AmenityRow key={item.name} item={item} />
        ))}
        {showAll &&
          EXTRA.map((item) => <AmenityRow key={item.name} item={item} />)}
      </div>
      <button
        type="button"
        aria-expanded={showAll}
        onClick={() => setShowAll((v) => !v)}
        className="mt-8 border border-ink rounded-lg px-6 py-3 font-semibold hover:bg-fill"
      >
        {showAll ? 'Show fewer amenities' : 'Show all 50 amenities'}
      </button>
    </section>
  );
}
