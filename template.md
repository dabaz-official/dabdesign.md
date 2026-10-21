---
version: alpha                      # design.md format version; spec version is in Document Control
name: "DabWave Design System"
description: >
  A token-driven design system specification for DabWave. Defines the
  documented foundations, semantic roles, themes, components, and quality gates
  that designers, engineers, and coding agents must follow.

colors:
  # Semantic roles — resolved values for the default (light) theme.
  # Primitive values live in section 3.1; dark-theme mappings live in 3.2.
  color-background: "#RRGGBB"
  color-surface: "#RRGGBB"
  color-surface-secondary: "#RRGGBB"
  color-text-primary: "#RRGGBB"
  color-text-secondary: "#RRGGBB"
  color-text-tertiary: "#RRGGBB"
  color-text-inverse: "#RRGGBB"
  color-border: "#RRGGBB"
  color-border-strong: "#RRGGBB"
  color-primary: "#RRGGBB"
  color-primary-pressed: "#RRGGBB"
  color-on-primary: "#RRGGBB"
  color-success: "#RRGGBB"
  color-warning: "#RRGGBB"
  color-danger: "#RRGGBB"
  color-focus: "#RRGGBB"
  color-selection-bg: "#RRGGBB"
  color-selection-fg: "#RRGGBB"
  color-overlay: "rgba(0, 0, 0, 0.50)"

typography:
  # One token per role. lineHeight is unitless; letterSpacing is in px.
  text-xs:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  text-sm:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  text-base:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  heading-md:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  heading-lg:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px

rounded:
  radius-none: 0px
  radius-xs: 0px
  radius-sm: 0px
  radius-md: 0px
  radius-lg: 0px
  radius-xl: 0px
  radius-2xl: 0px
  radius-full: 9999px

spacing:
  space-0: 0px
  space-1: 0px
  space-2: 0px
  space-3: 0px
  space-4: 0px
  space-6: 0px
  space-8: 0px
  space-12: 0px
  space-16: 0px
  space-24: 0px

shadows:
  shadow-sm: "0 1px 2px rgba(0, 0, 0, 0.06)"
  shadow-md: "0 4px 12px rgba(0, 0, 0, 0.10)"
  shadow-lg: "0 16px 40px rgba(0, 0, 0, 0.16)"

motion:
  duration-fast: 000ms
  duration-base: 000ms
  duration-slow: 000ms
  easing-standard: "cubic-bezier(0.00, 0.00, 0.00, 1.00)"
  easing-emphasized: "cubic-bezier(0.00, 0.00, 0.00, 1.00)"

breakpoints: [0px, 0px, 0px, 0px]   # ascending; names are defined in section 7.1

components:
  # Flat keys. Variants use suffixes: -hover / -pressed / -focused /
  # -disabled / -selected / -loading / -error.
  # Each variant repeats the full property set or names exactly what it inherits.
  button-primary:
    description: "<The single primary action on a surface.>"
    backgroundColor: "{colors.color-primary}"
    textColor: "{colors.color-on-primary}"
    typography: "{typography.text-sm}"
    rounded: "{rounded.radius-md}"
    padding: "00px 00px"
    height: 00px
  button-primary-pressed:
    description: "Inherits button-primary; background → {colors.color-primary-pressed}."
    backgroundColor: "{colors.color-primary-pressed}"
    textColor: "{colors.color-on-primary}"
    typography: "{typography.text-sm}"
    rounded: "{rounded.radius-md}"
    padding: "00px 00px"
    height: 00px
  button-secondary:
    description: "<Secondary action; lower emphasis than button-primary.>"
    backgroundColor: "{colors.color-surface}"
    textColor: "{colors.color-text-primary}"
    typography: "{typography.text-sm}"
    rounded: "{rounded.radius-md}"
    padding: "00px 00px"
    height: 00px
    border: "1px solid {colors.color-border}"
  input:
    description: "<Default single-line text input.>"
    backgroundColor: "{colors.color-surface}"
    textColor: "{colors.color-text-primary}"
    typography: "{typography.text-base}"
    rounded: "{rounded.radius-md}"
    padding: "00px 00px"
    height: 00px
    border: "1px solid {colors.color-border}"
  card:
    description: "<Default content container.>"
    backgroundColor: "{colors.color-surface}"
    textColor: "{colors.color-text-primary}"
    typography: "{typography.text-base}"
    rounded: "{rounded.radius-lg}"
    padding: "{spacing.space-6}"
    border: "1px solid {colors.color-border}"
