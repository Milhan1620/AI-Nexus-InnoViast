# AI-Nexus

A responsive marketing site for **AI-Nexus** — a fictional AI product studio shipping AI tools and automation products, built for the *Frontend Experience Engineering* track.

**Author:** Milhan Musharaf

**Live structure:** Header → Hero (signature spinning brand mark) → "Now building" marquee → Products → About → Webinars → Contact form → Footer.

## Tech

- Semantic HTML5
- Custom CSS design system (`styles.css`) — color/type tokens, responsive grid, signature animation
- Tailwind CSS (CDN) used for layout utility helpers alongside the custom system
- Vanilla JavaScript (`script.js`) — mobile nav toggle, contact form validation
- Google Fonts: Fraunces (display), Space Mono (eyebrows/labels), Inter (body)

## Project structure

```
ai-nexus/
├── index.html      # all page markup
├── styles.css       # design tokens + component styles
├── script.js        # mobile nav + form validation
└── README.md
```

## Design system

| Token | Value | Use |
|---|---|---|
| `--ink` | `#14131a` | Page background |
| `--paper` | `#ece6d9` | Light "About" section background |
| `--amber` | `#e8a33d` | Primary CTA / accent |
| `--teal` | `#3e6259` | Secondary accent |
| `--rust` | `#c44536` | Tag accent / paper-section accent |

Type scale is set with `clamp()` so headings shrink smoothly between mobile and desktop instead of jumping at breakpoints. Spacing follows an 8px rhythm (`--space-1` … `--space-7`).

## Running locally

No build step required — it's static HTML/CSS/JS.

```bash
# from inside the ai-nexus/ folder
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Responsive behavior

- **Desktop (≥900px):** full nav bar, two-column hero, three-column product grid, two-column about/contact sections.
- **Tablet (700–899px):** nav collapses to the hamburger menu; product grid stays 3-up at ≥700px, single column hero.
- **Mobile (<700px):** everything stacks to a single column; the webinar rows and product grid drop to one column; no fixed widths anywhere, so there's no horizontal scroll at any size.

Tested breakpoints: 360px, 390px, 768px, 1024px, 1440px.

## Contact form

The form validates name, email format, and message client-side and shows an inline status message (`script.js`). It currently simulates a successful submission — **before going live**, wire the `submit` handler to a real backend such as:

- [Formspree](https://formspree.io)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) (just add `data-netlify="true"` to the `<form>` if deploying to Netlify)
- A custom API endpoint via `fetch()`

## Deployment

### Vercel
1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other** (static site) — no build command needed.
4. Deploy.

### Netlify
1. Push this folder to a GitHub repo.
2. [Add a new site from Git](https://app.netlify.com/start) in Netlify.
3. Build command: *(none)*, Publish directory: `/`.
4. Deploy. If using Netlify Forms, add `data-netlify="true"` to the `<form id="contactForm">` tag.

## Suggested next steps

- Sketch/refine the wireframe in Figma before further visual changes.
- Swap the placeholder product art blocks for real product screenshots.
- Record a short screen capture walking through desktop → tablet → mobile as a preview video.
- Connect the contact form to a live backend.

## Quality checklist

- [x] No horizontal scroll at any screen size
- [x] Readable type scale with consistent 8px spacing rhythm
- [x] Clear CTA hierarchy (filled amber primary vs. outlined ghost secondary)
- [x] Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Reusable CSS component classes (`.btn`, `.eyebrow`, `.release-card`, `.field`, etc.)
