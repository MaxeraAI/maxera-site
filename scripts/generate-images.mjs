#!/usr/bin/env node
// Generate Maxera atmospheric images via Kie AI (Nano Banana 2, 2K).
// Usage: KIE_API_KEY=... node scripts/generate-images.mjs [name1 name2 ...]
// With no args, generates every image. Existing files are skipped.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMG = path.join(ROOT, "public", "img");

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) {
  console.error("Missing KIE_API_KEY env var");
  process.exit(1);
}

const CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask";
const POLL_URL = "https://api.kie.ai/api/v1/jobs/recordInfo";

// Common aesthetic prelude — used by every image so the visual language stays unified.
const BRAND = `
Premium editorial atmospheric image. Dark charcoal canvas at hex #0A0A0B with subtle organic film grain.
A single warm saffron–gold accent at hex #F5C518 used sparingly as the only chromatic light source — the
saffron should feel like real luminance, not a tint. Painterly, photographic, high dynamic range,
hyper-detailed at native viewing distance. Cinematic 8K-quality detail. Restrained composition with
generous negative space. Mood: an empty cathedral lit by a sliver of late-afternoon sun. Strict rules:
absolutely no people, no faces, no hands, no human silhouettes, no recognizable real-world objects, no
text, no letterforms, no symbols, no watermarks, no logos. Tonal range 95% black/charcoal, 5% saffron.
The image must read as expensive, restrained, and intentional — never busy, never decorative for its
own sake. No purple, no pink, no blue, no green. Saffron only.
`.replace(/\s+/g, " ").trim();

const NEGATIVE_REINFORCE =
  "Avoid: people, faces, hands, human silhouettes, animals, text, letters, symbols, logos, watermarks, " +
  "purple, pink, blue, green, neon, cyan, plasticky 3D render, generic stock-photo lighting, AI-art " +
  "kitsch, cliché data-stream visualizations, Tron grids, magenta highlights.";

