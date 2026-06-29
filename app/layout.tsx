import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AMAANAH',
  description: 'A manifesto on leadership, trust, and the responsibility of power.',
  metadataBase: new URL('https://amaanah.world'),
  openGraph: {
    title: 'AMAANAH',
    description: 'A manifesto on leadership, trust, and the responsibility of power.',
    url: 'https://amaanah.world',
    siteName: 'AMAANAH',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
