/**
 * The Library — catalogue seeds.
 *
 * PRIVACY / CONTENT BOUNDARY (important):
 * These are title/author catalogue seeds ONLY. No reading history, opinions,
 * ratings, progress, reviews, or personal notes are imported or inferred.
 * Every book starts with status `to-read` and empty personal fields. Change a
 * book's `status`, `rating`, `notes`, `review`, `favoritePassage`, or
 * `readingDates` here only if you, the site owner, choose to.
 */

export type ReadingStatus =
  | 'to-read'
  | 'reading'
  | 'read'
  | 'paused'
  | 'abandoned'
  | 'unspecified';

export const statusLabels: Record<ReadingStatus, string> = {
  'to-read': 'To read',
  reading: 'Currently reading',
  read: 'Read',
  paused: 'Paused',
  abandoned: 'Set aside',
  unspecified: 'Unspecified',
};

export type BookCategory =
  | 'Literary Fiction'
  | 'Contemporary'
  | 'Mystery & Thriller'
  | 'Poetry'
  | 'Classics'
  | 'Unfiled';

export interface Book {
  id: string;
  title: string;
  author: string;
  /** Blank when the exact book/author is intentionally not guessed */
  authorUnknown?: boolean;
  category: BookCategory;
  status: ReadingStatus;
  /** Spine styling for the illustrated shelf (varied, not identical cards) */
  spine: {
    /** Relative spine height, 0.82–1 of shelf height */
    height: number;
    /** Hex from the site palette */
    color: string;
    /** Text color on the spine */
    ink: string;
  };
  // --- Personal fields — intentionally empty editable placeholders ---
  rating?: number | null;
  notes?: string;
  review?: string;
  favoritePassage?: string;
  readingDates?: { started?: string; finished?: string };
}

// A small, warm palette for spines (varied — no two neighbours identical).
const SPINES = [
  { color: '#456A83', ink: '#F7F2E9' }, // deep blue
  { color: '#795744', ink: '#F7F2E9' }, // walnut
  { color: '#A9C7DE', ink: '#302F2B' }, // pastel blue
  { color: '#B89578', ink: '#302F2B' }, // caramel
  { color: '#A7B5A0', ink: '#302F2B' }, // sage
  { color: '#D8E6EF', ink: '#302F2B' }, // powder
  { color: '#654636', ink: '#F7F2E9' }, // dark walnut
  { color: '#37506180', ink: '#F7F2E9' }, // muted blue
];

const HEIGHTS = [1, 0.92, 0.86, 0.97, 0.9, 0.83, 0.95, 0.88];

interface Seed {
  title: string;
  author: string;
  category: BookCategory;
  authorUnknown?: boolean;
}

const seeds: Seed[] = [
  { title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', category: 'Literary Fiction' },
  { title: 'The Namesake', author: 'Jhumpa Lahiri', category: 'Literary Fiction' },
  { title: 'All the Light We Cannot See', author: 'Anthony Doerr', category: 'Literary Fiction' },
  { title: 'The Thirteenth Tale', author: 'Diane Setterfield', category: 'Mystery & Thriller' },
  { title: 'Ask Again, Yes', author: 'Mary Beth Keane', category: 'Contemporary' },
  { title: 'Whereabouts', author: 'Jhumpa Lahiri', category: 'Literary Fiction' },
  { title: 'The Sense of an Ending', author: 'Julian Barnes', category: 'Literary Fiction' },
  { title: 'Never Let Me Go', author: 'Kazuo Ishiguro', category: 'Literary Fiction' },
  { title: 'Arresting God in Kathmandu', author: 'Samrat Upadhyay', category: 'Literary Fiction' },
  { title: "Midnight's Children", author: 'Salman Rushdie', category: 'Literary Fiction' },
  { title: 'One True Loves', author: 'Taylor Jenkins Reid', category: 'Contemporary' },
  { title: 'Me Before You', author: 'Jojo Moyes', category: 'Contemporary' },
  { title: 'Funny Story', author: 'Emily Henry', category: 'Contemporary' },
  { title: 'Beautiful World, Where Are You', author: 'Sally Rooney', category: 'Contemporary' },
  { title: 'The Silent Patient', author: 'Alex Michaelides', category: 'Mystery & Thriller' },
  // Author/title intentionally not guessed — left configurable per the brief.
  { title: 'The Housekeeper', author: '', authorUnknown: true, category: 'Unfiled' },
  { title: 'The Plot', author: 'Jean Hanff Korelitz', category: 'Mystery & Thriller' },
  { title: 'Tuesdays with Morrie', author: 'Mitch Albom', category: 'Contemporary' },
  { title: 'The Forty Rules of Love', author: 'Elif Shafak', category: 'Literary Fiction' },
  { title: 'A Little Life', author: 'Hanya Yanagihara', category: 'Literary Fiction' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', category: 'Classics' },
  { title: 'The Mountain Child', author: 'Michelle Magorian', category: 'Contemporary' },
  { title: 'Felicity', author: 'Mary Oliver', category: 'Poetry' },
  { title: 'A Thousand Mornings', author: 'Mary Oliver', category: 'Poetry' },
  {
    title: 'The Lightning Should Have Fallen on Ghalib',
    author: 'translated by Robert Bly and Sunil Dutta',
    category: 'Poetry',
  },
];

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const books: Book[] = seeds.map((seed, i) => ({
  id: slugify(seed.title),
  title: seed.title,
  author: seed.author,
  authorUnknown: seed.authorUnknown,
  category: seed.category,
  status: 'to-read', // default per privacy boundary
  spine: {
    height: HEIGHTS[i % HEIGHTS.length],
    color: SPINES[i % SPINES.length].color,
    ink: SPINES[i % SPINES.length].ink,
  },
  rating: null,
  notes: '',
  review: '',
  favoritePassage: '',
  readingDates: {},
}));

export const bookCategories: BookCategory[] = [
  'Literary Fiction',
  'Contemporary',
  'Mystery & Thriller',
  'Poetry',
  'Classics',
  'Unfiled',
];

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
