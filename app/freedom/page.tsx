import Link from 'next/link';

export default function FreedomPage() {
  return (
    <>
      <section style={{ padding: '8rem 1.5rem 5rem', maxWidth: '760px', margin: '0 auto', borderBottom: '1px solid #2a2420' }}>
        <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>Chapter Two</p>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 900, color: '#f5f0e8', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Are We Truly Free?
        </h1>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontStyle: 'italic', color: '#7a7068' }}>
          The Difference Between a Paper Right and a Real One
        </p>
      </section>

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>
            Nigel Calhoun was 28 years old. He was shot in the same area where Lee Womack Jr. had been killed the morning before. The system will ask: why does gun violence concentrate here? It will rarely ask: why does investment not?
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>Two Kinds of Freedom</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            Philosophers call them <strong style={{ color: '#e8b84b' }}>Negative Liberty</strong> and <strong style={{ color: '#e8b84b' }}>Positive Liberty</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            Negative Liberty is what the American system was built on: the absence of obstacles. The government cannot legally stop you from buying a home in North Dallas, attending an elite university, starting a company. You are, on paper, free.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            Positive Liberty is the actual capacity to act on your desires. If decades of redlining denied your family the ability to build generational wealth, the legal freedom to buy a million-dollar home is entirely meaningless. It is a paper right that cannot be exercised in reality.
          </p>
          <div className="pull-quote">When a system gives one person a map with paved roads and banks, and another person a map with red lines and infrastructure deserts, it is not a fair race. It is a rigged game disguised as a meritocracy.</div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>The School System</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            In Plano, Texas — a wealthy suburb north of Dallas — a small property tax rate generates massive school revenue. High-paid teachers. STEM labs. College counselors. Advanced courses.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            In South Dallas, decades of deliberately depressed land values — engineered by redlining — mean that even high tax rates yield far less revenue. Schools spend their limited budgets on maintenance and security rather than enrichment. Experienced teachers migrate to wealthier districts. First-year teachers and uncertified substitutes are left for the students who need the most experienced instruction.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            Texas introduced the "Robin Hood" recapture plan in 1993. But the state uses recapture money to fill gaps in its own general budget rather than injecting it fully into underfunded schools. The fix was broken by design.
          </p>
          <div className="pull-quote">Two children are told they have the same individual liberty to become a doctor or an engineer. The system decided the winner before the race began.</div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>
            This is not unique to Dallas. In Pakistan's public schools. In India's government schools. In every country where education funding follows wealth rather than need, the system is not failing — it is working exactly as designed.
          </p>
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>The Second Amendment</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            The Second Amendment was written in 1789 as a concession to Southern slave states. The "well-regulated Militia" it protected was, in practice, the slave patrol — armed groups of white men whose purpose was to prevent enslaved people from escaping or revolting. Southern states refused to ratify the Constitution without a guarantee that the federal government could not disarm these local forces.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            In 2008, the Supreme Court's District of Columbia v. Heller ruling transformed this into an individual right. Gun ownership became a sacred individual liberty — and the gun industry became a political machine worth billions.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            The consequences are felt unequally. A gated suburban community rarely sees the daily fallout of gun violence. In under-resourced neighborhoods where the economic floor has been systematically removed, easy access to guns acts like gasoline on a fire.
          </p>
          <div className="pull-quote">And instead of fixing the gun laws or the poverty, the system forces the burden onto the children — asking elementary school students to carry clear plastic backpacks and practice active shooter drills. Protecting the "liberty" of gun owners at the direct expense of the safety of children.</div>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontStyle: 'italic', color: '#e8b84b', lineHeight: 1.5, marginTop: '2rem' }}>
            The question is not: are we legally free? The question is: are we actually free?
          </p>
        </section>

        <div style={{ borderTop: '1px solid #2a2420', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/lines" style={{ fontSize: '0.8rem', color: '#4a4040', textDecoration: 'none', letterSpacing: '0.1em' }}>← The Lines</Link>
          <Link href="/alternative" style={{ fontSize: '0.8rem', color: '#c8952a', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            Continue Reading: The Alternative →
          </Link>
        </div>
      </article>
    </>
  );
}
