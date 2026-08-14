# TechFix IT Solutions — Website Project

## Student Information
- **Student Name:** Thato Mabasa
- **Student Number:** ST10483866
- **Module:** WEDE5020 — Web Development (Introduction)
- **Institution:** Rosebank College (The Independent Institute of Education (Pty) Ltd)
- **Submission:** Part 1 — Building the Foundation: Project Initiation and Planning

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

## Timeline and Milestones
| Milestone | Target Date |
|---|---|
| Website Project Proposal submitted for approval | Week 1 |
| Content research and sourcing completed | Week 2 |
| Sitemap and file/folder structure finalised | Week 2 |
| Initial HTML structure for all 8 pages | Week 3 |
| Content integrated into HTML files | Week 3 |
| Navigation tested across all pages | Week 4 |
| Part 1 submission (Proposal, content ZIP, HTML files, GitHub link) | Week 4 |
| Part 2 — CSS styling and responsive design | Future submission |
| Part 3 — JavaScript functionality | Future submission |

*Dates follow the subject's official submission schedule as communicated by the lecturer.*

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
│   └── supporting research documents
│
└── README.md
```

## Changelog
- **v0.1 (Part 1 deliverable):** Initial project setup — folder structure, sitemap, HTML structure for all 8 pages, basic content integration, working navigation.
- **v0.2 (completed ahead of schedule, not part of the Part 1 mark allocation):** CSS styling, responsive design, and JavaScript (form validation, mobile nav, FAQ accordion) added.

## References
- Mozilla Developer Network (MDN). 2026. *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 2026].
- Mozilla Developer Network (MDN). 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 2026].
- W3C. 2026. *HTML Living Standard*. Available at: https://html.spec.whatwg.org/ [Accessed 2026].
- Google Fonts. 2026. *Space Grotesk, Inter, and JetBrains Mono*. Available at: https://fonts.google.com/ [Accessed 2026].

*Additional sources specific to the TechFix IT Solutions content and research are listed in the Website Project Proposal document.*
