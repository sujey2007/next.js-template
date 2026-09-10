import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">{eyebrow}</div> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
