import { Icon } from './icons.jsx';
import { HERO } from '../data/listing.js';
import { navigate } from '../App.jsx';

const openTour = () => navigate('modal=PHOTO_TOUR_SCROLLABLE');

export default function HeroGallery() {
  return (
    <section id="photos" aria-label="Photos">
      <div className="mt-6 relative rounded-xl overflow-hidden grid grid-cols-4 grid-rows-2 gap-2 h-[460px]">
        {HERO.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label="Open photo tour"
            onClick={openTour}
            className={`group relative overflow-hidden ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:brightness-[0.8] transition"
            />
          </button>
        ))}
        <button
          type="button"
          onClick={openTour}
          className="absolute bottom-6 right-6 z-10 bg-white border border-ink rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-sm hover:bg-fill"
        >
          <Icon name="grid" size={16} />
          Show all photos
        </button>
      </div>
    </section>
  );
}
