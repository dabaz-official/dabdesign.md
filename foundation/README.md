# DabWave Foundation Test Page

A validation artifact, not a production component library. Every value on this
page comes from `../DabDesign.md`; nothing here invents a token.

## Run

```sh
python -m http.server 8000 -d foundation
# open http://127.0.0.1:8000/
```

Serving over HTTP (not `file://`) is required so the self-hosted fonts load
under the browser's font CORS rules.

## What it demonstrates

1. Light and dark themes, surfaces, overlay, text hierarchy
2. The 13-step neutral palette with token names and hex values
3. Every `text-*` role in English, Simplified Chinese, and mixed text
4. The 4px spacing scale and four applied spacing patterns
5. The Apple radius ladder, including pill and full
6. Icon sizes and control heights
7. Decorative versus interactive borders, focus / disabled / selected / error /
   loading states, the single floating shadow, and motion tokens
8. Container widths, the 12-column grid, and card reflow
9. Breakpoint table, viewport readout, and active range
10. A contrast table computed live from the resolved CSS variables

## Fonts

Self-hosted per DAB-008.

- `fonts/inter/InterVariable.woff2` — copied from `A:\Dev\Projects\DabFonts`
  (the version with glyphs shifted up 23/2048 units to align with Noto's hanzi
  ink). `fonts/inter/OFL.txt` is the Inter license.
- `fonts/noto/NotoSansSC-subset.woff2` — subset of the **tuned**
  `DabFonts/noto/sources/NotoSansSC.ttf` (half-width Chinese punctuation baked
  in), restricted to the characters used by this page, with the `wght` 100–900
  variable axis preserved. `fonts/noto/OFL.txt` is the Noto license.

Regenerate the Noto subset after changing the page text:

```sh
python - <<'PY'
import pathlib
base = pathlib.Path(r"A:\Dev\Projects\DabDesign")
text = (base/"foundation/index.html").read_text(encoding="utf-8") + (base/"foundation/foundation.js").read_text(encoding="utf-8")
chars = sorted({c for c in text if c.isprintable()})
(base/".subset-chars.txt").write_text("".join(chars), encoding="utf-8")
PY
pyftsubset "A:\Dev\Projects\DabFonts\noto\sources\NotoSansSC.ttf" \
  --text-file=foundation/.subset-chars.txt \
  --flavor=woff2 \
  --output-file=foundation/fonts/noto/NotoSansSC-subset.woff2 \
  --layout-features='*' --name-IDs='*' --name-languages='*'
rm foundation/.subset-chars.txt
```

A production site would ship the full `DabFonts/noto/dist` chunk set with
`unicode-range` instead of a page-specific subset.

## Known limits

- The repository has no logo asset, so the page does not recreate or
  approximate one.
- Buttons and inputs are dimension specimens, not Adopted components; DAB-013
  is approved but no component specification has reached Adopted yet.
- The contrast table reads the resolved values from the live DOM, so it is only
  as accurate as the CSS variable block above it.
