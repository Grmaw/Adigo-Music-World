import SectionTitle from '../components/SectionTitle';
import MusicCard from '../components/MusicCard';
import NewsletterSection from '../components/NewsletterSection';
import { songs } from '../data/songs';

export default function MusicPage() {
  const featuredSong = songs[0];
  const otherSongs = songs.slice(1);

  return (
    <main>
      {/* ── HERO ── */}
      <div className="shows-hero">
        <div className="shows-hero__bg">
          <img
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Music studio"
            loading="eager"
          />
        </div>
        <div className="shows-hero__overlay" aria-hidden="true" />
        <div className="shows-hero__content">
          <span className="shows-hero__eyebrow">ADIGO SOUND</span>
          <h1 className="shows-hero__title">Music</h1>
          <p className="shows-hero__sub">Explore the full ADIGO discography</p>
        </div>
      </div>

      {/* ── FEATURED RELEASE ── */}
      <section className="section" aria-labelledby="featured-music-heading">
        <div className="container">
          <SectionTitle label="LATEST RELEASE" heading="Featured Track" />
          <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <MusicCard song={featuredSong} featured />
          </div>
        </div>
      </section>

      {/* ── ALL RELEASES ── */}
      <section className="section" aria-labelledby="all-music-heading">
        <div className="container">
          <SectionTitle label="DISCOGRAPHY" heading="All Releases" />
          <div className="home-release__small-grid" role="list">
            {otherSongs.map((song) => (
              <div key={song.id} role="listitem">
                <MusicCard song={song} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
