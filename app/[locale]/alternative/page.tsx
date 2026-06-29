import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AlternativePage() {
  const t = useTranslations('alternative');

  return (
    <>
      {/* Chapter Hero */}
      <section
        style={{
          padding: '8rem 1.5rem 5rem',
          maxWidth: '760px',
          margin: '0 auto',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>
          {t('eyebrow')}
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900,
            color: '#f0ede8',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}
        >
          {t('title')}
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontStyle: 'italic',
            color: '#7a7a75',
          }}
        >
          {t('subtitle')}
        </p>
      </section>

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Section 1 — Supreme Court */}
        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
            {t('s1Title')}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8', marginBottom: '1.25rem' }}>
            On the north wall of the United States Supreme Court chamber — the highest court in the land — carved in marble in 1935, stands the figure of Muhammad. He is one of eighteen lawgivers that sculptor Adolph Weinman chose to represent history's greatest architects of governance and law.
          </p>
          <div className="pull-quote">
            The same country that drew redlining maps around Black neighborhoods, that watched two men die on Linfield Road in June 2026, officially acknowledges him as one of the world's greatest lawmakers. That is not a small thing.
          </div>
        </section>

        {/* Section 2 — Constitution of Medina */}
        <section style={{ marginBottom: '4rem', background: '#0a0a0a', padding: '2.5rem', borderRadius: '2px', border: '1px solid #1e1e1e' }}>
          <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
            {t('s2Title')}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8', marginBottom: '1.25rem' }}>
            Muhammad did not inherit a stable city. He arrived in Medina to find a community torn apart by generations of brutal tribal blood feuds — concentrated cycles of retaliatory violence that look remarkably like the "micro-location hot spots" we see on Linfield Road today.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8', marginBottom: '1.5rem' }}>
            He did not send in the army. He gathered every faction — rival tribes, Muslim immigrants, Jewish communities, pagan clans — into one room and negotiated a written social contract: the Constitution of Medina, 622 CE. Many political historians consider it the world's first written constitutional document — predating the Magna Carta by nearly 600 years.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#6a6a65', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Its principles:
          </p>
          {[
            'Membership in the community (Ummah) was based on civic loyalty and a shared defense pact — not blood, ethnicity, or religion.',
            '"The Jews have their religion and the Muslims have theirs" — explicit religious autonomy for all communities.',
            'Each community governed its own internal matters; the Prophet served as a neutral arbitrator for cross-community disputes.',
            'An attack on one neighborhood was an attack on all — collective security that stopped cycles of revenge.',
            'Wealth was a trust (Amanah), not a possession. The Zakat system mandated redistribution within the same community that generated it.',
          ].map((point, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#c9a84c', fontWeight: 700, flexShrink: 0, marginTop: '0.15rem' }}>—</span>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a09a', margin: 0 }}>{point}</p>
            </div>
          ))}
        </section>

        {/* Section 3 — Akbar */}
        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
            {t('s3Title')}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8', marginBottom: '1.25rem' }}>
            Mughal Emperor Akbar ruled over a continent of extraordinary diversity — Muslim, Hindu, Sikh, Buddhist, Jain, Zoroastrian. He did not attempt to force this population into a single national identity. Instead, he built a merit-based administrative system — the Mansabdari — where every officer of state was given a rank based on ability, not birth, not religion, not ethnicity.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8' }}>
            When an official died, their wealth and land reverted entirely to the crown — their children had to earn their own rank. Power was not inherited. It was earned. Hindu Rajput kings, Persian scholars, and Muslim elites served within the same administrative structure.
          </p>
          <div className="pull-quote">
            The tragedy of the 1947 Partition is that it forced the most deeply interwoven civilization on earth into two separate nation-states based on a single identity marker — religion — completely replacing the layered coexistence that Akbar's system had managed for 50 years.
          </div>
        </section>

        {/* Sections 4 & 5 — Persian / Ottoman */}
        <section style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="grid-mobile">
          <div style={{ border: '1px solid #1e1e1e', padding: '1.5rem', borderRadius: '2px' }}>
            <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
              {t('s4Title')}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#8a8a85' }}>
              Cyrus the Great divided his empire into provinces. The central government cared about three things: loyalty, taxes, military contribution. Beyond that — local languages, local laws, local worship. Cyrus famously allowed the exiled Jewish population to return to Jerusalem and rebuild their temple. Not because he converted. Because the system was designed to govern diversity, not erase it.
            </p>
          </div>
          <div style={{ border: '1px solid #1e1e1e', padding: '1.5rem', borderRadius: '2px' }}>
            <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
              {t('s5Title')}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#8a8a85' }}>
              The Ottomans organized people not by geography but by religious community — a millet. Greek Orthodox, Armenian Christians, and Jewish communities each had their own courts and family law. Distinct cultural, linguistic, and religious groups survived completely intact for over 400 years in the same cities without being forced to assimilate.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>
            {t('s6Title')}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8', marginBottom: '1.25rem' }}>
            None of these systems was perfect. The Ottoman Empire had hierarchies. The Mughal Empire fell. The Persian Empire collapsed. But they solved a problem that the modern nation-state consistently fails to solve: how do you govern a diverse, pluralistic population without systematically crushing the minority?
          </p>
          <div className="pull-quote">
            The answer, in each case, was not forced assimilation. It was local autonomy within a shared framework of collective responsibility.
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0bdb8' }}>
            The modern violence in the former Ottoman territories, in the Balkans, in South Asia — was not the inevitable result of ancient hatreds. It was the result of outsiders imposing the Modern Nation-State model onto a multi-cultural imperial reality that had coexisted for centuries.
          </p>
        </section>

        {/* Navigation */}
        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/freedom" style={{ fontSize: '0.8rem', color: '#4a4a45', textDecoration: 'none', letterSpacing: '0.1em' }}>← Are We Truly Free?</Link>
          <Link
            href="/leadership"
            style={{
              fontSize: '0.8rem',
              color: '#c9a84c',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            {t('nextChapter')}: New Leadership →
          </Link>
        </div>
      </article>

      <style>{`
        @media (max-width: 640px) {
          .grid-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
