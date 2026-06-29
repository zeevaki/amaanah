import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AMANAH — A Voice for New Leadership',
  description:
    'A global manifesto questioning lawmakers, bankers, police, and educators to remember that power is not a possession — it is a trust.',
  openGraph: {
    title: 'AMANAH',
    description: 'Power is not a possession. It is a trust.',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === 'ur';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className="min-h-screen flex flex-col" style={{ background: '#050505', color: '#f0ede8' }}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
