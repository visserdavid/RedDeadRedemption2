// Regressietest: node tests/smoke.mjs [pad-naar-chrome]
// Start headless Chrome, opent index.html en stuurt de app via het Chrome DevTools-protocol.
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
// Chrome altijd afsluiten, ook als de test halverwege crasht.
const quit = code => { try { proc.kill(); } catch {} process.exit(code); };
process.on("uncaughtException", e => { console.error(e); quit(3); });
process.on("unhandledRejection", e => { console.error(e); quit(3); });

let ws, id = 0;
const pending = {}, errors = [];
for (let i = 0; i < 60 && !ws; i++) {
  try {
    const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === "page");
    // Direct op 'open' wachten, anders kan het event al voorbij zijn.
    if (page) { ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r => (ws.onopen = r)); break; }
  } catch {}
  await sleep(200);
}
if (!ws) { console.error("Kon geen verbinding maken met Chrome"); proc.kill(); process.exit(2); }
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
// Een unieke query forceert een echte herlaadactie (alleen de hash wijzigen herlaadt niet).
let loads = 0;
// Wacht tot de pagina geladen is en de app de navigatie heeft opgebouwd (vaste pauzes zijn op OneDrive te kort).
const ready = async () => {
  for (let i = 0; i < 100; i++) {
    if (await ev(`document.readyState === "complete" && document.querySelectorAll("nav a").length > 0`)) return;
    await sleep(100);
  }
  throw new Error("Pagina werd niet geladen");
};
const go = async (route = "") => { await send("Page.navigate", { url: `${url}?r=${++loads}#/${route}` }); await sleep(100); await ready(); };
const hash = async route => { await ev(`location.hash = "#/${route}"`); await sleep(150); };
let failed = 0;
const check = (label, cond, extra = "") => { if (!cond) failed++; console.log(`${cond ? "  OK  " : "  FAIL"} ${label}${extra ? ` (${extra})` : ""}`); };
const meters = () => ev(`[...document.querySelectorAll('#meters .num')].map(e => e.textContent).join(" | ")`);
const n = sel => ev(`document.querySelectorAll(${JSON.stringify(sel)}).length`);
const checked = key => ev(`!!document.querySelector('[data-key="${key}"]')?.checked`);
const click = sel => ev(`document.querySelector(${JSON.stringify(sel)}).click()`);

// ---------- 1. Migratie van de oude opslag ----------
console.log("Migratie");
await go();
await ev(`localStorage.clear();
  const s = (k, v) => localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v));
  s("rdr2-weapons-v1", {"revolvers:6": true});
  s("rdr2-weapons-v1:hide", "1");
  s("rdr2-exotics-v1", {"n:heron": 7, "done:r1": true, "start": true});
  s("rdr2-legendary-v1", {"kill:bear": true, "fence:bear": true, "trap:bearhat": true, "extra:crow": true, "ing:quartz-chunk": true});
  s("rdr2-legendary-v1:trap", "1");
  s("rdr2-satchel-pelts-v1", {"leather": true, "pelt:valuables:deer": true});
  s("rdr2-camp-decor-v1", {"craft:bones": true});
  s("rdr2-collectibles-v1", {"graves:2": true, "bones:finish": true});
  s("rdr2-cigcards-v1", {"sent:horses": true, "gems:3": true});
  s("rdr2-treasure-v1", {"jackhall:4": true});
  s("rdr2-challenges-v1", {"explorer:1": true, "bandit:1": true});
  s("rdr2-challenges-v1:explorer-hide", "1");
  s("rdr2-recipes-v1", {"tonics:2": true, "meat:3": true});
  s("rdr2-strangers-v1", {"s:noblest": true});
  s("rdr2-bounties-v1", {"b:swan": true});
  s("rdr2-hideouts-v1", {"h:sixpoint": true, "g:raiders": true});
  s("rdr2-horses-v1", {"breed:arabian": true, "bond:2": true, "wild:morgan": true, "own:buell": true});
  s("rdr2-plants-v1", {"herb:yarrow": true, "orchid:ghost": true});
  s("rdr2-gold-v1", {"f:statues": true});
  s("rdr2-fish-v1", {"fish:1": true, "fish:finish": true});
  s("rdr2-encounters-v1", {"town:1": true});
  s("rdr2-hundred-v1", {"n:story": 1, "n:strangers": 7, "n:bath": 1});`);
