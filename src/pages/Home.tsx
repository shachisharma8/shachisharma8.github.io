import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';
import { getProject } from '@/data/projects';
import { skillGroups, coreSkills } from '@/data/skills';
import { career, certifications } from '@/data/career';
import { images } from '@/data/assets';
import { SampleImage } from '@/components/SampleImage';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

function pick(ids: string[]) {
  return ids.map(getProject).filter((p): p is NonNullable<typeof p> => Boolean(p));
}

// Work grouped by employer (tiles, grouped like the skills section).
const workByCompany = [
  {
    company: career[0].company,
    role: career[0].role,
    period: `${career[0].start} – ${career[0].end}`,
    projects: pick(['client-reporting', 'report-memory-optimization', 'payment-affirmation']),
  },
  {
    company: career[1].company,
    role: career[1].role,
    period: `${career[1].start} – ${career[1].end}`,
    projects: pick(['payment-platform', 'payment-reconciliation', 'sql-db-optimization']),
  },
];

const aiProjects = pick(['ai-incident-resolution', 'ai-food-tracker', 'ai-nutrition-comparator']);

export function Home() {
  useDocumentMeta(
    'Shachi Sharma — Backend Software Engineer',
    'Backend software engineer building high-throughput payment systems in Java & Spring — performance work and practical AI in real workflows.',
  );
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
  });

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="paper-grain relative overflow-hidden">
        <div className="container-editorial pb-10 pt-10 sm:pt-14">
          <motion.div {...fade(0)} className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h1 className="font-display text-[clamp(3.25rem,13vw,9rem)] leading-[0.9] tracking-[-0.02em]">
              Shachi<span className="text-blue-deep">.</span>
            </h1>
            <div className="pb-2 sm:text-right">
              <p className="font-serif text-xl leading-tight text-ink sm:text-2xl">{career[0].company}</p>
              <p className="mt-1 font-sans text-sm text-muted">{career[0].role}</p>
            </div>
          </motion.div>

          <div className="mt-8 h-px w-full bg-ink/10" />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <motion.p {...fade(0.05)} className="eyebrow mb-5">
                Software Engineer · {profile.city}
              </motion.p>
              <motion.h2
                {...fade(0.1)}
                className="font-serif text-[clamp(2.3rem,5.5vw,4.25rem)] font-medium leading-[1.02] tracking-tight"
              >
                High-throughput payment systems, <span className="italic text-blue-deep">built to scale.</span>
              </motion.h2>
              <motion.p {...fade(0.16)} className="mt-6 max-w-reading text-lg text-muted">
                I design and build the backend services that create, process, and settle
                high-volume payments — reliably, accurately, and on time, even at a scale of
                millions of events. Over the past five years I’ve done this primarily in Java and
                Spring, applying distributed-systems principles to mission-critical financial
                workflows.
              </motion.p>
              <motion.p {...fade(0.2)} className="mt-4 max-w-reading text-ink/80">
                More recently, I’ve focused on applying AI within these systems where it delivers
                measurable value — automating well-defined work while escalating anything uncertain
                to human review.
              </motion.p>

              <motion.div {...fade(0.26)} className="mt-9 flex flex-wrap gap-3">
                <Link to="/profession/projects" className="btn btn-primary">
                  See the work <ArrowUpRight size={16} />
                </Link>
                {/* Résumé is shared on request (not hosted publicly) — contact instead. */}
                <a href={`mailto:${profile.contact.email}`} className="btn btn-ghost">
                  <Mail size={16} /> Get in touch
                </a>
              </motion.div>
            </div>

            <motion.div {...fade(0.12)} className="relative">
              <div className="film-frame -rotate-1">
                <SampleImage asset={images.profession.screen} priority className="aspect-[4/3]" />
              </div>
              <div className="absolute -bottom-8 -left-4 hidden w-40 rotate-2 sm:block">
                <div className="film-frame">
                  <SampleImage asset={images.profession.code} className="aspect-square" sample={false} />
                </div>
              </div>
              <span className="absolute -bottom-7 right-2 rotate-2 font-hand text-xl text-walnut/70">
                built to stay calm under load
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Core skills ---------------- */}
      <section className="container-editorial pt-14 sm:pt-20">
        <motion.div {...fade(0)}>
          <p className="eyebrow mb-4">Core skills</p>
          <ul className="flex flex-wrap gap-2.5">
            {coreSkills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/10 bg-paper px-4 py-2 font-sans text-sm text-ink shadow-frame"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ---------------- 01 · My work ---------------- */}
      <section className="container-editorial pt-16 sm:pt-24">
        <motion.div {...fade(0)} className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2">
              <span className="text-walnut">01</span>
              <span className="h-px w-5 bg-ink/20" /> Experience in practice
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">My work</h2>
          </div>
          <Link to="/profession/projects" className="inline-flex items-center gap-1.5 link-underline">
            All projects <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        <div className="space-y-12">
          {workByCompany.map((group, gi) => (
            <motion.div key={group.company} {...fade(gi * 0.06)}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                <h3 className="font-serif text-2xl tracking-tight">{group.company}</h3>
                <p className="font-sans text-sm text-muted">{group.role} · {group.period}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- 02 · Technical skills ---------------- */}
      <section className="container-editorial pt-16 sm:pt-24">
        <motion.div {...fade(0)} className="mb-8">
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span className="text-walnut">02</span>
            <span className="h-px w-5 bg-ink/20" /> What I work with
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Technical skills</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <motion.div key={g.id} {...fade(i * 0.04)} className="rounded-2xl border border-ink/10 bg-paper p-6">
              <h3 className="font-serif text-xl">{g.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{g.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.core.map((s) => (
                  <span key={s} className="rounded-full bg-blue-powder/50 px-2.5 py-1 font-sans text-xs text-blue-deep">{s}</span>
                ))}
                {g.exploring?.map((s) => (
                  <span key={s} className="rounded-full border border-dashed border-walnut/40 px-2.5 py-1 font-sans text-xs text-walnut">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- 03 · AI Projects ---------------- */}
      <section className="mt-16 bg-cream sm:mt-24">
        <div className="container-editorial py-14 sm:py-20">
          <motion.div {...fade(0)} className="mb-8 max-w-reading">
            <p className="eyebrow mb-3 flex items-center gap-2">
              <span className="text-walnut">03</span>
              <span className="h-px w-5 bg-ink/20" /> Building with AI
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">AI projects</h2>
            <p className="mt-3 text-muted">
              Applying agents and multimodal models to real, everyday problems — reading messy inputs,
              producing structured answers, and acting on them.
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {aiProjects.map((p, i) => (
              <motion.div key={p.id} {...fade(i * 0.05)}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Deep Learning Specialization ---------------- */}
      {certifications.map((cert) => (
        <section key={cert.id} className="container-editorial pt-16 sm:pt-24">
          <motion.div {...fade(0)} className="rounded-3xl border border-ink/10 bg-paper p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="eyebrow mb-3 flex items-center gap-2">
                  <GraduationCap size={14} className="text-walnut" /> Continuing education
                </p>
                <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  {cert.title}
                </h2>
                <p className="mt-2 font-sans text-sm text-muted">{cert.issuer}</p>
                {cert.instructors && (
                  <p className="mt-0.5 font-sans text-sm text-muted">with {cert.instructors}</p>
                )}
                <p className="mt-4 max-w-reading text-ink/80">{cert.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span key={s} className="rounded-full bg-blue-powder/50 px-2.5 py-1 font-sans text-xs text-blue-deep">{s}</span>
                  ))}
                </div>
              </div>
              <ol className="space-y-2.5">
                {cert.courses.map((course, i) => (
                  <li key={course} className="flex gap-3 rounded-xl border border-ink/10 bg-cream/60 p-3.5">
                    <span className="font-serif text-lg leading-none text-walnut">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-ink/85">{course}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </section>
      ))}

      {/* ---------------- 04 · Experience ---------------- */}
      <section className="container-editorial pt-16 sm:pt-24">
        <motion.div {...fade(0)} className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3 flex items-center gap-2">
              <span className="text-walnut">04</span>
              <span className="h-px w-5 bg-ink/20" /> The path so far
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Experience</h2>
          </div>
          <Link to="/profession/experience" className="inline-flex items-center gap-1.5 link-underline">
            Full timeline <ArrowRight size={15} />
          </Link>
        </motion.div>

        <ol className="space-y-4">
          {career.map((c, i) => (
            <motion.li
              key={c.id}
              {...fade(i * 0.05)}
              className="flex flex-col gap-1 rounded-2xl border border-ink/10 bg-paper p-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl">{c.company}</h3>
                  {c.current && (
                    <span className="rounded-full bg-sage/25 px-2 py-0.5 font-sans text-[11px] font-medium text-[#55614f]">Current</span>
                  )}
                </div>
                <p className="text-muted">{c.role}</p>
              </div>
              <span className="font-sans text-sm text-muted">{c.start} — {c.end}</span>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ---------------- 05 · Beyond the code (Person) ---------------- */}
      <section className="container-editorial pt-16 sm:pt-24">
        <motion.div {...fade(0)}>
          <Link
            to="/person"
            className="group relative grid overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-shadow hover:shadow-lift md:grid-cols-[1.1fr_1fr]"
          >
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow mb-3 flex items-center gap-2">
                <span className="text-walnut">05</span>
                <span className="h-px w-5 bg-ink/20" /> Beyond the code
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                The person behind the engineer.
              </h2>
              <p className="mt-3 max-w-md text-muted">
                I care a lot about building systems that stay calm under pressure — and away from the
                keyboard, I’m usually on a mountain trail, in a secondhand bookshop, or somewhere with
                good afternoon light. The other half of the story lives here.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm text-blue-deep">
                Meet the person <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4 sm:p-6">
              <SampleImage asset={images.travel.switzerland.cover} sample={false} className="aspect-[3/4] rounded-xl" />
              <SampleImage asset={images.library.shelf} sample={false} className="aspect-[3/4] rounded-xl" />
              <SampleImage asset={images.everyday.coffee} sample={false} className="aspect-[3/4] rounded-xl" />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section className="container-editorial py-16 sm:py-24">
        <div className="rounded-3xl bg-blue-powder/50 p-8 sm:p-12">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Open to work in India, Germany, and the EU.
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`mailto:${profile.contact.email}`} className="btn btn-primary"><Mail size={16} /> {profile.contact.email}</a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"><Linkedin size={16} /> LinkedIn</a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              title={profile.contact.githubPlaceholder ? 'Placeholder — add your GitHub URL in src/data/profile.ts' : undefined}
            >
              <Github size={16} /> GitHub {profile.contact.githubPlaceholder && <span className="text-xs text-muted">(add link)</span>}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
