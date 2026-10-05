import { useEffect, useState } from 'react';
import { Icon } from './icons.jsx';
import { LISTING } from '../data/listing.js';

const TABS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

export default function SectionNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('photos');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed top-0 inset-x-0 z-40 bg-white border-b border-hairline transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'translate-y-[-110%]'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Left: section tabs with scrollspy */}
        <nav aria-label="Listing sections" className="flex items-center gap-6 h-full">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollTo(tab.id)}
                className={`relative h-full text-sm font-semibold ${
                  isActive ? 'text-ink' : 'text-secondary hover:text-ink'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span
                    className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-ink"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: price summary + reserve */}
        <div className="flex items-center">
          <div className="text-right mr-6">
            <div className="text-sm">
              <span className="font-semibold">
                ₹{LISTING.total5Nights.toLocaleString('en-IN')}
              </span>{' '}
              for 5 nights
            </div>
            <div className="text-xs mt-0.5 flex items-center gap-1 justify-end">
              <Icon name="star" size={10} />
              <span>
                {LISTING.rating} · {LISTING.reviewCount} reviews
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollTo('booking-card')}
            className="bg-brand hover:bg-[#e11d48] text-white text-sm font-semibold rounded-full px-7 py-3"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
