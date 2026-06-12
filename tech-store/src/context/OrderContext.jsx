import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const placeOrder = (orderData) => {
    const newOrder = {
      id: Date.now(), // Simple order ID using timestamp
      orderNumber: `ORD-${Date.now()}`,
      ...orderData,
      status: "Pending",
      createdAt: new Date().toLocaleDateString(),
      createdTime: new Date().toLocaleTimeString(),
    };
    setOrders([...orders, newOrder]);
    return newOrder;
  };

  const getOrders = () => orders;

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    ));
  };

  return (
    <OrderContext.Provider 
      value={{ 
        orders, 
        placeOrder, 
        getOrders, 
        getOrderById, 
        updateOrderStatus 
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
