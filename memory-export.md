# ZCode Project Memory Export

- **Project:** `A:\Dev\Projects\dabdesign.md`
- **Exported:** 2026-10-22
- **Source:** `C:\Users\DabAZ\.zcode\cli\memories\projects\dabdesign.md-10ebd7d5daf0e80a\memory\`
- **Entries:** 9

> This is a point-in-time, human-readable copy of the live project memory. The live
> memory remains the source of truth for the agent; editing this file does not
> update the agent's memory. `[[name]]` references point to another entry in this
> file. Internal session IDs and node metadata are omitted.

## Index

| # | Memory | Type | Description |
|---:|---|---|---|
| 1 | Company style files are observed, not official | project | The six company reference files are developer observations, not official docs. |
| 2 | design.md is team-owned, not brand analysis | feedback | The new design.md is an in-house team system; no provenance/collection framing. |
| 3 | design.md template v2 structure | project | `template.md` is the team-owned 16-section design-system skeleton. |
| 4 | Core template file exists | project | `core-template.md` is the foundation-only core; `template.md` is the full layered skeleton. |
| 5 | Design system = shared core + per-site themes | project | Neutral-first scopes the foundation; sites are DabAZ, DabMusic, DabSudoku, DabMinesweeper. |
| 6 | Per-site accent ramp contract | project | Each site owns one 10-step accent ramp mapped into five fixed semantic roles. |
| 7 | OKLCH fixed-lightness ramp method | project | The ten fixed L values and C curve chosen for every per-site ramp. |
| 8 | System and company are both DabWave | project | Both skeletons were renamed from `<Team>` placeholders; `design.md` stays DabAZ. |
| 9 | Pace: build the design system step by step | feedback | The user wants first principles and one step at a time, not a finished document in one pass. |

---

## 1. Company style files are observed, not official

- **Name:** `company-style-files-are-observed-not-official`
- **Type:** project
- **Description:** The six company style files (`stripe/vercel/apple/openai/anthropic/notion .md`) are developer observations of live sites, not official brand docs, so they contain real inconsistencies.

The company style reference files in this repo (`stripe.md`, `vercel.md`, `apple.md`, `openai.md`, `anthropic.md`, `notion.md`) were each created by a developer observing the company's public website and writing up measured tokens. They are not official brand documentation and are not fact-checked against a source of truth.

**Why:** This changes how they should be reviewed and used. Treating them as authoritative leads to inheriting their errors. Concrete examples found on 2026-10-21: `notion.md` describes its primary CTA as a "purple pill" in prose while its own component tokens and Do's section insist on 8px rectangles; `apple.md` has `button-secondary-pill` as a filled canvas background in YAML but "transparent" in prose; `stripe.md` has a typo in its title ("Stripi") and a `text-input-focused` variant identical to the default; `anthropic.md` uses "likely/possibly" to speculate about components and has 68px in YAML vs 72px in prose.

**How to apply:** When citing or extending these files, cross-check prose against frontmatter and prefer the frontmatter's concrete values. Report contradictions to the user instead of silently picking one side. Use [[design-md-template-v2-structure]] as the corrected structure when writing new files.

---

## 2. design.md is team-owned, not brand analysis

- **Name:** `design-md-is-team-owned-not-brand-analysis`
- **Type:** feedback
- **Description:** The user's design.md direction is a from-scratch team design system, not a per-company style reference; do not add observation or provenance framing.

When the user asked for a design.md skeleton, they corrected the direction: "我希望做一个我自己团队的 design.md 所以要从头开始新建一个专业的 design.md" and asked to remove collection-method content ("去除采集方法这些吧").

**Why:** The repo's existing `design.md` is DabAZ's own brand/system spec (neutral-first, Inter, light/dark themes). The company files are reference material, not the product. Treating the skeleton as another brand-analysis template produced the wrong document type.

**How to apply:** For new/revised `design.md` work, write as the owning team: stable section names, status labels, ownership/approval, changelog, governance, and acceptance gates. Skip source-page lists, capture dates, confidence ratings, and "observed at" notes. Keep values as placeholders unless the user supplies approved tokens. See [[design-md-template-v2-structure]].

Scope note: "从零开始新建" does not mean ignoring the repo's existing `design.md`. Whether the team system inherits that foundation, forks it, or replaces it is an explicit open decision that the user has to make; do not assume either way. Pace matters too — see [[user-prefers-slow-step-by-step-design-system-pace]].

---

## 3. design.md template v2 structure

- **Name:** `design-md-template-v2-structure`
- **Type:** project
- **Description:** `template.md` is now a team-owned design system skeleton (not a company observation template); the user directed removal of provenance/collection metadata.

On 2026-10-21 the user asked for a chapter skeleton to write `design.md` against. The first version was an observation-document template (Provenance & Confidence, Source Pages, etc.); the user then redirected: they want a **team's own design system written from scratch**, and asked to **remove collection-method / provenance content entirely**. `template.md` was rewritten accordingly.

Current 16 sections in `template.md`: 0 Document Control & Status Model, 1 Purpose/Principles/Scope, 2 Token Architecture, 3 Color & Themes, 4 Typography, 5 Spacing/Sizing/Radius/Borders, 6 Elevation & Motion, 7 Layout & Responsive, 8 Components, 9 Accessibility & Interaction, 10 Content & Voice, 11 Implementation Guidance for engineers/agents, 12 Contribution & Governance, 13 Open Decisions & Known Gaps, 14 Quality Gates, 15 Changelog, 16 Glossary.

**Why:** The user's goal is a professional, token-driven in-house system, not brand-analysis write-ups. Provenance/confidence chapters were wrong for that purpose; governance, status model, and acceptance gates are what an internal system needs.

**How to apply:** When writing or revising a `design.md` here, use this structure and do not reintroduce source-page, collection-method, or confidence sections. Hard rules kept from the first version: numeric values live only in YAML frontmatter with prose using `{token}` refs; state variants must encode real differences; terminology (pill/capsule/rectangle) defined once in the glossary; no invented brand colors or scale values (placeholders stay placeholders). frontmatter keeps the repo's naming (`color-*`, `text-*`, `space-*`, `radius-*`, `shadow-*`) and `version: alpha` is the *format* version while the spec version lives in Document Control. For neutral-first systems, `color-primary` may map to a neutral — record that in section 3.4 rather than inventing an accent. The six company files are still observation-based, not authoritative: see [[company-style-files-are-observed-not-official]].

**Workflow after the skeleton:** the skeleton is a reference, not the next deliverable. The user is building the system incrementally and asked what to do *before* writing any of it (see [[user-prefers-slow-step-by-step-design-system-pace]]). Prep work surfaced for them: answer four framing questions (why now, who uses it, coverage, 6–12 month success), audit existing UI for duplicated/conflicting colors and components, decide how the team system relates to the existing DabAZ foundation (inherit vs. fork), set principles and accessibility target, assign ownership/governance, settle tooling and token source of truth, then pilot 5–8 components in a real product before scaling.

---

## 4. Core template file exists

- **Name:** `core-template-file-exists`
- **Type:** project
- **Description:** `core-template.md` is the foundation-only core skeleton (16 sections, empty components block); `template.md` remains the full layered system skeleton.

The repo now has two distinct skeleton files: `core-template.md` (foundation-only core) and `template.md` (full team design-system skeleton). The six company style files remain untouched.

**Why:** The user deliberately chose to build the core first ("那我们先做一个 core 出来"), so the two files serve different stages and must not be conflated.

**How to apply:**
- `core-template.md` sections: 1 Purpose & Scope, 2 Core Principles, 3 Token Architecture, 4 Color, 5 Typography, 6 Spacing & Sizing, 7 Radius & Borders, 8 Elevation & Motion, 9 Layout Foundations, 10 Accessibility Baseline, 11 Site Theme Contract, 12 Core Rules, 13 Core Acceptance Criteria, 14 Open Decisions, 15 Changelog, 16 Glossary.
- Its frontmatter has `components: {}` on purpose — do not "fix" that by adding components; they belong to the shared layer.
- Recommended fill order given to the user: sections 1–4 first (reuse the existing `design.md` 14-step neutral palette), then scales 5–9, then baseline/contract 10–11.
- All values are placeholders (`#RRGGBB`, `00px`); do not invent brand colors or scales for the user.
- Named for DabWave and applies to "all DabWave websites": [[design-system-named-dabwave]].

