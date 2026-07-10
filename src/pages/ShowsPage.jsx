import { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import ShowCard from '../components/ShowCard';
import NewsletterSection from '../components/NewsletterSection';
import { shows } from '../data/shows';

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_ABR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ShowsPage() {
  const [searchQuery, setSearchQuery]   = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const featuredShow = shows.find((s) => s.featured);
  const otherShows   = shows.filter((s) => !s.featured);
  const cities       = [...new Set(shows.map((s) => s.city))];

  const filteredShows = useMemo(() => {
    return otherShows.filter((show) => {
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        !q ||
        show.city.includes(q) ||
        show.venue.toLowerCase().includes(q) ||
        show.title.toLowerCase().includes(q);
      const matchesCity  = !selectedCity  || show.city === selectedCity;
      const matchesMonth = !selectedMonth || new Date(show.date).getMonth() === parseInt(selectedMonth);
      return matchesQuery && matchesCity && matchesMonth;
    });
  }, [searchQuery, selectedCity, selectedMonth, otherShows]);

  function clearFilters() {
    setSearchQuery(''); setSelectedCity(''); setSelectedMonth('');
  }

  const featuredDate = featuredShow ? new Date(featuredShow.date) : null;

  return (
    <main>
      {/* ── HERO ── */}
      <div className="shows-hero">
        <div className="shows-hero__bg">
          <img
            src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Concert crowd"
            loading="eager"
          />
        </div>
        <div className="shows-hero__overlay" aria-hidden="true" />
        <div className="shows-hero__content">
          <span className="shows-hero__eyebrow">ADIGO ON TOUR</span>
          <h1 className="shows-hero__title">Shows</h1>
          <p className="shows-hero__sub">All upcoming ADIGO performances worldwide</p>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="shows-filters">
        <div className="shows-filters__inner">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, venue, or show name..."
            className="shows-filters__input"
            aria-label="Search shows"
          />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="shows-filters__select"
            aria-label="Filter by city"
          >
            <option value="">All Cities</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="shows-filters__select"
            aria-label="Filter by month"
          >
            <option value="">All Months</option>
            {MONTHS_EN.map((month, i) => <option key={i} value={i}>{month}</option>)}
          </select>
          {(searchQuery || selectedCity || selectedMonth) && (
            <button onClick={clearFilters} className="btn-secondary" style={{ padding: '9px 18px', fontSize: 12 }}>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ── FEATURED SHOW ── */}
      {featuredShow && (
        <section className="section" aria-labelledby="featured-show-heading">
          <div className="container">
            <SectionTitle label="FEATURED" heading="Featured Show" />
            <div className="shows-featured">
              <div className="shows-featured__img">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt={`Performance in ${featuredShow.city}`}
                  loading="lazy"
                />
                <span className="shows-featured__badge">FEATURED</span>
              </div>
              <div>
                <p className="shows-featured__date">
                  {featuredDate && featuredDate.getDate()}
                </p>
                <span className="shows-featured__month">
                  {featuredDate && MONTHS_EN[featuredDate.getMonth()]} {featuredDate && featuredDate.getFullYear()}
                </span>
                <h2 id="featured-show-heading" className="shows-featured__title">
                  {featuredShow.title}
                </h2>
                <p className="shows-featured__meta">
                  {featuredShow.venue} &nbsp;·&nbsp; {featuredShow.time}
                </p>
                <p className="shows-featured__desc">{featuredShow.description}</p>
                <div className="shows-featured__actions">
                  <a href={featuredShow.ticketUrl} className="btn-primary">Get Tickets</a>
                  <a href={featuredShow.mapUrl} className="btn-secondary">Map</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ALL SHOWS ── */}
      <section className="section shows-list-section" aria-label="All shows">
        <div className="container">
          <h2 className="shows-list-title">All Shows</h2>
          {filteredShows.length === 0 ? (
            <div className="shows-no-results" role="status">
              No shows found matching your search.
            </div>
          ) : (
            <div role="list">
              {filteredShows.map((show) => (
                <div key={show.id} role="listitem">
                  <ShowCard show={show} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="section--sm" aria-label="Tour map">
        <div className="container">
          <SectionTitle label="LOCATIONS" heading="Tour Map" />
          <div className="shows-map-placeholder">
            <div className="shows-map-placeholder__grid" aria-hidden="true" />
            <p className="shows-map-placeholder__text">TOUR MAP — COMING SOON</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
            <a href="#" className="btn-secondary">View Map</a>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
