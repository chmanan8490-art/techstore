import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartCount } = useContext(CartContext);
  const { getWishlistCount } = useContext(WishlistContext);
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <span>📦 Free shipping on all orders over $50 | 🔄 30 day return policy</span>
          <div className="top-bar-right">
            <Link to="/track-order" className="top-bar-link">Track Order</Link>
            <Link to="/help" className="top-bar-link">Help Center</Link>
            <select defaultValue="EN">
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="FR">FR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="logo">
            🛍️ TechStore
          </Link>

          {/* Search Bar */}
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>

          {/* Right Icons */}
          <div className="navbar-icons">
            <Link to="/account" className="icon-link">
              👤 Account
            </Link>
            <Link to="/wishlist" className="icon-link wishlist">
              ❤️ Wishlist <span className="badge">{wishlistCount}</span>
            </Link>
            <Link to="/cart" className="icon-link cart">
              🛒 Cart <span className="badge">{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* Categories & Navigation */}
        <div className="navbar-bottom">
          <div className="navbar-bottom-content">
            <button className="categories-btn">
              📁 Categories
            </button>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/deals">Deals</Link>
              <Link to="/new">New Arrivals</Link>
              <Link to="/brands">Brands</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;