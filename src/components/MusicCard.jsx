export default function MusicCard({ song, featured }) {
  const { title, year, description, cover, externalUrl } = song;

  if (featured) {
    return (
      <article className="music-card music-card--featured">
        <div className="music-card__cover">
          <img src={cover} alt={`Album cover ${title}`} loading="eager" />
          <div className="music-card__play" aria-hidden="true">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="music-card__play-btn"
              aria-label={`Listen to ${title}`}
            >
              &#9654;
            </a>
          </div>
        </div>
        <div className="music-card__body">
          <span className="music-card__year">{year} &nbsp;·&nbsp; Single</span>
          <h3 className="music-card__title">{title}</h3>
          <p className="music-card__desc">{description}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Listen Now
            </a>
            <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Watch Video
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="music-card">
      <div className="music-card__cover">
        <img src={cover} alt={`Song cover ${title}`} loading="lazy" />
        <div className="music-card__play" aria-hidden="true">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="music-card__play-btn"
            aria-label={`Listen to ${title}`}
          >
            &#9654;
          </a>
        </div>
      </div>
      <div className="music-card__body">
        <span className="music-card__year">{year}</span>
        <h3 className="music-card__title">{title}</h3>
        <p className="music-card__desc">{description}</p>
      </div>
    </article>
  );
}
