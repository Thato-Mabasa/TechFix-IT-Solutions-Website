# Part 3 additions — WEDE5020

## Existing project preserved

This Part 3 version is based on the submitted Part 2 Git commit `12c2225` from the student's supplied ZIP. It retains the eight submitted pages, original CSS design, Johannesburg and Randburg content, responsive Unsplash photography, sitemap and wireframes. The existing Git repository history is preserved in the adjacent `TechFix-Part3-Git` folder in this deliverable.

## JavaScript enhancements

- Mobile navigation reports its expanded/collapsed state and closes after a visitor chooses a page.
- The Services page renders the nine existing TechFix offerings dynamically. Search, service-area filters and price/name sorting update the displayed results and accessible count.
- Each result links to Booking with its service selected.
- The existing FAQ accordion exposes its open state to assistive technology.
- The existing booking and enquiry forms retain HTML validation and add date and phone checks. They demonstrate validation only; this static site does not transmit or retain entered data.
- The About page includes an image gallery with a keyboard-operable lightbox dialog and Escape-to-close behaviour.
- Selected cards reveal as they enter view, with reduced-motion preferences respected.

## Search-engine optimisation

All pages have unique titles and meta descriptions; South African language metadata and location-specific keywords; canonical and Open Graph metadata; and structured data. `robots.txt` and `sitemap.xml` are included. Canonical URLs and sitemap placeholders must be changed to the final published domain before deployment. `example.com/techfix` is a demonstration placeholder, not a claim that this domain is owned or live.

## External service

The submitted Contact page's Google Maps embed remains in place and is labeled as a map of Johannesburg CBD. The office addresses and company are fictional student-project content. The map needs an internet connection.

## Run and check

Open `index.html` in a modern browser or use VS Code Live Server. Check all eight pages, navigation at mobile and desktop sizes, the service search/category/sort and no-results state, service-to-booking preselection, FAQ keyboard use, gallery open/close, and valid/invalid form entries. Check the Contact map while online.

## Before submission

Review `PART3-RUBRIC-CHECKLIST.md`, replace SEO URL placeholders after publishing, push the Part 3 commits to the existing GitHub repository, publish through an allowed free platform, and submit the GitHub and live-site links in the LMS. Add any exact content/photo sources from the Project Proposal if absent from the reference list.

