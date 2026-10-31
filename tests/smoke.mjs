// Regression test: node tests/smoke.mjs [path-to-chrome]
// Starts headless Chrome, opens index.html and drives the app over the Chrome DevTools protocol.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const chrome = process.argv[2] || [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
].find(p => fs.existsSync(p));
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "rdr2-smoke-"));
const port = 9400 + Math.floor(Math.random() * 400);
const proc = spawn(chrome, ["--headless=new", "--disable-gpu", "--no-first-run", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"]);
const sleep = ms => new Promise(r => setTimeout(r, ms));
// Always shut Chrome down, even if the test crashes halfway.
const quit = code => { try { proc.kill(); } catch {} process.exit(code); };
process.on("uncaughtException", e => { console.error(e); quit(3); });
process.on("unhandledRejection", e => { console.error(e); quit(3); });

let ws, id = 0;
const pending = {}, errors = [];
for (let i = 0; i < 60 && !ws; i++) {
  try {
    const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === "page");
    // Wait for 'open' right away, or the event may already have passed.
    if (page) { ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r => (ws.onopen = r)); break; }
  } catch {}
  await sleep(200);
}
if (!ws) { console.error("Could not connect to Chrome"); proc.kill(); process.exit(2); }
ws.onmessage = m => {
  const d = JSON.parse(m.data);
  if (d.id && pending[d.id]) { pending[d.id](d); delete pending[d.id]; }
  if (d.method === "Runtime.exceptionThrown") errors.push(d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text);
  if (d.method === "Runtime.consoleAPICalled" && d.params.type === "error") errors.push(d.params.args.map(a => a.value).join(" "));
};
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => {
  const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true });
  if (r.result?.exceptionDetails) errors.push("EVAL: " + (r.result.exceptionDetails.exception?.description || expr));
  return r.result?.result?.value;
};
await send("Runtime.enable"); await send("Page.enable");
const url = "file:///" + root.split(path.sep).join("/") + "/index.html";
// A unique query forces a real reload (changing only the hash does not reload).
let loads = 0;
// Wait until the page has loaded and the app has built the navigation (fixed pauses are too short on OneDrive).
const ready = async () => {
  for (let i = 0; i < 100; i++) {
    if (await ev(`document.readyState === "complete" && document.querySelectorAll("nav a").length > 0`)) return;
    await sleep(100);
  }
  throw new Error("Page did not load");
};
const go = async (route = "") => { await send("Page.navigate", { url: `${url}?r=${++loads}#/${route}` }); await sleep(100); await ready(); };
const hash = async route => { await ev(`location.hash = "#/${route}"`); await sleep(150); };
let failed = 0;
const check = (label, cond, extra = "") => { if (!cond) failed++; console.log(`${cond ? "  OK  " : "  FAIL"} ${label}${extra ? ` (${extra})` : ""}`); };
const meters = () => ev(`[...document.querySelectorAll('#meters .num')].map(e => e.textContent).join(" | ")`);
const n = sel => ev(`document.querySelectorAll(${JSON.stringify(sel)}).length`);
const checked = key => ev(`!!document.querySelector('[data-key="${key}"]')?.checked`);
const click = sel => ev(`document.querySelector(${JSON.stringify(sel)}).click()`);

