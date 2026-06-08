# Admin Panel Notları

Admin panel şu an statik MVP mantığıyla çalışır. Tüm kayıtlar tarayıcıdaki `localStorage` alanına yazılır.

Bu yapı geliştirme, müşteri demosu ve şablon satış sunumu için uygundur. Farklı müşterilerin oluşturduğu siparişleri firma sahibinin kendi bilgisayarında görmesi için backend ve ortak veritabanı gerekir.

## Mevcut Özellikler

- Admin giriş ekranı. Varsayılan kullanıcı adı `admin`, şifre `123456`.
- Ürün ekleme, düzenleme ve silme.
- Birden fazla ürün fotoğrafını dosya seçerek ekleme.
- Kategori ekleme, düzenleme ve silme.
- Siparişleri listeleme, detayını görme ve durum güncelleme.
- Mağaza adı, iletişim bilgileri ve kargo ayarlarını değiştirme.
- Demo veriye dönme ve mevcut veriyi JSON olarak indirme.

## Dikkat Edilecekler

- Büyük fotoğraflar `localStorage` limitine takılabilir. Bu yüzden görseller tarayıcıda küçültülerek JPEG olarak saklanır.
- Statik sürümde kullanıcı adı ve şifre tarayıcı tarafında saklanır. Bu gerçek güvenlik sağlamaz; gerçek koruma backend aşamasında yapılmalıdır.
- Gerçek ödeme, kargo entegrasyonu ve fatura akışı backend aşamasında eklenmelidir.
