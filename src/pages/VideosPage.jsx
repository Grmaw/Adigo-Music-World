import SectionTitle from '../components/SectionTitle';
import NewsletterSection from '../components/NewsletterSection';

const videos = [
  {
    id: 1,
    title: 'Free Spirit — Official Video',
    year: 2024,
    thumbnail: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=900',
    url: 'https://youtube.com',
  },
  {
    id: 2,
    title: 'London Nights — Live Session',
    year: 2024,
    thumbnail: 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=900',
    url: 'https://youtube.com',
  },
  {
    id: 3,
    title: 'Fire & Water — Behind The Scenes',
    year: 2023,
    thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=900',
    url: 'https://youtube.com',
  },
];

export default function VideosPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <div className="shows-hero">
        <div className="shows-hero__bg">
          <img
            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Video production"
            loading="eager"
          />
        </div>
        <div className="shows-hero__overlay" aria-hidden="true" />
        <div className="shows-hero__content">
          <span className="shows-hero__eyebrow">ADIGO VISUALS</span>
          <h1 className="shows-hero__title">Videos</h1>
          <p className="shows-hero__sub">Official music videos, live performances, and behind-the-scenes</p>
        </div>
      </div>

      {/* ── VIDEO GRID ── */}
      <section className="section" aria-labelledby="videos-heading">
        <div className="container">
          <SectionTitle label="WATCH" heading="All Videos" />
          <div className="store-products-grid" role="list">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
                style={{ textDecoration: 'none' }}
                role="listitem"
              >
                <div className="product-card__img-wrap">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" />
                  <div className="music-card__play" style={{ opacity: 1 }}>
                    <span className="music-card__play-btn">&#9654;</span>
                  </div>
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">{video.year}</span>
                  <h3 className="product-card__name">{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
