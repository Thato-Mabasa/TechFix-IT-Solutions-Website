# TechFix IT Solutions — Website Project

## Student Information
- **Student Name:** Thato Mabasa
- **Student Number:** ST10483866
- **Module:** WEDE5020 — Web Development (Introduction)
- **Institution:** Rosebank College (The Independent Institute of Education (Pty) Ltd)
- **Submission:** Part 2 — Designing the Visuals: CSS Styling and Responsive Design

## Project Overview
TechFix IT Solutions is a small IT support business based in Johannesburg, Gauteng, offering desktop support, network setup and maintenance, and cybersecurity essentials to small and medium businesses that don't have an in-house IT department. This website was built as the practical component of the WEDE5020 Proof of Evidence (PoE), which is structured across three parts:

- **Part 1 (this submission):** Project planning, HTML structure, and basic content for an 8-page website.
- **Part 2:** CSS styling, responsive design, and visual polish.
- **Part 3:** JavaScript functionality and interactivity.

**Note on scope:** the required deliverable for this Part 1 submission is the HTML structure and content. The CSS styling and JavaScript (form validation, mobile navigation, FAQ accordion) included in this repository were completed ahead of schedule, working holistically across all three stages rather than strictly sequentially, and are included here for completeness rather than as part of the Part 1 mark allocation.

## Website Goals and Objectives
- Present TechFix IT Solutions as a credible, approachable IT support provider for small businesses.
- Clearly communicate service offerings, pricing, and social proof to build trust with prospective clients.
- Provide an accessible way for prospective clients to book a consultation or get in touch.
- Achieve a responsive, standards-compliant, and easy-to-navigate site structure.
- **Key Performance Indicators (KPIs):** booking form submissions per month, average time-on-page for the Pricing page, and bounce rate on the homepage.

## Key Features and Functionality
- Responsive 8-page website: Home, About, Services, Pricing, Booking, Testimonials, FAQ, Contact
- Consistent header navigation and footer across all pages
- Pricing page with three support tiers
- Booking form with date/time selection and service/plan dropdowns
- Testimonials page featuring client reviews
- FAQ page with an interactive accordion
- Contact page listing two physical office locations plus an embedded map and contact form
- Client-side form validation (required fields, email format check) via `js/script.js`
- Mobile navigation toggle for small screens
- Semantic HTML structure (`header`, `nav`, `main`, `footer`) throughout

## Part 2 — CSS Styling and Responsive Design
This submission builds on the Part 1 HTML foundation with a complete visual design system and responsive behaviour:

- **External stylesheet:** all 8 pages link a single `css/style.css`, following a consistent lowercase naming convention.
- **Base styles & CSS variables:** a `:root` colour/typography/spacing system (navy + teal palette, Space Grotesk/Inter/JetBrains Mono type scale) and a lightweight reset (`* { box-sizing: border-box; margin: 0; padding: 0; }`) for cross-browser consistency.
- **Typography:** `font-family`, `font-size`, `font-weight`, `line-height`, and `letter-spacing` applied via a small set of reusable classes (`.hero h1`, `.lede`, `.section-label`) rather than repeating declarations per element — taking advantage of CSS's cascading nature.
- **Layout:** Flexbox for the navigation bar, hero split (text + image), and button groups; CSS Grid (`repeat(auto-fit, minmax(...))`) for service cards, pricing cards, team members, and the footer.
- **Visual styling:** `color`, `background-color`, `border`, `box-shadow`, and interactive `:hover`, `:focus`, and `:active` pseudo-classes across buttons, nav links, and form fields.
- **Responsive images:** `srcset`/`sizes` on the homepage hero image and team photos (resolution switching), and a `<picture>` element with art-directed crops on the Services page banner (square crop on mobile, wide crop on desktop).
- **Responsive design — three documented breakpoints:**
  - Desktop (>1024px): default multi-column layout, side-by-side hero.
  - Tablet (601px–1024px): tighter container padding, reduced hero image size.
  - Mobile (≤720px / ≤600px): hamburger navigation, hero image drops below text, single-column stacking, buttons full-width.
- **Testing:** verified in Chrome DevTools device toolbar at common device widths (375px, 768px, 1024px, 1440px).

## Timeline and Milestones
| Milestone | Date |
|---|---|
| Website Project Proposal (2 concepts) drafted | 31 July 2026 |
| Content research and sourcing completed | 6 August 2026 |
| Sitemap and file/folder structure finalised | 10 August 2026 |
| Initial HTML structure for all 8 pages | 12 August 2026 |
| Content integrated into HTML files | 13 August 2026 |
| Navigation tested across all pages | 14 August 2026 |
| **Part 1 submitted** (Proposal, content ZIP, HTML files, GitHub link) | 14 August 2026, 11:49 PM |
| Part 1 feedback received (88/100) | 28 August 2026, 3:03 PM |
| Part 1 corrections implemented (wireframes, HTML comments, timeline) | 17 September 2026 |
| External stylesheet, base styles, and typography built | 17 September 2026 |
| Responsive layout (Grid/Flexbox) and breakpoints implemented | 17 September 2026 |
| Responsive images (srcset/picture) added | 17 September 2026 |
| **Part 2 submitted** (CSS styling and responsive design) | 17 September 2026, 11:59 PM |
| Part 3 — JavaScript functionality | Following submission cycle (date TBC on LMS) |

