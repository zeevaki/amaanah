'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const localeLabels: Record<string, string> = {
  en: 'EN',
  ur: 'اردو',
  es: 'ES',
  hi: 'हि',
};

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLocalePath = (newLocale: string) => {
    // Strip the current locale prefix and replace with new one
    const segments = pathname.split('/').filter(Boolean);
    const locales = ['en', 'ur', 'es', 'hi'];
    if (locales.includes(segments[0])) {
      segments.shift();
    }
    const rest = segments.length ? '/' + segments.join('/') : '';
    return newLocale === 'en' ? rest || '/' : `/${newLocale}${rest}`;
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/lines', label: t('lines') },
    { href: '/freedom', label: t('freedom') },
    { href: '/alternative', label: t('alternative') },
    { href: '/leadership', label: t('leadership') },
  ];

  const getHref = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  return (
    <nav
      style={{
        borderBottom: '1px solid #1e1e1e',
        background: 'rgba(10,8,5,0.96)',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <Link
            href={getHref('/')}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#c9a84c',
              letterSpacing: '0.15em',
              textDecoration: 'none',
            }}
          >
            AMAANAH
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9a9a90',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9a9a90')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language switcher */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {(['en', 'ur', 'es', 'hi'] as const).map((l) => (
              <Link
                key={l}
                href={getLocalePath(l)}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: locale === l ? 700 : 400,
                  color: locale === l ? '#c9a84c' : '#5a5a55',
                  textDecoration: 'none',
                  padding: '0.25rem 0.4rem',
                  borderRadius: '2px',
                  border: locale === l ? '1px solid #c9a84c30' : '1px solid transparent',
                  transition: 'all 0.2s',
                  fontFamily: l === 'ur' ? "'Noto Nastaliq Urdu', serif" : l === 'hi' ? "'Noto Sans Devanagari', sans-serif" : 'inherit',
                }}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
