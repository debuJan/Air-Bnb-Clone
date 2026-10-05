import React, { useState } from 'react';
import { Icon } from './icons.jsx';

/* Date helpers */
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const pad = (n) => String(n).padStart(2, '0');
const keyOf = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
const fmtLong = (k) => {
  const [y, m, d] = k.split('-').map(Number);
  return `${d} ${MONTHS_SHORT[m - 1]} ${y}`;
};
const nightsBetween = (start, end) =>
  Math.round((new Date(`${end}T00:00`) - new Date(`${start}T00:00`)) / 86400000);

const MIN_KEY = '2026-10-01';
const MAX_KEY = '2027-09-30';
const BLOCKED = new Set(['2026-11-18', '2026-11-19', '2026-11-20', '2026-11-21']);

const isDisabled = (k) => k < MIN_KEY || k > MAX_KEY || BLOCKED.has(k);

function MonthPanel({ year, month, range, onPick, nav, navDir, navDisabled }) {
  const total = daysInMonth(year, month);
  const leading = new Date(year, month, 1).getDay();
  const days = [];
  for (let i = 0; i < leading; i++) {
    days.push(<div key={`blank-${i}`} className="h-12" />);
  }
  for (let d = 1; d <= total; d++) {
    const k = keyOf(year, month, d);
    const disabled = isDisabled(k);
    const isEndpoint = range?.start === k || range?.end === k;
    const inRange =
      range?.start && range?.end && k > range.start && k < range.end;
    days.push(
      <div
        key={d}
        className={`h-12 flex items-center justify-center relative ${
          inRange ? 'bg-fill' : ''
        }`}
      >
        <button
          type="button"
          disabled={disabled}
          onClick={() => onPick(k)}
          aria-label={fmtLong(k)}
          className={`w-12 h-12 rounded-full text-sm ${
            isEndpoint
              ? 'bg-ink text-white font-semibold'
              : inRange
                ? 'font-semibold'
                : ''
          } ${
            disabled
              ? 'text-[#c9c9c9] cursor-default'
              : 'hover:border hover:border-ink'
          }`}
        >
          {d}
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0">
      <div className="relative flex items-center justify-center">
        {nav === 'prev' ? (
          <button
            type="button"
            onClick={navDir}
            disabled={navDisabled}
            aria-label="Previous month"
            className={`absolute left-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-fill ${
              navDisabled ? 'opacity-30 cursor-default' : ''
            }`}
          >
            <Icon name="chevL" size={16} />
          </button>
        ) : null}
        <h3 className="font-semibold">
          {MONTHS[month]} {year}
        </h3>
        {nav === 'next' ? (
          <button
            type="button"
            onClick={navDir}
            disabled={navDisabled}
            aria-label="Next month"
            className={`absolute right-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-fill ${
              navDisabled ? 'opacity-30 cursor-default' : ''
            }`}
          >
            <Icon name="chevR" size={16} />
          </button>
        ) : null}
      </div>
      <div className="mt-4 grid grid-cols-7 text-xs text-secondary">
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="h-6 flex items-center justify-center">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">{days}</div>
    </div>
  );
}

export default function Availability() {
  const [viewStart, setViewStart] = useState({ y: 2026, m: 9 }); // October 2026, 0-indexed
  const [range, setRange] = useState({
    start: '2026-10-18',
    end: '2026-10-23',
  });

  const second = { y: viewStart.m === 11 ? viewStart.y + 1 : viewStart.y, m: (viewStart.m + 1) % 12 };

  const prevDisabled = viewStart.y === 2026 && viewStart.m === 9;
  const nextDisabled = viewStart.y === 2027 && viewStart.m === 8; // second panel would be Oct 2027

  const goPrev = () =>
    setViewStart((v) => ({ y: v.m === 0 ? v.y - 1 : v.y, m: (v.m + 11) % 12 }));
  const goNext = () =>
    setViewStart((v) => ({ y: v.m === 11 ? v.y + 1 : v.y, m: (v.m + 1) % 12 }));

  const pick = (k) => {
    if (isDisabled(k)) return;
    const start = range?.start;
    const end = range?.end;
    if (!start || (start && end)) {
      setRange({ start: k, end: null });
    } else if (k > start) {
      setRange({ start, end: k });
    } else {
      setRange({ start: k, end: null });
    }
  };

  const hasRange = range?.start && range?.end;
  const nights = hasRange ? nightsBetween(range.start, range.end) : 0;

  return (
    <section className="py-12 border-b border-hairline">
      <h2 className="text-[22px] font-semibold">
        {hasRange ? `${nights} nights in Candolim` : 'Select your dates'}
      </h2>
      <p className="mt-1 text-secondary text-sm">
        {hasRange
          ? `${fmtLong(range.start)} \u2013 ${fmtLong(range.end)}`
          : 'Choose a check-in and checkout date'}
      </p>

      <div className="mt-6 flex gap-16">
        <MonthPanel
          year={viewStart.y}
          month={viewStart.m}
          range={range}
          onPick={pick}
          nav="prev"
          navDir={goPrev}
          navDisabled={prevDisabled}
        />
        <MonthPanel
          year={second.y}
          month={second.m}
          range={range}
          onPick={pick}
          nav="next"
          navDir={goNext}
          navDisabled={nextDisabled}
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          type="button"
          aria-label="Keyboard shortcuts"
          className="border border-hairline rounded-lg p-2 hover:bg-fill"
        >
          <Icon name="keyboard" size={20} />
        </button>
        <button
          type="button"
          onClick={() => setRange(null)}
          className="text-sm font-semibold underline underline-offset-2"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
