import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize,  setSelectedSize]  = useState('');
  const [quantity,      setQuantity]      = useState(1);
  const [cartSuccess,   setCartSuccess]   = useState(false);
  const [liked,         setLiked]         = useState(false);

  function handleAddToCart() {
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 3000);
  }

  /* 404 */
  if (!product) {
    return (
      <main>
        <div className="container">
          <div className="product-not-found">
            <h1 className="product-not-found__title">Product Not Found</h1>
            <p className="product-not-found__sub">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/store" className="btn-primary">Back to Store</Link>
          </div>
        </div>
      </main>
    );
  }

  const related       = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
  const fallbackRel   = products.filter((p) => p.id !== product.id).slice(0, 3);
  const displayRel    = related.length >= 2 ? related : fallbackRel;
  const gallery       = product.gallery?.length ? product.gallery : [product.image];

  return (
    <main className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb__link">Home</Link>
          <span className="breadcrumb__sep" aria-hidden="true">/</span>
          <Link to="/store" className="breadcrumb__link">Store</Link>
          <span className="breadcrumb__sep" aria-hidden="true">/</span>
          <span className="breadcrumb__current" aria-current="page">{product.name}</span>
        </nav>

        {/* Product grid */}
        <div className="product-details__grid">
          {/* Gallery */}
          <div>
            <div className="product-gallery__main">
              <img
                src={gallery[selectedImage]}
                alt={`${product.name} — image ${selectedImage + 1}`}
                loading="eager"
              />
            </div>
            {gallery.length > 1 && (
              <div className="product-gallery__thumbs" role="list" aria-label="Image gallery">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`product-gallery__thumb${selectedImage === i ? ' active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                    aria-label={`Image ${i + 1}`}
                    aria-pressed={selectedImage === i}
                    role="listitem"
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="product-info__name">{product.name}</h1>
            <p className="product-info__price">${product.price}</p>

            <div className="product-info__stock" aria-label="Stock status">
              <span className="product-info__stock-dot" aria-hidden="true" />
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            <p className="product-info__desc">{product.description}</p>
            <p style={{ fontSize: 13, color: 'var(--color-muted)', marginBottom: 'var(--spacing-lg)' }}>
              <strong style={{ color: 'var(--color-white)', fontWeight: 700 }}>Material: </strong>
              {product.material}
            </p>

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <p className="product-info__section-label">
                  Color{selectedColor ? `: ${selectedColor}` : ''}
                </p>
                <div className="product-info__colors" role="group" aria-label="Select color">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-btn${selectedColor === color ? ' active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      aria-pressed={selectedColor === color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes?.length > 0 && product.sizes[0] !== 'One Size' && (
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <p className="product-info__section-label">
                  Size{selectedSize ? `: ${selectedSize}` : ''}
                </p>
                <div className="product-info__sizes" role="group" aria-label="Select size">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn${selectedSize === size ? ' active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
              <p className="product-info__section-label">Quantity</p>
              <div className="product-info__quantity" role="group" aria-label="Select quantity">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  &minus;
                </button>
                <span className="qty-value" aria-live="polite">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Cart success */}
            {cartSuccess && (
              <div className="add-to-cart-success" role="status" aria-live="polite">
                ✓ &nbsp; Added to cart
              </div>
            )}

            {/* CTA row */}
            <div className="product-info__cta">
              <button
                className="btn-primary"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                aria-label={`Add ${product.name} to cart`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                className={`product-info__wishlist${liked ? ' liked' : ''}`}
                onClick={() => setLiked(!liked)}
                aria-pressed={liked}
                aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {liked ? '\u2665' : '\u2661'}
              </button>
            </div>

            {/* Info cards */}
            <div className="product-info__cards" role="list">
              {[
                { icon: '\uD83D\uDD12', label: 'Secure Checkout' },
                { icon: '\u21A9',      label: 'Easy Returns' },
                { icon: '\uD83D\uDE80', label: 'Fast Shipping' },
                { icon: '\uD83D\uDCAC', label: 'Customer Support' },
              ].map(({ icon, label }) => (
                <div key={label} className="product-info__card" role="listitem">
                  <span className="product-info__card-icon" aria-hidden="true">{icon}</span>
                  <p className="product-info__card-label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {displayRel.length > 0 && (
          <section style={{ paddingTop: 'var(--spacing-3xl)' }} aria-labelledby="related-heading">
            <SectionTitle label="MORE PIECES" heading="Related Products" />
            <div className="related-products__grid" role="list">
              {displayRel.map((p) => (
                <div key={p.id} role="listitem">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
