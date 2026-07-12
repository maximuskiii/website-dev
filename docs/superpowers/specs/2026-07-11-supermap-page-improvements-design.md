# SuperMap Page Improvements — Design

**Date:** 2026-07-11
**Files:** `supermap.md`, `_data/navigation.yml`

## Goal

Improve the existing (but hidden) `supermap.md` page: fill in real content from
the published RSS paper, add the standard publication buttons, and publish the
page into the site navigation.

Source of truth for content:
https://roboticsconference.org/program/papers/52/ (RSS 2026, "SuperMap: A
Spatio-Temporal SLAM System for Visual-Language Navigation").

## Changes

### 1. Author block (`supermap.md`)
Replace the single `Carnegie Mellon University — AirLab` author line with the
real author list, followed by the shared affiliation line:

> Shibo Zhao, Guofei Chen, Honghao Zhu, Zhiheng Li, Changwei Yao, Nader Zantout,
> Seungchan Kim, Wenshan Wang, Ji Zhang, Sebastian Scherer
> Carnegie Mellon University — AirLab

Authors as plain text (no profile links — none provided). RSS page lists no
per-author affiliations, so keep the single shared affiliation line.

### 2. Publication link buttons (`supermap.md`)
- **Code** — keep `https://github.com/gfchen01/semantic_mapping`
- **Paper** — point to real RSS PDF `https://www.roboticsproceedings.org/rss22/p052.pdf` (new tab)
- **arXiv** — new button, `#` placeholder (link TBD)
- **Video** — new button, `#` placeholder (link TBD)
- **Citation** — keep (jumps to `#bibtex`)

### 3. Citation BibTeX (`supermap.md`)
Replace `author = {Anonymous}` / `supermap2026` with real authors and venue:

```
@inproceedings{zhao2026supermap,
  title     = {SuperMap: A Spatio-Temporal SLAM System for Visual-Language Navigation},
  author    = {Zhao, Shibo and Chen, Guofei and Zhu, Honghao and Li, Zhiheng and Yao, Changwei and Zantout, Nader and Kim, Seungchan and Wang, Wenshan and Zhang, Ji and Scherer, Sebastian},
  booktitle = {Proceedings of Robotics: Science and Systems (RSS)},
  year      = {2026}
}
```

### 4. Navigation (`_data/navigation.yml`)
Add SuperMap under the **Papers** dropdown, alongside TartanIMU / SuperLoc /
TP-TIO: `- name: SuperMap` / `link: /supermap`. Remove the old commented-out
top-level `# - name: SuperMap` line.

### 5. Content kept
- Abstract, Contributions, System Architecture, Results text/tables kept as-is
  (accurate; no invented edits).

## Visual redesign — minimalist (HumanEgo style)

Reference: https://humanego-ai.github.io/ — a minimalist academic project page.
Full visual restyle of `supermap.md` toward that aesthetic.

**Design tokens / global style**
- Background pure white `#fff`; body text `#333`; alternating sections on
  `#fafafa` separated by 1px `#eee` hairlines.
- Remove ALL card shadows, rounded badges, gradients, colored section cards.
- Accent blue `#1a6fc4` reserved for links, the "Ours" table row, and the active
  TOC item only.
- Keep Google Sans / Noto Sans fonts.
- Replace the floating TOC card with a HumanEgo-style bracketed anchor row:
  `[ Abstract ] [ Method ] [ Demo ] [ Results ] [ BibTeX ]`, thin weight, hover
  turns blue.

**Publication links** — restyle from heavy dark rounded buttons to minimal
text anchors with small icons (Code / Paper / arXiv / Video / BibTeX).

**Page section order (implemented)**
1. Title + authors + minimal link row. Theme hero banner removed via
   `hide_hero: true` (was a heavy red gradient; HumanEgo has no such hero).
2. **Overview (NEW)** — self-hosted teaser video `video1_v4.mp4` (light-grey
   background section to anchor it), poster = `campus_segments.png`.
3. **Insights (NEW)** — 3 takeaways distilled from the paper: consistency-driven
   mapping engine; queryable 4D scene graph for VLMs; fully-online onboard
   real-time open-source baseline.
4. **Scene Demonstrations (NEW)** — 7 self-hosted scene-demo videos in a grid,
   `preload="none"` (fast page load), hover-to-autoplay (muted), first-frame
   JPG posters extracted with ffmpeg under `img/supermap/posters/`.
5. Abstract — plain paragraphs, no card.
6. Contributions — hairline numbered list instead of card grid.
7. System Architecture — minimal numbered 3-layer pipeline, no shadows.
8. Interactive 3D Map Explorer — KEPT as-is functionally (three.js viewer +
   Rerun replay).
9. Results — flat hairline tables (no shadow/rounding), "Ours" row light-blue.
10. Citation — plain, no card.

**Bracketed anchor nav** — becomes sticky (pinned to top with blur backdrop)
once the title scrolls out of view; hidden on narrow mobile.

**Videos** — 8 small clips (34–83 MB) copied into `video/supermap/`; two
multi-GB clips skipped (hosted on YouTube instead). Committed directly to git
(repo has no LFS; existing videos are committed the same way).

**FAQ** — not included (user opted out).

## Local build note
The committed `Gemfile.lock` targets system Ruby 3.2 (nokogiri 1.13.6) for
GitHub Pages CI, but this machine's system Ruby lacks dev headers. Local preview
uses conda Ruby 4.0 + a gcc shim + a Ruby-4.0 lock (`Gemfile.lock.ruby40`) via
the gitignored `.local-build.sh` helper. The committed lock is left untouched.

## Round 2 — HumanEgo alignment (user-confirmed 2026-07-12)

Decided via visual-companion brainstorm, all confirmed by user:

1. **Navbar**: page-scoped CSS override turns the global red navbar burnt-orange
   `#C45A0E` on this page only (other pages keep red).
2. **Accent color**: burnt orange `#C45A0E` everywhere (was blue `#1a6fc4`);
   hover dark-orange `#9C3F00`. Applies to: "Map" in the title, section
   headings, links, TOC highlight, Ours table row, pipeline numbers, replay
   badges.
3. **Layout**: narrow centered text column (~760px, paper-like); wide media
   (Overview video, scene grid, 3D viewer, wide tables) break out to ~1100px.
4. **Section headings**: HumanEgo style — orange, left-aligned, short orange
   underline bar.
5. **Section order (demo-first)**: Title → pill buttons → quote → Overview
   video → Scene Demonstrations → Interactive 3D Map → Insights → Abstract →
   Contributions → Architecture → Results → BibTeX.
6. **Link buttons**: dark-grey rounded pills (`#363636`, white text) like
   HumanEgo/Nerfies — replaces minimal text links.
7. **Quote block** (new, after buttons): "Spatial intelligence is not merely
   seeing the world—it is understanding how it is structured, remembering how
   it changes, and knowing how to act within it." — SLAM Handbook. Large
   decorative quotes, orange attribution.
8. **TOC**: left-fixed mini sidebar (HumanEgo style), current section orange,
   hidden under 1400px. Replaces bracketed top row + sticky bar.
9. **Scene gallery**: 2 columns (user request), orange labels. Videos
   **autoplay muted** when scrolled into view, pause when out of view
   (IntersectionObserver) — user request, replaces hover-to-play.
10. **3D viewer replay cards**: 3 columns (user request), orange badges.
    Viewer functionality unchanged. Cards keep static thumbnails — no video
    asset exists for them (replays are Rerun .rrd streams, click-to-play).

## Out of scope / pending
- arXiv + Video header buttons remain `#` placeholders (need real links).
- Deploy / commit pending user confirmation.
