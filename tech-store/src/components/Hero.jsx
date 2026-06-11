import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">New Collection 2024</p>
          <h1>The Best Tech For Your Life</h1>
          <p className="hero-description">
            Discover the latest gadgets and gizmos that make life easier and more fun.
          </p>
          <Link to="/shop" className="shop-now-btn">
            Shop Now →
          </Link>
        </div>
        <div className="hero-image">
          <div className="product-showcase">
            <div className="showcase-item">💻</div>
            <div className="showcase-item">⌚</div>
            <div className="showcase-item">📱</div>
            <div className="showcase-item">🎧</div>
          </div>
        </div>
      </div>
    </section>
  );
}
