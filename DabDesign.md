---
version: alpha
name: "DabWave Design System"
description: >
  The enterprise specification for the DabWave design system: governance and
  versioning, token discipline, component lifecycle standards, accessibility,
  content and internationalization rules, and quality gates. Every design
  decision — architectural or numeric — is an explicit record in the decision
  roadmap; none are pre-decided.
colors:
  # Neutral primitives — DAB-004 (approved 2026-11-06). Thirteen steps, frozen.
  # Semantic color roles join this block as DAB-005/DAB-006 reach Approved.
  gray-0: "#FFFFFF"
  gray-50: "#FAFAFA"
  gray-100: "#F5F5F5"
  gray-200: "#E5E5E5"
  gray-300: "#D4D4D4"
  gray-400: "#A3A3A3"
  gray-500: "#737373"
  gray-600: "#525252"
  gray-700: "#404040"
  gray-800: "#262626"
  gray-900: "#171717"
  gray-950: "#0A0A0A"
  gray-1000: "#000000"
themes:
  # Semantic mappings — DAB-005 and DAB-006 (approved 2026-11-06). Action roles
  # (color-primary*) are per-site by DAB-003 and are not defined here.
  light:
    color-background: "#FAFAFA"
    color-surface: "#FFFFFF"
    color-surface-secondary: "#F5F5F5"
    color-text-primary: "#171717"
    color-text-secondary: "#404040"
    color-text-tertiary: "#525252"
    color-text-inverse: "#FFFFFF"
    color-text-disabled: "#A3A3A3"
    color-border: "#E5E5E5"
    color-border-strong: "#737373"
    # Functional roles — DAB-006
    color-success: "#007F38"
    color-success-strong: "#00642B"
    color-success-subtle: "#DDF6E1"
    color-on-success: "#FFFFFF"
    color-warning: "#856300"
    color-warning-strong: "#694E00"
    color-warning-subtle: "#F7EED9"
    color-on-warning: "#FFFFFF"
    color-danger: "#BE222A"
    color-danger-strong: "#9E0017"
    color-danger-subtle: "#FFE9E6"
    color-on-danger: "#FFFFFF"
    color-focus: "#4C89EF"
    color-selection-bg: "#171717"
    color-selection-fg: "#FFFFFF"
    color-overlay: "rgba(0, 0, 0, 0.50)"
  dark:
    color-background: "#0A0A0A"
    color-surface: "#171717"
    color-surface-secondary: "#262626"
    color-text-primary: "#FAFAFA"
    color-text-secondary: "#D4D4D4"
    color-text-tertiary: "#A3A3A3"
    color-text-inverse: "#171717"
    color-text-disabled: "#525252"
    color-border: "#262626"
    color-border-strong: "#737373"
    # Functional roles — DAB-006
    color-success: "#50BF6F"
    color-success-strong: "#72E08D"
    color-success-subtle: "#0B2913"
    color-on-success: "#000000"
    color-warning: "#C59F47"
    color-warning-strong: "#E6BE68"
    color-warning-subtle: "#2A2008"
    color-on-warning: "#000000"
    color-danger: "#FF716B"
    color-danger-strong: "#FFAAA3"
    color-danger-subtle: "#3C1211"
    color-on-danger: "#000000"
    color-focus: "#4C89EF"
    color-selection-bg: "#FAFAFA"
    color-selection-fg: "#171717"
    color-overlay: "rgba(0, 0, 0, 0.50)"
typography:
  # Families — DAB-008 (approved 2026-11-07).
  text-family-sans: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  text-family-mono: 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
  # Scale — DAB-009 (approved 2026-11-07). Zero tracking on every role.
  text-display:
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  text-h1:
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  text-h2:
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  text-h3:
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  text-h4:
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  text-body-lg:
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  text-body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  text-body-sm:
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  text-label:
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  text-caption:
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
spacing:
  # Spacing — DAB-010 (approved 2026-11-07). 4px grid with a 2px half-step.
  space-0: 0px
  space-0-5: 2px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-8: 32px
  space-10: 40px
  space-12: 48px
  space-16: 64px
  space-20: 80px
  space-24: 96px
sizing:
  # Sizing — DAB-010 (approved 2026-11-07).
  size-icon-sm: 16px
  size-icon-md: 20px
  size-icon-lg: 24px
  size-icon-xl: 32px
  control-height-sm: 32px
  control-height-md: 40px
  control-height-lg: 48px
radius:
  # Radius — DAB-010 (approved 2026-11-07). Apple ladder, Owner request.
  radius-none: 0px
  radius-xs: 5px
  radius-sm: 8px
  radius-md: 11px
  radius-lg: 18px
  radius-pill: 9999px
  radius-full: 50%
border:
  # Borders — DAB-010 (approved 2026-11-07).
  border-width: 1px
---

# DabWave Design System — Specification

**Document status:** Draft — DAB-001…DAB-010 ratified; DAB-011 proposed; the rest Open (§13)  
**Spec version:** 0.1.0  
**Owner:** DabAZ  
**Last updated:** 2026-11-07  
**Applies to:** all DabWave websites — DabAZ (official site), DabMusic, DabSudoku, DabMinesweeper, and future sites  
**Consumers:** the maintainer (solo developer) and coding agents

> **Authority rule.** This document is the single source of truth for the
> DabWave design system. All earlier documents — the former DabAZ `design.md`,
> `core-template.md`, and `template.md` — are retired. None of their content
> carries status here; their history lives only in git.
>
> **Blank-slate rule.** No design decision — architectural or numeric — is
> pre-decided. Every design question is an explicit record in §13 until it is
> Approved through the process in §2.2. Anything not recorded as Approved must
> not be implemented as a standard, cited by agents, or assumed by tooling.
>
> **Scope rule.** Implementation choices (frameworks, styling technology, build
> tools) are outside this specification.

## 0. How to use this document

1. **Coding agents:** read §1–3 before generating any UI; read §9 before
   building or modifying a component; §10 gates every release; §11 applies to
   all user-facing copy.
2. **Never invent a decision.** Propose through §2.2; if an open decision
   blocks work, state the assumption and its impact explicitly instead of
   treating it as settled.
3. The YAML frontmatter gains token groups only when their decisions reach
   Approved. Until then it intentionally carries none.
4. Retired documents may be consulted in git history as prior art. They carry
   no status and must not be cited as standards.

---

## 1. System Definition

### 1.1 Problem and purpose

DabWave operates several small websites whose UI is individually reasonable but
inconsistent: colors, type, spacing, and interaction behavior drift from site
to site, every new page restarts the same decisions, and agent-generated UI
depends on the context of the conversation rather than a standard.

This specification exists to remove that drift through governed, explicit
decisions — while leaving room for each site to be distinctive. How much room
is itself a decision (DAB-001), not an assumption.

### 1.2 Users and consumption model

| User | What they need from this document |
|---|---|
| Maintainer (solo developer) | Few options, strong defaults, low decision cost |
| Coding agents | Explicit rules, token references, anti-patterns, machine-checkable constraints |

Because a primary consumer is non-human, ratified parts of this document
function as an **API contract**: rules are testable, values are single-sourced,
and ambiguity is treated as a defect (§2.3).

### 1.3 Framework vs. design decisions

| Kind | Contents | Where |
|---|---|---|
| **Framework** (process law) | Governance, RFC and versioning, token discipline, component lifecycle and states, accessibility checklist, content and i18n rules, quality gates | §2, §3, §9, §10, §11, §12 |
| **Design decisions** | System architecture, theming model, color, typography, space, motion, layout, component scope, accessibility target | §13 roadmap — binding once Approved (DAB-001…DAB-010), Open otherwise |

Framework sections define *how decisions are made and enforced*. They do not
presuppose their outcomes.

### 1.4 Success criteria

- New code contains no raw hex, px, or ms values where an approved token exists.
- All sites consume the same ratified token vocabulary.
- A new page starts from ratified defaults without re-deciding foundations.
- Every site passes the ratified accessibility conformance target.
- Agent-generated UI uses approved tokens without manual correction.

### 1.5 Non-goals

- No component implementation code and no framework guidance beyond §9
  standards.
- No per-site brand definition in this document; site themes are defined in
  each site's own document once DAB-001/DAB-003 provide the mechanism.
- No marketing or campaign governance except §11.

### 1.6 Ratified architecture (DAB-001, 2026-11-01)

**Two layers:**

| Layer | Contents | Mutability |
|---|---|---|
| **Core foundation** | Semantic token names, type scale, spacing, radius, component standards, accessibility baseline, layout tokens — everything ratified in DAB-002 and onward | Fixed system-wide; changes only via core decisions (§2.2) |
| **Site theme layer** | One theme document per site; overrides restricted to the whitelist below | Per-site, within contract |

**Site theme whitelist (a site theme may override):**

| Field | Constraint |
|---|---|
| Accent color | One accent per site; its shape is ratified by DAB-003; contrast-checked in both modes |
| Surface tint | Must preserve semantic hierarchy and contrast |
| Composition | Hero and section layout; core tokens only |
| Imagery & illustration | Must not replace UI affordances |
| Content voice | Within §11; must not change component label meanings |

**Locked (never overridable by a site):** semantic token names · neutral
palette · type scale · spacing scale · radius scale · border rules · component
implementations · focus behavior · accessibility targets — and every scale
ratified later (elevation, motion, layout) binds sites automatically.

