import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart(){
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <main className="cart-page">
      <div className="page-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</p>
      </div>

      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items-section">
              <h2>Cart Items</h2>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <span className="image-icon">{item.icon}</span>
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="item-total">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>
                  {shipping === 0 ? (
                    <span className="free-shipping">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="shipping-note">Free shipping on orders over $50!</p>
              )}
              <div className="summary-row">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>

              <div className="cart-benefits">
                <div className="benefit">
                  <span>📦</span>
                  <p>Free shipping on $50+</p>
                </div>
                <div className="benefit">
                  <span>🔄</span>
                  <p>30-day returns</p>
                </div>
                <div className="benefit">
                  <span>🔒</span>
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <Link to="/shop" className="shop-btn">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
