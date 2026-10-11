---
name: personal-website-builder
description: Build and refine a distinctive personal website in Node.js/React with two main areas, Person and Profession. Use when creating, implementing, or iterating on the user's personal digital archive and software-engineering portfolio.
---

# Personal Website Builder

## Goal

Build a complete, responsive personal website that feels like a thoughtful digital home, not a generic developer portfolio. The site has two connected worlds:

- **Person** — travel, reading, cooking, and everyday-life archives.
- **Profession** — software engineering experience, project case studies, technical skills, leadership, and AI/agentic workflows.

The visual idea is: “There is a person behind the code, and there is a story behind the person.”

## Design reference

Use https://mijobello.com/ as the primary design inspiration. Inspect it if browsing is available. Adapt its design principles and level of craft; do not copy its exact layout, assets, or source code. If inaccessible, follow the art direction below.

## Art direction

Aim for a warm, editorial, tactile, personal, quietly playful design. Combine the feeling of a European travel journal, a cozy home library, a film-photography archive, and a thoughtful software engineer's portfolio.

### Palette

Use pastel blue and warm brown as the main colors:

- Primary pastel blue: `#A9C7DE`
- Powder blue: `#D8E6EF`
- Deep muted blue: `#456A83`
- Walnut brown: `#795744`
- Light caramel: `#B89578`
- Cream: `#F7F2E9`
- Paper white: `#FCFAF5`
- Muted sage accent: `#A7B5A0`
- Dark text: `#302F2B`
- Muted text: `#77746D`

Use cream and paper-white as the main canvas, pastel blue for selected panels and highlights, and walnut brown for warmth and emphasis. Maintain accessible contrast. Avoid neon, purple-pink startup gradients, excessive glassmorphism, excessive shadows, and a wall of identical rounded cards.

### Typography and details

Use an editorial serif such as Cormorant Garamond or DM Serif Display for prominent headings, paired with DM Sans or Manrope for body text and UI. A handwritten accent such as Caveat may be used sparingly.

Use generous whitespace, intentional image compositions, subtle grain, paper-like surfaces, film-frame borders, small date stamps, captions, page numbers, and restrained annotations. Do not clutter the interface.

## Technical expectations

Prefer:
- Node.js
- React
- TypeScript
- Vite
- Tailwind CSS or another maintainable styling system
- React Router
- Motion/Framer Motion for restrained animation
- Lucide React for icons
- Vitest and React Testing Library for essential tests

An Express backend is optional. This is primarily a content-driven personal site, so do not add a database, authentication, or a backend unless there is a clear functional need. Keep content separate from UI components in structured TypeScript or JSON data files.

Build a complete running application, not just mockups or snippets. Use stable compatible dependencies. Run the app and tests when tools permit; never claim checks passed unless they were actually run.

## Information architecture

Primary navigation:
- Home
- Person
- Profession

Keep navigation simple and accessible. Provide a clear way to move between Person and Profession from either section. Use subtle transitions between the two visual worlds.

Suggested routes:
- `/`
- `/person`
- `/person/travel`
- `/person/travel/switzerland`
- `/person/travel/germany`
- `/person/travel/austria`
- `/person/travel/prague`
- `/person/travel/india`
- `/person/library`
- `/person/library/:bookId`
- `/person/cooking`
- `/person/everyday`
- `/profession`
- `/profession/projects`
- `/profession/projects/:projectId`
- `/profession/experience`

Adjust the route structure if it improves usability, but make direct navigation and page refresh work.

## Home

Create a memorable editorial hero with a headline such as **“A life in progress.”** Supporting copy can say: “Part software engineer, part collector of places, stories, books, and little moments.”

Use an intentional collage or layered composition of sample imagery: mountain landscape, European street, open book, coffee, everyday-life detail, and a subtle engineering-related image. It should feel curated, not like random stock cards.

Present two clear entry points:

- **Person** — “Everything that makes me, me.”
- **Profession** — “The things I build and the problems I solve.”

Include editable profile fields for name, current city, role, favorite things, and personal philosophy. Use placeholders for unknown details; do not invent biographical facts.

Add previews for travel, the library, cooking/everyday life, selected projects, and a small editable “Now” area (currently reading, currently learning, a place to visit, a personal project). Finish with a restrained footer.

## Person

Treat this section as a personal archive/journal, not a generic blog. Use editorial photography, short captions, varied layouts, timelines, and generous whitespace.

### Travel journal

Create five destination collections:

1. **Switzerland** — Alpine peaks, turquoise lakes, green meadows, mountain trails, scenic trains, small towns.
2. **Germany** — Freiburg im Breisgau as an aesthetic reference, old-town streets, forests, Black Forest landscapes, cafés, autumn foliage.
3. **Austria** — Hallstatt, Alpine villages, lakes, mountain scenery, traditional architecture.
4. **Prague** — Gothic architecture, cobblestone streets, Charles Bridge, terracotta rooftops, cafés, historic bookshops.
5. **India** — Himalayan landscapes, Shimla and hill-town scenery, mountain roads, forests, local markets, architecture, food.

Use sample photographs for now. Make clear that sample photos and illustrative entries are placeholders, not authentic photos or memories belonging to the user. Do not claim that the user visited a particular attraction or had a particular experience unless confirmed.

The travel landing page should include an editorial title such as “Places I've been, and places that stayed with me,” destination collections, a featured destination, a chronological archive, galleries, and favorite moments. A decorative map is optional; if used, do not imply geographic accuracy unless it is accurate.

Each destination page can support a cover photo, optional dates, an editable introduction, gallery, journal entries, favorite places, small observations, favorite photographs, and related destinations. Use placeholders for unknown dates and personal experiences.

Gallery interactions must work: click-to-expand lightbox, previous/next, captions, Escape-key close, keyboard accessibility, responsive layouts, and no autoplay. Filters such as All, Landscapes, Streets, Food, and Little Moments must work if shown.

### Library

Create a signature feature titled **“The Library.”** The look should suggest a cozy wooden home library: walnut shelves, cream pages, dusty blue accents, warm light, book spines, and understated annotations. A usable 2D illustrated bookshelf is preferable to a complex but awkward 3D bookshelf. Books should vary in height and color; do not put every book in an identical card.

**Important privacy/content boundary:** Use the book titles and author names below as catalogue seeds only. Do not import, repeat, or infer the user's detailed private reading history, reactions, opinions, reasons for stopping a book, reading progress, personal notes, or ratings from other conversations. Do not mark books as read, currently reading, loved, paused, or abandoned unless the user explicitly configures that status in the website's own content. Default status should be `To read` or `Unspecified`.

Seed catalogue with these title/author pairs:

- The Shadow of the Wind — Carlos Ruiz Zafón
- The Namesake — Jhumpa Lahiri
- All the Light We Cannot See — Anthony Doerr
- The Thirteenth Tale — Diane Setterfield
- Ask Again, Yes — Mary Beth Keane
- Whereabouts — Jhumpa Lahiri
- The Sense of an Ending — Julian Barnes
- Never Let Me Go — Kazuo Ishiguro
- Arresting God in Kathmandu — Samrat Upadhyay
- Midnight's Children — Salman Rushdie
- One True Loves — Taylor Jenkins Reid
- Me Before You — Jojo Moyes
- Funny Story — Emily Henry
- Beautiful World, Where Are You — Sally Rooney
- The Silent Patient — Alex Michaelides
- The Housekeeper — author/title details configurable; do not guess which book or author
- The Plot — Jean Hanff Korelitz
- Tuesdays with Morrie — Mitch Albom
- The Forty Rules of Love — Elif Shafak
- A Little Life — Hanya Yanagihara
- The Picture of Dorian Gray — Oscar Wilde
- The Mountain Child — Michelle Magorian
- Felicity — Mary Oliver
- A Thousand Mornings — Mary Oliver
- The Lightning Should Have Fallen on Ghalib — translated by Robert Bly and Sunil Dutta