**Theming model:** light and dark are first-class themes. The core defines the
semantic role set and both mappings; a site theme supplies its override values
in both modes. A site may ship light-only at launch, but its token contract
must be dark-ready from day one.

**Site theme documents:** one per site, kept in this repository alongside this
specification; first opened only after DAB-003 defines what an accent may
carry. If a site needs something outside the whitelist, it is a core decision
(§2.2) — never a site exception.

**Variance budget:** a site may differ in composition, imagery, and its accent.
It may not differ in type scale, spacing rhythm, radius language, focus, or
accessibility behavior. A project needing a wholly different system is a
separate brand forking the core — not a theme exception.

---

## 2. Governance & Versioning

### 2.1 Roles

| Role | Responsibility |
|---|---|
| Owner | Maintains this document; final decisions; changelog |
| Design approver | Approves visual and interaction decisions |
| Engineering approver | Approves token, export, and implementation impact |
| Accessibility reviewer | Approves contrast, focus, and semantics |
| Contributors | Propose changes with rationale and evidence |

A solo maintainer may hold several roles, but every decision record names which
hat approved it. Agents may *prepare* decisions (drafting, measuring, checking)
— they never *approve* them.

### 2.2 Change process

1. **Proposal** — problem, options considered, recommendation, impact,
   migration path. Foundation decisions additionally create or update a
   `DAB-xxx` record (§13).
2. **Evidence** — visual specimens, measured contrast results, viewport checks.
   Never present an unverified ratio as passing.
3. **Review** — against §2.3, by the required roles (§2.1).
4. **Decision** — recorded in the decision log (§2.5) with date and rationale.
5. **Publication** — update this document, the frontmatter (if a token reached
   Approved), and the changelog; deprecate replaced values (§2.6).

Small, non-design corrections (typos, clarifications) may skip the RFC and go
straight to a changelogged commit.

### 2.3 Review criteria

- Does it solve a repeated problem, not a one-off?
- Does it reuse existing approved tokens before adding new ones?
- Does it hold in every ratified theme and at all validation widths (§8.3)?
- Does it preserve the ratified accessibility target (DAB-002)?
- Is the naming consistent with §3.2?
- Is the migration path clear, and is ambiguity reduced rather than moved?

### 2.4 Versioning

- Semver applies to the specification: `MAJOR.MINOR.PATCH`.
- `0.x` — under active change; breaking changes allowed with a changelog entry.
- `1.0.0` — reached when DAB-001…DAB-013 (§13) are Approved and the foundation test
  page (§12.1) passes.
- **Breaking changes:** renaming an approved token, changing an approved value,
  changing a component's token contract, or removing a documented behavior.
  These require a major version and a migration note.

### 2.5 Decision log (ADR)

Decisions are appended here as they close, in roadmap order (§13), each with
date, decision, rationale, and alternatives considered. Historical decisions
from retired documents carry no status and are not inherited.

| ID | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| ADR-001 | 2026-11-01 | System architecture: two layers — a fixed **Core foundation** and a per-site **Theme layer** with a whitelist contract (accent, surface tint, composition, imagery, content voice); light and dark are first-class themes with core-defined mappings; site themes supply values in both modes | Balances cross-site consistency with per-product identity for DabAZ 官网 / DabMusic / DabSudoku / DabMinesweeper; agents keep hard defaults while exceptions stay explicit and auditable. Alternatives: single-layer unified system (rejected — flattens game/music identity, costly to reverse) and federation (rejected — re-creates the drift this system exists to remove) | Accepted (Owner) |
| ADR-002 | 2026-11-06 | Accessibility policy: conformance target **WCAG 2.2 Level AA** as the system baseline, with named opt-ins (44×44 targets §10.4; SC 2.4.13 focus geometry §10.2); contrast thresholds = WCAG mapping — text 4.5:1, large text 3:1, non-text UI incl. focus 3:1, disabled exempt but recorded, secondary text stays 4.5:1; focus policy = 2px outline + 2px offset keeping the element's radius, indicator ≥ 3:1 against adjacent colors; focus color value deferred to DAB-006 | WCAG 2.2 AA is the current standard and matches what §10 already leans on (target size, focus); the WCAG threshold mapping keeps `scripts/oklch-ramp.mjs` authoritative with zero changes and gives DAB-004…DAB-006 one acceptance line; blanket AAA is unrealistic for warm-hue accents and a solo maintainer. Alternatives: WCAG 2.1 AA (rejected — already superseded, would force a second migration), uniform 4.5:1 for all text (rejected — breaks yellow/lime anchor steps for no real gain), principles-only focus policy (rejected — cross-site drift is what this system exists to prevent) | Accepted (Owner) |
| ADR-003 | 2026-11-06 | Color system model: three families — core-fixed neutral ramp, one per-site ten-step accent ramp (`accent-50`…`accent-900`) behind five action aliases (`color-primary`, `-hover`, `-pressed`, `-subtle`, `color-on-primary`), and core-fixed functional colors; neutral-first (surfaces, text, borders neutral; color for action, state, emphasis); accent generated by the OKLCH fixed-L ladder script, never a status color, contrast failures fixed by alias remapping; functional set = success/warning/danger with base/strong/subtle/on roles, no `info`; focus and selection core-fixed and not accent-derived | Keeps brand expression to one governed variable while giving status a testable home; the fixed-L ladder keeps ramps comparable across sites; dropping `info` removes the most common accent-versus-status collision; four status roles cover icon, small text, tint, and reverse text. Alternatives rejected: two families (status needs fixed measurable values), themeable functional colors (cross-site status semantics drift), single-value statuses (forces hidden hex inside components), Radix 12-step ramps (step semantics differ, invalidates existing tooling), hand-picked ramps (dissolves the shared lightness skeleton) | Accepted (Owner) |
| ADR-004 | 2026-11-06 | Neutral palette: 13 steps `gray-0`…`gray-1000` — the prior 14-step set minus `gray-150`; values adopted from the retired `design.md` neutral set and frozen in frontmatter; pure neutral (C = 0) on every site, not regenerated with OKLCH; a site theme's surface-tint override is limited to choosing which ratified step serves which surface — a colored tint or new neutral value is a core decision | 13 steps keep the surface/border layering the old set provided while dropping a step that was never load-bearing; adopting existing values keeps every measured ratio and the ramp script's constants valid; pure neutral keeps one shared contrast table instead of one per site. Alternatives rejected: 12- or 10-step (too few dark-theme surface levels), OKLCH C = 0 regeneration (invalidates all measured ratios for no perceptual gain), Radix Gray (12 steps, blue tint, mismatched structure), per-site tint ≤ 0.005 (multiplies validation cost across sites) | Accepted (Owner) |
| ADR-005 | 2026-11-06 | Semantic roles: three text levels (`primary`/`secondary`/`tertiary`) plus `inverse` and contrast-exempt `disabled`; three surfaces (`background`/`surface`/`surface-secondary`); two borders (`border` decorative, `border-strong` interactive at 3:1); mappings light/dark — `gray-900`/`gray-50`, `gray-700`/`gray-300`, `gray-600`/`gray-400`, `gray-0`/`gray-900`, `gray-400`/`gray-600`, `gray-200`/`gray-800`, `gray-500`/`gray-500`; role names constant across themes and sites; site themes may remap which ratified step serves which surface, never rename roles or invent values; action, status, focus, and selection values deferred to DAB-006 | Three levels per axis match real product hierarchy; tertiary at `gray-600`/`gray-400` is the lightest text clearing 4.5:1 on every ratified surface (worst 6.00:1); `gray-400` fails 1.4.11 as an interactive border at 2.42–2.52:1, so `border-strong` lands on `gray-500` in both themes (worst 3.19:1). Alternatives rejected: two text levels (loses hint/meta distinction), four text levels (no lighter step clears 4.5:1 without colliding with disabled), two surfaces (nested surfaces fall back to borders), `gray-400` border-strong (fails 1.4.11), separate border-strong values (one shared value passes both themes) | Accepted (Owner) |
| ADR-006 | 2026-11-06 | Functional colors and focus/selection: success 150.0°/0.154, warning 85.2°/0.115, danger 24.9°/0.190; light roles base/strong/subtle at L 0.52/0.44/0.95 (C × 0.25), dark at L 0.72/0.82/0.25 (C × 0.35); `on` = white in light, `gray-1000` in dark; focus fixed `#4C89EF` in both themes, never accent-derived, 2px outline + 2px offset; selection is an inverted neutral pair (`gray-900`/white light, `gray-50`/`gray-900` dark); every pair measured — worst 5.13:1 against 4.5:1 and 4.48:1 against 3:1 | Fixed role lightness keeps a status the same hue and meaning across themes; regenerating light values too removes the retired success-base exception and leaves one derivation; focus blue passes 3:1 on all six surfaces (3.14–5.78:1) while reading as a ring, not a border; neutral selection gives 17.9:1 where white-on-blue fails at 3.42:1. Alternatives rejected: adopting retired light values (leaves one exception and two methods), hand-picked dark values (hue drift), reusing light values in dark (contrast collapse), black `on-success` (inconsistent `on` roles), neutral-inversion focus (reads as a border), blue selection (fails 4.5:1) | Accepted (Owner) |
| ADR-007 | 2026-11-07 | Overlay: one token `color-overlay = rgba(0, 0, 0, 0.50)` in both themes; modal scrim only — dialogs, drawers, command palettes — never for hover/pressed or media backdrops; in dark theme the scrim signals modality only, modal separation must come from `color-border-strong` (or ratified elevation), and opacity is never raised to compensate | 50% is the light-theme floor: 40% measures 2.96:1 while 50% gives 4.12:1 dialog-over-scrim; dark separation is 1.13–1.15:1 at every opacity from 40% to 70%, so a per-theme or stronger value would imply a benefit it cannot deliver. Alternatives rejected: 0.60 in both themes (heavier light theme, no dark gain), per-theme 0.50/0.60 (measured no benefit), a second strong token (no nested scenario yet), split color and opacity tokens (easy to consume only one), media/state use (different requirements; conflicts with §9.2) | Accepted (Owner) |
| ADR-008 | 2026-11-07 | Typefaces: Latin Inter (SIL OFL 1.1), variable, self-hosted Latin subset, preloaded; CJK and full-width symbols Noto Sans SC (OFL 1.1) with an optional per-site `unicode-range` subset and never the full font; stack `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`; monospace is a system stack with no webfont; self-hosted `woff2` only with `font-display: swap` and no public CDN; targets Inter ≤ 120 KB and any Noto subset ≤ 500 KB; one `text-family-sans` token, no per-site family substitution | Inter plus Noto gives one open-licensed Latin face and a matching CJK face without multi-megabyte CJK downloads; Noto-first fallback renders consistently when a subset ships and degrades to PingFang/YaHei when it does not; self-hosting removes mainland-China CDN unreliability and a third-party origin; `swap` removes invisible text. Alternatives rejected: system-only stack (Latin metrics drift), full Noto webfont (first-load size), Google Fonts/jsDelivr (blocked or slow, extra origin), `sans-serif`-only CJK fallback (browser-dependent), a single bilingual font (size problem on every page) | Accepted (Owner) |
| ADR-009 | 2026-11-07 | Type scale: 16px base, integer sizes 12/14/16/18/20/24/30/36/48; ten roles from `text-display` (36–48 fluid) to `text-caption` (12); body and below fixed, display and h1 fluid via `clamp()`; weights 400/600 only with synthesis allowed where 600 is unavailable; zero tracking everywhere; sentence case; tabular numerals in tables and metrics | Integer sizes align implementation and design tools; 16px is the smallest comfortable Chinese body size on low-density screens; two weights cover hierarchy without synthesized intermediate weights; zero tracking is the only rule that survives mixed CJK/Latin pages; fixing body sizes protects reading while letting display and h1 scale prevents cramped mobile headlines. Alternatives rejected: 14px base (too small for Chinese body), strict 1.25 ratio (non-integer sizes fight design tools), 400/700 (heavier headings), 400/500/700 (500 synthesizes on YaHei), negative display tracking (tightens Chinese), per-`lang` tracking (silent when the attribute is missing), all-fluid sizes (small text becomes unreadable) | Accepted (Owner) |
| ADR-010 | 2026-11-07 | Spacing, sizing, radius, borders: 4px grid with a 2px half-step and 14 steps (carried from canonical `design.md` §7.1); controls 32/40/48 with a 44×44 effective-target rule on touch surfaces; icons 16/20/24/32 with 20 as default; radius follows the Apple ladder 0/5/8/11/18/pill/full at the Owner's request, overriding canonical `design.md` §7.3 (`0/4/6/8/12/16/24/9999`); borders 1px, 2px only for focus or validated selected outlines, no 0.5px; nested surfaces never exceed their container's radius | The 4px grid keeps every dimension derivable with one mental unit; three control heights cover dense, default, and touch use without an ambiguous fourth; Apple's ladder gives a restrained shape grammar (8 for controls, 11 for capsules, 18 for cards, pill only for actions). The radius override is recorded rather than silent, and radius is a shape scale so it need not snap to the spacing grid. Alternatives rejected: 8px grid (loses 4 and 12), 36/44/52 controls (loose desktop), 16/24/32 icons (no 20px default), canonical radius scale (overridden by the explicit Apple request), 0.5px borders (inconsistent rendering) | Accepted (Owner) |

