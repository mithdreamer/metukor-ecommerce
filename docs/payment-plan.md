# Ödeme Altyapısı Planı

## V1: Hazırlık Modülü

- Admin panelde `payment-settings.html` üzerinden sağlayıcı seçimi yapılır.
- İlk sağlayıcı adayları: İyzico, PayTR, Shopier ve manuel ödeme.
- Kredi kartı, Havale/EFT ve Kapıda ödeme seçenekleri yönetilebilir.
- Sipariş kaydında `paymentStatus`, `paymentProvider` ve `transactionId` alanları tutulur.
- Gerçek ödeme tahsilatı yapılmaz; kredi kartı seçeneği demo/simülasyon akışıdır.

## V2: Sanal POS Entegrasyonu

- Öncelikli entegrasyon: İyzico veya PayTR.
- Callback/webhook endpointleri backend tarafında karşılanır.
- Başarılı ödeme sonrası sipariş `paid` durumuna çekilir.
- Başarısız ödeme sipariş oluşturma veya sipariş onay adımında durdurulur.

## Sipariş Ödeme Modeli

```json
{
  "paymentMethod": "Kredi kartı simülasyonu",
  "paymentStatus": "paid",
  "paymentProvider": "iyzico",
  "transactionId": ""
}
```
