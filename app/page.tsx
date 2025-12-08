import Image from "next/image";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const WHATSAPP_URL = "https://wa.me/6282144845103?text=Hi%20Rio!%20I%27d%20like%20to%20book%20a%20haircut%20at%20my%20villa.";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/logo-transparent.png"
        >
          <source src="/Luxury_Bali_Haircut_Cinematic_Footage.mp4" type="video/mp4" />
        </video>
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book on WhatsApp</a>
            <a href="#about" className="btn btn-secondary">Meet Rio</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to discover</span>
          <div className="scroll-line"></div>
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
                <Image
                  src="/Rio.png"
                  alt="Rio - Professional Barber"
                  className="rio-photo"
                  width={400}
                  height={500}
                  priority
                />
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
              <div className="experience-badge">
                <span className="years">5+</span>
                <span className="label">Years of<br />Excellence</span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">Some barbers cut hair. Rio sculpts confidence—at your villa.</p>
              <p className="about-text">Why fight Bali traffic when the barbershop can come to you? Rio brings 5 years of expertise directly to your villa, whether you&apos;re in Canggu, Seminyak, Uluwatu, or anywhere across the island. Same premium experience, zero hassle.</p>
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
              <h3 className="service-title">The Haircut</h3>
              <p className="service-desc">Premium haircut at your villa. Consultation, precision cutting, and styling. You sit back, Rio works his magic.</p>
              <div className="service-details">
                <span className="service-duration">30 min</span>
                <span className="service-price">IDR 200K</span>
              </div>
            </div>
            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="service-title">Haircut + Beard</h3>
              <p className="service-desc">The complete package. Fresh haircut plus beard trim and shaping. Walk out of your villa looking sharp from every angle.</p>
              <div className="service-details">
                <span className="service-duration">45 min</span>
                <span className="service-price">IDR 300K</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="service-title">Beard Trim</h3>
              <p className="service-desc">Keep your beard looking clean and sharp. Precision lines, perfect shape, and the finishing touches that make the difference.</p>
              <div className="service-details">
                <span className="service-duration">20 min</span>
                <span className="service-price">IDR 200K</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="service-title">Villa Group</h3>
              <p className="service-desc">Got the whole crew at your villa? Rio handles everyone. Same quality, same precision—group rates for 3 or more people.</p>
              <div className="service-details">
                <span className="service-duration">Per person</span>
                <span className="service-price">IDR 200K+</span>
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
            <div className="gallery-item">
              <Image
                src="/The Executive.png"
                alt="The Executive - Classic Fade"
                className="gallery-image"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="gallery-overlay">
                <span className="gallery-title">The Executive</span>
                <span className="gallery-desc">Clean. Sharp. Powerful.</span>
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/The Creative.png"
                alt="The Creative - Modern Texture"
                className="gallery-image"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="gallery-overlay">
                <span className="gallery-title">The Creative</span>
                <span className="gallery-desc">Rules are suggestions.</span>
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/The Vicking.png"
                alt="The Viking - Beard Design"
                className="gallery-image"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="gallery-overlay">
                <span className="gallery-title">The Viking</span>
                <span className="gallery-desc">Tamed wilderness.</span>
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/The Don.png"
                alt="The Don - Slick Back"
                className="gallery-image"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="gallery-overlay">
                <span className="gallery-title">The Don</span>
                <span className="gallery-desc">Timeless authority.</span>
              </div>
            </div>
            <div className="gallery-item wide">
              <Image
                src="/The Reinvention.png"
                alt="The Reinvention - Full Transformation"
                className="gallery-image"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
              />
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-large">Book on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-centered">
            <div className="section-header">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Book Your <span className="gold">Session</span></h2>
              <div className="title-ornament">
                <span></span><span></span><span></span>
              </div>
            </div>
            <p className="contact-lead">Message Rio directly on WhatsApp to book your villa appointment.</p>
            <div className="contact-details-centered">
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="label">Hours</span>
                  <span className="value">Mon - Sun: 9AM - 8PM</span>
                </div>
              </div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-large">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat with Rio on WhatsApp</span>
            </a>
            <p className="whatsapp-number">+62 821-4484-5103</p>
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
