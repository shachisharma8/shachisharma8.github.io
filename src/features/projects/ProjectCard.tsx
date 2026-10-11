import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { kindLabels, type Project } from '@/data/projects';

const kindStyles: Record<Project['kind'], string> = {
  shipped: 'bg-blue-powder/60 text-blue-deep',
  personal: 'bg-sage/25 text-[#55614f]',
  concept: 'bg-caramel/25 text-walnut',
};

export function ProjectCard({ project }: { project: Project }) {
  const metric = project.metrics.find((m) => m.confirmed) ?? project.metrics[0];
  return (
    <article className="group relative flex flex-col rounded-2xl border border-ink/10 bg-paper p-6 transition-shadow hover:shadow-lift">
      <div className="flex items-center justify-between gap-2">
        <span className={`rounded-full px-2.5 py-0.5 font-sans text-[11px] font-medium ${kindStyles[project.kind]}`}>
          {kindLabels[project.kind]}
        </span>
        <span className="font-sans text-[11px] text-muted">{project.company}</span>
      </div>

      <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight">
        <Link to={`/profession/projects/${project.id}`} className="relative after:absolute after:inset-0">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>

      <div className="mt-5 flex items-end justify-between gap-4">
        {metric ? (
          <p className="font-serif text-2xl leading-none text-blue-deep">
            {metric.value}
            <span className="ml-1.5 font-sans text-xs text-muted">{metric.label}</span>
          </p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full bg-cream px-2 py-0.5 font-sans text-[11px] text-muted">{t}</span>
            ))}
          </div>
        )}
        <ArrowUpRight size={18} className="shrink-0 text-walnut transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}
