export default function Brands() {
  const brands = [
    { name: "Apple", logo: "🍎", products: 45 },
    { name: "Samsung", logo: "📱", products: 38 },
    { name: "Sony", logo: "🎧", products: 32 },
    { name: "Google", logo: "🔍", products: 28 },
    { name: "Microsoft", logo: "🪟", products: 24 },
    { name: "Dell", logo: "💻", products: 22 },
    { name: "HP", logo: "💻", products: 20 },
    { name: "Lenovo", logo: "💻", products: 19 },
    { name: "Canon", logo: "📷", products: 18 },
    { name: "Nikon", logo: "📷", products: 16 },
    { name: "DJI", logo: "🚁", products: 14 },
    { name: "Nintendo", logo: "🎮", products: 12 },
  ];

  return (
    <main className="brands-page">
      <div className="page-header brands-header">
        <h1>Our Brands</h1>
        <p>Shop from the world's leading technology brands</p>
      </div>

      <div className="brands-container">
        <div className="brands-grid">
          {brands.map((brand, idx) => (
            <div key={idx} className="brand-card">
              <div className="brand-logo">{brand.logo}</div>
              <h3>{brand.name}</h3>
              <p>{brand.products} Products</p>
              <button className="brand-btn">Shop Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="brands-info">
        <h2>Why Shop By Brand?</h2>
        <div className="info-grid">
          <div className="info-item">
            <h4>🔍 Easy Browsing</h4>
            <p>Filter products by your favorite brands</p>
          </div>
          <div className="info-item">
            <h4>✨ Quality Assured</h4>
            <p>All products are 100% authentic</p>
          </div>
          <div className="info-item">
            <h4>💰 Best Prices</h4>
            <p>Competitive pricing on all brands</p>
          </div>
          <div className="info-item">
            <h4>🛡️ Warranty</h4>
            <p>Full warranty support included</p>
          </div>
        </div>
      </div>
    </main>
  );
}
