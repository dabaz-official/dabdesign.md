#!/usr/bin/env node
/**
 * DabWave functional-palette generator — OKLCH role targets (DAB-006).
 *
 * Usage:
 *   node scripts/functional-palette.mjs
 *   node scripts/functional-palette.mjs --json
 *
 * Rules implemented (see DabDesign.md §4.7):
 * - Each status has one hue and one chroma; light and dark are the same hue at
 *   different role lightness, so a status never changes meaning between themes.
 * - Light: base L 0.52, strong 0.44, subtle 0.95 (C × 0.25).
 *   Dark:  base L 0.72, strong 0.82, subtle 0.25 (C × 0.35).
 * - Gamut mapping reduces C only; L and hue are never edited for gamut.
 * - on-* is white in light and gray-1000 in dark.
 * - Every pair is checked against the DAB-002 thresholds; the script exits
 *   non-zero if any pair fails.
 *
 * Zero dependencies. Node 18+.
 */

const STATUSES = [
  { name: 'success', hue: 150.0, chroma: 0.154 },
  { name: 'warning', hue: 85.2, chroma: 0.115 },
  { name: 'danger', hue: 24.9, chroma: 0.19 },
];

const ROLE_L = {
  light: { base: 0.52, strong: 0.44, subtle: 0.95, subtleC: 0.25, on: '#FFFFFF' },
  dark: { base: 0.72, strong: 0.82, subtle: 0.25, subtleC: 0.35, on: '#000000' },
};

// Neutral palette ratified by DAB-004 (DabDesign.md §4.5). 13 steps, frozen.
const NEUTRAL = {
  'gray-0': '#FFFFFF', 'gray-50': '#FAFAFA', 'gray-100': '#F5F5F5',
  'gray-200': '#E5E5E5', 'gray-300': '#D4D4D4', 'gray-400': '#A3A3A3',
  'gray-500': '#737373', 'gray-600': '#525252', 'gray-700': '#404040',
  'gray-800': '#262626', 'gray-900': '#171717', 'gray-950': '#0A0A0A',
  'gray-1000': '#000000',
};

const SURFACES = {
  light: ['gray-50', 'gray-0', 'gray-100'],
  dark: ['gray-950', 'gray-900', 'gray-800'],
};

const FOCUS = '#4C89EF';
const SELECTION = {
  light: { bg: 'gray-900', fg: 'gray-0' },
  dark: { bg: 'gray-50', fg: 'gray-900' },
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

const EPS = 1e-4;
const inGamut = (rgb) => rgb.every((c) => c >= -EPS && c <= 1 + EPS);

function clampC(L, H, C) {
  if (inGamut(oklchToLinear(L, C, H))) return C;
  let lo = 0, hi = C;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinear(L, mid, H))) lo = mid;
    else hi = mid;
  }
  return lo;
}

const gamma = (c) => {
  const t = Math.min(1, Math.max(0, c));
  return t <= 0.0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055;
};

const toHex = (lin) =>
  '#' + lin.map((c) => Math.round(gamma(c) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();

function hexToLin(hex) {
  const n = hex.replace('#', '');
  return [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
}

const luminance = (lin) => 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];

const contrast = (a, b) => {
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

const ratioHex = (a, b) => contrast(luminance(hexToLin(a)), luminance(hexToLin(b)));

// ---------- generate ----------

const palettes = {};
for (const theme of ['light', 'dark']) {
  const spec = ROLE_L[theme];
  palettes[theme] = {};
  for (const s of STATUSES) {
    const base = toHex(oklchToLinear(spec.base, clampC(spec.base, s.hue, s.chroma), s.hue));
    const strong = toHex(oklchToLinear(spec.strong, clampC(spec.strong, s.hue, s.chroma), s.hue));
    const subtleL = spec.subtle;
    const subtleC = s.chroma * spec.subtleC;
    const subtle = toHex(oklchToLinear(subtleL, clampC(subtleL, s.hue, subtleC), s.hue));
    palettes[theme][s.name] = { base, strong, subtle, on: spec.on };
  }
}

const json = process.argv.includes('--json');
if (json) {
  console.log(JSON.stringify({ palettes, focus: FOCUS, selection: SELECTION }, null, 2));
  process.exit(0);
}

for (const theme of ['light', 'dark']) {
  console.log(`\nFunctional palette — ${theme.toUpperCase()}`);
  console.log('status   base      strong    subtle    on');
  for (const s of STATUSES) {
    const p = palettes[theme][s.name];
    console.log(
      `${s.name.padEnd(8)} ${p.base}   ${p.strong}   ${p.subtle}   ${p.on}`
    );
  }
}

// ---------- checks ----------

const checks = [];
const add = (theme, label, ratio, min) => checks.push({ theme, label, ratio, min });
const textMain = { light: NEUTRAL['gray-900'], dark: NEUTRAL['gray-50'] };

for (const theme of ['light', 'dark']) {
  const surfaces = SURFACES[theme];
  for (const s of STATUSES) {
    const p = palettes[theme][s.name];
    add(theme, `${s.name}: on on base`, ratioHex(p.on, p.base), 4.5);
    for (const name of surfaces) {
      const surf = NEUTRAL[name];
      add(theme, `${s.name}: base on ${name}`, ratioHex(p.base, surf), 3);
      add(theme, `${s.name}: strong on ${name}`, ratioHex(p.strong, surf), 4.5);
    }
    add(theme, `${s.name}: text-primary on subtle`, ratioHex(textMain[theme], p.subtle), 4.5);
    add(theme, `${s.name}: base on subtle`, ratioHex(p.base, p.subtle), 3);
    add(theme, `${s.name}: strong on subtle`, ratioHex(p.strong, p.subtle), 4.5);
  }
  for (const name of surfaces) add(theme, `focus on ${name}`, ratioHex(FOCUS, NEUTRAL[name]), 3);
  const sel = SELECTION[theme];
  add(theme, 'selection fg on bg', ratioHex(NEUTRAL[sel.fg], NEUTRAL[sel.bg]), 4.5);
}

let failed = 0;
for (const theme of ['light', 'dark']) {
  const rows = checks.filter((c) => c.theme === theme);
  const worst = (labelPart) => {
    const rows = checks.filter((c) => c.theme === theme && c.label.includes(labelPart));
    return rows.length === 0 ? undefined : rows.reduce((m, r) => (r.ratio < m.ratio ? r : m));
  };
  console.log(`\nWorst measured — ${theme.toUpperCase()}`);
  for (const part of ['on on base', 'strong on gray', 'base on gray', 'text-primary on subtle', 'base on subtle', 'strong on subtle', 'focus on', 'selection']) {
    const w = worst(part);
    if (!w) {
      console.log(`  ??  no rows matched "${part}"`);
      failed++;
      continue;
    }
    console.log(`  ${w.ratio >= w.min ? 'pass' : 'FAIL'}  ${w.ratio.toFixed(2).padStart(5)}:1  (min ${w.min})  ${w.label}`);
    if (w.ratio < w.min) failed++;
  }
}

console.log(
  failed === 0
    ? '\nAll pairs pass the DAB-002 thresholds.'
    : `\n${failed} pair(s) FAILED the DAB-002 thresholds.`
);
process.exit(failed === 0 ? 0 : 1);