const IMAGES = [
  {
    name: "hero-atmospheric",
    aspect: "16:9",
    description: `${BRAND}
A vast horizontal void of charcoal black depth. Across the upper-right quadrant, a single soft horizon
band of warm saffron–gold luminance bleeds out into pure black like a distant sunrise behind a far cliff
wall. Suspended in the negative space, faint silvery dust motes catch the saffron light at the edges.
Heavy lower-left shadow, almost matte. Painterly photographic still life — visually closer to a Mark
Rothko painting photographed in a dark gallery than to any rendered illustration. Subtle architectural
plane suggested at the bottom edge — a long flat horizon, no detail. Wide cinematic 16:9 composition.
${NEGATIVE_REINFORCE}`,
  },
  {
    name: "about-architectural",
    aspect: "16:9",
    description: `${BRAND}
Architectural perspective into a vast unlit interior — a single corridor receding into pure black depth.
At the far end, a precise rectangular sliver of warm saffron–gold light marks an unseen opening. Walls
implied only by the falloff of light against matte concrete grain — no visible edges, no construction
detail. Brutalist photographic mood, restrained, almost monastic. Strong perpendicular composition with
the saffron sliver placed roughly one-third from the right. Subtle film grain. Wide cinematic 16:9
composition. ${NEGATIVE_REINFORCE}`,
  },
  {
    name: "og-card",
    aspect: "16:9",
    description: `${BRAND}
Composition optimized for social sharing — wide horizontal frame. The left two-thirds of the image is
deep, generous negative space at near-pure charcoal black, suitable for type overlay. The right third
contains a soft warm saffron–gold luminance bloom that fades organically into the black, with subtle
suspended grain. The transition from black to saffron must be a long, slow gradient — not a hard edge.
Photographic, premium, restrained. No central focal point — the image is intentionally designed as a
quiet backdrop. ${NEGATIVE_REINFORCE}`,
  },
  {
    name: "getstarted-horizon",
    aspect: "21:9",
    description: `${BRAND}
Ultra-wide cinematic letterbox composition. A vast open horizontal plane viewed from a low aerial
distance — an unbroken empty horizon line stretches across the entire frame at roughly 55% vertical
height. Below the horizon: a smooth matte charcoal expanse, almost featureless, suggesting a calm flat
surface viewed at deep night. Above the horizon: a long, slow, restrained band of soft warm
saffron–gold dawn light that fades gradually upward into pure black — like the first light of morning
beginning to lift the sky. The composition is meditative, expansive, balanced, and confident. Absolutely
no architectural framing, no tunnels, no corridors, no doorways, no arches, no central focal bloom, no
candle flame, no religious or cathedral mood, no spiritual lighting tropes. The image must read as
calm, open, and forward-looking — like the start of a clear day with nothing in the way. Subtle film
grain throughout. Painterly photographic mood. ${NEGATIVE_REINFORCE} Also avoid: cathedrals, churches,
chapels, tunnels, corridors, doorways, arched openings, candle flames, halos, beams of light through
mist, light-at-the-end-of-tunnel compositions.`,
  },
  {
    name: "contact-topography",
    aspect: "16:9",
    description: `${BRAND}
Abstract topographic mood image — a far aerial view of an unlit landscape at deep night. Horizontal
parallel saffron–gold contour lines at varying intensity suggest the form of distant terrain or coastal
inlets — but at very low contrast, almost subliminal. The pattern is sparse, with most of the frame
being deep matte charcoal black. The contour lines must feel hand-drawn and uneven, not algorithmic or
gridded. Subtle vignette. Wide 16:9 cinematic composition. ${NEGATIVE_REINFORCE}`,
  },
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function createTask({ prompt, aspect_ratio, resolution = "2K", output_format = "jpg" }) {
  const body = {
    model: "nano-banana-2",
    input: { prompt, aspect_ratio, resolution, output_format },
  };
  const res = await fetch(CREATE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok || json.code !== 200) {
    throw new Error(`createTask ${res.status}: ${JSON.stringify(json)}`);
  }
  return json.data.taskId;
}

async function pollTask(taskId, { intervalMs = 4000, timeoutMs = 5 * 60 * 1000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  let last = null;
  while (Date.now() < deadline) {
    const url = `${POLL_URL}?taskId=${encodeURIComponent(taskId)}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const json = await res.json();
    if (!res.ok || json.code !== 200) {
      throw new Error(`pollTask ${res.status}: ${JSON.stringify(json)}`);
    }
    const data = json.data;
    if (data.state !== last) {
      console.log(`  · state=${data.state}`);
      last = data.state;
    }
    if (data.state === "success") {
      const parsed = typeof data.resultJson === "string" ? JSON.parse(data.resultJson) : data.resultJson;
      const urls = parsed?.resultUrls || [];
      if (!urls.length) throw new Error(`no resultUrls: ${data.resultJson}`);
      return urls[0];
    }
    if (data.state === "fail") {
      throw new Error(`task failed: ${data.failCode} — ${data.failMsg}`);
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  throw new Error("polling timed out");
}

async function downloadTo(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(dest, buf);
  return buf.length;
}

async function generate(spec) {
  const dest = path.join(PUBLIC_IMG, `${spec.name}.jpg`);
  if (await fileExists(dest)) {
    console.log(`✓ ${spec.name} (already exists, skipping)`);
    return;
  }
  console.log(`→ ${spec.name} (${spec.aspect}, 2K)`);
  const t0 = Date.now();
  const taskId = await createTask({ prompt: spec.description, aspect_ratio: spec.aspect });
  console.log(`  · task=${taskId}`);
  const url = await pollTask(taskId);
  const size = await downloadTo(url, dest);
  console.log(`✓ ${spec.name} → ${path.relative(ROOT, dest)} (${(size / 1024).toFixed(0)} KB, ${((Date.now() - t0) / 1000).toFixed(1)}s)`);
}

async function main() {
  await ensureDir(PUBLIC_IMG);
  const requested = process.argv.slice(2);
  const todo = requested.length
    ? IMAGES.filter((i) => requested.includes(i.name))
    : IMAGES;
  if (!todo.length) {
    console.error("No images matched.", { requested, available: IMAGES.map((i) => i.name) });
    process.exit(1);
  }
  console.log(`Generating ${todo.length} image(s) at 2K via Nano Banana 2...`);
  for (const spec of todo) {
    try {
      await generate(spec);
    } catch (err) {
      console.error(`✗ ${spec.name}:`, err.message);
      process.exitCode = 1;
    }
  }
}

main();