Related: [[design-md-template-v2-structure]], [[design-system-core-plus-site-themes]].

---

## 5. Design system = shared core + per-site themes

- **Name:** `design-system-core-plus-site-themes`
- **Type:** project
- **Description:** The user's multi-site design system is a shared core (foundation only, no components) plus per-site themes; the core skeleton lives in `core-template.md`.

Kickoff answers: all products have decent UI but are inconsistent and some differ greatly; the users are the user (solo developer) plus coding agents; scope is all of their websites; the stated success criterion is consistency. The user has low real-user traffic ("我做的产品很少有人用") and agreed each product should keep its own distinct character rather than being unified into one look.

The concrete sites are DabAZ 官网, DabMusic, DabSudoku, DabMinesweeper, "诸如此类" — small independent products with clearly different characters, which is what makes the per-site theme layer load-bearing rather than decorative.

**Why:** "Consistency" alone is not executable, and the agent consumer needs hard defaults instead of option tables. A shared foundation with a versioned per-site theme layer reconciles uniformity with per-product identity.

**How to apply:**
- Split into Core (semantic color, type scale, spacing, radius, elevation, motion, breakpoints, accessibility floor), Shared components (buttons, inputs, cards, nav, footer, form feedback, empty state), and a Site theme layer (hero composition, marketing sections, illustration, content voice, one accent ramp).
- The core is foundation-only by design: `components: {}` is intentional. Component structure belongs in [[design-md-template-v2-structure]] (the full layered spec) once core stabilizes.
- The core skeleton file is `core-template.md`, section 11 "Site Theme Contract": sites may override one accent ramp, surface tint, composition, imagery, and voice; they may not override the neutral palette, accent ramp step names, functional colors, focus/selection colors, type/space/radius scales, elevation, motion durations, breakpoints, focus behavior, or accessibility targets. If a site needs more variance, treat it as a core decision, not a site exception. Ramp details: [[per-site-accent-ramp-contract]].
- Keep the core small and opinionated (one typeface, one scale, one radius language, three shadow levels, three durations, four breakpoints); it optimizes for reducing the user's decision cost, not for scale.
- "Neutral-first" scopes the foundation, not the final look (the user asked "所有项目都要 neutral-first 吗?"; answered no): surfaces/text/borders default to the neutral gray ramp, color carries action/state/emphasis, functional colors are fixed, and each site adds one documented, contrast-checked accent ramp. A project needing a wholly different color world is a separate brand layer that forks the core, not a site-theme exception — otherwise consistency unravels from the first exception.
- Escalation ladder agreed for when a project may diverge: same audience/family → neutral core + one accent ramp; same company but clearly different audience/brand → share type/space/interaction but own brand palette; campaign or microsite → site theme only (accent + imagery + composition); need to change type scale/spacing/radius → back to a core decision, not a site override.
- Order to build the core: color first, components later. Fill section 4.4 (color model / accent ramp contract), 4.1 (14-step gray ramp — import the existing `design.md` ramp if still endorsed rather than reinventing), 4.2 (Light/Dark semantic mappings under the same semantic names), then measure at least five contrast pairs (body on page background, secondary text on card surface, button text on primary action, focus ring on background and surface, border on background and surface) and record them in section 10 with explicit fails. Sections 5–9 are then mechanical, followed by the section 13 Foundation Test Page; the shared component layer waits until those are stable.
- Sequenced next: pilot the core on the two most extreme sites first — DabAZ 官网 (most restrained) and one game (DabSudoku or DabMinesweeper) — before DabMusic, which adds covers, media controls, and player states and is the harder case.
- Do not add observation or provenance framing: see [[design-md-is-team-owned-not-brand-analysis]].

