import React from 'react';

const PressBar = ({ palette: p }) => {
  return (
    <section style={{
      backgroundColor: p.secondary,
      padding: '32px 40px',
      borderTop: `1px solid ${p.neutralLight}20`,
      borderBottom: `1px solid ${p.neutralLight}20`
    }}>
      <div className="press-bar" style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: '10px',
          fontWeight: '600',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: p.neutral
        }}>As Seen In</span>

        <a
          href="https://www.thesun.co.uk/fabulous/37928155/marks-and-spencer-jean-guide-ditching-skinnies/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            padding: '12px 24px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
          }}
        >
          <span style={{
            fontFamily: 'Georgia, serif',
            fontWeight: '700',
            fontSize: '22px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px'
          }}>The Sun</span>
          <span style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '12px',
            color: p.neutral,
            paddingLeft: '12px',
            borderLeft: `1px solid ${p.neutralLight}`
          }}>"The ultimate jeans guide"</span>
        </a>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.7
        }}>
          <span style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            color: p.neutral
          }}>M&S Official Stylist</span>
          <span style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: p.neutralLight
          }}></span>
          <span style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            color: p.neutral
          }}>Battersea Power Station</span>
        </div>
      </div>
    </section>
  );
};

export default PressBar;
