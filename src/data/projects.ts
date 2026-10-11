/**
 * Profession — project case studies.
 *
 * Grounding rule: metrics and technologies below are drawn from the attached
 * resume. Where the resume does not confirm a number, none is invented.
 * Items marked `kind: 'concept'` are exploratory/agentic workflow concepts —
 * they are explicitly NOT claimed as shipped production platforms.
 */

export type ProjectKind = 'shipped' | 'concept' | 'personal';

export interface Metric {
  value: string;
  label: string;
  /** true when the figure is confirmed by the resume */
  confirmed: boolean;
}

export interface Project {
  id: string;
  title: string;
  /** One-line summary for cards */
  summary: string;
  kind: ProjectKind;
  company: string;
  period?: string;
  /** Short themed tags */
  tags: string[];
  problem: string;
  contribution: string;
  approach: string[];
  technologies: string[];
  metrics: Metric[];
  /** Optional conceptual-architecture note */
  note?: string;
}

export const projects: Project[] = [
  {
    id: 'payment-platform',
    title: 'High-Throughput Payment Processing Platform',
    summary:
      'A message-driven platform that creates and settles high-volume trade payments through complex lifecycle and netting workflows.',
    kind: 'shipped',
    company: 'Morgan Stanley · Accolite',
    period: '2021 – Present',
    tags: ['Payments', 'Distributed systems', 'Messaging'],
    problem:
      'Equity Swap and OTC trade flows generate large volumes of events that must move through a multi-stage payment lifecycle — creation, netting, and settlement — reliably and in order, near strict settlement cutoffs.',
    contribution:
      'Engineered core services of the payment processing platform, handling event ingestion, payment-state transitions, and settlement, built on Java, Spring, and messaging systems.',
    approach: [
      'Modeled the payment lifecycle as explicit state transitions driven by trade events.',
      'Used messaging / Spring Integration for decoupled, high-throughput event processing.',
      'Designed for reliable data handling and recovery across distributed services.',
    ],
    technologies: ['Java', 'Spring Framework', 'Spring Integration', 'Spring Boot', 'Microservices', 'Messaging Systems', 'REST APIs'],
    metrics: [
      { value: 'Millions', label: 'trade events processed', confirmed: true },
      { value: 'High-volume', label: 'OTC & Equity Swap flows', confirmed: true },
    ],
  },
  {
    id: 'client-reporting',
    title: 'Client Reporting Automation',
    summary:
      'A multi-threaded reporting microservice for scalable scheduled-batch and on-demand client reports across enterprise systems.',
    kind: 'shipped',
    company: 'Morgan Stanley',
    period: '2025 – Present',
    tags: ['Reporting', 'Concurrency', 'Performance'],
    problem:
      'Client reports aggregating payment data were slow to generate and memory-heavy, and needed to support both scheduled batches and ad-hoc, on-demand requests.',
    contribution:
      'Architected a multi-threaded Client Reporting microservice with cache-first data retrieval, orchestration across multiple enterprise systems, and configuration-driven report definitions.',
    approach: [
      'Cache-first retrieval to avoid redundant upstream calls.',
      'Concurrent processing and batch-oriented I/O for throughput.',
      'Apache POI SXSSF for streaming Excel generation at scale.',
      'Configuration-driven report definitions for flexibility without redeploys.',
    ],
    technologies: ['Java', 'Spring', 'Apache POI (SXSSF)', 'Multithreading', 'Caching'],
    metrics: [
      { value: '~40%', label: 'faster report generation', confirmed: true },
      { value: '>90%', label: 'lower memory consumption', confirmed: true },
    ],
  },
  {
    id: 'payment-reconciliation',
    title: 'Delay-Aware Reconciliation Reliability',
    summary:
      'A reconciliation workflow that absorbs late-arriving upstream events near settlement cutoffs using a delayable queue.',
    kind: 'shipped',
    company: 'Accolite · Morgan Stanley',
    period: '2021 – 2025',
    tags: ['Reliability', 'Reconciliation', 'Queues'],
    problem:
      'Upstream events sometimes arrived late, close to settlement cutoffs, producing reconciliation breaks and hurting settlement accuracy.',
    contribution:
      'Architected a delay-aware reconciliation workflow using a Delayable Queue to hold and re-process late-arriving events at the right time.',
    approach: [
      'Deferred processing of events that arrive too close to cutoff.',
      'Re-evaluation of reconciliation once delayed events settle.',
      'Focus on settlement accuracy and operational resilience.',
    ],
    technologies: ['Java', 'Spring', 'Delayable Queue', 'Messaging Systems'],
    metrics: [{ value: '~95%', label: 'fewer reconciliation breaks', confirmed: true }],
  },
  {
    id: 'report-memory-optimization',
    title: 'Scheduled Report Memory & Latency Optimization',
    summary:
      'Investigated and resolved heavy memory use and slow generation in large scheduled reports.',
    kind: 'shipped',
    company: 'Morgan Stanley',
    period: '2025 – Present',
    tags: ['Performance', 'JVM', 'Profiling'],
    problem:
      'Large scheduled reports consumed excessive memory and were slow to generate, risking instability on high-row-count runs.',
    contribution:
      'Drove the performance work: concurrent processing, streaming Excel I/O, and cache-first retrieval to cut both latency and memory footprint.',
    approach: [
      'Streaming workbook generation with Apache POI SXSSF instead of holding full workbooks in memory.',
      'Batch-oriented I/O to bound working-set size.',
      'Cache-first retrieval to reduce repeated upstream fetches.',
    ],
    technologies: ['Java', 'Apache POI (SXSSF)', 'Concurrency', 'Profiling'],
    metrics: [
      { value: '>90%', label: 'lower memory consumption', confirmed: true },
      { value: '~40%', label: 'faster generation', confirmed: true },
    ],
  },
  {
    id: 'payment-affirmation',
    title: 'Payment Affirmation Automation',
    summary:
      'An end-to-end affirmation workflow automating client responses, validation, and downstream processing.',
    kind: 'shipped',
    company: 'Morgan Stanley · Accolite',
    period: '2021 – Present',
    tags: ['Automation', 'Integrations', 'Power Apps'],
    problem:
      'Payment affirmation required significant manual operational effort to collect client responses, validate them, and push them downstream.',
    contribution:
      'Developed an end-to-end payment affirmation workflow using Microsoft Power Apps and Spring REST APIs, and (at Accolite) automated affirmation via third-party API integrations.',
    approach: [
      'Power Apps front door wired to Spring REST APIs.',
      'Automated validation and downstream processing of client responses.',
      'Third-party API integrations to remove manual coordination.',
    ],
    technologies: ['Microsoft Power Apps', 'Spring', 'REST APIs', 'Docker'],
    metrics: [
      { value: '~2,000 hrs', label: 'saved annually', confirmed: true },
      { value: '~85%', label: 'less manual effort', confirmed: true },
    ],
  },
  {
    id: 'ai-incident-resolution',
    title: 'AI-Powered Incident Resolution Platform',
    summary:
      'A personal project: an orchestration service that automates production incident diagnostics by correlating logs, code, and runtime context.',
    kind: 'personal',
    company: 'Personal project',
    tags: ['AI', 'Observability', 'Orchestration'],
    problem:
      'Production incident diagnosis means manually correlating application logs, source code, and runtime state — slow and context-heavy work under pressure.',
    contribution:
      'Built an AI-powered orchestration service that retrieves runtime context from Grafana and source context from Sourcegraph, then uses LLM reasoning to propose root-cause analysis and remediation steps.',
    approach: [
      'Correlate logs, source code, and runtime context automatically.',
      'Integrate LLM-based reasoning with observability data.',
      'Generate actionable RCA, probable failure points, and remediation suggestions.',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Grafana', 'Sourcegraph', 'Docker'],
    metrics: [],
  },
  {
    id: 'ai-food-tracker',
    title: 'Food & Fitness Tracking Agent',
    summary:
      'A personal project: an agent that tracks calorie goals from photos of meals and workouts.',
    kind: 'personal',
    company: 'Personal project',
    tags: ['AI agents', 'Multimodal', 'Health'],
    problem:
      'Logging food and workouts by hand is tedious, so it rarely gets done consistently — which is exactly when calorie goals slip.',
    contribution:
      'Built an agent that reads photos of meals and workouts, estimates their nutritional and activity value, and tracks them against a calorie goal.',
    approach: [
      'Accepts images of food and workouts as input.',
      'Uses a multimodal LLM to identify items and estimate calories and effort.',
      'Keeps a running tally against the day’s goal.',
    ],
    technologies: ['LLMs', 'Multimodal / vision', 'Structured output'],
    metrics: [],
  },
  {
    id: 'ai-nutrition-comparator',
    title: 'Nutrition Label Comparator Agent',
    summary:
      'A personal project: an agent that compares two nutrition labels and flags the healthier choice.',
    kind: 'personal',
    company: 'Personal project',
    tags: ['AI agents', 'Multimodal', 'Health'],
    problem:
      'Comparing two packaged products in a shop means squinting at two labels and doing mental math in the aisle.',
    contribution:
      'Built an agent that reads two nutrition labels, normalizes their values, and explains which is the healthier option and why.',
    approach: [
      'Takes photos of two nutrition labels.',
      'Extracts and normalizes the nutritional values.',
      'Compares them and recommends the healthier choice, with reasoning.',
    ],
    technologies: ['LLMs', 'Multimodal / vision', 'Structured extraction'],
    metrics: [],
  },
  {
    id: 'sql-db-optimization',
    title: 'SQL & Database Optimization',
    summary:
      'Tuned complex SQL and relational schemas for high-volume payment processing and reporting.',
    kind: 'shipped',
    company: 'Accolite · Morgan Stanley',
    period: '2021 – Present',
    tags: ['Databases', 'SQL', 'Performance'],
    problem:
      'High-volume transaction processing and operational reporting put pressure on query performance and data persistence.',
    contribution:
      'Optimized complex SQL queries and relational database schemas, and used high-volume SQL analysis during production RCA to improve query performance and observability.',
    approach: [
      'Reviewed and restructured expensive queries and access patterns.',
      'Adjusted relational schema choices for maintainability and throughput.',
      'Used query analysis during incident RCA.',
    ],
    technologies: ['SQL', 'Oracle', 'Sybase', 'Relational schema design'],
    metrics: [],
  },
  {
    id: 'agentic-payment-ops',
    title: 'Agentic Payment Operations',
    summary:
      'A concept for agents that read affirmation information from email content and structured tables, with confidence-gated automation.',
    kind: 'concept',
    company: 'Exploration',
    tags: ['AI agents', 'Extraction', 'Human-in-the-loop'],
    problem:
      'Affirmation details often arrive as free-form email content and inconsistent HTML tables (including unexpected Outlook markup), which is tedious and error-prone to process by hand.',
    contribution:
      'Explored an agentic workflow: extract → normalize → produce structured output → act automatically above a confidence threshold, otherwise escalate to a human.',
    approach: [
      'Context extraction from email bodies and structured tables.',
      'Normalization into a consistent structured output.',
      'A configurable confidence threshold (e.g. 90%) as a design rule — not a measured production accuracy claim.',
      'Validation, auditability, failure handling, and human review on low confidence.',
    ],
    technologies: ['LLMs', 'Structured extraction', 'Tool calling', 'Validation'],
    metrics: [],
    note: 'Conceptual / exploratory workflow. The 90% figure is a configurable design threshold, not a production accuracy measurement.',
  },
  {
    id: 'ai-regression-testing',
    title: 'AI-Assisted Regression Testing',
    summary:
      'A concept for an agentic workflow that selects and runs relevant tests before releases and triages failures.',
    kind: 'concept',
    company: 'Exploration',
    tags: ['AI agents', 'Testing', 'CI/CD'],
    problem:
      'Running full regression suites before every release is slow, and separating genuine regressions from flaky/environmental failures takes manual judgement.',
    contribution:
      'Explored an agentic pipeline: inspect code changes → identify affected functionality → select relevant tests → orchestrate execution → classify failures → flag likely regressions vs. flaky/environmental noise.',
    approach: [
      'Change-aware test selection from diffs.',
      'Orchestrated execution of the selected subset.',
      'Failure classification to separate regressions from flakes.',
    ],
    technologies: ['LLMs', 'Workflow orchestration', 'Test tooling'],
    metrics: [],
    note: 'Conceptual / exploratory workflow — not claimed as a fully autonomous production platform.',
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export const kindLabels: Record<ProjectKind, string> = {
  shipped: 'Shipped',
  personal: 'Personal project',
  concept: 'Concept / exploration',
};