### 2.6 Deprecation policy

- Mark the superseded token/section `Deprecated` with its replacement and a
  removal date.
- Deprecated entries remain documented until migration is complete.
- New work must not consume deprecated entries; agents must fail loudly rather
  than silently use them.

### 2.7 Changelog

Specification-level changes are listed here; file history lives in git.

| Version | Date | Change | Status |
|---|---|---|---|
| `0.1.0` | 2026-11-01 | Blank-slate enterprise draft: framework ratified, all design decisions opened as DAB-001…DAB-013 | Draft |
| `0.1.0` | 2026-11-01 | DAB-001 adopted — two-layer architecture (core + site themes), §1.6, §3.5 | Draft |
| `0.1.0` | 2026-11-06 | DAB-002 ratified — WCAG 2.2 AA baseline; contrast thresholds (§10.1); focus policy geometry (§10.2) | Draft |
| `0.1.0` | 2026-11-06 | DAB-003 proposed — three-family palette model, accent ramp contract, functional set (§4.4); awaiting approval | Draft |
| `0.1.0` | 2026-11-06 | DAB-003 ratified — three-family palette model, accent ramp contract, functional set (§4.4) | Draft |
| `0.1.0` | 2026-11-06 | DAB-004 ratified — 13-step neutral ramp, values frozen in frontmatter, pure neutral; site tint limited to remapping (§4.5) | Draft |
| `0.1.0` | 2026-11-06 | DAB-005 proposed — semantic role set and light/dark neutral mappings, all pairs measured (§4.6); awaiting approval | Draft |
| `0.1.0` | 2026-11-06 | DAB-005 ratified — semantic roles and light/dark mappings (§4.6); `themes` group added to frontmatter | Draft |
| `0.1.0` | 2026-11-06 | DAB-006 proposed — generated functional palette, fixed focus blue, neutral-inversion selection (§4.7); awaiting approval | Draft |
| `0.1.0` | 2026-11-06 | DAB-006 ratified — functional values, focus and selection in frontmatter; `scripts/functional-palette.mjs` reproduces them | Draft |
| `0.1.0` | 2026-11-06 | DAB-007 proposed — single overlay token at 50% black, modal scrim only (§4.8); awaiting approval | Draft |
| `0.1.0` | 2026-11-07 | DAB-007 ratified — color domain complete (DAB-003…DAB-007); overlay token added to both themes | Draft |
| `0.1.0` | 2026-11-07 | DAB-008 proposed — Inter + Noto Sans SC, self-hosted with swap, optional CJK subset (§5.4); awaiting approval | Draft |
| `0.1.0` | 2026-11-07 | DAB-008 ratified — typefaces and loading; `typography` family tokens added | Draft |
| `0.1.0` | 2026-11-07 | DAB-009 proposed — 16px integer scale, 400/600 weights, zero tracking, fluid display/h1 (§5.5); awaiting approval | Draft |
| `0.1.0` | 2026-11-07 | DAB-009 ratified — typography domain complete; ten scale tokens added to frontmatter | Draft |
| `0.1.0` | 2026-11-07 | DAB-010 proposed — 4px spacing, 32/40/48 controls, 16/20/24/32 icons, Apple radius ladder, 1px borders (§6.4); awaiting approval | Draft |
| `0.1.0` | 2026-11-07 | DAB-010 ratified — spacing, sizing, radius, and border tokens added to frontmatter | Draft |
| `0.1.0` | 2026-11-07 | DAB-011 proposed — one floating shadow, Apple Store hover geometry, 100/200/300ms durations (§7.4); awaiting approval | Draft |

---

## 3. Token Architecture

### 3.1 Three layers

| Layer | Purpose | Example | Direct use in components |
|---|---|---|---|
| Primitive | Raw value, no UI meaning | `gray-500` | No |
| Semantic | Purpose within a theme | `color-text-primary` | Yes |
| Component | Repeated component decision semantic tokens cannot express | `button-height-md` | Only when documented (§9) |

### 3.2 Naming conventions

- Role-based, kebab-case. Category prefixes: `color-`, `text-`, `space-`,
  `radius-`, `shadow-`, `duration-`, `easing-`, `breakpoint-`, `container-`.
- No raw values in semantic names (`blue-500` is primitive-only).
- Names are stable. Renaming an approved token is a breaking change (§2.4).

### 3.3 Source of truth

- This document is the single source of truth. The YAML frontmatter carries the
  machine-readable contract; the body explains intent and usage.
- Frontmatter gains token groups **only as decisions reach Approved** (§13).
  Body tables reference token names; they do not duplicate raw values.
- No site or component may fork a ratified scale into a second scale.

### 3.4 Export & implementation independence

- Export naming: `dab-<token>` (for example `dab-color-text-primary`).
- Tokens must be expressible as CSS custom properties, native theme resources,
  or design-tool variables. The export format is chosen per project and
  documented at integration.
- Generated artifacts (CSS variables, JSON dictionaries, Tailwind configs) are
  produced from this single source — never hand-edited.

### 3.5 Theming (ratified by DAB-001)

- Semantic token names are constant across light, dark, and site themes;
  components never branch on theme.
