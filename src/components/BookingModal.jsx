import React, { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../constants';

const BookingModal = ({ isOpen, onClose, palette: p }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      className={`booking-modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
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
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="booking-modal-body">
          <iframe
            src={`${CAL_BOOKING_URL}?embed=true&theme=light`}
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
  );
};

export default BookingModal;
