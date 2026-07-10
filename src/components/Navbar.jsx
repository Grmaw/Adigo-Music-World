import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/music', label: 'Music' },
    { to: '/videos', label: 'Videos' },
    { to: '/shows', label: 'Shows' },
    { to: '/store', label: 'Store' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="navbar__inner">
        {/* Logo — left side (LTR) */}
        <Link to="/" className="navbar__logo" aria-label="ADIGO MUSIC WORLD - Home">
          ADIGO <span>MUSIC WORLD</span>
        </Link>

        {/* Center nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: socials + cart */}
        <div className="navbar__right">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
            IG
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
            YT
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
            SP
          </a>
          <button className="navbar__cart" aria-label="Shopping cart">
            Cart
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="navbar__mobile-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">YouTube</a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="navbar__social-link">Spotify</a>
        </div>
      </div>
    </header>
  );
}
