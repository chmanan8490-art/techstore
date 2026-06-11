import ProductCard from "../components/ProductCard";

export default function Deals() {
  const dealsProducts = [
    { id: 1, name: "Apple Watch Series 9", icon: "⌚", price: 399, originalPrice: 499, reviews: 128, badge: "30% Off" },
    { id: 2, name: "Sony WH-1000XM5", icon: "🎧", price: 349, originalPrice: 449, reviews: 256, badge: "22% Off" },
    { id: 3, name: "MacBook Air M2", icon: "💻", price: 1099, originalPrice: 1299, reviews: 156, badge: "15% Off" },
    { id: 4, name: "iPhone 15 Pro", icon: "📱", price: 999, originalPrice: 1099, reviews: 212, badge: "10% Off" },
    { id: 5, name: "DJI Air 3", icon: "🚁", price: 999, originalPrice: 1299, reviews: 187, badge: "23% Off" },
    { id: 6, name: "iPad Pro 12.9", icon: "📱", price: 1299, originalPrice: 1499, reviews: 334, badge: "13% Off" },
  ];

  return (
    <main className="deals-page">
      <div className="page-header deals-header">
        <h1>⚡ Hot Deals & Discounts</h1>
        <p>Limited time offers on our best-selling products</p>
      </div>

      <div className="deals-container">
        <div className="deals-banner">
          <div className="banner-content">
            <h2>Flash Sale Ends In:</h2>
            <div className="countdown">
              <div className="time-block">
                <span className="time">12</span>
                <span className="label">Hours</span>
              </div>
              <div className="time-block">
                <span className="time">34</span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-block">
                <span className="time">56</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="deals-grid">
          {dealsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
