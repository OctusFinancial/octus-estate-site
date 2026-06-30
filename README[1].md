# Handoff: Octus Estate Marketing Site

## Overview

A multi-page marketing site for **Octus Estate** — a Florida-based financial advisory firm that guides individuals and families through estate planning across three structured meetings. The site explains the service, presents pricing tiers, differentiates trust- vs will-based planning, surfaces testimonials, and drives visitors to a Calendly-booked fit call.

Primary conversion goal: get the visitor to click **"Schedule a 20-minute fit call"** (Calendly link).

Target audience: middle-to-high net worth individuals and families who are estate-planning-curious but intimidated by traditional law-firm processes. Tone: warm, plain-spoken, premium-without-being-stuffy.

---

## About the Design Files

The files in `source/` are **design references created in HTML** — static prototypes showing intended look, copy, layout, and behavior. **They are not production code to deploy directly.**

The task is to **recreate these designs in the target codebase's environment** — most likely a React framework (Next.js is a strong default for a marketing site of this shape: SEO-friendly SSR, file-based routing, image optimization, fast CMS integration if needed later). Use the host environment's component patterns, image pipeline, link/router primitives, and accessibility helpers rather than copying the raw HTML/CSS verbatim.

If no framework is chosen yet, **recommended stack:**
- **Next.js 14+ (App Router)** with TypeScript
- **Tailwind CSS** (token-mapped to the design system below) OR **CSS Modules** preserving the existing CSS custom properties
- **next/font** for Google Fonts (Cormorant Garamond, Instrument Sans, JetBrains Mono)
- **next/image** for the logo and any photography
- Optional: a headless CMS (Sanity, Contentful) for blog/resources if the team wants non-developer publishing

---

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, copy, and interaction states in the source files are final. Match them pixel-for-pixel. Treat the HTML as the source of truth for visual specifics; if the README and the HTML disagree, the HTML wins (and please flag the mismatch back).

---

## Site Map

| Route | File | Purpose |
|---|---|---|
| `/` | `index.html` | Homepage — hero, value props, three-meeting process, pricing teaser, testimonials, final CTA |
| `/how-it-works` | `how-it-works.html` | Detailed walkthrough of the three-meeting engagement model |
| `/pricing` | `pricing.html` | Three tier cards (Essentials, Complete, Will-Based) + comparison table + FAQ |
| `/trust-vs-will` | `trust-vs-will.html` | Educational comparison helping visitors self-qualify into a tier |
| `/about` | `about.html` | Firm story, team, philosophy |
| `/testimonials` | `testimonials.html` | Client stories (referenced from homepage too) |
| `/faq` | `faq.html` | Frequently asked questions with expand/collapse |
| `/blog` (or `/resources`) | `blog.html` | Article/resource index |
| `/contact` | `contact.html` | Contact channels + message form |
| `/legal` | `legal.html` | Combined disclosures, terms, privacy policy |
| `/404` | `404.html` | Not-found page |

---

## Shared Chrome (Header, Footer, Disclosure Bar)

Built in `partials.js` and injected client-side on every page. **In a real framework, lift these into layout components** (e.g. Next.js root `layout.tsx`) — do not port the runtime injection pattern.

### Header (`<SiteHeader>`)
- Sticky, `top: 0`, `z-index: 50`
- Background: `color-mix(in oklab, var(--bg) 88%, transparent)` with backdrop-blur 10px + saturation 140%
- 1px bottom border in `--rule`
- Inner padding: `16px 28px`, max-width `1240px`, flex with `gap: 36px`
- Left: brand mark (38×38px PNG) + serif wordmark "Octus" + small caps subtitle "FINANCIAL"
- Center-right: nav links (Home, How it works, Pricing, Trust vs Will, About, FAQ, Resources, Contact) — 14px sans, hover/current state in gold underline
- Right: phone link `(833) 533-1123` (13px, tabular nums) + primary CTA "Schedule now"
- Mobile: hamburger collapses nav (not in current prototype — implement responsively)

