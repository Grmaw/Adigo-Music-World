import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div>
            <span className="footer__logo">ADIGO <span>MUSIC WORLD</span></span>
            <p className="footer__tagline">
              Music that connects roots, rhythm, stage, and personal story. Afro-Global Sound.
            </p>
            <a href="mailto:contact@adigomusic.com" className="footer__contact-item">
              contact@adigomusic.com
            </a>
            <p className="footer__contact-item">+1 (555) 000-0000</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer__heading">Navigation</p>
            <nav className="footer__links" aria-label="Footer navigation">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/music" className="footer__link">Music</Link>
              <Link to="/videos" className="footer__link">Videos</Link>
              <Link to="/shows" className="footer__link">Shows</Link>
              <Link to="/store" className="footer__link">Store</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="footer__heading">Follow Us</p>
            <nav className="footer__links" aria-label="Social media">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__link">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__link">YouTube</a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="footer__link">Spotify</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer__link">TikTok</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className="footer__heading">Updates</p>
            {submitted ? (
              <p style={{ color: 'var(--color-success)', fontWeight: 700, fontSize: 14 }}>
                Thanks! We'll send you updates soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="footer__newsletter-form" aria-label="Newsletter signup">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="footer__newsletter-input"
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="btn-primary" style={{ fontSize: 12, padding: '11px 20px' }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 ADIGO MUSIC WORLD. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Privacy</a>
            <a href="#" className="footer__link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
