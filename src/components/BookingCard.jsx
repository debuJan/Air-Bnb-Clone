import React from 'react';
import { Icon } from './icons.jsx';
import { LISTING } from '../data/listing.js';

export default function BookingCard() {
  return (
    <aside id="booking-card" className="sticky top-[100px] self-start">
      <div className="border border-hairline rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-6">
        {/* Coupon banner */}
        <div className="border border-hairline rounded-xl p-4 flex items-center justify-between gap-3 mb-6">
          <div className="flex gap-3 items-start">
            <Icon name="tag" size={24} className="text-green-700 shrink-0 mt-0.5" />
            <div className="text-sm">
              Get 10% off your next stay.
              <br />
              <button type="button" className="underline text-sm">
                Terms apply
              </button>
            </div>
          </div>
          <button
            type="button"
            className="bg-fill hover:bg-hairline rounded-lg px-4 py-2 text-sm font-semibold"
          >
            Claim
          </button>
        </div>

        {/* Price */}
        <div className="text-[22px]">
          <span className="font-semibold underline underline-offset-2">
            {'\u20B9'}{LISTING.total5Nights.toLocaleString('en-IN')}
          </span>
          <span className="text-base font-normal"> for 5 nights</span>
        </div>

        {/* Date + guest selector */}
        <div className="mt-4">
          <div className="grid grid-cols-2 border border-secondary rounded-t-xl">
            <div className="p-3 border-r border-secondary">
              <div className="text-[10px] font-bold tracking-wide">CHECK-IN</div>
              <div className="text-sm mt-1">{LISTING.checkin}</div>
            </div>
            <div className="p-3">
              <div className="text-[10px] font-bold tracking-wide">CHECKOUT</div>
              <div className="text-sm mt-1">{LISTING.checkout}</div>
            </div>
          </div>
          <button
            type="button"
            className="w-full border border-t-0 border-secondary rounded-b-xl p-3 flex items-center justify-between hover:bg-fill"
          >
            <div className="text-left">
              <div className="text-[10px] font-bold">GUESTS</div>
              <div className="text-sm mt-1">2 guests</div>
            </div>
            <Icon name="chevD" size={16} />
          </button>
        </div>

        {/* Free cancellation */}
        <div className="mt-4 bg-fill rounded-lg py-3.5 text-center text-sm">
          Free cancellation before <strong>{LISTING.freeCancelBefore}</strong>
        </div>

        {/* Reserve */}
        <button
          type="button"
          className="mt-4 w-full reserve-btn text-white font-semibold text-[16px] rounded-lg py-3.5"
        >
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-secondary">
          You won&rsquo;t be charged yet
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-secondary">
        <Icon name="flag" size={14} />
        <button type="button" className="underline underline-offset-2">
          Report this listing
        </button>
      </div>
    </aside>
  );
}
