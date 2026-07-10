/*
# Create products and categories tables

1. New Tables
- `categories`
  - `id` (serial, primary key)
  - `name` (text, not null)
- `products`
  - `id` (serial, primary key)
  - `name` (text, not null)
  - `description` (text, not null)
  - `price` (numeric, not null)
  - `image_url` (text, not null)
  - `material` (text, not null)
  - `stock_quantity` (integer, not null)
  - `is_featured` (boolean, default false)
  - `is_active` (boolean, default true)
  - `category_id` (integer, references categories(id))

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated SELECT because data is public.
*/

CREATE TABLE IF NOT EXISTS categories (
  id serial PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id serial PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  material text NOT NULL,
  stock_quantity integer NOT NULL DEFAULT 0,
  is_featured boolean NOT NULL DEFAULT false,
  is_active boolean NOT NULL DEFAULT true,
  category_id integer REFERENCES categories(id)
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_categories" ON categories;
CREATE POLICY "anon_select_categories" ON categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_select_products" ON products;
CREATE POLICY "anon_select_products" ON products FOR SELECT
  TO anon, authenticated USING (true);
