import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter__inner">
        <span className="newsletter__eyebrow">STAY CONNECTED</span>
        <h2 id="newsletter-heading" className="newsletter__title">
          Stay Updated
        </h2>
        <p className="newsletter__sub">
          New shows, exclusive products, and music delivered straight to your inbox.
        </p>

        {submitted ? (
          <p className="newsletter__success" role="status">
            ✓ &nbsp; Thanks! We'll send you updates soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter__form" aria-label="Newsletter signup">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="newsletter__input"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
