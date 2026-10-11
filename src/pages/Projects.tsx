import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects, kindLabels, type ProjectKind } from '@/data/projects';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

type Filter = ProjectKind | 'all';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'shipped', label: kindLabels.shipped },
  { value: 'personal', label: kindLabels.personal },
  { value: 'concept', label: kindLabels.concept },
];

export function Projects() {
  useDocumentMeta('Projects — Shachi Sharma', 'Backend, performance, and AI workflow case studies.');
  const [filter, setFilter] = useState<Filter>('all');

  const shown = filter === 'all' ? projects : projects.filter((p) => p.kind === filter);

  return (
    <div className="container-editorial py-14 sm:py-18">
      <Link to="/profession" className="inline-flex items-center gap-2 link-underline">
        <ArrowLeft size={16} /> Back to the Profession
      </Link>

      <header className="mt-6 max-w-3xl">
        <p className="eyebrow mb-3">Case studies</p>
        <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.04] tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted">
          Problem, contribution, and outcome for each. Metrics are drawn from my résumé; concepts are
          clearly marked as exploratory and not claimed as production systems.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`rounded-full px-4 py-1.5 font-sans text-sm transition-colors ${
              filter === f.value ? 'bg-walnut text-paper' : 'border border-ink/15 text-muted hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