---

# DabWave Design System — Design Specification

**Document status:** Draft | In review | Approved  
**Spec version:** 0.1  
**Owner:** `<owner / role>`  
**Approvers:** `<design owner>, <engineering owner>`  
**Last updated:** `YYYY-MM-DD`  
**Next review:** `YYYY-MM-DD`  
**Scope:** `<products, platforms, and surfaces this document governs>`  
**Audience:** Designers, engineers, and coding agents implementing DabWave UI.

> **Authority rule.** This document is the single source of truth for visual
> foundations and component behavior. The YAML frontmatter is the machine-readable
> contract; the body explains intent and usage. If they conflict, the frontmatter
> wins and the body must be corrected in the same change.
>
> **Status rule.** Anything marked `Proposed`, `Pending validation`, or
> `Experimental` is not an approved standard. Do not present it as settled, and do
> not invent replacement values. Approved values may be implemented; everything
> else requires the process in section 12.
>
> **Scope rule.** Implementation choices (framework, styling library, build tool)
> are not part of this specification. Choose them per project and document them
> separately.

## How to use this document

1. Read sections 0–2 before changing any token.
2. Read section 3 before choosing a color or theme mapping.
3. Read section 8 before building or modifying a component.
4. Read section 9 before shipping any user-facing surface.
5. If a required value is missing, follow section 13 instead of inventing one.

---

## 0. Document Control & Status Model

**Purpose:** Make ownership, approval, and change history explicit.

### 0.1 Control table

| Field | Value |
|---|---|
| Document owner | `<name / role>` |
| Design approver | `<name / role>` |
| Engineering approver | `<name / role>` |
| Accessibility reviewer | `<name / role>` |
| Review cadence | `<e.g. monthly / per release>` |
| Repository location | `<path or URL>` |

### 0.2 Status labels

Use these labels consistently on every token, mapping, and component:

- **Approved** — confirmed and safe to implement.
- **Proposed** — recommended direction awaiting approval.
- **Pending validation** — needs contrast, visual, or implementation testing.
- **Experimental** — limited trial, not a system-wide rule.
- **Deprecated** — retained for migration only; do not use for new work.

### 0.3 Versioning

- `0.x` — foundation under active change; breaking changes allowed with a changelog entry.
- `1.0+` — stable foundation; breaking changes require a major version and a migration note.
- Every change updates section 15 and, when behavior changes, the affected token's status.

### 0.4 Decision log

| Date | Decision | Rationale | Owner | Status |
|---|---|---|---|---|
| `YYYY-MM-DD` | `<decision>` | `<why>` | `<owner>` | `<status>` |

---

## 1. Purpose, Principles & Scope

**Purpose:** State why the system exists and what it optimizes for.

### 1.1 Purpose

`<2–4 sentences. What problem does this system solve? What does consistency buy DabWave? What should it prevent?>`

### 1.2 Core principles

Write 4–6 principles. Each must be testable and must resolve a real trade-off.

| Principle | What it means in practice | What it rejects |
|---|---|---|
| `<e.g. Neutral-first>` | `<e.g. Color carries meaning, not decoration>` | `<e.g. Decorative accent colors>` |
| `<e.g. Typography-led hierarchy>` | `<e.g. Size, weight, and spacing create hierarchy>` | `<e.g. Boxes and borders for every section>` |
| `<e.g. Accessibility by default>` | `<e.g. Contrast and focus are part of every component>` | `<e.g. Post-launch accessibility fixes>` |

### 1.3 Scope

- **In scope:** `<foundations, themes, components, patterns, content rules>`
- **Out of scope:** `<illustration system, motion brand films, marketing campaigns, etc.>`
- **Product-specific themes:** `<which products may override what, and which tokens they must not change>`

### 1.4 Brand assets

