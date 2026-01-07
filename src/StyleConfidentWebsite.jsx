import React, { useState, useEffect } from 'react';

const StyleConfidentWebsite = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [settingsTab, setSettingsTab] = useState('presets'); // 'presets' or 'custom'
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Cal.com Configuration - Kelly: Replace with your Cal.com username
  const calUsername = "kelly-style-confident"; // Change this to your Cal.com username
  const calBookingUrl = `https://cal.com/${calUsername}/consultation`;

  const defaultPalettes = [
    {
      name: "Refined Luxe",
      primary: "#2D2926",
      secondary: "#FAF7F4",
      accent1: "#E8614D",
      accent2: "#C9A962",
      neutral: "#7D756E",
      neutralLight: "#B8B2AA",
      background: "#FFFDFB"
    },
    {
      name: "Modern Femme",
      primary: "#6B3A42",
      secondary: "#FBF5F3",
      accent1: "#E8614D",
      accent2: "#D4A574",
      neutral: "#5C4F4F",
      neutralLight: "#A89999",
      background: "#FFFAF9"
    },
    {
      name: "Bold & Grounded",
      primary: "#2C4A3E",
      secondary: "#F9F7F4",
      accent1: "#E8614D",
      accent2: "#E8C547",
      neutral: "#4A5550",
      neutralLight: "#8B9590",
      background: "#FDFCFA"
    },
    {
      name: "Sleek Minimal",
      primary: "#1A1A1A",
      secondary: "#FAFAFA",
      accent1: "#E8614D",
      accent2: "#F4D03F",
      neutral: "#666666",
      neutralLight: "#9A9A9A",
      background: "#FFFFFF"
    }
  ];

  const [customColors, setCustomColors] = useState(defaultPalettes[0]);
  const [activePreset, setActivePreset] = useState(0);
  const [useCustom, setUseCustom] = useState(false);

  const p = useCustom ? customColors : defaultPalettes[activePreset];

  const colorLabels = {
    primary: { label: 'Primary', desc: 'Main text, headers, dark sections' },
    secondary: { label: 'Secondary', desc: 'Light backgrounds, cards' },
    accent1: { label: 'Accent 1', desc: 'Buttons, highlights, CTAs' },
    accent2: { label: 'Accent 2', desc: 'Gold accents, decorative elements' },
    neutral: { label: 'Neutral', desc: 'Body text, subtle elements' },
    neutralLight: { label: 'Neutral Light', desc: 'Borders, placeholders' },
    background: { label: 'Background', desc: 'Page background' }
  };

  const handleColorChange = (colorKey, value) => {
    setCustomColors(prev => ({ ...prev, [colorKey]: value }));
    setUseCustom(true);
  };

  const applyPreset = (index) => {
    setActivePreset(index);
    setCustomColors(defaultPalettes[index]);
    setUseCustom(false);
  };

  const copyColorsToClipboard = () => {
    const colorString = JSON.stringify(p, null, 2);
    navigator.clipboard.writeText(colorString);
    alert('Colors copied to clipboard!');
  };

  const testimonials = [
    { quote: "Kelly completely transformed how I see my wardrobe. I finally feel like myself again after years of hiding in boring clothes.", name: "Sarah M.", title: "Working Mum, Surrey" },
    { quote: "The colour analysis was life-changing! I've received more compliments in the last month than in the last year.", name: "Emma T.", title: "Marketing Director, London" },
    { quote: "Worth every penny. Kelly helped me find my dream wedding dress in just two appointments.", name: "Charlotte R.", title: "Bride, 2024" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Close booking modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showBookingModal) {
        setShowBookingModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showBookingModal]);

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: p.background, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Libre+Franklin:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,97,77,0.35); }
        .cta-secondary:hover { background-color: rgba(0,0,0,0.03); }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: currentColor; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        
        .settings-panel { 
          position: fixed; 
          bottom: 24px; 
          right: 24px; 
          z-index: 1000;
        }
        
        .settings-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        
        .settings-btn:hover { transform: scale(1.05); }
        
        .settings-dropdown {
          position: absolute;
          bottom: 60px;
          right: 0;
          background: white;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15);
          min-width: 200px;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .settings-dropdown.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .settings-dropdown::-webkit-scrollbar {
          width: 6px;
        }

        .settings-dropdown::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .settings-dropdown::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 3px;
        }

        .settings-dropdown::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }

        input[type="color"] {
          -webkit-appearance: none;
          border: none;
        }

        input[type="color"]::-webkit-color-swatch-wrapper {
          padding: 0;
        }

        input[type="color"]::-webkit-color-swatch {
          border: none;
          border-radius: 6px;
        }
        
        .palette-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        
        .palette-option:hover { background: #f5f5f5; }
        .palette-option.active { background: #f0f0f0; }
        
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-content { padding: 60px 24px !important; text-align: center; }
          .hero-content h1 { font-size: 38px !important; }
          .hero-image { min-height: 400px !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .bridal-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .section-padding { padding: 60px 24px !important; }
          .problem-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .hero-content h1 { font-size: 32px !important; }
          .section-title { font-size: 32px !important; }
          .cta-buttons { flex-direction: column; width: 100%; }
          .cta-buttons button { width: 100%; }
        }

        /* Booking Modal Styles */
        .booking-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .booking-modal-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .booking-modal {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          transform: translateY(20px) scale(0.95);
          transition: transform 0.3s ease;
          box-shadow: 0 25px 80px rgba(0,0,0,0.3);
        }

        .booking-modal-overlay.open .booking-modal {
          transform: translateY(0) scale(1);
        }

        .booking-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #eee;
        }

        .booking-modal-close {
          width: 36px;
          height: 36px;
          border: none;
          background: #f5f5f5;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .booking-modal-close:hover {
          background: #e5e5e5;
          transform: scale(1.05);
        }

        .booking-modal-body {
          padding: 0;
          min-height: 500px;
        }

        .booking-modal-body iframe {
          width: 100%;
          height: 500px;
          border: none;
        }
      `}</style>

      {/* Booking Modal */}
      <div
        className={`booking-modal-overlay ${showBookingModal ? 'open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setShowBookingModal(false); }}
      >
        <div className="booking-modal">
          <div className="booking-modal-header">
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                fontWeight: '500',
                color: p.primary,
                margin: '0 0 4px 0'
              }}>Book Your Consultation</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: p.neutral,
                margin: 0
              }}>Choose a time that works for you</p>
            </div>
            <button
              className="booking-modal-close"
              onClick={() => setShowBookingModal(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="booking-modal-body">
            {/* Cal.com Embed - Replace URL with Kelly's actual Cal.com link */}
            <iframe
              src={`${calBookingUrl}?embed=true&theme=light`}
              title="Book a consultation with Kelly"
              style={{ width: '100%', height: '500px', border: 'none' }}
            />
          </div>
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #eee',
            backgroundColor: '#fafafa',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              color: '#888',
              margin: 0
            }}>
              Prefer email? Contact me at{' '}
              <a href="mailto:hello@styleconfident.com" style={{ color: p.accent1 }}>
                hello@styleconfident.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Settings Toggle - Super User Color Controls */}
      <div className="settings-panel">
        <div className={`settings-dropdown ${showSettings ? 'open' : ''}`} style={{ minWidth: '320px' }}>
          {/* Settings Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #eee'
          }}>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#333',
              margin: 0
            }}>Style Settings</p>
            <span style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '9px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              backgroundColor: p.accent1,
              padding: '4px 8px',
              borderRadius: '4px'
            }}>Admin Only</span>
          </div>

          {/* Tabs */}
          <div style={{
            display: 'flex',
            gap: '4px',
            marginBottom: '16px',
            backgroundColor: '#f5f5f5',
            padding: '4px',
            borderRadius: '8px'
          }}>
            <button
              onClick={() => setSettingsTab('presets')}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: settingsTab === 'presets' ? '#fff' : 'transparent',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                color: settingsTab === 'presets' ? '#333' : '#888',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: settingsTab === 'presets' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >Presets</button>
            <button
              onClick={() => setSettingsTab('custom')}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: settingsTab === 'custom' ? '#fff' : 'transparent',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                color: settingsTab === 'custom' ? '#333' : '#888',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: settingsTab === 'custom' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >Custom Colors</button>
          </div>

          {/* Presets Tab */}
          {settingsTab === 'presets' && (
            <div>
              {defaultPalettes.map((palette, index) => (
                <button
                  key={index}
                  className={`palette-option ${!useCustom && activePreset === index ? 'active' : ''}`}
                  onClick={() => applyPreset(index)}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${palette.primary} 50%, ${palette.accent1} 50%)`,
                    border: '2px solid #fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} />
                  <div>
                    <span style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#333',
                      display: 'block'
                    }}>{palette.name}</span>
                    <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                      {[palette.primary, palette.accent1, palette.accent2, palette.neutral].map((c, i) => (
                        <div key={i} style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '2px',
                          backgroundColor: c,
                          border: '1px solid rgba(0,0,0,0.1)'
                        }} />
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Custom Colors Tab */}
          {settingsTab === 'custom' && (
            <div style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '8px' }}>
              {Object.entries(colorLabels).map(([key, { label, desc }]) => (
                <div key={key} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  <input
                    type="color"
                    value={customColors[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #eee',
                      borderRadius: '8px',
                      padding: '2px',
                      cursor: 'pointer',
                      backgroundColor: '#fff'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#333',
                      margin: '0 0 2px 0'
                    }}>{label}</p>
                    <p style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      fontSize: '10px',
                      color: '#888',
                      margin: 0
                    }}>{desc}</p>
                  </div>
                  <input
                    type="text"
                    value={customColors[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    style={{
                      width: '72px',
                      padding: '6px 8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontFamily: "'Libre Franklin', sans-serif",
                      fontSize: '11px',
                      color: '#333',
                      textTransform: 'uppercase'
                    }}
                  />
                </div>
              ))}

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #eee'
              }}>
                <button
                  onClick={copyColorsToClipboard}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: '10px',
                    fontWeight: '600',
                    color: '#555',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >Copy Colors</button>
                <button
                  onClick={() => { setCustomColors(defaultPalettes[activePreset]); setUseCustom(false); }}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: 'none',
                    borderRadius: '6px',
                    backgroundColor: '#f0f0f0',
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: '10px',
                    fontWeight: '600',
                    color: '#555',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >Reset</button>
              </div>
            </div>
          )}

          {/* Current Status */}
          <div style={{
            marginTop: '12px',
            padding: '10px',
            backgroundColor: useCustom ? '#fff8f0' : '#f0fff4',
            borderRadius: '6px',
            border: `1px solid ${useCustom ? '#f0d0b0' : '#b0e0c0'}`
          }}>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              color: useCustom ? '#996600' : '#338844',
              margin: 0
            }}>
              {useCustom ? '● Using custom colors' : `● Using preset: ${defaultPalettes[activePreset].name}`}
            </p>
          </div>
        </div>
        <button
          className="settings-btn"
          onClick={() => setShowSettings(!showSettings)}
          style={{ backgroundColor: p.primary }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={p.secondary} strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 48px',
        backgroundColor: `${p.background}f5`,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${p.secondary}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/images/style-confident-logo.jpg"
            alt="Style Confident Logo"
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <div>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '20px',
              fontWeight: '500',
              color: p.primary,
              display: 'block',
              lineHeight: 1.1
            }}>Style Confident</span>
            <span style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '9px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: p.neutral
            }}>by Kelly Harvey-Welsh</span>
          </div>
        </div>
        
        <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {[
            { label: 'About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
            { label: 'Services', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
            { label: 'Bridal', action: () => document.getElementById('bridal')?.scrollIntoView({ behavior: 'smooth' }) },
            { label: 'Instagram', action: () => window.open('https://www.instagram.com/iamkellyhw.thestylist/', '_blank') },
            { label: 'Contact', action: () => setShowBookingModal(true) },
          ].map((item, i) => (
            <span
              key={i}
              className="nav-link"
              onClick={item.action}
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: p.neutral,
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}>{item.label}</span>
          ))}
          <button
            className="cta-primary"
            onClick={() => setShowBookingModal(true)}
            style={{
              backgroundColor: p.accent1,
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>Book Now</button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: p.primary, transition: 'all 0.3s ease' }} />
          </div>
        </button>
      </nav>

      {/* Hero Section - Full Width with Cutout */}
      <section style={{
        minHeight: 'auto',
        paddingTop: '86px',
        backgroundColor: p.secondary,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `3px solid ${p.accent2}`,
          opacity: 0.25
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '25%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: p.accent1,
          opacity: 0.1
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: p.accent2,
          opacity: 0.2
        }} />

        {/* Main hero content - two column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'center'
        }}>
          {/* Left - Kelly professional photo */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}>
            <img
              src="/images/KellyWelshpicked2024_19.jpg"
              alt="Kelly Harvey-Welsh - Personal Stylist"
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
          <div style={{
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
              For busy women whose bodies, lives, or wardrobes have changed —
              I'll help you build a style that actually works.
            </p>

            {/* Second quote */}
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
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                className="cta-primary"
                onClick={() => setShowBookingModal(true)}
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
            }}>Kelly Harvey-Welsh · Personal Stylist</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding" style={{
        backgroundColor: p.primary,
        padding: '100px 80px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: p.accent1,
            marginBottom: '16px'
          }}>Sound Familiar?</p>
          <h2 className="section-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '40px',
            fontWeight: '500',
            color: p.secondary,
            marginBottom: '50px',
            lineHeight: '1.25'
          }}>
            "I have a wardrobe full of clothes...<br/>
            <em style={{ fontStyle: 'italic' }}>and nothing to wear"</em>
          </h2>
          <div className="problem-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            textAlign: 'left'
          }}>
            {[
              { title: "Nothing Fits Like It Used To", text: "Your body has changed — whether after babies, life changes, or just time — and your old clothes don't feel like 'you' anymore." },
              { title: "You've Lost Your Style Identity", text: "You used to know what you liked. Now you default to the same safe outfits and wonder where 'you' went." },
              { title: "Shopping Leaves You Empty-Handed", text: "You walk into shops full of hope and leave with nothing. Or worse — another mistake hanging in your wardrobe with the tags still on." }
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '22px',
                  fontWeight: '500',
                  color: p.secondary,
                  marginBottom: '12px'
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  color: p.neutralLight,
                  lineHeight: '1.65'
                }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '24px',
            fontStyle: 'italic',
            color: p.accent2,
            marginTop: '50px',
            marginBottom: '16px'
          }}>
            You deserve to feel confident every day. Let me show you how.
          </p>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '13px',
            color: p.neutralLight,
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            No judgement. No pressure to buy designer. Just honest guidance that works
            for your body, your budget, and your real life.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        minHeight: '600px',
        scrollMarginTop: '100px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: `2px solid ${p.accent2}`,
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: p.accent1,
            opacity: 0.1
          }} />

          <img
            src="/images/KellyWelshpicked2024-removebg-preview.png"
            alt="Kelly Harvey-Welsh - Meet Your Stylist"
            style={{
              width: '100%',
              maxWidth: '380px',
              height: 'auto',
              filter: 'grayscale(100%) contrast(1.1)',
              marginTop: '-60px'
            }}
          />
        </div>
        <div className="section-padding" style={{
          padding: '80px 80px 80px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: p.accent1,
            marginBottom: '16px'
          }}>Meet Your Stylist</p>
          <h2 className="section-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '42px',
            fontWeight: '500',
            color: p.primary,
            marginBottom: '28px'
          }}>"Hi, I'm Kelly"</h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            fontStyle: 'italic',
            color: p.neutral,
            lineHeight: '1.7',
            marginBottom: '20px'
          }}>
            "I've been where you are. After my second baby, I'd stand in front of
            my wardrobe feeling completely lost. Nothing fit. Nothing felt like
            'me'. I'd given so much to everyone else that I'd forgotten who I was
            when I looked in the mirror.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            fontStyle: 'italic',
            color: p.neutral,
            lineHeight: '1.7',
            marginBottom: '32px'
          }}>
            Finding my style again changed everything — not just how I dressed,
            but how I felt about myself. Now I help other women skip the years
            of frustration and find that confidence faster. No fashion rules,
            no judgement — just real solutions that work for your life."
          </p>
          <div style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            paddingTop: '24px',
            borderTop: `1px solid ${p.secondary}`,
            alignItems: 'flex-end'
          }}>
            {[
              { label: 'Currently At', value: 'M&S Battersea Personal Stylist' },
              { label: 'Fashion Training', value: 'London College of Style' },
              { label: 'TV Styling', value: 'This Morning, My Mum Your Dad' },
              { label: 'Background', value: 'Ran a bridal boutique for 5 years' }
            ].map((item, i) => (
              <div key={i}>
                <p style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: p.neutral,
                  marginBottom: '6px'
                }}>{item.label}</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px',
                  color: p.primary
                }}>{item.value}</p>
              </div>
            ))}
            <a
              href="https://www.instagram.com/iamkellyhw.thestylist/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: 'transparent',
                border: `1.5px solid ${p.primary}`,
                borderRadius: '24px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                marginLeft: 'auto'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = p.primary; e.currentTarget.querySelector('span').style.color = p.secondary; e.currentTarget.querySelector('svg').style.fill = p.secondary; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.querySelector('span').style.color = p.primary; e.currentTarget.querySelector('svg').style.fill = p.primary; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={p.primary} style={{ transition: 'fill 0.3s ease' }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: p.primary,
                transition: 'color 0.3s ease'
              }}>Follow Along</span>
            </a>
          </div>
        </div>
      </section>

      {/* As Featured Section */}
      <section style={{
        backgroundColor: p.background,
        padding: '70px 80px',
        borderTop: `1px solid ${p.secondary}`,
        borderBottom: `1px solid ${p.secondary}`
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '42px',
                fontWeight: '700',
                color: p.primary,
                letterSpacing: '-0.02em'
              }}>M&S</div>
              <div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: p.neutral,
                  lineHeight: '1.5',
                  marginBottom: '6px'
                }}>
                  "When I'm not styling clients privately, I'm the official<br/>
                  personal stylist for <strong style={{ fontStyle: 'normal', color: p.primary }}>M&S Battersea</strong> — you can find me on their TikTok channel"
                </p>
                <p style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  color: p.neutralLight
                }}>Battersea Power Station, London</p>
              </div>
            </div>
          </div>

          {/* TikTok Videos Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {[
              { id: '7572627145680293142', label: 'Style Session' },
              { id: '7537032278430567702', label: 'Outfit Ideas' },
              { id: '7527361142008679702', label: 'Fashion Tips' }
            ].map((video, i) => (
              <a
                key={i}
                href={`https://www.tiktok.com/@mandsbatterseafashion/video/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  padding: '20px 24px',
                  backgroundColor: p.secondary,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* TikTok icon */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: '12px',
                    fontWeight: '600',
                    color: p.primary,
                    marginBottom: '2px'
                  }}>{video.label}</p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '14px',
                    color: p.neutral
                  }}>Watch on TikTok →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{
        backgroundColor: p.secondary,
        padding: '100px 80px',
        scrollMarginTop: '100px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: p.accent1,
            marginBottom: '14px'
          }}>How I Can Help</p>
          <h2 className="section-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '42px',
            fontWeight: '500',
            color: p.primary,
            marginBottom: '16px'
          }}>Simple Solutions That Work</h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px',
            color: p.neutral,
            maxWidth: '550px',
            margin: '0 auto'
          }}>
            Whether you need a wardrobe clear-out, help finding clothes that
            actually suit you, or a wedding dress ally — I've got you.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '28px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Wardrobe Rescue', price: '£250', desc: "We'll sort through everything you own, clear the clutter, and create outfits from pieces you'd forgotten you had", duration: '3 hours' },
            { name: 'Personal Shopping', price: '£250', desc: "I'll take you to shops that actually suit your style and budget — no more wandering aimlessly or buying mistakes", duration: '3 hours' },
            { name: 'Colour Analysis', price: '£170', desc: "Find out which colours make you look alive (and which ones drain you). Game-changer for shopping", duration: '2 hours' },
            { name: 'Online Style Session', price: '£150', desc: "Can't meet in person? We'll do it over video — same results, from your own wardrobe", duration: '2 hours' },
            { name: 'Event & TV Styling', price: 'Get in Touch', desc: "Big event coming up? TV appearance? I've styled for This Morning, My Mum Your Dad, and more. Let's make sure you look incredible", duration: 'Bespoke' },
            { name: 'Bridal Styling', price: 'Get in Touch', desc: "Former bridal boutique owner turned your secret weapon. From first appointment to 'the one' — I know exactly how to find your dream dress", duration: 'Bespoke' },
          ].map((service, i) => (
            <div 
              key={i} 
              className="service-card"
              style={{
                backgroundColor: p.background,
                borderRadius: '16px',
                padding: '36px 28px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: `1px solid transparent`
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: p.accent1,
                marginBottom: '24px',
                opacity: 0.12
              }} />
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: '500',
                color: p.primary,
                marginBottom: '10px'
              }}>{service.name}</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '16px',
                color: p.neutral,
                marginBottom: '20px',
                lineHeight: '1.55',
                minHeight: '72px'
              }}>{service.desc}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: `1px solid ${p.secondary}`
              }}>
                <span style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: p.neutral
                }}>{service.duration}</span>
                <span style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  color: p.accent1
                }}>{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            className="cta-primary"
            onClick={() => setShowBookingModal(true)}
            style={{
              backgroundColor: p.accent1,
              color: '#fff',
              border: 'none',
              padding: '18px 44px',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>Book a Consultation</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{
        padding: '100px 80px',
        backgroundColor: p.background,
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: p.accent1,
          marginBottom: '14px'
        }}>What Clients Say</p>
        <h2 className="section-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '42px',
          fontWeight: '500',
          color: p.primary,
          marginBottom: '50px'
        }}>Kind Words</h2>

        <div style={{ maxWidth: '700px', margin: '0 auto', minHeight: '180px' }}>
          <div style={{
            fontSize: '56px',
            color: p.accent2,
            fontFamily: 'Georgia, serif',
            lineHeight: '1',
            marginBottom: '16px'
          }}>"</div>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '24px',
            fontWeight: '400',
            color: p.primary,
            lineHeight: '1.5',
            marginBottom: '28px',
            fontStyle: 'italic'
          }}>
            {testimonials[activeTestimonial].quote}
          </p>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: p.neutral
          }}>
            {testimonials[activeTestimonial].name}
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '16px',
            color: p.neutralLight
          }}>
            {testimonials[activeTestimonial].title}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: activeTestimonial === i ? p.accent1 : p.neutralLight,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeTestimonial === i ? 'scale(1.3)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Bridal Section */}
      <section id="bridal" className="bridal-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        backgroundColor: p.primary,
        scrollMarginTop: '100px'
      }}>
        <div className="section-padding" style={{
          padding: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: p.accent2,
            marginBottom: '16px'
          }}>Bridal Services</p>
          <h2 className="section-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '38px',
            fontWeight: '500',
            color: p.secondary,
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Find Your Dream<br/>Wedding Dress
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '19px',
            color: p.neutralLight,
            lineHeight: '1.7',
            marginBottom: '32px',
            maxWidth: '450px'
          }}>
            Wedding dress shopping should be magical, not stressful. Let me be 
            your expert guide—from understanding your vision to finding the gown 
            that makes you feel like the best version of yourself.
          </p>
          <button
            className="cta-primary"
            onClick={() => setShowBookingModal(true)}
            style={{
              backgroundColor: p.accent1,
              color: '#fff',
              border: 'none',
              padding: '18px 40px',
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: '32px',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}>Enquire About Bridal</button>
        </div>
        <div style={{
          backgroundColor: p.secondary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          minHeight: '450px'
        }}>
          <img
            src="/images/CallyBorgSalonstyles2025_37_(2).jpeg"
            alt="Kelly Harvey-Welsh - Bridal Styling Consultation"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{
        padding: '100px 80px',
        backgroundColor: p.secondary
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: p.accent1,
              marginBottom: '14px'
            }}>Questions?</p>
            <h2 className="section-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '40px',
              fontWeight: '500',
              color: p.primary
            }}>Frequently Asked</h2>
          </div>

          {[
            { q: "Can a 'normal' person really use a personal stylist?", a: "Absolutely! My services are designed for real women with real lives and budgets—not celebrities. If you've ever felt stuck with your style, I'm here for you." },
            { q: "What budget do I need for shopping appointments?", a: "That's entirely up to you. We discuss budget before any shopping trip, and I work across all price points—from the high street to designer." },
            { q: "Do you offer virtual consultations?", a: "Yes! My Online Style Edit is perfect if you're not in London or Surrey. We work via video call and I send personalised shopping links directly to you." }
          ].map((faq, i) => (
            <div key={i} style={{
              borderBottom: `1px solid ${p.neutralLight}40`,
              padding: '28px 0'
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                fontWeight: '500',
                color: p.primary,
                marginBottom: '12px'
              }}>{faq.q}</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '17px',
                color: p.neutral,
                lineHeight: '1.65'
              }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{
        backgroundColor: p.accent1,
        padding: '100px 80px',
        textAlign: 'center'
      }}>
        <h2 className="section-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '42px',
          fontWeight: '500',
          color: '#fff',
          marginBottom: '20px'
        }}>Ready to Love Getting Dressed Again?</h2>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '21px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '40px',
          maxWidth: '500px',
          margin: '0 auto 40px'
        }}>
          Book a free 15-minute call. No pressure, no hard sell — just an honest
          chat about where you're stuck and how I can help.
        </p>
        <button
          onClick={() => setShowBookingModal(true)}
          style={{
            backgroundColor: '#fff',
            color: p.accent1,
            border: 'none',
            padding: '20px 50px',
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderRadius: '32px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>Let's Chat</button>
      </section>

      {/* Footer */}
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src="/images/style-confident-logo.jpg"
                alt="Style Confident Logo"
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
              color: p.neutralLight,
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Helping women rediscover their style confidence, one wardrobe at a time.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://www.instagram.com/iamkellyhw.thestylist/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: `1px solid ${p.neutral}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = p.accent1; e.currentTarget.style.borderColor = p.accent1; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = p.neutral; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={p.neutralLight}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Placeholder social icons - add URLs when available */}
              {[
                { name: 'FB', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={p.neutralLight}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
                { name: 'PIN', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={p.neutralLight}><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg> }
              ].map((social, i) => (
                <div key={i} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: `1px solid ${p.neutral}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  opacity: 0.5
                }}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: p.secondary
            }}>Services</h4>
            {['Wardrobe Edit', 'Personal Shopping', 'Colour Analysis', 'Online Styling', 'Bridal'].map((item, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: p.neutralLight,
                marginBottom: '10px',
                cursor: 'pointer'
              }}>{item}</p>
            ))}
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: p.secondary
            }}>Quick Links</h4>
            {['About', 'Blog', 'Gift Vouchers', 'FAQ', 'Contact'].map((item, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '15px',
                color: p.neutralLight,
                marginBottom: '10px',
                cursor: 'pointer'
              }}>{item}</p>
            ))}
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: p.secondary
            }}>Get in Touch</h4>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '15px',
              color: p.neutralLight,
              marginBottom: '10px'
            }}>hello@styleconfident.com</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '15px',
              color: p.neutralLight,
              marginBottom: '20px'
            }}>London · Surrey · Online</p>
            <p style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: p.neutral,
              marginBottom: '8px'
            }}>Newsletter</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '12px 14px',
                  border: `1px solid ${p.neutral}`,
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  color: p.secondary,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '14px',
                  minWidth: 0
                }}
              />
              <button style={{
                backgroundColor: p.accent1,
                color: '#fff',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '4px',
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                flexShrink: 0
              }}>JOIN</button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid ${p.neutral}`,
          marginTop: '60px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          maxWidth: '1200px',
          margin: '60px auto 0'
        }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: '11px',
            color: p.neutral
          }}>© 2026 Style Confident. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms'].map((item, i) => (
              <span key={i} style={{
                fontFamily: "'Libre Franklin', sans-serif",
                fontSize: '11px',
                color: p.neutral,
                cursor: 'pointer'
              }}>{item}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StyleConfidentWebsite;
