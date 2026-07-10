import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const id = product.id;
  const name = product.name;
  const price = product.price;
  const description = product.description;
  const category = product.category || product.categories?.name || '';
  const image = product.image || product.image_url || '';
  const inStock = product.inStock ?? product.stock_quantity > 0;

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
