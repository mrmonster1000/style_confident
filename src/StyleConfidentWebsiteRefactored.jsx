import React, { useState, useEffect } from 'react';
import {
  GlobalStyles,
  Navbar,
  Hero,
  PressBar,
  BookingModal,
  InstagramSection,
  Footer
} from './components';
import {
  defaultPalettes,
  colorLabels,
  testimonials,
  bridalTestimonials,
  services,
  problems,
  faqs
} from './constants';

const StyleConfidentWebsite = () => {
  // State
  const [showSettings, setShowSettings] = useState(false);
  const [settingsTab, setSettingsTab] = useState('presets');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [customColors, setCustomColors] = useState(defaultPalettes[0]);
  const [activePreset, setActivePreset] = useState(0);
  const [useCustom, setUseCustom] = useState(false);

  // Current palette
  const p = useCustom ? customColors : defaultPalettes[activePreset];

  // Color settings handlers
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
    navigator.clipboard.writeText(JSON.stringify(p, null, 2));
    alert('Colors copied to clipboard!');
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: p.background, minHeight: '100vh' }}>
      <GlobalStyles />

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        palette={p}
      />

      {/* Settings Panel */}
      <SettingsPanel
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        settingsTab={settingsTab}
        setSettingsTab={setSettingsTab}
        palette={p}
        defaultPalettes={defaultPalettes}
        activePreset={activePreset}
        applyPreset={applyPreset}
        colorLabels={colorLabels}
        handleColorChange={handleColorChange}
        copyColorsToClipboard={copyColorsToClipboard}
      />

      <Navbar
        palette={p}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onBookingClick={() => setShowBookingModal(true)}
      />

      <Hero
        palette={p}
        onBookingClick={() => setShowBookingModal(true)}
      />

      <PressBar palette={p} />

      <ProblemSection palette={p} problems={problems} />

      <AboutSection palette={p} />

      <TestimonialsSection
        palette={p}
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />

      <ServicesSection
        palette={p}
        services={services}
        onBookingClick={() => setShowBookingModal(true)}
      />

      <BridalSection
        palette={p}
        bridalTestimonials={bridalTestimonials}
        onBookingClick={() => setShowBookingModal(true)}
      />

      <FAQSection palette={p} faqs={faqs} />

      <CTASection
        palette={p}
        onBookingClick={() => setShowBookingModal(true)}
      />

      <InstagramSection palette={p} />

      <Footer
        palette={p}
        onBookingClick={() => setShowBookingModal(true)}
      />
    </div>
  );
};

// ============ INLINE SECTION COMPONENTS ============

