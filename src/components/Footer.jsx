import React from 'react';

const Footer = ({ palette: p, onBookingClick }) => {
  const footerLinks = [
    { label: 'Services', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Contact', action: onBookingClick }
  ];

  return (
    <footer style={{
      backgroundColor: p.primary,
      padding: '80px',
      color: p.secondary
    }}>
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
        gap: '60px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img
              src="/images/style-confident-logo.jpg"
              alt="Style Confident Logo"
              loading="lazy"
              style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '18px',
              fontWeight: '500'
            }}>Style Confident</span>
          </div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '16px',
            lineHeight: '1.6',
            color: p.neutralLight,
            marginBottom: '20px'
          }}>
            Helping real women feel confident in their clothes again. Personal styling, colour analysis, and wardrobe rescue services in London & Surrey.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://www.instagram.com/iamkellyhw.thestylist/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: p.secondary,
                transition: 'background 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@mandsbatterseafashion"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: p.secondary,
                transition: 'background 0.2s ease'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            color: p.accent1
          }}>Quick Links</h4>
          <ul style={{ listStyle: 'none' }}>
            {footerLinks.map((link, i) => (
              <li key={i} style={{ marginBottom: '12px' }}>
                <button
                  onClick={link.action}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: '14px',
                    color: p.neutralLight,
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = p.secondary}
                  onMouseOut={(e) => e.currentTarget.style.color = p.neutralLight}
                >{link.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            color: p.accent1
          }}>Services</h4>
          <ul style={{ listStyle: 'none' }}>
            {['Wardrobe Rescue', 'Personal Shopping', 'Colour Analysis', 'Bridal Styling'].map((service, i) => (
              <li key={i} style={{ marginBottom: '12px' }}>
                <span style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: '14px',
                  color: p.neutralLight
                }}>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            color: p.accent1
          }}>Get in Touch</h4>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '14px',
            color: p.neutralLight,
            marginBottom: '12px'
          }}>
            <a href="mailto:hello@styleconfident.com" style={{ color: p.neutralLight, textDecoration: 'none' }}>
              hello@styleconfident.com
            </a>
          </p>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '14px',
            color: p.neutralLight,
            marginBottom: '20px'
          }}>London & Surrey, UK</p>
          <button
            onClick={onBookingClick}
            style={{
              backgroundColor: p.accent1,
              color: '#fff',
              border: 'none',
              padding: '12px 24px',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >Book Now</button>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        marginTop: '60px',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: '12px',
          color: p.neutralLight
        }}>
          © {new Date().getFullYear()} Style Confident by Kelly Harvey-Welsh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
