# Veritabanı Planı

Gerçek yayına geçerken aşağıdaki tablolar yeterli bir başlangıç sağlar.

## `settings`

- `id`
- `site_name`
- `short_name`
- `phone`
- `email`
- `address`
- `shipping_fee`
- `free_shipping_threshold`

## `categories`

- `id`
- `name`
- `slug`
- `description`
- `active`
- `created_at`
- `updated_at`

## `products`

- `id`
- `category_id`
- `name`
- `slug`
- `sku`
- `short_description`
- `description`
- `price`
- `old_price`
- `stock`
- `active`
- `featured`
- `created_at`
- `updated_at`

## `product_images`

- `id`
- `product_id`
- `url`
- `sort_order`

## `orders`

- `id`
- `number`
- `customer_name`
- `customer_email`
- `customer_phone`
- `address`
- `city`
- `subtotal`
- `shipping`
- `total`
- `status`
- `payment_method`
- `note`
- `created_at`

## `order_items`

- `id`
- `order_id`
- `product_id`
- `product_name`
- `quantity`
- `price`
