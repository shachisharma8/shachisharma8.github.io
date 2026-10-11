/**
 * Technical skills — grouped, never ranked with arbitrary percentages.
 * `core` marks skills with direct, resume-confirmed professional experience;
 * `exploring` marks current exploration / project application.
 */

/** Headline competencies for a quick, recruiter-facing scan. */
export const coreSkills: string[] = [
  'Java',
  'Spring Framework',
  'Spring Boot',
  'Spring Integration',
  'Microservices',
  'REST APIs',
  'Kafka & Messaging',
  'SQL · Oracle · Sybase',
  'Distributed Systems',
  'Python',
];

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  core: string[];
  exploring?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Where most of my day lives — services, APIs, and the payment lifecycle behind them.',
    core: [
      'Java',
      'Spring Framework',
      'Spring Boot',
      'Spring Integration',
      'Microservices',
      'REST APIs',
      'JUnit',
      'Mockito',
    ],
  },
  {
    id: 'data',
    title: 'Databases & data',
    blurb: 'High-volume transactional data, query tuning, and relational schema design.',
    core: ['SQL', 'Oracle', 'Sybase', 'Relational schema design', 'Query optimization'],
  },
  {
    id: 'messaging',
    title: 'Messaging & distributed systems',
    blurb: 'Event-driven processing, delay-aware queues, and reliable high-throughput flows.',
    core: ['Kafka', 'Messaging systems', 'Event-driven architecture', 'Delayable queues'],
  },
  {
    id: 'languages',
    title: 'Languages & frontend',
    blurb: 'Primarily backend, with enough frontend to build tools and this site.',
    core: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    exploring: ['Angular', 'React / TypeScript'],
  },
  {
    id: 'tooling',
    title: 'Tooling & observability',
    blurb: 'Build, test, ship, and watch what happens in production.',
    core: ['Git', 'Maven', 'Docker', 'Grafana', 'Splunk'],
  },
  {
    id: 'ai',
    title: 'AI & agentic workflows',
    blurb:
      'Applying LLMs to real engineering and operations work — not as a buzzword, but as tooling.',
    core: ['LLMs', 'Microsoft Power Apps'],
    exploring: [
      'AI agents',
      'Structured extraction',
      'Tool calling',
      'Confidence-based decisions',
      'Human-in-the-loop automation',
      'Workflow orchestration',
    ],
  },
];
