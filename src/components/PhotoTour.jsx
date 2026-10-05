import React, { useEffect, useRef } from 'react';
import { CATEGORIES } from '../data/listing.js';
import { Icon } from './icons.jsx';
import { navigate } from '../App.jsx';

export default function PhotoTour() {
  const backRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    backRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') navigate('');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollTo = (ci) => {
    document.getElementById('tour-' + ci)?.scrollIntoView({ behavior: 'smooth' });
  };

  const lightboxUrl = (globalIdx) =>
    'modal=PHOTO_TOUR_SCROLLABLE&modalItem=' + (1000 + globalIdx);

  const openLightbox = (globalIdx) => navigate(lightboxUrl(globalIdx));

  let running = 0;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 bg-white overflow-y-auto fade-in"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
          <button type="button"
            ref={backRef}
            aria-label="Back to listing"
            className="rounded-full p-2 hover:bg-fill"
            onClick={() => navigate('')}
          >
            <Icon name="chevL" size={20} />
          </button>
          <span className="font-semibold">Photo tour</span>
          <div className="flex gap-2">
            <button type="button" aria-label="Share" className="rounded-full p-2 hover:bg-fill">
              <Icon name="share" size={20} />
            </button>
            <button type="button" aria-label="Save" className="rounded-full p-2 hover:bg-fill">
              <Icon name="heart" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <div className="max-w-[1120px] mx-auto px-6">
        <div
          aria-label="Photo categories"
          className="flex gap-5 overflow-x-auto no-scrollbar py-5"
        >
          {CATEGORIES.map((cat, ci) => (
            <button type="button"
              key={cat.name}
              className="flex-none text-left group"
              onClick={() => scrollTo(ci)}
            >
              <Thumb cat={cat} />
              <p className="mt-2 text-sm text-secondary group-hover:text-ink group-hover:underline line-clamp-2 w-[112px]">
                {cat.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-[1120px] mx-auto px-6 pb-20">
        {CATEGORIES.map((cat, ci) => {
          const offset = running;
          running += cat.photos.length;
          const [first, ...rest] = cat.photos;
          return (
            <section
              key={cat.name}
              id={'tour-' + ci}
              aria-label={cat.name}
              className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 scroll-mt-24 py-10"
            >
              <div className="self-start sticky top-28">
                <h2 className="text-[26px] font-semibold">{cat.name}</h2>
                <p className="mt-1 text-secondary text-[15px]">{cat.captions}</p>
              </div>
              <div className="min-w-0">
                {first && (
                  <button type="button"
                    className="w-full text-left"
                    aria-label={`Open photo: ${cat.name} 1`}
                    onClick={() => openLightbox(offset)}
                  >
                    <img
                      src={thumbSrc(first)}
                      alt={`${cat.name} 1`}
                      className="w-full aspect-[16/10] object-cover rounded-xl"
                    />
                  </button>
                )}
                {rest.length > 0 && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {rest.map((id, ri) => (
                      <button type="button"
                        key={id}
                        className="w-full text-left"
                        aria-label={`Open photo: ${cat.name} ${ri + 2}`}
                        onClick={() => openLightbox(offset + 1 + ri)}
                      >
                        <img
                          src={thumbSrc(id)}
                          alt={`${cat.name} ${ri + 2}`}
                          className="w-full aspect-[4/3] object-cover rounded-xl"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function thumbSrc(id) {
  return `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;
}

function Thumb({ cat }) {
  if (!cat.photos.length) return null;
  return (
    <img
      src={thumbSrc(cat.photos[0])}
      alt={cat.name}
      className="w-[112px] h-[112px] rounded-xl object-cover"
    />
  );
}
