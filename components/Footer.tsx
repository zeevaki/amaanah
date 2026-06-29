export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #2a2420',
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
            color: '#c8952a',
            marginBottom: '1rem',
          }}
        >
          Power is not a possession. It is a trust.
        </div>
        <div
          style={{
            fontSize: '0.8rem',
            color: '#4a4040',
            letterSpacing: '0.05em',
          }}
        >
          This is a living manifesto. Share it freely.
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '2rem', height: '1px', background: '#2a2420' }} />
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '0.9rem',
              color: '#2a2018',
              letterSpacing: '0.1em',
            }}
          >
            AMAANAH
          </span>
          <div style={{ width: '2rem', height: '1px', background: '#2a2420' }} />
        </div>
      </div>
    </footer>
  );
}
