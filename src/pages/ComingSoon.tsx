import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface Props {
  world: 'person' | 'profession';
  eyebrow: string;
  title: string;
  blurb: string;
}

/**
 * Honest placeholder for sections slated for the next build pass.
 * Routes resolve and refresh correctly; nothing here pretends to be finished.
 */
export function ComingSoon({ world, eyebrow, title, blurb }: Props) {
  useDocumentMeta(`${title} — Shachi Sharma`, blurb);
  const back = world === 'person' ? '/person' : '/profession';
  const backLabel = world === 'person' ? 'Back to Person' : 'Back to Profession';

  return (
    <div className="container-editorial py-20 sm:py-28">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-reading text-lg text-muted">{blurb}</p>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-walnut/40 bg-cream px-4 py-2 font-sans text-sm text-walnut">
        <span className="h-2 w-2 animate-pulse rounded-full bg-walnut" aria-hidden="true" />
        In progress — next build pass
      </div>

      <div className="mt-10">
        <Link to={back} className="inline-flex items-center gap-2 link-underline">
          <ArrowLeft size={16} /> {backLabel}
        </Link>
      </div>
    </div>
  );
}
