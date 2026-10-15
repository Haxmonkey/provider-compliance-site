// Builds a self-contained, click-through preview of the site from _site/ into preview/site/.
// Root-relative links (/services/) become relative file links (../services/index.html) so the
// preview works from any folder or static host. Forms skip submission and go to their
// confirmation page. Not used for the live site.
import { promises as fs } from "node:fs";
import path from "node:path";

const SRC = "_site";
const OUT = "preview/site";

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

function toRelative(fromFile, target) {
  const m = target.match(/^([^?#]*)(.*)$/);
  let p = m[1], rest = m[2];
  if (p.endsWith("/")) p += "index.html";
  else if (!path.posix.extname(p)) p += "/index.html";
  const fromDir = path.posix.dirname(fromFile);
  let rel = path.posix.relative(fromDir, p.replace(/^\//, ""));
  return (rel || "index.html") + rest;
}

await fs.rm("preview", { recursive: true, force: true });
const files = (await walk(SRC)).filter((f) => !f.includes(`${path.sep}admin${path.sep}`));
for (const f of files) {
  const rel = path.relative(SRC, f).split(path.sep).join("/");
  const dest = path.join(OUT, rel);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  if (!rel.endsWith(".html")) { await fs.copyFile(f, dest); continue; }
  let html = await fs.readFile(f, "utf8");
  html = html.replace(/\s(href|src|action)="(\/(?!\/)[^"]*)"/g, (_, attr, url) => ` ${attr}="${toRelative(rel, url)}"`);
  html = html.replace('<html lang="en">', '<html lang="en" data-preview>');
  html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\n?/, "");
  html = html.replace(/<link rel="canonical"[^>]*>\n?/, "");
  await fs.writeFile(dest, html);
}

// Entry page for the preview host: opens the home page.
await fs.writeFile(
  "preview/preview.html",
  `<title>Provider Compliance Bureau</title>
<style>body{margin:0;font:15px/1.5 system-ui,sans-serif;background:#13294b;color:#e9eef6;display:grid;place-items:center;min-height:100vh;padding-inline:16px}a{color:#fff}</style>
<p>Opening the site preview… <a href="site/index.html">Open it here</a> if nothing happens.</p>
<script>location.replace("site/index.html")</script>
`
);
console.log(`Preview: ${files.length} files written to ${OUT}`);
