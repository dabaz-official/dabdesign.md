---
version: alpha
name: "DabWave Core Design System"
description: >
  The shared foundation layer for all DabWave websites: neutral color roles,
  type scale, spacing, radius, elevation, motion, layout, and accessibility
  baselines. Site-specific expression lives outside this layer.

colors:
  # Semantic roles resolved for the default (light) theme.
  # Primitive values live in section 4.1; dark mappings live in 4.2.
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
  color-primary-hover: "#RRGGBB"
  color-primary-pressed: "#RRGGBB"
  color-primary-subtle: "#RRGGBB"
  color-on-primary: "#RRGGBB"
  color-success: "#RRGGBB"
  color-warning: "#RRGGBB"
  color-danger: "#RRGGBB"
  color-focus: "#RRGGBB"
  color-selection-bg: "#RRGGBB"
  color-selection-fg: "#RRGGBB"
  color-overlay: "rgba(0, 0, 0, 0.50)"

typography:
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
  text-lg:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  heading-sm:
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
  display-sm:
    fontFamily: "Inter, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 00px
    fontWeight: 000
    lineHeight: 0.00
    letterSpacing: 0px
  display-lg:
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

breakpoints: [0px, 0px, 0px, 0px]   # ascending; names are defined in section 9.1

components: {}   # Core intentionally ships no components. See the shared layer.
---

# DabWave Core Design System — Specification

**Document status:** Draft | In review | Approved  
**Core version:** 0.1  
**Owner:** `<name / role>`  
**Approvers:** `<design owner>, <engineering owner>`  
**Last updated:** `YYYY-MM-DD`  
**Applies to:** all DabWave websites  
**Consumers:** the maintainer and coding agents

> **Authority rule.** This document is the contract for the foundation layer.
> Site themes may override only what section 11 explicitly allows. If a value is
> missing, open a decision in section 14; do not invent one in a site.
>
> **Status rule.** `Proposed`, `Pending validation`, and `Experimental` are not
> approved standards. Do not implement them as if they were settled.
>
> **Layer rule.** This is not a component library. Components, page compositions,
> and marketing sections belong to the shared/site layers.

## How to use this document

1. Read sections 1–3 before touching any token.
2. Read section 4 before choosing a color or theme mapping.
3. Read section 11 before creating or changing a site theme.
4. If a required value is missing, stop and follow section 14.

---

## 1. Purpose & Scope

**Purpose:** Give every site the same foundation without forcing every site to
look the same.

- **Problem:** sites have individually good UI, but colors, type, spacing, and
  interaction behavior drift; every new page starts from a different decision.
- **What this layer buys:** one vocabulary, one accessibility bar, one set of
  defaults, and faster decisions for the maintainer and the agent.
- **Consumers:** a solo developer plus coding agents. The document is written as
  a contract, not as inspiration.

### 1.1 In scope

- Semantic color roles and theme mappings.
- Typeface, scale, weights, and responsive behavior.
- Spacing, sizing, radius, and border scales.
- Elevation and motion tokens.
- Breakpoints, containers, and grid defaults.
- Accessibility baseline.

### 1.2 Out of scope

- Buttons and other components (shared layer).
- Hero composition and page layout patterns (site layer).
- Illustrations, photography, and accent ramp values (site layer).
- Marketing copy and content voice (site layer, unless later promoted).

### 1.3 Success criteria

- New code contains no raw hex, px, or ms values where a token exists.
- Every site uses the same semantic token names and provides one accent ramp with the same step names.
- A new page can be started from defaults without re-deciding foundations.
- Every site passes the same accessibility baseline.
- Agent-generated UI uses core tokens without manual correction.

---

## 2. Core Principles

Write 3–5 principles. Each must resolve a real trade-off.

| Principle | What it means | What it rejects |
|---|---|---|
| Neutral-first | Color carries meaning, not decoration | Decorative accent colors |
| Defaults over options | One recommended value per role | Menus of equivalent choices |
| Fixed foundation, free expression | Sites may differ in composition, not in tokens | Per-site type or spacing scales |
| Accessibility is a gate | Contrast, focus, and semantics ship with the foundation | Post-launch accessibility fixes |
| Machine-readable rules | Every rule references a token or a check | Vague guidance such as "use taste" |

