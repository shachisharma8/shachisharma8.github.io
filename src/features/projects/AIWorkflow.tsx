import {
  Inbox,
  ScanText,
  Boxes,
  Wrench,
  ShieldCheck,
  Gauge,
  GitBranch,
  ScrollText,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface Stage {
  icon: ReactNode;
  title: string;
  detail: string;
}

const stages: Stage[] = [
  { icon: <Inbox size={18} />, title: 'Input', detail: 'Email content, structured tables, logs, or a diff.' },
  { icon: <ScanText size={18} />, title: 'Context extraction', detail: 'Pull the relevant signal from noisy, inconsistent sources.' },
  { icon: <Boxes size={18} />, title: 'Structured processing', detail: 'Normalize into a consistent, typed shape.' },
  { icon: <Wrench size={18} />, title: 'Tool invocation', detail: 'Call the right system/API with validated arguments.' },
  { icon: <ShieldCheck size={18} />, title: 'Validation', detail: 'Check outputs against rules and schemas.' },
  { icon: <Gauge size={18} />, title: 'Confidence evaluation', detail: 'Score certainty against a configurable threshold.' },
  { icon: <GitBranch size={18} />, title: 'Act or escalate', detail: 'Automate above threshold; route to a human below it.' },
  { icon: <ScrollText size={18} />, title: 'Logging & audit', detail: 'Record every decision for traceability.' },
];

/** A responsive, clearly-conceptual diagram of an agentic workflow. */
export function AIWorkflow() {
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-sage/25 px-2.5 py-0.5 font-sans text-[11px] font-medium uppercase tracking-wider text-[#55614f]">
          Conceptual
        </span>
        <p className="font-sans text-sm text-muted">
          A general pattern, not a diagram of a specific production system.
        </p>
      </div>

      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <li key={s.title} className="relative flex flex-col rounded-2xl border border-ink/10 bg-paper p-4">
            <div className="flex items-center gap-2 text-blue-deep">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-powder/60">{s.icon}</span>
              <span className="font-sans text-[11px] text-muted">Step {i + 1}</span>
            </div>
            <h3 className="mt-3 font-serif text-lg leading-tight">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.detail}</p>
          </li>
        ))}
      </ol>

      <p className="mt-5 max-w-reading font-sans text-xs italic text-muted">
        Confidence thresholds (e.g. 90%) are configurable design rules. Low-confidence cases escalate
        to human review; failures are handled explicitly and logged for auditability.
      </p>
    </div>
  );
}
