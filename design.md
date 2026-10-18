# DabAZ Design System — Design Specification

**Document status:** Foundation specification ready for implementation and visual validation  
**Current scope:** Brand foundations, tokens, typography, spacing, radius, responsive layout, accessibility, and foundation test page  
**Version:** 0.1  
**Purpose:** Canonical design guidance for human contributors and coding agents, including OpenCode.

> This document records the decisions confirmed so far. Anything explicitly marked as pending or proposed must not be treated as an approved standard. Do not invent replacement brand colors, token values, or theme mappings without documenting the proposal and obtaining approval.

---

# 1. Design Philosophy

## 1.1 Brand and product identity

DabAZ is a personal brand spanning multiple areas, including technology, design, and music. The design system must be reusable across different projects rather than being tied to one product or industry.

The visual direction balances **minimalism and personality**. Interfaces should feel deliberate, clear, and distinctive without relying on unnecessary decoration.

## 1.2 Core principles

### Neutral-first visual identity

- Use black, white, and gray as the core brand palette.
- Do not define a permanent DabAZ brand accent color.
- Keep functional colors, such as success, warning, danger, focus, and selection, separate from the brand palette.
- Individual products may establish their own visual themes when needed, provided they remain compatible with the design system's foundations.

### Typography-led expression

- Use typography, hierarchy, proportion, spacing, and layout to express personality.
- Keep everyday interface typography restrained and readable.
- Use stronger display typography selectively for landing-page heroes, brand introductions, and other high-emphasis areas.
- Do not use large display headings indiscriminately across ordinary product screens.

### Consistency with flexibility

- Reuse the same foundational tokens and semantic roles across projects.
- Allow product-specific compositions and themes without creating unnecessary one-off rules.
- Prefer explicit, reusable design decisions over arbitrary local styling.

### Accessibility by default

- Check foreground and background combinations in their actual contexts.
- Meet the contrast requirements defined in the Color & Themes section.
- Do not rely on color alone to communicate status or interaction.
- Preserve clear focus indicators and sufficient visual distinction for essential interface elements.

## 1.3 Logo

- Retain the existing original logo with its current, non-rounded form.
- The original SVG source files are available.
- Do not redesign, round, redraw, or otherwise alter the logo without explicit approval.
- Create or use appropriate light and dark logo variants based on the source assets. Do not assume a white-only logo is suitable on a light surface.
- Rounded logo treatments are not part of the current approved identity.

## 1.4 Typography direction

- **Primary typeface:** Inter.
- Use an appropriate system sans-serif fallback for Chinese glyphs.
- Body text should prioritize readability and restraint.
- Use weight 400 as the normal body-text weight; 500 for medium emphasis; 600 for standard headings; and 700 selectively for large display headings.
- Exact font-size, line-height, letter-spacing, and responsive typography tokens belong to the typography specification. Existing typography proposals should be retained rather than replaced arbitrarily.

---

# 2. Design Tokens

## 2.1 Token architecture

Organize design tokens into three layers.

### Primitive tokens

Primitive tokens store raw values without assigning a specific UI role. They should remain stable across themes.

Examples:

- `gray-0`
- `gray-50`
- `gray-100`
- `gray-150`
- `gray-200`
- `gray-300`
- `gray-400`
- `gray-500`
- `gray-600`
- `gray-700`
- `gray-800`
- `gray-900`
- `gray-950`
- `gray-1000`

### Semantic tokens

Semantic tokens describe purpose rather than a specific raw color. Components should reference semantic tokens wherever a theme-dependent role is involved.

Examples:

- `color-background`
- `color-surface`
- `color-text-primary`
- `color-border`

Semantic tokens map to primitive tokens according to the active theme.

### Component tokens

Component tokens are reserved for cases where a component genuinely needs a stable, reusable design decision that cannot be adequately expressed through the foundational semantic tokens.

- Do not create component-specific tokens preemptively.
- Prefer existing semantic tokens when they express the intended role.
- Add component tokens only when a real, repeated need is established.

## 2.2 Naming and implementation

- Use clear, role-based token names.
- Keep primitive values separate from semantic theme mappings.
- CSS custom properties are the intended implementation mechanism.
- Theme changes should primarily update semantic mappings, not duplicate raw values across individual components.
- Keep token names stable and documented. Avoid exposing implementation-specific details as public API unless intentionally approved.

