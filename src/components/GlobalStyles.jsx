import React from 'react';

const GlobalStyles = () => (
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

    .settings-panel { position: fixed; bottom: 24px; right: 24px; z-index: 1000; }
    .settings-btn { width: 48px; height: 48px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    .settings-btn:hover { transform: scale(1.05); }

    .settings-dropdown { position: absolute; bottom: 60px; right: 0; background: white; border-radius: 12px; padding: 16px; box-shadow: 0 8px 40px rgba(0,0,0,0.15); min-width: 200px; opacity: 0; transform: translateY(10px); pointer-events: none; transition: all 0.3s ease; }
    .settings-dropdown.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
    .settings-dropdown::-webkit-scrollbar { width: 6px; }
    .settings-dropdown::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
    .settings-dropdown::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
    .settings-dropdown::-webkit-scrollbar-thumb:hover { background: #aaa; }

    input[type="color"] { -webkit-appearance: none; border: none; }
    input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
    input[type="color"]::-webkit-color-swatch { border: none; border-radius: 6px; }

    .palette-option { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: background 0.2s ease; border: none; background: transparent; width: 100%; text-align: left; }
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
      .tiktok-grid { grid-template-columns: 1fr !important; }
      .ms-header { flex-direction: column !important; text-align: center !important; }
      .ms-quote { max-width: 100% !important; text-align: center !important; }
      .about-credentials { justify-content: center !important; }
      .follow-grid { grid-template-columns: 1fr !important; }
      .instagram-grid { grid-template-columns: repeat(3, 1fr) !important; }
    }

    @media (max-width: 600px) {
      .footer-grid { grid-template-columns: 1fr !important; }
      .hero-content h1 { font-size: 28px !important; }
      .section-title { font-size: 28px !important; }
      .cta-buttons { flex-direction: column; width: 100%; }
      .cta-buttons button { width: 100%; }
      .nav-logo { width: 50px !important; height: 50px !important; }
      .nav-text { font-size: 16px !important; }
      .nav-subtext { font-size: 8px !important; }
      .hero-photo { max-width: 280px !important; }
      .about-image { max-width: 250px !important; margin: 0 auto !important; }
      .ms-logo { font-size: 32px !important; }
      .ms-quote-text { font-size: 17px !important; }
      .bridal-section { padding: 60px 24px !important; }
      .instagram-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .press-bar { flex-direction: column !important; gap: 20px !important; }
    }

    /* Booking Modal Styles */
    .booking-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
    .booking-modal-overlay.open { opacity: 1; pointer-events: auto; }
    .booking-modal { background: #fff; border-radius: 16px; width: 100%; max-width: 600px; max-height: 90vh; overflow: hidden; transform: translateY(20px) scale(0.95); transition: transform 0.3s ease; box-shadow: 0 25px 80px rgba(0,0,0,0.3); }
    .booking-modal-overlay.open .booking-modal { transform: translateY(0) scale(1); }
    .booking-modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #eee; }
    .booking-modal-close { width: 36px; height: 36px; border: none; background: #f5f5f5; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; }
    .booking-modal-close:hover { background: #e5e5e5; transform: scale(1.05); }
    .booking-modal-body { padding: 0; min-height: 500px; }
    .booking-modal-body iframe { width: 100%; height: 500px; border: none; }
  `}</style>
);

export default GlobalStyles;