await go();
if (errors.length) console.log("  fouten:", errors);
const v2 = JSON.parse(await ev(`localStorage.getItem("rdr2-v2")`)) || { checks: {}, prefs: {} };
const expectKeys = [
  "weapons.revolvers.flacos-revolver", "exotics.r2.heron", "exotics.r1.done", "exotics.prep.start",
  "legendary.animals.bear.kill", "legendary.animals.bear.fence", "legendary.trapper.bearhat", "legendary.extras.crow",
  "trinkets.ingredients.quartz-chunk", "satchels.leather", "satchels.pelt:valuables:deer", "camp.craft:bones",
  "collectibles.graves.davey-callander", "collectibles.bones.done", "cigcards.horses.done", "cigcards.gems.hattie-langtry",
  "treasure.jackhall.schat-gevonden-bij-ocreaghs-run", "challenges.explorer.vind-de-eerste-schatkaart",
  "challenges.bandit.beroof-5-burgers-hold-up", "recipes.tonics.potent-health-cure", "recipes.meat.tender-pork-loin",
  "strangers.c2.noblest", "bounties.valentine.swan", "hideouts.hideouts.sixpoint", "hideouts.gangs.raiders",
  "horses.breeds.arabian", "horses.bond.2", "horses.wild.morgan", "horses.special.buell", "plants.herbs.yarrow",
  "plants.orchids.ghost", "gold.fixed.statues", "fish.fish.legendary-bluegill", "fish.fish.done", "encounters.town.beggar",
  "hundred.missies-en-events.story", "hundred.overig.bath"
];
const missing = expectKeys.filter(k => !v2.checks[k]);
check("alle oude vinkjes zijn omgezet", missing.length === 0, missing.join(", "));
check("teller heron = 7", v2.checks["exotics.r2.heron"] === 7);
check("automatische 100%-onderdelen worden niet overgenomen", !("hundred.missies-en-events.strangers" in v2.checks));
check("filters omgezet", v2.prefs["weapons.hide"] && v2.prefs["legendary.trap"] && v2.prefs["explorer.hide"]);

// ---------- 2. Elke route ----------
console.log("Routes");
const EXPECT = { // minimaal aantal vinkjes (data-key) per route
  satchels: 36, camp: 46, legendary: 88, trinkets: 30, horses: 41, weapons: 65, exotics: 6, plants: 43, recipes: 55,
  collectibles: 72, fish: 20, poi: 50, shacks: 19, strangers: 26, bounties: 14, hideouts: 15, encounters: 113, challenges: 90,
  cigcards: 156, treasure: 30, explorer: 10, gold: 4, hundred: 0
};
const routes = await ev(`[...document.querySelectorAll("nav a")].map(a => a.getAttribute("href").slice(2))`);
check("navigatie: overzicht + 23 lijsten", routes.length === 24, routes.length);
for (const r of routes) {
  errors.length = 0;
  await hash(r);
  const keys = await n("[data-key]");
  const title = await ev("document.querySelector('h1').textContent");
  const current = await ev(`document.querySelector('nav a[aria-current]')?.getAttribute("href")`);
  const ok = errors.length === 0 && current === `#/${r}` && (r === "" || keys >= EXPECT[r]);
  check(`#/${r || ""} ${title}`, ok, `${keys} vinkjes${errors.length ? "; " + errors.join("; ") : ""}`);
}

// ---------- 3. Interactie, opslag en koppelingen ----------
console.log("Interactie");
await go("weapons");
check("migratie zichtbaar: Flaco's Revolver aangevinkt", await checked("weapons.revolvers.flacos-revolver"));
check("filter weapons.hide aan en toegepast", await ev(`document.querySelector('[data-pref="weapons.hide"]').checked && document.querySelector('.sec.hide-checked') !== null`));
await click('[data-key="weapons.revolvers.cattleman-revolver"]');
await go("weapons");
check("vinkje blijft na herladen", await checked("weapons.revolvers.cattleman-revolver"));

