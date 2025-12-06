'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <Image
            src="/logo-transparent.png"
            alt="Barber Growing"
            className="logo-img"
            width={50}
            height={50}
            priority
          />
        </a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>The Man</a></li>
          <li><a href="#services" onClick={closeMenu}>The Ritual</a></li>
          <li><a href="#gallery" onClick={closeMenu}>The Craft</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>The Brotherhood</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Book Your Session</a></li>
        </ul>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
