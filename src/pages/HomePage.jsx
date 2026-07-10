import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import MusicCard from '../components/MusicCard';
import ShowCard from '../components/ShowCard';
import ProductCard from '../components/ProductCard';
import NewsletterSection from '../components/NewsletterSection';
import { songs } from '../data/songs';
import { shows } from '../data/shows';
import { products } from '../data/products';

/* Lightweight scroll-reveal using IntersectionObserver */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();

  const featuredSong  = songs[0];
  const smallSongs    = songs.slice(1, 4);
  const upcomingShows = shows.slice(0, 3);
  const merchProducts = products.slice(0, 3);

  return (
    <main>
      {/* ── HERO ── */}
      <HeroSection
        label="ADIGO MUSIC WORLD"
        title="ADIGO"
        titleHighlight="MUSIC WORLD"
        subtitle="Music. Shows. Experience."
        description="An international sonic journey connecting African roots, global beats, and unforgettable stage energy."
        ctaPrimary={{ to: 'https://open.spotify.com', label: 'Listen Now', external: true }}
        ctaSecondary={{ to: '/shows', label: 'View All Shows' }}
        bgImage="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* ── FEATURED RELEASE ── */}
      <section className="section home-release reveal" aria-labelledby="release-heading">
        <div className="container">
          <SectionTitle label="LATEST RELEASE" heading="Featured Music" />

          {/* Featured large card */}
          <div className="home-release__featured">
            <MusicCard song={featuredSong} featured />
          </div>

          {/* 3 smaller releases */}
          <div className="home-release__small-grid" role="list">
            {smallSongs.map((song) => (
              <div key={song.id} role="listitem">
                <MusicCard song={song} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE EXPERIENCE ── */}
      <section className="home-live" aria-labelledby="live-heading">
        {/* Full-width concert image */}
        <div className="home-live__bg">
          <img
            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Live performance – crowd and lights"
            loading="lazy"
          />
          <div className="home-live__bg-overlay" aria-hidden="true" />
        </div>

        <div className="container section reveal">
          <div className="home-live__header">
            <div>
              <SectionTitle
                label="LIVE SHOWS"
                heading="Upcoming Shows"
                sub="Join us for unforgettable live experiences around the world."
              />
            </div>
            <Link to="/shows" className="btn-secondary">View All Shows</Link>
          </div>

          <div className="home-live__shows-list" role="list">
            {upcomingShows.map((show) => (
              <div key={show.id} role="listitem">
                <ShowCard show={show} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MERCHANDISE ── */}
      <section className="section home-merch" aria-labelledby="merch-heading">
        <div className="container">
          <div className="home-merch__header reveal">
            <SectionTitle
              label="MERCH DROP"
              heading="Merchandise"
              sub="The official ADIGO MUSIC WORLD clothing collection."
            />
            <Link to="/store" className="btn-secondary">View Store</Link>
          </div>

          <div className="home-merch__grid reveal" role="list">
            {merchProducts.map((product) => (
              <div key={product.id} role="listitem">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTIST STATEMENT ── */}
      <section className="home-statement" aria-label="Artist quote">
        <div className="home-statement__inner reveal">
          <blockquote>
            <p className="home-statement__quote">
              "Music that connects <em>roots</em>, rhythm, stage, and personal story."
            </p>
            <footer>
              <cite className="home-statement__attr">— ADIGO, 2026</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />
    </main>
  );
}