---

## 3. Token Architecture

### 3.1 Three layers

| Layer | Purpose | Example | Sites may use it directly? |
|---|---|---|---|
| Primitive | Raw values with no UI meaning | `gray-500` | No |
| Semantic | Purpose in a theme | `color-text-primary` | Yes |
| Component | Repeated component decision | `button-height-md` | Only when documented |

### 3.2 Naming

- Role-based, kebab-case.
- Prefix by category: `color-`, `text-`, `space-`, `radius-`, `shadow-`, `duration-`, `easing-`, `breakpoint-`, `container-`.
- Do not encode raw values in semantic names.
- Renaming a public token is a breaking change.

### 3.3 Single source of truth

- Every token in the frontmatter groups (`colors`, `typography`, `rounded`,
  `spacing`, `shadows`, `motion`, `breakpoints`) appears exactly once there.
- Layout constants without a dedicated group (`size-*`, `control-height-*`,
  `container-*`) are defined once in the body tables and are still normative.
- Body tables reference names; they do not repeat raw values.
- If a value changes, change its single definition and add a changelog entry.
- No site may fork a core scale into a second scale.

### 3.4 Theme mapping

- Same semantic names in light and dark.
- A site theme may change the resolved value of an allowed accent role, never the
  semantic role's name.
- Components must not branch on theme directly.

### 3.5 Export

- Export naming: `<prefix>-<token>`, for example `<prefix>-color-text-primary`.
- The prefix and export target are implementation decisions; record them in
  section 13 and keep them stable.
- Tokens must be expressible as CSS custom properties, native theme resources,
  or design-tool variables.

---

## 4. Color

**Purpose:** Define neutral roles that hold across sites, plus the small
functional set that must never vary.

### 4.1 Primitive neutral palette

| Primitive | Value | Status |
|---|---:|---|
| `gray-0` | `#FFFFFF` | `<status>` |
| `gray-50` | `#RRGGBB` | `<status>` |
| `gray-100` | `#RRGGBB` | `<status>` |
| `gray-150` | `#RRGGBB` | `<status>` |
| `gray-200` | `#RRGGBB` | `<status>` |
| `gray-300` | `#RRGGBB` | `<status>` |
| `gray-400` | `#RRGGBB` | `<status>` |
| `gray-500` | `#RRGGBB` | `<status>` |
| `gray-600` | `#RRGGBB` | `<status>` |
| `gray-700` | `#RRGGBB` | `<status>` |
| `gray-800` | `#RRGGBB` | `<status>` |
| `gray-900` | `#RRGGBB` | `<status>` |
| `gray-950` | `#RRGGBB` | `<status>` |
| `gray-1000` | `#000000` | `<status>` |

### 4.2 Semantic mapping

| Semantic token | Light | Dark | Status | Intent |
|---|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | `<status>` | Page background |
| `color-surface` | `gray-0` | `gray-900` | `<status>` | Cards, dialogs |
| `color-surface-secondary` | `gray-100` | `gray-800` | `<status>` | Secondary surfaces |
| `color-text-primary` | `gray-900` | `gray-50` | `<status>` | Primary text |
| `color-text-secondary` | `gray-600` | `gray-300` | `<status>` | Secondary text |
| `color-text-tertiary` | `gray-500` | `gray-400` | `<status>` | Supporting text |
| `color-text-inverse` | `gray-0` | `gray-950` | `<status>` | Text on inverse surfaces |
| `color-border` | `gray-200` | `gray-800` | `<status>` | Standard borders |
| `color-border-strong` | `gray-300` | `gray-700` | `<status>` | Strong borders |
| `color-overlay` | `black 50%` | `black 50%` | `<status>` | Modal backdrop |

### 4.3 Action and functional colors

