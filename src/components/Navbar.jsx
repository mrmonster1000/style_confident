import React from 'react';

const Navbar = ({ palette: p, mobileMenuOpen, setMobileMenuOpen, onBookingClick }) => {
  const navLinks = [
    { label: 'Services', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Contact', action: onBookingClick }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 40px',
      backgroundColor: 'rgba(255,253,251,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${p.secondary}`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src="/images/style-confident-logo.jpg"
          alt="Style Confident Logo"
          className="nav-logo"
          loading="eager"
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <div>
          <span className="nav-text" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px',
            fontWeight: '500',
            color: p.primary,
            display: 'block',
            lineHeight: 1.1
          }}>Style Confident</span>
          <span className="nav-subtext" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '11px',
            color: p.neutral,
            fontStyle: 'italic'
          }}>by Kelly Harvey-Welsh</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {navLinks.map((link, i) => (
          <button
            key={i}
            className="nav-link"
            onClick={link.action}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.05em',
              color: p.primary,
              cursor: 'pointer',
              padding: '8px 0'
            }}
          >{link.label}</button>
        ))}
        <button
          className="cta-primary"
          onClick={onBookingClick}
          style={{
            backgroundColor: p.accent1,
            color: '#fff',
            border: 'none',
            padding: '14px 28px',
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: '28px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >Book Now</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          padding: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
        <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
        <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: p.background,
          padding: '24px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => { link.action(); setMobileMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '15px',
                fontWeight: '500',
                color: p.primary,
                cursor: 'pointer',
                padding: '12px 0',
                textAlign: 'left',
                borderBottom: `1px solid ${p.secondary}`
              }}
            >{link.label}</button>
          ))}
          <button
            onClick={() => { onBookingClick(); setMobileMenuOpen(false); }}
            style={{
              backgroundColor: p.accent1,
              color: '#fff',
              border: 'none',
              padding: '16px',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >Book a Consultation</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
