# AI-Assisted Development Workflow — Airbnb Listing Clone

This folder documents the agentic workflow actually used to build this submission.
All code was written from scratch; the reference page's source was never fetched,
viewed, or copied (plagiarism safety is quality gate #1).

## How the work was organized

```
build-coordinator (human-directed agent)
├── scaffold        — Vite + React + Tailwind project, theme, icons, data, router
├── listing-part-1  — header, scrollspy nav, title, hero mosaic, info, sleep, amenities
├── listing-part-2  — calendar, booking card, reviews, map, host, things-to-know, carousel
├── shell-modals    — ListingPage assembly, photo-tour modal, lightbox
├── photo-verify    — curl-checked all 44 Unsplash URLs, replaced 4 broken ones
└── qa-screenshots  — build, serve, headless-Chromium screenshots, fidelity fixes
```

Coordinator responsibilities: shared contracts (file layout, data module, icon names,
Tailwind theme tokens, URL routing scheme), plus the architecture diagram and this
workflow folder. Workers built only their assigned files against the written spec —
no worker saw the reference site, only the spec and screenshots.

## Prompt sequence (abridged)

1. Scaffold prompt: "Create Vite + React + Tailwind v3 project at ~/workspace/airbnb-clone
   with theme tokens (brand #FF385C, ink #222222, secondary #717171, hairline #DDDDDD,
   fill #F7F7F7), Nunito Sans, and a query-param router for listing / photo-tour /
   lightbox views."
2. Data prompt: "Write src/data/listing.js: 43 photos across 9 categories, hero set,
   reviews, amenities, nearby stays — all copy original."
3. Icon prompt: "Draw an original SVG icon set (logo, nav, amenity, rating icons) —
   geometric, from scratch, no copied paths."
4. Component prompts (x3): full section-by-section specs with exact copy, layout,
   interaction and accessibility requirements (see agents.yaml).
5. Verification prompt: "curl every Unsplash URL; replace non-200s with verified
   same-subject alternatives."
6. QA prompt: "Build, serve, screenshot at 1440×900, compare with reference
   screenshots, fix fidelity gaps, re-verify."

See `prompts.md` for the fuller record and `agents.yaml` for machine-readable
role definitions.