| Role | Light | Dark | Status | Notes |
|---|---|---|---|---|
| `color-primary` | `<value>` | `<value>` | `<status>` | Site-mapped action color; neutral sites map it to ink |
| `color-primary-hover` | `<value>` | `<value>` | `<status>` | Hover state |
| `color-primary-pressed` | `<value>` | `<value>` | `<status>` | Pressed state |
| `color-primary-subtle` | `<value>` | `<value>` | `<status>` | Tinted background for selected or soft states |
| `color-on-primary` | `<value>` | `<value>` | `<status>` | Content on primary; choose by contrast |
| `color-success` | `<value>` | `<value>` | `<status>` | Separate from the site accent ramp |
| `color-warning` | `<value>` | `<value>` | `<status>` | Separate from the site accent ramp |
| `color-danger` | `<value>` | `<value>` | `<status>` | Separate from the site accent ramp |
| `color-focus` | `<value>` | `<value>` | `<status>` | Must remain visible on both themes |
| `color-selection-bg` | `<value>` | `<value>` | `<status>` | Text selection |
| `color-selection-fg` | `<value>` | `<value>` | `<status>` | Text selection |

### 4.4 Accent ramp contract

Core defines the accent roles, not the accent values. Each site provides one
accent ramp; the neutral palette never changes.

**Required ramp.** Every site defines the same 10 step names:
`accent-50`, `accent-100`, `accent-200`, `accent-300`, `accent-400`,
`accent-500`, `accent-600`, `accent-700`, `accent-800`, `accent-900`.

Keep the number of steps and the lightness progression consistent across sites.
Generate the ramp in OKLCH or with a tool such as Radix Colors so every site's
ramp behaves the same way.

**Semantic aliases.** Components consume only these five roles:

| Role | Default mapping | Constraint |
|---|---|---|
| `color-primary` | `accent-600` | 3:1 against adjacent surfaces for non-text UI |
| `color-primary-hover` | `accent-700` | Must not reduce contrast |
| `color-primary-pressed` | `accent-800` | Must not reduce contrast |
| `color-primary-subtle` | `accent-100` | Text on the tint must still pass contrast |
| `color-on-primary` | white or `accent-50` | 4.5:1 against the primary background |

The step numbers are defaults, not laws. If a hue needs a different step to pass
contrast, change the alias mapping and record why. Dark themes may shift one or
two steps lighter and must be recorded separately.

**Usage limits.**

- The accent may appear in primary actions, links, active/selected states, and
  one emphasis element per section.
- It must not replace functional colors, body text, or large neutral surfaces.
- It must not be the only cue for status or selection.
- One site gets one accent ramp. A second accent is a core decision, not a theme
  option.
- Focus and selection colors stay functional and fixed across sites.

**Validation.** For every site, record the base hue, the ramp, the five alias
values, the light/dark mappings, and the measured contrast pairs. A site theme is
not approved until those checks pass.

### 4.5 Contrast targets

- Normal text: `4.5:1`.
- Large text: `3:1`.
- Essential non-text UI and focus indicators: `3:1`.
- Test every foreground/background pair on its actual surface.
- Record measured ratios in section 10; do not write "estimated".

### 4.6 Color rules

- No raw hex in site or component styles when a semantic token exists.
- One hex = one role. If one value serves two roles, document why.
- Do not rely on color alone for status, selection, or focus.
- A site accent ramp is a controlled theme layer, not permission to redefine the neutral palette.
- Do not weaken contrast to preserve an aesthetic preference.

---

## 5. Typography

### 5.1 Typeface and language support

- Primary typeface: `<typeface>`.
- Fallback stack: `<system fallbacks>`.
- Chinese fallback: `<PingFang SC / Microsoft YaHei / etc.>`.
- Licensing: `<open source / licensed / system>`.
- Do not add a second display face without approval.

### 5.2 Scale

| Token | Size | Line height | Weight | Use |
|---|---:|---:|---:|---|
| `text-xs` | `00px` | `00px` | `000` | Compact metadata |
| `text-sm` | `00px` | `00px` | `000` | Supporting text |
| `text-base` | `00px` | `00px` | `000` | Default body |
| `text-lg` | `00px` | `00px` | `000` | Lead paragraph |
| `heading-sm` | `00px` | `00px` | `000` | Small section heading |
| `heading-md` | `00px` | `00px` | `000` | Standard heading |
| `heading-lg` | `00px` | `00px` | `000` | Major heading |
| `display-sm` | `00px` | `00px` | `000` | Hero heading |
| `display-lg` | `00px` | `00px` | `000` | High-emphasis display |