- Logo source: `<path / asset library>`
- Approved variants: `<light / dark / monochrome>`
- Clear space and minimum size: `<value>`
- Rules: do not redraw, rotate, recolor, or round the mark without approval.
- If an asset is unavailable, stop and request it; do not approximate the logo.

---

## 2. Token Architecture

**Purpose:** Keep values stable, roles explicit, and themes swappable.

### 2.1 Three layers

| Layer | Purpose | Example | May components use it directly? |
|---|---|---|---|
| Primitive | Raw values without UI meaning | `gray-500`, `blue-600` | No |
| Semantic | Purpose in a theme | `color-text-primary`, `color-surface` | Yes |
| Component | Repeated decision that semantic tokens cannot express | `button-height-md` | Only when documented |

### 2.2 Naming conventions

- Use role-based, kebab-case names.
- Prefix by category: `color-`, `text-`, `space-`, `radius-`, `shadow-`, `duration-`, `easing-`, `breakpoint-`, `container-`.
- Do not encode raw values in names (`blue-500` is primitive-only; components use roles).
- Keep names stable. Renaming a public token is a breaking change.

### 2.3 Single source of truth

- Every token appears exactly once in the YAML frontmatter.
- Body tables reference token names; they do not repeat raw values.
- If a value must change, change the frontmatter and add a changelog entry.
- Do not create a second scale in a component or product theme.

### 2.4 Implementation independence

- Tokens must be expressible in any target platform: CSS custom properties, native theme resources, design-tool variables.
- Export naming: `<prefix>-<token>`, for example `<prefix>-color-text-primary`.
- The prefix and export format are implementation decisions; record them in section 11.

### 2.5 Token status

Every token row in sections 3–6 carries a status label. Do not promote a token from `Proposed` to `Approved` without the review in section 12.

---

## 3. Color & Themes

**Purpose:** Define color roles and their behavior across themes.

### 3.1 Primitive palette

| Primitive | Value | Status | Notes |
|---|---:|---|---|
| `gray-0` | `#FFFFFF` | `<status>` | |
| `gray-50` | `#RRGGBB` | `<status>` | |
| `gray-100` | `#RRGGBB` | `<status>` | |
| `gray-200` | `#RRGGBB` | `<status>` | |
| `gray-300` | `#RRGGBB` | `<status>` | |
| `gray-400` | `#RRGGBB` | `<status>` | |
| `gray-500` | `#RRGGBB` | `<status>` | |
| `gray-600` | `#RRGGBB` | `<status>` | |
| `gray-700` | `#RRGGBB` | `<status>` | |
| `gray-800` | `#RRGGBB` | `<status>` | |
| `gray-900` | `#RRGGBB` | `<status>` | |
| `gray-950` | `#RRGGBB` | `<status>` | |
| `gray-1000` | `#000000` | `<status>` | |

Add non-neutral primitives only when a semantic role requires them.

### 3.2 Semantic mapping

Same semantic names in every theme. Components never switch on theme directly.

| Semantic token | Light mapping | Dark mapping | Status | Intent |
|---|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | `<status>` | Page background |
| `color-surface` | `gray-0` | `gray-900` | `<status>` | Cards, dialogs, raised surfaces |
| `color-surface-secondary` | `gray-100` | `gray-800` | `<status>` | Secondary surfaces |
| `color-text-primary` | `gray-900` | `gray-50` | `<status>` | Primary text |
| `color-text-secondary` | `gray-600` | `gray-300` | `<status>` | Secondary text |
| `color-text-tertiary` | `gray-500` | `gray-400` | `<status>` | Supporting text |
| `color-text-inverse` | `gray-0` | `gray-950` | `<status>` | Text on inverse surfaces |
| `color-border` | `gray-200` | `gray-800` | `<status>` | Standard borders |
| `color-border-strong` | `gray-300` | `gray-700` | `<status>` | Strong borders |
| `color-primary` | `<value>` | `<value>` | `<status>` | Primary action; neutral-first systems map this to a neutral |
| `color-primary-pressed` | `<value>` | `<value>` | `<status>` | Pressed primary action |
| `color-on-primary` | `<value>` | `<value>` | `<status>` | Content on primary |
| `color-overlay` | `black 50%` | `black 50%` | `<status>` | Modal backdrop |

