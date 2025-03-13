import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessible Next.js Template',
  description: 'A simple template for an accessible Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}