const SettingsPanel = ({
  showSettings, setShowSettings, settingsTab, setSettingsTab,
  palette: p, defaultPalettes, activePreset, applyPreset,
  colorLabels, handleColorChange, copyColorsToClipboard
}) => (
  <div className="settings-panel">
    <div className={`settings-dropdown ${showSettings ? 'open' : ''}`} style={{ minWidth: '320px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>Theme Settings</span>
        <button onClick={() => setShowSettings(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#999' }}>×</button>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['presets', 'custom'].map(tab => (
          <button
            key={tab}
            onClick={() => setSettingsTab(tab)}
            style={{
              flex: 1, padding: '8px', border: 'none', borderRadius: '6px', cursor: 'pointer',
              fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600',
              textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.2s ease',
              backgroundColor: settingsTab === tab ? p.primary : '#f0f0f0',
              color: settingsTab === tab ? '#fff' : '#666'
            }}
          >{tab === 'presets' ? 'Presets' : 'Custom'}</button>
        ))}
      </div>

      {settingsTab === 'presets' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {defaultPalettes.map((palette, i) => (
            <button key={i} className={`palette-option ${activePreset === i ? 'active' : ''}`} onClick={() => applyPreset(i)}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[palette.primary, palette.accent1, palette.accent2].map((color, j) => (
                  <div key={j} style={{ width: '20px', height: '20px', borderRadius: '4px', backgroundColor: color }} />
                ))}
              </div>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '13px', fontWeight: '500', color: '#333' }}>{palette.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '300px', overflowY: 'auto', paddingRight: '8px' }}>
          {Object.entries(colorLabels).map(([key, { label, desc }]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="color" value={p[key]} onChange={(e) => handleColorChange(key, e.target.value)} style={{ width: '36px', height: '36px', borderRadius: '6px', cursor: 'pointer' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '12px', fontWeight: '600', color: '#333' }}>{label}</div>
                <div style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '10px', color: '#999' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={copyColorsToClipboard} style={{ width: '100%', marginTop: '16px', padding: '10px', borderRadius: '6px', border: `1px solid ${p.primary}`, backgroundColor: 'transparent', color: p.primary, fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>
        Copy Color Values
      </button>
    </div>

    <button className="settings-btn" onClick={() => setShowSettings(!showSettings)} style={{ backgroundColor: p.accent1, color: '#fff' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    </button>
  </div>
);

const ProblemSection = ({ palette: p, problems }) => (
  <section className="section-padding" style={{ backgroundColor: p.primary, padding: '100px 80px' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>Sound Familiar?</p>
      <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '500', color: p.secondary, marginBottom: '50px', lineHeight: '1.25' }}>
        "I have a wardrobe full of clothes...<br/><em style={{ fontStyle: 'italic' }}>and nothing to wear"</em>
      </h2>
      <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', textAlign: 'left' }}>
        {problems.map((item, i) => (
          <div key={i}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '500', color: p.secondary, marginBottom: '12px' }}>{item.title}</h3>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', color: p.neutralLight, lineHeight: '1.65' }}>{item.text}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontStyle: 'italic', color: p.accent2, marginTop: '50px', marginBottom: '16px' }}>
        You deserve to feel confident every day. Let me show you how.
      </p>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '13px', color: p.neutralLight, maxWidth: '500px', margin: '0 auto' }}>
        No judgement. No pressure to buy designer. Just honest guidance that works for your style, your budget, and your real life.
      </p>
    </div>
  </section>
);

const AboutSection = ({ palette: p }) => (
  <section id="about" className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', minHeight: '600px', scrollMarginTop: '100px' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '20px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '120px', height: '120px', borderRadius: '50%', border: `2px solid ${p.accent2}`, opacity: 0.3 }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: p.accent1, opacity: 0.1 }} />
      <img src="/images/KellyWelshpicked2024-removebg-preview.png" alt="Kelly Harvey-Welsh - Meet Your Stylist" className="about-image" loading="lazy" style={{ width: '100%', maxWidth: '380px', height: 'auto', filter: 'grayscale(100%) contrast(1.1)', marginTop: '-60px' }} />
    </div>
    <div className="section-padding" style={{ padding: '80px 80px 80px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>Meet Your Stylist</p>
      <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: '500', color: p.primary, marginBottom: '28px' }}>"Hi, I'm Kelly"</h2>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', fontStyle: 'italic', color: p.neutral, lineHeight: '1.7', marginBottom: '20px' }}>
        "I've been where you are. After my second baby, I'd stand in front of my wardrobe feeling completely lost. Nothing fit. Nothing felt like 'me'. I'd given so much to everyone else that I'd forgotten who I was when I looked in the mirror.
      </p>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', fontStyle: 'italic', color: p.neutral, lineHeight: '1.7', marginBottom: '32px' }}>
        Finding my style again changed everything — not just how I dressed, but how I felt about myself. Now I help other women skip the years of frustration and find that confidence faster. No fashion rules, no judgement — just real solutions that work for your life."
      </p>
      <div className="about-credentials" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', paddingTop: '24px', borderTop: `1px solid ${p.secondary}`, alignItems: 'flex-end' }}>
        {[
          { label: 'Currently At', value: 'M&S Battersea Personal Stylist' },
          { label: 'Fashion Training', value: 'London College of Style' },
          { label: 'TV Styling', value: 'This Morning, My Mum Your Dad' },
          { label: 'Previously', value: 'Owner, The Secret Dress House, Reigate (2013-2018)' }
        ].map((item, i) => (
          <div key={i}>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: p.neutral, marginBottom: '6px' }}>{item.label}</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: p.primary }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ palette: p, testimonials, activeTestimonial, setActiveTestimonial }) => (
  <section className="section-padding" style={{ backgroundColor: p.secondary, padding: '80px', textAlign: 'center' }}>
    <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>Kind Words</p>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '500', color: p.primary, marginBottom: '48px' }}>What Clients Say</h2>
    <div style={{ maxWidth: '700px', margin: '0 auto', minHeight: '200px' }}>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontStyle: 'italic', color: p.primary, lineHeight: '1.5', marginBottom: '24px' }}>
        "{testimonials[activeTestimonial].quote}"
      </p>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '13px', fontWeight: '600', color: p.neutral }}>{testimonials[activeTestimonial].name}</p>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', color: p.neutralLight }}>{testimonials[activeTestimonial].title}</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
      {testimonials.map((_, i) => (
        <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: i === activeTestimonial ? p.accent1 : p.neutralLight, transition: 'all 0.3s ease' }} />
      ))}
    </div>
  </section>
);

