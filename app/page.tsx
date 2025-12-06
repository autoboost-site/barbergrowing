import Image from "next/image";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Villa Service • Bali</div>
          <h1 className="hero-title">
            <span className="title-line">The Barbershop</span>
            <span className="title-line accent">Comes To You</span>
            <span className="title-line">At Your Villa</span>
          </h1>
          <p className="hero-subtitle">Premium grooming delivered to your doorstep. No traffic. No waiting. Just you, Rio, and the perfect cut.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Book Your Session</a>
            <a href="#about" className="btn btn-secondary">Meet Rio</a>
          </div>
          <div className="hero-scroll">
            <span>Scroll to discover</span>
            <div className="scroll-line"></div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-diamond"></div>
          <div className="decoration-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Legend</span>
            <h2 className="section-title">Meet <span className="gold">Rio</span></h2>
            <div className="title-ornament">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <div className="image-frame">
                <div className="image-placeholder">
                  <span className="placeholder-text">RIO</span>
                </div>
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="label">Years of<br />Excellence</span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">Some barbers cut hair. Rio sculpts confidence—at your villa.</p>
              <p className="about-text">Why fight Bali traffic when the barbershop can come to you? Rio brings 15 years of expertise directly to your villa, whether you&apos;re in Canggu, Seminyak, Uluwatu, or anywhere across the island. Same premium experience, zero hassle.</p>
              <p className="about-text">From expat entrepreneurs to vacationing executives, Rio has built his reputation one villa visit at a time. Word spread through the villas, resorts, and private compounds of Bali. Not through ads—through the men who looked sharp at every pool party and business dinner.</p>
              <div className="about-quote">
                <blockquote>&ldquo;Your villa is your sanctuary. I bring the craft to you.&rdquo;</blockquote>
                <cite>— Rio</cite>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Villas Visited</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Return Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">All Bali</span>
                  <span className="stat-label">Coverage Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="services-bg"></div>
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">The Experience</span>
            <h2 className="section-title">The <span className="gold">Ritual</span></h2>
            <div className="title-ornament">
              <span></span><span></span><span></span>
            </div>
            <p className="section-subtitle">Premium grooming delivered to your villa. All equipment included.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 3v18M18 3v18M6 9h12M6 15h12M2 6h4M18 6h4M2 18h4M18 18h4" />
                </svg>
              </div>
              <h3 className="service-title">The Classic Cut</h3>
              <p className="service-desc">Precision scissor work at your villa. Hot towel, consultation, and the cut that makes you look like you were born ready.</p>
              <div className="service-details">
                <span className="service-duration">45 min</span>
                <span className="service-price">IDR 250K</span>
              </div>
            </div>
            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="service-title">The Full Ritual</h3>
              <p className="service-desc">The complete villa experience. Cut, beard sculpting, hot towel treatment, and a shoulder massage—all in the comfort of your own space.</p>
              <div className="service-details">
                <span className="service-duration">90 min</span>
                <span className="service-price">IDR 450K</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="service-title">Beard Architecture</h3>
              <p className="service-desc">Your beard deserves engineering, not trimming. Precision lines, perfect fades, and oils that smell like success.</p>
              <div className="service-details">
                <span className="service-duration">30 min</span>
                <span className="service-price">IDR 150K</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="service-title">The Quick Fix</h3>
              <p className="service-desc">Between meetings? Hot date in an hour? The sharp touch-up that takes you from &ldquo;just woke up&rdquo; to &ldquo;just closed the deal.&rdquo;</p>
              <div className="service-details">
                <span className="service-duration">20 min</span>
                <span className="service-price">IDR 100K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">The <span className="gold">Craft</span></h2>
            <div className="title-ornament">
              <span></span><span></span><span></span>
            </div>
            <p className="section-subtitle">Every cut is a signature. Every style, a statement.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <div className="gallery-placeholder"><span>Classic Fade</span></div>
              <div className="gallery-overlay">
                <span className="gallery-title">The Executive</span>
                <span className="gallery-desc">Clean. Sharp. Powerful.</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder"><span>Modern Texture</span></div>
              <div className="gallery-overlay">
                <span className="gallery-title">The Creative</span>
                <span className="gallery-desc">Rules are suggestions.</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder"><span>Beard Design</span></div>
              <div className="gallery-overlay">
                <span className="gallery-title">The Viking</span>
                <span className="gallery-desc">Tamed wilderness.</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder"><span>Slick Back</span></div>
              <div className="gallery-overlay">
                <span className="gallery-title">The Don</span>
                <span className="gallery-desc">Timeless authority.</span>
              </div>
            </div>
            <div className="gallery-item large">
              <div className="gallery-placeholder"><span>Full Transformation</span></div>
              <div className="gallery-overlay">
                <span className="gallery-title">The Reinvention</span>
                <span className="gallery-desc">Same man. New era.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Rio Comes To You</h2>
            <p className="cta-text">Premium barbering delivered to your villa. Canggu, Seminyak, Uluwatu, Ubud—wherever you are in Bali, Rio is on the way.</p>
            <div className="cta-divider">
              <span></span>
              <span className="diamond"></span>
              <span></span>
            </div>
            <a href="#contact" className="btn btn-gold btn-large">Book Your Villa Session</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-header left">
                <span className="section-tag">Get In Touch</span>
                <h2 className="section-title">Book Your <span className="gold">Session</span></h2>
              </div>
              <p className="contact-lead">Walk-ins welcome, but legends book ahead.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="label">Service Area</span>
                    <span className="value">All Bali - Villa Service</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="label">WhatsApp</span>
                    <span className="value">+62 XXX XXXX XXXX</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="label">Hours</span>
                    <span className="value">Mon - Sat: 9AM - 8PM</span>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Image
                src="/logo-transparent.png"
                alt="Barber Growing"
                className="footer-logo-img"
                width={80}
                height={80}
              />
            </div>
            <p className="footer-tagline">You can change your girlfriend but not your barber.</p>
            <div className="footer-divider"></div>
            <p className="footer-copy">&copy; 2024 Barber Growing. All rights reserved. Crafted in Bali.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
