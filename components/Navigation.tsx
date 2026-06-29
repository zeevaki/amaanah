'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lines', label: 'The Lines' },
  { href: '/freedom', label: 'Are We Truly Free?' },
  { href: '/alternative', label: 'The Alternative' },
  { href: '/leadership', label: 'New Leadership' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: '1px solid #2a2420',
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
            href="/"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#c8952a',
              letterSpacing: '0.15em',
              textDecoration: 'none',
            }}
          >
            AMAANAH
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#7a7068',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '1.25rem', height: '2px', background: 'currentColor', marginBottom: '4px' }} />
            <div style={{ width: '1.25rem', height: '2px', background: 'currentColor', marginBottom: '4px' }} />
            <div style={{ width: '1.25rem', height: '2px', background: 'currentColor' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid #2a2420',
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
            className="show-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{ padding: '0.25rem 0' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
