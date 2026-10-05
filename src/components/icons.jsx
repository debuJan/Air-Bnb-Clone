import React from 'react';

const base = (props, children, viewBox = '0 0 24 24') => (
  <svg
    viewBox={viewBox}
    width={props.size || 24}
    height={props.size || 24}
    className={props.className}
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={props.ariaHidden !== false}
    role={props.title ? 'img' : undefined}
  >
    {props.title ? <title>{props.title}</title> : null}
    {children}
  </svg>
);

/* Brand-ish swirl logo drawn from scratch (not copied from any asset) */
export const LogoIcon = (props) => (
  <svg
    viewBox="0 0 100 32"
    height={props.size || 32}
    className={props.className}
    aria-label="airbnb"
    role="img"
  >
    <g fill="#FF385C">
      <path d="M32.5 27.6c-4.6 0-8.6-2.1-11-5.4l-4.4 4.3a1.9 1.9 0 0 1-2.7-2.7l4.3-4.4c-3.3-2.4-5.4-6.4-5.4-11 0-1 2.2-1 2.4 0 .4 2.9 1.6 5.5 3.3 7.6l6.5-6.6 6.5 6.6c1.7-2.1 2.9-4.7 3.3-7.6.2-1 2.4-1 2.4 0 0 4.6-2.1 8.6-5.4 11l4.3 4.4a1.9 1.9 0 0 1-2.7 2.7l-4.4-4.3c-2.4 3.3-6.4 5.4-11 5.4zm-6.8-12.5c-2 2.1-4.4 4.6-6.6 6.7 1.9 2 4.6 3.3 7.6 3.3s5.7-1.3 7.6-3.3c-2.2-2.1-4.6-4.6-6.6-6.7a1.4 1.4 0 0 0-2 0z" />
    </g>
    <text
      x="40"
      y="22.5"
      fontFamily="inherit"
      fontSize="19"
      fontWeight="800"
      fill="#FF385C"
      letterSpacing="-0.5"
    >
      airbnb
    </text>
  </svg>
);

export const SearchIcon = (props) =>
  base(props, <>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </>);

export const GlobeIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
  </>);

export const MenuIcon = (props) =>
  base(props, <>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </>);

export const ShareIcon = (props) =>
  base(props, <>
    <path d="M12 15V4" />
    <path d="M8 8l4-4 4 4" />
    <path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
  </>);

export const HeartIcon = (props) =>
  base(props, <>
    <path d="M12 20.5S3.5 15.4 3.5 9.6A4.6 4.6 0 0 1 8.1 5c1.6 0 3 .9 3.9 2.2A4.6 4.6 0 0 1 15.9 5a4.6 4.6 0 0 1 4.6 4.6c0 5.8-8.5 10.9-8.5 10.9z" />
  </>);

export const HeartFilledIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    className={props.className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 20.5S3.5 15.4 3.5 9.6A4.6 4.6 0 0 1 8.1 5c1.6 0 3 .9 3.9 2.2A4.6 4.6 0 0 1 15.9 5a4.6 4.6 0 0 1 4.6 4.6c0 5.8-8.5 10.9-8.5 10.9z" />
  </svg>
);

export const StarIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 12}
    height={props.size || 12}
    className={props.className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9 2.9-6z" />
  </svg>
);

export const ChevronLeftIcon = (props) =>
  base(props, <path d="M14.5 5.5L8 12l6.5 6.5" />);

export const ChevronRightIcon = (props) =>
  base(props, <path d="M9.5 5.5L16 12l-6.5 6.5" />);

export const ChevronDownIcon = (props) =>
  base(props, <path d="M5.5 9.5L12 16l6.5-6.5" />);

export const ChevronUpIcon = (props) =>
  base(props, <path d="M5.5 14.5L12 8l6.5 6.5" />);

export const CloseIcon = (props) =>
  base(props, <>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </>);

