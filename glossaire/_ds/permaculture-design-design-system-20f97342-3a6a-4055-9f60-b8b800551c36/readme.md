# Permaculture Design — Design System

A design system for **Permaculture Design** (permaculturedesign.fr), a French
permaculture-education company. The brand teaches permaculture online through
à-la-carte video **formations** and a membership community called **l'Atelier**.
The voice is warm, grounded and practical; the look is forest-green and earthy,
with a single honey-yellow accent for calls to action.

> Tagline in use: *« Rêvez plus, vivez votre lieu de vie, construisez-le. »*

## Products represented
- **Site web Permaculture Design** — the marketing site: formation landing pages,
  long-form "pilier" (pillar) articles, the **l'Atelier** membership/pricing page,
  catalog, blog. Recreated in `ui_kits/permaculture-website/`.
- The same system also drives the **mobile** views and downloadable resources seen
  in the source file (not all recreated here — see Caveats in the chat).

## Sources
- **Figma:** *"SPCD - Amélioration 2026.fig"* (attached). Key frames explored:
  `Desktop/SPCD/PCDFormations` (desktop landing), `PCDAccueilMobile`,
  `PCDPagePilier*` (article), plus the `Ressources` page which is the component
  library (typography sheet, `bouton`, `form`, `états`, `mise-en-exergue`,
  `pliable/dépliable`, `fil-d-ariane`, icons, logos).
- No code repository was provided; all tokens, components and screens here were
  rebuilt from the Figma file's measured values.

---

## CONTENT FUNDAMENTALS — how Permaculture Design writes

- **Language:** French throughout. Use proper French typography: « guillemets »
  with spaces, the narrow space before `: ; ! ?`, the `'` apostrophe, `€` after
  the number with a space (`89 €`), and `+ 12 500` / `2 600 €` with thin-space
  thousands grouping.
- **Address the reader as "vous."** Warm but respectful. *« Apprenez à votre
  rythme, où que vous soyez. »* *« Accédez à toutes nos formations en illimité. »*
- **"Nous" for the company.** *« Nos formations s'adaptent à votre niveau. »*
- **Tone:** encouraging, concrete, nature-literate. Verbs of growth and making —
  *cultiver, concevoir, observer, construire, transformer*. It sells transformation
  ("transformez votre jardin et votre rapport à la nature"), not features.
- **Casing:** sentence case everywhere — headings included. Small uppercase labels
  (with letter-spacing) are used sparingly for eyebrow/section tags and footer
  column titles. Never ALL-CAPS sentences.
- **Numbers as proof:** social proof is front-and-centre — *« 5/5 · 12 500+ avis
  Google », « 14 ans d'expertise », « 40+ formations », « + 12 500 élèves formés »*.
  Use real, specific figures; never invent vague stats.
- **No emoji.** The brand does not use emoji in UI or marketing copy.
- **CTA copy** is direct and value-bearing: *« Rejoindre l'Atelier — 89 €/an »*,
  *« Découvrir »*, *« Voir les formations »*, *« Lire plus d'avis »*,
  *« En savoir plus »*.

---

## VISUAL FOUNDATIONS

### Color
- **Forest green leads.** `--green-900 #23442A` is the signature — hero
  backgrounds, footer, primary text. `--green-700 #2F663B` is the logo green and
  the default button fill; `--green-600 #438E52` carries links and accents.
- **Soft green surfaces** create calm sections: `--green-50 #F3FAF4` (cards),
  `--green-100 #E4F4E6` (feature bands, quote panels), `--green-200/300` for
  borders and chips.
- **One accent: honey yellow** `--yellow-400 #FFDE67`, with deep-cocoa text
  `--brown-900 #461B02` on top. Reserved for the single most important CTA.
- **Earthy neutrals** — warm off-white paper `#FBFAF9`, sand `#F6F6F0 / #D6D3B2 /
  #9C8D56` — never cold greys for surfaces. Pure black is used sparingly.
- See `tokens/colors.css`. **Avoid** blue/purple gradients entirely.

### Type
- **Display: Recoleta** — a warm, rounded serif — for all headings, hero lines and
  big numbers/prices. *(Substituted with **Fraunces** here; see Caveats.)*
