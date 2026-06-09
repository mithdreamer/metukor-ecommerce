(function () {
  const image = (title, subtitle, start, end) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${start}"/>
            <stop offset="100%" stop-color="${end}"/>
          </linearGradient>
        </defs>
        <rect width="900" height="900" fill="url(#g)"/>
        <circle cx="690" cy="190" r="110" fill="rgba(255,255,255,.18)"/>
        <circle cx="190" cy="720" r="170" fill="rgba(255,255,255,.14)"/>
        <rect x="170" y="225" width="560" height="450" rx="36" fill="rgba(255,255,255,.88)"/>
        <text x="450" y="424" text-anchor="middle" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#20252b">${title}</text>
        <text x="450" y="494" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="#65717e">${subtitle}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  window.ECommerceSeed = {
    settings: {
      siteName: "Firma Store",
      shortName: "FS",
      phone: "+90 555 000 00 00",
      email: "info@firmastore.com",
      address: "İstanbul, Türkiye",
      adminUsername: "admin",
      adminPassword: "123456",
      heroTitle: "KOBİLER için hazır e-ticaret vitrini",
      heroSubtitle:
        "Ürünlerini fotoğrafla ekle, kategorilerini düzenle, sipariş akışını tek panelden takip et.",
      shippingFee: 79,
      freeShippingThreshold: 1500,
      currency: "TRY"
    },
    paymentSettings: {
      enabled: true,
      activeProvider: "iyzico",
      mode: "test",
      methods: {
        creditCard: true,
        bankTransfer: true,
        cashOnDelivery: true
      },
      credentials: {
        merchantId: "",
        apiKey: "",
        secretKey: ""
      },
      callbackUrl: "",
      installments: {
        enabled: true,
        maxCount: 6,
        minAmount: 500
      },
      cardStorage: {
        enabled: false
      },
      bankTransfer: {
        bankName: "Örnek Bank",
        accountHolder: "Firma Store",
        iban: "TR00 0000 0000 0000 0000 0000 00"
      }
    },
    shippingSettings: {
      defaultCarrier: "yurtici",
      mode: "manual",
      trackingRequired: true,
      customerTrackingVisible: true,
      labelFormat: "a4",
      defaultDesi: 1,
      credentials: {
        apiUsername: "",
        apiPasswordToken: "",
        customerCode: "",
        branchCode: ""
      },
      sender: {
        name: "Firma Store",
        phone: "+90 555 000 00 00",
        address: "İstanbul, Türkiye"
      },
      carriers: [
        {
          id: "yurtici",
          name: "Yurtiçi",
          active: true,
          integrationReady: true,
          trackingUrl: ""
        },
        {
          id: "aras",
          name: "Aras",
          active: true,
          integrationReady: true,
          trackingUrl: ""
        },
        {
          id: "mng",
          name: "MNG / DHL eCommerce",
          active: true,
          integrationReady: true,
          trackingUrl: ""
        },
        {
          id: "ptt",
          name: "PTT",
          active: false,
          integrationReady: true,
          trackingUrl: ""
        },
        {
          id: "ups",
          name: "UPS",
          active: false,
          integrationReady: true,
          trackingUrl: ""
        },
        {
          id: "other",
          name: "Diğer",
          active: false,
          integrationReady: false,
          trackingUrl: ""
        }
      ]
    },
    categories: [
      {
        id: "cat-home",
        name: "Ev Yaşam",
        slug: "ev-yasam",
        description: "Dekoratif ve günlük kullanıma uygun ürünler.",
        active: true
      },
      {
        id: "cat-textile",
        name: "Tekstil",
        slug: "tekstil",
        description: "Kumaş, havlu, çanta ve aksesuar çeşitleri.",
        active: true
      },
      {
        id: "cat-gift",
        name: "Hediye",
        slug: "hediye",
        description: "Özel günlere uygun butik hediyelikler.",
        active: true
      },
      {
        id: "cat-office",
        name: "Ofis",
        slug: "ofis",
        description: "Masa üstü ve çalışma alanı ürünleri.",
        active: true
      }
    ],
    products: [
      {
        id: "prd-ceramic-mug",
        name: "El Yapımı Seramik Kupa",
        slug: "el-yapimi-seramik-kupa",
        sku: "EV-1001",
        categoryId: "cat-home",
        shortDescription: "Mat dokulu, günlük kullanıma uygun seramik kupa.",
        description:
          "Küçük atölyeler için vitrine yakışan örnek ürün. Ürün fotoğrafı admin panelinden değiştirilebilir.",
        price: 329,
        oldPrice: 399,
        stock: 28,
        active: true,
        featured: true,
        images: [image("Seramik", "Kupa", "#176b5f", "#d8ad3f")],
        createdAt: "2026-01-04T10:00:00.000Z",
        updatedAt: "2026-01-04T10:00:00.000Z"
      },
      {
        id: "prd-linen-tote",
        name: "Keten Omuz Çantası",
        slug: "keten-omuz-cantasi",
        sku: "TX-2044",
        categoryId: "cat-textile",
        shortDescription: "Günlük kullanım için astarlı keten çanta.",
        description:
          "Kumaş ve aksesuar satan firmalar için örnek ürün kartı. Stok, fiyat ve galeri bilgileri düzenlenebilir.",
        price: 549,
        oldPrice: 0,
        stock: 16,
        active: true,
        featured: true,
        images: [image("Keten", "Çanta", "#bf5134", "#f1c65b")],
        createdAt: "2026-01-07T10:00:00.000Z",
        updatedAt: "2026-01-07T10:00:00.000Z"
      },
      {
        id: "prd-gift-box",
        name: "Butik Hediye Kutusu",
        slug: "butik-hediye-kutusu",
        sku: "HD-3012",
        categoryId: "cat-gift",
        shortDescription: "Hazır paketli, kişisel not eklenebilir hediye seti.",
        description:
          "Hediye ve konsept kutu satışı yapan işletmeler için demo ürün. Sipariş notu ödeme adımında alınır.",
        price: 899,
        oldPrice: 1099,
        stock: 9,
        active: true,
        featured: true,
        images: [image("Hediye", "Kutu", "#2f6f92", "#d8ad3f")],
        createdAt: "2026-01-12T10:00:00.000Z",
        updatedAt: "2026-01-12T10:00:00.000Z"
      },
      {
        id: "prd-desk-organizer",
        name: "Ahşap Masa Düzenleyici",
        slug: "ahsap-masa-duzenleyici",
        sku: "OF-4408",
        categoryId: "cat-office",
        shortDescription: "Telefon, kalem ve not kağıdı için kompakt düzenleyici.",
        description:
          "Ofis ve kurumsal hediye kategorileri için kullanılabilecek örnek ürün.",
        price: 749,
        oldPrice: 0,
        stock: 22,
        active: true,
        featured: false,
        images: [image("Ahşap", "Organizer", "#6c5b45", "#176b5f")],
        createdAt: "2026-01-16T10:00:00.000Z",
        updatedAt: "2026-01-16T10:00:00.000Z"
      }
    ],
    orders: [
      {
        id: "ord-demo-1",
        number: "SP-2026-0001",
        customer: {
          name: "Demo Müşteri",
          email: "demo@musteri.com",
          phone: "+90 555 111 22 33",
          address: "Örnek Mah. No: 1",
          city: "İstanbul"
        },
        items: [
          {
            productId: "prd-ceramic-mug",
            name: "El Yapımı Seramik Kupa",
            quantity: 2,
            price: 329
          }
        ],
        subtotal: 658,
        shipping: 79,
        total: 737,
        status: "new",
        paymentMethod: "Kapıda ödeme",
        paymentStatus: "pending",
        paymentProvider: "manual",
        transactionId: "",
        cargoCompany: "",
        trackingNumber: "",
        trackingUrl: "",
        shipmentStatus: "pending",
        note: "Demo sipariş kaydı.",
        createdAt: "2026-01-20T11:30:00.000Z"
      }
    ]
  };
})();
