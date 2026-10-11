/**
 * Central profile configuration.
 *
 * Facts drawn from the attached resume are marked `source: 'resume'`.
 * Everything marked `sample: true` is editable placeholder copy — it is NOT a
 * biographical claim about the site owner. Replace or empty these freely.
 */

export interface NowItem {
  label: string;
  value: string;
  sample?: boolean;
}

export interface Profile {
  name: string;
  role: string;
  /** Short role shown in nav / tight spaces */
  shortRole: string;
  city: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string;
  /** One-paragraph editorial intro for the home page */
  intro: string;
  /** Editable "favorite things" — sample placeholders, not confirmed facts */
  favorites: string[];
  favoritesSample: boolean;
  /** Personal philosophy — sample placeholder, not a confirmed quote */
  philosophy: string;
  philosophySample: boolean;
  /** "Now" area — a small editable snapshot */
  now: NowItem[];
  contact: {
    email: string;
    linkedin: string;
    /** GitHub is a placeholder until you provide your handle */
    github: string;
    githubPlaceholder: boolean;
    /** Resume file path under /public. Drop your PDF here to enable download. */
    resumePath: string;
    resumeAvailable: boolean;
  };
}

export const profile: Profile = {
  name: 'Shachi Sharma',
  role: 'Backend Software Engineer',
  shortRole: 'Backend Engineer',
  city: 'Mumbai, India',
  tagline: 'Part software engineer, part collector of places, pages, and slow afternoons.',
  heroHeadline: 'A life in progress.',
  heroSupporting:
    'I write backend systems for a living and spend the rest of my time somewhere between a mountain trail, a secondhand bookshop, and a slow pot of something on the stove.',
  intro:
    'There is a person behind the code, and a story behind the person — so this isn’t a résumé with a nicer coat of paint. Think of it as a house with two wings. One holds the systems I design for payments at scale; the other holds the places I’ve wandered into, the books stacked by my bed, and the ordinary afternoons I’d rather not forget.',
  favorites: [
    'Mountain trains and window seats',
    'The first chapter of a new novel',
    'Slow weekend cooking',
    'Well-named functions',
    'Rain on an old-town street',
  ],
  favoritesSample: true,
  philosophy:
    'Make things that are reliable, legible, and kind to whoever comes to them next — whether that’s a teammate reading my code at 2am or a stranger reading this page.',
  philosophySample: true,
  now: [
    { label: 'Currently reading', value: 'A title from the Library →', sample: true },
    { label: 'Currently learning', value: 'Agentic workflows & evaluation', sample: true },
    { label: 'A place to visit', value: 'Hallstatt, Austria', sample: true },
    { label: 'A personal project', value: 'AI-Powered Incident Resolution Platform', sample: false },
  ],
  contact: {
    email: 'shachi.sharma80@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shachi-sharma8',
    github: 'https://github.com/shachisharma8',
    githubPlaceholder: false,
    resumePath: '/resume/Shachi_Sharma_2026.pdf',
    resumeAvailable: false,
  },
};
