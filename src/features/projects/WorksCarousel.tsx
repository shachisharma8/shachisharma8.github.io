import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { kindLabels, type Project } from '@/data/projects';

interface Props {
  projects: Project[];
}

/** Horizontally-scrolling "selected works" carousel with prev/next arrows. */
export function WorksCarousel({ projects }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? (card as HTMLElement).offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Previous works"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors enabled:hover:bg-ink/5 disabled:opacity-30"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Next works"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors enabled:hover:bg-ink/5 disabled:opacity-30"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <ul
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
      >
        {projects.map((p) => (
          <li
            key={p.id}
            className="w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]"
          >
            <Link
              to={`/profession/projects/${p.id}`}
              className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 transition-shadow hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-walnut">
                  {kindLabels[p.kind]}
                </span>
                <ArrowUpRight size={18} className="text-walnut transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-4 font-serif text-2xl leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{p.summary}</p>
              {p.metrics[0] ? (
                <p className="mt-5 font-serif text-3xl leading-none text-blue-deep">
                  {p.metrics[0].value}
                  <span className="ml-1.5 font-sans text-xs text-muted">{p.metrics[0].label}</span>
                </p>
              ) : (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-full bg-cream px-2 py-0.5 font-sans text-[11px] text-muted">{t}</span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
