import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Info } from 'lucide-react';
import { getProject, kindLabels, projects } from '@/data/projects';
import { NotFound } from './NotFound';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectId ? getProject(projectId) : undefined;
  useDocumentMeta(
    project ? `${project.title} — Projects` : 'Project not found',
    project?.summary,
  );

  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="container-editorial py-12 sm:py-16">
      <Link to="/profession/projects" className="inline-flex items-center gap-2 link-underline">
        <ArrowLeft size={16} /> All projects
      </Link>

      {/* Header */}
      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cream px-3 py-1 font-sans text-xs text-walnut">{kindLabels[project.kind]}</span>
          <span className="font-sans text-xs text-muted">{project.company}</span>
          {project.period && <span className="font-sans text-xs text-muted">· {project.period}</span>}
        </div>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>
      </header>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl bg-blue-powder/40 p-6">
              <p className="font-serif text-3xl text-blue-deep">{m.value}</p>
              <p className="mt-1 font-sans text-sm text-muted">{m.label}</p>
              {m.confirmed && (
                <p className="mt-2 inline-flex items-center gap-1 font-sans text-[11px] text-[#55614f]">
                  <Check size={12} /> résumé-confirmed
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          <Block title="The problem">
            <p>{project.problem}</p>
          </Block>
          <Block title="My contribution">
            <p>{project.contribution}</p>
          </Block>
          <Block title="Approach">
            <ul className="space-y-2.5">
              {project.approach.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-walnut" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          {project.note && (
            <div className="flex gap-3 rounded-2xl border border-caramel/40 bg-caramel/10 p-5">
              <Info size={18} className="mt-0.5 shrink-0 text-walnut" />
              <p className="font-sans text-sm text-ink/80">{project.note}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="eyebrow mb-3">Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full bg-cream px-2.5 py-1 font-sans text-xs text-ink/80">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="eyebrow mb-3">Themes</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full bg-blue-powder/50 px-2.5 py-1 font-sans text-xs text-blue-deep">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Next */}
      <div className="mt-16 border-t border-ink/10 pt-8">
        <Link to={`/profession/projects/${next.id}`} className="group block">
          <p className="eyebrow mb-1">Next project</p>
          <p className="font-serif text-2xl tracking-tight text-ink transition-colors group-hover:text-blue-deep">
            {next.title} →
          </p>
        </Link>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-serif text-2xl tracking-tight">{title}</h2>
      <div className="max-w-reading text-ink/85">{children}</div>
    </section>
  );
}