### 3.3 Functional colors

Functional colors are separate from the brand palette. They are not decorative accents.

| Role | Light value | Dark value | Status |
|---|---|---|---|
| `color-success` | `<value>` | `<value>` | `<status>` |
| `color-warning` | `<value>` | `<value>` | `<status>` |
| `color-danger` | `<value>` | `<value>` | `<status>` |
| `color-focus` | `<value>` | `<value>` | `<status>` |
| `color-selection-bg` | `<value>` | `<value>` | `<status>` |
| `color-selection-fg` | `<value>` | `<value>` | `<status>` |

### 3.4 Brand accent policy

- Brand accent: `<none / defined here / defined per product>`.
- If the system is neutral-first, map `color-primary` to a neutral (for example
  `gray-900`) and record that decision here. Do not invent an accent to fill the role.
- If an accent exists, state where it may appear (for example: primary CTA only) and where it may not.
- Do not add an accent to solve a hierarchy problem that spacing or typography can solve.

### 3.5 Contrast requirements

- Normal text: at least `4.5:1`.
- Large text: at least `3:1`.
- Essential non-text UI and focus indicators: at least `3:1`.
- Test every foreground/background pair on its actual surface, not only on the page background.
- Detailed checks and results belong in section 9.

### 3.6 Color rules

- No hard-coded hex values in component styles when a semantic token exists.
- One hex should have one role. If it serves two, document why.
- Do not rely on color alone to communicate status, selection, or focus.
- Do not weaken the contrast target to preserve an aesthetic preference.

---

## 4. Typography

**Purpose:** Make hierarchy predictable across English, Chinese, and mixed-language content.

### 4.1 Typeface and language support

- Primary typeface: `<typeface>`.
- Fallback stack: `<system fallbacks>`.
- Chinese fallback: `<PingFang SC / Microsoft YaHei / etc.>`.
- Licensing: `<open source / licensed / system>`.
- Do not introduce a second display face without approval.

### 4.2 Scale

| Token | Size | Line height | Weight | Use |
|---|---:|---:|---:|---|
| `text-xs` | `00px` | `00px` | `000` | Compact metadata |
| `text-sm` | `00px` | `00px` | `000` | Supporting text, compact UI |
| `text-base` | `00px` | `00px` | `000` | Default body |
| `text-lg` | `00px` | `00px` | `000` | Lead paragraph |
| `heading-sm` | `00px` | `00px` | `000` | Small section heading |
| `heading-md` | `00px` | `00px` | `000` | Standard section heading |
| `heading-lg` | `00px` | `00px` | `000` | Major section heading |
| `display-sm` | `00px` | `00px` | `000` | Hero / brand heading |
| `display-lg` | `00px` | `00px` | `000` | High-emphasis display |

### 4.3 Weight and tracking

- Body: `<weight>` by default.
- Medium emphasis: `<weight>`.
- Standard headings: `<weight>`.
- Display headings: `<weight>`.
- Letter-spacing is role-based. Do not apply a global negative value.
- Only add tracking tokens after visual validation; record the result in section 13 until approved.

### 4.4 Responsive typography

- Keep body sizes stable across viewports by default.
- Scale only display and large heading sizes.
- Define whether scaling uses `clamp()` or explicit breakpoints; pick one and document it.
- Validate English, Chinese, and mixed-language wrapping.

### 4.5 Reading measure and density

- Target `<60–75>` characters per line for long-form text.
- Do not stretch text-heavy content to the widest container.
- Use hierarchy before adding color or boxes.

### 4.6 OpenType and loading

- Features: `<ss01 / tnum / case / none>`.
- Apply features globally or per role; state which.
- Font loading: `<font-display strategy, subsetting, preload policy>`.

---

## 5. Spacing, Sizing, Radius & Borders

**Purpose:** Make layout rhythm and control geometry predictable.

### 5.1 Spacing scale

