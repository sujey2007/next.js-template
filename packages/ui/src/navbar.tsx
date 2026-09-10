import { Button } from './button';

export function Navbar({ brand = 'ProjectName' }: { brand?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-slate-950">{brand}</a>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-950" href="#features">Features</a>
          <a className="hover:text-slate-950" href="#workflow">Workflow</a>
          <a className="hover:text-slate-950" href="#cta">Contact</a>
        </nav>
        <a href="#cta"><Button>Start a project</Button></a>
      </div>
    </header>
  );
}
