# Quality gates applied during this build

## 1. Originality (hard gate — plagiarism safety)
- The reference site's HTML/CSS/JS was never fetched, viewed, or copied.
- All components, styles, icons, and copy were written from scratch against
  the written spec and screenshots.
- Icons are original geometric drawings, not traces of existing icon sets.
- Review text, descriptions, and nearby-stay names are invented for this exercise.
- FAIL = any lifted code or markup. None present.

## 2. Build integrity
- `npm run build` must pass with zero errors.
- No 404 assets; favicon present; Google Fonts loads with system fallbacks.

## 3. Visual fidelity (screenshot loop)
- Headless Chromium screenshots at 1440×900 of: listing top, calendar/reviews
  region, photo tour, lightbox.
- Compared against the 4 reference screenshots for layout, spacing, typography,
  colours (#FF385C / #222222 / #717171 / #DDDDDD / #F7F7F7), radii (8/12px),
  and component placement.
- Iterate until close; record remaining gaps in the final report.

## 4. Behavioural parity
- Gallery hover dim; "Show all photos" → tour; tour category nav scrolls;
  photo click → lightbox with correct index; ←/→/Esc in lightbox;
  back chevron / grid icon return correctly; calendar range select + clear;
  carousel pagination 1/2; expanders (description, reviews, neighbourhood,
  amenities); scrollspy underline follows sections; sticky nav appears on scroll.

## 5. Accessibility
- Skip-to-content link; aria labels on icon-only buttons; dialog roles with
  aria-modal on tour/lightbox; focus moved into modals on open; Esc closes;
  focus-visible outlines; keyboard-operable calendar and carousel; alt text
  on all photos; no keyboard traps.

## 6. Packaging
- Zip contains: source (src/, index.html, configs, package.json),
  architecture-diagram.svg + .pdf, workflow/.
- Excludes: node_modules/, dist/, OS/editor junk.
