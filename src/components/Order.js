import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Order({ order, onDelete }) {
  return (
    <tr>
      <td>{order.order_id}</td>
      <td>{order.service_id}</td>
      <td>{order.customer_id}</td>
      <td>{order.pet_id}</td>
      <td>{order.discount_percent}</td>
      <td>{order.total}</td>
      <td>{order.appointment_date.substring(0, 10)}</td>
      <td>{order.date.substring(0, 10)}</td>
      <td>
        <MdDeleteForever
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this order?")) {
              onDelete(order.order_id);
            }
          }}
        />
      </td>
    </tr>
  );
}

export default Order;
