export default function SectionTitle({ label, heading, sub, centered }) {
  return (
    <div className="section-title" style={centered ? { textAlign: 'center' } : {}}>
      {label && (
        <div className="section-title__eyebrow">
          <span className="section-title__label">{label}</span>
          <span className="section-title__line" aria-hidden="true" />
        </div>
      )}
      <h2 className="section-title__heading">{heading}</h2>
      {sub && (
        <p className="section-title__sub" style={centered ? { margin: '16px auto 0' } : {}}>
          {sub}
        </p>
      )}
    </div>
  );
}