### 5.3 Weight and tracking

- Body: `<weight>`.
- Medium emphasis: `<weight>`.
- Standard headings: `<weight>`.
- Display headings: `<weight>`.
- Letter-spacing is role-based; do not apply a global negative value.
- Add tracking tokens only after visual validation.

### 5.4 Responsive typography

- Keep body sizes stable across viewports.
- Scale only display and large headings.
- Choose `clamp()` or explicit breakpoints; document the choice.
- Validate English, Chinese, and mixed-language wrapping.

### 5.5 Reading measure

- Target `<60–75>` characters per line for long-form text.
- Do not stretch text-heavy content to the widest container.
- Use hierarchy before color or boxes.

### 5.6 Typography rules

- No second scale, no ad hoc sizes.
- No global letter-spacing.
- No display sizes in dense product UI.
- No italic or all-caps as a substitute for hierarchy.

---

## 6. Spacing & Sizing

### 6.1 Spacing scale

| Token | Value | Typical use |
|---|---:|---|
| `space-0` | `0px` | Reset |
| `space-1` | `00px` | Tight inline gaps |
| `space-2` | `00px` | Compact gaps |
| `space-3` | `00px` | Compact padding |
| `space-4` | `00px` | Default small padding |
| `space-6` | `00px` | Card padding |
| `space-8` | `00px` | Large gaps |
| `space-12` | `00px` | Section separation |
| `space-16` | `00px` | Page rhythm |
| `space-24` | `00px` | Hero separation |

### 6.2 Sizing

| Token | Value | Use |
|---|---:|---|
| `size-icon-xs` | `00px` | Dense metadata |
| `size-icon-sm` | `00px` | Compact controls |
| `size-icon-md` | `00px` | Default inline icons |
| `size-icon-lg` | `00px` | Prominent actions |
| `control-height-sm` | `00px` | Compact UI |
| `control-height-md` | `00px` | Default controls |
| `control-height-lg` | `00px` | Touch-oriented controls |

`control-height-md` is a visual size, not proof of a 44×44 touch target. For touch
surfaces, use `control-height-lg` or add spacing.

### 6.3 Spacing rules

- Use the smallest token that creates clear hierarchy without crowding.
- Do not use large section tokens inside dense data UI.
- Do not invent intermediate values; if none fit, open a decision.
- Keep repeated sections aligned to the same container edges.

---

## 7. Radius & Borders

### 7.1 Radius scale

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

### 7.2 Shape grammar

- **Pill:** fully rounded, `radius-full`.
- **Capsule:** rounded rectangle with a fixed radius smaller than half its height;
  name the exact token.
- **Rounded rectangle:** a fixed radius token such as `radius-md`.
- **Square:** `radius-none`.
- Use one term consistently across the core and every site theme.

### 7.3 Borders

- Default width: `1px`.
- Use `2px` only for selected outlines or strong focus indicators.
- Use semantic border tokens, never raw hex.
- Do not use borders as decoration when spacing already groups content.
- Validate visibility in both themes and on secondary surfaces.

---

## 8. Elevation & Motion

### 8.1 Elevation

| Level | Token | Value | Use |
|---|---|---|---|
| 0 | none | `none` | Flat surfaces |
| 1 | `shadow-sm` | `<value>` | Cards, hovered tiles |
| 2 | `shadow-md` | `<value>` | Dropdowns, popovers |
| 3 | `shadow-lg` | `<value>` | Modals, dialogs |

Rules:

- Elevation must correspond to interaction or layering.
- Do not use more than one shadow style per level.
- Document dark-theme shadow opacity separately if it differs.
- Product photography shadows are not UI elevation.

### 8.2 Motion

| Token | Value | Use |
|---|---|---|
| `duration-fast` | `000ms` | Press feedback |
| `duration-base` | `000ms` | Standard transitions |
| `duration-slow` | `000ms` | Large transitions |
| `easing-standard` | `<curve>` | Default motion |

Rules:

- State the purpose of each motion (feedback, orientation, emphasis).
- Do not animate for decoration.
- Respect `prefers-reduced-motion`.
- Do not use motion to hide slow loading.

