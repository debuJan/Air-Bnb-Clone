import React, { useState } from 'react';
import { Icon } from './icons.jsx';
import { RATING_BARS, CATEGORY_SCORES, TOPIC_CHIPS, REVIEWS } from '../data/listing.js';

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const full = `${review.text} ${review.more}`;
  const shown = expanded ? full : `${review.text.slice(0, 200)}\u2026`;

  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-semibold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{review.name}</p>
          <p className="text-sm text-secondary">
            {review.location} &middot; {review.date}
          </p>
        </div>
      </div>
      <div className="mt-1 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" size={10} />
        ))}
      </div>
      <p className="mt-3 text-[15px] leading-relaxed">
        {shown}{' '}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="underline font-semibold"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      </p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 border-b border-hairline">
      {/* Centered header */}
      <div className="flex items-center justify-center gap-6">
        <Icon name="laurelL" size={72} />
        <span className="text-[84px] leading-none font-extrabold">4.95</span>
        <Icon name="laurelR" size={72} />
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="mt-4 text-xl font-bold">Guest favourite</p>
        <p className="mt-2 text-secondary max-w-[420px]">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          type="button"
          className="mt-3 font-semibold underline underline-offset-2"
        >
          How reviews work
        </button>
      </div>

      {/* Scores */}
      <div className="mt-10 grid grid-cols-7 divide-x divide-hairline">
        <div>
          <p className="text-sm font-semibold">Overall rating</p>
          <div className="mt-3 space-y-2">
            {[5, 4, 3, 2, 1].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <span className="text-xs w-2">{n}</span>
                <div className="flex-1 h-1 bg-hairline rounded-full">
                  <div
                    className="h-full bg-ink rounded-full"
                    style={{ width: `${RATING_BARS[n]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {CATEGORY_SCORES.map((s) => (
          <div key={s.name} className="px-5">
            <p className="text-sm font-semibold">{s.name}</p>
            <p className="mt-2 text-lg font-bold">{s.value}</p>
            <Icon name={s.icon} size={30} className="mt-3" />
          </div>
        ))}
      </div>

      {/* Topic chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {TOPIC_CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            className="rounded-full border border-hairline px-4 py-2 text-sm hover:border-ink"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Review cards */}
      <div className="mt-8 grid grid-cols-2 gap-x-20 gap-y-10">
        {REVIEWS.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>

      <button
        type="button"
        className="mt-10 border border-ink rounded-lg px-6 py-3 font-semibold hover:bg-fill"
      >
        Show all 19 reviews
      </button>
    </section>
  );
}