*Dates reflect actual submission and feedback dates from the LMS, plus the work schedule followed for this repository. Part 3's date will be confirmed once released on the module's LMS page.*

## Sitemap
```
Home (index.html)
 ├── About (about.html)
 ├── Services (services.html)
 ├── Pricing (pricing.html)
 ├── Booking (booking.html)
 ├── Testimonials (testimonials.html)
 ├── FAQ (faq.html)
 └── Contact (contact.html)
```
All eight pages are reachable from every page via the primary navigation menu and footer. See `documents/sitemap.svg` for the visual diagram.

## Wireframes
Low-fidelity wireframes for the three structural page templates used across the site (homepage, standard inner page, and form page) are available at `documents/wireframes.svg`. Rather than a separate wireframe per page, the site's header, footer, hero, and section patterns repeat across all 8 pages, so the wireframes group pages by shared layout structure.

## File Organisation
A separate project folder named `TechFix_IT_Solutions_Website` was created to organise all website files. The project contains separate folders for CSS, JavaScript, images, and documents. HTML pages are stored in the main project folder. Clear and consistent lowercase naming conventions are used to make the files easy to identify, manage, and maintain.

```
TechFix_IT_Solutions_Website
│
├── index.html
├── about.html
├── services.html
├── pricing.html
├── booking.html
├── testimonials.html
├── faq.html
├── contact.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── images
│   └── website images (e.g. computer.jpg, networking.jpg, technician.jpg)
│
├── documents
│   ├── sitemap.svg
│   ├── wireframes.svg
│   └── supporting research documents
│
└── README.md
```

## Changelog
- **v0.1 (Part 1 deliverable):** Initial project setup — folder structure, sitemap, HTML structure for all 8 pages, basic content integration, working navigation.
- **v0.2 (completed ahead of schedule, not part of the Part 1 mark allocation):** CSS styling, responsive design, and JavaScript (form validation, mobile nav, FAQ accordion) added.
- **v0.3 (Part 1 feedback corrections — score 88/100):** Corrections made in response to specific rubric deductions:
  - *Wireframes (was 0/2, none provided):* added `documents/wireframes.svg` — low-fidelity wireframes for the homepage, standard inner-page, and form-page templates.
  - *Timeline (was 1/2, vague/unrealistic):* replaced the "Week 1–4" placeholder timeline with actual calendar dates matching real submission and feedback dates from the LMS.
  - *Two Proposals (was 4/5, content deemed incomplete):* reviewed against the proposal template; no further edits made to the already-submitted proposal document itself, but the additional detail it was missing (concrete goals, timeline, budget) is now reflected in this README's Timeline and Milestones section.
  - *Code comments (was 0/5, none in HTML):* added explanatory HTML comments to all 8 pages — header, main content, each section (labelled from its heading/eyebrow text), forms, and the script include. `css/style.css` and `js/script.js` already carried section comments from Part 1 and were left as-is.
  - *GitHub commits (was 2/5, too few and lacking descriptions):* addressed going forward in the v0.4 commits below — each change is now committed separately with a descriptive message rather than batched into one or two commits.
- **v0.4 (Part 2 deliverable):**
  - Added `.hero-inner` / `.hero-text` / `.hero-media` flex layout and a responsive hero image (`srcset`/`sizes`) to `index.html`.
  - Added responsive team photos (`srcset` with 1x/2x/3x descriptors) to `about.html`, replacing initials-only avatars.
  - Added an art-directed `<picture>` banner (square crop on mobile, wide crop on desktop) to `services.html`.
  - Restructured `css/style.css` responsive rules into three documented breakpoints: desktop (default), tablet (≤1024px), and mobile (≤720px / ≤600px).
  - Added `:active` pseudo-class states to primary/ghost buttons and nav links.
  - Added `.banner-media` and `.avatar img` styling to support the new responsive images.

## References
- Mozilla Developer Network (MDN). 2026. *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 2026].
- Mozilla Developer Network (MDN). 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 2026].
- Mozilla Developer Network (MDN). 2026. *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 2026].
- Mozilla Developer Network (MDN). 2026. *CSS Grid Layout* and *Flexbox*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout and https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout [Accessed 2026].
- Mozilla Developer Network (MDN). 2026. *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 2026].
- W3C. 2026. *HTML Living Standard*. Available at: https://html.spec.whatwg.org/ [Accessed 2026].
- Google Fonts. 2026. *Space Grotesk, Inter, and JetBrains Mono*. Available at: https://fonts.google.com/ [Accessed 2026].
- Unsplash. 2026. *Photography by Christina @ wocintechchat.com and Taylor Vick, used under the Unsplash License*. Available at: https://unsplash.com/license [Accessed 2026].

*Additional sources specific to the TechFix IT Solutions content and research are listed in the Website Project Proposal document.*