---

## 6. Per-site accent ramp contract

- **Name:** `per-site-accent-ramp-contract`
- **Type:** project
- **Description:** Each DabWave site gets its own 10-step accent ramp (`accent-50`…`accent-900`) mapped into five fixed semantic roles; the neutral palette, functional, focus and selection colors stay shared and unchangeable.

On 2026-10-21 the user defined the color model for their sites (DabAZ official site, DabMusic, DabSudoku, DabMinesweeper, etc.): "每个项目有自己的主题色阶即可，其他保持统一，色板也保持统一。" This supersedes the earlier "exactly one accent color per site" wording in [[design-system-core-plus-site-themes]] — the unit of per-site color is now a full ramp, not a single hex.

**Why:** A single accent color is too coarse for games and a music site that need tints, pressed states, and soft backgrounds; a free-form palette would let sites drift apart again, which is exactly the inconsistency the system exists to prevent.

**How to apply:**
- Shared and fixed across all sites: the 14-step neutral palette, semantic role names, functional colors (success/warning/danger), focus and selection colors. Sites may not change these.
- Per-site: one 10-step ramp with fixed step names `accent-50` … `accent-900`. Generate every site's ramp with the same method (OKLCH or Radix Colors) so the lightness curve matches.
- Components consume only five semantic aliases, never raw steps: `color-primary` (default `accent-600`), `color-primary-hover` (`accent-700`), `color-primary-pressed` (`accent-800`), `color-primary-subtle` (`accent-100`), `color-on-primary` (white or `accent-50`, chosen by contrast). Step numbers are defaults; remap when contrast requires it and record why.
- A site whose semantics should be visually neutral (e.g. the corporate site) maps `color-primary` to an ink neutral instead of an accent step.
- Focus and selection stay fixed rather than following the theme — per-site focus behavior would break keyboard consistency and accessibility.
- One ramp per site; a second accent is a core decision, not a theme option. Accent may appear in primary actions, links, active/selected states, and one emphasis element per section; it must not replace functional colors, body text, or large neutral surfaces.
- Applied in `core-template.md`: section 4.4 is now "Accent ramp contract"; frontmatter gained `color-primary-hover` and `color-primary-subtle`; sections 11.1–11.4, 12, and the glossary say "accent ramp" instead of "accent".

