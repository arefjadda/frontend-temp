import React from "react";
import Order from "./Order";

function OrderList({ orders, onDelete }) {
  return (
    <table id="orders">
      <thead>
        <tr>
          <th>OrderID</th>
          <th>ServiceId</th>
          <th>CustomerID</th>
          <th>PetID</th>
          <th>Discount</th>
          <th>Total</th>
          <th>AppointmentDate</th>
          <th>OrderDate</th>
          <th>*Delete*</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, i) => (
          <Order order={order} key={i} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default OrderList;
