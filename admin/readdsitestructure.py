import os

project_name = "ecommerce-template"

new_folders = [
    "core",
    "core/products",
    "core/categories",
    "core/orders",
    "core/payments",
    "core/shipping",
    "core/users",
]

new_files = [
    "admin/payment-settings.html",
    "admin/shipping-settings.html",

    "admin-js/payment-manager.js",
    "admin-js/shipping-manager.js",

    "js/payment.js",
    "js/shipping.js",

    "data/payment-settings.json",
    "data/shipping-settings.json",

    "core/products/.gitkeep",
    "core/categories/.gitkeep",
    "core/orders/.gitkeep",
    "core/payments/.gitkeep",
    "core/shipping/.gitkeep",
    "core/users/.gitkeep",

    "docs/payment-plan.md",
    "docs/shipping-plan.md",
]

for folder in new_folders:
    os.makedirs(os.path.join(project_name, folder), exist_ok=True)

for file in new_files:
    file_path = os.path.join(project_name, file)
    folder_path = os.path.dirname(file_path)

    if folder_path:
        os.makedirs(folder_path, exist_ok=True)

    if not os.path.exists(file_path):
        with open(file_path, "w", encoding="utf-8") as f:
            f.write("")

print("Yeni ödeme ve kargo dosyaları mevcut mimariye eklendi.")