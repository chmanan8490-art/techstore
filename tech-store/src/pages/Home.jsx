import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home(){
  const featuredProducts = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      icon: "⌚",
      price: 399,
      originalPrice: 499,
      reviews: 128,
      badge: "Sale"
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      icon: "🎧",
      price: 349,
      reviews: 256,
    },
    {
      id: 3,
      name: "MacBook Air M2",
      icon: "💻",
      price: 1099,
      reviews: 156,
      badge: "Sale"
    },
    {
      id: 4,
      name: "iPhone 15 Pro",
      icon: "📱",
      price: 999,
      originalPrice: 1099,
      reviews: 212,
    },
    {
      id: 5,
      name: "Canon EOS R50",
      icon: "📷",
      price: 679,
      reviews: 78,
    },
    {
      id: 6,
      name: "PlayStation 5",
      icon: "🎮",
      price: 499,
      reviews: 342,
    }
  ];

  return (
    <main className="home">
      <Hero />
      <Benefits />
      
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/shop" className="view-all">View All →</Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home;