The `dz-` prefix may be used for exported CSS variable names, consistent with the existing Figma-to-token mapping proposal. For example, `dz-gray-50` and `dz-color-background`. Confirm final CSS naming and export conventions during engineering integration.

## 2.3 Approved primitive neutral palette

The following 14 neutral values are approved and must not be silently changed.

| Primitive token | Hex value |
|---|---|
| `gray-0` | `#FFFFFF` |
| `gray-50` | `#FAFAFA` |
| `gray-100` | `#F5F5F5` |
| `gray-150` | `#EBEBEB` |
| `gray-200` | `#E5E5E5` |
| `gray-300` | `#D4D4D4` |
| `gray-400` | `#A3A3A3` |
| `gray-500` | `#737373` |
| `gray-600` | `#525252` |
| `gray-700` | `#404040` |
| `gray-800` | `#262626` |
| `gray-900` | `#171717` |
| `gray-950` | `#0A0A0A` |
| `gray-1000` | `#000000` |

The neutral palette is shared by both themes. Theme-specific behavior is defined through semantic mappings, not by changing primitive values.

## 2.4 Token status

Use these status labels in this document and future design records:

- **Approved:** explicitly confirmed and safe to implement.
- **Proposed:** a recommended direction awaiting approval.
- **Pending validation:** needs contrast checks, visual review, or implementation testing.
- **Experimental:** a limited trial, not a system-wide rule.
- **Deprecated:** retained for migration context but should not be used for new work.

Do not silently promote proposed or experimental values to approved status.

---

# 3. Color & Themes

## 3.1 Theme support

The initial design system supports two themes:

- **Light**
- **Dark**

Both themes must use the same semantic token names. A component should not need separate hard-coded colors for Light and Dark.

## 3.2 Approved theme mapping baseline

The following mapping reflects the previously confirmed baseline. The revised secondary and tertiary text mappings have been accepted as the working specification. Their implementation still requires contrast and contextual validation before release.

| Semantic token | Light mapping | Dark mapping | Status / intent |
|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | Confirmed baseline; page background |
| `color-surface` | `gray-0` | `gray-900` | Confirmed baseline; cards, dialogs, raised surfaces |
| `color-surface-secondary` | `gray-100` | `gray-800` | Confirmed baseline; secondary surfaces |
| `color-text-primary` | `gray-900` | `gray-50` | Confirmed baseline; primary text |
| `color-text-secondary` | `gray-600` | `gray-300` | Accepted mapping; secondary text, contrast validation required |
| `color-text-tertiary` | `gray-500` | `gray-400` | Accepted mapping; tertiary/supporting text, contrast validation required |
| `color-border` | `gray-200` | `gray-800` | Confirmed baseline; standard borders and dividers |
| `color-border-strong` | `gray-300` | `gray-700` | Confirmed baseline; stronger borders |
| `color-overlay` | Black with 50% opacity | Black with 50% opacity | Proposed; modal/dialog backdrop |

### Important mapping notes

- `color-text-secondary` and `color-text-tertiary` were updated from the earlier baseline to improve text contrast. The user agreed to proceed with the revised proposal, but the mapping should still be validated in actual contexts before being frozen as a formal release requirement.
- `color-overlay` at 50% black opacity is a proposed starting value, not an approved final value. Validate it against both themes and representative surfaces.
- The table uses semantic tokens rather than hard-coded color values inside components.
- A semantic token must be tested against the actual surface on which it appears. Do not assume that passing contrast against the page background guarantees passing contrast against cards, inputs, or overlays.

## 3.3 Contrast requirements

Use WCAG AA contrast targets:

- **Normal text:** contrast ratio of at least `4.5:1`.
- **Large text:** contrast ratio of at least `3:1`. Large text generally means at least 18 pt (24 CSS px) regular, or at least 14 pt (approximately 18.67 CSS px) bold.
- **Essential non-text interface components and visual states:** at least `3:1` where the WCAG non-text contrast requirement applies.

Contrast checks must be performed on the actual foreground/background pair, including semantic text on page backgrounds, surfaces, secondary surfaces, inputs, and overlays where applicable.

