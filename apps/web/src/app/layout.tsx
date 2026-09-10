import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@repo/ui/styles.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Next.js Project Template',
  description: 'Reusable Next.js monorepo starter with shared UI and asset extraction tooling.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} antialiased`}>{children}</body></html>;
}
