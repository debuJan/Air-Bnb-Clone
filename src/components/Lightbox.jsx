import React, { useEffect, useRef } from 'react';
import { PHOTOS } from '../data/listing.js';
import { Icon } from './icons.jsx';
import { navigate } from '../App.jsx';

const TOTAL = PHOTOS.length;

export default function Lightbox({ index }) {
  const clamped = Math.max(0, Math.min(TOTAL - 1, index || 0));
  const photo = PHOTOS[clamped];
  const closeRef = useRef(null);

  const go = (newIdx) =>
    navigate(
      'modal=PHOTO_TOUR_SCROLLABLE&modalItem=' +
        (1000 + Math.max(0, Math.min(TOTAL - 1, newIdx)))
    );
  const backToTour = () => navigate('modal=PHOTO_TOUR_SCROLLABLE');

  const prev = () => {
    if (clamped > 0) go(clamped - 1);
  };
  const next = () => {
    if (clamped < TOTAL - 1) go(clamped + 1);
  };

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') backToTour();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clamped]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.category}, photo ${clamped + 1} of ${TOTAL}`}
      className="fixed inset-0 z-[60] bg-white flex flex-col fade-in"
    >
      {/* Top bar */}
      <div className="h-16 px-6 flex items-center justify-between shrink-0">
        <button type="button"
          aria-label="Back to photo tour"
          className="rounded-full p-2 hover:bg-fill"
          onClick={backToTour}
        >
          <Icon name="grid" size={20} />
        </button>
        <span className="font-semibold text-[15px]">{photo.category}</span>
        <div className="flex items-center gap-4">
          <span className="text-sm">
            {clamped + 1} of {TOTAL}
          </span>
          <button type="button"
            ref={closeRef}
            aria-label="Close"
            className="rounded-full p-2 hover:bg-fill"
            onClick={backToTour}
          >
            <Icon name="close" size={20} />
          </button>
        </div>
      </div>

      {/* Photo */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 px-24">
        <img
          key={clamped}
          src={photo.srcLarge}
          alt={photo.alt}
          className="max-h-[calc(100vh-170px)] max-w-full object-contain"
        />
        <button type="button"
          aria-label="Previous photo"
          className="absolute top-1/2 -translate-y-1/2 left-6 w-12 h-12 rounded-full border border-secondary bg-white flex items-center justify-center hover:border-ink disabled:opacity-30 disabled:cursor-default"
          onClick={prev}
          disabled={clamped === 0}
        >
          <Icon name="chevL" size={20} />
        </button>
        <button type="button"
          aria-label="Next photo"
          className="absolute top-1/2 -translate-y-1/2 right-6 w-12 h-12 rounded-full border border-secondary bg-white flex items-center justify-center hover:border-ink disabled:opacity-30 disabled:cursor-default"
          onClick={next}
          disabled={clamped === TOTAL - 1}
        >
          <Icon name="chevR" size={20} />
        </button>
      </div>
    </div>
  );
}
