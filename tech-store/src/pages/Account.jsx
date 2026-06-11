export default function Account() {
  return (
    <main className="account-page">
      <div className="page-header">
        <h1>My Account</h1>
        <p>Manage your account and orders</p>
      </div>

      <div className="account-container">
        <div className="account-sidebar">
          <div className="user-info">
            <div className="avatar">👤</div>
            <h3>John Doe</h3>
            <p>john@example.com</p>
          </div>
          <nav className="account-nav">
            <button className="active">Dashboard</button>
            <button>Orders</button>
            <button>Addresses</button>
            <button>Payment Methods</button>
            <button>Settings</button>
            <button>Logout</button>
          </nav>
        </div>

        <div className="account-content">
          <div className="dashboard-section">
            <h2>Dashboard</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>📦 Orders</h4>
                <p className="stat-number">12</p>
              </div>
              <div className="stat-card">
                <h4>❤️ Wishlist</h4>
                <p className="stat-number">8</p>
              </div>
              <div className="stat-card">
                <h4>💰 Total Spent</h4>
                <p className="stat-number">$3,450</p>
              </div>
              <div className="stat-card">
                <h4>⭐ Loyalty Points</h4>
                <p className="stat-number">2,450</p>
              </div>
            </div>
          </div>

          <div className="recent-orders">
            <h2>Recent Orders</h2>
            <div className="orders-table">
              <div className="order-item">
                <div className="order-info">
                  <h4>#ORD-12345</h4>
                  <p>Apple MacBook Air M2</p>
                </div>
                <div className="order-status">
                  <span className="status delivered">Delivered</span>
                  <p>June 5, 2026</p>
                </div>
              </div>
              <div className="order-item">
                <div className="order-info">
                  <h4>#ORD-12344</h4>
                  <p>Sony WH-1000XM5 Headphones</p>
                </div>
                <div className="order-status">
                  <span className="status shipped">Shipped</span>
                  <p>June 8, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
