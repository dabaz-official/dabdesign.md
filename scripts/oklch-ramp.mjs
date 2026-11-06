#!/usr/bin/env node
/**
 * DabWave accent-ramp generator — OKLCH fixed-lightness ladder.
 *
 * Usage:
 *   node scripts/oklch-ramp.mjs --read "#2563EB"
 *   node scripts/oklch-ramp.mjs --hue 260 --chroma 0.16 --anchor 600
 *
 * Rules implemented (see oklch-brand-color.md and DabDesign.md §4.4, ADR-003):
 * - The 10-step L ladder and the C curve are fixed by the core; per site you
 *   only choose H (hue), the anchor step, and the base chroma C.
 * - Gamut mapping reduces C, never L or H.
 * - Contrast is WCAG 2.2, checked against the neutral palette ratified in
 *   DabDesign.md §4.5 (shared by all sites — never regenerated per site).
 * - If a contrast pair fails, remap the five semantic aliases (this script
 *   suggests the remap); never edit the L ladder.
 *
 * Zero dependencies. Node 18+.
 */

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Fixed L ladder — identical for every site, every hue.
const LADDER = {
  50: 0.97, 100: 0.94, 200: 0.88, 300: 0.81, 400: 0.73,
  500: 0.64, 600: 0.56, 700: 0.48, 800: 0.40, 900: 0.32,
};

// C multiplier g(d), where d = step index − anchor index.
// d = 0 is the anchor (C = 1.00). Values at |d| > 3 are curve extensions.
const GCURVE = {
  '-6': 0.1, '-5': 0.18, '-4': 0.32, '-3': 0.52, '-2': 0.74, '-1': 0.92,
  0: 1.0, 1: 0.96, 2: 0.86, 3: 0.7, 4: 0.58, 5: 0.48, 6: 0.4,
};

// Neutral palette ratified by DAB-004 (DabDesign.md §4.5). 13 steps, frozen.
// Shared across all DabWave sites; sites may only remap which step serves which
// surface — never substitute a value.
const NEUTRAL = {
  'gray-0': '#FFFFFF', 'gray-50': '#FAFAFA', 'gray-100': '#F5F5F5',
  'gray-200': '#E5E5E5', 'gray-300': '#D4D4D4', 'gray-400': '#A3A3A3',
  'gray-500': '#737373', 'gray-600': '#525252', 'gray-700': '#404040',
  'gray-800': '#262626', 'gray-900': '#171717', 'gray-950': '#0A0A0A',
  'gray-1000': '#000000',
};

// ---------- color math (Björn Ottosson's OKLab) ----------

function oklchToLinear(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

function linearToOklch(lin) {
  const [r, g, b] = lin;
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const C = Math.sqrt(a * a + bb * bb);
  let H = (Math.atan2(bb, a) * 180) / Math.PI;
  if (H < 0) H += 360;
  return { L, C, H };
}

const EPS = 1e-4;
const inGamut = (rgb) => rgb.every((c) => c >= -EPS && c <= 1 + EPS);

function clampC(L, H, C) {
  if (inGamut(oklchToLinear(L, C, H))) return { C, clamped: false };
  let lo = 0, hi = C;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinear(L, mid, H))) lo = mid;
    else hi = mid;
  }
  return { C: lo, clamped: true };
}

const gamma = (c) => {
  const t = Math.min(1, Math.max(0, c));
  return t <= 0.0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055;
};

