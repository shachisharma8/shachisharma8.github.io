import { useEffect, useState } from 'react';

/** Returns how many books sit on one shelf, based on viewport width. */
export function useShelfColumns(): number {
  const [cols, setCols] = useState(() => computeCols());
  useEffect(() => {
    const onResize = () => setCols(computeCols());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return cols;
}

function computeCols(): number {
  if (typeof window === 'undefined') return 8;
  const w = window.innerWidth;
  if (w < 420) return 4;
  if (w < 640) return 6;
  if (w < 900) return 8;
  if (w < 1200) return 10;
  return 12;
}

export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [arr];
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
