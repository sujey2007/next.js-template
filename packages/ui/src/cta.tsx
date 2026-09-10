import { Button } from './button';
import { Container } from './container';

export function CTA() {
  return (
    <section id="cta" className="section-pad bg-slate-950 text-white">
      <Container className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl"><p className="text-sm font-semibold text-indigo-300">Ready to customize</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Duplicate the foundation, then make it yours.</h2><p className="mt-4 leading-7 text-slate-300">Replace the brand tokens, content, imagery, and project-specific packages while keeping the shared architecture intact.</p></div>
        <a href="#top"><Button>Back to top</Button></a>
      </Container>
    </section>
  );
}
