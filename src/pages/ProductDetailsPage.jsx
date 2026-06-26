import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { supabase } from '../lib/supabase';

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartSuccess, setCartSuccess] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      setProduct(null);
      setRelated([]);

      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name
          )
        `)
        .eq('id', productId)
        .single();

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setError('Product not found');
        setLoading(false);
        return;
      }

      setProduct(data);
      setLoading(false);

      // Fetch related products from same category
      const { data: relData } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name
          )
        `)
        .eq('is_active', true)
        .eq('category_id', data.category_id)
        .neq('id', data.id)
        .order('id', { ascending: true })
        .limit(3);

      if (relData && relData.length > 0) {
        setRelated(relData);
      } else {
        const { data: fallback } = await supabase
          .from('products')
          .select(`
            *,
            categories (
              id,
              name
            )
          `)
          .eq('is_active', true)
          .neq('id', data.id)
          .order('id', { ascending: true })
          .limit(3);
        setRelated(fallback || []);
      }
    }

    fetchProduct();
  }, [productId]);

  function handleAddToCart() {
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 3000);
  }

  // Normalize product fields for UI
  const p = product;
  const name = p?.name || '';
  const price = p?.price || 0;
  const description = p?.description || '';
  const material = p?.material || '';
  const image = p?.image_url || '';
  const inStock = p ? p.stock_quantity > 0 : false;
  const category = p?.categories?.name || p?.category || '';
  const colors = p?.colors || [];
  const sizes = p?.sizes || [];
  const gallery = p?.gallery?.length ? p.gallery : [image];

  // Error state
  if (error && !loading) {
    return (
      <main>
        <div className="container">
          <div className="product-not-found">
            <h1 className="product-not-found__title">Something went wrong</h1>
            <p className="product-not-found__sub">{error}</p>
            <Link to="/store" className="btn-primary">Back to Store</Link>
          </div>
        </div>
      </main>
    );
  }

  // Not found / empty
  if (!loading && !product) {
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

  return (
    <main className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb__link">Home</Link>
          <span className="breadcrumb__sep" aria-hidden="true">/</span>
          <Link to="/store" className="breadcrumb__link">Store</Link>
          <span className="breadcrumb__sep" aria-hidden="true">/</span>
          <span className="breadcrumb__current" aria-current="page">{name}</span>
        </nav>

        {/* Loading */}
        {loading && (
          <div className="shows-no-results" role="status" style={{ padding: 'var(--spacing-3xl) 0' }}>
            <p style={{ fontSize: 16, color: 'var(--color-muted)' }}>Loading product...</p>
          </div>
        )}

        {/* Product grid */}
        {!loading && product && (
          <>
            <div className="product-details__grid">
              {/* Gallery */}
              <div>
                <div className="product-gallery__main">
                  <img
                    src={gallery[selectedImage]}
                    alt={`${name} — image ${selectedImage + 1}`}
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
                        <img src={img} alt={`${name} view ${i + 1}`} loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <h1 className="product-info__name">{name}</h1>
                <p className="product-info__price">${price}</p>

                <div className="product-info__stock" aria-label="Stock status">
                  <span className="product-info__stock-dot" aria-hidden="true" />
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </div>

                <p className="product-info__desc">{description}</p>
                <p style={{ fontSize: 13, color: 'var(--color-muted)', marginBottom: 'var(--spacing-lg)' }}>
                  <strong style={{ color: 'var(--color-white)', fontWeight: 700 }}>Material: </strong>
                  {material}
                </p>

                {/* Colors */}
                {colors.length > 0 && (
                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <p className="product-info__section-label">
                      Color{selectedColor ? `: ${selectedColor}` : ''}
                    </p>
                    <div className="product-info__colors" role="group" aria-label="Select color">
                      {colors.map((color) => (
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
                {sizes.length > 0 && sizes[0] !== 'One Size' && (
                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <p className="product-info__section-label">
                      Size{selectedSize ? `: ${selectedSize}` : ''}
                    </p>
                    <div className="product-info__sizes" role="group" aria-label="Select size">
                      {sizes.map((size) => (
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
                      −
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
                    disabled={!inStock}
                    aria-label={`Add ${name} to cart`}
                  >
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
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
                    { icon: '\u21A9', label: 'Easy Returns' },
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
            {related.length > 0 && (
              <section style={{ paddingTop: 'var(--spacing-3xl)' }} aria-labelledby="related-heading">
                <SectionTitle label="MORE PIECES" heading="Related Products" />
                <div className="related-products__grid" role="list">
                  {related.map((p) => (
                    <div key={p.id} role="listitem">
                      <ProductCard product={p} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