/* Laurel wreath halves, drawn from scratch */
const laurelLeaf = (flip) => (
  <g transform={flip ? 'translate(24,0) scale(-1,1)' : undefined} fill="currentColor" stroke="none">
    <ellipse cx="6.5" cy="4.5" rx="3.4" ry="1.9" transform="rotate(-38 6.5 4.5)" />
    <ellipse cx="4.8" cy="8.2" rx="3.6" ry="2" transform="rotate(-24 4.8 8.2)" />
    <ellipse cx="4" cy="12.2" rx="3.6" ry="2" transform="rotate(-8 4 12.2)" />
    <ellipse cx="4.6" cy="16.1" rx="3.4" ry="1.9" transform="rotate(8 4.6 16.1)" />
    <ellipse cx="6.2" cy="19.6" rx="3.1" ry="1.7" transform="rotate(26 6.2 19.6)" />
    <path d="M8.5 2.5c-2.6 4.4-3.6 9.6-2.2 15.2" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </g>
);
export const LaurelLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 28} height={props.size || 28} className={props.className} aria-hidden="true">
    {laurelLeaf(false)}
  </svg>
);
export const LaurelRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 28} height={props.size || 28} className={props.className} aria-hidden="true">
    {laurelLeaf(true)}
  </svg>
);

export const KeyIcon = (props) =>
  base(props, <>
    <circle cx="8" cy="14" r="4.5" />
    <path d="M11.2 10.8L20 2" />
    <path d="M16.5 5.5l2.5 2.5" />
    <path d="M14 8l2 2" />
  </>);

export const MedalIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="14" r="5" />
    <path d="M9.5 9.8L6 3.5h4.5L12 7l1.5-3.5H18l-3.5 6.3" />
    <path d="M10 14l1.4 1.4L15 12" />
  </>);

export const PinIcon = (props) =>
  base(props, <>
    <path d="M12 21.5S5.5 15.6 5.5 10a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11.5-6.5 11.5z" />
    <circle cx="12" cy="10" r="2.3" />
  </>);

export const PinFilledIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} className={props.className} fill="currentColor" aria-hidden="true">
    <path d="M12 22S5 15.9 5 10a7 7 0 0 1 14 0c0 5.9-7 12-7 12z" />
    <circle cx="12" cy="10" r="2.6" fill="#fff" />
  </svg>
);

export const CalendarIcon = (props) =>
  base(props, <>
    <rect x="4" y="6" width="16" height="15" rx="2" />
    <line x1="4" y1="10.5" x2="20" y2="10.5" />
    <line x1="8.5" y1="3.5" x2="8.5" y2="7.5" />
    <line x1="15.5" y1="3.5" x2="15.5" y2="7.5" />
  </>);

export const KeyboardIcon = (props) =>
  base(props, <>
    <rect x="2.5" y="7" width="19" height="11" rx="2.5" />
    <path d="M6 11h1.5M10.5 11H12M15.5 11h1M18.5 11H19M6 14.5h1.5M9.75 14.5h4.5M17.5 14.5H19" strokeLinecap="round" />
  </>);

export const WifiIcon = (props) =>
  base(props, <>
    <path d="M4 10.5a11 11 0 0 1 16 0" />
    <path d="M7 13.8a6.5 6.5 0 0 1 10 0" />
    <circle cx="12" cy="17.5" r="1.2" fill="currentColor" stroke="none" />
  </>);

export const TvIcon = (props) =>
  base(props, <>
    <rect x="3" y="5.5" width="18" height="12" rx="1.5" />
    <path d="M9 21l3-3.5L15 21" />
  </>);

export const SnowIcon = (props) =>
  base(props, <>
    <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    <path d="M12 3l-2 2.5M12 3l2 2.5M12 21l-2-2.5M12 21l2-2.5" />
  </>);

export const FanIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="12" r="2" />
    <path d="M12 10c0-3 1.5-5.5 4-6.5M14 12c3 0 5.5 1.5 6.5 4M12 14c0 3-1.5 5.5-4 6.5M10 12c-3 0-5.5-1.5-6.5-4" />
  </>);

export const PoolIcon = (props) =>
  base(props, <>
    <path d="M3 15h18" />
    <path d="M3 19h18" />
    <path d="M5 15c0-3 1-5 2.5-6.5S10 6 12 6s3.5 1 4.5 2.5S19 12 19 15" />
  </>);

export const GymIcon = (props) =>
  base(props, <>
    <path d="M7 8v8M17 8v8M4 10v4M20 10v4" />
    <path d="M7 12h10" />
    <rect x="3" y="10.8" width="2.4" height="2.4" rx="0.6" />
    <rect x="18.6" y="10.8" width="2.4" height="2.4" rx="0.6" />
  </>);