---

## 9. Layout Foundations

### 9.1 Breakpoints

| Token | Min width | Intended use |
|---|---:|---|
| `breakpoint-sm` | `0px` | Large phones |
| `breakpoint-md` | `0px` | Tablets |
| `breakpoint-lg` | `0px` | Desktop |
| `breakpoint-xl` | `0px` | Wide desktop |

### 9.2 Containers and gutters

| Token | Max width | Use |
|---|---:|---|
| `container-sm` | `00px` | Narrow forms |
| `container-md` | `00px` | Articles |
| `container-lg` | `00px` | Standard pages |
| `container-xl` | `00px` | Default content |
| `container-2xl` | `00px` | Broad dashboards |
| `container-fluid` | `100%` | Edge-to-edge layouts |

| Viewport | Gutter per side |
|---|---:|
| Below `breakpoint-md` | `00px` |
| `breakpoint-md`–`breakpoint-lg` | `00px` |
| `breakpoint-lg` and above | `00px` |

### 9.3 Grid

- Use a 12-column grid only when it helps.
- Default gap: `<value>` desktop, `<value>` narrow screens.
- Cards reflow by minimum usable width, not fixed desktop column counts.
- Keep repeated sections aligned to the same container edges.

### 9.4 Validation widths

Review at `375`, `390`, `640`, `768`, `1024`, `1280`, and `1536` px. Check
wrapping, hierarchy, contrast, spacing, alignment, card reflow, and horizontal
overflow.

---

## 10. Accessibility Baseline

### 10.1 Contrast

| Pair | Context | Ratio | Normal | Large | Verdict |
|---|---|---:|---|---|---|
| `{colors.color-text-primary}` on `{colors.color-background}` | Body | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |
| `{colors.color-text-secondary}` on `{colors.color-surface}` | Card | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |
| `{colors.color-on-primary}` on `{colors.color-primary}` | Primary action | `00.0:1` | `<pass/fail>` | `<pass/fail>` | `<pass/fail>` |

Compute ratios; do not estimate. Test each pair on its actual surface.

### 10.2 Focus

- Every keyboard-focusable element has a visible focus indicator.
- Specify color, width, offset, and radius.
- Verify focus on light and dark surfaces.
- Do not remove the outline without an approved replacement.

### 10.3 Keyboard and semantics

- Use native semantic elements where they exist.
- Provide accessible names for icon-only controls.
- Preserve logical focus order.
- Do not implement interactive behavior on non-semantic elements when a native
  element fits.

### 10.4 Target size

- Minimum `<44×44px>` effective target for touch surfaces.
- Icon artwork may be smaller than its target.
- Document exceptions and why they are safe.

### 10.5 Non-color cues

- Status needs text, icon, or shape in addition to color.
- Selected state needs a non-color cue.
- Error state needs a message, not only a red border.

### 10.6 Motion

- Respect `prefers-reduced-motion`.
- Avoid flashing, parallax, and auto-playing motion without controls.
- Do not rely on timing for essential tasks.

---

## 11. Site Theme Contract

**Purpose:** Protect consistency while letting each site be distinctive.

### 11.1 What a site theme may override

| Area | Allowed? | Constraint |
|---|---|---|
| Accent ramp | Yes | One ramp per site; same 10 step names; five semantic aliases; contrast checked |
| Surface tint | Limited | Must preserve semantic hierarchy and contrast |
| Hero composition | Yes | Layout only; uses core tokens |
| Marketing sections | Yes | Composition only; uses core tokens |
| Imagery and illustration | Yes | Must not replace UI affordances |
| Content voice | Yes | Must not change component labels' meaning |

### 11.2 What a site theme must not override

| Area | Rule |
|---|---|
| Semantic token names | Fixed |
| Neutral primitive palette | Fixed |
| Accent ramp step names | Fixed |
| Functional colors | Fixed |
| Focus and selection colors | Fixed |
| Type scale | Fixed |
| Spacing scale | Fixed |
| Radius scale | Fixed |
| Elevation levels | Fixed |
| Motion durations | Fixed |
| Breakpoints and containers | Fixed |
| Focus behavior | Fixed |
| Accessibility targets | Fixed |