Organize books into broad categories if useful, but keep categories editable. Reading statuses may include Read, Currently Reading, To Read, Paused, and Abandoned, but all entries should begin in an unconfirmed/default state. Do not fabricate reviews, quotes, reading dates, ratings, or personal reflections.

Book details can include cover, title, author, status, category, optional rating, personal notes, reading dates, review, and favorite passage as **empty editable fields**. Avoid long copyrighted excerpts. Include functional search by title/author, status and category filters, alphabetical sorting, author sorting, and optionally a switch between bookshelf and catalogue views.

### Cooking journal

Create a section titled **“Things I make.”** It is a cooking journal, not a full recipe platform. Use sample food photos and a warm, natural-light visual style with cream, muted blue, and walnut accents.

**Important privacy/content boundary:** Use recipe/dish names as seed entries only if they are available in the user's provided materials. Do not reuse detailed meal logs, quantities, calorie data, health/diet notes, personal food opinions, or private cooking experiences from other conversations. Do not invent a recipe list and imply the user has cooked those dishes. If no recipe names are available, include neutral editable sample placeholders such as “Vegetarian comfort meal” and mark them clearly as examples.

Each entry may support a dish name, photo, date, ingredients, short notes, difficulty, rating, and “what I'd change next time” field. Leave personal fields empty or marked as sample content. Keep the experience simple.

### Everyday life

Create **“The ordinary things”** as a visual archive for coffee, reading corners, rainy days, walks, plants, weekend moments, personal photographs, and notes to self. These are category ideas, not claims about specific events in the user's life.

Use sample content that is clearly labelled as illustrative. Entries can be a photo and caption or a longer note. A working “memory shuffle” feature may show a random item from the sample archive.

A “Little chapters” timeline is optional. Never invent life milestones, dates, or autobiographical stories.

## Profession

This section should communicate technical credibility to recruiters and engineering leaders while retaining the site's editorial visual identity. Use structured case studies, impact metrics, career timeline, skills, architecture diagrams, and concise summaries.

### Known professional background

Use these as initial inputs, then prioritize the user's attached resume for exact facts:

- Software Engineer / Technologist at Morgan Stanley India.
- Previous consulting experience at Accolite Digital / Bounteous x Accolite.
- Approximately five years of software engineering experience, subject to resume verification.
- FinTech and equity payments.
- Java, Spring Boot, microservices, REST APIs, SQL, relational databases, and enterprise integrations.
- Payment processing, settlement, and reconciliation workflows.
- Technical leadership and Scrum Master responsibilities.
- Interest and hands-on work in AI agents and agentic automation.

Do not invent exact employment dates, titles, promotions, team sizes, or responsibilities. Use editable placeholders where details are missing. Treat the resume as the source of truth if attached.

### Featured project case studies

Create detailed but concise case studies for these known achievements. Do not invent unsupported technologies, architecture, or metrics.

**1. Client Reporting Automation**
- Built a Spring Boot microservice to automate client reporting and delivery of payment data in encrypted Excel files.
- Supported scheduled batch reports and ad hoc reports.
- Known impact: approximately 80% reduction in manual effort.
- Explain problem, approach, security considerations, batch/ad hoc workflows, and outcome only to the extent supported.

**2. Payment Reconciliation Reliability**
- Improved a B2B payment reconciliation system using a Delayable Queue.
- Known impact: approximately 95% reduction in reconciliation breaks.
- Focus on reliability, delayed processing/retry behavior where supported, and business impact. Do not invent delivery guarantees or queue internals.

