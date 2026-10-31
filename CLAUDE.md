# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An English-language checklist app for Red Dead Redemption 2 (story mode). Plain HTML/CSS/JS with no build step, no dependencies and no package.json. It must keep working when `index.html` is opened directly from disk (`file://`): ES modules are therefore not an option. Everything is classic `<script>` tags that share one global scope.

All text, code comments and docs are in English. In-game names (weapons, animals, missions, challenges, items) must match the game's own English wording exactly; check them against the sources cited in each data file. Factual content comes from online guides, and every list cites its sources in its data file.

## Commands

- **Run:** open `index.html` in a browser. Routes are hash-based: `index.html#/weapons`, `#/legendary`, … (`#/` is the overview).
- **Test:** `node tests/smoke.mjs [path-to-chrome]`. This starts headless Chrome or Edge with a temporary profile and drives the app over the DevTools protocol. It is a single end-to-end script; there is no per-test runner. To check one thing, temporarily comment out other blocks or add a `check(...)`.
  - It seeds a stored state and checks that every seeded key exists on its page, so renamed ids are caught.
  - It verifies, for every route, that there are no JS errors and that there are at least the expected number of checkboxes (`EXPECT` map).
  - It verifies persistence after reload, reset per page, cross-list links, the grouped nav, the day/night toggle and no horizontal scroll at 375px.
- There is no linter or formatter. `node --check <file>` catches syntax errors in a data file.

## Architecture

`index.html` is only a shell (`<nav>`, `<main id="view">`). It loads `assets/app.js`, then every `data/*.js`, then calls `RDR.start()`. Data files are named after their list id (`data/weapons.js` → `#/weapons`); `data/animals.js` holds shared animal data and `data/home.js` the overview text. Script order among data files does not matter: anything that depends on another list is computed lazily (getters/functions), not at load time.

### `assets/app.js` – the `RDR` core

The format of a list definition is documented in the header comment of this file; read it before adding or changing a list.

- **`RDR.list({...})` registers one list.** It includes id/route, title, group, order, tips, sources, a filter label, `sections`, `metrics` and `meters`, plus an optional `refresh(view)` hook.
- **`RDR.setHome({...})`** supplies the overview page text (`data/home.js`).
- **Six section renderers** do all rendering. `checklist`, `cards`, `table` and `counters` are data-driven; `html` holds static HTML; `custom` has its own `render`/`refresh` and is only used by satchels/camp for their per-item and per-animal double views.
- **Rendering cycle:** a list page is rendered once per route change. After every change, `refresh()` syncs checkboxes, statuses and meters in place, without re-rendering. Events are delegated once on `document`.
- **State:** one localStorage key, `rdr2` = `{ v: 3, checks: {key: true|number}, prefs: {key: true|string} }`. Older keys (`rdr2-v2` and the per-list `rdr2-*-v1` keys from the Dutch version) are deliberately ignored.

### Storage keys are stable ids, and that matters

- **Key format:** keys are generated as `<listId>.<groupOrSectionId>.<itemId>[.<checkId>]`. The item id is the explicit `id`, or else `RDR.slug(name)`.
- **Renaming an item without an explicit `id` changes its key and orphans saved progress.** When renaming, pin the old slug as `id`.
- **Duplicates:** keys must be unique within a list. Duplicates are reported with `console.error`, and the smoke test then fails.
- **Shared items use explicit absolute keys** (`key:` on an item or check) instead of copying state.
  - Trinkets reuses `legendary.animals.<id>.fence` and `legendary.extras.<id>`.
  - Explorer reuses `challenges.explorer.*`.
  - Satchels and camp share `satchels.leather`.
- **Reset** deletes only the keys rendered on the current page, so a shared key is cleared from either page.

### Styling

- **Theme:** `assets/style.css` styles the app as an 1899 newspaper/poster. All colours are CSS variables, with a light set and a dark set ("leather & lamplight").
- **Day/night:** the toggle stores pref `ui.theme` (`"light"`/`"dark"`), which `app.js` applies as `data-theme` on `<html>`. Without that pref the theme follows `prefers-color-scheme`.
- **Fonts:** Rye (display) and IM Fell English (body) are bundled in `assets/fonts/` (SIL OFL, licences included) rather than loaded from a CDN, so the app looks the same offline and from `file://`.
- **Numbers:** they use Georgia (`--nums`) because IM Fell has no tabular figures.

### Cross-list links go through named metrics

- **Metrics:** each list exposes `metrics: { name: () => ({ have, total }) }`. Other code reads them with `RDR.metric("listId.name")`. Helpers for writing metrics: `RDR.ratio(keys)`, `RDR.capped(m, max)`, `RDR.keysOf/itemsOf/groupsOf/part`.
- **Meters:** `meters` picks which metrics appear on the page and the overview card.
- **100% page:** in `data/hundred.js`, the `AUTO` map links each 100% item id to a metric (e.g. `poi: "poi.counted"`). Auto items are read-only and not stored.

## Adding a list

1. **Create `data/<id>.js`** with an IIFE wrapper `(() => { ... })();`. Top-level `const`s would otherwise collide across files in the shared global scope. Inside it, call `RDR.list({...})` with a unique `id`, an `order` (its place within its group) and a `group` (one of `GROUPS` in `assets/app.js`; the nav and overview are grouped by it, and an unknown group lands under "Other", which the smoke test rejects).
2. **Add `<script src="data/<id>.js">`** to `index.html`.
3. **If it counts towards 100%,** add a metric and link it in the `AUTO` map in `data/hundred.js`. Also set the item's link there to `#/<id>`.
4. **Update `tests/smoke.mjs`:** add the route to `EXPECT`, and update the route count and overview card count.
5. **Link related pages** with `href="#/<id>"` in tips, notes or `link: [href, label]` fields.
