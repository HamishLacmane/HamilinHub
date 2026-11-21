# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page site (no framework, no build step, no package.json) — `index.html`, `styles.css`, `palette.js` at the repo root. Deploys to GitHub Pages with zero configuration since there's nothing to build. To preview locally, just open `index.html` in a browser, or serve the folder with any static file server.

## Palette token system

The site's entire visual identity runs through CSS custom properties in `styles.css`. Each `[data-palette="<name>"]` rule block defines exactly 6 core tokens: `--paper`, `--ink`, `--line-hub`, `--line-cards`, `--line-star`, `--line-guide`, `--line-lacmane`. Everything else — raised/sunken surfaces, softened ink, hairline borders — is derived automatically from just `--paper` and `--ink` via `color-mix()` in the single `:root` block beneath the palette definitions. Adding a new palette direction means adding one new `[data-palette="..."]` block with those 6 colours; nothing else needs touching.

`--line-guide` is intentionally pinned to Michelin red (`#BA0B2F` on light-ground palettes, `#E2536B` on dark-ground ones for contrast) in every single palette block — this is not a bug or an oversight to "fix" by giving Guide a palette-matched colour. Hamilin Guide is a deliberate Michelin Guide parody and keeps Michelin's colour regardless of which direction the rest of the family uses.

The active palette is chosen by a `data-palette` attribute on `<html>`, set three ways in priority order: a saved `localStorage["hamilin-palette"]` value, then `prefers-color-scheme` (dark → `blueprint`, light → `enamel`), then a hardcoded `enamel` fallback baked into the HTML for no-JS resilience. The detection runs synchronously in an inline `<script>` in `<head>` specifically to avoid a flash of the wrong palette before first paint — `palette.js` (loaded at the end of `<body>`) only wires up the `<select>` dropdown's change handler and syncs its displayed value to whatever the head script already picked.

## Tile content

Cards and Lacmane tiles are intentionally unlinked placeholders (`<div class="tile tile--soon">`, not `<a>`) — don't add `href`s to them without being asked. Star and Guide link to their live `.com` domains. Tile descriptions are deliberately left as empty `<!-- TODO(Hamish): description --> ` comments, and the hero `<h1>` holds literal "placeholder text" plus a `<!-- TODO(Hamish): headline -->` marker — do not write copy for any of these; Hamish writes his own site copy.

## Licence

No LICENSE file by design — all rights reserved by default. Don't add an open-source license without being explicitly asked to change that.

## Project log

`PROJECT_LOG.md` in this folder is an **append-only** record of key changes and things Hamish has requested (format: `- YYYY-MM-DD — [change|request|decision|bug|todo] text`, newest at the bottom).

**It MUST stay append-only. Hamish's explicit, standing rule:** only ever add new lines at the bottom (e.g. `>>`). Never rewrite, reorder, reflow, summarise, de-duplicate, "tidy" or delete existing lines — not even to fix a typo or a wrong fact; add a new line that says what was wrong instead. When rewriting the file with a whole-file edit would be easier, don't: append.

Add a line after any key change or request, in the repo the change lives in (data batches go in `hamilin-star-db/PROJECT_LOG.md`). **No `Co-Authored-By: Claude` trailer on commits here** — Hamish's standing rule.

## Git workflow

**Before any push: do the "Pre-push visual check" in `AGENTS.md`** (every page at phone, tablet, laptop and desktop sizes; no horizontal scroll, no console errors, text and nav wrap sensibly, screenshots looked at). Do not push if it fails.
