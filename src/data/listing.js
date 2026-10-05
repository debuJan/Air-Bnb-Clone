/* All listing content, written from scratch for this clone exercise. */

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const LISTING = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  facts: '3 guests · 1 bedroom · 1 bed · 1 bathroom',
  rating: 4.95,
  reviewCount: 19,
  nightlyBase: 5699,
  total5Nights: 28499,
  checkin: '10/18/2026',
  checkout: '10/23/2026',
  freeCancelBefore: '17 October',
  host: {
    name: 'Mirashya Homes',
    years: 2,
    reviews: 1463,
    rating: 4.68,
    responseRate: '100%',
    responseTime: 'within an hour',
    languages: ['English', 'Hindi'],
  },
};

/* 43 photos across 9 categories */
const C = (name, captions, ids) => ({ name, captions, photos: ids });

export const CATEGORIES = [
  C('Living room 1', 'Sofa · Air conditioning · Ceiling fan · TV', [
    'photo-1600210492486-724fe5c67fb0',
    'photo-1616486338812-3dadae4b4ace',
    'photo-1618221195710-dd6b41faaea6',
    'photo-1567016432779-094069958ea5',
    'photo-1522708323590-d24dbb6b0267',
    'photo-1493809842364-78817add7ffb',
  ]),
  C('Living room 2', 'Ceiling fan · Hot tub', [
    'photo-1586023492125-27b2c045efd7',
    'photo-1600121848594-d8644e57abab',
    'photo-1600607687939-ce8a6c25118c',
    'photo-1600566753086-00f18fb6b3ea',
    'photo-1513694203232-719a280e022f',
    'photo-1617806118233-18e1de247200',
  ]),
  C('Full kitchen', 'Refrigerator · Microwave · Cooking basics · Coffee', [
    'photo-1556911220-bff31c812dba',
    'photo-1556912167-f556f1f39fdf',
    'photo-1484154218962-a197022b5858',
    'photo-1600585152220-90363fe7e115',
    'photo-1600585154340-be6161a56a0c',
  ]),
  C('Bedroom', 'King bed · Air conditioning · Ceiling fan · Wardrobe', [
    'photo-1611892440504-42a792e24d32',
    'photo-1590490360182-c33d57733427',
    'photo-1578683010236-d716f9a3f461',
    'photo-1505691938895-1758d7feb511',
    'photo-1540518614846-7eded433c457',
  ]),
  C('Full bathroom', 'Hot water · Shower · Hair dryer · Essentials', [
    'photo-1552321554-5fefe8c9ef14',
    'photo-1507652313519-d4e9174996dd',
    'photo-1620626011761-996317b8d101',
    'photo-1600566752355-35792bedcfea',
  ]),
  C('Gym', 'Treadmill · Free weights · Exercise bike', [
    'photo-1534438327276-14e5300c3a48',
    'photo-1517836357463-d25dfeac3438',
    'photo-1540497077202-7c8a3999166f',
    'photo-1583454110551-21f2fa2afe61',
  ]),
  C('Exterior', 'Building exterior · Balcony · Terrace', [
    'photo-1568605114967-8130f3a36994',
    'photo-1600596542815-ffad4c1539a9',
    'photo-1600047509807-ba8f99d2cdde',
    'photo-1512343879784-a960bf40e7f2',
    'photo-1507525428034-b723cf961d3e',
  ]),
  C('Pool', 'Outdoor pool · Sun loungers', [
    'photo-1540541338287-41700207dee6',
    'photo-1571896349842-33c89424de2d',
    'photo-1520250497591-112f2f40a3f4',
    'photo-1512917774080-9991f1c4c750',
  ]),
  C('Additional photos', 'More views of the home', [
    'photo-1560448204-e02f11c3d0e2',
    'photo-1502672260266-1c1ef2d93688',
    'photo-1554995207-c18c203602cb',
    'photo-1631679706909-1844bbd07221',
  ]),
];

/* Flattened photo list with category + index for the lightbox */
export const PHOTOS = CATEGORIES.flatMap((cat) =>
  cat.photos.map((id, i) => ({
    src: u(id),
    srcLarge: u(id, 2000),
    alt: `${cat.name} ${i + 1}`,
    category: cat.name,
    captions: cat.captions,
  }))
);