Do not treat a token as compliant in every context merely because it passes in one context.

## 3.4 Known contrast issue and verification

The previous Dark theme mapping used `gray-500` (`#737373`) for tertiary text against `gray-950` (`#0A0A0A`). Its contrast ratio is approximately `4.18:1`, below the `4.5:1` normal-text target. The following revised mappings are accepted as the working specification:

- Dark `color-text-secondary` → `gray-300` (`#D4D4D4`)
- Dark `color-text-tertiary` → `gray-400` (`#A3A3A3`)
- Light `color-text-secondary` → `gray-600` (`#525252`)
- Light `color-text-tertiary` → `gray-500` (`#737373`)

Validate these mappings against all relevant surfaces. If any intended normal-text combination fails, adjust the semantic mapping or constrain its use; do not weaken the WCAG target.

## 3.5 Functional colors

Functional colors are separate from the neutral brand palette. They are not fixed DabAZ brand accent colors.

Reserve semantic roles for:

- `color-success`
- `color-warning`
- `color-danger`
- `color-focus`
- `color-selection`

Exact values and Light/Dark mappings are not yet defined. Do not invent or standardize them as part of the neutral palette. Define them when validating real interaction states and components, and check contrast in both themes.

Do not rely on color alone to communicate success, warning, error, selection, or focus. Use suitable labels, icons, outlines, or other contextual cues as appropriate.

## 3.6 Overlay behavior

`color-overlay` represents the backdrop behind modal dialogs and similar layered interfaces.

- Use a shared semantic token rather than repeating arbitrary RGBA values across components.
- A starting proposal is black at 50% opacity in both themes.
- The final opacity remains pending visual validation.
- Validate backdrop visibility, foreground legibility, and the distinction between the overlay and the active dialog in both themes.

## 3.7 Theme implementation rules

- Define primitive neutral values once.
- Define semantic mappings for Light and Dark separately.
- Components should consume semantic tokens for theme-dependent colors.
- Avoid hard-coded neutral hex values inside reusable component styles when an existing token expresses the same role.
- Keep functional colors separate from neutral primitives and brand identity.
- Test both themes for contrast, surface hierarchy, borders, text hierarchy, focus visibility, and overlays before declaring the color foundation complete.

---

# 4. Open Decisions

The following items remain open and must not be treated as approved:

1. Final contrast verification of the revised Light/Dark text mappings across all relevant surfaces.
2. Final opacity for `color-overlay`.
3. Exact Light/Dark values for success, warning, danger, focus, and selection states.
4. Final public CSS variable naming and token export conventions.
5. Final typography and letter-spacing validation.
6. Exact Light/Dark values for success, warning, danger, focus, and selection states.
7. Final public CSS variable naming and token export conventions.
8. Shadow/elevation and transition scales, to be defined only when concrete component needs are tested.
9. Final contrast verification of accepted text mappings across all relevant surfaces.

---

# 5. Instructions for Coding Agents

When implementing or modifying UI for DabAZ Design System:

1. Read this document before making design-related changes.
2. Reuse approved primitive and semantic tokens.
3. Do not invent new brand colors, neutral values, theme mappings, or token scales without documenting the reason and requesting approval.
4. Treat proposed or pending-validation mappings as provisional; do not claim that contrast has passed unless it has actually been checked.
5. Keep Light and Dark behavior in semantic theme mappings instead of scattering theme-specific literals across components.
6. Preserve the original logo and its approved form.
7. Keep implementation changes aligned with the existing React + TypeScript, Vite, CSS Variables, CSS Modules, pnpm, and Vitest stack. Do not add frameworks or dependencies without a clear benefit.
8. When an unresolved decision blocks implementation, state the assumption and its impact rather than silently treating it as an approved standard.


---

# 6. Typography

## 6.1 Typeface and language support

- **Primary typeface:** Inter.
- Use an appropriate system sans-serif fallback for Chinese glyphs.
- Use the same semantic typography scale across Light and Dark themes.
- Body text should prioritize readability; use typography hierarchy rather than color alone to distinguish importance.
- Use font weights 400, 500, 600, and 700 for the roles defined below. Avoid adding more weights without a demonstrated need.

