// Regenerates the placeholder images listed in src/_data/images.json.
// Placeholders are temporary: replace each with a client photo (see README "Images").
import { promises as fs } from "node:fs";
const data = JSON.parse(await fs.readFile("src/_data/images.json", "utf8"));
const entries = [];
for (const [k, v] of Object.entries(data)) {
  if (k === "segments") for (const s of Object.values(v)) entries.push(s); else entries.push(v);
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
for (const e of entries) {
  if (!e.src.includes("/placeholders/")) continue;
  const portrait = e.size.includes("portrait");
  const [w, h] = portrait ? [1200, 1500] : [1600, 1000];
  const cx = w / 2, cy = h / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e4eaf2"/><stop offset="1" stop-color="#c8d3e1"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<g transform="translate(${cx - 60} ${cy - 130})" fill="none" stroke="#7f90a8" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">
<rect x="0" y="0" width="120" height="92" rx="8"/><circle cx="36" cy="30" r="11"/><path d="M8 82l34-34 22 20 18-14 30 28"/></g>
<text x="${cx}" y="${cy + 40}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="46" font-weight="600" fill="#3d4f68">${esc(e.brief)}</text>
<text x="${cx}" y="${cy + 100}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#5f7089">Placeholder · replace with client photo · ${esc(e.size)}</text>
</svg>
`;
  await fs.writeFile("src" + e.src, svg);
}
console.log(`Wrote ${entries.length} placeholders`);
