/*
# Seed products and categories with existing data

1. Insert categories matching the dummy data
2. Insert all products from the existing products.js with mapped fields
*/

INSERT INTO categories (id, name) VALUES
  (1, 'Apparel'),
  (2, 'Accessories')
ON CONFLICT (id) DO NOTHING;

INSERT INTO products (
  id, name, description, price, image_url, material, stock_quantity, is_featured, is_active, category_id
) VALUES
  (1, 'ADIGO Black Tour T-Shirt', 'Premium cotton t-shirt with ADIGO MUSIC WORLD logo on chest. Clean, minimalist design with a perfect fit.', 45, 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=600', '100% organic cotton, 220gsm weight', 50, false, true, 1),
  (2, 'ADIGO Signature Hoodie', 'Premium hoodie with ADIGO print on back in full size. Double stitching, front kangaroo pocket.', 85, 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600', '80% cotton, 20% polyester, brushed interior', 30, false, true, 1),
  (3, 'ADIGO Snapback Cap', '5-panel cap with embroidered ADIGO logo. Adjustable strap, one size fits all.', 35, 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600', '100% polyester, adjustable strap', 40, false, true, 2),
  (4, 'ADIGO Canvas Tote', 'Canvas tote bag with ADIGO MUSIC WORLD print. Lightweight and durable — perfect for every day.', 28, 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600', '100% heavy canvas 380g, long handles', 60, false, true, 2),
  (5, 'ADIGO Oversize Tee', 'Oversize t-shirt with African-global graphic print. Relaxed, contemporary fit.', 55, 'https://images.pexels.com/photos/7691167/pexels-photo-7691167.jpeg?auto=compress&cs=tinysrgb&w=600', '100% cotton, oversize fit', 25, false, true, 1),
  (6, 'ADIGO Leather Bracelet', 'Black leather bracelet with engraved ADIGO metal plate. A unique musical accessory — attention to detail.', 22, 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600', 'Italian genuine leather, stainless steel plate', 100, false, true, 2),
  (7, 'ADIGO Classic Sweatshirt', 'Classic sweatshirt with embroidered ADIGO logo on the side. Clean premium finish for every season.', 75, 'https://images.pexels.com/photos/6311463/pexels-photo-6311463.jpeg?auto=compress&cs=tinysrgb&w=600', '70% cotton, 30% polyester, interior brushed', 35, false, true, 1),
  (8, 'ADIGO Messenger Bag', 'Synthetic leather messenger bag with adjustable shoulder strap. Urban, musical design.', 65, 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600', 'Premium PU leather, adjustable strap, YKK zipper', 0, false, true, 2)
ON CONFLICT (id) DO NOTHING;
