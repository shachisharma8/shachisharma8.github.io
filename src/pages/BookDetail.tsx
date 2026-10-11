import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { getBook, statusLabels, books } from '@/data/books';
import { NotFound } from './NotFound';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function BookDetail() {
  const { bookId } = useParams();
  const book = bookId ? getBook(bookId) : undefined;
  useDocumentMeta(
    book ? `${book.title} — The Library` : 'Book not found',
    book ? `${book.title}${book.author ? ' by ' + book.author : ''}` : undefined,
  );

  if (!book) return <NotFound />;

  // Related: other books on the same shelf (category)
  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);

  const EmptyField = ({ label, hint }: { label: string; hint: string }) => (
    <div className="rounded-xl border border-dashed border-ink/20 bg-cream/40 p-4">
      <p className="eyebrow mb-1">{label}</p>
      <p className="font-sans text-sm italic text-muted">{hint}</p>
    </div>
  );

  return (
    <div className="container-editorial py-12 sm:py-16">
      <Link to="/person/library" className="inline-flex items-center gap-2 link-underline">
        <ArrowLeft size={16} /> Back to the Library
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[220px_1fr]">
        {/* Cover */}
        <div className="mx-auto w-full max-w-[220px]">
          <div
            className="flex aspect-[2/3] flex-col justify-between rounded-md p-5 shadow-lift"
            style={{ backgroundColor: book.spine.color, color: book.spine.ink }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80">
              The Library
            </span>
            <div>
              <h1 className="font-serif text-2xl leading-tight">{book.title}</h1>
              <p className="mt-2 text-sm opacity-90">
                {book.author || 'Author to be configured'}
              </p>
            </div>
            <span className="h-1 w-10 rounded bg-current opacity-30" />
          </div>
        </div>

        {/* Meta + editable fields */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-powder/60 px-3 py-1 font-sans text-xs text-blue-deep">
              {statusLabels[book.status]}
            </span>
            <span className="rounded-full bg-cream px-3 py-1 font-sans text-xs text-muted">
              {book.category}
            </span>
            <span className="sample-tag">seed catalogue entry</span>
          </div>

          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            {book.title}
          </h2>
          <p className="mt-1 text-lg text-muted">
            {book.author ? (
              book.author
            ) : (
              <span className="italic">Author/title intentionally left configurable.</span>
            )}
          </p>

          {/* Rating (empty) */}
          <div className="mt-6 flex items-center gap-2" aria-label="Rating — not set">
            <span className="eyebrow">Rating</span>
            <span className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-ink/20" />
              ))}
            </span>
            <span className="font-sans text-sm italic text-muted">not set</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <EmptyField label="Personal notes" hint="Empty — add your own thoughts here." />
            <EmptyField label="Favourite passage" hint="Empty — add a short line you loved (keep it brief)." />
            <EmptyField label="Reading dates" hint="Not set — add started / finished dates." />
            <EmptyField label="Review" hint="Empty — a few honest sentences, when you're ready." />
          </div>

          <p className="mt-6 max-w-reading font-sans text-xs italic text-muted">
            These fields are intentionally empty. Nothing about this book's status, rating, or your
            opinion is assumed — edit <code className="rounded bg-cream px-1">src/data/books.ts</code> to make it yours.
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <p className="eyebrow mb-4">Also on the {book.category} shelf</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  to={`/person/library/${r.id}`}
                  className="block rounded-xl border border-ink/10 bg-paper p-4 transition-shadow hover:shadow-frame"
                >
                  <h3 className="font-serif text-base leading-snug">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.author || 'Author to be configured'}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
