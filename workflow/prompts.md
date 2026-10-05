# Prompt sequence (honest record)

## 1. Scaffold
> Create a Vite + React + Tailwind CSS v3 project at ~/workspace/airbnb-clone.
> Theme tokens: brand #FF385C, ink #222222, secondary #717171, hairline #DDDDDD,
> fill #F7F7F7; max content width 1120px; Nunito Sans from Google Fonts.
> Build src/App.jsx as a query-param router: no params = listing page,
> ?modal=PHOTO_TOUR_SCROLLABLE = photo tour overlay, plus &modalItem=1000+N =
> lightbox for photo N. Include a skip-to-content link and :focus-visible styles.

## 2. Data module
> Write src/data/listing.js with all listing content (original copy only):
> 43 photos across 9 categories (Living room 1/2, Full kitchen, Bedroom,
> Full bathroom, Gym, Exterior, Pool, Additional photos) as images.unsplash.com
> URLs; 5-photo hero set; guest-favourite copy; host info (Mirashya Homes,
> 1,463 reviews, 4.68); highlights; description short/long; sleep cards;
> amenities (10 + extended list with struck-through CO/smoke alarms); rating
> bars; 7 category scores; topic chips; 6 original reviews; 8 nearby stays;
> neighbourhood items; things-to-know columns.

## 3. Icon set
> Draw an original SVG icon set in src/components/icons.jsx (logo swirl, search,
> globe, menu, share, heart, star, chevrons, laurel wreath, key, medal, pin,
> calendar, keyboard, wifi, tv, snow, fan, pool, gym, kitchen, hot tub, house,
> shield, message, award, bed, door, grid, flag, plus/minus, check, bath,
> washer, coffee, laptop, sparkle, smoke alarm, first aid, fire, car, music,
> camera, tag, map, bubble, trophy, sun, clock, users) plus an <Icon name/>
> lookup. All paths drawn from scratch — never trace or copy existing icons.

## 4a. Listing part 1
> Build Header, SectionNav (sticky scrollspy with IntersectionObserver),
> TitleRow, HeroGallery (5-photo mosaic + "Show all photos"), ListingInfo
> (subtitle, guest-favourite band, host row, 3 highlights, description with
> "Show more"), WhereToSleep (2 cards), Amenities (2-col, struck-through
> alarms, "Show all 50 amenities" expander). Exact copy from spec; hover
> states; keyboard-operable; aria labels.

## 4b. Listing part 2
> Build Availability (Oct–Nov 2026 calendar, default range 18–23 Oct, black
> endpoints + light band, clear dates, keyboard support), BookingCard (sticky:
> coupon banner + Claim, ₹28,499 for 5 nights, check-in/out grid, guests,
> free-cancellation note, red Reserve, "You won't be charged yet", report
> listing), Reviews (4.95 laurel header, rating bars, 7 category scores with
> icons, topic chips, 6 cards with show-more, "Show all 19 reviews"),
> Location (stylized SVG map: pale-green land, blue water left, street grid,
> black pin, zoom controls, neighbourhood show-more), HostCard (profile,
> 1,463 reviews, 4.68 rating, co-hosts, response stats, Message host, payment
> note), ThingsToKnow (3 columns), NearbyStays (carousel, 5/page, 1/2 pages).

## 4c. Shell + modals
> Assemble ListingPage (2-col grid with sticky booking card; sections with ids
> photos/amenities/reviews/location; page ends after "More stays nearby" —
> no footer). Build PhotoTour (?modal=PHOTO_TOUR_SCROLLABLE: top bar, 9-category
> thumbnail nav, sticky category headers, large-first-then-2-col grid, click →
> lightbox) and Lightbox (&modalItem=1000+N: grid icon, caption, "N of 43",
> close, circular chevrons, ←/→/Esc keyboard, instant changes).

## 5. Photo verification
> curl -I every Unsplash URL built from the data file; replace any non-200
> with a verified same-subject alternative, keeping counts (43 + 5 hero).

## 6. Visual QA loop
> npm run build; serve dist; screenshot listing, photo tour and lightbox at
> 1440×900 with headless Chromium; compare side-by-side with the reference
> screenshots; fix spacing/typography/interaction gaps; re-screenshot until
> close. Also keyboard-walkthrough (Tab, Esc, arrows) and a no-console-error
> check.

## 7. Packaging
> Write architecture-diagram.svg (hand-drawn boxes-and-arrows: CDN/edge,
> gateway, microservices, Postgres/replicas, Redis, S3, Elasticsearch,
> Kafka, warehouse, K8s, CI/CD, observability) and convert to PDF.
> Zip ~/workspace/airbnb-clone (excluding node_modules and dist) to
> ~/workspace/airbnb-clone-submission.zip.