### Footer (`<SiteFooter>`)
- Background: `--navy` (#0f314e), text light cream `#f7f1df` / `#b9c7d4`
- Multi-column link grid: company / services / resources / legal
- Brand mark + wordmark repeated top-left
- Copyright row: "© 2026 Octus Estate. All rights reserved."

### Disclosure Bar
- Below footer, smaller type, light navy band
- Contains the full regulatory disclosure text (financial advisory ≠ law firm, Estately + Counsel partnership, no attorney-client relationship, etc.) — see `partials.js` lines ~85-100 for exact copy

---

## Design Tokens

All tokens live in `:root` in `source/styles.css`. Three optional treatments (`data-treatment="classic|editorial|luxury"`) swap a subset for variant aesthetics — **ship Classic as the default** unless product asks otherwise.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0f314e` | Primary brand, headings, footer bg |
| `--navy-deep` | `#0a2238` | Hover/pressed on primary buttons |
| `--navy-soft` | `#1a4366` | Decorative accents |
| `--gold` | `#c59f4a` | Primary CTA, accent rules, eyebrow text |
| `--gold-soft` | `#d9bf85` | Hover tints, footer link underlines |
| `--gold-deep` | `#a8862e` | Pressed CTA, "luxury" treatment accent |
| `--sage` | `#a9c8be` | Secondary accent, illustrations |
| `--sage-soft` | `#c8dcd5` | Subtle backgrounds |
| `--grey-100` | `#f5f4f1` | Off-white panels |
| `--grey-200` | `#e8e8e8` | Disabled / muted |
| `--grey-300` | `#d4d4d0` | Borders, subtle dividers |
| `--grey-500` | `#8a8a85` | Secondary text on light |
| `--grey-700` | `#5a5a55` | Captions, fine print |
| `--ink` | `#1b1b1b` | Highest-contrast body text |
| `--bg` | `#faf8f3` | Page background (warm cream) |
| `--bg-elev` | `#ffffff` | Cards, raised surfaces |
| `--bg-band` | `#f1ede3` | Alternating section bands |
| `--fg` | `#1f2a36` | Body text on light |
| `--fg-soft` | `#4a5663` | Secondary body text |
| `--rule` | `#e3ddd0` | Borders, dividers |

### Typography

| Token | Stack | Used for |
|---|---|---|
| `--serif` | `"Cormorant Garamond", "EB Garamond", Georgia, serif` | All headings (h1–h3), brand wordmark, editorial pull quotes |
| `--sans` | `"Instrument Sans", "Söhne", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Body, nav, buttons, h4 |
| `--mono` | `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace` | Captions, technical labels, eyebrow secondary |

**Type scale (fluid via `clamp()`):**
- `h1`: `clamp(40px, 5.6vw, 76px)`, line-height 1.02, weight 500
- `h2`: `clamp(30px, 3.8vw, 52px)`, line-height 1.08, weight 500
- `h3`: `clamp(22px, 2vw, 28px)`, line-height 1.2, weight 500
- `h4`: 18px, line-height 1.3, sans, weight 600
- Body: 17px, line-height 1.55
- `.lead`: `clamp(18px, 1.4vw, 22px)`, line-height 1.5
- `.eyebrow`: 12px sans, weight 500, letter-spacing `0.18em`, uppercase, gold, leading 22px horizontal rule glyph
- Body color uses `--fg-soft`; headings always `--navy`
- `text-wrap: balance` on headings; `text-wrap: pretty` on paragraphs

### Spacing & Layout

| Token | Value |
|---|---|
| `--max` | `1240px` (primary content max-width) |
| `--max-wide` | `1440px` (used on `.container-wide`) |
| `--gutter` | `28px` (horizontal padding) |
| Section vertical padding | `clamp(60px, 8vw, 120px)` |
| Hero vertical padding | `clamp(60px, 7vw, 100px)` top, `clamp(50px, 6vw, 90px)` bottom |

### Radii

| Token | Value |
|---|---|
| `--radius-sm` | `4px` |
| `--radius` | `8px` (buttons, inputs) |
| `--radius-lg` | `14px` (cards) |

### Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(15,49,78,0.06), 0 1px 1px rgba(15,49,78,0.04)` |
| `--shadow` | `0 2px 8px rgba(15,49,78,0.08), 0 8px 24px rgba(15,49,78,0.06)` |
| `--shadow-lg` | `0 12px 40px rgba(15,49,78,0.12)` |

### Motion

- Default transition: `.15s–.2s` ease on color/background; `.18s ease` on buttons
- Card hover: `translateY(-2px)` + `--shadow` + border tints toward gold (30% mix)
- Button primary hover: `translateY(-1px)` + shadow + bg shifts `--gold → --gold-deep`
- Arrow glyphs in buttons translate `+3px` on hover
- `html { scroll-behavior: smooth; }` for in-page anchors
- No page-level entrance animations; respect `prefers-reduced-motion`

---

## Component Catalog

Components to build in the target codebase. All paddings, colors, and copy come from the source HTML; this is a structural inventory.

### `<Button variant="primary|secondary|ghost" size="default|large">`
- Padding: `13px 22px` default; `16px 28px` large
- Border radius: `--radius` (8px)
- Font: sans 14.5px (default) / 15.5px (large), weight 500, letter-spacing `0.01em`
- **primary**: gold bg + navy-deep text. Hover → gold-deep bg + white text + `translateY(-1px)` + shadow
- **secondary**: transparent bg + 1px navy border + navy text. Hover → navy bg + cream text
- **ghost**: no border, navy underline, no horizontal padding. Hover → gold + gold underline
- On dark band (`.band-deep`, `.cta-band`): secondary uses cream-toned border/text instead
- Trailing `.arrow` element translates 3px right on hover

### `<Eyebrow>`
- Section label above each h2. Format: `— EYEBROW TEXT` (the dash is a 22×1px gold rectangle generated via `::before`)
- 12px sans, uppercase, letter-spacing `0.18em`, color `--accent` (gold)

### `<Card>`
- White bg, 1px `--rule` border, 14px radius, 32px padding
- Hover: lift 2px + shadow + border edge tints toward gold

### `<Band variant="default|cream|navy">`
- Section wrapper. `default` = `--bg`. `cream` = `.band` class → `--bg-band`. `navy` = `.band-deep` → navy bg, cream headings, dim-blue body text
- Vertical padding: `clamp(60px, 8vw, 120px)`

### `<Hero>`
- Two-column on desktop, stack on mobile
- Left: eyebrow + h1 (with one italic gold phrase via `<em style="color:var(--gold-deep);font-style:italic;">`) + lead paragraph + button cluster
- Right: marketing imagery placeholder or pull-quote card
- See `index.html` lines ~17–60 for canonical example

### `<NavLink>`
- 14px sans body color, hover/current → gold with 1px gold underline `bottom: -2px`

### `<PhoneLink>`
- 13px secondary text, `font-variant-numeric: tabular-nums`, format `(833) 533-1123`, links via `tel:`

### `<PricingCard>` (pricing.html)
- Three tiers in a CSS grid. Middle tier ("Complete") gets `--gold` border + "Most chosen" ribbon
- Each card: tier name (h3 serif), price (large serif), 5–7 bulleted inclusions, CTA button at bottom
- Equal heights via grid; CTAs vertically aligned

### `<ComparisonTable>` (pricing.html + trust-vs-will.html)
- Two- or three-column comparison. Sticky header row. Checkmark icons in gold for inclusions, em-dash for omissions
- Row hover lifts a subtle `--bg-band` band

### `<FAQAccordion>` (faq.html)
- `<details>`/`<summary>` semantic. Closed: question + `+` indicator. Open: `+` rotates to `×`, answer slides down (max-height transition)
- Border-bottom 1px `--rule` between items, no card chrome

### `<TestimonialCard>` (testimonials.html, index.html teaser)
- Pull quote in serif italic, signature row (name + city + meeting count e.g. "3 meetings, Tampa FL")
- Optional headshot circle (40px) — placeholder if not provided
- Use `text-wrap: balance` on quote

### `<ContactForm>` (contact.html)
- Fields: first name, last name, email, phone (optional), topic (select), message (textarea)
- Inputs: white bg, 1px `--rule` border, 8px radius, 14px padding, focus ring in gold
- Submit: primary button, full width on mobile
- **Backend not implemented** — wire to the team's transactional email provider (e.g. Resend, Postmark) or form handler (Formspree, Basin) in the real build. For now the form posts nowhere.

### `<Stat>` blocks
- Large serif number + small caption — used on about/how-it-works
- No fake stats; only ship real numbers the firm provides

### `<DisclosureBar>`
- Narrow band below footer. Light navy, small print, mono caption-style. Contains regulatory disclosure text — see `partials.js`.

---

## Page-by-Page Notes

### `/` — Homepage (`index.html`)
1. **Hero** — "Estate planning, done with you." Italic gold phrase highlight. CTA pair: "Schedule your first meeting" (primary) + "How it works" (secondary)
2. **Three-pillar value strip** — icon-less; just eyebrow + headline + 1-sentence body, repeated three times in CSS grid
3. **The three meetings** — numbered list (1, 2, 3) with serif numerals as decorative letterforms, accompanying body
4. **Pricing teaser** — three card previews linking to `/pricing`. "Not sure which is right? Schedule a free 20-minute fit call →" line with gold underline link
5. **Testimonial carousel/grid** — three quotes
6. **Final CTA band** — `--bg-band` cream, centered, primary CTA

### `/how-it-works`
- Walks through Meeting 1 (Discovery), Meeting 2 (Design), Meeting 3 (Delivery)
- Each meeting: eyebrow ("MEETING ONE") + h2 + body + sub-bullets of what happens
- Side-by-side image placeholder/illustration column on desktop

### `/pricing`
- Three tier cards: **Essentials**, **Complete** (highlighted), **Will-Based**
- Comparison table below
- FAQ section
- Final CTA band

### `/trust-vs-will`
- Educational: side-by-side comparison
- Decision-tree-style "You probably want X if…" callouts
- Links to pricing tiers that match each path

### `/about`
- Firm story, team grid, philosophy section
- Use placeholder headshot circles until real photography is provided

### `/faq`
- Accordion list, grouped by category (Process, Pricing, Legal/Compliance, Documents)
- Each answer can contain links to deeper pages (legal.html#disclosures, pricing.html, etc.)

### `/contact`
- Two-column layout: contact info (left) + message form (right)
- **By phone** note: "Monday–Friday, 9am–5pm Eastern Time. If we're with a client, leave a voicemail and we'll return your call the same business day."
- Email channels: `hello@octusestate.com`, `press@octusestate.com`
- Mailing address (placeholder until real one is set)

### `/legal`
- Long-form, anchor-navigable. Sections: Disclosures, Terms of Service, Privacy Policy, Cookies, Affiliate Disclosure
- TOC sidebar on desktop sticks to viewport (`position: sticky; top: 100px`)

### `/404`
- Centered. Big serif "Page not found." + helpful nav links (Home, Pricing, Contact) + "Schedule a fit call" CTA

---

## Interactions & Behavior

- **Smooth scroll** to anchors site-wide (`html { scroll-behavior: smooth }`)
- **FAQ accordion**: `<details>` element default behavior is fine; style the indicator
- **Card hover**: 2px lift + shadow + border-tint to gold
- **Button hover**: as documented above
- **Header on scroll**: stays sticky with backdrop blur; no shrink/expand
- **Mobile nav**: not implemented in prototype — build a hamburger that opens a full-screen sheet with the same nav links and CTA pinned to bottom
- **Form submit**: not wired — see ContactForm note above
- **External links** (`Calendly`, social): open in new tab with `rel="noopener"`

---

## Routing & Outbound Links

| Link | Behavior |
|---|---|
| Internal nav (`index.html` → `about.html`, etc.) | Convert to framework router links (`<Link href="/about">`) |
| `tel:+18335331123` | Native phone handler |
| `mailto:hello@octusestate.com` | Native mail handler |
| `https://calendly.com/octusfinancial/introduction` | External, new tab, `rel="noopener"`. **⚠️ The Calendly slug is still `octusfinancial`** — the design team is renaming this on Calendly's side; update the URL slug once that's done. |
| In-page anchors (`legal.html#privacy`, `legal.html#disclosures`) | Standard hash-fragment scroll |

---

## SEO / Metadata

Every page has a `<title>` and the homepage carries JSON-LD `Organization` + `WebSite` schema in `partials.js` (lines 110+). Port these into the framework's metadata API (e.g. Next.js `generateMetadata`). The pricing page has `Offer` schema; the contact page has `ContactPoint` schema — preserve all of it.

**Replace canonical URLs** (`https://octusestate.com/`) once the production domain is confirmed.

---

## Assets

Located in `source/assets/`:

| File | Description |
|---|---|
| `octus-mark.png` | 38×38 logo glyph used in header and footer (also 24×24 favicon target). High-resolution PNG. |
| `octus-wordmark.png` | Full wordmark — used in select hero/footer treatments. |
| `octus-palette.png` | Reference palette image — **do not ship**. Internal designer reference only. |

**Recommended:** ask the brand owner for SVG versions of the mark and wordmark; the current PNGs will scale poorly above 2× retina.

**Missing assets the team should provide before launch:**
- Team headshots (3–6, depending on team size)
- Hero photography or illustration (currently no decorative imagery on most pages)
- Open Graph / social share image (1200×630)
- Favicon set (16, 32, 180, 192, 512)

---

## Treatments (Optional Variants)

The CSS supports three aesthetic variants via the `data-treatment` attribute on `<html>`:

- **Classic** (default) — Cormorant + Instrument Sans, warm cream bg
- **Editorial** — Fraunces + Inter Tight, slightly cooler bg, more magazine-like
- **Luxury** — Same fonts as Classic, deeper warm bg, gold-deep accent

Currently only **Classic** is shipped. Treatments can be exposed as a build-time theme switch or removed entirely from the production build to reduce CSS weight. Recommend **dropping the unused treatments** when porting unless product wants them as A/B variants.

---

## State Management

Marketing site — minimal client state:
- FAQ accordion (native `<details>`)
- Mobile nav open/closed (to be built)
- Contact form field values (controlled inputs, local component state)

No global store needed. No data fetching except potentially blog/resources if a CMS is integrated.

---

## Accessibility Notes

- All interactive elements have visible focus rings (currently browser default — strengthen with a custom `:focus-visible` outline in gold or navy with 2px offset)
- Color contrast: navy text on cream bg passes AAA; gold on cream passes AA Large only — **never use `--gold` for body copy**, only headings/accents/CTAs
- Form labels are explicit (`<label for>`); preserve when porting
- Heading hierarchy is clean — keep one `<h1>` per page
- `prefers-reduced-motion`: hover lifts and arrow translates should be suppressed when set

---

## Domain & Deploy Context

- Production domain: **octusestate.com** (purchased via GoDaddy)
- DNS pointed at Vercel via nameserver delegation (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
- SSL handled automatically by Vercel
- Email (`hello@octusestate.com` etc.) will run through Google Workspace — add MX records in Vercel DNS once Workspace is provisioned

---

## Files in This Handoff

```
design_handoff_octus_estate_marketing_site/
├── README.md                    (this file)
└── source/
    ├── index.html               Homepage
    ├── about.html               About
    ├── how-it-works.html        How it works
    ├── pricing.html             Pricing
    ├── trust-vs-will.html       Trust vs Will comparison
    ├── faq.html                 FAQ
    ├── contact.html             Contact
    ├── testimonials.html        Client stories
    ├── blog.html                Resources / blog index
    ├── legal.html               Legal & disclosures (combined)
    ├── 404.html                 Not found
    ├── styles.css               All shared styles + tokens
    ├── partials.js              Runtime-injected header/footer/disclosure + JSON-LD schema
    └── assets/
        ├── octus-mark.png
        ├── octus-wordmark.png
        └── octus-palette.png    (reference only — do not ship)
```

To preview locally before porting: open `source/index.html` directly in a browser, or run `npx serve source` from this folder.

---

## Open Questions for the Client

Flag these to the Octus team before development is final:

1. **Calendly URL slug** — currently `calendly.com/octusfinancial/introduction`. Will it be renamed to `octusestate` to match the new domain?
2. **Mailing address** — what should the legal/contact page show?
3. **Team bios + headshots** — needed for `/about`
4. **Hero photography** — does the firm want lifestyle photography, abstract art direction, or stay copy-forward?
5. **Blog/resources content strategy** — will the blog launch with seed articles or stay parked until content exists?
6. **Form backend** — which provider handles contact form submissions? (Resend, Postmark, Formspree, etc.)
7. **Analytics** — GA4? Plausible? Fathom? Add the tag once chosen.
8. **Compliance review** — the legal disclosures were drafted in design. Have the firm's compliance officer review before launch.
