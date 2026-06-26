import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, name, price, description, category, image, inStock } = product;

  return (
    <article className="product-card">
      <Link to={`/store/${id}`} className="product-card__img-wrap" aria-label={`View ${name} details`}>
        <img src={image} alt={name} loading="lazy" />
        {!inStock && <span className="product-card__badge">Sold Out</span>}
      </Link>
      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${price}</span>
          <Link to={`/store/${id}`} className="btn-ghost">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
