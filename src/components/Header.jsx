import { Icon } from './icons.jsx';

export default function Header() {
  return (
    <header className="h-20 border-b border-hairline">
      <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center">
          <Icon name="logo" size={34} />
        </div>

        {/* Center: search pill */}
        <button
          type="button"
          aria-label="Search"
          className="flex items-center rounded-full border border-hairline shadow-sm hover:shadow-md transition py-2 pl-2 pr-2"
        >
          <span className="flex items-center">
            <Icon name="house" size={20} />
            <span className="text-sm font-semibold px-3">Anywhere</span>
          </span>
          <span className="w-px h-6 bg-hairline" aria-hidden="true" />
          <span className="text-sm font-semibold px-3">Anytime</span>
          <span className="w-px h-6 bg-hairline" aria-hidden="true" />
          <span className="text-sm text-secondary px-3">Add guests</span>
          <span className="bg-brand rounded-full p-2.5 ml-1">
            <Icon name="search" size={14} className="text-white" />
          </span>
        </button>

        {/* Right: host + language + menu */}
        <div className="flex items-center">
          <button
            type="button"
            className="text-sm font-semibold rounded-full px-4 py-3 hover:bg-fill"
          >
            Become a host
          </button>
          <button
            type="button"
            aria-label="Choose language"
            className="rounded-full bg-fill p-3 hover:bg-hairline"
          >
            <Icon name="globe" size={18} />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="rounded-full bg-fill p-3 hover:bg-hairline ml-2"
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