await go("exotics");
await click('button[data-count="exotics.r2.heron"][data-step="1"]');
await go("exotics");
check("teller blijft na herladen (heron 7 + 1 = 8)", (await ev(`document.querySelector('[data-n="exotics.r2.heron"]').textContent`)) === "8");
check("ingeleverde opdracht telt als compleet", (await ev(`document.querySelector('[data-n="exotics.r1.ladynight"]').textContent`)) === "15");

await go("trinkets");
check("trinkets: Bear Claw gemaakt (gedeeld met legendarisch)", await checked("legendary.animals.bear.fence"));
check("trinkets: deel 'in bezit' bij Bear Claw", (await ev(`document.querySelector('[data-part="bear"]').textContent`)).includes("in bezit"));
await ev(`window.confirm = () => true`);
await click("#reset");
await go("legendary");
check("trinkets-reset laat 'gedood' staan", await checked("legendary.animals.bear.kill"));
check("trinkets-reset wist 'gemaakt'", !(await checked("legendary.animals.bear.fence")));
check("trapper-filter verbergt niet-koopbare items", (await ev(`[...document.querySelectorAll('[data-row]')].filter(r => !r.hidden).length`)) < 34);

await go("hundred");
const auto = id => ev(`document.querySelector('[data-auto="hundred.${id}"]')?.textContent`);
check("100%: strangers automatisch (1, oude 7 genegeerd)", (await auto("missies-en-events.strangers")) === "1");
check("100%: graven automatisch 1", (await auto("verzamelobjecten.graves")) === "1");
check("100%: kaarten automatisch 13", (await auto("verzamelobjecten.cards")) === "13");
check("100%: bad-vinkje uit migratie", await ev(`document.getElementById("c-hundred-overig-bath").checked`));

check("100%: points of interest nog 0", (await auto("verzamelobjecten.poi")) === "0");
await go("poi");
await click('[data-key="poi.ambarino.mysterious-hill-home"]');
await go("hundred");
check("100%: points of interest automatisch 1 na vinkje", (await auto("verzamelobjecten.poi")) === "1");

await go("shacks");
for (const s of ["dormin-crest", "snowfield", "dodds-bluff", "clawsons-rest", "hanis-bethel", "lenora-view"])
  await click(`[data-key="shacks.shacks.${s}"]`);
await go("hundred");
check("100%: shacks automatisch 5 (6 bezocht, max 5)", (await auto("overig.shacks")) === "5");

await go("explorer");
check("explorer: rang 1 gehaald (uit uitdagingen)", await checked("challenges.explorer.vind-de-eerste-schatkaart"));
check("explorer: rang 4 schat gevonden (uit schatkaarten)", (await ev(`document.querySelector('[data-card="rank-4"] .status').textContent`)) === "schat gevonden");

await go("gold");
check("goud: Jack Hall (2) + Strange Statues (3) = 5 staven", (await meters()).includes("5 / 28"), await meters());

await go("plants");
check("planten: orchidee toont Exotics-telling", (await ev(`document.querySelector('[data-exotic="r1.ladynight"]').textContent`)) === "15");

await go("");
check("overzicht: 23 lijstkaarten", (await n("[data-list]")) === 23);

// ---------- 4. Telefoonbreedte ----------
console.log("Layout 375px");
await send("Emulation.setDeviceMetricsOverride", { width: 375, height: 800, deviceScaleFactor: 1, mobile: true });
const wide = [];
for (const r of routes) { await go(r); if ((await ev("document.documentElement.scrollWidth")) > 375) wide.push(r || "overzicht"); }
check("geen horizontale scroll", wide.length === 0, wide.join(", "));

ws.close();
console.log(failed ? `\n${failed} controle(s) mislukt` : "\nAlle controles geslaagd");
quit(failed ? 1 : 0);
