import React from 'react';
import { instagramGrid } from '../constants';

const InstagramSection = ({ palette: p }) => {
  return (
    <section style={{
      backgroundColor: p.secondary,
      padding: '80px 40px',
      textAlign: 'center'
    }}>
      <p style={{
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: '10px',
        fontWeight: '600',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: p.accent1,
        marginBottom: '12px'
      }}>Follow Along</p>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '36px',
        fontWeight: '500',
        color: p.primary,
        marginBottom: '12px'
      }}>@iamkellyhw.thestylist</h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '18px',
        color: p.neutral,
        marginBottom: '32px',
        maxWidth: '500px',
        margin: '0 auto 32px'
      }}>Daily style tips, behind-the-scenes, and real client transformations</p>

      {/* Instagram Grid */}
      <div className="instagram-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '8px',
        maxWidth: '900px',
        margin: '0 auto 32px'
      }}>
        {instagramGrid.map((item, i) => (
          <a
            key={i}
            href="https://www.instagram.com/iamkellyhw.thestylist/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              aspectRatio: '1',
              background: item.bg,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              color: 'white',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              letterSpacing: '0.05em'
            }}>{item.label}</span>
          </a>
        ))}
      </div>

      <a
        href="https://www.instagram.com/iamkellyhw.thestylist/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          backgroundColor: p.primary,
          color: 'white',
          textDecoration: 'none',
          borderRadius: '32px',
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Follow on Instagram
      </a>
    </section>
  );
};

export default InstagramSection;
