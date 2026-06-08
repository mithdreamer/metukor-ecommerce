(function () {
  const renderOrderSuccess = () => {
    const container = document.querySelector("#orderSuccess");
    if (!container) return;

    const orderId = Utils.getParam("order");
    const order = Store.getOrderById(orderId);
    if (!order) {
      container.innerHTML = `
        <div class="empty-state">
          <h1>Sipariş bulunamadı</h1>
          <p class="muted">Sipariş bilgisi bu tarayıcıda kayıtlı değil.</p>
          <a class="btn btn-primary" href="${Utils.pagePath("products.html")}">Ürünlere dön</a>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="empty-state">
        <span class="badge">Sipariş alındı</span>
        <h1>${order.number}</h1>
        <p class="muted">Siparişiniz oluşturuldu. Admin panelindeki siparişler ekranından takip edilebilir.</p>
        <div class="summary-row total" style="width:min(420px,100%)">
          <span>Toplam</span>
          <strong>${Utils.money(order.total)}</strong>
        </div>
        <div class="cluster">
          <a class="btn btn-primary" href="${Utils.pagePath("products.html")}">Alışverişe devam et</a>
          <a class="btn btn-outline" href="${Utils.adminPath("orders.html")}">Admin siparişleri</a>
        </div>
      </div>
    `;
  };

  window.Orders = { renderOrderSuccess };
})();
