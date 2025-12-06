'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Rio comes to our villa in Uluwatu every two weeks. No traffic, no hassle—just premium grooming by the pool. This is how it should be done everywhere.",
    avatar: "JM",
    name: "James Mitchell",
    title: "Tech Entrepreneur, Australia"
  },
  {
    text: "We had 8 guys staying at our villa in Canggu. Rio came over and got everyone sorted in one afternoon. Professional, punctual, and the results speak for themselves.",
    avatar: "MK",
    name: "Marcus Klein",
    title: "Digital Nomad, Germany"
  },
  {
    text: "I messaged Rio at 7am, he was at my Seminyak villa by 9am. Fresh cut before my photoshoot. This man is reliable, skilled, and understands urgency.",
    avatar: "DP",
    name: "David Park",
    title: "Photographer, South Korea"
  },
  {
    text: "Been living in Bali for 3 years and Rio is the only barber I trust. He knows exactly what I want without me having to explain. The convenience of villa service is unmatched.",
    avatar: "TH",
    name: "Thomas Henderson",
    title: "Expat Business Owner, UK"
  },
  {
    text: "Had my wedding in Ubud. Rio came to our villa and sorted out the entire groomsmen party. Everyone looked incredible. Absolute legend.",
    avatar: "RS",
    name: "Ryan Santos",
    title: "Software Engineer, USA"
  },
  {
    text: "First time using a mobile barber and I'm never going back to a shop. Rio's attention to detail is next level. Worth every rupiah.",
    avatar: "LA",
    name: "Lucas Anderson",
    title: "Content Creator, Canada"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-bg"></div>
      <div className="container">
        <div className="section-header light">
          <span className="section-tag">The Proof</span>
          <h2 className="section-title">The <span className="gold">Brotherhood</span></h2>
          <div className="title-ornament">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div className="testimonials-wrapper">
          <button className="testimonial-arrow prev" onClick={goToPrev} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="testimonials-slider">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card ${i === current ? 'active' : ''}`}>
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div className="author-info">
                    <span className="author-name">{t.name}</span>
                    <span className="author-title">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonial-arrow next" onClick={goToNext} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
        <div className="testimonial-nav">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
        <div className="testimonial-counter">
          {current + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
}
