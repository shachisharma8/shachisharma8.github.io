import { Link } from 'react-router-dom';
import type { Book } from '@/data/books';

interface Props {
  book: Book;
  /** Base shelf height in px (full-height spine) */
  base: number;
}

/** A single book standing on the shelf — varied height and colour, title on the spine. */
export function BookSpine({ book, base }: Props) {
  const height = Math.round(base * book.spine.height);
  // A little width variety keyed off the title length, kept within a tidy range.
  const width = 30 + (book.title.length % 5) * 4;

  return (
    <Link
      to={`/person/library/${book.id}`}
      title={`${book.title}${book.author ? ' — ' + book.author : ''}`}
      className="group relative inline-flex shrink-0 items-end rounded-t-[3px] outline-offset-4 transition-transform duration-200 ease-editorial hover:-translate-y-2"
      style={{ height, width }}
    >
      <span
        className="flex h-full w-full flex-col items-center justify-between rounded-t-[3px] px-1 py-2 shadow-[inset_-6px_0_10px_-6px_rgba(0,0,0,0.45),inset_4px_0_6px_-4px_rgba(255,255,255,0.25)]"
        style={{ backgroundColor: book.spine.color, color: book.spine.ink }}
      >
        {/* top band */}
        <span className="h-1.5 w-full rounded-full bg-black/10" aria-hidden="true" />
        {/* vertical title */}
        <span
          className="flex-1 overflow-hidden whitespace-nowrap py-2 font-serif text-[11px] font-medium tracking-wide"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {book.title}
        </span>
        {/* bottom band */}
        <span className="h-1.5 w-full rounded-full bg-black/10" aria-hidden="true" />
      </span>
    </Link>
  );
}
