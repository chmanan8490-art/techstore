import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const wishlistItems = [
    { id: 1, name: "Apple Watch Series 9", icon: "⌚", price: 399, originalPrice: 499, reviews: 128 },
    { id: 2, name: "Sony WH-1000XM5", icon: "🎧", price: 349, reviews: 256 },
    { id: 3, name: "MacBook Air M2", icon: "💻", price: 1099, reviews: 156 },
    { id: 4, name: "iPhone 15 Pro", icon: "📱", price: 999, originalPrice: 1099, reviews: 212 },
  ];

  return (
    <main className="wishlist-page">
      <div className="page-header">
        <h1>❤️ My Wishlist</h1>
        <p>{wishlistItems.length} items saved</p>
      </div>

      <div className="wishlist-container">
        {wishlistItems.length > 0 ? (
          <div className="products-grid">
            {wishlistItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
            <a href="/shop">Continue Shopping</a>
          </div>
        )}
      </div>
    </main>
  );
}
