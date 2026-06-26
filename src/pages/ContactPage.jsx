import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import NewsletterSection from '../components/NewsletterSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  }

  return (
    <main>
      {/* ── HERO ── */}
      <div className="shows-hero">
        <div className="shows-hero__bg">
          <img
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Contact"
            loading="eager"
          />
        </div>
        <div className="shows-hero__overlay" aria-hidden="true" />
        <div className="shows-hero__content">
          <span className="shows-hero__eyebrow">GET IN TOUCH</span>
          <h1 className="shows-hero__title">Contact</h1>
          <p className="shows-hero__sub">Booking, press inquiries, and general questions</p>
        </div>
      </div>

      {/* ── CONTACT SECTION ── */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="store-wrapper">
            {/* Contact Form */}
            <div>
              <SectionTitle label="REACH OUT" heading="Send a Message" />

              {submitted ? (
                <div className="add-to-cart-success" role="status" style={{ padding: 'var(--spacing-xl)' }}>
                  <span style={{ fontSize: 48 }}>✓</span>
                  <p style={{ marginTop: 16 }}>Thanks for reaching out! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ marginTop: 'var(--spacing-xl)' }}>
                  <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label htmlFor="name" className="product-info__section-label" style={{ display: 'block', marginBottom: 8 }}>
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="newsletter__input"
                      style={{ width: '100%' }}
                      required
                    />
                  </p>
                  <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label htmlFor="email" className="product-info__section-label" style={{ display: 'block', marginBottom: 8 }}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="newsletter__input"
                      style={{ width: '100%' }}
                      required
                    />
                  </p>
                  <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <label htmlFor="message" className="product-info__section-label" style={{ display: 'block', marginBottom: 8 }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="newsletter__input"
                      style={{ width: '100%', minHeight: 150, resize: 'vertical' }}
                      required
                    />
                  </p>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <aside className="store-cart-summary">
              <h2 className="store-cart-summary__title">Contact Info</h2>
              <div className="store-cart-summary__row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ fontWeight: 700, color: 'var(--color-white)' }}>Booking</span>
                <a href="mailto:booking@adigomusic.com" className="footer__link">booking@adigomusic.com</a>
              </div>
              <div className="store-cart-summary__row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ fontWeight: 700, color: 'var(--color-white)' }}>Press</span>
                <a href="mailto:press@adigomusic.com" className="footer__link">press@adigomusic.com</a>
              </div>
              <div className="store-cart-summary__row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ fontWeight: 700, color: 'var(--color-white)' }}>General</span>
                <a href="mailto:contact@adigomusic.com" className="footer__link">contact@adigomusic.com</a>
              </div>
              <div className="store-cart-summary__row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ fontWeight: 700, color: 'var(--color-white)' }}>Phone</span>
                <span style={{ color: 'var(--color-muted)' }}>+1 (555) 000-0000</span>
              </div>

              <h2 className="store-cart-summary__title" style={{ marginTop: 'var(--spacing-xl)' }}>Follow Us</h2>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '10px 16px' }}>Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '10px 16px' }}>YouTube</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
