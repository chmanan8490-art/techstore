import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import "./Orders.css";

function Orders() {
  const { orders } = useContext(OrderContext);

  return (
    <main className="orders-page">
      <div className="page-header">
        <h1>📦 My Orders</h1>
        <p>View your order history</p>
      </div>

      <div className="orders-container">
        {orders.length > 0 ? (
          <>
            <div className="orders-list">
              {orders.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-info">
                      <h3>{order.orderNumber}</h3>
                      <p className="order-date">{order.createdAt}</p>
                    </div>
                    <div className="order-meta">
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                      <span className="order-total">${order.total}</span>
                    </div>
                  </div>

                  <div className="order-details-grid">
                    <div className="detail">
                      <span className="label">Customer</span>
                      <span className="value">{order.customer.name}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Email</span>
                      <span className="value">{order.customer.email}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Phone</span>
                      <span className="value">{order.customer.phone}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Items</span>
                      <span className="value">{order.items.length} item(s)</span>
                    </div>
                  </div>

                  <div className="order-items-preview">
                    <h4>Items in this order:</h4>
                    <ul>
                      {order.items.map(item => (
                        <li key={item.id}>
                          <span className="item-icon">{item.icon}</span>
                          <span className="item-details">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="order-address">
                    <h4>Shipping Address:</h4>
                    <p>{order.shippingAddress.address}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                  </div>

                  <div className="order-footer">
                    <Link to={`/order-confirmation/${order.id}`} className="view-details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-orders">
            <div className="empty-icon">📭</div>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders. Start shopping now!</p>
            <Link to="/shop" className="shop-btn">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Orders;
