import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      icon: product.icon,
      price: product.price,
      image: product.icon
    });
    alert(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        icon: product.icon,
        price: product.price,
        originalPrice: product.originalPrice
      });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-placeholder">{product.icon}</div>
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="wishlist-btn" onClick={handleWishlist} title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}>
            {inWishlist ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
