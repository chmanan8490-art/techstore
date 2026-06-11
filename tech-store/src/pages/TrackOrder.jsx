import { useState } from "react";

export default function TrackOrder() {
  const [searchInput, setSearchInput] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [searchType, setSearchType] = useState("order");

  const mockOrders = [
    {
      id: "ORD-12345",
      customerName: "John Smith",
      date: "June 5, 2026",
      total: "$1,099.00",
      status: "Delivered",
      items: [
        { name: "MacBook Air M2", qty: 1, price: "$1,099.00" }
      ],
      tracking: [
        { status: "Order Placed", date: "June 5, 2026", completed: true },
        { status: "Processing", date: "June 6, 2026", completed: true },
        { status: "Shipped", date: "June 7, 2026", completed: true },
        { status: "In Transit", date: "June 8, 2026", completed: true },
        { status: "Delivered", date: "June 9, 2026", completed: true }
      ]
    },
    {
      id: "ORD-12346",
      customerName: "Sarah Johnson",
      date: "June 8, 2026",
      total: "$349.00",
      status: "Shipped",
      items: [
        { name: "Sony WH-1000XM5 Headphones", qty: 1, price: "$349.00" }
      ],
      tracking: [
        { status: "Order Placed", date: "June 8, 2026", completed: true },
        { status: "Processing", date: "June 9, 2026", completed: true },
        { status: "Shipped", date: "June 10, 2026", completed: true },
        { status: "In Transit", date: "June 11, 2026", completed: true },
        { status: "Delivered", date: "June 13, 2026", completed: false }
      ]
    },
    {
      id: "ORD-12347",
      customerName: "Michael Brown",
      date: "June 10, 2026",
      total: "$399.00",
      status: "Processing",
      items: [
        { name: "Apple Watch Series 9", qty: 1, price: "$399.00" }
      ],
      tracking: [
        { status: "Order Placed", date: "June 10, 2026", completed: true },
        { status: "Processing", date: "June 11, 2026", completed: true },
        { status: "Shipped", date: "June 12, 2026", completed: false },
        { status: "In Transit", date: "", completed: false },
        { status: "Delivered", date: "", completed: false }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    
    let found = null;
    
    if (searchType === "order") {
      found = mockOrders.find(order => order.id.toUpperCase() === searchInput.toUpperCase());
    } else {
      found = mockOrders.find(order => order.customerName.toLowerCase().includes(searchInput.toLowerCase()));
    }
    
    if (found) {
      setOrderData(found);
    } else {
      setOrderData(null);
      const hint = searchType === "order" 
        ? "Try: ORD-12345, ORD-12346, or ORD-12347"
        : "Try: John Smith, Sarah Johnson, or Michael Brown";
      alert(`${searchType === "order" ? "Order" : "Customer"} not found. ${hint}`);
    }
  };

  return (
    <main className="track-order-page">
      <div className="page-header">
        <h1>📦 Track Your Order</h1>
        <p>Enter your order number or customer name to see its status</p>
      </div>

      <div className="track-container">
        <form className="track-form" onSubmit={handleSearch}>
          <h2>Order Tracking</h2>
          
          <div className="search-type-options">
            <label>
              <input
                type="radio"
                value="order"
                checked={searchType === "order"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              Search by Order Number
            </label>
            <label>
              <input
                type="radio"
                value="name"
                checked={searchType === "name"}
                onChange={(e) => setSearchType(e.target.value)}
              />
              Search by Customer Name
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="searchInput">
              {searchType === "order" ? "Order Number" : "Customer Name"}
            </label>
            <input
              type="text"
              id="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={searchType === "order" ? "e.g., ORD-12345" : "e.g., John Smith"}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Track Order</button>
          <p className="hint">
            {searchType === "order"
              ? "Try: ORD-12345, ORD-12346, or ORD-12347"
              : "Try: John Smith, Sarah Johnson, or Michael Brown"}
          </p>
        </form>

        {orderData && (
          <div className="order-details">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>Order ID:</span>
                <strong>{orderData.id}</strong>
              </div>
              <div className="summary-item">
                <span>Customer Name:</span>
                <strong>{orderData.customerName}</strong>
              </div>
              <div className="summary-item">
                <span>Order Date:</span>
                <strong>{orderData.date}</strong>
              </div>
              <div className="summary-item">
                <span>Total Amount:</span>
                <strong>{orderData.total}</strong>
              </div>
              <div className="summary-item">
                <span>Status:</span>
                <strong className={`status-badge ${orderData.status.toLowerCase()}`}>
                  {orderData.status}
                </strong>
              </div>
            </div>

            <div className="order-items">
              <h3>Items</h3>
              {orderData.items.map((item, idx) => (
                <div key={idx} className="item">
                  <div className="item-name">{item.name}</div>
                  <div className="item-details">
                    <span>Qty: {item.qty}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="tracking-timeline">
              <h3>Tracking Timeline</h3>
              <div className="timeline">
                {orderData.tracking.map((step, idx) => (
                  <div key={idx} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>{step.status}</h4>
                      {step.date && <p>{step.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
