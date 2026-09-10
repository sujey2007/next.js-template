import { Button } from './button';
import { Container } from './container';

export function Hero() {
  return (
    <section id="top" className="overflow-hidden border-b border-black/5 bg-white">
      <Container className="section-pad grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Reusable foundation</div>
          <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">Ship polished Next.js sites from a strong starting point.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">A scalable monorepo with shared UI, centralized configuration, a landing-page reference implementation, and tooling for design-asset extraction.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features"><Button>Explore the template</Button></a>
            <a href="#workflow"><Button variant="secondary">See the workflow</Button></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Next.js 16</span><span>React 19</span><span>Tailwind 4</span><span>Turborepo</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-indigo-100 via-white to-slate-100 blur-2xl" />
          <div className="relative rounded-[28px] border border-slate-200 bg-slate-950 p-4 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs text-slate-400"><span>apps/web</span><span>/</span><span>packages/ui</span></div>
            <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-200"><code>{`apps/
  web/
packages/
  ui/
  utils/
  config/
    eslint/
    typescript/
scripts/
  extract-assets.mjs`}</code></pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