### 11.3 Adding a theme

1. Copy the core token set; change only the allowed accent ramp and surface tint.
2. Define one accent ramp using the step names in section 4.4.
3. Map the five semantic aliases and record the light and dark mappings.
4. Document the allowed uses and the measured contrast result.
5. Verify the theme at all validation widths and in both themes.
6. Record the theme in the site's own document; do not edit core per site.
7. If the theme needs a new token, open a core decision first.

### 11.4 Variance budget

A site may look different in composition, imagery, and one accent ramp. It may not
look different in neutral palette, type scale, spacing rhythm, radius language,
elevation, focus, or accessibility behavior. If a site needs more variance than
this, treat it as a core decision, not a site exception.

---

## 12. Core Rules

### Do

- Use semantic tokens for every color, space, radius, shadow, and duration.
- Keep one accent ramp per site and document its five semantic aliases.
- Test light and dark surfaces separately.
- Use the smallest spacing token that creates clear hierarchy.
- Treat accessibility as a release gate.
- Prefer the default value over a new option.

### Don't

- Do not add a second type scale, spacing scale, or radius language.
- Do not use a raw hex, px, or ms value where a token exists.
- Do not create site-specific functional colors.
- Do not use color alone for status, selection, or focus.
- Do not change core tokens to fit one site.
- Do not let an agent invent a value to unblock a page; open a decision instead.

---

## 13. Core Acceptance Criteria

Before a site adopts the core, verify:

- [ ] Every token in this document is displayed on a foundation test page.
- [ ] Light and dark themes both render correctly.
- [ ] Every contrast pair is measured and recorded; failures are explicit.
- [ ] All validation widths show no unintended horizontal overflow.
- [ ] Chinese, English, and mixed-language text wrap naturally.
- [ ] Focus is visible on every interactive element.
- [ ] No raw values appear where a token exists.
- [ ] The site theme overrides only the fields allowed in section 11.
- [ ] The site does not fork or shadow a core scale.
- [ ] The changelog records any token or behavior change.

### 13.1 Foundation test page

The test page is the acceptance artifact. It must show:

- The neutral palette with token names and values.
- Every semantic role in both themes.
- Every typography token in English, Chinese, and mixed-language samples.
- Every spacing, sizing, and radius token on representative shapes.
- Border and surface levels in both themes.
- Container widths, gutters, and grid behavior.
- Focus, selection, success, warning, and danger states.
- The contrast table with calculated results.

---

## 14. Open Decisions

Do not fabricate values to make this document look complete.

| ID | Decision / gap | Impact | Owner | Status | Target date |
|---|---|---|---|---|---|
| `OD-001` | `<e.g. final neutral palette>` | `<what is blocked>` | `<owner>` | `<status>` | `YYYY-MM-DD` |

Rules:

- Every unresolved value lives here, not in a token table as if approved.
- Each item names an owner and a target date.
- When resolved, record the decision in the changelog and update the token status.
- If there are no open items, write `None` and state the coverage boundary.

---

## 15. Changelog

| Version | Date | Change | Author | Status |
|---|---|---|---|---|
| `0.1` | `YYYY-MM-DD` | Initial core skeleton | `<author>` | Draft |

---

## 16. Glossary

| Term | Definition |
|---|---|
| Primitive token | Raw value with no UI role, such as `gray-500`. |
| Semantic token | Role mapped to a primitive per theme, such as `color-text-primary`. |
| Component token | Repeated component decision that semantic tokens cannot express. |
| Core | The fixed foundation layer defined in this document. |
| Site theme | The allowed per-site expression layer defined in section 11. |
| Accent ramp | A per-site 10-step color scale (50–900) from which the five accent roles are mapped. Not a functional color. |
| Pill | Fully rounded shape using `radius-full`. |
| Capsule | Rounded rectangle with a fixed radius smaller than half its height. |
| Rounded rectangle | Rectangle using a fixed radius token such as `radius-md`. |
| Approved | Confirmed and safe to implement. |
| Proposed | Recommended but not approved. |
| Pending validation | Requires contrast, visual, or implementation testing. |
| Experimental | Limited trial; not a system-wide rule. |
| Deprecated | Retained for migration only. |
