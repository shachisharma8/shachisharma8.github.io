import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Users } from 'lucide-react';
import { career, education } from '@/data/career';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function Experience() {
  useDocumentMeta('Experience — Shachi Sharma', 'Career timeline, leadership, and education.');

  return (
    <div className="container-editorial py-14 sm:py-18">
      <Link to="/profession" className="inline-flex items-center gap-2 link-underline">
        <ArrowLeft size={16} /> Back to the Profession
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="eyebrow mb-3">The path so far</p>
        <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.04] tracking-tight">
          Experience
        </h1>
        <p className="mt-4 text-lg text-muted">
          Employers, roles, and selected achievements — drawn directly from my résumé. Dates and
          titles are as stated there.
        </p>
      </header>

      {/* Leadership highlight */}
      <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-cream px-4 py-2 font-sans text-sm text-ink/80">
        <Users size={16} className="text-walnut" />
        Scrum Master for a 12-member Agile squad
      </div>

      {/* Timeline */}
      <ol className="mt-12 space-y-10 border-l-2 border-ink/10 pl-6 sm:pl-10">
        {career.map((c) => (
          <li key={c.id} className="relative">
            <span className="absolute -left-[31px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-paper ring-2 ring-walnut sm:-left-[47px]">
              <Briefcase size={11} className="text-walnut" />
            </span>
            {c.current && (
              <span className="mb-2 inline-block rounded-full bg-sage/25 px-2 py-0.5 font-sans text-[11px] font-medium text-[#55614f]">
                Current
              </span>
            )}
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-serif text-2xl tracking-tight">{c.company}</h2>
              <span className="font-sans text-sm text-muted">{c.start} — {c.end}</span>
            </div>
            <p className="mt-0.5 font-sans text-ink/80">{c.role}{c.location && <span className="text-muted"> · {c.location}</span>}</p>
            <p className="mt-3 max-w-reading text-muted">{c.summary}</p>
            <ul className="mt-4 space-y-2.5">
              {c.highlights.map((h, i) => (
                <li key={i} className="flex max-w-reading gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-deep" />
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Education */}
      <section className="mt-16">
        <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl tracking-tight">
          <GraduationCap size={22} className="text-walnut" /> Education
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <li key={e.id} className="rounded-2xl border border-ink/10 bg-paper p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-lg leading-snug">{e.institution}</h3>
                <span className="shrink-0 font-sans text-sm text-muted">{e.start}—{e.end}</span>
              </div>
              <p className="mt-2 text-muted">{e.credential}</p>
              {e.detail && <p className="mt-1 font-sans text-sm text-blue-deep">{e.detail}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
