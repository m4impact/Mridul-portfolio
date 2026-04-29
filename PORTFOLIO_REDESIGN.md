# CINEMATIC PRODUCT PORTFOLIO — DESIGN BLUEPRINT

## ARCHITECTURE OVERVIEW

### Page Structure (Scroll-Driven, No Traditional Navigation)
```
HERO SECTION (Sticky)
├─ Background: Cinematic video/image carousel
├─ Foreground: Minimal title + CTA
└─ Trigger: Scroll down reveals next section

LIFE PHASE 1: "FOUNDATION" (Sticky Parallax)
├─ Hero Image (Fixed background)
├─ Content reveals: Title → Narrative → Features → Outcome
└─ Horizontal scroll cards for key moments

LIFE PHASE 2: "EXECUTION" (Sticky Parallax)
├─ Hero Image (Different visual)
├─ Content reveals: Title → Narrative → Features → Outcome
└─ Horizontal scroll cards

LIFE PHASE 3: "STRATEGY" (Sticky Parallax)
├─ Hero Image
├─ Content reveals
└─ Horizontal scroll cards

PROJECTS SECTION (Horizontal Carousel, Vertical Trigger)
├─ Each project: Hero → Title → Tagline → Narrative → Features → Impact
├─ Images fade/slide as user scrolls
└─ Smooth horizontal motion inside vertical scroll

COMMUNITY SECTION (Cinematic Product Line)
├─ Hero: "Impact Made" (full-width background)
├─ Initiative 1: Image + Story + Impact
├─ Initiative 2: Image + Story + Impact
├─ Initiative 3: Image + Story + Impact
└─ All with staggered reveals and parallax

CONTACT (Landing Pad)
├─ Minimal, conversational CTA
└─ Clear next step

---

## ANIMATION LOGIC

### 1. STICKY SECTION SYSTEM
When user scrolls into a section:
- Background image pins to viewport
- Content container enters from bottom (translateY)
- Each content element stagger-reveals (0.2s intervals)
- As user scrolls within section, background opacity changes
- Scrolling out triggers exit animation

### 2. HORIZONTAL MOTION (Inside Vertical Scroll)
```
Example: Project cards
- Card 1: Enters from right (x: 100vw → 0)
- Card 2: Waits, then enters when card 1 is 50% visible
- Card 3: Waits for card 2
- As user scrolls down: Cards translate left (x decreases)
- When Card 1 exits viewport, it continues off-screen (x: -100vw)
```

Scroll Y position → Horizontal X position mapping
```
scrollY = 0 → x = 100vw (off-screen right)
scrollY = 500px → x = 0 (center)
scrollY = 1000px → x = -100vw (off-screen left)
```

### 3. LAYERED REVEAL SYSTEM
```
Trigger: Element enters viewport
Animation sequence:
1. t=0ms: Background image visible (opacity: 1)
2. t=200ms: Primary title fades in (opacity: 0→1)
3. t=400ms: Tagline slides up (y: 30px→0, opacity: 0→1)
4. t=600ms: Body text appears (opacity: 0→1)
5. t=800ms: Feature cards stagger in (1 per 100ms)
```

### 4. PARALLAX ON SCROLL
```
Background image: moves at 30% of scroll speed (slow)
Foreground text: moves at 100% of scroll speed (normal)
Creates depth illusion

Or inverse:
Background: 100%
Foreground: 70%
(Text moves slower, background rushes behind)
```

### 5. SMOOTH SCROLL MOMENTUM
Use Lenis.js for smooth, inertial scrolling
- No jarring jumps
- Feels premium (like a car commercial)
- Works with all animations

---

## SECTION BREAKDOWN

### HERO (0-100vh)
**Visual**: Carousel of community images
**Content**:
- Title: "MRIDUL PATHAK" (appears at 20% scroll)
- Subtitle: "A life engineered for impact" (appears at 40% scroll)
- Scroll CTA: "Explore the generations" (appears at 60% scroll)
**Animation**:
- Background: Cycles every 4 seconds
- Toggle dots on right (like existing design, but hidden until hover)
- Opacity shift as user scrolls

---

### PHASE 1: FOUNDATION (100-300vh)
**Hero Visual**: Image of you at beginning (or symbolic image)
**Sticky**: Yes, pins from 100vh to 200vh
**Timeline**: 
- 100vh: Background image appears, title reveals
- 120vh: Narrative text reveals
- 150vh: Feature cards start sliding in (horizontal motion)
- 200vh: Exit animation, next section approaches

**Content Structure**:
```
Title: "FOUNDATION"
Tagline: "Where structure replaced uncertainty"

Narrative: "Paragraph about Delhi → Rudrapur → core values"

Features (Horizontal cards, reveal staggered):
- Card 1: "Economics Vocabulary" | Delhi foundation
- Card 2: "Business Reality" | Rudrapur awakening
- Card 3: "Framework Gaps" | The realization

Outcome: "By 2024, had clarified core values and purpose"
```

---

### PHASE 2: EXECUTION (300-500vh)
**Hero Visual**: Image from UPES era (basketball, community)
**Sticky**: Yes
**Timeline**:
- 300vh: Background pins, title reveals
- 330vh: Narrative reveals
- 370vh: Feature cards slide in horizontally
- 500vh: Exit

**Content**:
```
Title: "EXECUTION"
Tagline: "Where theory met the court"

Narrative: "Paragraph about UPES, basketball, BUZZ, Business Formulation"