export const KitchenIcon = (props) =>
  base(props, <>
    <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
    <path d="M4 10V6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V10" />
    <path d="M9 13.5h6" />
  </>);

export const HotTubIcon = (props) =>
  base(props, <>
    <path d="M4 13h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3z" />
    <path d="M7 13V9.5M12 13V8M17 13V9.5" />
    <path d="M9 5.5c0-1 .8-1 .8-2M13.5 5.5c0-1 .8-1 .8-2" />
  </>);

export const HouseIcon = (props) =>
  base(props, <>
    <path d="M4 11l8-7 8 7" />
    <path d="M6.5 9.5V20h11V9.5" />
    <path d="M10 20v-5h4v5" />
  </>);

export const ShieldIcon = (props) =>
  base(props, <>
    <path d="M12 3l7.5 3v6c0 4.6-3.2 7.6-7.5 9-4.3-1.4-7.5-4.4-7.5-9V6L12 3z" />
    <path d="M9.5 12l1.8 1.8L14.8 10" />
  </>);

export const MessageIcon = (props) =>
  base(props, <>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3.5v-3.5H6.5A2.5 2.5 0 0 1 4 13.5v-7z" />
  </>);

export const AwardIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="9" r="5" />
    <path d="M9.8 13.3L7.5 21l4.5-2.5L16.5 21l-2.3-7.7" />
  </>);

export const BedIcon = (props) =>
  base(props, <>
    <path d="M3 18v-7" />
    <path d="M3 14h18v4" />
    <path d="M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H10v5" />
    <circle cx="6.5" cy="11" r="1.5" />
  </>);

export const DoorIcon = (props) =>
  base(props, <>
    <rect x="6" y="3.5" width="12" height="17" rx="1" />
    <circle cx="14.8" cy="12" r="1" fill="currentColor" stroke="none" />
  </>);

export const GridIcon = (props) =>
  base(props, <>
    <circle cx="6" cy="6" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="6" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="18" cy="6" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="6" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="18" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="6" cy="18" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="18" cy="18" r="1.3" fill="currentColor" stroke="none" />
  </>);

export const FlagIcon = (props) =>
  base(props, <>
    <path d="M6 21V4" />
    <path d="M6 5h11l-2.5 3.5L17 12H6" />
  </>);

export const PlusIcon = (props) =>
  base(props, <>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </>);

export const MinusIcon = (props) =>
  base(props, <line x1="5" y1="12" x2="19" y2="12" />);

export const CheckIcon = (props) =>
  base(props, <path d="M5 12.5l4.5 4.5L19 7.5" />);

export const BathtubIcon = (props) =>
  base(props, <>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2z" />
    <path d="M6 12V6a2 2 0 0 1 4 0" />
    <path d="M8 21l-1 1.5M16 21l1 1.5" />
  </>);

export const WasherIcon = (props) =>
  base(props, <>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <circle cx="12" cy="13.5" r="4.5" />
    <path d="M9.5 13.5a2.5 2.5 0 0 1 5 0" />
    <circle cx="8" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </>);

export const CoffeeIcon = (props) =>
  base(props, <>
    <path d="M5 9h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9z" />
    <path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17" />
    <path d="M9 5.5c0-1 .8-1 .8-2M13 5.5c0-1 .8-1 .8-2" />
  </>);

export const LaptopIcon = (props) =>
  base(props, <>
    <rect x="5.5" y="4.5" width="13" height="9" rx="1" />
    <path d="M3 17.5h18l-1.5 2.5h-15L3 17.5z" />
  </>);

export const SparkleIcon = (props) =>
  base(props, <>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    <path d="M18.5 15.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" />
  </>);

export const SmokeAlarmIcon = (props) =>
  base(props, <>
    <path d="M12 3v3" />
    <path d="M5 9.5a7 7 0 0 1 14 0v5H5v-5z" />
    <path d="M9 17.5h6" />
  </>);

export const FirstAidIcon = (props) =>
  base(props, <>
    <rect x="4" y="7" width="16" height="12" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M12 11v4M10 13h4" />
  </>);

export const FireIcon = (props) =>
  base(props, <>
    <path d="M12 3.5c1 3-1.5 4.5-2.5 6C8.3 11.3 8 12.5 8 14a4 4 0 0 0 8 0c0-1.5-.5-2.5-1.2-3.7-.5 1-1.3 1.7-2.3 2 .3-2.5-.5-6-2.5-8.8z" />
  </>);

