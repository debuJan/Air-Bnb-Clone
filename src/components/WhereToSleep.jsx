import { SLEEP, PHOTOS } from '../data/listing.js';

const photoSrc = (category) => PHOTOS.find((p) => p.category === category)?.src;

const CARDS = [
  { ...SLEEP[0], category: 'Bedroom' },
  { ...SLEEP[1], category: 'Living room 1' },
];

export default function WhereToSleep() {
  return (
    <section className="py-8 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">Where you&apos;ll sleep</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 max-w-[660px]">
        {CARDS.map((card) => (
          <div key={card.room}>
            <img
              src={photoSrc(card.category)}
              alt={card.room}
              className="rounded-xl aspect-[16/10] object-cover w-full"
            />
            <p className="mt-3 font-semibold">{card.room}</p>
            <p className="text-sm text-secondary">{card.bed}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
