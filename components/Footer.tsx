import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      style={{
        borderTop: '1px solid #1e1e1e',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: '#c9a84c',
            marginBottom: '1rem',
          }}
        >
          {t('tagline')}
        </div>
        <div
          style={{
            fontSize: '0.8rem',
            color: '#4a4a45',
            letterSpacing: '0.05em',
          }}
        >
          {t('rights')}
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '2rem', height: '1px', background: '#1e1e1e' }} />
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '0.9rem',
              color: '#2a2a25',
              letterSpacing: '0.1em',
            }}
          >
            AMAANAH
          </span>
          <div style={{ width: '2rem', height: '1px', background: '#1e1e1e' }} />
        </div>
      </div>
    </footer>
  );
}
