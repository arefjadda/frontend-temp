import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderList from "../components/OrderList";

export const Orders = ({ order }) => {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in the data
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState([]);

  // RETRIEVE the list of orders
  const loadOrders = async () => {
    const response = await fetch("/load-orders");
    const orders = await response.json();
    setOrders(orders);
  };

  // SEARCH orders
  const searchOrders = async () => {
    const searchInput = { date: date };
    const response = await fetch(
      `/search-orders?${new URLSearchParams(searchInput)}`
    );
    const orders = await response.json();
    setOrders(orders);
  };

  // DELETE order
  const onDeleteOrder = async (order_id) => {
    const response = await fetch(`/load-orders/${order_id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch("/load-orders");
      const orders = await getResponse.json();
      setOrders(orders);
    } else {
      console.error(
        `Failed to delete order with _id = ${order_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the orders
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <article>
        <h2>Orders</h2>
        <p>
          Here you can view a list of the orders made by customers for their
          pets. The default table shows the 5 orders added most recently. You
          can filter the orders by date. You can also use the link below to
          record a new order.
        </p>
        <label for="add-button">
          <nav className="add-button">
            <Link to="../add-order">Create New Order</Link>
          </nav>
        </label>

        <label for="date">Filter Orders by Date</label>
        <br />
        <input
          type="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
        />
        <button type="submit" onClick={searchOrders} id="submit">
          Filter
        </button>
        <button
          type="reset"
          onClick={(e) => {
            setDate("");
            loadOrders();
          }}
          id="submit"
        >
          X
        </button>

        <label></label>
        <OrderList orders={orders} onDelete={onDeleteOrder} />
      </article>
    </>
  );
};
export default Orders;
