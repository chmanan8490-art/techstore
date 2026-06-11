import ProductCard from "../components/ProductCard";

export default function NewArrivals() {
  const newProducts = [
    { id: 1, name: "Samsung Galaxy Z Fold 6", icon: "📱", price: 1899, reviews: 45, badge: "New" },
    { id: 2, name: "Apple Vision Pro", icon: "🥽", price: 3499, reviews: 78, badge: "New" },
    { id: 3, name: "Google Pixel Fold", icon: "📱", price: 1799, reviews: 62, badge: "New" },
    { id: 4, name: "Meta Quest 4", icon: "🎮", price: 649, reviews: 134, badge: "New" },
    { id: 5, name: "OnePlus 12", icon: "📱", price: 799, reviews: 89, badge: "New" },
    { id: 6, name: "Xiaomi 14 Ultra", icon: "📱", price: 1399, reviews: 156, badge: "New" },
    { id: 7, name: "ROG Gaming Laptop", icon: "💻", price: 2499, reviews: 112, badge: "New" },
    { id: 8, name: "Sony WF-1000XM6", icon: "🎧", price: 399, reviews: 201, badge: "New" },
  ];

  return (
    <main className="new-arrivals-page">
      <div className="page-header arrivals-header">
        <h1>🆕 New Arrivals</h1>
        <p>Check out the latest tech products just added to our store</p>
      </div>

      <div className="arrivals-container">
        <div className="arrivals-info">
          <div className="info-card">
            <h3>📅 Updated Daily</h3>
            <p>New products added every day</p>
          </div>
          <div className="info-card">
            <h3>⭐ Pre-Order Available</h3>
            <p>Reserve upcoming releases</p>
          </div>
          <div className="info-card">
            <h3>🚚 Fast Shipping</h3>
            <p>Quick delivery on new items</p>
          </div>
        </div>

        <div className="products-grid">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
