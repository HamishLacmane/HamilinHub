# Hamilin Hub

The interchange for the Hamilin brand family — a static, single-page site linking out to Hamilin Cards, Hamilin Star, Hamilin Guide, and Hamish Lacmane's portfolio. Built plain (no framework, no build step) so it deploys to GitHub Pages with zero configuration.

## Palette system

The site ships with 8 selectable colour directions (a dropdown in the header lets a visitor switch live; the choice persists via `localStorage`). Every direction shares the same layout and type system (Bahnschrift / Georgia / Consolas) and defines its own `--paper`, `--ink`, and four `--line-*` accent tokens in `styles.css`. Secondary tokens (raised/sunken surfaces, soft ink, hairlines) are derived automatically from `--paper`/`--ink` via `color-mix()`, so a new direction only needs its 6 core colours defined.

`--line-guide` is pinned to Michelin's red (`#BA0B2F`, or a brightened `#E2536B` on dark-ground directions) in every palette — Hamilin Guide is a deliberate Michelin Guide parody and keeps that colour regardless of which direction the rest of the family uses.

## Status

- Cards and Lacmane tiles are placeholders (not linked yet).
- Star and Guide link to their live `.com` domains.
- Tile descriptions are intentionally left blank (see `index.html`) — Hamish is writing those himself.

## Licence

© 2026 Hamish Lacmane. All rights reserved. This code is provided for reference only and may not be copied, reused, or redistributed without permission.
