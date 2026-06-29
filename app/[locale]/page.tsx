import { useTranslations } from 'next-intl';
import Link from 'next/link';

function SectionCard({
  href,
  title,
  desc,
  number,
}: {
  href: string;
  title: string;
  desc: string;
  number: string;
}) {
  return (
    <Link href={href} className="section-card">
      <div style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
        {number}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#f5f0e8',
          marginBottom: '0.75rem',
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: '0.9rem', color: '#7a7068', lineHeight: 1.7 }}>
        {desc}
      </div>
      <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#c8952a', letterSpacing: '0.1em' }}>
        Read →
      </div>
    </Link>
  );
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Warm amber radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(ellipse, rgba(200,149,42,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#e8b84b',
              marginBottom: '2rem',
              fontWeight: 600,
            }}
          >
            {t('eyebrow')}
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(5rem, 15vw, 11rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#f5f0e8',
              marginBottom: '1rem',
              textShadow: '0 2px 40px rgba(0,0,0,0.6)',
            }}
          >
            {t('title')}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: '#e8b84b',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
            }}
          >
            {t('subtitle')}
          </p>

          <p
            style={{
              fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
              color: '#a09880',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            {t('tagline')}
          </p>

          <div style={{ width: '3rem', height: '2px', background: '#c8952a', margin: '3rem auto' }} />

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#ddd8cc',
              lineHeight: 1.9,
              maxWidth: '560px',
              margin: '0 auto',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            {t('intro1')}
          </p>

          {/* Scroll cue */}
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#6a6050', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, #c8952a, transparent)' }} />
          </div>
        </div>
      </section>

      {/* The Name Section */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>
          {t('nameSection')}
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
          {t('intro2')}
        </p>

        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '2rem' }}>
          {t('intro3')}
        </p>

        <div className="pull-quote">
          {t('intro4')}
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#f5f0e8',
            marginTop: '2rem',
            marginBottom: '2rem',
            lineHeight: 1.5,
          }}
        >
          {t('notReligion')}
        </p>

        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#8a8070' }}>
          {t('supremeCourt')}
        </p>
      </section>

      {/* Why This Matters */}
      <section
        style={{
          background: '#121009',
          borderTop: '1px solid #2a2420',
          borderBottom: '1px solid #2a2420',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>
            {t('whyMatters')}
          </p>

          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            {t('body1')}
          </p>

          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
              fontStyle: 'italic',
              color: '#c8952a',
              borderLeft: '3px solid #c8952a',
              paddingLeft: '1.5rem',
              margin: '2.5rem 0',
              lineHeight: 1.5,
            }}
          >
            {t('body2')}
          </div>

          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem', marginTop: '3rem' }}>
            {t('missionTitle')}
          </p>

          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '2rem' }}>
            {t('body3')}
          </p>

          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontStyle: 'italic',
              color: '#e8b84b',
              lineHeight: 1.6,
            }}
          >
            "{t('manifestoQuestion')}"
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.7rem',
              color: '#c8952a',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            {t('exploreTitle')}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <SectionCard href="/lines" title={t('card1Title')} desc={t('card1Desc')} number="01" />
            <SectionCard href="/freedom" title={t('card2Title')} desc={t('card2Desc')} number="02" />
            <SectionCard href="/alternative" title={t('card3Title')} desc={t('card3Desc')} number="03" />
            <SectionCard href="/leadership" title={t('card4Title')} desc={t('card4Desc')} number="04" />
          </div>
        </div>
      </section>
    </>
  );
}
