import { describe, it, expect } from 'vitest';
import { books, getBook } from './books';

describe('library catalogue — privacy boundaries', () => {
  it('seeds all 25 catalogue titles', () => {
    expect(books).toHaveLength(25);
  });

  it('starts every book as "to-read" with no imported history', () => {
    for (const b of books) {
      expect(b.status).toBe('to-read');
      expect(b.rating ?? null).toBeNull();
      expect(b.notes).toBe('');
      expect(b.review).toBe('');
      expect(b.favoritePassage).toBe('');
    }
  });

  it('does not guess the configurable "The Housekeeper" author', () => {
    const book = books.find((b) => b.title === 'The Housekeeper');
    expect(book).toBeDefined();
    expect(book?.author).toBe('');
    expect(book?.authorUnknown).toBe(true);
  });

  it('generates stable, unique ids resolvable via getBook', () => {
    const ids = new Set(books.map((b) => b.id));
    expect(ids.size).toBe(books.length);
    expect(getBook('the-namesake')?.title).toBe('The Namesake');
  });
});
