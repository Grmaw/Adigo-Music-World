const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ShowCard({ show }) {
  const { title, date, time, city, venue, ticketUrl, mapUrl } = show;
  const dateObj = new Date(date);
  const day   = dateObj.getDate();
  const month = MONTHS_EN[dateObj.getMonth()];

  return (
    <article className="show-card">
      <div className="show-card__date-box" aria-label={`Date: ${day} ${month}`}>
        <span className="show-card__day">{day}</span>
        <span className="show-card__month">{month}</span>
      </div>

      <div className="show-card__info">
        <p className="show-card__city">{city} — {title}</p>
        <p className="show-card__venue">{venue}</p>
        <p className="show-card__time">{time}</p>
      </div>

      <div className="show-card__actions">
        <a href={ticketUrl} className="btn-primary" aria-label={`Tickets for show in ${city}`}>
          Tickets
        </a>
        <a href={mapUrl} className="btn-secondary" aria-label={`Map to ${venue}`}>
          Map
        </a>
      </div>
    </article>
  );
}