/* Hero mosaic: [big, topMid, topRight, bottomMid, bottomRight] */
export const HERO = [
  { src: u('photo-1600210492486-724fe5c67fb0', 1200), alt: 'Terrace sitting area' },
  { src: u('photo-1586023492125-27b2c045efd7', 800), alt: 'Rattan chairs' },
  { src: u('photo-1544161515-4ab6ce6db874', 800), alt: 'Jacuzzi' },
  { src: u('photo-1611892440504-42a792e24d32', 800), alt: 'Bedroom' },
  { src: u('photo-1568605114967-8130f3a36994', 800), alt: 'Building exterior' },
];

export const HIGHLIGHTS = [
  {
    icon: 'trophy',
    title: 'Top 5% of homes',
    text: 'This home is in the top 5% of eligible listings based on ratings, reviews and reliability',
  },
  {
    icon: 'pool',
    title: 'Dive right in',
    text: 'This is one of the few places in the area with a pool',
  },
  {
    icon: 'calendar',
    title: 'Free cancellation before 17 October',
    text: 'Get a full refund if you change your mind',
  },
];

export const DESCRIPTION = {
  short: [
    'Wake up to Goan sunshine in this romantic 1BHK with its own private jacuzzi on the terrace — made for slow mornings and starry nights.',
    'The apartment pairs warm rattan furniture and leafy plants with modern comforts: fast wifi, a fully equipped kitchen and a cool, quiet bedroom.',
  ],
  long: [
    'Spend your days at Candolim Beach, just a short stroll away, and your evenings soaking in the bubbling hot tub under fairy lights. The open-plan living space flows onto the terrace, so indoor and outdoor living blur together.',
    'Inside you will find a king-size bed with crisp linens, air conditioning in every room, a dedicated workspace for remote work days, and a kitchen stocked with everything you need to cook a proper meal.',
    'The building also offers a shared outdoor pool and a small gym. Your hosts at Mirashya Homes are on call throughout your stay and happy to arrange airport transfers, scooters or local experiences.',
  ],
};

export const SLEEP = [
  { room: 'Bedroom', bed: '1 king bed', icon: 'bed' },
  { room: 'Living room', bed: '1 sofa bed', icon: 'bed' },
];

export const AMENITIES = [
  { icon: 'wifi', name: 'Fast wifi', desc: '– 235 Mbps' },
  { icon: 'kitchen', name: 'Kitchen' },
  { icon: 'car', name: 'Free parking on premises' },
  { icon: 'tv', name: 'TV' },
  { icon: 'snow', name: 'Air conditioning' },
  { icon: 'hottub', name: 'Hot tub' },
  { icon: 'pool', name: 'Pool' },
  { icon: 'washer', name: 'Washer' },
  { icon: 'laptop', name: 'Dedicated workspace' },
  { icon: 'coffee', name: 'Coffee maker' },
];

export const AMENITIES_ALL = [
  ...AMENITIES,
  { icon: 'fan', name: 'Ceiling fan' },
  { icon: 'door', name: 'Private entrance' },
  { icon: 'bed', name: 'Bed linens' },
  { icon: 'sparkle', name: 'Cleaning products' },
  { icon: 'music', name: 'Bluetooth sound system' },
  { icon: 'camera', name: 'Security cameras on property', desc: '– disclosed' },
  { icon: 'shield', name: 'First aid kit' },
  { icon: 'fire', name: 'Fire extinguisher' },
  { icon: 'smoke', name: 'Carbon monoxide alarm', missing: true },
  { icon: 'smoke', name: 'Smoke alarm', missing: true },
];

export const RATING_BARS = { 5: 94, 4: 3, 3: 1, 2: 0, 1: 2 };

export const CATEGORY_SCORES = [
  { icon: 'sparkle', name: 'Cleanliness', value: '5.0' },
  { icon: 'check', name: 'Accuracy', value: '5.0' },
  { icon: 'key', name: 'Check-in', value: '5.0' },
  { icon: 'bubble', name: 'Communication', value: '5.0' },
  { icon: 'map', name: 'Location', value: '4.8' },
  { icon: 'tag', name: 'Value', value: '4.8' },
];

export const TOPIC_CHIPS = [
  'Great location',
  'Clean home',
  'Amazing host',
  'Comfortable bed',
  'Great value',
  'Beautiful views',
  'Fast wifi',
];

