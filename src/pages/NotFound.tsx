import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { SampleImage } from '@/components/SampleImage';
import { images } from '@/data/assets';

export function NotFound() {
  useDocumentMeta('Lost the thread — Shachi Sharma', 'Page not found.');
  return (
    <div className="container-editorial grid items-center gap-10 py-20 sm:py-28 md:grid-cols-2">
      <div>
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-serif text-5xl font-medium leading-none tracking-tight sm:text-6xl">
          Lost the thread.
        </h1>
        <p className="mt-6 max-w-reading text-lg text-muted">
          This page wandered off the map — a little like a side street you take by accident and
          end up glad you did. But there's nothing here. Let's get you back.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary">Back home</Link>
          <Link to="/person" className="btn btn-ghost">Visit Person</Link>
          <Link to="/profession" className="btn btn-ghost">Visit Profession</Link>
        </div>
      </div>
      <div className="film-frame rotate-1">
        <SampleImage asset={images.travel.prague.gallery[1]} className="aspect-[4/3]" />
      </div>
    </div>
  );
}
