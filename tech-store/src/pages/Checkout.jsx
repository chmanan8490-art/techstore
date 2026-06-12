import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const cartTotal = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="page-header">
          <h1>Checkout</h1>
        </div>
        <div className="empty-checkout">
          <p>Your cart is empty. Add items to proceed with checkout.</p>
          <button onClick={() => navigate("/shop")} className="shop-btn">
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      alert("Please enter your full name");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      alert("Please enter a valid email");
      return false;
    }
    if (!formData.phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }
    if (!formData.address.trim() || !formData.city.trim() || !formData.state.trim() || !formData.zipCode.trim()) {
      alert("Please enter complete shipping address");
      return false;
    }
    if (formData.paymentMethod === "creditCard") {
      if (!formData.cardNumber.trim() || formData.cardNumber.length < 16) {
        alert("Please enter a valid card number");
        return false;
      }
      if (!formData.expiryDate.trim()) {
        alert("Please enter card expiry date");
        return false;
      }
      if (!formData.cvv.trim() || formData.cvv.length < 3) {
        alert("Please enter valid CVV");
        return false;
      }
    }
    return true;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const orderData = {
        items: cartItems,
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
        },
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        },
        paymentMethod: formData.paymentMethod,
        subtotal: cartTotal.subtotal,
        shipping: cartTotal.shipping,
        tax: cartTotal.tax,
        total: cartTotal.total,
      };

      const order = placeOrder(orderData);
      clearCart();
      setLoading(false);
      
      alert(`Order placed successfully! Order #${order.orderNumber}`);
      navigate(`/order-confirmation/${order.id}`);
    }, 1500);
  };

  return (
    <main className="checkout-page">
      <div className="page-header">
        <h1>🛍️ Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="checkout-container">
        <div className="checkout-form-section">
          <form onSubmit={handlePlaceOrder}>
            {/* Customer Details */}
            <div className="form-section">
              <h2>📋 Customer Information</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Shipping Address */}
            <div className="form-section">
              <h2>📍 Shipping Address</h2>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                name="zipCode"
                placeholder="ZIP/Postal Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Payment Method */}
            <div className="form-section">
              <h2>💳 Payment Method</h2>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === "creditCard"}
                    onChange={handleInputChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="debitCard"
                    checked={formData.paymentMethod === "debitCard"}
                    onChange={handleInputChange}
                  />
                  Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankTransfer"
                    checked={formData.paymentMethod === "bankTransfer"}
                    onChange={handleInputChange}
                  />
                  Bank Transfer
                </label>
              </div>

              {(formData.paymentMethod === "creditCard" || formData.paymentMethod === "debitCard") && (
                <div className="card-details">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (16 digits)"
                    maxLength="16"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="form-row">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      maxLength="3"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="place-order-btn" disabled={loading}>
              {loading ? "Processing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary-section">
          <h2>📦 Order Summary</h2>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-info">
                  <span>{item.name}</span>
                  <span className="quantity">x{item.quantity}</span>
                </div>
                <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${cartTotal.subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{parseFloat(cartTotal.shipping) === 0 ? "FREE" : `$${cartTotal.shipping}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>${cartTotal.tax}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${cartTotal.total}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;