Features (Horizontal cards):
- Card 1: "UPES School of Business"
- Card 2: "Trident Titans Basketball Captain"
- Card 3: "BUZZ Communication Society"
- Card 4: "Marketing Case Studies"

Outcome: "Proof that execution compounds learnings"
```

---

### PHASE 3: STRATEGY (500-700vh)
**Hero Visual**: Current headshot or RMF/VCU image
**Sticky**: Yes

**Content**:
```
Title: "STRATEGY"
Tagline: "Where impact became the product"

Narrative: "Paragraph about MBA choice, RMF, current direction, TMF"

Features (Horizontal cards):
- Card 1: "Decision Analytics Expertise"
- Card 2: "Market Strategy Focus"
- Card 3: "Leadership Positioning"
- Card 4: "Future at TMF"

Outcome: "Strategy shifts from self-discovery to systemic impact"
```

---

### PROJECTS SECTION (700-900vh)
**Transition**: Smooth scroll, no sticky
**Content**: 
Each project scrolls through horizontally as user scrolls vertically

**Project Format**:
```
[HERO IMAGE FIXED IN BG]

PROJECT NAME
Project Tagline

The Problem: "What needed solving"
The Approach: "How it was tackled"
The Outcome: "What changed"

[IMAGE 2 - slides left as scroll continues]
[IMAGE 3 - continues motion]

Key Results:
- Metric 1
- Metric 2
- Metric 3
```

---

### COMMUNITY SECTION (900-1200vh)
**Title**: "IMPACT ENGINEERED"
**Tagline**: "Where community became the competitive advantage"

**Initiative 1: UKHF (Uttarakhand Hoops Fest)**
```
[HERO IMAGE: Tournament scene]

UTTARAKHAND HOOPS FEST
Festival Director | Founded 2024

"Brought 200+ athletes from 15 institutions"

Why: "Basketball shouldn't be gatekept by metro cities"

What was done:
- Scouted venues across Uttarakhand
- Coordinated 15+ institutions
- Managed logistics, sponsorships, competitions

The Impact:
✓ 200+ young athletes
✓ 15 institutions represented
✓ Inspired inter-college basketball movement
✓ Built regional sports ecosystem

[IMAGE 2: Team celebration]
[IMAGE 3: Medal ceremony]
```

**Initiative 2: Community Hands**
```
Similar structure for community service work
```

**Initiative 3: Leadership Development**
```
Similar structure for mentorship/sports leadership
```

---

### CONTACT (1200vh+)
```
"Let's team up"
"Your next move could be the next chapter"

[Simple form]
or
[Calendar link]
```

---

## TECHNICAL IMPLEMENTATION

### Libraries Required
```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "lenis": "^1.0.0"
  }
}
```

### Key Components to Build

1. **ScrollContext.js**
   - Tracks scroll position globally
   - Calculates parallax/progress values
   - Triggers animations based on viewport

2. **StickySection.js**
   - Manages sticky positioning
   - Coordinates parallax with content reveal
   - Handles entrance/exit animations

3. **HorizontalScroll.js**
   - Maps vertical scroll → horizontal position
   - Manages card/content positioning
   - Stagger animations for multiple items

4. **LayerReveal.js**
   - Sequences element animations
   - Opacity, translate, scale animations
   - Timing control (0.2s stagger)

5. **SmoothScroll.js**
   - Initializes Lenis
   - Prevents page jank
   - Integrates with GSAP/Framer Motion

---

## ANIMATION TRIGGERS

### Using Scroll Progress (0 → 1)

**Section enters (progress 0-0.2)**:
```
Background image: opacity 0 → 1
Title: translateY(30px) + opacity 0 → 1
```

**Section active (progress 0.2-0.8)**:
```
Content cards: stagger horizontal slide
Parallax: background y position = progress * 100px
```

**Section exits (progress 0.8-1)**:
```
Title: opacity 1 → 0
Next section begins reveal
```

---

## RESPONSIVE CONSIDERATIONS

- Sticky sections work better on desktop
- Mobile: Consider full-screen vertical sections instead
- Horizontal cards: Stack vertically on mobile
- Touch scrolling: Lenis handles this well
- Animation scale: Reduce parallax intensity on mobile

---

## PERFORMANCE TIPS

1. Use CSS transforms (translate, scale) → GPU accelerated
2. Avoid animating width/height → use transform: scaleX/Y
3. Debounce scroll listeners
4. Lazy load images (intersection observer)
5. Use `will-change` CSS selectively
6. Consider `requestAnimationFrame` for custom scroll logic

---

## MOOD & VISUAL DIRECTION

- **Color Palette**: Mostly dark/light contrast (like your current designs)
- **Typography**: Bold product names, minimal body text
- **Imagery**: High-quality, cinematic, editorial feel
- **Spacing**: Generous margins, lots of white space
- **Transitions**: Smooth, 0.5-1s durations, easing: cubicBezier(0.33, 0, 0.66, 1)
- **Micro-interactions**: Subtle hover effects, scroll feedback

---

## NEXT STEPS

1. Build ScrollContext to track position
2. Implement StickySection component
3. Add Lenis for smooth scroll
4. Create first sticky section (Phase 1) as prototype
5. Test horizontal scroll mapping
6. Replicate for other sections
7. Add community section with multiple initiatives
8. Polish animations and timing
9. Mobile optimization
10. Performance audits

This is an ambitious redesign that will set you apart from traditional portfolios.