// ---------- 1. Seeded state ----------
console.log("Seed");
// Progress as the app stores it; the old Dutch-era "rdr2-v2" key must be ignored.
const SEED = {
  "weapons.revolvers.flacos-revolver": true, "exotics.r2.heron": 7, "exotics.r1.done": true, "exotics.prep.start": true,
  "legendary.animals.bear.kill": true, "legendary.animals.bear.fence": true, "legendary.trapper.bearhat": true, "legendary.extras.crow": true,
  "trinkets.ingredients.quartz-chunk": true, "satchels.leather": true, "satchels.pelt:valuables:deer": true, "camp.craft:bones": true,
  "collectibles.graves.davey-callander": true, "collectibles.bones.done": true, "cigcards.horses.done": true, "cigcards.gems.hattie-langtry": true,
  "treasure.jackhall.treasure-found-at-ocreaghs-run": true, "challenges.explorer.find-the-first-treasure-map": true,
  "challenges.bandit.hold-up-5-townsfolk": true, "recipes.tonics.potent-health-cure": true, "recipes.meat.tender-pork-loin": true,
  "strangers.c2.noblest": true, "bounties.valentine.swan": true, "hideouts.hideouts.sixpoint": true, "hideouts.gangs.raiders": true,
  "horses.breeds.arabian": true, "horses.bond.2": true, "horses.wild.morgan": true, "horses.special.buell": true, "plants.herbs.yarrow": true,
  "plants.orchids.ghost": true, "gold.fixed.statues": true, "fish.fish.legendary-bluegill": true, "fish.fish.done": true, "encounters.town.beggar": true,
  "hundred.missions-and-events.story": 1, "hundred.missions-and-events.strangers": 7, "hundred.miscellaneous.bath": 1
};
await go();
await ev(`localStorage.clear();
  localStorage.setItem("rdr2-v2", JSON.stringify({ v: 2, checks: { "weapons.revolvers.cattleman-revolver": true }, prefs: {} }));
  localStorage.setItem("rdr2", JSON.stringify({ v: 3, checks: ${JSON.stringify(SEED)},
    prefs: { "weapons.hide": true, "legendary.trap": true, "explorer.hide": true } }));`);
// Every seeded key must exist on its own page (automatic 100% parts are not rendered as inputs).
const missing = [];
for (const list of [...new Set(Object.keys(SEED).map(k => k.split(".")[0]))]) {
  await go(list);
  for (const k of Object.keys(SEED).filter(k => k.startsWith(list + ".") && k !== "hundred.missions-and-events.strangers"))
    if (!(await n(`[data-key="${k}"], [data-count="${k}"]`))) missing.push(k);
}
if (errors.length) console.log("  errors:", errors);
check("every seeded key exists in the app", missing.length === 0, missing.join(", "));
await go("weapons");
check("old rdr2-v2 storage is ignored", !(await checked("weapons.revolvers.cattleman-revolver")));

// ---------- 2. Every route ----------
console.log("Routes");
const EXPECT = { // minimum number of checkboxes (data-key) per route
  satchels: 36, camp: 46, legendary: 88, trinkets: 30, horses: 41, weapons: 65, exotics: 6, plants: 43, recipes: 55,
  collectibles: 72, fish: 20, poi: 50, shacks: 19, strangers: 26, bounties: 14, hideouts: 15, encounters: 113, challenges: 90,
  cigcards: 156, treasure: 30, explorer: 10, gold: 4, hundred: 0
};
const routes = await ev(`[...document.querySelectorAll("nav a")].map(a => a.getAttribute("href").slice(2))`);
check("navigation: overview + 23 lists", routes.length === 24, routes.length);
for (const r of routes) {
  errors.length = 0;
  await hash(r);
  const keys = await n("[data-key]");
  const title = await ev("document.querySelector('h1').textContent");
  const current = await ev(`document.querySelector('nav a[aria-current]')?.getAttribute("href")`);
  const ok = errors.length === 0 && current === `#/${r}` && (r === "" || keys >= EXPECT[r]);
  check(`#/${r || ""} ${title}`, ok, `${keys} checkboxes${errors.length ? "; " + errors.join("; ") : ""}`);
}

// ---------- 3. Interaction, storage and cross-list links ----------
console.log("Interaction");
await go("weapons");
check("seed visible: Flaco's Revolver checked", await checked("weapons.revolvers.flacos-revolver"));
check("filter weapons.hide on and applied", await ev(`document.querySelector('[data-pref="weapons.hide"]').checked && document.querySelector('.sec.hide-checked') !== null`));
await click('[data-key="weapons.revolvers.cattleman-revolver"]');
await go("weapons");
check("checkbox persists after reload", await checked("weapons.revolvers.cattleman-revolver"));