**3. Scheduled Report Memory Optimization**
- Investigated out-of-memory issues in scheduled reports processing more than 50,000 rows.
- Used heap dumps to investigate memory behavior.
- Optimized object creation and HashMap-related processing.
- Explain symptoms, investigation, root cause, optimization, and validation. Do not invent a memory-reduction percentage unless the resume confirms it.

**4. SQL and Database Optimization**
- Optimized SQL queries and database schema.
- Explain query efficiency, data access patterns, schema choices, maintainability, and validation without inventing latency or throughput numbers.

**5. Payment Affirmation Automation**
- Built a Power Apps-based Partial Affirmation solution.
- Coordinated integrations involving Magnet, Optimus, Power Apps, and Zap API.
- A previously noted estimate of approximately 2,000 hours/year saved must only be used if the resume or documentation confirms it.
- Focus on integration, reduced manual coordination, and workflow efficiency. Do not claim ownership of systems not built by the user.

**6. Agentic Payment Operations**
- Work/interest involving agents that read payment affirmation information from email content and structured tables.
- Workflow concepts include extraction, normalization, structured outputs, confidence thresholds, automated action, and human review.
- A 90% confidence threshold has been discussed as a configurable design rule, not as a measured production accuracy claim.
- Address HTML variations and unexpected Outlook markup, validation, auditability, failure handling, and safe automation.
- Distinguish implemented features from exploratory concepts where known.

**7. AI-Assisted Regression Testing**
- Agentic workflow concept/work involving regression testing before releases.
- Possible stages: inspect code changes, identify affected functionality, select relevant tests, orchestrate execution, classify failures, and flag likely regressions versus flaky/environmental failures.
- Do not claim a fully autonomous production platform unless confirmed.

**8. Payment Processing and Distributed Systems**
- Show relevant engineering themes: payment lifecycle, high-volume processing, service integrations, reliable data handling, reconciliation, API design, failure handling, and observability.
- Do not invent throughput, latency, transaction volume, or protocols.

Project cards should show title, summary, problem, contribution, approach, confirmed technologies, impact, and optional architecture diagram. Use expandable detail pages. Keep the landing page concise.

### Technical skills

Group skills rather than presenting a wall of logos.

- Backend: Java, Spring Boot, microservices, REST APIs, Spring Security, exception handling, JUnit, Mockito.
- Databases: Oracle, SQL, Sybase, and Snowflake migration experience where supported by the resume.
- Messaging/distributed systems: Kafka, RabbitMQ, message queues, event-driven architecture, distributed systems concepts.
- Infrastructure/cloud: Docker, Pivotal Cloud Foundry, AWS, CI/CD, Jenkins, and other cloud tools only where supported.
- Observability/tools: Splunk, Grafana, SonarQube, Fortify, Git, GitHub, JIRA.
- AI/agentic workflows: LLM-assisted development, AI agents, structured extraction, tool calling, confidence-based decisions, human-in-the-loop automation, AI-assisted regression testing, workflow orchestration.

Clearly distinguish professional experience from project application or current exploration when the resume supports that distinction. Never assign arbitrary skill percentages.

### AI and agentic workflow section

Give practical AI engineering its own visual section. Explain that AI is being applied to business and engineering workflows, not just listed as a tool.

Show a clean, responsive conceptual flow:

Input → Context extraction → Structured processing → Tool invocation → Validation → Confidence evaluation → Automated action or human escalation → Logging and auditability

Use Mermaid or a suitable React diagram library if appropriate. Mark diagrams as conceptual when exact production architecture is not confirmed. Explain failure handling, tool integrations, confidence thresholds, human review, and observability. Avoid exaggerated claims.

### Career and leadership

Create a career timeline with employer, role, dates, responsibilities, and selected achievements. Known employers are Morgan Stanley India and Accolite Digital / Bounteous x Accolite. Use placeholders for unknown dates and exact titles.

Include Scrum Master responsibilities, sprint planning, cross-functional coordination, technical problem solving, and delivery only where supported by the resume. Use team sizes only if the resume confirms the context.

