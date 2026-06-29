import Link from 'next/link';

export default function LinesPage() {
  return (
    <>
      <section style={{ padding: '8rem 1.5rem 5rem', maxWidth: '760px', margin: '0 auto', borderBottom: '1px solid #2a2420' }}>
        <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem' }}>Chapter One</p>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, color: '#f5f0e8', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          The Lines
        </h1>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontStyle: 'italic', color: '#7a7068' }}>
          How Borders Became Weapons
        </p>
      </section>

      <article style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>June 27–28, 2026 — Linfield Road</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            Two names: Lee Womack Jr. and Nigel Calhoun. Two deaths, twelve hours apart, on the same street in South Dallas. By June 28, 2026, the police were still collecting tips.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            This is where we begin. Not in 1494. Not in 1916. Here. Now. On this specific street, in this specific city, with these specific names.
          </p>
          <div className="pull-quote">Because the violence on Linfield Road did not begin on Linfield Road.</div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>The I-30 Divide</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            Dallas residents describe it in three words: the I-30 divide. North of the highway: wealth, bank branches, luxury development, top-funded schools. South: infrastructure deserts, food deserts, credit deserts.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>
            This was not the free market at work. This was the government's Home Owners' Loan Corporation, which in the 1930s drew literal red lines around neighborhoods they deemed "hazardous" for investment — hazardous meaning: too many Black residents, too many Mexican residents, too many immigrants.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>The Lines Go Deeper</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.5rem' }}>
            The redlining maps in Dallas were drawn using the same imperial logic as the lines drawn across continents. The same mindset. The same system.
          </p>
          {[
            { title: 'The Sykes-Picot Agreement (1916)', body: 'Two diplomats — Mark Sykes of Britain and François Picot of France — sat with a map of the Middle East and drew straight lines across the desert using a ruler. They ignored centuries of tribal, religious, and ethnic realities. They forced rival groups into the same artificial countries and split unified communities in half. A century of Middle Eastern conflict traces directly to one afternoon with a ruler.' },
            { title: 'The Radcliffe Line (1947)', body: 'A British lawyer named Cyril Radcliffe — who had never visited India — was given five weeks to draw the border separating India and Pakistan. He used outdated maps and census data. He drew the line through villages, through fields, through houses. Fifteen million people fled. Over a million died. The rivalry between two nuclear-armed nations continues today because of five weeks of work by a man who had never been to the country he was dividing.' },
            { title: 'The Berlin Conference (1884–85)', body: 'Fourteen European powers gathered in Berlin to divide the African continent. Not one African leader was in the room. They drew geometric borders across 1,000 distinct cultures and kingdoms. The post-colonial civil conflicts that followed were not coincidental. They were designed.' },
          ].map((item) => (
            <div key={item.title} style={{ borderLeft: '2px solid #2a2420', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: '#e8b84b', marginBottom: '0.75rem', fontSize: '1.05rem' }}>{item.title}</p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#8a8070' }}>{item.body}</p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.7rem', color: '#c8952a', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem' }}>The Pattern</p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8', marginBottom: '1.25rem' }}>
            The Treaty of Tordesillas (1494) shows where this began: Pope Alexander VI drew a line down the Atlantic Ocean. Everything west: Spain. Everything east: Portugal. With one stroke of a pen, two empires divided undiscovered continents between themselves.
          </p>
          <div className="pull-quote">These lines — from Linfield Road to the Radcliffe Line — share one thing: they were drawn by people who did not have to live with the consequences.</div>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#c0b8a8' }}>
            The pattern is not coincidence. It is a method. And its consequences — the I-30 divide, the wars, the poverty, the gun violence — are still alive today.
          </p>
        </section>

        <div style={{ borderTop: '1px solid #2a2420', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '0.8rem', color: '#4a4040', textDecoration: 'none', letterSpacing: '0.1em' }}>← Home</Link>
          <Link href="/freedom" style={{ fontSize: '0.8rem', color: '#c8952a', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            Continue Reading: Are We Truly Free? →
          </Link>
        </div>
      </article>
    </>
  );
}
