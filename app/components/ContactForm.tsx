'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="name" required />
          <label htmlFor="name">Your Name</label>
          <div className="form-line"></div>
        </div>
        <div className="form-group">
          <input type="tel" id="phone" required />
          <label htmlFor="phone">WhatsApp Number</label>
          <div className="form-line"></div>
        </div>
        <div className="form-group">
          <select id="service" required defaultValue="">
            <option value="" disabled></option>
            <option value="classic">The Classic Cut</option>
            <option value="ritual">The Full Ritual</option>
            <option value="beard">Beard Architecture</option>
            <option value="quick">The Quick Fix</option>
          </select>
          <label htmlFor="service">Select Your Ritual</label>
          <div className="form-line"></div>
        </div>
        <div className="form-group">
          <input type="date" id="date" required />
          <label htmlFor="date" className="active">Preferred Date</label>
          <div className="form-line"></div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-full"
          style={submitted ? { background: '#2ecc71' } : {}}
        >
          <span>{submitted ? 'Message Sent!' : 'Claim Your Throne'}</span>
          {!submitted && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