Suggested CSS font stack:

```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
```

The stack is a practical starting point. Verify glyph availability and rendering on supported platforms before finalizing font loading and fallback behavior.

## 6.2 Typography scale

The following scale preserves the existing typography proposal. It is included as the current working specification; verify visual behavior in real interfaces before treating every value as permanently frozen.

| Token | Font size | Line height | Weight | Typical use |
|---|---:|---:|---:|---|
| `text-xs` | 12px | 16px | 400 | Compact metadata and secondary labels |
| `text-sm` | 14px | 20px | 400 | Supporting text, helper text, compact UI |
| `text-base` | 16px | 24px | 400 | Default body text |
| `text-lg` | 18px | 28px | 400 / 500 | Introductory or emphasized body text |
| `heading-sm` | 20px | 28px | 600 | Small section headings |
| `heading-md` | 24px | 32px | 600 | Standard section headings |
| `heading-lg` | 32px | 40px | 600 | Major page or section headings |
| `display-sm` | 40px | 48px | 700 | Prominent hero or brand heading |
| `display-lg` | 48px | 56px | 700 | High-emphasis display heading |

## 6.3 Usage rules

### Everyday interface typography

- Use 12px, 14px, 16px, and 18px for body and supporting text.
- Use 20px, 24px, and 32px for normal interface headings.
- Prefer 16px / 24px for default body copy unless the context requires a different scale.
- Avoid using display sizes for routine cards, forms, settings screens, and dense product interfaces.

### Brand and display typography

- Reserve 40px and 48px display styles for landing-page heroes, brand introductions, and a small number of high-emphasis sections.
- Display headings should be noticeably more prominent than ordinary section headings without dominating the entire page.
- Use display typography selectively, not as a universal page-heading rule.

## 6.4 Weight and letter-spacing

- Body text: 400 by default.
- Medium emphasis: 500.
- Standard headings: 600.
- Large display headings: 700 where appropriate.
- Do not apply a universal negative letter-spacing value to all text.
- Set letter spacing by role only when visual testing demonstrates a benefit. Exact letter-spacing tokens remain unspecified until validated.
- Check Chinese, English, and mixed-language text for punctuation, wrapping, visual balance, and line density.

## 6.5 Responsive typography

Keep body text sizes stable across viewports by default. Adjust large headings when needed to prevent awkward wrapping and excessive first-screen height.

Existing responsive candidates:

| Token | Desktop candidate | Small-screen candidate |
|---|---:|---|
| `text-xs` | 12px | 12px |
| `text-sm` | 14px | 14px |
| `text-base` | 16px | 16px |
| `text-lg` | 18px | 18px |
| `heading-sm` | 20px | 20px |
| `heading-md` | 24px | 24px |
| `heading-lg` | 32px | 28px or 32px |
| `display-sm` | 40px | 32px or 36px |
| `display-lg` | 48px | 36px or 40px |

The small-screen values for `heading-lg`, `display-sm`, and `display-lg` are alternatives, not yet a single approved choice. Choose them based on real layout tests.

Validate at least desktop, tablet, and mobile widths. Check English, Chinese, and mixed-language headings for natural wrapping. Decide between `clamp()` and explicit breakpoint changes based on implementation simplicity and the actual design behavior.

---

# 7. Spacing, Sizing, Radius, and Borders

## 7.1 Spacing scale

**Status: Approved for the initial foundation implementation.** Use a 4px-based spacing system, with a small 2px token for fine adjustments. Do not introduce arbitrary values when a token is suitable.

| Token | Value | Typical use |
|---|---:|---|
| `space-0` | 0px | Reset / no gap |
| `space-0-5` | 2px | Fine alignment, compact icon offsets |
| `space-1` | 4px | Tight inline gaps |
| `space-2` | 8px | Compact control gaps, label spacing |
| `space-3` | 12px | Compact component padding and gaps |
| `space-4` | 16px | Default small padding and layout gaps |
| `space-5` | 20px | Intermediate component spacing |
| `space-6` | 24px | Standard card padding, section subgroups |
| `space-8` | 32px | Large component gaps and section spacing |
| `space-10` | 40px | Section separation |
| `space-12` | 48px | Large section separation |
| `space-16` | 64px | Page-level vertical rhythm |
| `space-20` | 80px | Large page sections |
| `space-24` | 96px | Hero and major section separation |

