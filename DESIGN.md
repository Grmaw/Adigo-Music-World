# DESIGN SYSTEM — ADIGO MUSIC WORLD

## Design Concept
Afro-modern, cinematic concert website inspired by international artist tour campaigns. Dark, dramatic, and editorial — combining live performance energy, fashion culture and personal identity. Hebrew RTL layout with English brand name.

---

## Color Palette

| Token                  | Value                    | Usage                        |
|-----------------------|--------------------------|------------------------------|
| `--color-black`       | `#050505`                | Main background              |
| `--color-charcoal`    | `#111111`                | Navbar scrolled, footer      |
| `--color-surface`     | `#181512`                | Cards, sections              |
| `--color-red-dark`    | `#6E1515`                | Deep red accent              |
| `--color-red`         | `#A6261C`                | Button hover, badge          |
| `--color-orange`      | `#D85A24`                | Primary CTA, active state    |
| `--color-gold`        | `#D6A23C`                | Price, logo accent, numbers  |
| `--color-ivory`       | `#F3E7D3`                | Primary body text            |
| `--color-white`       | `#FAF8F3`                | Headings, pure white         |
| `--color-muted`       | `#AAA29A`                | Secondary text, labels       |
| `--color-border`      | `rgba(255,255,255,0.14)` | Borders, dividers            |
| `--color-border-dim`  | `rgba(255,255,255,0.07)` | Subtle borders               |

---

## Typography

| Font          | Usage                           |
|--------------|---------------------------------|
| Bebas Neue   | Display headings (English)      |
| Heebo        | Body, labels, nav, Hebrew text  |

| Role             | Size (clamp)             | Weight |
|-----------------|--------------------------|--------|
| Hero title       | clamp(72px,10vw,160px)  | 400 (Bebas Neue) |
| Page title       | clamp(56px,7vw,100px)   | 400 (Bebas Neue) |
| Section title    | clamp(36px,4.5vw,56px)  | 400 (Bebas Neue) |
| Body             | 18px                    | 300–400 |
| Label / eyebrow  | 11–14px, uppercase      | 700 |

---

## Spacing System (8px base)

`--spacing-xs: 4px` · `--spacing-sm: 8px` · `--spacing-md: 16px` · `--spacing-lg: 24px`  
`--spacing-xl: 32px` · `--spacing-2xl: 48px` · `--spacing-3xl: 80px` · `--spacing-4xl: 120px`

---

## Border Radius

| Token         | Value |
|--------------|-------|
| `--radius-sm` | 2px   |
| `--radius`    | 4px   |
| `--radius-lg` | 8px   |

Minimal radius — maximum sharpness for a concert/fashion feel.

---

## Button Styles

- **Primary** (`.btn-primary`): Orange bg, uppercase, 13px/1.5px tracking, hover → red
- **Secondary** (`.btn-secondary`): Transparent, ivory text, border, hover → gold border
- **Ghost** (`.btn-ghost`): Gold border + text, hover → fills gold bg

---

## Card Styles

- **Music Card**: No radius, dark surface bg. Hover lifts 3px + image scale 1.07
- **Show Card**: Editorial horizontal row, large Bebas date number, thin border-bottom separator
- **Product Card**: Minimal, 3:4 portrait aspect ratio, no border, hover lifts + image scale 1.06
- **Featured Music Card**: 2-column split (image + text), full-width editorial

---

## Navigation

- Transparent on page load, scrolls to `rgba(5,5,5,0.92)` + blur
- Logo (right), nav (center), social+cart (left)
- Active link: gold color + orange underline
- Hover: animated underline (width 0→100%)
- Mobile: hamburger opens full-width overlay menu

---

## Special Effects

- **Film grain**: CSS SVG filter on `body::after`, `mix-blend-mode: overlay`
- **Scroll reveal**: IntersectionObserver adds `.is-visible` to `.reveal` elements
- **Hero overlays**: Triple gradient layers (dark + red tint + directional)
- `prefers-reduced-motion` respected via CSS

---

## Responsive Breakpoints

| Breakpoint | Behavior                                          |
|-----------|---------------------------------------------------|
| > 1024px  | Full desktop editorial layout, 3-col grids       |
| 768–1024px| 2-column grids, reduced heading sizes             |
| < 768px   | Single column, hamburger menu                    |
| < 640px   | Hero 85vh, full-width CTAs, stacked filters      |
