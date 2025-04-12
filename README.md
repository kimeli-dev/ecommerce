# 🛒 Dynamic Product Display with XML and JavaScript

This is a lightweight web application that dynamically loads and displays products from an XML file using plain JavaScript. It features interactive product cards, a simple "Add to Cart" button with feedback, and a smooth background scroll effect.

---

## 📁 Features

- 🔃 Dynamically fetches and parses an XML file (`products.xml`)
- 📦 Renders product cards with name, image, price, and description
- 🛍 "Add to Cart" button with interactive feedback
- 🎨 Opposite background scroll animation for visual appeal
- 💡 Uses only vanilla JavaScript (no external libraries)

---

## 🚀 How It Works

1. Waits for the DOM to fully load.
2. Fetches `products.xml` using the `fetch()` API.
3. Parses the XML using `DOMParser`.
4. Dynamically creates and injects product cards into the DOM.
5. Adds functionality to "Add to Cart" buttons with temporary state change.
6. Animates the background to scroll in the opposite direction of the user.

---

## 🧩 Sample XML Structure (`products.xml`)

```xml
<products>
  <product>
    <name>Sample Product</name>
    <price>19.99</price>
    <image>images/sample.jpg</image>
    <description>This is a sample product description.</description>
  </product>
</products>
