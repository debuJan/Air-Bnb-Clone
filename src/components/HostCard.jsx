import React from 'react';
import { Icon } from './icons.jsx';
import { LISTING } from '../data/listing.js';

export default function HostCard() {
  const host = LISTING.host;

  return (
    <section className="py-12 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">Meet your host</h2>

      <div className="mt-6 border border-hairline rounded-2xl p-8 max-w-[400px]">
        <div className="flex gap-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-[#14532d] text-white flex items-center justify-center text-4xl font-bold">
              M
            </div>
            <p className="mt-3 text-xl font-bold">{host.name}</p>
            <p className="mt-1 text-sm flex items-center justify-center gap-1">
              <Icon name="medal" size={16} />
              Superhost
            </p>
          </div>
          <div>
            <div>
              <p className="text-2xl font-extrabold">
                {host.reviews.toLocaleString('en-IN')}
              </p>
              <p className="text-sm underline">Reviews</p>
            </div>
            <div className="border-t border-hairline pt-4 mt-4">
              <p className="text-2xl font-extrabold flex items-center gap-1">
                {host.rating}
                <Icon name="star" size={16} />
              </p>
              <p className="text-sm underline">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4 max-w-[560px]">
        <div className="flex items-center gap-3">
          <Icon name="award" size={24} />
          <span>{host.years} years hosting</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-secondary/30 text-ink flex items-center justify-center text-xs font-bold">
              S
            </div>
            <div className="w-8 h-8 rounded-full bg-hairline text-ink flex items-center justify-center text-xs font-bold -ml-3">
              A
            </div>
          </div>
          <span>Co-hosts</span>
        </div>
        <hr className="border-hairline" />
        <p className="text-[15px]">
          <span className="font-semibold">Languages: </span>
          {host.languages.join(', ')}
        </p>
        <p className="text-[15px]">
          <span className="font-semibold">Response rate: </span>
          {host.responseRate}
        </p>
        <p className="text-[15px]">
          <span className="font-semibold">Responds </span>
          {host.responseTime}
        </p>
        <button
          type="button"
          className="mt-2 border border-ink rounded-lg px-6 py-3 font-semibold hover:bg-fill"
        >
          Message host
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-hairline flex gap-4 items-start">
        <Icon name="shield" size={28} className="shrink-0" />
        <p className="text-sm text-secondary">
          To help protect your payment, always use Airbnb to send money and
          communicate with hosts.
        </p>
      </div>
    </section>
  );
}
