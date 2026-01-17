import React from 'react';

const Hero = ({ palette: p, onBookingClick }) => {
  return (
    <section style={{
      paddingTop: '94px',
      backgroundColor: p.secondary,
      minHeight: '100vh'
    }}>
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        minHeight: 'calc(100vh - 94px)'
      }}>
        {/* Left - Photo */}
        <div className="hero-image" style={{
          backgroundColor: p.secondary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px'
        }}>
          <img
            src="/images/KellyWelshpicked2024_19.jpg"
            alt="Kelly Harvey-Welsh - Personal Stylist"
            className="hero-photo"
            loading="eager"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)'
            }}
          />
        </div>

        {/* Right - Text content */}
        <div className="hero-content" style={{
          padding: '40px 60px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Tagline */}
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: p.neutral,
            marginBottom: '20px'
          }}>Real Style for Real Life</p>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '52px',
            fontWeight: '500',
            color: p.primary,
            lineHeight: '1.1',
            marginBottom: '24px'
          }}>
            Finally Feel Like<br/>
            <em style={{ fontStyle: 'italic', color: p.accent1 }}>Yourself Again</em>
          </h1>

          {/* Subhead */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px',
            color: p.neutral,
            lineHeight: '1.6',
            marginBottom: '16px',
            maxWidth: '440px'
          }}>
            For busy women ready to rediscover their style —
            I'll help you build a look that fits your life now.
          </p>

          {/* Quote */}
          <div style={{
            marginBottom: '32px',
            paddingLeft: '20px',
            borderLeft: `3px solid ${p.accent2}`
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '17px',
              fontStyle: 'italic',
              color: p.neutral,
              lineHeight: '1.5',
              marginBottom: '6px'
            }}>"Worth every penny. Kelly changed how I see myself."</p>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: p.neutralLight
            }}>— Emma, London</p>
          </div>

          {/* CTA buttons */}
          <div className="cta-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="cta-primary"
              onClick={onBookingClick}
              style={{
                backgroundColor: p.accent1,
                color: '#fff',
                border: 'none',
                padding: '18px 36px',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>Book a Free Consultation</button>
            <button
              className="cta-secondary"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: p.primary,
                border: `2px solid ${p.primary}`,
                padding: '16px 32px',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>View Services</button>
          </div>

          {/* Name tag */}
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.1em',
            color: p.neutralLight,
            marginTop: '32px'
          }}>Kelly Harvey-Welsh · Personal Stylist · M&S Battersea</p>

          {/* As Featured In Badge */}
          <a
            href="https://www.thesun.co.uk/fabulous/37928155/marks-and-spencer-jean-guide-ditching-skinnies/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '20px',
              padding: '10px 18px',
              background: 'linear-gradient(135deg, #FFFBF7 0%, #FFF5EE 100%)',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(200, 50, 50, 0.1)',
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
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: p.neutral
            }}>As Featured In</span>
            <span style={{
              fontFamily: 'Georgia, serif',
              fontWeight: '700',
              fontSize: '16px',
              color: '#C8102E',
              textTransform: 'uppercase',
              letterSpacing: '-0.5px'
            }}>The Sun</span>
            <span style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '500',
              color: p.primary,
              paddingLeft: '8px',
              borderLeft: `1px solid ${p.neutralLight}`
            }}>Fashion</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
