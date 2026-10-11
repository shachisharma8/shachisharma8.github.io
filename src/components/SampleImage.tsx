import { useState } from 'react';
import type { ImageAsset } from '@/data/assets';
import { PlaceholderImage } from './PlaceholderImage';

interface Props {
  asset: ImageAsset;
  className?: string;
  /** Show the small "Sample" tag (default true) */
  sample?: boolean;
  /** Load eagerly (hero/above-the-fold). Defaults to lazy. */
  priority?: boolean;
  rounded?: boolean;
}

/**
 * Renders a real local sample photo. If the file is missing (e.g. you haven't run
 * `npm run fetch:images`), it falls back gracefully to generated SVG art so the
 * layout never breaks. Marked "Sample" because these are illustrative stock photos.
 */
export function SampleImage({ asset, className, sample = true, priority, rounded }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <PlaceholderImage
        variant={asset.fallback}
        seed={asset.src}
        hue={asset.hue}
        alt={asset.alt}
        sample={sample}
        rounded={rounded}
        className={className}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className ?? ''}`}>
      <img
        src={asset.src}
        alt={`${asset.alt} — sample photo`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
      {sample && (
        <span className="pointer-events-none absolute bottom-1.5 right-1.5 rounded-full bg-paper/85 px-1.5 py-0.5 font-sans text-[9px] font-medium uppercase tracking-wider text-muted">
          Sample
        </span>
      )}
    </div>
  );
}
