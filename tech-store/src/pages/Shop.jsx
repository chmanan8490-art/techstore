import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop(){
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState(2000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const allProducts = [
    { id: 1, name: "Apple Watch Series 9", icon: "⌚", price: 399, originalPrice: 499, reviews: 128, badge: "Sale", category: "Accessories", rating: 4.8 },
    { id: 2, name: "Sony WH-1000XM5", icon: "🎧", price: 349, reviews: 256, category: "Accessories", rating: 4.9 },
    { id: 3, name: "MacBook Air M2", icon: "💻", price: 1099, reviews: 156, badge: "Sale", category: "Laptops", rating: 4.7 },
    { id: 4, name: "iPhone 15 Pro", icon: "📱", price: 999, originalPrice: 1099, reviews: 212, category: "Phones", rating: 4.6 },
    { id: 5, name: "Canon EOS R50", icon: "📷", price: 679, reviews: 78, category: "Cameras", rating: 4.5 },
    { id: 6, name: "PlayStation 5", icon: "🎮", price: 499, reviews: 342, category: "Gaming", rating: 4.8 },
    { id: 7, name: "Samsung Galaxy Z Fold", icon: "📱", price: 1799, reviews: 95, category: "Phones", rating: 4.4 },
    { id: 8, name: "DJI Air 3", icon: "🚁", price: 999, reviews: 187, category: "Cameras", rating: 4.7 },
    { id: 9, name: "Apple AirPods Pro", icon: "🎧", price: 249, reviews: 512, category: "Accessories", rating: 4.9 },
    { id: 10, name: "iPad Pro 12.9", icon: "📱", price: 1299, reviews: 334, category: "Phones", rating: 4.8 },
    { id: 11, name: "Google Pixel 8", icon: "📱", price: 799, reviews: 267, category: "Phones", rating: 4.7 },
    { id: 12, name: "Nintendo Switch OLED", icon: "🎮", price: 349, reviews: 456, category: "Gaming", rating: 4.9 }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const filteredProducts = allProducts.filter(product => {
    // Price filter
    if (product.price > priceRange) return false;

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Rating filter
    if (selectedRatings.length > 0) {
      const minRating = Math.min(...selectedRatings);
      if (product.rating < minRating) return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
      default:
        return b.id - a.id;
    }
  });

  return (
    <main className="shop-page">
      <div className="page-header">
        <h1>All Products</h1>
        <p>Discover our complete collection of tech products</p>
      </div>

      <div className="shop-container">
        <aside className="filters">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Price Range: ${priceRange}</label>
            <input 
              type="range" 
              min="0" 
              max="2000" 
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
            <span>$0 - $2000</span>
          </div>
          <div className="filter-group">
            <label>Category</label>
            <div className="checkboxes">
              <label>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes("Phones")}
                  onChange={() => handleCategoryChange("Phones")}
                /> Phones
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes("Laptops")}
                  onChange={() => handleCategoryChange("Laptops")}
                /> Laptops
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes("Accessories")}
                  onChange={() => handleCategoryChange("Accessories")}
                /> Accessories
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes("Gaming")}
                  onChange={() => handleCategoryChange("Gaming")}
                /> Gaming
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes("Cameras")}
                  onChange={() => handleCategoryChange("Cameras")}
                /> Cameras
              </label>
            </div>
          </div>
          <div className="filter-group">
            <label>Rating</label>
            <div className="checkboxes">
              <label>
                <input 
                  type="checkbox"
                  checked={selectedRatings.includes(5)}
                  onChange={() => handleRatingChange(5)}
                /> ⭐⭐⭐⭐⭐ 5 Star
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedRatings.includes(4)}
                  onChange={() => handleRatingChange(4)}
                /> ⭐⭐⭐⭐ 4+ Star
              </label>
              <label>
                <input 
                  type="checkbox"
                  checked={selectedRatings.includes(3)}
                  onChange={() => handleRatingChange(3)}
                /> ⭐⭐⭐ 3+ Star
              </label>
            </div>
          </div>
        </aside>

        <div className="products-section">
          <div className="sort-bar">
            <span>{sortedProducts.length} products found</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          <div className="products-grid">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your filters. Try adjusting your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Shop;