import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink/10 bg-cream">
      <div className="container-editorial pt-16">
        {/* Big wordmark + tagline */}
        <div className="flex flex-col gap-8 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-[-0.02em]">
              Shachi<span className="text-blue-deep">.</span>
            </p>
            <p className="mt-5 max-w-sm font-sans text-sm text-muted">{profile.city}</p>
          </div>
          <a href={`mailto:${profile.contact.email}`} className="btn btn-primary self-start lg:self-auto">
            Say hello <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Columns */}
        <div className="grid gap-10 border-t border-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Footer — work">
            <p className="eyebrow mb-4">Work</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-underline" to="/">Overview</Link></li>
              <li><Link className="link-underline" to="/profession/projects">Projects</Link></li>
              <li><Link className="link-underline" to="/profession/experience">Experience</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer — the person">
            <p className="eyebrow mb-4">The Person</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="link-underline" to="/person">Overview</Link></li>
              <li><Link className="link-underline" to="/person/library">The Library</Link></li>
              <li><Link className="link-underline" to="/person/everyday">Everyday</Link></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="inline-flex items-center gap-2 link-underline" href={`mailto:${profile.contact.email}`}>
                  <Mail size={15} /> Email
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 link-underline" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 link-underline"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  title={profile.contact.githubPlaceholder ? 'Placeholder — add your GitHub URL in src/data/profile.ts' : undefined}
                >
                  <Github size={15} /> GitHub{profile.contact.githubPlaceholder && <span className="text-[10px] text-muted">(add link)</span>}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Colophon</p>
            <p className="text-sm text-muted">
              Built with React, TypeScript, Vite &amp; Tailwind. Design inspired by editorial travel
              journals and film-photo archives.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-editorial flex flex-col gap-1 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="italic">Sample stock photos &amp; illustrative entries — not personal archives.</p>
        </div>
      </div>
    </footer>
  );
}
