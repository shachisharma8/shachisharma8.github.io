/**
 * Career timeline — employers, roles, and dates from the attached resume.
 * Selected achievements are resume-supported. No team sizes, titles, or dates
 * are invented.
 */

export interface CareerEntry {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
}

export const career: CareerEntry[] = [
  {
    id: 'morgan-stanley',
    company: 'Morgan Stanley',
    role: 'P3 Associate',
    location: 'Mumbai, India',
    start: 'Jun 2025',
    end: 'Present',
    current: true,
    summary:
      'Backend engineering on a high-throughput, message-driven payment processing platform, plus reporting, migration, and AI-assisted operations work.',
    highlights: [
      'Engineered a message-driven payment platform (Java, Spring, Spring Integration) processing millions of Equity Swap trade events through payment lifecycle and netting workflows.',
      'Architected a multi-threaded Client Reporting microservice with cache-first retrieval and configuration-driven report definitions.',
      'Improved report generation latency ~40% and reduced memory consumption >90% (concurrent processing, Apache POI SXSSF, batch I/O).',
      'Implemented phased migration workflows in Python, replaying historical trade events with idempotent payment creation across batches exceeding 200K cashflows.',
      'Built an end-to-end payment affirmation workflow (Power Apps + Spring REST APIs), saving ~2,000 hours annually.',
      'Built orchestration workflows leveraging LLMs, Grafana, and Sourcegraph to accelerate incident resolution.',
      'Served as Scrum Master for a 12-member Agile squad.',
    ],
  },
  {
    id: 'accolite',
    company: 'Accolite Digital',
    role: 'Senior Software Engineer — Consultant at Morgan Stanley',
    location: 'India',
    start: 'Sep 2021',
    end: 'Jun 2025',
    summary:
      'Built and hardened high-throughput payment processing for high-volume OTC trade settlement.',
    highlights: [
      'Engineered a payment processing platform (Java, Spring Boot, Microservices, REST APIs, messaging) to create and settle high-volume OTC trade payments.',
      'Architected a delay-aware reconciliation workflow using a Delayable Queue, reducing reconciliation breaks by 95%.',
      'Automated payment affirmation via third-party API integrations, reducing manual effort by ~85%; containerized services with Docker.',
      'Optimized complex SQL queries and relational schemas for high-volume transaction processing.',
      'Investigated production incidents across distributed payment services and delivered root-cause fixes.',
    ],
  },
];

export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  detail?: string;
  start: string;
  end: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  instructors?: string;
  blurb: string;
  courses: string[];
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 'dl-specialization',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI · Coursera',
    instructors: 'Andrew Ng, Younes Bensouda Mourri & Kian Katanforoosh',
    blurb:
      'Five courses on how deep-learning models actually work — from the fundamentals of neural networks through CNNs and sequence models. This is where my understanding of what’s happening under the hood of modern AI comes from.',
    courses: [
      'Neural Networks and Deep Learning',
      'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      'Structuring Machine Learning Projects',
      'Convolutional Neural Networks',
      'Sequence Models',
    ],
    skills: ['Neural networks', 'CNNs', 'Sequence models', 'TensorFlow', 'Model evaluation', 'Python'],
  },
];

export const education: EducationEntry[] = [
  {
    id: 'jaypee',
    institution: 'Jaypee University of Information Technology, Solan',
    credential: 'B.Tech, Electronics and Communication',
    detail: 'CGPA 8.3 / 10',
    start: 'Jul 2017',
    end: 'Jun 2021',
  },
  {
    id: 'auckland-house',
    institution: 'Auckland House School, Shimla',
    credential: 'I.C.S.E. (Class X) · I.S.C. (Class XII)',
    start: '2002',
    end: '2017',
  },
];
