import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/shared/infrastructure/query-provider';
import { Header } from '@/components/organisms/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Git Server UI',
  description: 'Your private git server ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
