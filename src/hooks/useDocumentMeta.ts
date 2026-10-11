import { useEffect } from 'react';

/** Sets document.title and meta description per page for basic SEO. */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    let metaEl: HTMLMetaElement | null = null;
    let previousDesc: string | null = null;
    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        previousDesc = metaEl.getAttribute('content');
        metaEl.setAttribute('content', description);
      }
    }
    return () => {
      document.title = previous;
      if (metaEl && previousDesc !== null) metaEl.setAttribute('content', previousDesc);
    };
  }, [title, description]);
}
