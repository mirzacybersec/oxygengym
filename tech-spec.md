# Oxygen Gym Karachi — Technical Specification

## Dependencies

### Core
| Package | Version | Purpose |
|---|---|---|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| typescript | ^5.6.0 | Type safety |
| vite | ^6.0.0 | Build tool |
| tailwindcss | ^3.4.0 | Utility CSS |
| @tailwindcss/typography | ^0.5.0 | Typography plugin |

### Animation
| Package | Version | Purpose |
|---|---|---|
| gsap | ^3.12.0 | Core animation engine, timelines, ScrollTrigger |
| lenis | ^1.1.0 | Smooth scroll with inertia |

### UI Components
| Package | Version | Purpose |
|---|---|---|
| @radix-ui/react-dialog | ^1.1.0 | Mobile menu overlay |
| @radix-ui/react-slot | ^1.1.0 | Polymorphic components |
| class-variance-authority | ^0.7.0 | Component variant management |
| clsx | ^2.1.0 | Conditional class merging |
| tailwind-merge | ^2.6.0 | Tailwind class deduplication |
| lucide-react | ^0.460.0 | Icon library (dumbbell, barbell, heart, activity, etc.) |

### Dev
| Package | Version | Purpose |
|---|---|---|
| @types/react | ^18.3.0 | React type definitions |
| @types/react-dom | ^18.3.0 | ReactDOM type definitions |
| @vitejs/plugin-react | ^4.3.0 | Vite React plugin |
| autoprefixer | ^10.4.0 | CSS vendor prefixes |
| postcss | ^8.4.0 | CSS processing |

---

## Component Inventory

### shadcn/ui Components (Built-in)
| Component | Source | Usage | Customization |
|---|---|---|---|
| Button | `npx shadcn add button` | CTAs, form submit | Custom variants: primary (Oxygen Blue), secondary (outline), whatsapp (green) |
| Card | `npx shadcn add card` | Service cards, pricing cards | Dark theme styling, hover glow |
| Input | `npx shadcn add input` | Contact form | Dark background, Oxygen Blue focus ring |
| Textarea | `npx shadcn add textarea` | Contact form message | Same as Input |

### Custom Components

#### Layout
| Component | Props | Description |
|---|---|---|
| `Navbar` | — | Fixed nav with scroll-aware background, mobile hamburger |
| `Footer` | — | 4-column footer with links, social icons |
| `MobileMenu` | `isOpen, onClose` | Full-screen overlay menu with staggered link animations |
| `ScrollProgress` | — | 3px bar at top, fills with Oxygen Blue on scroll |
| `Preloader` | `onComplete` | Logo + progress bar, fades out to reveal hero |

#### Sections
| Component | Props | Description |
|---|---|---|
| `HeroSection` | — | Full-viewport hero with text reveal, background image, CTA group |
| `AboutSection` | — | Story text + animated stat counters + differentiator grid |
| `ServicesSection` | — | 4 service cards in 2x2 grid |
| `PricingSection` | — | 3 pricing tiers with feature lists |
| `ContactSection` | — | Contact info cards + form + map embed |

#### Reusable
| Component | Props | Description |
|---|---|---|
| `SectionHeader` | `eyebrow, heading, subtitle, align?` | Consistent section header pattern |
| `CTAGroup` | `primary?, secondary?, whatsapp?` | Button group with responsive stacking |
| `ServiceCard` | `icon, title, description` | Hover-animated service card |
| `PricingCard` | `tier, price, period, features, badge?, highlighted?` | Pricing tier card with popular highlight |
| `StatCounter` | `value, label, suffix?` | Animated number counter |
| `FeatureItem` | `text` | Checkmark + text for pricing features |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|---|---|---|---|---|---|
| Preloader sequence | GSAP Timeline | 4-step timeline: overlay → logo scale → progress fill → fade out | 🔒 High |
| Hero text reveal | GSAP + SplitText* | Split headline into words, stagger `y/opacity` reveal | 🔒 High |
| Scroll section entrances | GSAP ScrollTrigger | Batch trigger: `y: 40→0, opacity: 0→1` per section | Medium |
| Card stagger | GSAP ScrollTrigger | Stagger children 0.1s within ScrollTrigger batch | Medium |
| Stat counter | GSAP | `gsap.to` on proxy object, update React state in onUpdate | Medium |
| Scroll progress | GSAP ScrollTrigger | `scrub: true` tied to scroll position, scaleX transform | Low |
| Navbar background | GSAP ScrollTrigger | Toggle class at 50px scroll threshold | Low |
| Mobile menu overlay | GSAP Timeline | `x: 100%→0` for panel, stagger links | Medium |
| Button hover | CSS Transitions | `transition-all 0.25s`, glow via box-shadow | Low |
| Card hover | CSS Transitions | `translateY`, border-color, box-shadow | Low |
| Smooth scroll | Lenis | Initialize at app root, integrate with GSAP ScrollTrigger | Low |

*If SplitText not available (GSAP Club), implement manual word splitting with `<span>` wrappers.

---

## State & Logic Plan

### Global State (React Context)
```typescript
interface AppState {
  isLoaded: boolean;        // Preloader complete
  isMobileMenuOpen: boolean;
}
```

### Preloader Flow
1. `App` mounts → `Preloader` renders with `isLoaded=false`
2. Preloader GSAP timeline plays (~2s)
3. On timeline complete → `setIsLoaded(true)`
4. Preloader unmounts (or keeps in DOM with `display: none`)
5. `Lenis` initializes after preloader completes

### Scroll → Navigation
- Lenis smooth scroll handles anchor navigation
- GSAP ScrollTrigger at 50px: toggles `scrolled` class on Navbar
- Navbar switches: transparent → `backdrop-blur` + solid background

### Mobile Menu
- `useState` for `isMobileMenuOpen`
- GSAP timeline controls open/close animation
- Body scroll locked when open (`overflow: hidden`)

---

## Other Key Decisions

### Smooth Scroll Integration
- Lenis instance stored in React ref
- Connected to GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- GSAP ticker drives Lenis: `gsap.ticker.add((time) => lenis.raf(time * 1000))`
- `gsap.ticker.lagSmoothing(0)` to prevent lag

### Responsive Strategy
- Mobile-first Tailwind breakpoints
- Hero: stack vertically on mobile
- Service cards: 1 column mobile, 2 columns tablet+
- Pricing cards: 1 column mobile, 3 columns desktop
- Footer: 1 column mobile, 2 columns tablet, 4 columns desktop

### Form Handling
- Contact form: client-side validation only (no backend)
- On submit: show success toast (no actual submission)
- WhatsApp/Call buttons use `href` with protocol (`tel:`, `https://wa.me/`)