export const CarIcon = (props) =>
  base(props, <>
    <path d="M5 16l1.2-4.5A2 2 0 0 1 8.1 10h7.8a2 2 0 0 1 1.9 1.5L19 16" />
    <rect x="4" y="16" width="16" height="4" rx="1" />
    <circle cx="8" cy="18" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="16" cy="18" r="0.8" fill="currentColor" stroke="none" />
  </>);

export const MusicIcon = (props) =>
  base(props, <>
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17" cy="15.5" r="2.5" />
    <path d="M10 17.5V6l9.5-2.5V15.5" />
  </>);

export const CameraIcon = (props) =>
  base(props, <>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M8.5 8L10 5.5h4L15.5 8" />
    <circle cx="12" cy="13.5" r="3.2" />
  </>);

export const TagIcon = (props) =>
  base(props, <>
    <path d="M4 4h7l9 9-7 7-9-9V4z" />
    <circle cx="9" cy="9" r="1.4" />
  </>);

export const MapFoldIcon = (props) =>
  base(props, <>
    <path d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4z" />
    <path d="M9 4v14M15 6v14" />
  </>);

export const BubbleIcon = (props) =>
  base(props, <>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v6a2.5 2.5 0 0 1-2.5 2.5H9l-5 4v-12.5z" />
  </>);

export const TrophyIcon = (props) =>
  base(props, <>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
    <path d="M8 5H4.5a3.5 3.5 0 0 0 3.6 3.5M16 5h3.5a3.5 3.5 0 0 1-3.6 3.5" />
    <path d="M12 13v4M8.5 20h7M10 17h4" />
  </>);

export const SunIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5 5l1.8 1.8M17.2 17.2L19 19M19 5l-1.8 1.8M6.8 17.2L5 19" />
  </>);

export const ClockIcon = (props) =>
  base(props, <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>);

export const UsersIcon = (props) =>
  base(props, <>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M2.8 19.5c.8-3.2 3.2-5 6.2-5s5.4 1.8 6.2 5" />
    <path d="M15.5 5.4a3.5 3.5 0 0 1 0 6.2M17.8 14.9c1.9.7 3.1 2.2 3.5 4.6" />
  </>);

/* Name-based lookup so sections can reference icons by string keys */
const ICON_MAP = {
  logo: LogoIcon,
  search: SearchIcon,
  globe: GlobeIcon,
  menu: MenuIcon,
  share: ShareIcon,
  heart: HeartIcon,
  heartFill: HeartFilledIcon,
  star: StarIcon,
  chevL: ChevronLeftIcon,
  chevR: ChevronRightIcon,
  chevD: ChevronDownIcon,
  chevU: ChevronUpIcon,
  close: CloseIcon,
  laurelL: LaurelLeftIcon,
  laurelR: LaurelRightIcon,
  key: KeyIcon,
  medal: MedalIcon,
  pin: PinIcon,
  pinFill: PinFilledIcon,
  calendar: CalendarIcon,
  keyboard: KeyboardIcon,
  wifi: WifiIcon,
  tv: TvIcon,
  snow: SnowIcon,
  fan: FanIcon,
  pool: PoolIcon,
  gym: GymIcon,
  kitchen: KitchenIcon,
  hottub: HotTubIcon,
  house: HouseIcon,
  shield: ShieldIcon,
  message: MessageIcon,
  award: AwardIcon,
  bed: BedIcon,
  door: DoorIcon,
  grid: GridIcon,
  flag: FlagIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  check: CheckIcon,
  bath: BathtubIcon,
  washer: WasherIcon,
  coffee: CoffeeIcon,
  laptop: LaptopIcon,
  sparkle: SparkleIcon,
  smoke: SmokeAlarmIcon,
  firstaid: FirstAidIcon,
  fire: FireIcon,
  car: CarIcon,
  music: MusicIcon,
  camera: CameraIcon,
  tag: TagIcon,
  map: MapFoldIcon,
  bubble: BubbleIcon,
  trophy: TrophyIcon,
  sun: SunIcon,
  clock: ClockIcon,
  users: UsersIcon,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = ICON_MAP[name] || SparkleIcon;
  return <Cmp {...props} />;
};
