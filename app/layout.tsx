import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Norivex Cyber | Practical security for growing businesses',
  description: 'Permission-based cybersecurity assessments and practical recommendations for local businesses.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
