import { useEffect, useState } from 'react';

/**
 * Live "HH:MM ZONE" string for an IANA timezone.
 * Pass a fixed label (e.g. "IST") when Intl doesn't produce the abbreviation
 * you want; otherwise the real short zone name (CET/CEST) is derived and stays
 * correct across daylight-saving changes.
 */
function useClock(timeZone: string, fixedLabel?: string) {
  const [text, setText] = useState('');
  useEffect(() => {
    const base: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    };
    const timeFmt = new Intl.DateTimeFormat('en-GB', base);
    const zoneFmt = new Intl.DateTimeFormat('en-GB', { ...base, timeZoneName: 'short' });
    const tick = () => {
      const time = timeFmt.format(new Date());
      let zone = fixedLabel;
      if (!zone) {
        zone = zoneFmt.formatToParts(new Date()).find((p) => p.type === 'timeZoneName')?.value ?? '';
      }
      setText(`${time} ${zone}`);
    };
    tick();
    const id = window.setInterval(tick, 1000 * 20);
    return () => window.clearInterval(id);
  }, [timeZone, fixedLabel]);
  return text;
}

/** A thin world-clock status strip — adapted from mijobello's clock widget. */
export function StatusBar() {
  const mumbai = useClock('Asia/Kolkata', 'IST');
  const berlin = useClock('Europe/Berlin');

  return (
    <div className="border-b border-ink/10 bg-cream/80">
      <div className="container-editorial flex h-9 items-center justify-end gap-6 font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="flex items-center gap-2">
          <span className="text-ink/60">Mumbai</span>
          <span className="tabular-nums text-ink/70" aria-label={`Local time in Mumbai is ${mumbai}`}>
            {mumbai}
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-ink/60">Berlin</span>
          <span className="tabular-nums text-ink/70" aria-label={`Central European time is ${berlin}`}>
            {berlin}
          </span>
        </span>
      </div>
    </div>
  );
}
