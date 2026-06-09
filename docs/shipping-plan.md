# Kargo Altyapısı Planı

## V1: Manuel Takip

- Admin sipariş detayında kargo firması seçilir.
- Siparişe takip numarası girilir.
- Sipariş `Kargoda` durumuna alınabilir.
- Müşteri sipariş bağlantısında takip numarasını görebilir.

## V3: Kargo Entegrasyonu

- Öncelikli firmalar: Yurtiçi Kargo, MNG Kargo, Aras Kargo.
- Sonraki adaylar: Sürat Kargo, PTT Kargo, UPS.
- Backend ile kargo kaydı oluşturulur.
- Kargo etiketi ve takip numarası otomatik alınır.

## Sipariş Kargo Modeli

```json
{
  "status": "shipped",
  "shipmentStatus": "shipped",
  "cargoCompany": "yurtici",
  "trackingNumber": "YT123456789",
  "trackingUrl": ""
}
```
