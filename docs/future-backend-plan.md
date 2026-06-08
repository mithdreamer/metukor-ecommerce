# Backend Planı

Statik sürüm Netlify'da yayınlanabilir, ancak gerçek sipariş takibi için ortak bir sunucu/veritabanı gerekir.

## Önerilen Hafif Mimari

- Netlify hosting.
- Netlify Functions veya küçük bir Node.js API.
- Supabase veya Firebase veritabanı.
- Supabase Storage, Cloudinary veya benzeri görsel depolama.
- Admin panel için e-posta/şifre girişi.

## İlk Backend Endpointleri

- `GET /products`
- `POST /products`
- `PATCH /products/:id`
- `DELETE /products/:id`
- `GET /categories`
- `POST /categories`
- `GET /orders`
- `POST /orders`
- `PATCH /orders/:id/status`

## Netlify İçin Not

Sadece HTML/CSS/JavaScript ile Netlify'a çıkıldığında ürün ve sipariş verisi ziyaretçinin tarayıcısında kalır. Firma sahibinin tüm siparişleri tek panelden görebilmesi için sipariş oluşturma işlemi backend'e yazmalıdır.
