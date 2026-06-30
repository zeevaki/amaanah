import Link from 'next/link';

function SectionCard({ href, title, desc, number }: { href: string; title: string; desc: string; number: string }) {
  return (
    <Link href={href} className="section-card">
      <div style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>{number}</div>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '0.75rem', lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color: '#7a7068', lineHeight: 1.7 }}>{desc}</div>
      <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#c8952a', letterSpacing: '0.1em' }}>Read →</div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '6rem 1.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px', background: 'radial-gradient(ellipse, rgba(200,149,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#e8b84b', marginBottom: '2rem', fontWeight: 600 }}>
            A Manifesto on Leadership
          </p>
          <h1 style={{ fontFamily: "'Cinzel Decorative', 'Playfair Display', Georgia, serif", fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '0.12em', color: '#f5f0e8', marginBottom: '1.5rem' }}>
            AMAANAH
          </h1>
          <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', color: '#a09880', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '3rem' }}>
            A Voice for New Leadership
          </p>
          <div style={{ width: '3rem', height: '2px', background: '#c8952a', margin: '0 auto 3rem' }} />
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#ddd8cc', lineHeight: 1.9, maxWidth: '560px', margin: '0 auto', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
            Before the revelation. Before the prophecy. Before the religion.
          </p>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#6a6050', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, #c8952a, transparent)' }} />
          </div>
        </div>
      </section>

      {/* The Name */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>The Name</p>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
          The people of Mecca called him Al-Amin — The Trustworthy. And Al-Sadiq — The Truthful. Not because he was a prophet. Because he was a leader.
        </p>
        <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '2rem' }}>
          He had not yet received a single verse of guidance when his enemies chose him to arbitrate their disputes. When merchants handed him their goods to hold, they didn't ask for a receipt. His word was the receipt.
        </p>
        <div className="pull-quote">This website takes its name from that word — Amaanah. The trust.</div>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: '#f5f0e8', marginTop: '2rem', marginBottom: '2rem', lineHeight: 1.5 }}>
          Not a religious statement. A leadership one.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#8a8070' }}>
          On the north wall of the United States Supreme Court, carved in marble among eighteen of history's greatest lawgivers, stands the figure of Muhammad. The same country that drew redlining maps around Black neighborhoods officially acknowledges him as one of the world's greatest architects of governance.
        </p>
      </section>

      {/* Why This Matters */}
      <section style={{ background: '#121009', borderTop: '1px solid #2a2420', borderBottom: '1px solid #2a2420', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>Why This Matters Now</p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            Two men were shot dead on Linfield Road in South Dallas on consecutive days in June 2026. These were not random acts of nature. They were the mathematically predictable result of a century of decisions made by people in rooms far from Linfield Road — people who drew lines on maps, redirected tax dollars, and designed a system where some neighborhoods get banks and others get bullets.
          </p>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontStyle: 'italic', color: '#c8952a', borderLeft: '3px solid #c8952a', paddingLeft: '1.5rem', margin: '2.5rem 0', lineHeight: 1.5 }}>
            The problem is not South Dallas. The problem is leadership that forgot its Amaanah.
          </div>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem', marginTop: '3rem' }}>The Mission</p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '2rem' }}>
            This manifesto is a question directed at lawmakers, bankers, police chiefs, and educators — not just in Dallas, but in Islamabad, Mumbai, Madrid, and every city where the gap between the powerful and the powerless is treated as natural rather than engineered.
          </p>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: '#e8b84b', lineHeight: 1.6 }}>
            "What would it look like if those who hold power actually treated it as a trust?"
          </div>
        </div>
      </section>

      {/* Chapter Cards */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '3rem', textAlign: 'center' }}>Explore the Questions</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <SectionCard href="/lines" number="01" title="The Lines" desc="How borders became weapons — from the Sykes-Picot Agreement to the I-30 divide in Dallas." />
            <SectionCard href="/freedom" number="02" title="Are We Truly Free?" desc="The difference between a paper right and a real one. On liberty, school funding, and the Second Amendment." />
            <SectionCard href="/alternative" number="03" title="The Alternative" desc="Models of governance that actually worked: the Constitution of Medina, Akbar's empire, and what the Supreme Court admits." />
            <SectionCard href="/leadership" number="04" title="New Leadership" desc="Direct questions to lawmakers, bankers, police, and educators. On climate. On the Amaanah they owe." />
          </div>
        </div>
      </section>
    </>
  );
}