| Token | Value | Typical use | Status |
|---|---:|---|---|
| `space-0` | `0px` | Reset | `<status>` |
| `space-1` | `00px` | Tight inline gaps | `<status>` |
| `space-2` | `00px` | Compact control gaps | `<status>` |
| `space-3` | `00px` | Compact padding | `<status>` |
| `space-4` | `00px` | Default small padding | `<status>` |
| `space-6` | `00px` | Card padding | `<status>` |
| `space-8` | `00px` | Large gaps | `<status>` |
| `space-12` | `00px` | Section separation | `<status>` |
| `space-16` | `00px` | Page rhythm | `<status>` |
| `space-24` | `00px` | Hero separation | `<status>` |

### 5.2 Sizing and controls

| Token | Value | Use |
|---|---:|---|
| `size-icon-xs` | `00px` | Dense metadata |
| `size-icon-sm` | `00px` | Compact controls |
| `size-icon-md` | `00px` | Default inline icons |
| `size-icon-lg` | `00px` | Prominent actions |
| `control-height-sm` | `00px` | Compact UI |
| `control-height-md` | `00px` | Default controls |
| `control-height-lg` | `00px` | Touch-oriented controls |

A `control-height-md` is a visual size, not proof of a 44×44 touch target. For touch surfaces, use `control-height-lg` or add spacing.

### 5.3 Radius scale

| Token | Value | Use |
|---|---:|---|
| `radius-none` | `0px` | Sharp edges, separators |
| `radius-xs` | `00px` | Small labels |
| `radius-sm` | `00px` | Compact controls |
| `radius-md` | `00px` | Default buttons and inputs |
| `radius-lg` | `00px` | Standard cards |
| `radius-xl` | `00px` | Large cards and dialogs |
| `radius-2xl` | `00px` | Hero panels |
| `radius-full` | `9999px` | Pills, avatars, circular indicators |

### 5.4 Borders

- Default width: `1px`.
- Use `2px` only for selected outlines or strong focus indicators.
- Use semantic border tokens, never raw hex.
- Do not use borders as decoration when spacing already groups content.
- Validate border visibility in both themes and on secondary surfaces.

---

## 6. Elevation & Motion

**Purpose:** Define depth and movement as deliberate signals, not decoration.

### 6.1 Elevation

| Level | Token | Value | Use |
|---|---|---|---|
| 0 | none | `none` | Flat surfaces, full-bleed bands |
| 1 | `shadow-sm` | `<value>` | Cards, hovered tiles |
| 2 | `shadow-md` | `<value>` | Dropdowns, popovers |
| 3 | `shadow-lg` | `<value>` | Modals, dialogs |

Rules:

- Elevation must correspond to interaction or layering, not aesthetics.
- Do not use more than one shadow style per level.
- Dark themes may need different shadow opacity; document the mapping.
- Product photography shadows are not UI elevation.

### 6.2 Motion

| Token | Value | Use |
|---|---|---|
| `duration-fast` | `000ms` | Press feedback, small state changes |
| `duration-base` | `000ms` | Standard transitions |
| `duration-slow` | `000ms` | Large surface or page transitions |
| `easing-standard` | `<curve>` | Default motion |
| `easing-emphasized` | `<curve>` | Deliberate entrances |

Rules:

- State the purpose of each motion (feedback, orientation, emphasis).
- Do not animate for decoration.
- Respect `prefers-reduced-motion`: reduce duration or remove non-essential motion.
- Do not use motion to hide slow loading.

---

## 7. Layout & Responsive Behavior

**Purpose:** Make layout decisions reproducible across viewports.

### 7.1 Breakpoints

| Token | Min width | Intended use |
|---|---:|---|
| `breakpoint-sm` | `0px` | Large phones |
| `breakpoint-md` | `0px` | Tablets |
| `breakpoint-lg` | `0px` | Desktop |
| `breakpoint-xl` | `0px` | Wide desktop |

### 7.2 Containers and gutters

| Token | Max width | Use |
|---|---:|---|
| `container-sm` | `00px` | Narrow forms, focused reading |
| `container-md` | `00px` | Articles, single column |
| `container-lg` | `00px` | Standard product pages |
| `container-xl` | `00px` | Default marketing / app content |
| `container-2xl` | `00px` | Broad dashboards |
| `container-fluid` | `100%` | Edge-to-edge layouts |

