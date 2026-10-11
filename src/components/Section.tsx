import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  /** Editorial section number, e.g. "01" */
  index?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}

/** Editorial section heading: eyebrow + serif title + optional supporting copy. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  children,
  align = 'left',
  as = 'h2',
}: SectionHeadingProps) {
  const Tag = as;
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-reading ${alignCls}`}>
      {(eyebrow || index) && (
        <p className="eyebrow mb-3 flex items-center gap-2">
          {index && <span className="text-walnut">{index}</span>}
          {index && eyebrow && <span className="h-px w-5 bg-ink/20" />}
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-serif font-medium leading-[1.05] tracking-tight ${
          as === 'h1' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {title}
      </Tag>
      {children && <div className="mt-4 text-muted">{children}</div>}
    </div>
  );
}

interface SampleNoteProps {
  children: ReactNode;
  className?: string;
}

/** A small, honest note that content is illustrative / placeholder. */
export function SampleNote({ children, className }: SampleNoteProps) {
  return (
    <p className={`font-sans text-xs italic text-muted ${className ?? ''}`}>{children}</p>
  );
}
