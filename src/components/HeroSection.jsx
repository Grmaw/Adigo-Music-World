import { Link } from 'react-router-dom';

export default function HeroSection({ label, title, titleHighlight, subtitle, description, ctaPrimary, ctaSecondary, bgImage }) {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__bg">
        {bgImage && <img src={bgImage} alt="Live performance on stage" loading="eager" />}
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        {label && <span className="hero__eyebrow">{label}</span>}

        <h1 className="hero__title">
          {title}
          {titleHighlight && <><br /><em>{titleHighlight}</em></>}
        </h1>

        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {description && <p className="hero__desc">{description}</p>}

        {(ctaPrimary || ctaSecondary) && (
          <div className="hero__actions">
            {ctaPrimary && (
              ctaPrimary.external
                ? <a href={ctaPrimary.to} target="_blank" rel="noopener noreferrer" className="btn-primary">{ctaPrimary.label}</a>
                : <Link to={ctaPrimary.to} className="btn-primary">{ctaPrimary.label}</Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="btn-secondary">{ctaSecondary.label}</Link>
            )}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">SCROLL</span>
        <span></span>
      </div>
    </section>
  );
}