Gutters:

| Viewport | Gutter per side |
|---|---:|
| Below `breakpoint-md` | `00px` |
| `breakpoint-md`–`breakpoint-lg` | `00px` |
| `breakpoint-lg` and above | `00px` |

### 7.3 Grid

- Use a 12-column grid only when it helps; do not force every page into it.
- Default gap: `<value>` desktop, `<value>` narrow screens.
- Cards reflow by minimum usable width, not by fixed desktop column counts.
- Keep repeated sections aligned to the same container edges.

### 7.4 Responsive validation widths

At minimum, review:

- `375px` and `390px` — mobile.
- `640px` — small breakpoint.
- `768px` — tablet.
- `1024px` and `1280px` — desktop.
- `1536px` — wide desktop.

Check wrapping, hierarchy, contrast, spacing, alignment, card reflow, and horizontal overflow.

### 7.5 Collapsing strategy

Document what changes at each breakpoint for: navigation, hero, grids, pricing/comparison, tables, footer, and imagery.

---

## 8. Components

**Purpose:** Define component behavior once so every surface behaves the same way.

### 8.1 Component specification standard

Every component entry must include:

1. **Name** — identical to the frontmatter key.
2. **Purpose** — what action or content it serves.
3. **Anatomy** — background, text, border, typography, padding, height, radius, shadow.
4. **Variants** — primary, secondary, on-dark, utility, destructive, etc.
5. **Sizes** — default, compact, large.
6. **States** — default, hover (pointer platforms), pressed, focused, disabled, selected, loading, error.
7. **Accessibility** — role, keyboard behavior, accessible name, focus behavior.
8. **Do / Don't** — at least one of each, specific to this component.

### 8.2 State matrix

| State | Visual change | Token used | Notes |
|---|---|---|---|
| Default | — | — | |
| Hover | `<change>` | `<token>` | Omit on touch-only platforms |
| Pressed | `<change>` | `<token>` | |
| Focused | `<ring / border / offset>` | `{colors.color-focus}` | Must remain visible in both themes |
| Disabled | `<change>` | `<token>` | Must not rely on opacity alone |
| Selected | `<change>` | `<token>` | Must not rely on color alone |
| Loading | `<change>` | `<token>` | Preserve layout; announce state |
| Error | `<change>` | `{colors.color-danger}` | Pair with text or icon |

### 8.3 Required component set

Document only the components the system actually ships. A missing component is an open decision, not a blank check.

- Buttons: primary, secondary, ghost, on-dark, destructive.
- Inline links.
- Inputs: text, textarea, select, checkbox, radio, switch.
- Cards and containers.
- Navigation: global, sub-navigation, breadcrumbs.
- Tabs and segmented controls.
- Badges, tags, chips.
- Overlays: modal, drawer, popover, toast.
- Data display: table, list, stat, empty state.
- Feedback: alert, inline validation, progress.
- Signature components unique to the product.

### 8.4 Component template

```markdown
### `<component-name>`

**Purpose:** `<what it does and where it appears>`

**Anatomy:** `<background / text / border / typography / padding / height / radius / shadow>`

**Variants:** `<list>`

**Sizes:** `<list>`

**States:**

| State | Change | Token |
|---|---|---|
| Default | — | — |
| Hover | `<change>` | `<token>` |
| Pressed | `<change>` | `<token>` |
| Focused | `<change>` | `<token>` |
| Disabled | `<change>` | `<token>` |
| Selected | `<change>` | `<token>` |

**Accessibility:** `<role, keyboard, label, focus>`

**Do:** `<specific rule>`

**Don't:** `<specific anti-pattern>`
```

### 8.5 Component acceptance criteria

A component is not done until:

- [ ] It uses only approved semantic and component tokens.
- [ ] Every state in the matrix is implemented and visually verified.
- [ ] Focus is visible in both themes.
- [ ] Contrast passes in every surface context.
- [ ] Keyboard operation is verified.
- [ ] English, Chinese, and mixed-language labels are tested.
- [ ] No new token was added without approval.
- [ ] The frontmatter entry and the body entry match.