await go("exotics");
await click('button[data-count="exotics.r2.heron"][data-step="1"]');
await go("exotics");
check("counter persists after reload (heron 7 + 1 = 8)", (await ev(`document.querySelector('[data-n="exotics.r2.heron"]').textContent`)) === "8");
check("turned-in request counts as complete", (await ev(`document.querySelector('[data-n="exotics.r1.ladynight"]').textContent`)) === "15");

await go("trinkets");
check("trinkets: Bear Claw crafted (shared with legendary)", await checked("legendary.animals.bear.fence"));
check("trinkets: part 'owned' for Bear Claw", (await ev(`document.querySelector('[data-part="bear"]').textContent`)).includes("owned"));
await ev(`window.confirm = () => true`);
await click("#reset");
await go("legendary");
check("trinkets reset keeps 'killed'", await checked("legendary.animals.bear.kill"));
check("trinkets reset clears 'crafted'", !(await checked("legendary.animals.bear.fence")));
check("trapper filter hides items you cannot buy", (await ev(`[...document.querySelectorAll('[data-row]')].filter(r => !r.hidden).length`)) < 34);

await go("hundred");
const auto = id => ev(`document.querySelector('[data-auto="hundred.${id}"]')?.textContent`);
check("100%: strangers automatic (1, stored 7 ignored)", (await auto("missions-and-events.strangers")) === "1");
check("100%: graves automatic 1", (await auto("collectibles.graves")) === "1");
check("100%: cards automatic 13", (await auto("collectibles.cards")) === "13");
check("100%: bath checkbox from seed", await ev(`document.getElementById("c-hundred-miscellaneous-bath").checked`));

check("100%: points of interest still 0", (await auto("collectibles.poi")) === "0");
await go("poi");
await click('[data-key="poi.ambarino.mysterious-hill-home"]');
await go("hundred");
check("100%: points of interest automatic 1 after check", (await auto("collectibles.poi")) === "1");

await go("shacks");
for (const s of ["dormin-crest", "snowfield", "dodds-bluff", "clawsons-rest", "hanis-bethel", "lenora-view"])
  await click(`[data-key="shacks.shacks.${s}"]`);
await go("hundred");
check("100%: shacks automatic 5 (6 visited, max 5)", (await auto("miscellaneous.shacks")) === "5");

await go("explorer");
check("explorer: rank 1 reached (from challenges)", await checked("challenges.explorer.find-the-first-treasure-map"));
check("explorer: rank 4 treasure found (from treasure maps)", (await ev(`document.querySelector('[data-card="rank-4"] .status').textContent`)) === "treasure found");

await go("gold");
check("gold: Jack Hall (2) + Strange Statues (3) = 5 bars", (await meters()).includes("5 / 28"), await meters());

await go("plants");
check("plants: orchid shows Exotics count", (await ev(`document.querySelector('[data-exotic="r1.ladynight"]').textContent`)) === "15");

await go("");
check("overview: 23 list cards", (await n("[data-list]")) === 23);

// Grouped navigation and the day/night button.
check("nav: every list in a group", (await n(".toc-group a")) === 23, await n(".toc-group a"));
check("nav: no 'Other' group", !(await ev(`[...document.querySelectorAll(".toc-label")].some(l => l.textContent === "Other")`)));
const theme = () => ev(`document.documentElement.dataset.theme || ""`);
await click("#theme");
const picked = await theme();
check("theme button sets data-theme", picked === "dark" || picked === "light", picked);
await go("");
check("theme persists after reload", (await theme()) === picked, await theme());
await click("#theme");
check("theme button switches back", (await theme()) !== picked && (await theme()) !== "", await theme());

// ---------- 4. Phone width ----------
console.log("Layout 375px");
await send("Emulation.setDeviceMetricsOverride", { width: 375, height: 800, deviceScaleFactor: 1, mobile: true });
const wide = [];
for (const r of routes) { await go(r); if ((await ev("document.documentElement.scrollWidth")) > 375) wide.push(r || "overview"); }
check("no horizontal scroll", wide.length === 0, wide.join(", "));
check("nav collapsed on phone", !(await ev(`document.querySelector(".toc").open`)));

ws.close();
console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
quit(failed ? 1 : 0);
