# Oxygen Gym Karachi — Design System

## Brand Foundation

**Gym Name**: Oxygen Gym  
**Tagline**: "24/7 Fitness, No Limits"  
**Location**: Karachi, Gulshan-e-Iqbal Block 1, GPC 1, Near Gaming Nexus  
**Contact**: +92 316 2128803 (Phone & WhatsApp)  
**Instagram**: @oxygengymkarachi

**Brand Personality**: Dark, intense, premium, industrial-athletic. Oxygen Gym projects authority and 24/7 commitment — a no-excuses fitness environment that feels both premium and accessible. The Karachi location in Gulshan-e-Iqbal Block 1 serves dedicated fitness enthusiasts who want serious training without the luxury-club price tag.

**Logo**: Circular dark badge with "OXYGEN GYM" in bold white text, mountain/chevron icon, surrounded by a blue ring accent. The logo communicates strength, altitude (pushing limits), and oxygen (the fuel of performance).

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#0A0A0F` | Page backgrounds, deepest dark |
| Surface | `#12121A` | Card backgrounds, elevated surfaces |
| Steel | `#1E1E2E` | Borders, dividers, subtle backgrounds |

### Accent Colors (from logo)
| Token | Hex | Usage |
|---|---|---|
| Oxygen Blue | `#00D4FF` | Primary accent — CTAs, highlights, active states, glow effects |
| Electric Cyan | `#00F0FF` | Secondary accent — hover states, gradient endpoints, sparkle |

### Text Colors
| Token | Hex | Usage |
|---|---|---|
| Pure White | `#FFFFFF` | Primary headings, hero text |
| Frost | `#E2E8F0` | Body text, descriptions |
| Muted | `#94A3B8` | Secondary text, captions, labels |

### Functional Colors
| Token | Hex | Usage |
|---|---|---|
| WhatsApp Green | `#25D366` | WhatsApp CTA button |
| Success | `#22C55E` | Positive indicators |
| Error | `#EF4444` | Form validation errors |

---

## Typography

### Font Family
**Primary**: `Inter` (Google Fonts) — clean, modern, excellent legibility across weights  
**Display**: `Inter` at tight letter-spacing for headlines

### Type Scale
| Token | Size | Weight | Line-Height | Letter-Spacing | Usage |
|---|---|---|---|---|---|
| Display | 64–80px | 800 | 1.0 | -0.03em | Hero headline |
| H1 | 48–56px | 700 | 1.1 | -0.02em | Section headings |
| H2 | 32–40px | 600 | 1.2 | -0.01em | Sub-section headings |
| H3 | 24–28px | 600 | 1.3 | 0 | Card titles, feature names |
| Body | 16–18px | 400 | 1.7 | 0 | Paragraphs, descriptions |
| Body-Sm | 14px | 400 | 1.6 | 0 | Secondary descriptions |
| Caption | 12–13px | 500 | 1.4 | 0.05em | Labels, uppercase tags |
| Nav | 14px | 500 | 1.0 | 0.02em | Navigation links |
| CTA | 14–16px | 600 | 1.0 | 0.02em | Button labels |

### Responsive Typography
- **Desktop** (1200px+): Display at 80px, H1 at 56px
- **Tablet** (768–1199px): Display at 56px, H1 at 42px
- **Mobile** (<768px): Display at 40px, H1 at 32px

---

## Spacing System

### Base Unit: 8px
| Token | Value | Usage |
|---|---|---|
| xs | 4px | Micro spacing, icon gaps |
| sm | 8px | Tight component padding |
| md | 16px | Default component padding |
| lg | 24px | Section internal gaps |
| xl | 32px | Between elements |
| 2xl | 48px | Sub-section spacing |
| 3xl | 64px | Section internal padding |
| 4xl | 96px | Between sections |
| 5xl | 128px | Major section breaks |

### Section Spacing
- Vertical padding per section: 80–120px desktop, 60–80px mobile
- Content max-width: 1200px (centered)
- Side padding: 24px mobile, 48px tablet, 64px desktop

---

## Component Design

### Navigation
- **Position**: Fixed top, transparent → solid on scroll
- **Height**: 72px desktop, 60px mobile
- **Background**: `rgba(10, 10, 15, 0.8)` with `backdrop-filter: blur(12px)`
- **Border-bottom**: 1px solid `rgba(30, 30, 46, 0.5)`
- **Logo**: Oxygen Gym logo, 40px height
- **Links**: Frost color, 14px, weight 500. Hover → Oxygen Blue with underline
- **CTA Button**: "JOIN NOW" — Oxygen Blue background, Obsidian text, 8px border-radius
- **Mobile**: Hamburger menu → full-screen overlay with staggered link reveals

### Buttons

**Primary CTA**
- Background: Oxygen Blue (`#00D4FF`)
- Text: Obsidian (`#0A0A0F`), weight 600
- Border-radius: 8px
- Padding: 14px 32px
- Hover: Background brightens to `#33DDFF`, subtle `box-shadow: 0 0 20px rgba(0, 212, 255, 0.3)`
- Transition: 0.25s ease-out

**Secondary CTA**
- Background: transparent
- Border: 1px solid Oxygen Blue
- Text: Oxygen Blue
- Hover: Background fills with Oxygen Blue, text becomes Obsidian
- Transition: 0.25s ease-out

**WhatsApp CTA**
- Background: WhatsApp Green (`#25D366`)
- Text: white, weight 600
- Border-radius: 8px
- Hover: Brightness 1.1, `box-shadow: 0 0 20px rgba(37, 211, 102, 0.3)`

**Ghost Button**
- Background: transparent
- Border: 1px solid Steel (`#1E1E2E`)
- Text: Frost
- Hover: Border becomes Muted, text becomes White