Related: [[design-system-core-plus-site-themes]], [[core-template-file-exists]], [[design-system-named-dabwave]].

---

## 7. OKLCH fixed-lightness ramp method

- **Name:** `oklch-fixed-lightness-ramp-method`
- **Type:** project
- **Description:** Ramp generation method the user chose on 2026-10-21: OKLCH with ten fixed L values (0.97→0.32), a bell-shaped C multiplier table, gamut-clamped chroma, and alias remapping instead of changing L.

On 2026-10-21 the user chose **OKLCH fixed-lightness ladder** as the ramp generation method for the DabWave per-site accent ramps described in [[per-site-accent-ramp-contract]]. The agreed parameters:

- L per step, fixed for every site regardless of hue: `accent-50` 0.97, `100` 0.94, `200` 0.88, `300` 0.81, `400` 0.73, `500` 0.64, `600` 0.56, `700` 0.48, `800` 0.40, `900` 0.32.
- C multiplier from the anchor step: 0.10, 0.18, 0.32, 0.52, 0.74, 0.92, 1.00, 0.96, 0.86, 0.70 (anchor step = 1.00; shift the table if the anchor is not `accent-600`).
- Gamut mapping reduces C, never L (culori `clampChroma` / colorjs.io `toGamut`, sRGB-first).
- Contrast failures are fixed by remapping the five semantic aliases (e.g. primary 600→700), not by editing the L ladder.
- Dark theme remaps onto the same ramp (background `accent-900`/`gray-950`, primary `accent-400`–`500`); it does not invert the light ramp.
- Neutral palette is generated once, all sites share it, C = 0 or ≤0.005, same L values plus `gray-0` 1.00, `gray-150` 0.905, `gray-950` 0.22, `gray-1000` 0.00.

