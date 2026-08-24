# Customising

## Colours

Every colour lives in the `@theme` block of `src/styles/global.css`. A hex value
anywhere else is a bug — it is how a site ends up with two palettes.

```css
@theme {
  --color-ink-50:  oklch(98% 0.002 260);   /* backgrounds, hairlines */
  --color-ink-400: oklch(63% 0.008 260);   /* borders and icons only */
  --color-ink-500: oklch(52% 0.010 260);   /* lightest ink allowed on text */
  --color-ink-900: oklch(17% 0.013 260);   /* headings */
  --color-signal-500: oklch(70% 0.16 168); /* the one accent */
  --color-caution-600: oklch(56% 0.14 62); /* waiting, refused, lost */
}
```

### The contrast rule, both directions

Measured, not estimated:

| | on white | on `ink-950` |
|---|---|---|
| `ink-300` | 2.01 ✗ | — |
| `ink-400` | **3.51 ✗** | 5.78 ✓ |
| `ink-500` | 5.50 ✓ | **3.68 ✗** |
| `ink-600` | 8.49 ✓ | 2.39 ✗ |

The floor is **`ink-500` on light and `ink-400` on dark**, and they are not
interchangeable. Writing `text-ink-400 dark:text-ink-500` looks symmetrical and
fails in both themes at once — that shipped here once, on the hero timestamps.

`caution-600` is `oklch(56% …)` rather than something lighter because it carries
"waiting for a person" and the approval column. At 65% it measured 3.22:1.

### Changing the accent

Change the hue in the three `--color-signal-*` values and keep the lightness.
Then look at focus rings in both themes — the accent is what they are drawn in.

Do not introduce a third chromatic family. `signal` plus the existing amber and
red states is the whole palette.

## Type

`--font-sans` for everything a person reads. `--font-mono` for tool names, run
ids, keys and code — a tool name set in the sans face reads as prose and stops
looking like an identifier.

Fonts go through Astro's built-in pipeline: self-hosted, preloaded, with fallback
metrics so the swap does not shift the layout. To change one, edit the `fonts`
block in `astro.config.mjs` — not a `<link>` tag.

## Motion

Entrance only. Nothing pins, nothing snaps.

Three rules that exist because breaking them cost real numbers here:

1. **The initial hidden state belongs in CSS**, behind `.has-motion`, applied
   before first paint. Setting it from JS caused 0.048 CLS.
2. **Never put `data-rise` above the fold.** An element at `opacity: 0` is not
   eligible to be the LCP element, and the largest thing on screen is usually in
   the hero. That cost 0.8s of LCP.
3. **Inside `overflow-x: auto`, animate opacity only.** CSS computes
   `overflow-y: visible` to `auto` when the other axis is not visible, so a row
   nudged twelve pixels down summons a vertical scrollbar for the length of the
   animation and then drops it.

Everything sits behind `@media (prefers-reduced-motion: no-preference)`.

## Layout

One idea per section — if a section needs two headings it is two sections.
Tables and code blocks scroll inside their own `overflow-x: auto` box; the page
body never scrolls sideways.

## The editorial standard

The part most likely to be deleted, and the part that makes the rest work.

1. **Show a number you lose on.** A comparison you win outright reads as
   marketing and gets discarded whole.
2. **Blanks are content.** A column of ticks is a brochure.
3. **Name the limit in the same sentence as the claim.** An unconditioned claim
   gets discounted entirely; a conditioned one gets believed.
4. **Never write a number you have not measured.** Count the files. Run the
   audit. Then write it.
