import { Icon } from './icons.jsx';
import { LISTING } from '../data/listing.js';

export default function TitleRow() {
  return (
    <div className="pt-6 flex items-start justify-between">
      <h1 className="text-[26px] font-semibold text-ink">{LISTING.title}</h1>
      <div className="flex gap-1">
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold underline underline-offset-[3px] rounded-lg px-3 py-2 hover:bg-fill"
        >
          <Icon name="share" size={16} />
          Share
        </button>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold underline underline-offset-[3px] rounded-lg px-3 py-2 hover:bg-fill"
        >
          <Icon name="heart" size={16} />
          Save
        </button>
      </div>
    </div>
  );
}