### Resume and contact

Include Download Resume, Email, LinkedIn, and GitHub if supplied. Use editable configuration fields. Never invent contact details or URLs. If a resume file is not provided, show a clear placeholder and document how to add it. Do not make a contact form appear to send messages unless it is genuinely configured.

## Content and privacy rules

- Use sample pictures initially, with graceful fallbacks and a centralized asset manifest.
- Make it easy to replace sample images with real photographs.
- Clearly mark illustrative images and content.
- Never present sample photos as photos of the user.
- Never invent personal events, travel dates, reviews, memories, ratings, or autobiographical details.
- For books and recipes, use **names/titles only as seed catalogue content**. Do not import detailed personal context from previous conversations. Reading statuses, reviews, notes, progress, and cooking experiences must remain unconfirmed or empty unless the user explicitly adds them.
- Do not fabricate professional claims or metrics. Use the attached resume as the source of truth.
- Use placeholders for unknown personal/contact details.
- Avoid long copyrighted book excerpts.

## Interactions

Implement real, usable interactions:
- Responsive navigation with active states.
- Smooth but restrained transitions.
- Accessible keyboard focus.
- Reduced-motion support.
- Travel gallery lightbox with next/previous and Escape close.
- Working library search, filters, sorting, and shelf/catalogue toggle if present.
- Expandable project case studies.
- Working memory shuffle if included.
- Functional section navigation and route refreshes.
- Responsive architecture diagrams.

Do not include decorative buttons that do nothing. Avoid scroll-jacking, excessive parallax, long animations, and autoplay galleries.

## Accessibility, performance, and SEO

Use semantic HTML, adequate contrast, descriptive alt text, visible focus indicators, keyboard support, reduced-motion handling, lazy-loaded images where appropriate, optimized assets, stable image dimensions, metadata, Open Graph tags, favicon, and a custom 404 page. Prevent horizontal overflow on mobile. Aim for strong Lighthouse results without sacrificing design.

## Suggested project structure

```text
src/
  components/
  layouts/
  pages/
    Home/
    Person/
    Profession/
  features/
    travel/
    library/
    cooking/
    memories/
    projects/
    career/
  data/
    profile.ts
    navigation.ts
    destinations.ts
    books.ts
    recipes.ts
    memories.ts
    projects.ts
    skills.ts
    career.ts
  hooks/
  utils/
  styles/
public/
  images/
    travel/
      switzerland/
      germany/
      austria/
      prague/
      india/
    books/
    food/
    everyday/
    profession/
  resume/
```

Adapt the structure when appropriate. Use TypeScript models and stable IDs. Keep content separate from UI components.

## Implementation workflow

1. Inspect the design reference if possible.
2. Summarize the design direction and architecture briefly.
3. Define design tokens and content models.
4. Build the homepage and global navigation.
5. Build Person: travel, library, cooking, everyday life.
6. Build Profession: overview, projects, skills, AI workflows, career, contact.
7. Refine responsive layouts and accessibility.
8. Run the application and tests if tools permit.
9. Verify routes, image fallbacks, navigation, search/filter controls, lightbox, project details, and browser console.
10. Fix issues discovered during verification.

Do not stop after the plan. Build the working application.

## Deliverables

Provide a complete working codebase, setup instructions, README, structured content files, sample assets or documented asset sources, and instructions for updating:
- Profile details and links.
- Travel destinations and photos.
- Book titles and statuses.
- Recipe names and cooking entries.
- Memories.
- Professional projects and achievements.
- Resume and contact details.

Include exact commands to install and run the project. State clearly what was tested and what remains incomplete.

## Final design goal

Person should feel warm, reflective, visual, and intimate. Profession should feel technically credible, clear, and ambitious. Pastel blue and warm brown should connect the two worlds.

Prioritize excellent art direction, real functionality, truthful content, privacy-aware use of personal information, and clean engineering. Avoid generic portfolio templates.