### Cards
- Background: Surface (`#12121A`)
- Border: 1px solid Steel (`#1E1E2E`)
- Border-radius: 12px
- Padding: 32px
- Hover: Border color shifts to Oxygen Blue at 30% opacity, subtle lift `translateY(-4px)`, shadow `0 8px 32px rgba(0, 212, 255, 0.08)`
- Transition: 0.3s ease-out

### Form Inputs
- Background: Obsidian
- Border: 1px solid Steel
- Border-radius: 8px
- Height: 48px
- Text: Frost
- Placeholder: Muted
- Focus: Border becomes Oxygen Blue, subtle glow
- Transition: 0.2s ease

---

## Layout Principles

### Grid
- 12-column grid
- Gutter: 24px desktop, 16px mobile
- Max content width: 1200px

### Z-Index Hierarchy
| Layer | Z-Index | Element |
|---|---|---|
| Background | -1 | Decorative elements |
| Content | 1 | Text, images |
| Cards | 2 | Cards, overlays |
| Navigation | 100 | Fixed nav |
| Modals | 200 | Popups, menus |
| Loader | 300 | Preloader |

### Responsive Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Single column, stacked layouts, hamburger nav |
| Tablet | 768–1023px | 2-column grids, adjusted spacing |
| Desktop | 1024–1439px | Full layouts, all effects active |
| Wide | 1440px+ | Max-width container, generous whitespace |

---

## Animation & Motion

### Philosophy
Motion serves fitness energy — sharp, explosive, and deliberate. Animations feel like a clean rep: fast, controlled, powerful.

### Global Timing
| Context | Duration | Easing |
|---|---|---|
| Micro-interactions | 0.2s | `ease-out` |
| Card hover | 0.3s | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Section entrance | 0.6–0.8s | `power3.out` |
| Stagger children | 0.1s delay | `power3.out` |
| Page transition | 0.5s | `power2.inOut` |

### Preloader
**Sequence** (plays once on load):
1. Dark overlay covers full viewport (Obsidian)
2. Oxygen Gym logo scales in from 0.8 → 1.0 with opacity 0 → 1 (0.4s, power2.out)
3. Progress bar fills left-to-right with Oxygen Blue gradient
4. Overlay fades out, revealing hero section
5. Total: ~2 seconds

### Scroll-Triggered Section Entrances
- **Default**: `y: 40 → 0`, `opacity: 0 → 1`, duration 0.6s, `power3.out`
- **Cards**: Staggered 0.1s per item
- **Headlines**: `y: 30 → 0`, `opacity: 0 → 1`, duration 0.7s
- **Images**: `scale: 1.05 → 1`, `opacity: 0 → 1`, duration 0.8s

### Hero Text Reveal
- Headline: Split by characters or words
- Each word: `y: 60 → 0`, `opacity: 0 → 1`, stagger 0.08s
- Subtitle: `y: 30 → 0`, `opacity: 0 → 1`, delay 0.3s
- CTAs: `y: 20 → 0`, `opacity: 0 → 1`, delay 0.5s
- Duration: 0.8s per element, `power3.out`

### Button Hover
- Background color transition: 0.25s
- Transform: `translateY(-2px)` on hover
- Box-shadow glow appears: 0.3s

### Card Hover
- `translateY(-4px)`: 0.3s
- Border color shift: 0.3s
- Subtle shadow: 0.3s

### Mobile Menu
- Overlay slides in from right: `x: 100% → 0`, 0.4s, `power3.out`
- Links stagger in: `x: 40 → 0`, `opacity: 0 → 1`, 0.1s stagger
- Close: reverse, 0.3s

### Scroll Progress Indicator
- Thin bar (3px) at top of viewport
- Fills left-to-right with Oxygen Blue gradient
- Updates on scroll, smooth

### Decorative Motion
- Subtle gradient shifts in dark backgrounds (CSS animation, 20s loop)
- Particle/dust motes in hero background (very subtle, 30 particles max)

---

## Shared Components

### Section Header Pattern
Used across all content sections:
- **Eyebrow**: Caption style, Oxygen Blue, uppercase, letter-spacing 0.1em
- **Heading**: H1 or H2, Pure White
- **Description**: Body style, Muted color, max-width 600px
- **Alignment**: Center (default), Left (alternate sections)
- **Animation**: Eyebrow → Heading → Description, staggered 0.12s

### CTA Group Pattern
- Primary + Secondary buttons side by side
- 16px gap between buttons
- On mobile: stack vertically, full-width
- WhatsApp button may be added as third option with green styling

### Footer
- **Background**: Obsidian with subtle top border (Steel)
- **Layout**: 4-column grid (Logo+about, Quick Links, Services, Contact)
- **Logo**: Oxygen Gym logo, 48px height
- **Link columns**: Frost text, Muted hover → Oxygen Blue
- **Social icons**: Instagram, WhatsApp — Muted, hover Oxygen Blue, 24px
- **Bottom bar**: Copyright, Muted, separated by top border
- **Animation**: Fade in on scroll

---

## Page Structure (Single Page)

### Section Flow
1. **Navigation** (fixed)
2. **Hero** — Full viewport, bold headline, gym imagery
3. **About** — Oxygen Gym story, stats, differentiators
4. **Services** — Training programs, classes, 24/7 access
5. **Pricing** — Membership plans, clear pricing tiers
6. **Contact** — Location map, contact form, WhatsApp CTA
7. **Footer**

### Scroll Behavior
- Smooth scroll via Lenis or native CSS `scroll-behavior: smooth`
- Navigation links scroll to section anchors
- Scroll progress indicator at top
