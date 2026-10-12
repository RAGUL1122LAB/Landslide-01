# SlopeGuard — AI-Powered Landslide Risk Monitoring & Early Warning System

SlopeGuard is an intelligent landslide hazard monitoring and early warning system designed to protect vulnerable communities and assist disaster management authorities in mountainous regions such as the Western Ghats of India.

---

## 🎨 Master Design System — Cinematic Dark-Green Glassmorphism

This project follows a premium, cinematic **dark-green glassmorphism design language** inspired by environmental intelligence and modern SaaS design standards:

| Purpose | Color / Value | Role |
| :--- | :--- | :--- |
| **Primary lime** | `#C7F464` | Solid primary buttons, calls to action, active indicators, brand accents |
| **Light lime** | `#D9FF8F` | Highlights, badge indicators, secondary logo facet |
| **Hover lime** | `#B7E84A` | Primary button interactive hover state (solid) |
| **Active lime** | `#A6D93D` | Primary button pressed/active state (solid) |
| **Primary button text** | `#101509` | High-contrast dark text and arrows on lime buttons |
| **Main background** | `#070B08` | Deep near-black forest canvas |
| **Secondary background** | `#0B120D` | Alternating section depth (`#about`, `#features`) |
| **Elevated background** | `#111A13` | Elevated inner containers & cards |
| **Primary body text** | `#F5F7F2` | High-contrast headlines and labels |
| **Secondary text** | `#BFC6B6` | Subtitles, descriptions, muted copy |
| **Muted text** | `#879280` | Captions, technical metadata, disabled states |
| **Glass card surface** | `rgba(20, 25, 17, 0.72)` | Translucent frosted-glass panels (`blur: 18px`) |
| **Subtle glass border** | `rgba(215, 245, 160, 0.16)`| Subtle, translucent card & navbar borders |
| **Highlight border** | `rgba(199, 244, 100, 0.32)`| Hover focus borders & active states |
| **Low risk** | `#8FD694` | Green safe zones & base thresholds |
| **Moderate risk** | `#E8D17A` | Amber moderate hazard warnings |
| **High risk** | `#F1A46B` | Orange elevated hazard zones |
| **Severe risk** | `#F07878` | Coral/Red critical landslide hotspot alerts |

### Global Sharp-Corner Shape System
SlopeGuard uses a clean, squared-off rectangular geometry system with subtle 3–6px radius values, replacing pill-shaped or exaggerated rounded corners across all components:

| Token | Value | Applied To |
| :--- | :--- | :--- |
| `--radius-button` | `4px` | Primary, secondary, hero, login, and filter buttons |
| `--radius-input` | `4px` | Form text inputs, search fields, checkboxes |
| `--radius-card` | `6px` | Feature cards, factor cards, visual study cards |
| `--radius-panel` | `6px` | Map stage wrappers, telemetry HUD, legend cards, CTA panels |
| `--radius-modal` | `6px` | Authentication cards, dialogs, popovers |
| `--radius-badge` | `3px` | Section badges, announcement tags, status pills, chart labels |
| `--radius-navbar` | `6px` | Sleek rectangular glass navigation bar |
| `--radius-icon-box` | `4px` | Icon containers, visual badge squares, target nodes |

### Solid Lime Rectangular Button Standard
- **Sharp Rectangular Geometry**: All primary action buttons (`.btn-primary`, `.btn-hero-primary`, `.nav-cta-btn`, `.btn-sign-in`, form submits) use `border-radius: 4px` with a clean, solid `#C7F464` background and `#101509` text.
- **Zero Gradients & Neon Glows**: No gradient overlays or neon `box-shadow` / glowing halos. Buttons retain subtle neutral shadows (`0 2px 8px rgba(0, 0, 0, 0.28)`) strictly for clean visual elevation.
- **Consistent States**:
  - *Default*: Solid `#C7F464`, text `#101509`, `border-radius: 4px`
  - *Hover*: Solid `#B7E84A`, text `#101509`, subtle neutral lift
  - *Active*: Solid `#A6D93D`, text `#101509`
  - *Focus*: Accessible `2px solid #C7F464` focus ring with `3px` offset, `border-radius: 4px`
  - *Disabled*: Muted solid `#303929` with `#727E6A` text
- **Secondary/Outline Buttons**: Secondary (`.btn-hero-secondary`, `.btn-secondary`), outline, and filter controls are rectangular (`border-radius: 4px`) with transparent/glass backgrounds to preserve clear visual hierarchy.

### Visual Design Rules
- **Cinematic Photography**: Full-bleed misty dark forest and mossy mountain imagery (`dark-forest-moss.jpg`) with deep atmospheric radial vignettes.
- **Rectangular Glass Navigation**: Sleek translucent glass navbar with 6px sharp radius, subtle border, and lime active-state accent.
- **Editorial Typography**: Modern sans-serif (`Plus Jakarta Sans`) paired with editorial italic serif (`Newsreader`) for hero emphasis (*Anticipate*).
- **Square-Cornered Feature Cards**: Specialized illustrative graphics representing Unified Data (converging nodes), AI Risk Assessment (wave contours), and Environmental Governance (radar target rings) enclosed in 6px glass cards.
- **Interactive Risk Map**: Dark Matter CartoDB Leaflet tiles with concentric hazard buffers, custom epicenter marker, floating telemetry HUD, and rectangular sector filter buttons.

---

## 📂 Project Structure

```
SlopeGuard/
├── index.html                 # Application entry router (authenticates and directs to dashboard/login)
├── login.html                 # Authentication & Sign In screen
├── dashboard.html             # Authenticated Landslide Risk Monitoring Dashboard
├── map.html                   # Interactive GIS Risk Map
├── notifications.html         # Alerts & Warnings Bulletin
├── css/
│   ├── style.css              # Master dark-green glassmorphism design system
│   ├── tokens.css             # Color, typography, and shape tokens
│   ├── components.css         # Reusable UI component styles
│   └── leaflet.css            # Leaflet 1.9.4 styles (offline-bundled)
├── js/
│   ├── core/                  # Auth, routing guards, storage, and API services
│   ├── services/              # Regions, notifications, sync, and push services
│   └── components/            # UI widgets, map markers, and risk map engine
├── assets/
│   └── images/
│       └── dark-forest-moss.jpg # Atmospheric backdrop for login screens
└── README.md                  # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Access
Open `index.html` directly in any modern web browser.

### Option 2: Local HTTP Server
```bash
npx serve .
```
or
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your web browser.

---

## 📱 Full Mobile Responsiveness & Accessibility

- **Responsive Viewports**:
  - `320px`, `360px`, `390px` (Mobile phones): Compact floating header, slide-down frosted-glass navigation drawer, vertical card stacking, touch targets $\ge$ 44px, zero horizontal overflow.
  - `768px`, `1024px` (Tablets / Laptops): 2-column grids, responsive interactive risk map frame, floating HUD adjustments.
  - `1280px`, `1440px+` (Desktop displays): 3-column reference feature cards, full floating pill navigation.
- **Accessibility**:
  - Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
  - Mobile drawer with `aria-controls`, `aria-expanded`, keyboard Escape listener, and outside-click dismissal.
  - Visible focus indicators (`2px solid #C7F464`).
  - Respects user accessibility preferences via `@media (prefers-reduced-motion: reduce)`.