---

## 9. Accessibility & Interaction

**Purpose:** Make accessibility a release requirement, not a review afterthought.

### 9.1 Contrast

- Normal text: `4.5:1`.
- Large text: `3:1`.
- Essential non-text UI and focus indicators: `3:1`.
- Check actual foreground/background pairs on page, card, input, and overlay surfaces.
- Record results in a table; do not write "estimated" ratios.

| Pair | Context | Ratio | Normal text | Large text | Verdict |
|---|---|---:|---|---|---|
| `{colors.color-text-primary}` on `{colors.color-background}` | Body copy | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |
| `{colors.color-text-secondary}` on `{colors.color-surface}` | Card copy | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |
| `{colors.color-on-primary}` on `{colors.color-primary}` | Primary button | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |

### 9.2 Focus

- Every keyboard-focusable element has a visible focus indicator.
- Specify color, width, offset, and radius.
- Verify focus on both light and dark surfaces.
- Do not remove the outline without an approved replacement.

### 9.3 Keyboard and semantics

- Use native semantic elements when they exist.
- Provide accessible names for icon-only controls.
- Preserve logical focus order.
- Support expected keyboard interactions for each component.
- Do not implement interactive behavior on non-semantic elements when a native element fits.

### 9.4 Target size

- Minimum `<44×44px>` effective target for touch surfaces.
- Icon artwork may be smaller than its target.
- Document exceptions and why they are safe.

### 9.5 Motion and cognition

- Respect `prefers-reduced-motion`.
- Avoid flashing, parallax, and auto-playing motion without controls.
- Do not rely on memory or timing for essential tasks.

### 9.6 Non-color cues

- Status must have text, icon, or shape in addition to color.
- Selected state must have a non-color cue.
- Error state must have a message, not only a red border.

---

## 10. Content & Voice

**Purpose:** Keep interface language consistent with the visual system.

### 10.1 Tone

- `<e.g. direct, calm, specific; no hype>`
- Prefer verbs and concrete nouns.
- Do not blame the user in error messages.

### 10.2 Capitalization and labels

- Button labels: `<sentence case / title case>`.
- Heading labels: `<sentence case / title case>`.
- Use one term per concept; list synonyms to avoid in the glossary.

### 10.3 Error and empty states

- Error: state what happened, why, and what to do next.
- Empty: explain what will appear here and the first action.
- Loading: state what is loading and whether the user can leave.

### 10.4 Localization

- English and Simplified Chinese are first-class.
- Test wrapping, punctuation, and line density for both.
- Do not concatenate translated strings; use full messages with placeholders.

---

## 11. Implementation Guidance for Engineers & Agents

**Purpose:** Translate the specification into safe implementation behavior.

### 11.1 Read order

1. Section 0 — status and ownership.
2. Section 2 — token layers.
3. Section 3 — color and theme mapping.
4. Section 8 — component standard.
5. Section 9 — accessibility gates.

### 11.2 Rules

- Use semantic tokens in components; use primitive tokens only inside theme mappings.
- Do not hard-code colors, spacing, radii, shadows, or durations.
- Do not add a new token, scale, or theme mapping without following section 12.
- Do not present `Proposed` or `Pending validation` values as approved.
- Keep theme behavior in semantic mappings, not in component branches.
- If an unresolved decision blocks implementation, state the assumption and its impact; do not silently invent a standard.

### 11.3 Pull request checklist

- [ ] Tokens used exist in this document.
- [ ] No raw hex, px, or ms values in component styles where a token exists.
- [ ] Light and dark themes both reviewed.
- [ ] Focus and disabled states verified.
- [ ] Contrast checked on the actual surface.
- [ ] Chinese, English, and mixed-language content tested.
- [ ] Changelog updated if a token or component behavior changed.

### 11.4 Reporting

When handing off work, report:

1. Files changed.
2. Tokens added, changed, or deprecated.
3. Viewports and themes verified.
4. Contrast results and failures.
5. Checks actually run and their results.
6. Decisions still requiring human review.

Never claim a check passed unless it was actually performed.

---

## 12. Contribution & Governance