- Light and dark are first-class: the core defines the role set and both
  mappings; a site theme supplies its override values in both modes.
- Site themes resolve only the roles the whitelist (§1.6) permits; everything
  else stays core-fixed.

---

## 4. Color — decision area

> **Color domain complete — DAB-003…DAB-007 approved (§4.4…§4.8).** No color
> value is a standard unless it appears in the frontmatter or in one of these
> ratified sections.

### 4.1 Questions this area must answer

- **Palette model:** how many ramps or families exist; whether the system has a
  shared neutral foundation; where brand expression lives; what may vary per
  site (within DAB-001's architecture).
- **Accent strategy:** whether sites get an accent at all; one or several; what
  roles it serves; how it is generated and governed. (DAB-001 already ratified
  *where* brand expression lives — the site theme layer, one accent per site;
  DAB-003 decides what an accent may carry.)
- **Semantic roles:** which roles exist (text, surface, border levels; action
  roles) and their per-theme mappings.
- **Functional set:** which statuses exist (success, warning, danger, info?),
  plus focus and selection treatment; whether each status splits into
  base/strong/subtle/on roles.
- **Overlay:** single token or per-theme values.

### 4.2 Requirements a ratified answer must satisfy

- Meets the contrast policy ratified in DAB-002 on actual surface pairs, in every
  ratified theme.
- One hex = one role; dual use documented at the definition site.
- Color is never the sole carrier of status, selection, or focus (§10.5).
- Values are single-sourced; systematic values are generated by script, never
  hand-scattered.

### 4.3 Decisions

| ID | Question | Status |
|---|---|---|
| `DAB-003` | Color system model: palette structure, accent strategy, functional set shape | Approved — §4.4 |
| `DAB-004` | Neutral palette values | Approved — §4.5 |
| `DAB-005` | Semantic roles and light/dark mappings | Approved — §4.6 |
| `DAB-006` | Functional color values, focus and selection treatment | Approved — §4.7 |
| `DAB-007` | Overlay token and opacity | Approved — §4.8 |

### 4.4 DAB-003 — Color system model (approved 2026-11-06)

> **Status: Approved (Owner, 2026-11-06) — ADR-003.** This section fixes
> structure and governance only; values are decided in DAB-004…DAB-007.

**Family model — three families:**

| Family | Scope | Mutability | Values decided in |
|---|---|---|---|
| Neutral ramp | All sites | Core-fixed | DAB-004 |
| Accent ramp | One per site theme | Site, within contract | Site theme document |
| Functional colors (`success`, `warning`, `danger`) | All sites | Core-fixed | DAB-006 |

**Neutral-first rule.** Surfaces, text, and borders come from the neutral ramp.
Color carries action, state, and emphasis only. Accent never carries body text
or large neutral surfaces; functional colors never carry brand expression.

**Accent contract:**

- One accent ramp per site — ten steps with fixed names `accent-50` …
  `accent-900` (§3.2). A second accent is a core decision, never a site option.
- Components consume only five action aliases: `color-primary`,
  `color-primary-hover`, `color-primary-pressed`, `color-primary-subtle`,
  `color-on-primary`. Raw `accent-*` steps are never referenced in components.
- Light and dark map the same five aliases onto different steps of the same
  ramp. A contrast failure is resolved by remapping an alias, never by editing
  the lightness ladder.
- Generation: OKLCH fixed-lightness ladder with a chroma multiplier curve,
  gamut-clamped by reducing C only — never L or H — implemented by
  `scripts/oklch-ramp.mjs`. Per-site inputs are hue H, anchor step (chosen by
  the brand color's L), and base chroma C. The site theme document records H,
  anchor, C, both alias mappings, and the measured ratios.
- Allowed uses: primary actions, links, selected and active states, one emphasis
  element per section. A site whose identity must read neutral may map the five
  action aliases onto neutral ink; its accent ramp still serves links and
  selection.
- Accent is not a status color and never replaces functional colors.

**Functional set:**

- Statuses: `success`, `warning`, `danger`. No `info` status — informational
  messaging uses a neutral surface and neutral text, and accent is never a
  status.
- Each status has four roles — base (icon, border), strong (text),
  subtle (tint surface), on (text/icon on the base fill):
  `color-success`, `color-success-strong`, `color-success-subtle`,
  `color-on-success`; the same quartet for `warning` and `danger`.
- Every pair is contrast-checked per §10.1; status never relies on color alone
  (§10.5).

**Focus and selection.** Core-fixed and identical on every site and theme —
DAB-001 already locks focus behavior. They are not derived from the accent, so
keyboard affordances cannot drift per site. Values are decided in DAB-006.

**Deferred:** the complete semantic role set and light/dark mappings (DAB-005);
all functional, focus, and selection values (DAB-006); overlay (DAB-007).
Neutral ramp size, values, and tint were ratified by DAB-004 (§4.5).

**Rationale.** Three families give status a testable home while keeping brand
expression to exactly one variable. The ten-step fixed-L contract is what makes
ramps comparable across sites. Dropping `info` removes the most common
accent-versus-status collision. Four status roles cover the real surfaces:
icon, small text, tinted background, and reverse text.

**Alternatives considered.** Two families (rejected — status needs fixed,
measurable values); fully themeable functional colors (rejected — cross-site
status semantics drift); single-value statuses (rejected — forces hidden hex
values inside components); Radix 12-step ramps (rejected — different step
semantics invalidates the existing tooling and tutorial); hand-picked per-site
ramps (rejected — dissolves the shared lightness skeleton that makes the site
layer governable).

### 4.5 DAB-004 — Neutral palette (approved 2026-11-06)

> **Status: Approved (Owner, 2026-11-06) — ADR-004.** Values live in the
> frontmatter (§3.3); this section defines the ramp's structure and rules.

**Ramp.** Thirteen steps with fixed names: `gray-0`, `gray-50`, `gray-100`,
`gray-200`, `gray-300`, `gray-400`, `gray-500`, `gray-600`, `gray-700`,
`gray-800`, `gray-900`, `gray-950`, `gray-1000`. Shared by every site; no site
theme carries its own neutral values.

**Provenance.** The values are the retired `design.md` neutral set (Tailwind
Neutral lineage) minus `gray-150`. They are adopted, not regenerated: the OKLCH
ladder is the accent mechanism, and regenerating neutrals would invalidate every
ratio already measured against this set for no perceptual gain.

**Frozen.** Changing any neutral value is a breaking change (§2.4). There is no
"close enough" substitution inside a component; if a step does not fit, the
answer is a core decision, not a local tweak.

**Tint policy.** The ramp is pure neutral (C = 0) and identical on every site.
A site theme's `surface tint` override (§1.6) is limited to choosing which
ratified neutral step serves which surface — it may not introduce a tinted or
new hex value. A colored surface tint is a core decision (§2.2), never a site
exception.

**Gap note.** Removing `gray-150` widens the `gray-100` → `gray-200` interval.
Where a surface/border pair previously relied on 150, use the next ratified step
and measure the pair (§10.1); do not interpolate.

### 4.6 DAB-005 — Semantic roles and light/dark mappings (approved 2026-11-06)

> **Status: Approved (Owner, 2026-11-06) — ADR-005.** Values are in the
> frontmatter (`colors.gray-*`, `themes.light.*`, `themes.dark.*`); this
> section explains intent and usage.

**Role set.**

| Role | Purpose |
|---|---|
| `color-background` | Page background |
| `color-surface` | Primary content surface — cards, panels, inputs |
| `color-surface-secondary` | Nested or secondary surface — table header, inset panel |
| `color-text-primary` | Default text |
| `color-text-secondary` | Supporting text |
| `color-text-tertiary` | Hints and metadata — still meets 4.5:1 (DAB-002) |
| `color-text-inverse` | Text on inverted or dark surfaces |
| `color-text-disabled` | Disabled label; contrast-exempt but perceivable |
| `color-border` | Decorative divider and card edge |
| `color-border-strong` | Interactive component boundary — meets 3:1 |
| `color-primary` … `color-on-primary` | Action roles; shape ratified by DAB-003 (§4.4) |
| `color-success` / `-warning` / `-danger` (+ `-strong`, `-subtle`, `on-`) | Status roles; shape ratified by DAB-003, values DAB-006 |
| `color-focus` | Focus indicator; core-fixed, value DAB-006 |
| `color-selection-bg`, `color-selection-fg` | Text selection; values DAB-006 |

**Mappings — light and dark, with measured ratios.**

| Role | Light | Dark | Lowest measured¹ | Requirement |
|---|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | — | — |
| `color-surface` | `gray-0` | `gray-900` | — | — |
| `color-surface-secondary` | `gray-100` | `gray-800` | — | — |
| `color-text-primary` | `gray-900` | `gray-50` | 14.50:1 | 4.5:1 |
| `color-text-secondary` | `gray-700` | `gray-300` | 9.51:1 | 4.5:1 |
| `color-text-tertiary` | `gray-600` | `gray-400` | 6.00:1 | 4.5:1 |
| `color-text-inverse` | `gray-0` | `gray-900` | 17.18:1 | 4.5:1 |
| `color-text-disabled` | `gray-400` | `gray-600` | 2.29:1 | Exempt, recorded |
| `color-border` | `gray-200` | `gray-800` | 1.18:1 | Decorative |
| `color-border-strong` | `gray-500` | `gray-500` | 3.19:1 | 3:1 |

¹ Lowest across both themes and all three ratified surfaces (background,
surface, surface-secondary). Ratios were computed with the WCAG 2.2 formula,
the same math as `scripts/oklch-ramp.mjs`; the full pair list is reproducible
by measuring every text/border role against every surface.

**Rules.**

- Components consume semantic roles only (§3.1). Primitive `gray-*` steps never
  appear in component code.
- `color-border` never carries the only boundary of an interactive control;
  interactive boundaries use `color-border-strong`. Decorative borders carry no
  contrast requirement.
- `color-text-tertiary` is not a contrast escape hatch: hint and metadata text
  still meets 4.5:1, so it is `gray-600`/`gray-400`, not `gray-500`.
- `color-text-disabled` is the only contrast-exempt text role (DAB-002), and a
  disabled control still needs a perceivable state beyond color (§9.2).
- Role names are identical in light, dark, and site themes (§3.5); components
  never branch on theme.
- A site theme may remap which ratified neutral step serves which surface role
  (DAB-004), but may not rename roles, introduce values, or reorder the
  hierarchy. Every remap is re-measured and recorded in the site theme document.
- Focus and selection roles are core-fixed and never accent-derived (DAB-003);
  their values are decided in DAB-006.

**Frontmatter on approval.** Neutral primitives stay under `colors`; the
ratified mappings join a `themes` group keyed by theme (`themes.light.*`,
`themes.dark.*`), with the semantic token names as keys. No values are
duplicated in the body (§3.3) — this table references steps, not hex.

**Deferred:** all functional, focus, and selection values (DAB-006); overlay
(DAB-007).

**Rationale.** Three text levels and three surfaces match the hierarchy real
product pages use. Tertiary at `gray-600`/`gray-400` is the lightest text that
still clears 4.5:1 on every ratified surface. The border split keeps dividers
quiet while making interactive boundaries compliant: `gray-400` measures
2.42–2.52:1 and fails 1.4.11, while `gray-500` is the lightest ratified step
that passes in both themes (3.19–4.74:1).

**Alternatives considered.** Two text levels (rejected — loses the hint/meta
distinction product UI needs); four text levels (rejected — no lighter step
clears 4.5:1 without colliding with disabled); two surfaces (rejected — nested
surfaces would fall back to borders); `border-strong` at `gray-400` (rejected —
fails 1.4.11); separate light and dark `border-strong` values (rejected —
`gray-500` passes both and keeps one memorable boundary value).

### 4.7 DAB-006 — Functional colors, focus and selection (approved 2026-11-06)

> **Status: Approved (Owner, 2026-11-06) — ADR-006.** Values are in the
> frontmatter (`themes.light.*`, `themes.dark.*`); this section explains
> derivation and usage.

**Derivation.** Each status is defined by one hue and one chroma; its four role
values are generated with the OKLCH fixed-lightness method (the same math as
the accent ramp, gamut-clamped by reducing C only):

| Status | Hue | Chroma |
|---|---:|---:|
| success | 150.0 | 0.154 |
| warning | 85.2 | 0.115 |
| danger | 24.9 | 0.190 |

Light roles use L 0.52 (base), 0.44 (strong), 0.95 (subtle, C × 0.25); dark
roles use L 0.72 (base), 0.82 (strong), 0.25 (subtle, C × 0.35). `on-*` is
`#FFFFFF` in light and `gray-1000` in dark. Values are generated, never
hand-picked; changing any input means re-running the derivation and
re-measuring every pair below.

**Values.**

| Status | Theme | base | strong | subtle | on |
|---|---|---|---|---|---|
| success | light | `#007F38` | `#00642B` | `#DDF6E1` | `#FFFFFF` |
| success | dark | `#50BF6F` | `#72E08D` | `#0B2913` | `gray-1000` |
| warning | light | `#856300` | `#694E00` | `#F7EED9` | `#FFFFFF` |
| warning | dark | `#C59F47` | `#E6BE68` | `#2A2008` | `gray-1000` |
| danger | light | `#BE222A` | `#9E0017` | `#FFE9E6` | `#FFFFFF` |
| danger | dark | `#FF716B` | `#FFAAA3` | `#3C1211` | `gray-1000` |

**Role use.**

- **base** — icons, borders, indicators on neutral surfaces; ≥ 3:1.
- **strong** — status text on neutral surfaces; ≥ 4.5:1. Small text never uses
  base.
- **subtle** — alert and banner background; text on it is `text-primary`,
  `strong`, or `base` (all measured).
- **on** — text or icon on its own base fill only; ≥ 4.5:1.

**Measured results** — worst case across all three ratified surfaces:

| Pair | Light | Dark | Requirement |
|---|---:|---:|---:|
| `on` on `base` | 5.13:1 (success) | 7.83:1 (danger) | 4.5:1 |
| `strong` on surfaces | 6.74:1 | 8.31:1 | 4.5:1 |
| `base` on surfaces | 4.71:1 | 5.64:1 | 3:1 |
| `text-primary` on `subtle` | 15.41:1 | 15.01:1 | 4.5:1 |
| `base` on `subtle` | 4.48:1 | 6.08:1 | 3:1 |
| `strong` on `subtle` | 6.42:1 | 8.96:1 | 4.5:1 |

**Focus.** `color-focus` is `#4C89EF` in both themes — core-fixed, never
accent-derived (DAB-003). Measured against all three surfaces per theme:
light 3.28 / 3.42 / 3.14:1, dark 5.78 / 5.23 / 4.42:1 — all above 3:1. The
ring is 2px outline with 2px offset (DAB-002) and keeps the element's radius.

**Selection.** `color-selection-bg` is `gray-900` in light and `gray-50` in
dark; `color-selection-fg` is `color-text-inverse` (17.93:1 light,
17.18:1 dark). Selection is an inverted neutral pair, not an accent tint.

**Rules.**

- Functional colors never carry brand expression, never replace the accent,
  and are never used as decorative fills.
- Status always pairs with a non-color cue (§10.5).
- `on-*` is used only on its own base fill; it is not a general text color.
- Focus and selection are core-fixed: no site theme may override them, and
  they do not follow the accent (DAB-003).
- Site themes cannot override any value in this section.

**Frontmatter on approval.** Functional roles and `color-focus`,
`color-selection-bg`, `color-selection-fg` join `themes.light` and
`themes.dark`.

**Deferred:** overlay (DAB-007).

**Rationale.** Fixed role lightness makes light and dark the same hue at
different lightness, so a status never changes meaning between themes.
Regenerating the light values too (Owner's choice) removes the success-base
exception and leaves one derivation for both themes. Every pair clears DAB-002
with margin: the worst 4.5:1 requirement measures 5.13:1, the worst 3:1
requirement measures 4.48:1.

**Alternatives considered.** Adopting the retired light values (rejected —
leaves one exception and two derivation methods); hand-picked dark values
(rejected — hue drift between themes); reusing light values in dark (rejected —
contrast collapses); black `on-success` on the retired green (rejected — makes
the three `on` roles inconsistent).

### 4.8 DAB-007 — Overlay token (approved 2026-11-07)

> **Status: Approved (Owner, 2026-11-07) — ADR-007.** The value is in the
> frontmatter (`themes.light.color-overlay`, `themes.dark.color-overlay`).

**Token.** One token, `color-overlay`, with the value `rgba(0, 0, 0, 0.50)` in
both themes. There is no per-theme variant.

**Use.** Only as the modal scrim behind dialogs, drawers, and command palettes.
Not for hover or pressed states — those are token changes (§9.2). Not for media
caption backdrops: a content overlay is a component-level concern with its own
measured contrast, not a system role.

**Measured.** Light theme: `gray-50` page under scrim 3.94:1, `gray-0` dialog
over scrim 4.12:1. Dark theme: page 1.03:1, dialog 1.14:1. At 40% the light
value measures 2.96:1 (below 3:1), which is why 50% is the floor.

**Rule — the dark-theme limit.** A black scrim cannot separate a `gray-900`
dialog from a `gray-950` page; measured separation stays at 1.13–1.15:1 from
40% through 70% opacity. In dark theme the scrim signals modality only. A modal
surface must additionally carry `color-border-strong` (or a ratified elevation
once DAB-011 lands). Never compensate by raising scrim opacity — it adds no
separation and dims the page for nothing.

**Frontmatter on approval.** `color-overlay` joins both `themes.light` and
`themes.dark` with the same value: every semantic role resolves per theme even
when two themes agree, so tooling never needs a theme-independent branch.

**Rationale.** One value keeps the token surface minimal and matches the
measured behavior. A second strength has no current use case; a separate
opacity token invites two-token usage where one is enough.

**Alternatives considered.** 0.60 in both themes (rejected — heavier light
theme, no dark benefit); per-theme 0.50/0.60 (rejected — measured dark
separation unchanged); a second `color-overlay-strong` (rejected — no nested
modal scenario yet); splitting color and opacity into two tokens (rejected —
easy to consume only one); allowing media or state use (rejected — different
requirements and conflicts with §9.2).

---

## 5. Typography — decision area

> **Typography domain complete — DAB-008 and DAB-009 approved (§5.4, §5.5).**
> No typography value is a standard unless it appears in the frontmatter or in
> these ratified sections.

### 5.1 Questions

- Typeface, fallback stack, licensing, loading strategy.
- Scale: roles, sizes, line heights; body stability across viewports; display
  scaling strategy (fluid vs breakpoint).
- Weight set; letter-spacing policy (role-based vs none).
- Casing rules for headings, buttons, and labels.
- Simplified Chinese support and mixed CJK/Latin rules.

### 5.2 Requirements

- First-class Simplified Chinese rendering; mixed-language wrapping verified
  before approval.
- Long-form reading measure around 60–75 characters.
- No second scale; letter-spacing only where validated.

### 5.3 Decisions

| ID | Question | Status |
|---|---|---|
| `DAB-008` | Typeface, fallbacks, licensing, loading | Approved — §5.4 |
| `DAB-009` | Scale, weights, tracking, casing | Approved — §5.5 |

### 5.4 DAB-008 — Typefaces and loading (approved 2026-11-07)

> **Status: Approved (Owner, 2026-11-07) — ADR-008.** Family values are in the
> frontmatter (`typography.text-family-sans`, `typography.text-family-mono`).

**Families.**

| Role | Family | License | Notes |
|---|---|---|---|
| Latin | Inter | SIL OFL 1.1 | Variable weight axis; self-hosted subset |
| CJK and full-width symbols | Noto Sans SC | SIL OFL 1.1 | Optional per-site subset; never the full font |
| Monospace | system stack | — | No webfont; for code and tabular numerals only |

**Stack.**

```
"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif
```

Latin glyphs resolve in Inter; CJK and full-width glyphs fall through to Noto
Sans SC, then to the platform's best CJK face. Noto is first in the CJK chain
so a shipped subset renders identically everywhere; when a site ships no
subset, the stack degrades to PingFang SC (macOS) or Microsoft YaHei (Windows)
without any blank state.

**Licensing.** Both families are SIL OFL 1.1. Self-hosting requires shipping
the license file and preserving copyright notices; subset builds follow any
reserved-font-name terms in the license. Fonts are never fetched from or
hot-linked to a third-party host.

**Loading.**

- Self-hosted `woff2` only. No public CDN — Google Fonts is unreliable in
  mainland China and adds a blocking third-party origin.
- `font-display: swap` on every `@font-face`; text is never invisible while a
  font loads.
- Inter ships as one variable `woff2` with a Latin subset and is the only
  preloaded font file.
- A Noto Sans SC subset is optional per site. If shipped, it is self-hosted and
  split with `unicode-range` so a page downloads only the slices it renders.
  The full CJK font (several MB) is never shipped.
- Targets, not gates: Inter Latin subset ≤ 120 KB; any Noto subset ≤ 500 KB in
  total. Exceeding a target requires a recorded reason in the site theme
  document.

**Rules.**

- There is exactly one sans stack. It is exported as `text-family-sans`;
  components never declare `font-family` themselves.
- A site theme may not substitute another family. The stack is core-fixed.
- Latency-sensitive sites may tune fallback metrics (`size-adjust`,
  `ascent-override`) locally; those values are implementation, not core tokens.
- Emoji resolve through the platform emoji font. Icons are not emoji and are
  not covered by this decision.

**Frontmatter on approval.**

```yaml
typography:
  text-family-sans: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  text-family-mono: 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
```

**Deferred:** type scale, weights, tracking, and casing (DAB-009).

**Rationale.** Inter gives one consistent, open-licensed Latin face with a
small variable subset; Noto Sans SC gives a matching open CJK face that can be
shipped in slices or skipped entirely, and the system fallbacks guarantee
Chinese text renders on every platform. Self-hosting removes CDN unreliability
and a third-party failure mode; `swap` removes invisible-text risk.

**Alternatives considered.** System-only stack (rejected — Latin metrics drift
between Windows, macOS, and Linux); Noto Sans SC as a full webfont (rejected —
multi-megabyte first load); Google Fonts or jsDelivr (rejected — blocked or
slow in mainland China, extra origin); `sans-serif` as the only CJK fallback
(rejected — browser-dependent selection); a single bilingual font (rejected —
CJK coverage forces the size problem into every page).

### 5.5 DAB-009 — Type scale, weights, tracking, casing (approved 2026-11-07)

> **Status: Approved (Owner, 2026-11-07) — ADR-009.** Token values are in the
> frontmatter (`typography.text-*`); this section explains intent and usage.

**Scale.** 16px base, integer sizes 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48.
Body and below are fixed; `display` and `h1` scale fluidly with the viewport.

| Token | Size | Line height | Weight | Behavior |
|---|---:|---:|---:|---|
| `text-display` | 36 → 48 | 1.1 | 600 | fluid `clamp()` |
| `text-h1` | 30 → 36 | 1.2 | 600 | fluid `clamp()` |
| `text-h2` | 24 | 1.2 | 600 | fixed |
| `text-h3` | 20 | 1.3 | 600 | fixed |
| `text-h4` | 18 | 1.4 | 600 | fixed |
| `text-body-lg` | 18 | 1.7 | 400 | fixed |
| `text-body` | 16 | 1.7 | 400 | fixed |
| `text-body-sm` | 14 | 1.6 | 400 | fixed |
| `text-label` | 14 | 1.4 | 600 | fixed |
| `text-caption` | 12 | 1.5 | 400 | fixed |

Fluid formulas: `text-display` `clamp(2.25rem, 1.5rem + 3vw, 3rem)`;
`text-h1` `clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)`. Hierarchy holds at every
width: 36 > 30 > 24 > 20 > 18 at the narrow end and 48 > 36 > 24 > 20 > 18 at
the wide end.

**Weights.** Two only: 400 regular and 600 semibold. There is no 700 token;
`<strong>` and emphasis use 600. Font synthesis stays enabled — a platform
without a true 600 (notably Microsoft YaHei) synthesizes it, which is preferred
over a false hierarchy or a heavier 700.

**Tracking.** Zero everywhere, including headings. Negative tracking on Chinese
headings tightens characters in a way mixed CJK/Latin pages cannot absorb;
display polish is not worth a per-language exception (§5.2).

**Casing.** Sentence case for headings, buttons, labels, and navigation. No
all-caps, no title case. Acronyms and product names keep their own casing.

**Numerals.** Tabular figures (`font-variant-numeric: tabular-nums`) in tables,
metrics, and aligned numeric columns; proportional figures everywhere else.

**Line height rationale.** 1.7 for body text serves both Latin and CJK without
a per-script branch; 1.1–1.4 for headings keeps multi-line Chinese headings
readable at display sizes.

**Frontmatter on approval.**

```yaml
typography:
  text-display: { fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: 0 }
  text-h1:      { fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  # … one entry per role in the table above
```

**Rationale.** Integer sizes keep implementation and design tools aligned;
16px body is the smallest comfortable Chinese body size on low-density
screens. Two weights cover the hierarchy without relying on synthesized
intermediates. Zero tracking is the only choice that survives mixed-script
pages. Fixing body sizes protects reading; letting only display and h1 scale
prevents cramped mobile headlines without destabilizing text.

**Alternatives considered.** 14px base (rejected — too small for Chinese body
text on low-density screens); strict 1.25 ratio (rejected — produces 25px and
31.25px sizes that fight integer design tools); 400/700 (rejected — heavier
headings, and 700 exists as a token only to be avoided); 400/500/700 (rejected
— 500 synthesizes on YaHei, making cross-platform hierarchy less consistent);
negative tracking on display (rejected — tightens Chinese headings); per-`lang`
tracking (rejected — silently fails when a language attribute is missing); all
fluid sizes (rejected — small text can shrink below readable sizes).

---

## 6. Spacing, Sizing, Radius & Borders — decision area

> **Space and shape domain complete — DAB-010 approved (§6.4).** No spacing,
> sizing, radius, or border value is a standard unless it appears in the
> frontmatter or in that section.

### 6.1 Questions

- Spacing scale (base unit, steps) and named use ranges (inline gap, control
  padding, card padding, section rhythm).
- Control heights and icon sizes as tokens.
- Radius language and its terminology; border width rules.

### 6.2 Requirements

- No free values: if no token fits, the answer is a new decision, not a magic
  number.
- A visual default size is not a touch-target claim (§10.4).
- Nested radii never exceed the parent without a documented reason.

### 6.3 Decisions

| ID | Question | Status |
|---|---|---|
| `DAB-010` | Spacing scale, control heights, icon sizes, radius scale, border rules | Approved — §6.4 |

### 6.4 DAB-010 — Spacing, sizing, radius, borders (approved 2026-11-07)

> **Status: Approved (Owner, 2026-11-07) — ADR-010.** Values are in the
> frontmatter (`spacing`, `sizing`, `radius`, `border` groups); this section
> explains intent and usage.

**Spacing — 4px grid.** Fourteen steps; the scale is carried from the canonical
`design.md` §7.1, which is already 4px-based, with a 2px half-step for fine
optical alignment.

| Token | Value | Typical use |
|---|---:|---|
| `space-0` | 0 | Reset |
| `space-0-5` | 2 | Fine alignment, icon nudges |
| `space-1` | 4 | Tight inline gaps |
| `space-2` | 8 | Compact control gaps, label spacing |
| `space-3` | 12 | Compact padding |
| `space-4` | 16 | Default small padding, layout gaps |
| `space-5` | 20 | Intermediate component spacing |
| `space-6` | 24 | Standard card padding |
| `space-8` | 32 | Large component gaps |
| `space-10` | 40 | Section separation |
| `space-12` | 48 | Large section separation |
| `space-16` | 64 | Page-level rhythm |
| `space-20` | 80 | Large page sections |
| `space-24` | 96 | Hero separation |

Usage ranges: compact control padding 8–12, standard control padding 12–16,
card padding 16–24, section gaps 32–64, page rhythm 64–96. No free values.

**Control heights.** `control-height-sm` 32, `control-height-md` 40,
`control-height-lg` 48. `md` is the default visual size, not a touch claim: on
touch surfaces a control must reach a 44×44 effective target (§10.4) — either
use `lg`, or provide the missing hit area through spacing so the target, not
just the artwork, measures at least 44×44.

**Icon sizes.** `size-icon-sm` 16, `size-icon-md` 20 (default), `size-icon-lg`
24, `size-icon-xl` 32. Icon artwork is never the hit target.

**Radius — Apple ladder.** Adopted from the Apple reference at the Owner's
explicit request. Radius is a shape scale, not a spacing scale, so these values
are intentionally not multiples of 4.

| Token | Value | Use |
|---|---:|---|
| `radius-none` | 0 | Full-bleed sections, deliberate square edges |
| `radius-xs` | 5 | Compact inline chips (rare) |
| `radius-sm` | 8 | Default controls — buttons, inputs, selects |
| `radius-md` | 11 | Capsules, secondary chips, soft buttons |
| `radius-lg` | 18 | Cards, panels, popovers, inline imagery |
| `radius-pill` | 9999px | Primary CTAs and search — intentional, never default |
| `radius-full` | 50% | Circular icon buttons and avatars |

Nested surfaces never take a larger radius than their container. `radius-pill`
is a deliberate action signal, not a default for every button or card.

**Borders.** Default width 1px, color from `color-border` or
`color-border-strong`. 2px is reserved for the focus outline (DAB-002) and for
selected outlines where validation shows a real need. No 0.5px borders — device
pixel snapping makes them inconsistent across displays.

**Conflict with the canonical document.** This section takes precedence over
the canonical `design.md` §7.3 radius scale (`0/4/6/8/12/16/24/9999`) because
the Owner explicitly asked for the Apple ladder; §7.2's `size-icon-xs` 12 and
`control-height-xl` 56 are not carried forward. The spacing scale follows
`design.md` §7.1 unchanged.

**Frontmatter on approval.** Values join `spacing`, `sizing`, `radius`, and
`border` groups.

**Rationale.** A 4px grid keeps every component dimension derivable with one
mental unit. Three control heights cover dense, default, and touch use without
an ambiguous fourth option. Apple's radius ladder gives the system a
recognizable, restrained shape grammar: 8 for controls, 11 for capsules, 18 for
cards, pill only for actions.

**Alternatives considered.** 8px grid (rejected — loses 4 and 12, which compact
controls need); 36/44/52 control heights (rejected — desktop controls read
loose); 16/24/32 icons (rejected — 24 crowds a 32px control and has no 20px
default); the canonical `design.md` radius scale (overridden — the Owner asked
for Apple); 0.5px borders (rejected — inconsistent rendering).

---

## 7. Elevation & Motion — decision area

> **DAB-011 proposed (§7.4).** No shadow, duration, or easing value is a
> standard until its decision is Approved.

### 7.1 Questions

- Elevation ladder: how many levels, what each maps to, values per theme.
- Motion: duration scale, easing, which elements animate, reduced-motion
  behavior.

### 7.2 Requirements

- Every elevation level maps to a real layering relationship; no decorative
  shadows.
- Every animation has a stated purpose; `prefers-reduced-motion` behavior is
  defined.

### 7.3 Decisions

| ID | Question | Status |
|---|---|---|
| `DAB-011` | Elevation levels and values; motion durations, easing, reduced-motion rules | Proposed — §7.4 |

### 7.4 Proposed answer — DAB-011 (pending Owner approval)

> **Status: Proposed, not approved.** No shadow, duration, or easing value is a
> standard until the Owner accepts this section.

**Elevation — flat at rest, one floating level.** Cards, buttons, navigation,
and every resting surface carry no shadow; layering comes from surface steps and
`color-border`. Exactly one shadow token exists:

`shadow-floating: 2px 4px 16px rgba(0, 0, 0, 0.16)`

It is used in two places only: the hover lift of an interactive card, and
floating layers (dialog, popover, dropdown, toast). The geometry is measured
from the Apple Store card hover (`.rf-ccard-content:hover`,
`.rf-hcard-content:hover`, `.rf-recommcard-content:hover`):
`box-shadow: 2px 4px 16px #00000029` with `transform: scale3d(1.01,1.01,1.01)`.

**Dark theme.** Shadows are nearly invisible on `gray-950`; this is the same
limit recorded in DAB-007. Floating layers must also carry
`color-border-strong`; the shadow is never the only separation cue.

**Hover lift — interactive cards only.** A card that is clickable across its
whole surface may lift on hover: `transform: scale(1.01)` plus
`shadow-floating`. This is the only transform allowed in a resting UI; it is
forbidden on buttons, inputs, navigation, and non-interactive cards. Apple's
hover `border-radius: 28px` change is not adopted — radius never animates.

**Motion durations.**

| Token | Value | Use |
|---|---:|---|
| `duration-fast` | 100ms | Color, background, border, opacity feedback |
| `duration-base` | 200ms | Tooltip and dropdown entrance |
| `duration-slow` | 300ms | Card hover lift, dialog and drawer entrance |

300ms and its easing are measured from the Apple Store hover; 100ms matches the
same stylesheet's color transitions (`background-color .1s linear`); 200ms is
the system's middle step, not an Apple measurement.

**Easing.**

| Token | Value | Use |
|---|---|---|
| `easing-standard` | `cubic-bezier(0, 0, 0.5, 1)` | Transform, shadow, overlay entrance |
| `easing-linear` | `linear` | Color-only transitions |

**Animated properties.** Only `transform`, `opacity`, `color`,
`background-color`, `border-color`, and `box-shadow`. Layout properties —
`width`, `height`, `top`, `left`, `margin`, `padding` — are never animated.
There is no infinite decorative animation, no auto-playing motion, and no
parallax.

**Press state.** Press is a color or border change at `duration-fast`, not a
scale. Apple's `scale(0.95)` press is deliberately not adopted: a scaled press
on every control is louder than this system's flat, border-first character.

**Reduced motion.** Under `prefers-reduced-motion: reduce`: transform, scale,
translate, parallax, and auto-play are disabled entirely; color and opacity
changes remain at `duration-fast`; `shadow-floating` appears instantly on hover
and floating layers. Focus visibility is never reduced.

**Frontmatter on approval.** `elevation.shadow-floating`, `motion.duration-*`,
and `motion.easing-*` join the frontmatter.

**Rationale.** One shadow token keeps the system flat without losing the
functional separation a floating layer needs. The Apple Store hover is a
measured, restrained reference: 1% scale and a 16% shadow at 300ms — enough to
signal interactivity without becoming decoration. Disabling movement while
keeping color and opacity satisfies reduced-motion without removing state
feedback.

**Alternatives considered.** No shadows at all (rejected — floating layers lose
their only depth cue in light theme); three elevation levels (rejected —
invisible in dark theme and contrary to the flat character); animating radius
or layout (rejected — layout thrash and the radius scale is fixed); Apple's
`scale(0.95)` press (rejected — too loud for every control); disabling all
animation under reduced motion (rejected — loses non-motion state feedback).

---

## 8. Layout & Responsive Behavior — decision area

> **Open.** Decision DAB-012 (§13).

### 8.1 Questions

- Breakpoints, container widths, per-viewport gutters, grid defaults.
- Mobile-first baseline; typography behavior across viewports.

### 8.2 Requirements

- Cards reflow by minimum usable width, not by desktop column counts.
- Long-form text holds reading measure even in wide containers.
- Breakpoints are applied when content needs them, not by default.

### 8.3 Validation widths (framework)

Ratified layouts are reviewed at `375`, `390`, `640`, `768`, `1024`, `1280`,
and `1536` density-independent pixels: wrapping, hierarchy, contrast, spacing,
alignment, reflow, and horizontal overflow — same representative content at
every width.

### 8.4 Decisions

| ID | Question | Status |
|---|---|---|
| `DAB-012` | Breakpoints, containers, gutters, grid defaults | Open |

---

## 9. Components — Standards & Lifecycle

### 9.1 Component specification standard

Every component entry includes: **name** (identical to its token key),
**purpose**, **anatomy** (background, text, border, typography, padding, height,
radius, shadow), **variants**, **sizes**, **state matrix**, **accessibility**
(role, keyboard, accessible name, focus behavior), and component-specific
**Do/Don't**.

### 9.2 State matrix (standard)

| State | Requirement |
|---|---|
| Default | Baseline specification |
| Hover | Only on pointer platforms; a token change, never an ad hoc value |
| Pressed | Encoded as a real variant — never prose-only |
| Focused | Ratified focus treatment (DAB-006); visible in every ratified theme |
| Disabled | Not opacity-only; remains perceivable |
| Selected | Non-color cue required (§10.5) |
| Loading / Error | Layout-preserving; announced; error pairs with text (§11.3) |

### 9.3 Lifecycle

| Stage | Meaning | Gate |
|---|---|---|
| Proposed | RFC opened | §2.2 |
| Draft | Spec written, tokens reserved | Review criteria §2.3 |
| Pilot | Used in one real site/feature | Pilot report: friction, exceptions |
| Adopted | Promoted to the shared layer | Definition of Done (§9.4) |
| Deprecated | Replaced; migration documented | §2.6 |

### 9.4 Definition of Done (a component is not done until)

- [ ] Uses only approved semantic and component tokens.
- [ ] Every state in the matrix implemented and visually verified.
- [ ] Focus visible in every ratified theme; keyboard operation verified.
- [ ] Contrast measured on the actual surfaces; failures explicit.
- [ ] English, Chinese, and mixed-language labels verified.
- [ ] Light and dark themes verified at all validation widths (§8.3).
- [ ] Frontmatter entry and body specification match.
- [ ] Accessibility checklist (§10.6) passes.

---

## 10. Accessibility & Interaction

**Conformance target: WCAG 2.2 Level AA — ratified by DAB-002 (2026-11-06).**
The checklist structure below is framework. Named opt-ins above the baseline,
each deliberate: 44×44 touch targets (§10.4, stricter than SC 2.5.8's 24px) and
the focus geometry of SC 2.4.13 (§10.2 — a AAA criterion adopted as house
policy). Blanket AAA conformance is a non-goal.

### 10.1 Contrast

Every foreground/background pair is measured on its actual surface (page, card,
input, overlay) in every ratified theme; results are recorded in a table.
"Estimated ~" ratios are documentation defects. Ratified thresholds:

| Content | Minimum | WCAG criterion |
|---|---|---|
| Body text and every text style below large-text size — secondary and muted text included | 4.5:1 | 1.4.3 |
| Large text (≥ 24px regular, ≥ 18.66px bold) | 3:1 | 1.4.3 |
| Non-text UI: interactive component boundaries, informative icons, focus indicators | 3:1 | 1.4.11 |
| Disabled controls | Exempt, but recorded in the table — never silently omitted | 1.4.3 exception |

Secondary and muted text are still text: they meet 4.5:1. "It's only a hint" is
not a relaxation. These thresholds are the acceptance line for DAB-004, DAB-005,
and DAB-006 values, and they are what `scripts/oklch-ramp.mjs` enforces.

### 10.2 Focus

- Every keyboard-focusable element has a visible indicator with ratified color
  (DAB-006), keeping the element's own radius.
- **Ratified geometry (DAB-002):** outline 2px, offset 2px. The indicator must
  hold ≥ 3:1 against the colors adjacent to it — the geometry of WCAG 2.2 SC
  2.4.13, adopted as house policy and mandatory here.
- Verified on every ratified theme and surface. The outline is never removed
  without an approved replacement.

### 10.3 Keyboard & semantics

- Native semantic elements where they exist; accessible names for icon-only
  controls; logical focus order; expected keyboard interactions per component.
- Interactive behavior is not implemented on non-semantic elements when a
  native element fits.

### 10.4 Target size

- Minimum 44×44 effective target on touch surfaces; icon artwork may be smaller
  than its target. Exceptions documented with rationale.

### 10.5 Non-color cues

Status, selection, and errors always carry a text, icon, or shape cue in
addition to color.

### 10.6 Per-component accessibility checklist

Role · keyboard map · accessible name · focus order · contrast on real surfaces
· every ratified theme · screen-reader announcement of dynamic states.

### 10.7 Motion & cognition

`prefers-reduced-motion` respected; no flashing, parallax, or auto-play without
controls; no essential task depends on timing or memory.

---

## 11. Content & Internationalization

### 11.1 Voice and tone

Direct, calm, specific. Verbs and concrete nouns; no hype; errors never blame
the user. One term per concept — synonyms live in the Glossary (§14) to be
avoided.

### 11.2 Casing and labels

- Buttons and headings: sentence case.
- English and Simplified Chinese are first-class; both are tested for wrapping,
  punctuation, and line density at all validation widths.

### 11.3 Message patterns

- **Error:** what happened, why, what to do next — plus a non-color cue.
- **Empty:** what will appear here and the first action.
- **Loading:** what is loading and whether the user can leave.

### 11.4 Localization rules

- No concatenated translated strings; full messages with named placeholders.
- Dates, numbers, and currency formatted per locale; never hard-coded.
- Pseudo-localization (length ×1.4, accented variants) before release.
- Chinese-specific: no orphaned punctuation at line start; mixed CJK/Latin
  spacing reviewed; full-width/half-width punctuation consistent.

---

## 12. Quality Gates & Release

### 12.1 Foundation test page

Built as decisions reach Approved; it demonstrates **only approved values**:
palette, semantic roles per ratified theme, every typography token (English /
Chinese / mixed), spacing, sizing, radius on representative shapes, borders and
surface levels, containers and grid, focus / disabled / selected / error /
loading states, and a contrast table with calculated results where failures are
explicit.

### 12.2 Gates

| Gate | Requirement |
|---|---|
| Visual QA | No unintended horizontal overflow; no clipped text at any validation width; hierarchy readable without color; surfaces and borders distinguishable in every ratified theme |
| Accessibility QA | §10 checklist; contrast table complete; reduced motion verified |
| Theme QA | Every ratified theme verified; site themes within the ratified architecture |
| Release checklist | Changelog updated; open decisions reviewed; deprecations carry migration notes; documentation and frontmatter agree; no unapproved token introduced |

### 12.3 Reporting (agents and contributors)

Hand-offs report: files changed; tokens added/changed/deprecated; themes and
widths verified; contrast results including failures; verification commands
actually run; decisions still requiring human review. Never claim a check
passed unless it was actually performed.

---

## 13. Decision Roadmap

Every design decision — architectural or numeric — is recorded here, in
dependency order. A record closes by becoming an ADR entry (§2.5), updating the
frontmatter if a token is involved, and adding a changelog row.

| ID | Area | Question (abridged) | Depends on | Status |
|---|---|---|---|---|
| `DAB-001` | System architecture | Layering model; what varies per site; theming model (light/dark, site themes) | — | **Approved (2026-11-01)** — ADR-001 |
| `DAB-002` | Accessibility policy | Conformance target; contrast thresholds; focus policy | DAB-001 | **Approved (2026-11-06)** — ADR-002 |
| `DAB-003` | Color system model | Palette structure; accent strategy; functional set shape | DAB-001, DAB-002 | **Approved (2026-11-06)** — ADR-003 |
| `DAB-004` | Neutral palette | Ramp size, values, tint | DAB-003 | **Approved (2026-11-06)** — ADR-004 |
| `DAB-005` | Semantic roles | Role set; light/dark mappings | DAB-003, DAB-004 | **Approved (2026-11-06)** — ADR-005 |
| `DAB-006` | Functional colors | Status colors, focus, selection values | DAB-003, DAB-005 | **Approved (2026-11-06)** — ADR-006 |
| `DAB-007` | Overlay | Token and opacity | DAB-005 | **Approved (2026-11-07)** — ADR-007 |
| `DAB-008` | Typeface | Family, fallbacks, licensing, loading | DAB-001 | **Approved (2026-11-07)** — ADR-008 |
| `DAB-009` | Type scale | Roles, sizes, weights, tracking, casing | DAB-008 | **Approved (2026-11-07)** — ADR-009 |
| `DAB-010` | Space & shape | Spacing scale, control heights, icons, radius, borders | DAB-001 | **Approved (2026-11-07)** — ADR-010 |
| `DAB-011` | Elevation & motion | Levels, values; durations, easing, reduced motion | DAB-001 | Proposed (2026-11-07) — §7.4 |
| `DAB-012` | Layout | Breakpoints, containers, gutters, grid | DAB-001 | Open |
| `DAB-013` | Component scope | Shared-layer pilot set and order | most | Open |

Working agreement: decisions are taken in roadmap order (dependencies may pull
one forward with the owner's sign-off). `1.0.0` ships when DAB-001…DAB-013 are
Approved and the foundation test page (§12.1) passes.

---

## 14. Glossary

| Term | Definition |
|---|---|
| Blank-slate rule | No design decision is pre-decided; only §13 records carry design authority. |
| Primitive token | Raw value with no UI role (e.g. `gray-500`). |
| Semantic token | Role mapped to a primitive within a ratified theme. |
| Component token | Repeated component decision that semantic tokens cannot express. |
| ADR | Architecture Decision Record — a permanent entry in §2.5. |
| RFC | Request for Comments — the change proposal of §2.2. |
| Decision record (`DAB-xxx`) | An open or closed entry in the §13 roadmap. |
| Definition of Done | The §9.4 checklist a component must pass to be Adopted. |
| Pill | Fully rounded shape using a full-radius token. |
| Capsule | Rounded rectangle with a fixed radius smaller than half its height. |
| Rounded rectangle | Rectangle using a fixed radius token. |
| Approved | Confirmed and safe to implement. |
| Proposed | Recommended but not approved. |
| Pending validation | Requires contrast, visual, or implementation testing. |
| Experimental | Limited trial; not a system-wide rule. |
| Deprecated | Retained for migration only; not for new work. |