const ServicesSection = ({ palette: p, services, onBookingClick }) => (
  <section id="services" className="section-padding" style={{ padding: '100px 80px', scrollMarginTop: '100px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>How I Can Help</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: '500', color: p.primary, marginBottom: '16px' }}>Services</h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', color: p.neutral, maxWidth: '600px', margin: '0 auto' }}>
          Each service is designed to give you clarity, confidence, and a wardrobe that actually works.
        </p>
      </div>
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
        {services.map((service, i) => (
          <div key={i} className="service-card" style={{ backgroundColor: p.secondary, padding: '40px', borderRadius: '16px', transition: 'all 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: '500', color: p.primary, marginBottom: '4px' }}>{service.title}</h3>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '12px', color: p.neutral }}>{service.subtitle}</p>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: '500', color: p.accent1 }}>{service.price}</span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', color: p.neutral, lineHeight: '1.6', marginBottom: '16px' }}>{service.description}</p>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', color: p.neutralLight }}>
              <strong style={{ color: p.accent1 }}>Ideal if:</strong> {service.ideal}
            </p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button onClick={onBookingClick} className="cta-primary" style={{ backgroundColor: p.accent1, color: '#fff', border: 'none', padding: '18px 40px', fontFamily: "'Libre Franklin', sans-serif", fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '32px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
          Book Your Free Consultation
        </button>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: p.neutral, marginTop: '16px' }}>
          Not sure which service is right for you? Let's chat.
        </p>
      </div>
    </div>
  </section>
);

const BridalSection = ({ palette: p, bridalTestimonials, onBookingClick }) => (
  <section id="bridal" className="bridal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: p.primary, scrollMarginTop: '100px' }}>
    <div className="bridal-section section-padding" style={{ padding: '80px', color: p.secondary }}>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>Bridal Styling</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '500', marginBottom: '24px', lineHeight: '1.2' }}>Find Your Dream Dress</h2>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: p.neutralLight, lineHeight: '1.7', marginBottom: '24px' }}>
        I owned The Secret Dress House bridal boutique for 5 years, helping hundreds of brides find "the one." Now I offer bespoke bridal styling — from first appointment to final fitting.
      </p>
      <div style={{ marginBottom: '32px' }}>
        {bridalTestimonials.map((t, i) => (
          <div key={i} style={{ padding: '16px 0', borderBottom: i < bridalTestimonials.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: p.neutralLight, marginBottom: '8px' }}>"{t.quote}"</p>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', color: p.accent2 }}>— {t.name}</p>
          </div>
        ))}
      </div>
      <button onClick={onBookingClick} style={{ backgroundColor: 'transparent', color: p.secondary, border: `2px solid ${p.secondary}`, padding: '14px 28px', fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '28px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
        Enquire About Bridal
      </button>
    </div>
    <div style={{ backgroundColor: p.secondary, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', minHeight: '450px' }}>
      <img src="/images/CallyBorgSalonstyles2025_37_(2).jpeg" alt="Kelly Harvey-Welsh - Bridal Styling Consultation" loading="lazy" style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
    </div>
  </section>
);

const FAQSection = ({ palette: p, faqs }) => (
  <section id="faq" className="section-padding" style={{ padding: '80px', backgroundColor: p.secondary }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>FAQ</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '500', color: p.primary }}>Common Questions</h2>
      </div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${p.neutralLight}40`, padding: '24px 0' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: '500', color: p.primary, marginBottom: '12px' }}>{faq.question}</h3>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', color: p.neutral, lineHeight: '1.6' }}>{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

const CTASection = ({ palette: p, onBookingClick }) => (
  <section style={{ padding: '100px 40px', textAlign: 'center', backgroundColor: p.background }}>
    <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '11px', fontWeight: '600', letterSpacing: '0.25em', textTransform: 'uppercase', color: p.accent1, marginBottom: '16px' }}>Ready?</p>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '44px', fontWeight: '500', color: p.primary, marginBottom: '16px', lineHeight: '1.2' }}>
      Let's Find Your Style<br/><em style={{ fontStyle: 'italic', color: p.accent1 }}>Together</em>
    </h2>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: p.neutral, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
      Book a free 15-minute discovery call and let's chat about where you're stuck and how I can help.
    </p>
    <button onClick={onBookingClick} className="cta-primary" style={{ backgroundColor: p.accent1, color: '#fff', border: 'none', padding: '20px 48px', fontFamily: "'Libre Franklin', sans-serif", fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '32px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
      Let's Chat
    </button>
  </section>
);

export default StyleConfidentWebsite;