**Purpose:** Make change predictable and reviewable.

### 12.1 Roles

| Role | Responsibility |
|---|---|
| Owner | Maintains the document and final decisions |
| Design approver | Approves visual and interaction changes |
| Engineering approver | Approves token and implementation impact |
| Accessibility reviewer | Approves contrast, focus, and semantics |
| Contributors | Propose changes with rationale and evidence |

### 12.2 Change process

1. Open a proposal describing the problem, the proposed change, and the impact.
2. Add or update the token/component with a status label.
3. Provide visual evidence and contrast results.
4. Get approval from the required roles.
5. Update the changelog and decision log.
6. Deprecate the old value with a migration path if behavior changed.

### 12.3 Review criteria

- Does the change solve a repeated problem, not a one-off?
- Does it reuse existing tokens before adding new ones?
- Does it hold in both themes and at all validation widths?
- Does it preserve accessibility targets?
- Is the naming consistent with section 2.2?
- Is the migration path clear?

### 12.4 Deprecation

- Mark the old token `Deprecated`.
- State the replacement and the removal date.
- Keep the old token documented until migration is complete.

---

## 13. Open Decisions & Known Gaps

**Purpose:** Make uncertainty explicit and assign it an owner.

Do not fabricate values to make the specification look complete.

| ID | Decision / gap | Impact | Owner | Status | Target date |
|---|---|---|---|---|---|
| `OD-001` | `<e.g. final dark-theme tertiary text>` | `<what is blocked>` | `<owner>` | `<status>` | `YYYY-MM-DD` |

Rules:

- Every unresolved value goes here, not into a token table as if approved.
- Each entry names an owner and a target date.
- When resolved, move the decision to section 0.4 and update the affected token status.
- If there are no open items, write `None` and state the coverage boundary.

---

## 14. Quality Gates & Acceptance Criteria

**Purpose:** Define what "done" means before a foundation or component ships.

### 14.1 Foundation test page

Create a test page that demonstrates:

- Brand assets and theme switching.
- Every primitive and semantic color with token name and value.
- Every typography token in English, Simplified Chinese, and mixed-language samples.
- Every spacing, sizing, and radius token on representative shapes.
- Border and surface levels in both themes.
- Container widths, gutters, and grid behavior.
- Focus, disabled, selected, error, and loading states.
- A contrast table with calculated results and explicit failures.

### 14.2 Visual QA

- [ ] No unintended horizontal overflow.
- [ ] No clipped text at any validation width.
- [ ] Type hierarchy is readable without color.
- [ ] Surfaces and borders remain distinguishable in both themes.
- [ ] Components align to the same container edges.

### 14.3 Accessibility QA

- [ ] All text meets the contrast targets in section 9.1.
- [ ] Focus is visible on every interactive element.
- [ ] Keyboard operation matches the component contract.
- [ ] Status is not communicated by color alone.
- [ ] Reduced motion behavior is verified.

### 14.4 Release checklist

- [ ] Changelog updated.
- [ ] Open decisions reviewed.
- [ ] Deprecated tokens have a migration note.
- [ ] Documentation and frontmatter agree.
- [ ] No unapproved token was introduced.

---

## 15. Changelog

| Version | Date | Change | Author | Status |
|---|---|---|---|---|
| `0.1` | `YYYY-MM-DD` | Initial skeleton | `<author>` | Draft |

---

## 16. Glossary

| Term | Definition |
|---|---|
| Primitive token | A raw value with no UI role, such as `gray-500`. |
| Semantic token | A role mapped to a primitive per theme, such as `color-text-primary`. |
| Component token | A repeated component decision that semantic tokens cannot express. |
| Pill | A fully rounded shape using `radius-full` / `9999px`. |
| Capsule | A rounded rectangle with a radius smaller than half its height; define the exact token. |
| Rounded rectangle | A rectangle using a fixed radius token such as `radius-md`. |
| Approved | Confirmed and safe to implement. |
| Proposed | Recommended but not approved. |
| Pending validation | Requires contrast, visual, or implementation testing. |
| Experimental | Limited trial; not a system-wide rule. |
| Deprecated | Retained for migration only. |