**Why:** Fixed L across sites is what makes every site's ramp share one "skeleton" while only the hue changes — the mechanism behind the core-plus-theme model. Letting L move to satisfy a contrast check per site would defeat that.

**How to apply:** Preserve this L table and C curve as the system's rule; treat the "brand color = `accent-600`" assumption as a default anchor only (warm hues like yellow/amber belong at 400–500, near-blacks at 700–800). Ramps are generated by one script, not hand-edited hex; export OKLCH as source with sRGB hex as the compatibility layer. Planned next step at the time: run this for the DabAZ official site first, then a game.

Related: [[per-site-accent-ramp-contract]], [[design-system-core-plus-site-themes]].

---

## 8. System and company are both DabWave

- **Name:** `design-system-named-dabwave`
- **Type:** project
- **Description:** The design system and the company are both named DabWave; both skeleton files were renamed from `<Team>` placeholders.

On 2026-10-21 the user stated: "这个 design system 叫 DabWave。company name 也叫 DabWave。" — the design system name and the company name are the same.

Applied in the repo:
- `core-template.md`: title `# DabWave Core Design System — Specification`, frontmatter `name: "DabWave Core Design System"`, "Applies to: all DabWave websites"; a leftover `DabWave/DabAZ` in the description was reduced to `DabWave`.
- `template.md`: title `# DabWave Design System — Design Specification`, frontmatter `name: "DabWave Design System"`, owner placeholder changed from `<team or role>` to `<owner / role>`, audience reads "implementing DabWave UI", the purpose prompt now says "What does consistency buy DabWave?".
- The core keeps the "Core" suffix so the two documents stay distinguishable by layer; the user was told this is a one-line change if they prefer a bare `DabWave` in both.

**Why:** Every `<Team>` placeholder would otherwise be rewritten by hand, and mixing "DabWave" with the older "DabAZ" name reintroduces naming drift in a system whose whole point is consistency.

**How to apply:**
- Write "DabWave" wherever a team- or system-name placeholder appears; do not reintroduce `<Team>`, `<team>`, or "DabAZ" into the new skeletons.
- The existing `design.md` is still the DabAZ document and was deliberately left untouched — do not assume DabAZ artifacts are renamed.
- Filenames are still `core-template.md` and `template.md`; the planned formal names are `dabwave-core.md` and `dabwave.md`.

Related: [[core-template-file-exists]], [[design-md-template-v2-structure]], [[design-system-core-plus-site-themes]].

---

## 9. Pace: build the design system step by step

- **Name:** `user-prefers-slow-step-by-step-design-system-pace`
- **Type:** feedback
- **Description:** The user wants to build the design system incrementally from first principles ("hold on, let's go slowly"), asking what to do before writing anything.

After the 16-section `template.md` skeleton was delivered, the user said "hold on 我们慢慢来，从设计系统之初开始" and asked what to do *before* building a design system, rather than for more document content.

**Why:** They are treating this as a real design-system initiative, not a writing task. Jumping ahead to sections, tokens, or tooling skips the decisions that make those sections meaningful.

**How to apply:** Advance one stage at a time and stop for their input before generating the next artifact. When they ask an "what should I do first" type question mid-build, answer with the *immediate* next concrete step plus the order after it, not another full framework re-explanation; the user has since reached the core-color stage, so the live next step is defined in [[design-system-core-plus-site-themes]]. Answer conceptual scope questions directly and concretely (e.g. what neutral-first does and does not constrain) before returning to the build order. Do not dump a full document spec unless they ask. The document structure to use once they are ready is [[design-md-template-v2-structure]]; the document type is defined in [[design-md-is-team-owned-not-brand-analysis]].

---

## Export notes

- The live `MEMORY.md` index was missing a pointer to
  `design-md-is-team-owned-not-brand-analysis.md`; that pointer was added before
  this export, and the entry is included above as item 2.
- This export is documentation only. To change what the agent remembers, edit the
  live memory directory, not this copy.
