import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { getOrderById } = useContext(OrderContext);

  const order = getOrderById(parseInt(orderId));

  if (!order) {
    return (
      <main className="order-confirmation-page">
        <div className="page-header">
          <h1>Order Not Found</h1>
        </div>
        <div className="confirmation-container">
          <div className="error-message">
            <p>Sorry, we couldn't find your order. Please check your order number.</p>
            <button onClick={() => navigate("/shop")} className="shop-btn">
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="order-confirmation-page">
      <div className="page-header">
        <h1>✅ Order Confirmed!</h1>
        <p>Thank you for your purchase</p>
      </div>

      <div className="confirmation-container">
        <div className="confirmation-card">
          <div className="success-icon">✓</div>
          
          <div className="order-details">
            <h2>Order Details</h2>
            <div className="detail-row">
              <span>Order Number:</span>
              <span className="order-number">{order.orderNumber}</span>
            </div>
            <div className="detail-row">
              <span>Order Date:</span>
              <span>{order.createdAt}</span>
            </div>
            <div className="detail-row">
              <span>Status:</span>
              <span className="status-badge pending">{order.status}</span>
            </div>
            <div className="detail-row">
              <span>Total Amount:</span>
              <span className="total">${order.total}</span>
            </div>
          </div>

          <div className="customer-details">
            <h2>Shipping Information</h2>
            <p><strong>{order.customer.name}</strong></p>
            <p>{order.shippingAddress.address}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
            <p>Email: {order.customer.email}</p>
            <p>Phone: {order.customer.phone}</p>
          </div>

          <div className="order-items">
            <h2>Items Ordered</h2>
            <div className="items-list">
              {order.items.map(item => (
                <div key={item.id} className="item-row">
                  <div className="item-info">
                    <span className="item-icon">{item.icon}</span>
                    <div>
                      <p className="item-name">{item.name}</p>
                      <p className="item-qty">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${order.subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{parseFloat(order.shipping) === 0 ? "FREE" : `$${order.shipping}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>${order.tax}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${order.total}</span>
            </div>
          </div>

          <div className="actions">
            <Link to="/orders" className="view-orders-btn">
              View All Orders
            </Link>
            <Link to="/shop" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>

          <div className="confirmation-message">
            <p>📧 A confirmation email has been sent to <strong>{order.customer.email}</strong></p>
            <p>You can track your order status on your account page.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation;
