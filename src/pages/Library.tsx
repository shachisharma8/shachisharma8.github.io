import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, LibraryBig, Rows3, X } from 'lucide-react';
import {
  books as allBooks,
  bookCategories,
  statusLabels,
  type Book,
  type BookCategory,
  type ReadingStatus,
} from '@/data/books';
import { BookSpine } from '@/features/library/BookSpine';
import { useShelfColumns, chunk } from '@/hooks/useShelfColumns';
import { SampleNote } from '@/components/Section';
import { SampleImage } from '@/components/SampleImage';
import { images } from '@/data/assets';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

type SortKey = 'title' | 'author';
type ViewMode = 'shelf' | 'catalogue';
const SHELF_BASE = 150;

export function Library() {
  useDocumentMeta('The Library — Shachi Sharma', 'A cozy home library of books to read and revisit.');

  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<ReadingStatus | 'all'>('all');
  const [category, setCategory] = useState<BookCategory | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('title');
  const [view, setView] = useState<ViewMode>('shelf');

  const cols = useShelfColumns();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = allBooks.filter((b) => {
      const matchesQuery =
        !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      const matchesStatus = status === 'all' || b.status === status;
      const matchesCategory = category === 'all' || b.category === category;
      return matchesQuery && matchesStatus && matchesCategory;
    });
    list.sort((a, b) => {
      if (sort === 'author') {
        const an = authorKey(a);
        const bn = authorKey(b);
        if (an !== bn) return an.localeCompare(bn);
      }
      return a.title.replace(/^The\s+/i, '').localeCompare(b.title.replace(/^The\s+/i, ''));
    });
    return list;
  }, [query, status, category, sort]);

  const shelves = chunk(filtered, cols);
  const hasFilters = query || status !== 'all' || category !== 'all';

  const clearAll = () => {
    setQuery('');
    setStatus('all');
    setCategory('all');
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#efe3d6]/50">
        <div className="container-editorial grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2">
              The Person <span className="h-px w-4 bg-ink/20" /> Reading
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-tight">
              The Library
            </h1>
            <p className="mt-5 max-w-reading text-lg text-muted">
              A small, wooden home library. Spines of every height and colour, waiting on the shelf.
              Search for a title, filter by shelf, or open a book to its page.
            </p>
            <div className="mt-4">
              <SampleNote>
                These are catalogue seeds — titles and authors only. Every book starts as “To read”
                with empty notes. Set a status or add notes in <code className="rounded bg-paper/70 px-1">src/data/books.ts</code>.
              </SampleNote>
            </div>
          </div>
          <div className="film-frame rotate-1 hidden lg:block">
            <SampleImage asset={images.library.shelf} className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-16 z-30 border-y border-ink/10 bg-paper/90 backdrop-blur-sm">
        <div className="container-editorial flex flex-wrap items-center gap-3 py-3">
          <label className="relative flex min-w-[200px] flex-1 items-center">
            <Search size={16} className="pointer-events-none absolute left-3 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title or author…"
              aria-label="Search the library by title or author"
              className="w-full rounded-full border border-ink/15 bg-cream py-2 pl-9 pr-3 font-sans text-sm outline-none focus:border-blue-deep"
            />
          </label>

          <FilterSelect
            label="Status"
            value={status}
            onChange={(v) => setStatus(v as ReadingStatus | 'all')}
            options={[
              { value: 'all', label: 'All statuses' },
              ...Object.entries(statusLabels).map(([value, label]) => ({ value, label })),
            ]}
          />
          <FilterSelect
            label="Shelf"
            value={category}
            onChange={(v) => setCategory(v as BookCategory | 'all')}
            options={[
              { value: 'all', label: 'All shelves' },
              ...bookCategories.map((c) => ({ value: c, label: c })),
            ]}
          />
          <FilterSelect
            label="Sort"
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
            options={[
              { value: 'title', label: 'By title' },
              { value: 'author', label: 'By author' },
            ]}
          />

          {hasFilters && (
            <button onClick={clearAll} className="inline-flex items-center gap-1 rounded-full px-3 py-2 font-sans text-sm text-walnut hover:bg-walnut/10">
              <X size={14} /> Clear
            </button>
          )}

          <div className="ml-auto inline-flex rounded-full border border-ink/15 bg-cream p-0.5" role="group" aria-label="View mode">
            <ViewToggle active={view === 'shelf'} onClick={() => setView('shelf')} icon={<LibraryBig size={15} />} label="Shelf" />
            <ViewToggle active={view === 'catalogue'} onClick={() => setView('catalogue')} icon={<Rows3 size={15} />} label="List" />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container-editorial py-10">
        <p className="mb-6 font-sans text-sm text-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'book' : 'books'}
          {hasFilters ? ' match your filters' : ' on the shelves'}.
        </p>

        {filtered.length === 0 ? (
          <EmptyState onClear={clearAll} />
        ) : view === 'shelf' ? (
          <div className="space-y-1">
            {shelves.map((shelf, i) => (
              <Shelf key={i} books={shelf} />
            ))}
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((book) => (
              <li key={book.id}>
                <CatalogueCard book={book} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

/* ---------------- sub-components ---------------- */

function Shelf({ books }: { books: Book[] }) {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-end justify-start gap-1.5 px-3 pt-6" style={{ minHeight: SHELF_BASE + 20 }}>
        {books.map((b) => (
          <BookSpine key={b.id} book={b} base={SHELF_BASE} />
        ))}
      </div>
      {/* wooden board */}
      <div
        className="h-3 rounded-sm shadow-[0_6px_10px_-6px_rgba(48,47,43,0.5)]"
        style={{ background: 'linear-gradient(#8a6650, #6f4f3c)' }}
        aria-hidden="true"
      />
    </div>
  );
}

function CatalogueCard({ book }: { book: Book }) {
  return (
    <Link
      to={`/person/library/${book.id}`}
      className="group flex gap-4 rounded-2xl border border-ink/10 bg-paper p-4 transition-shadow hover:shadow-frame"
    >
      <span
        className="flex h-24 w-16 shrink-0 flex-col justify-between rounded-[3px] p-1.5 shadow-inner"
        style={{ backgroundColor: book.spine.color, color: book.spine.ink }}
        aria-hidden="true"
      >
        <span className="font-serif text-[9px] leading-tight line-clamp-4">{book.title}</span>
        <span className="h-1 w-full rounded bg-black/10" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-lg leading-tight">{book.title}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {book.author || <span className="italic">Author to be configured</span>}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-blue-powder/60 px-2 py-0.5 font-sans text-[11px] text-blue-deep">
            {statusLabels[book.status]}
          </span>
          <span className="rounded-full bg-cream px-2 py-0.5 font-sans text-[11px] text-muted">
            {book.category}
          </span>
        </div>
      </div>
    </Link>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="rounded-full border border-ink/15 bg-cream py-2 pl-3 pr-8 font-sans text-sm outline-none focus:border-blue-deep"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ViewToggle({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-sm transition-colors ${
        active ? 'bg-walnut text-paper' : 'text-muted hover:text-ink'
      }`}
    >
      {icon} <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-3xl border border-dashed border-ink/20 bg-cream/50 py-16 text-center">
      <p className="font-serif text-2xl">No books on this shelf.</p>
      <p className="mt-2 text-muted">Try a different search or clear the filters.</p>
      <button onClick={onClear} className="btn btn-ghost mt-5">Clear filters</button>
    </div>
  );
}

function authorKey(b: Book): string {
  if (!b.author) return 'zzzz';
  // sort by last token (surname-ish), ignoring "translated by"
  const cleaned = b.author.replace(/^translated by\s+/i, '');
  const parts = cleaned.split(/\s+/);
  return (parts[parts.length - 1] || cleaned).toLowerCase();
}
