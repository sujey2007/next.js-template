import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@repo/utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'bg-[var(--primary)] text-white shadow-lg shadow-indigo-500/15 hover:brightness-105 focus:ring-indigo-300',
        variant === 'secondary' && 'border border-[var(--border)] bg-white text-slate-900 shadow-sm hover:bg-slate-50 focus:ring-slate-300',
        variant === 'ghost' && 'text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
