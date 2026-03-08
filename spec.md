# Sidhant Jha — Personal Portfolio

## Current State
New project. No existing implementation.

## Requested Changes (Diff)

### Add
- Full single-page portfolio website for software engineer Sidhant Jha
- 11 sections: Hero, About, Experience, Projects, Engineering Thinking, Skills, Education, Leadership, Curiosity, Contact, Footer
- Dark-mode-only design with electric blue accent, black/charcoal palette, Inter typography
- Framer Motion animations: entrance fade-ins, scroll-triggered reveals, hover micro-interactions
- Animated gradient + particle background in Hero
- Vertical timeline Experience component with scroll-triggered card animations
- Project cards grid with hover glow and elevation effects
- Skills grid with pill cards grouped by category
- Contact section with form and social links
- Minimal footer with copyright and social icons

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan

### Backend
- Minimal Motoko backend: store contact form submissions (name, email, message) with a `submitContact` update call and `getContacts` query

### Frontend Components
1. `App.tsx` — single-page shell, sticky nav, section routing
2. `components/Nav.tsx` — sticky top nav with section links and smooth scroll
3. `components/Hero.tsx` — full-screen, animated gradient bg, particle canvas, entrance animations, CTA buttons, social icons
4. `components/About.tsx` — two-column storytelling block, philosophy quote
5. `components/Experience.tsx` — vertical timeline, two experience entries, scroll-triggered cards
6. `components/Projects.tsx` — 3-card grid, hover glow, tech chips, GitHub/demo buttons
7. `components/EngineeringThinking.tsx` — 4 elegant cards with icon + title + description
8. `components/Skills.tsx` — categorized pill grid
9. `components/Education.tsx` — card with CGPA and coursework chips
10. `components/Leadership.tsx` — achievement cards for Toastmasters
11. `components/Curiosity.tsx` — text block + 3 idea cards
12. `components/Contact.tsx` — form wired to backend + social links
13. `components/Footer.tsx` — minimal copyright + social icons

### Design Tokens
- Background: `#0a0a0a` (near-black), `#111111` / `#1a1a1a` (charcoal cards)
- Accent: `#3b82f6` / `#60a5fa` (electric blue)
- Text: `#ffffff`, `#a1a1aa` (muted), `#71717a` (subtle)
- Font: Inter (Google Fonts)
- Border-radius: 12–16px cards, pill radius for chips
- Spacing: section padding `py-24 md:py-32`, generous gutters