Rules:
- Use the smallest token that provides clear hierarchy without crowding.
- Typical compact control internal spacing: 8–12px; standard control internal spacing: 12–16px; card padding: 16–24px; section gaps: 32–64px.
- These are usage guidelines, not mandatory component dimensions. Components may choose from the scale based on content and density.
- Do not use large spacing tokens inside dense data interfaces without a clear reason.

## 7.2 Sizing and control dimensions

Use the following initial interaction-size standards:

| Token | Value | Use |
|---|---:|---|
| `size-icon-xs` | 12px | Dense metadata only |
| `size-icon-sm` | 16px | Compact controls |
| `size-icon-md` | 20px | Default inline/action icons |
| `size-icon-lg` | 24px | Prominent actions and navigation |
| `control-height-sm` | 32px | Compact / dense interfaces |
| `control-height-md` | 40px | Default buttons and inputs |
| `control-height-lg` | 48px | Prominent actions or touch-oriented controls |
| `control-height-xl` | 56px | Large touch-oriented actions when justified |

A 40px control is the default visual size, not a claim that it satisfies every touch-target guideline. For touch-heavy experiences, aim for a 44–48px or larger effective target, including appropriate spacing around controls. Icon artwork should normally be smaller than its clickable target.

## 7.3 Radius scale

**Status: Approved for the initial foundation implementation.** Use a restrained radius scale. Prefer small radii for controls and cards; reserve large radii for intentionally soft, spacious surfaces. Do not round the DabAZ logo.

| Token | Value | Typical use |
|---|---:|---|
| `radius-none` | 0px | Square geometry, separators, deliberate sharp edges |
| `radius-xs` | 4px | Small labels, compact nested elements |
| `radius-sm` | 6px | Small controls and compact surfaces |
| `radius-md` | 8px | Default buttons, inputs, small cards |
| `radius-lg` | 12px | Standard cards, menus, popovers |
| `radius-xl` | 16px | Large cards and dialogs |
| `radius-2xl` | 24px | Hero panels and large feature surfaces |
| `radius-full` | 9999px | Pills, circular avatars, fully rounded indicators only |

Rules:
- Use `radius-md` as the default for ordinary controls and `radius-lg` as the default for standard cards unless component-specific guidance says otherwise.
- Avoid applying `radius-full` to every button or card. Pill shapes should be intentional.
- Nested surfaces should not appear to have larger radii than their containing surfaces without a clear visual reason.

## 7.4 Borders and dividers

- Use semantic border tokens for theme-dependent borders.
- `color-border` is the standard border and divider role.
- `color-border-strong` is reserved for cases that need a clearer boundary.
- Default border width is 1px. Use 2px only for high-emphasis states such as selected outlines or strong focus indicators when validated.
- Do not use borders as decoration when spacing and surface contrast already provide sufficient grouping.
- Validate border visibility in both themes, particularly on secondary surfaces and around inputs.

---

# 8. Layout and Responsive Behavior

## 8.1 Responsive principles

- Use mobile-first CSS and progressively enhance layouts at larger breakpoints.
- Let content and interaction needs determine layout changes, while using the shared breakpoints below as the system defaults.
- Avoid horizontal overflow, cramped headings, and controls that become difficult to use on small screens.
- Keep body typography stable by default; scale display typography selectively.
- Prefer CSS Grid and Flexbox for layout; do not introduce a layout framework for these foundations.

## 8.2 Breakpoints

**Status: Approved defaults for the initial foundation implementation.** Breakpoints are minimum viewport widths and should be centralized in shared tokens/utilities.

| Token | Min width | Intended use |
|---|---:|---|
| `breakpoint-sm` | 640px | Large phones / compact two-column layouts where content permits |
| `breakpoint-md` | 768px | Tablets and wider content layouts |
| `breakpoint-lg` | 1024px | Desktop navigation and multi-column layouts |
| `breakpoint-xl` | 1280px | Wide desktop layouts and increased content width |
| `breakpoint-2xl` | 1536px | Very wide screens; use for restrained expansion only |

