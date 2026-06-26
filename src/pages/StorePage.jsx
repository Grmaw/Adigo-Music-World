import { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import NewsletterSection from '../components/NewsletterSection';
import { products } from '../data/products';

export default function StorePage() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy]                 = useState('');
  const cartCount = 2;
  const cartTotal = 98;

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (categoryFilter) list = list.filter((p) => p.category === categoryFilter);
    if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [categoryFilter, sortBy]);

  return (
    <main>
      {/* ── STORE HEADER ── */}
      <div className="store-hero">
        <div className="container">
          <div className="store-hero__inner">
            <div>
              <h1 className="store-hero__title">Store</h1>
              <p className="store-hero__sub">The official ADIGO merchandise — Global Style.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="store-wrapper">
          {/* Main content */}
          <div>
            {/* Filters */}
            <div className="store-filters" role="search" aria-label="Product filters">
              <span className="store-filters__label">Filter:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="store-filters__select"
                aria-label="Category"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="store-filters__select"
                aria-label="Sort by"
              >
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="name">A → Z</option>
              </select>
              {(categoryFilter || sortBy) && (
                <button
                  onClick={() => { setCategoryFilter(''); setSortBy(''); }}
                  className="btn-ghost"
                  style={{ padding: '7px 14px', fontSize: 11 }}
                >
                  Clear
                </button>
              )}
              <span className="store-count">{filteredProducts.length} products</span>
            </div>

            <SectionTitle label="COLLECTION" heading="All Products" />

            <div className="store-products-grid" role="list">
              {filteredProducts.map((product) => (
                <div key={product.id} role="listitem">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Cart sidebar */}
          <aside className="store-cart-summary" aria-label="Shopping cart summary">
            <h2 className="store-cart-summary__title">Shopping Cart</h2>
            <div className="store-cart-summary__row">
              <span>Items</span>
              <span>{cartCount}</span>
            </div>
            <div className="store-cart-summary__row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <p className="store-cart-summary__total">${cartTotal}</p>
            <button className="btn-primary">View Cart</button>
          </aside>
        </div>
      </div>

      <NewsletterSection />
    </main>
  );
}
