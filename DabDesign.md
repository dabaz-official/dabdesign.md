---
version: alpha
name: "DabWave Design System"
description: >
  The enterprise specification for the DabWave design system: governance and
  versioning, token discipline, component lifecycle standards, accessibility,
  content and internationalization rules, and quality gates. Every design
  decision — architectural or numeric — is an explicit record in the decision
  roadmap; none are pre-decided.
---

# DabWave Design System — Specification

**Document status:** Draft — DAB-001 (architecture) and DAB-002 (accessibility policy) ratified; remaining decisions Open (§13)  
**Spec version:** 0.1.0  
**Owner:** DabAZ  
**Last updated:** 2026-11-06  
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
| **Design decisions** | System architecture, theming model, color, typography, space, motion, layout, component scope, accessibility target | §13 roadmap — binding once Approved (DAB-001, DAB-002), Open otherwise |

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

> **Open.** Decisions DAB-003…DAB-007 (§13). No color values, palette shapes, or
> accent strategies are decided.

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
| `DAB-003` | Color system model: palette structure, accent strategy, functional set shape | Open |
| `DAB-004` | Neutral palette values | Open |
| `DAB-005` | Semantic roles and light/dark mappings | Open |
| `DAB-006` | Functional color values, focus and selection treatment | Open |
| `DAB-007` | Overlay token and opacity | Open |

---

## 5. Typography — decision area

> **Open.** Decisions DAB-008, DAB-009 (§13).

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
| `DAB-008` | Typeface, fallbacks, licensing, loading | Open |
| `DAB-009` | Scale, weights, tracking, casing | Open |

---

## 6. Spacing, Sizing, Radius & Borders — decision area

> **Open.** Decision DAB-010 (§13).

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
| `DAB-010` | Spacing scale, control heights, icon sizes, radius scale, border rules | Open |

---

## 7. Elevation & Motion — decision area

> **Open.** Decision DAB-011 (§13).

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
| `DAB-011` | Elevation levels and values; motion durations, easing, reduced-motion rules | Open |

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
| `DAB-003` | Color system model | Palette structure; accent strategy; functional set shape | DAB-001, DAB-002 | Open |
| `DAB-004` | Neutral palette | Ramp size, values, tint | DAB-003 | Open |
| `DAB-005` | Semantic roles | Role set; light/dark mappings | DAB-003, DAB-004 | Open |
| `DAB-006` | Functional colors | Status colors, focus, selection values | DAB-003, DAB-005 | Open |
| `DAB-007` | Overlay | Token and opacity | DAB-005 | Open |
| `DAB-008` | Typeface | Family, fallbacks, licensing, loading | DAB-001 | Open |
| `DAB-009` | Type scale | Roles, sizes, weights, tracking, casing | DAB-008 | Open |
| `DAB-010` | Space & shape | Spacing scale, control heights, icons, radius, borders | DAB-001 | Open |
| `DAB-011` | Elevation & motion | Levels, values; durations, easing, reduced motion | DAB-001 | Open |
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