Implementation note: CSS custom properties cannot be substituted directly into media-query conditions in standard CSS. Keep breakpoint values centralized in the source/build configuration or shared CSS conventions, and document them alongside CSS custom-property tokens. Do not pretend that a `var(--breakpoint-*)` expression works in a conventional media query.

Use breakpoints when the content or layout needs them, not merely to change styles at every breakpoint. Validate at 375px, 640px, 768px, 1024px, 1280px, and 1536px.

## 8.3 Container widths and page gutters

**Status: Approved defaults for the initial foundation implementation.** Use a centered responsive container with a 100% width, consistent horizontal gutters, and capped maximum widths.

| Token | Max width | Typical use |
|---|---:|---|
| `container-sm` | 640px | Narrow forms and focused reading layouts |
| `container-md` | 768px | Articles and single-column content |
| `container-lg` | 1024px | Standard product pages and modest grids |
| `container-xl` | 1200px | Default wide application / marketing content |
| `container-2xl` | 1280px | Broad dashboards and spacious multi-column layouts |
| `container-fluid` | 100% | Edge-to-edge layouts where content benefits from the full viewport |

Horizontal page gutters:

| Viewport width | Default gutter per side |
|---|---:|
| Below 640px | 16px |
| 640px–1023px | 24px |
| 1024px and above | 32px |

Rules:
- A container should use `width: 100%`, the appropriate `max-width`, and auto inline margins.
- Keep the container gutter as inner padding; do not add a second identical page-level padding layer accidentally.
- Use `container-xl` (1200px) as the default maximum width for general pages unless the content calls for a narrower reading width or a wider application layout.
- For long-form text, prefer a readable measure around 60–75 characters per line rather than filling the entire container.
- Do not stretch text-heavy content to `container-2xl` just because it is available.
- Full-bleed backgrounds may extend beyond the content container while their inner content remains aligned to it.

## 8.4 Grid guidance

- Use a 12-column grid for broad desktop compositions when a grid is useful; do not force every page into a visible 12-column structure.
- Use 24px as the default grid gap on desktop and 16px on narrow screens, selecting tokens from the spacing scale.
- Cards should reflow based on minimum usable card width and content, not fixed desktop column counts carried unchanged onto mobile.
- At small viewports, prioritize a single-column layout unless the components remain comfortably usable side by side.
- Keep repeated sections aligned to the same container edges.

## 8.5 Responsive validation views

At minimum, test these exact widths:

- **Mobile:** 375px and 390px.
- **Small breakpoint:** 640px.
- **Tablet:** 768px.
- **Desktop:** 1024px and 1280px.
- **Wide desktop:** 1536px.

For each viewport, review typography wrapping, content hierarchy, surface contrast, spacing density, container alignment, card reflow, and horizontal overflow. Use the same representative content across viewports so comparisons remain meaningful.

# 9. Accessibility and Interaction Foundations

## 9.1 Contrast

Follow the contrast targets in Section 3.3. Check actual foreground/background pairs in both themes, including text on cards and inputs rather than only on the page background.

## 9.2 Focus and interaction states

- Keyboard focus must be visibly identifiable.
- Do not remove the focus indicator without providing an accessible replacement.
- Focus, selection, success, warning, and danger colors are functional tokens, not brand accent colors.
- Do not use color alone to convey meaning.
- Interaction states must remain distinguishable in both Light and Dark themes.

Exact focus-ring colors, widths, offsets, and state-specific values remain pending component-level validation.

## 9.3 Keyboard and semantics

- Use semantic HTML elements for their intended purpose.
- Ensure interactive controls can be operated with a keyboard.
- Provide accessible names for icon-only controls.
- Preserve a logical focus order.
- Do not implement interactive behavior using non-semantic elements when a native semantic element is appropriate.

---

# 10. Additional Open Decisions

In addition to the items in Section 4, these details remain open:

1. Final small-screen choices for `heading-lg`, `display-sm`, and `display-lg`.
2. Exact letter-spacing values, if any.
3. Whether to use `clamp()` or explicit breakpoint-based typography changes.
4. Fine-grained typography and letter-spacing validation.
5. Shadow/elevation and transition scales.
6. Focus-ring details and final functional-state colors.
7. Final CSS variable naming and public token export conventions.
8. Contrast verification across actual component and surface combinations.

