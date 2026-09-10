import { CTA } from '@repo/ui/cta';
import { FeatureGrid } from '@repo/ui/feature-grid';
import { Footer } from '@repo/ui/footer';
import { Hero } from '@repo/ui/hero';
import { Navbar } from '@repo/ui/navbar';

export default function Home() {
  return (
    <>
      <Navbar brand="ProjectTemplate" />
      <main>
        <Hero />
        <FeatureGrid />
        <section id="workflow" className="section-pad bg-white">
          <div className="container-shell">
            <div className="grid gap-5 md:grid-cols-3">
              {[['1', 'Clone', 'Create a new project from this repository and rename the app/package identifiers.'], ['2', 'Brand', 'Update CSS tokens, fonts, copy, imagery, metadata, and reusable content blocks.'], ['3', 'Ship', 'Run the shared validation tasks, build the app, and deploy to your preferred platform.']].map(([step, title, description]) => (
                <div key={step} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{step}</div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
