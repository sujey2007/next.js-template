import { Container } from './container';

export function Footer() {
  return <footer className="border-t border-[var(--border)] bg-white"><Container className="flex flex-col gap-2 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 ProjectName. Replace with your brand.</span><span>Built on a reusable Next.js foundation.</span></Container></footer>;
}