These omissions are intentional. Do not fabricate values to make the specification appear complete. The spacing, radius, sizing, breakpoint, and container defaults above are approved for the initial foundation implementation and should be tested rather than reopened by the coding agent.

---

# 11. Expanded Instructions for Coding Agents

In addition to the instructions in Section 5:

1. Reuse the typography scale and weights in Section 6. Do not invent a second, conflicting type scale.
2. Treat responsive typography alternatives as unresolved until a single choice has been validated and approved.
3. Use spacing and sizing tokens when available. The 4px-based spacing scale is a candidate until formally approved.
4. Do not invent final radius, breakpoint, container-width, or control-height scales when those values are still open.
5. Test Light and Dark themes at desktop, tablet, and mobile sizes where relevant.
6. Check contrast in the actual component context, not only against the main page background.
7. If implementation requires an unresolved value, propose the smallest reasonable change, label it as provisional, and record the decision needed for approval.


# 12. Foundation Test Page Acceptance Criteria

Before expanding the component library, create a responsive **Foundation Test Page** in the existing preview/documentation environment. The page is a validation artifact, not a production component or a new application framework. Keep it isolated from the public component API unless a deliberate documentation export is required.

## 12.1 Required sections

1. **Brand and theme:** show the original logo assets where available, Light/Dark theme switching, page background, surfaces, borders, overlays, and text hierarchy. Do not recreate or approximate the logo if the source asset is unavailable.
2. **Neutral palette:** display all 14 approved neutral swatches with token name, hex value, and legible text.
3. **Typography:** render every typography token using English, Simplified Chinese, and mixed-language samples. Include long headings, body paragraphs, metadata, and wrapping examples.
4. **Spacing scale:** show each spacing token visually, with token name and pixel value. Include examples of inline gaps, stacked content, card padding, and section spacing.
5. **Radius scale:** show all radius tokens on representative shapes and cards, including square and pill examples. Explicitly demonstrate that logo geometry is not modified.
6. **Sizing:** show icon sizes and control heights, with buttons/inputs represented as test specimens if the existing component implementation is ready. Do not build a full component library just to populate this page.
7. **Borders and surfaces:** compare standard and strong borders, surface levels, dividers, and focus-state visibility in both themes.
8. **Containers and grid:** demonstrate `container-sm` through `container-2xl`, fluid layout, page gutters, and representative 12-column desktop grid behavior.
9. **Responsive behavior:** provide a clear viewport/readout label and verify the page at 375, 390, 640, 768, 1024, 1280, and 1536 CSS pixels. If the preview tooling cannot resize the viewport in-page, document the widths and validate using browser responsive mode.
10. **Contrast checks:** include a concise table of actual foreground/background pairs and calculated contrast ratios for text and essential UI boundaries. Clearly flag failures; never display an unverified ratio as passing.

## 12.2 Interaction requirements

- Theme switching must visibly update semantic theme mappings without changing primitive neutral values.
- The page must remain usable with keyboard navigation and visible focus states.
- Any controls included for demonstration must work; do not render decorative controls that imply functionality but do nothing.
- The test page must not require new dependencies unless there is a clear, documented benefit.

## 12.3 Acceptance checklist

- [ ] All tokens displayed match this document exactly.
- [ ] No ad hoc neutral colors or undocumented spacing/radius values are introduced in the specimens.
- [ ] Light and Dark themes are both reviewed.
- [ ] All required viewport widths are checked.
- [ ] No unintended horizontal overflow occurs.
- [ ] Chinese, English, and mixed-language text wrap naturally.
- [ ] Contrast results are calculated from the actual rendered token pairs and failures are recorded.
- [ ] Test-page implementation is isolated and does not introduce unnecessary public API or dependencies.
- [ ] Any proposed deviations are documented with a reason instead of silently changing the specification.

## 12.4 Agent deliverables

The coding agent should report: (1) files created or changed, (2) implemented token tables and theme behavior, (3) viewport widths tested, (4) contrast failures or visual issues found, (5) test/build commands actually run and their results, and (6) decisions that still require human review. Never claim a viewport, contrast check, test, or build passed unless it was actually verified.
