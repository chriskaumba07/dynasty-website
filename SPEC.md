# Dynasty — Personal Archive Website

## Concept & Vision

Dynasty is a sophisticated personal portfolio that feels like a living memoir rather than a typical resume. It communicates intentionality, growth, and artistic sensibility through restrained elegance and thoughtful details. The experience should feel like opening a beautifully bound journal — warm, personal, and quietly impressive.

## Design Language

### Aesthetic Direction
Refined editorial with vintage undertones — think a luxury magazine crossed with a personal sketchbook. The design draws from classic typography, wax seals, and the warmth of analog documentation.

### Color Palette
- **Background**: `#0c0c0c` (near-black)
- **Surface**: `#151515` (elevated dark)
- **Primary Text**: `#f5f5f0` (warm white)
- **Muted Text**: `#888888` (secondary content)
- **Gold Accent**: `#c9a227` (wealth/project category)
- **Rose Accent**: `#c9596b` (art/project category)
- **Green Accent**: `#4a9c6d` (becoming/project category)
- **Blue Accent**: `#4a7ac9` (secondary art)
- **Clay Accent**: `#c97a4a` (warmth)
- **Plum Accent**: `#8b4ac9` (creativity)

### Typography
- **Display Font**: Italiana (Google Fonts) — elegant serif for headings
- **Body Font**: Manrope (Google Fonts) — clean geometric sans for readability
- **Fallbacks**: Georgia, system-ui

### Spatial System
- Base unit: 8px
- Section padding: 120px vertical on desktop, 80px on mobile
- Max content width: 1200px
- Grid gaps: 24px standard, 48px between major elements

### Motion Philosophy
- **Reveal animations**: Fade up with 600ms duration, staggered 150ms between elements
- **Hover states**: Subtle scale (1.02) and color transitions, 200ms ease-out
- **Scroll behavior**: Smooth scrolling with intersection observer reveals
- **Purpose**: Motion should feel organic, like pages settling — never jarring or playful

### Visual Assets
- Lucide icons for consistent line-weight iconography
- Decorative seal element for the manifesto section
- Roman numerals for the orbital element
- Minimal photography — the design itself is the visual

## Layout & Structure

### Page Flow
1. **Header** — Fixed, minimal. Wordmark left, nav center, status indicator right
2. **Hero** — Full viewport height. Massive typography with orbital element, tagline, and scroll prompt
3. **Manifesto** — Two-column asymmetric. Large drop cap, quote aside with decorative seal
4. **Projects** — Dense but scannable. Filter row, then vertical project rows with accent colors
5. **Archive** — Visual break. Masonry-style memory grid with quotes
6. **Now** — Moment in time. Simple list format showing current activities
7. **Footer** — Minimal. Wordmark echo, copyright, back-to-top

### Responsive Strategy
- Desktop: Full expression with generous spacing
- Tablet: Reduced spacing, stacked manifesto columns
- Mobile: Single column, smaller type scale, hamburger nav transforms to horizontal scroll

## Features & Interactions

### Navigation
- Smooth scroll to sections on click
- Active state indication based on scroll position (optional enhancement)
- "Now" indicator shows current month/year with pulsing dot

### Project Filtering
- Filter buttons: All, Wealth, Art, Becoming
- Click to filter with fade transition on hidden items
- Active filter has background highlight

### Scroll Reveals
- Elements fade in and slide up as they enter viewport
- Staggered timing for grouped elements

### Archive Grid
- Video memory has play button overlay (non-functional in this version)
- Hover reveals location/time context

## Component Inventory

### Header
- Wordmark: Italiana font, "DY" in accent color
- Nav links: Manrope 500, hover underline animation
- Status indicator: Pulsing green dot + date text

### Hero Section
- Title: 8rem+ display text split into two reveal spans
- Orbital badge: Rotated, contains establishment year
- Tagline: Icon + muted text
- CTA: Circular link with arrow icon

### Manifesto Block
- Drop cap: 4rem, accent colored
- Aside: Italic quote with decorative SVG seal
- Eyebrow: Small caps label

### Project Row
- Number: Muted, left-aligned
- Icon container: Rounded square with category accent color
- Content: Category tag, title, description
- Meta: Status text + external link icon
- States: Default, hover (slight lift)

### Memory Card
- Background: Gradient overlays on dark
- Label: Bottom-left positioned text
- Video variant: Centered play button

### Now Section
- Simple definition list style
- Label in accent color, content in primary

### Footer
- Large wordmark (muted)
- Meta text in small caps
- Back to top link

## Technical Approach

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: CSS transitions + Intersection Observer for reveals
- **Icons**: Lucide React
- **Fonts**: Google Fonts loaded via link tags
- **Build**: Vite
- **Deployment target**: Static hosting (Netlify, Vercel, GitHub Pages)
