import { Container } from './container';
import { SectionHeading } from './section-heading';

const features = [
  ['01', 'Scalable monorepo', 'Apps and shared packages stay cleanly separated, so the foundation can grow without turning into a mega-package.'],
  ['02', 'Reusable design system', 'Shared buttons, layout primitives, headings, navigation, hero, feature, CTA, and footer components provide a fast starting vocabulary.'],
  ['03', 'Asset extraction workflow', 'A CLI helper can inspect a public webpage, discover styles, colors, fonts, and original image URLs, then save the results into a project asset bundle.'],
  ['04', 'Standardized configuration', 'TypeScript and ESLint configs are centralized for consistent conventions across apps and future packages.'],
  ['05', 'Reference landing page', 'The included page demonstrates how to compose shared primitives into a responsive marketing surface.'],
  ['06', 'Confluence-ready documentation', 'Repository notes explain setup, architecture, open-source references, customization, and deployment handoff.'],
];

export function FeatureGrid() {
  return (
    <section id="features" className="section-pad bg-[var(--background)]">
      <Container>
        <SectionHeading eyebrow="Foundation" title="Everything needed to start the next project faster" description="The template is opinionated where consistency helps, and intentionally easy to replace where each project needs its own identity." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([number, title, description]) => (
            <article key={number} className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-xs font-bold tracking-[0.2em] text-slate-400">{number}</div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
