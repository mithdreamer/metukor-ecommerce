(function () {
  const statusSelect = (order) => `
    <select data-order-status="${order.id}" aria-label="Sipariş durumu">
      ${["new", "preparing", "shipped", "completed", "cancelled"]
        .map(
          (status) => `<option value="${status}" ${order.status === status ? "selected" : ""}>${Utils.statusLabel(status)}</option>`
        )
        .join("")}
    </select>
  `;

  const renderOrdersTable = () => {
    const body = document.querySelector("#ordersTableBody");
    const count = document.querySelector("#ordersCount");
    if (!body) return;
    const orders = Store.getOrders();
    if (count) count.textContent = `${orders.length} sipariş`;
    body.innerHTML = orders.length
      ? orders
          .map(
            (order) => `
              <tr>
                <td><strong>${order.number}</strong><div class="muted">${Utils.formatDate(order.createdAt)}</div></td>
                <td>${Utils.escapeHTML(order.customer.name)}<div class="muted">${Utils.escapeHTML(order.customer.phone)}</div></td>
                <td>${order.items.reduce((sum, item) => sum + item.quantity, 0)} ürün</td>
                <td>${Utils.money(order.total)}</td>
                <td>${statusSelect(order)}</td>
                <td>
                  <a class="btn btn-outline" href="${Utils.adminPath("order-detail.html")}?id=${order.id}">Detay</a>
                </td>
              </tr>
            `
          )
          .join("")
      : `<tr><td colspan="6"><div class="empty-state"><h2>Sipariş yok</h2><p class="muted">Ödeme formu tamamlandığında sipariş burada görünür.</p></div></td></tr>`;
  };

  const renderOrderDetail = () => {
    const container = document.querySelector("#orderDetail");
    if (!container) return;
    const order = Store.getOrderById(Utils.getParam("id"));
    if (!order) {
      container.innerHTML = `<div class="empty-state"><h1>Sipariş bulunamadı</h1><a class="btn btn-primary" href="${Utils.adminPath("orders.html")}">Siparişlere dön</a></div>`;
      return;
    }

    container.innerHTML = `
      <div class="feature-band">
        <div>
          <span class="badge ${Utils.statusClass(order.status)}">${Utils.statusLabel(order.status)}</span>
          <h1>${order.number}</h1>
          <p class="muted">${Utils.formatDate(order.createdAt)}</p>
        </div>
        <div class="field">
          <label for="detailStatus">Durum</label>
          ${statusSelect(order).replace("data-order-status", "id=\"detailStatus\" data-order-status")}
        </div>
      </div>
      <div class="grid grid-2 page-block">
        <section class="admin-card stack-sm">
          <h2>Müşteri</h2>
          <p><strong>${Utils.escapeHTML(order.customer.name)}</strong></p>
          <p class="muted">${Utils.escapeHTML(order.customer.email)}<br>${Utils.escapeHTML(order.customer.phone)}</p>
          <p>${Utils.escapeHTML(order.customer.address)}<br>${Utils.escapeHTML(order.customer.city)}</p>
        </section>
        <section class="admin-card stack-sm">
          <h2>Ödeme</h2>
          <p>${Utils.escapeHTML(order.paymentMethod)}</p>
          <p class="muted">${Utils.escapeHTML(order.note || "Not yok")}</p>
          <div class="summary-row"><span>Ara toplam</span><strong>${Utils.money(order.subtotal)}</strong></div>
          <div class="summary-row"><span>Kargo</span><strong>${order.shipping ? Utils.money(order.shipping) : "Ücretsiz"}</strong></div>
          <div class="summary-row total"><span>Toplam</span><strong>${Utils.money(order.total)}</strong></div>
        </section>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Ürün</th><th>Adet</th><th>Birim</th><th>Toplam</th></tr></thead>
          <tbody>
            ${order.items
              .map(
                (item) => `
                  <tr>
                    <td>${Utils.escapeHTML(item.name)}</td>
                    <td>${item.quantity}</td>
                    <td>${Utils.money(item.price)}</td>
                    <td>${Utils.money(item.price * item.quantity)}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  };

  document.addEventListener("change", (event) => {
    if (!event.target.matches("[data-order-status]")) return;
    Store.updateOrderStatus(event.target.dataset.orderStatus, event.target.value);
    renderOrdersTable();
    renderOrderDetail();
    Utils.showToast("Sipariş durumu güncellendi.");
  });

  window.OrderManager = {
    renderOrdersTable,
    renderOrderDetail
  };
})();
