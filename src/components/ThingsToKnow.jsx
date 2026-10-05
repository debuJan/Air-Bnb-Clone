import React from 'react';
import { Icon } from './icons.jsx';
import { THINGS_TO_KNOW } from '../data/listing.js';

export default function ThingsToKnow() {
  return (
    <section className="py-12 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">Things to know</h2>
      <div className="mt-6 grid grid-cols-3 gap-10">
        {THINGS_TO_KNOW.map((col) => (
          <div key={col.title}>
            <p className="font-semibold">{col.title}</p>
            <div className="mt-4 space-y-3">
              {col.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-[15px]">
                  <Icon name={item.icon} size={20} className="shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
