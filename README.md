# Airbnb Listing Page — UI Clone (take-home)

An original, from-scratch recreation of a vacation-rental listing page
("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"), built from visual
reference only. No code, styles, or assets were lifted from the reference
site — every component, icon, and style was written fresh.

Desktop-only by design (the assignment scope excludes mobile).

## Views

| URL | View |
|---|---|
| `/` | Listing page |
| `/?modal=PHOTO_TOUR_SCROLLABLE` | Photo tour (full-page gallery, 43 photos, 9 categories) |
| `/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000+N` | Lightbox (photo N, ←/→/Esc keyboard nav, `N of 43` counter) |

## Run it

Requires Node 18+.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Project layout

```
src/
  App.jsx               # query-param router + modal state
  data/listing.js       # all listing content: 43 photos, copy, reviews, stays
  components/
    icons.jsx           # original hand-drawn SVG icon set
    Header.jsx          # logo, search pill, Become a host, globe, menu
    SectionNav.jsx      # sticky scrollspy bar (Photos/Amenities/Reviews/Location)
    TitleRow.jsx        # title + Share/Save
    HeroGallery.jsx     # 5-photo mosaic + "Show all photos"
    ListingInfo.jsx     # subtitle, guest-favourite band, host row,
                        # highlights, expandable description
    WhereToSleep.jsx    # bedroom / living-room cards
    Amenities.jsx       # two-column list + "Show all 50 amenities"
    Availability.jsx    # Oct–Nov 2026 calendar, range select
    BookingCard.jsx     # sticky card: coupon, price, dates, Reserve
    Reviews.jsx         # 4.95 summary, bars, scores, chips, review cards
    Location.jsx        # stylised SVG map + neighbourhood highlights
    HostCard.jsx        # host profile, stats, co-hosts, message host
    ThingsToKnow.jsx    # cancellation / house rules / safety
    NearbyStays.jsx     # "More stays nearby" carousel (2 pages)
    PhotoTour.jsx       # full-page photo gallery modal
    Lightbox.jsx        # single-photo viewer modal
architecture-diagram.svg / .pdf   # production-scale system design
workflow/               # AI workflow configs: agents, prompts, quality gates
```

## Accessibility

Skip-to-content link, semantic landmarks, aria-labelled icon buttons,
focus-visible styles, keyboard-operable modals (Esc closes, arrows navigate
the lightbox), and `inert` background content while a modal is open.

## Notes

- Photos are hotlinked from Unsplash (`images.unsplash.com`) as stand-ins
  for the listing's own photography; every URL was verified to return 200.
- Fonts: Nunito Sans (rounded geometric sans, close to the reference type).
