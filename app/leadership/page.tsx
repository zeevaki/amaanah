import Link from 'next/link';

function Challenge({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '4rem', paddingBottom: '4rem', borderBottom: '1px solid #1a1410' }}>
      <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>{title}</p>
      {children}
    </section>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <section style={{ padding: '8rem 1.5rem 5rem', maxWidth: '760px', margin: '0 auto', borderBottom: '1px solid #2a2420' }}>
        <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>Chapter Four</p>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, color: '#f5f0e8', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          A New Leadership
        </h1>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontStyle: 'italic', color: '#7a7068' }}>
          The Questions That Cannot Wait
        </p>
      </section>

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <Challenge title="To the Lawmakers">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>You have the maps. You know where the redlining happened. You know which neighborhoods the highways cut through. You know where the sidewalks end and the street lights stop. You have had this data for decades.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>The question is not whether you know. The question is: what is your Amaanah to the people who gave you power?</p>
          <div className="pull-quote">If true individual liberty requires a real starting line — not a paper one — then your job is not to protect the wealth that already exists. Your job is to build the floor that makes liberty real.</div>
        </Challenge>

        <Challenge title="To the Bankers">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>The banking desert in South Dallas is not a market outcome. It is the long shadow of a federal policy that drew red lines in the 1930s. There are still communities in Southern Dallas with a fraction of the bank branches that exist north of I-30.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>The Zakat principle is not a religious demand. It is a governance principle: wealth generated in a community belongs, in part, to that community. Predatory lending — what Islamic governance calls Riba — is not a market freedom. It is an act of violence against the desperate.</p>
          <div className="pull-quote">When credit is inaccessible in a community, underground economies fill the gap. That is not a cultural failing. It is a predictable, mathematical outcome of deliberate financial exclusion.</div>
        </Challenge>

        <Challenge title="To the Police">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>You cannot police a neighborhood out of a crisis that was created by economic exclusion.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>The Constitution of Medina understood this 1,400 years ago. Muhammad did not solve Medina's tribal violence by sending in soldiers. He solved it by creating a covenant — a shared agreement between all factions — backed by access to economic opportunity.</p>
          <div className="pull-quote">Hot spot policing, when used in isolation, treats the symptom. The disease is the infrastructure desert, the school with the crumbling roof, the absent bank, the vacant lot that became a risk terrain.</div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>The data from Dallas's own Violent Crime Reduction Plan shows that gun violence concentrates in micro-locations — sometimes a single intersection. The question is not just: who is shooting? The question is: what did we put in that intersection, and what did we take away?</p>
        </Challenge>

        <Challenge title="To the Educators">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>A child in South Dallas and a child in Plano are told they have the same future. The evidence says otherwise.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>In Pakistan's public schools. In India's government schools. In every country where education funding follows wealth rather than need, the system is not failing — it is working exactly as designed.</p>
          <div className="pull-quote">The alternative is not charity. It is Amaanah. The acknowledgment that a child's potential is a trust — given to educators by society — to be returned, in full, to every child equally.</div>
        </Challenge>

        <Challenge title="On Climate Change">
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>The warming planet is not a coincidence. It is the bill for a century of unfettered capitalism — an economic philosophy that had no concept of Amaanah, no concept of the earth as a trust.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>In Islamic governance philosophy, stewardship of the earth — Khalifah — is a central obligation. The earth is not a resource to be consumed. It is a trust held in common, to be returned to future generations in at least the same condition it was received.</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>The wars over oil — many of them in the very regions whose borders were drawn by Sykes-Picot — are not separate from climate change. They are the same story: the treatment of shared resources as private property to be extracted, exported, and burned.</p>
          <div className="pull-quote">A leadership that remembered its Amaanah would not treat the atmosphere as an open sewer. It would not trade the future of every child on earth for this quarter's profit.</div>
        </Challenge>

        <section style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>The Question</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            Two men died on Linfield Road in June 2026. A million people fled across the Radcliffe Line in 1947. The Arctic is warming. The schools in South Dallas have metal detectors and the schools in Plano have science labs.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '2.5rem' }}>
            These are not separate problems. They are one problem, wearing different faces. The problem is the absence of Amaanah.
          </p>
          <div style={{ border: '1px solid rgba(200,149,42,0.2)', padding: '3rem 2rem', textAlign: 'center', background: 'rgba(200,149,42,0.03)' }}>
            <p style={{ fontSize: '0.7rem', color: '#5a5040', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              The question for every person who holds power over another person's life
            </p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', fontStyle: 'italic', color: '#e8b84b', lineHeight: 1.5 }}>
              "Do you hold your power as a possession, or as a trust?"
            </p>
          </div>
        </section>

        <div style={{ borderTop: '1px solid #2a2420', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/alternative" style={{ fontSize: '0.8rem', color: '#4a4040', textDecoration: 'none', letterSpacing: '0.1em' }}>← The Alternative</Link>
          <Link href="/" style={{ fontSize: '0.8rem', color: '#c8952a', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            Return to Beginning →
          </Link>
        </div>
      </article>
    </>
  );
}