const toHex = (lin) =>
  '#' + lin.map((c) => Math.round(gamma(c) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();

const luminance = (lin) => 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];

const contrast = (a, b) => {
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

function hexToLin(hex) {
  const n = hex.replace('#', '');
  return [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
}

// ---------- CLI ----------

function parseArgs(argv) {
  const args = { hue: null, chroma: 0.16, anchor: 600, read: null };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === '--read') args.read = argv[++i];
    else if (k === '--hue') args.hue = Number(argv[++i]);
    else if (k === '--chroma') args.chroma = Number(argv[++i]);
    else if (k === '--anchor') args.anchor = Number(argv[++i]);
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

if (args.read) {
  const { L, C, H } = linearToOklch(hexToLin(args.read));
  console.log(`hex      ${args.read.toUpperCase()}`);
  console.log(`oklch    oklch(${L.toFixed(3)} ${C.toFixed(3)} ${H.toFixed(1)})`);
  console.log(`H (hue)  ${H.toFixed(1)}   <- use as --hue`);
  console.log(`L        ${L.toFixed(3)}   <- anchor step is the ladder step closest to this`);
  console.log(`C        ${C.toFixed(3)}   <- upper bound; use 80–90% of this as --chroma`);
  process.exit(0);
}

if (args.hue === null || Number.isNaN(args.hue) || args.hue < 0 || args.hue > 360) {
  console.error('Usage: node scripts/oklch-ramp.mjs --hue 0-360 [--chroma 0.16] [--anchor 600]');
  console.error('       node scripts/oklch-ramp.mjs --read "#RRGGBB"');
  process.exit(1);
}

const anchorIndex = STEPS.indexOf(args.anchor);
if (anchorIndex < 2 || anchorIndex > 6) {
  console.error('--anchor must be one of 300 400 500 600 700');
  process.exit(1);
}

// ---------- build the ramp ----------

const ramp = STEPS.map((step, i) => {
  const L = LADDER[step];
  const g = GCURVE[i - anchorIndex] ?? GCURVE[6];
  const target = args.chroma * g;
  const { C, clamped } = clampC(L, args.hue, target);
  const lin = oklchToLinear(L, C, args.hue);
  return { step, L, g, target, C, clamped, lin, hex: toHex(lin) };
});

console.log(`\nAccent ramp — hue ${args.hue}, anchor accent-${args.anchor}, base C ${args.chroma}`);
console.log('step   L     C target→used      sRGB hex   oklch source');
for (const s of ramp) {
  const flag = s.clamped ? ' (gamut-clamped)' : '';
  console.log(
    `${String(s.step).padEnd(6)} ${s.L.toFixed(2)}  ${s.target.toFixed(3)}→${s.C.toFixed(3)}${flag.padEnd(16)} ${s.hex}  oklch(${s.L} ${s.C.toFixed(3)} ${args.hue})`
  );
}

// ---------- alias suggestions + contrast checks ----------

const lum = {
  bgLight: luminance(hexToLin(NEUTRAL['gray-50'])),
  surfaceLight: luminance(hexToLin(NEUTRAL['gray-0'])),
  ink: luminance(hexToLin(NEUTRAL['gray-900'])),
  bgDark: luminance(hexToLin(NEUTRAL['gray-950'])),
  surfaceDark: luminance(hexToLin(NEUTRAL['gray-900'])),
  textDark: luminance(hexToLin(NEUTRAL['gray-50'])),
};
const white = 1.0;
const black = 0.0;

function pickOnPrimary(pLum, candidates) {
  for (const [name, l] of candidates) {
    if (contrast(l, pLum) >= 4.5) return { name, ratio: contrast(l, pLum) };
  }
  const last = candidates[candidates.length - 1];
  return { name: last[0], ratio: contrast(last[1], pLum) };
}

function report(title, rows) {
  console.log(`\n${title}`);
  for (const [pair, ratio, min] of rows) {
    const ok = ratio >= min ? 'pass' : 'FAIL';
    console.log(`  ${ok.padEnd(5)} ${ratio.toFixed(2).padStart(5)}:1  (min ${min}:1)  ${pair}`);
  }
}

// Light theme: primary walks DARKER from the anchor until it clears 3:1.
{
  let p = anchorIndex;
  while (p < 9 && (contrast(luminance(ramp[p].lin), lum.bgLight) < 3 || contrast(luminance(ramp[p].lin), lum.surfaceLight) < 3)) p++;
  const primary = ramp[p];
  const hover = ramp[Math.min(p + 1, 9)];
  const pressed = ramp[Math.min(p + 2, 9)];
  let subtle = ramp[1]; // accent-100
  if (contrast(lum.ink, luminance(subtle.lin)) < 4.5) subtle = ramp[0]; // accent-50
  const on = pickOnPrimary(luminance(primary.lin), [
    ['#FFFFFF', white],
    ['accent-50', luminance(ramp[0].lin)],
    ['gray-900 ink', lum.ink],
  ]);

  console.log('\nSuggested aliases — LIGHT theme');
  console.log(`  color-primary          accent-${primary.step}${p !== anchorIndex ? '  (remapped from anchor; anchor fails 3:1)' : ''}`);
  console.log(`  color-primary-hover    accent-${hover.step}`);
  console.log(`  color-primary-pressed  accent-${pressed.step}`);
  console.log(`  color-primary-subtle   accent-${subtle.step}`);
  console.log(`  color-on-primary       ${on.name}  (${on.ratio.toFixed(2)}:1)`);

  report('Contrast — LIGHT theme', [
    [`on-primary on primary`, on.ratio, 4.5],
    [`primary on gray-50 background`, contrast(luminance(primary.lin), lum.bgLight), 3],
    [`primary on gray-0 surface`, contrast(luminance(primary.lin), lum.surfaceLight), 3],
    [`gray-900 text on subtle tint`, contrast(lum.ink, luminance(subtle.lin)), 4.5],
  ]);
}

// Dark theme: primary walks LIGHTER from the anchor until it clears 3:1.
{
  let p = Math.max(0, anchorIndex - 1);
  while (p > 0 && (contrast(luminance(ramp[p].lin), lum.bgDark) < 3 || contrast(luminance(ramp[p].lin), lum.surfaceDark) < 3)) p--;
  const primary = ramp[p];
  const hover = ramp[Math.max(p - 1, 0)];
  const pressed = ramp[Math.max(p - 2, 0)];
  const subtle = ramp[9]; // accent-900 as the dark tint surface
  const on = pickOnPrimary(luminance(primary.lin), [
    ['gray-1000 (#000)', black],
    ['gray-900 ink', lum.ink],
    ['#FFFFFF', white],
  ]);

  console.log('\nSuggested aliases — DARK theme');
  console.log(`  color-primary          accent-${primary.step}`);
  console.log(`  color-primary-hover    accent-${hover.step}`);
  console.log(`  color-primary-pressed  accent-${pressed.step}`);
  console.log(`  color-primary-subtle   accent-${subtle.step}`);
  console.log(`  color-on-primary       ${on.name}  (${on.ratio.toFixed(2)}:1)`);

  report('Contrast — DARK theme (surfaces: gray-950 / gray-900)', [
    [`on-primary on primary`, on.ratio, 4.5],
    [`primary on gray-950 background`, contrast(luminance(primary.lin), lum.bgDark), 3],
    [`primary on gray-900 surface`, contrast(luminance(primary.lin), lum.surfaceDark), 3],
    [`gray-50 text on subtle tint`, contrast(lum.textDark, luminance(subtle.lin)), 4.5],
  ]);
}

console.log('\nNext: record H, anchor, base C, the ramp, both alias mappings and these');
console.log('ratios in the site theme doc. Core values live in DabDesign.md §4.4/§4.5;');
console.log('the site document cites them and never restates them.');
