import React, { useState } from 'react';
import { Icon } from './icons.jsx';
import { NEARBY } from '../data/listing.js';

const PAGES = 2;

export default function NearbyStays() {
  const [page, setPage] = useState(0);

  const btn = (enabled) =>
    `w-8 h-8 rounded-full border flex items-center justify-center ${
      enabled
        ? 'border-secondary hover:border-ink'
        : 'border-hairline opacity-40 cursor-default'
    }`;

  return (
    <section className="py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm">
            {page + 1} / {PAGES}
          </span>
          <button
            type="button"
            aria-label="Previous"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={btn(page > 0)}
          >
            <Icon name="chevL" size={14} />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={page === PAGES - 1}
            onClick={() => setPage((p) => Math.min(PAGES - 1, p + 1))}
            className={btn(page < PAGES - 1)}
          >
            <Icon name="chevR" size={14} />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {NEARBY.map((s) => (
            <div key={s.name} className="flex-none w-[calc((100%-64px)/5)]">
              <img
                src={s.img}
                alt={s.name}
                className="rounded-xl aspect-square object-cover w-full"
                loading="lazy"
              />
              <p className="mt-2 font-semibold text-[15px] truncate">{s.name}</p>
              <p className="text-sm text-secondary">{s.place}</p>
              <p className="mt-1 text-sm">
                <span>
                  {'\u20B9'}
                  {s.price.toLocaleString('en-IN')} night
                </span>
                <span className="text-secondary"> &middot; </span>
                <Icon name="star" size={10} className="inline-block -mt-0.5" />
                <span> {s.rating}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