- **Body: Satoshi** (real brand sans, loaded from Fontshare) — UI, paragraphs,
  labels, buttons; default weight **Medium (500)**, Bold (700) for emphasis.
- Scale (`tokens/typography.css`): display 118 / h1 55 / h2 50 / h3 40 / h4 32 /
  h5 24 / h6 20; body XL 24 / L 18 / M 16 / S 14 / XS 12 / XXS 11. Headings
  line-height ~1.05–1.1, letter-spacing −0.01em; body 1.4.

### Layout, shape & depth
- **Generous, centred layouts** — ~1200px max content, big 88px section rhythm,
  full-bleed colored bands (forest hero, green-100 feature strip, forest CTA) to
  segment the page.
- **Gently rounded corners:** buttons/inputs 8px, cards 16px, panels/feature
  bands 24–32px, badges & pills fully round.
- **Soft, low-contrast shadows** tinted with green-black (`--shadow-card:
  0 6px 24px rgba(15,36,20,.07)`). Cards are white (or tinted) with a 16px radius
  and either a hairline `--green-100` border or the soft card shadow — rarely both.
- **Borders** are 1.5px and green-tinted on inputs; hairline green-100 elsewhere.

### Imagery
- **Real photography** of gardens, water systems, plants and hands-on permaculture
  — natural daylight, green-and-earth palette, slightly soft/warm, never cold or
  high-gloss. Images sit in 16:10 card tops or large rounded hero blocks.
  Samples in `assets/images/`.

### Motion & interaction
- Calm and quick. `--dur-base 200ms`, ease-out `cubic-bezier(.22,1,.36,1)`.
- **Hover:** cards lift (`translateY(-3px)` + larger soft shadow); buttons darken
  slightly (`brightness .94`), the yellow accent shifts to `--yellow-500`; links
  underline / shift to green-600.
- **Press:** buttons nudge down 1px. Focus shows a green focus ring
  (`--shadow-focus`). No bounces, no parallax, no decorative looping animation.
- Respects `prefers-reduced-motion`.

---

## ICONOGRAPHY
- **Line icons, ~1.5–2px stroke**, rounded caps — calm and friendly, matching the
  rounded type. Sourced from the Figma file into `assets/icons/`
  (chevron, search, home, person, info, alert-triangle, check-valid, wishlist).
- **Brand & social marks** are filled SVGs in `assets/icons/` (facebook, instagram,
  youtube, linkedin, tiktok, x) — rendered **monochrome white** on the forest
  footer (via `filter`), brand-color elsewhere. The `mise-en-exergue.svg` is the
  oversized quotation mark used in pull-quotes.
- **Logos** in `assets/logos/`: `symbole-pcd.svg` (the PCD leaf/sprout monogram),
  `pcd-texte-vert.svg` / `pcd-texte-blanc.svg` (the "Permaculture Design" wordmark,
  set in the display serif), and `latelier-union.svg` (l'Atelier mark).
- **No emoji.** Decorative "✓" checks are drawn as small filled green/yellow
  circles with a tick (see `.pk-check`). State glyphs (success/info/warning/danger)
  live inside the `Callout` component.
- When you need an icon not in `assets/`, match the existing line weight/rounding
  (Lucide is the closest CDN family) and flag the substitution.

---

## INDEX / manifest
**Root**
- `styles.css` — global entry point (import this); `@import`s the token + base files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `logos/`, `icons/`, `images/`.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).
- `SKILL.md` — portable skill manifest.

**Components** (`components/<group>/` — React, props in each `.d.ts`,
usage in each `.prompt.md`):
- `forms/` — **Button**, **Input**, **Checkbox** (checkbox + radio).
- `core/` — **Badge**, **Card**, **Rating**.
- `feedback/` — **Accordion** (+ `AccordionItem`), **Callout** (highlight / quote /
  status banners).
- `navigation/` — **Breadcrumb**.

**UI kits**
- `ui_kits/permaculture-website/` — interactive recreation of the website:
  landing (`HomeScreen`), pillar article (`FormationsScreen`), l'Atelier pricing
  (`AtelierScreen`), shared `Header`/`Footer`. Open `index.html`.

### Using the components
In a Design System card or consuming page, load the compiled bundle and read the
namespace:
```html
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Badge } = window.PermacultureDesignDesignSystem_20f973;
</script>
```