export const REVIEWS = [
  {
    name: 'Priya',
    location: 'Mumbai, India',
    date: 'September 2026',
    text: 'The jacuzzi on the terrace is even better than the photos. We spent every evening out there after the beach. The apartment was spotless and check-in was completely seamless — the host shared clear instructions and was just a message away.',
    more: 'The kitchen had everything we needed for breakfast, and the bed was genuinely comfortable. Candolim beach is an easy walk. We will absolutely be back.',
  },
  {
    name: 'Rohan',
    location: 'Bengaluru, India',
    date: 'September 2026',
    text: 'One of the best stays I have had in Goa. The place feels calm and private even though you are minutes from the main Candolim strip. Wifi was fast enough for two days of remote work without a single drop.',
    more: 'The pool in the building is a nice bonus. Small note: the hot tub takes about 20 minutes to heat up fully, so plan ahead. Otherwise flawless.',
  },
  {
    name: 'Ananya',
    location: 'Delhi, India',
    date: 'August 2026',
    text: 'Booked this for our anniversary and it was perfect. Fairy lights on the terrace, a spotless bathroom, and the host even arranged a cake on request. The attention to detail really shows.',
    more: 'Housekeeping came midway through our 4-night stay without us asking. Felt very well looked after.',
  },
  {
    name: 'Kabir',
    location: 'Pune, India',
    date: 'August 2026',
    text: 'Great value for Candolim. The 1BHK is spacious, the AC works well, and the gym — though small — has everything for a quick workout. Loved the rattan furniture on the terrace.',
    more: 'Parking was easy and the building feels secure. Would recommend to couples especially.',
  },
  {
    name: 'Meera',
    location: 'Chennai, India',
    date: 'July 2026',
    text: 'The photos do not do justice to how pretty the terrace is at sunset. Everything was clean, the kitchen was well stocked, and communication with Mirashya Homes was quick and warm.',
    more: 'We used the hot tub every single night. The location is quiet at night but close to good restaurants. Five stars.',
  },
  {
    name: 'Arjun',
    location: 'Hyderabad, India',
    date: 'July 2026',
    text: 'Stayed for a week while working remotely. Dedicated workspace, fast wifi, and a comfortable chair made it easy. Evenings in the jacuzzi were the perfect end to workdays.',
    more: 'The host helped us rent a scooter and suggested great local spots. Felt like a home, not a hotel room.',
  },
];

export const NEARBY = [
  { name: 'Seaside 2BHK with Private Pool', place: 'Baga, Goa', price: 4200, rating: 4.92, img: u('photo-1512917774080-9991f1c4c750', 800) },
  { name: 'Palm Grove Studio', place: 'Anjuna, Goa', price: 2850, rating: 4.85, img: u('photo-1522708323590-d24dbb6b0267', 800) },
  { name: 'Heritage Portuguese Villa', place: 'Candolim, Goa', price: 6100, rating: 4.97, img: u('photo-1600596542815-ffad4c1539a9', 800) },
  { name: 'Cozy 1BHK near Tito\'s Lane', place: 'Baga, Goa', price: 3300, rating: 4.78, img: u('photo-1560448204-e02f11c3d0e2', 800) },
  { name: 'Luxury Penthouse with Terrace', place: 'Vagator, Goa', price: 8900, rating: 4.95, img: u('photo-1600607687939-ce8a6c25118c', 800) },
  { name: 'Garden Cottage', place: 'Assagao, Goa', price: 3750, rating: 4.89, img: u('photo-1600047509807-ba8f99d2cdde', 800) },
  { name: 'Beachfront Apartment', place: 'Morjim, Goa', price: 5400, rating: 4.91, img: u('photo-1507525428034-b723cf961d3e', 800) },
  { name: 'Modern Loft', place: 'Panjim, Goa', price: 2999, rating: 4.72, img: u('photo-1554995207-c18c203602cb', 800) },
];

export const NEIGHBOURHOOD = [
  { icon: 'sun', title: 'Candolim Beach', text: '5 min walk — soft sand and shacks with live music' },
  { icon: 'pin', title: 'Fort Aguada', text: '10 min drive — 17th-century Portuguese fort with sea views' },
  { icon: 'music', title: 'Tito\'s Lane, Baga', text: '12 min drive — nightlife, clubs and late-night food' },
];

export const THINGS_TO_KNOW = [
  {
    title: 'House rules',
    items: [
      { icon: 'clock', text: 'Check-in after 2:00 PM' },
      { icon: 'clock', text: 'Checkout before 11:00 AM' },
      { icon: 'users', text: '3 guests maximum' },
    ],
  },
  {
    title: 'Safety & property',
    items: [
      { icon: 'smoke', text: 'Carbon monoxide alarm not reported' },
      { icon: 'smoke', text: 'Smoke alarm not reported' },
      { icon: 'camera', text: 'Security cameras on property' },
    ],
  },
  {
    title: 'Cancellation policy',
    items: [
      { icon: 'calendar', text: 'Free cancellation before 17 Oct' },
      { icon: 'calendar', text: 'Review the full policy for details' },
    ],
  },
];
