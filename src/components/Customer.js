import React from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdPets,
  MdShoppingCart,
} from "react-icons/md";

function Customer({ customer, onDelete, onEdit, onOwner }) {
  return (
    <tr>
      <td>{customer.customer_id}</td>
      <td>{customer.first_name}</td>
      <td>{customer.last_name}</td>
      <td>{customer.phone}</td>
      <td>{customer.email}</td>
      <td>{customer.order_count}</td>
      <td>
        <MdDeleteForever
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this customer?")
            ) {
              onDelete(customer.customer_id);
            }
          }}
        />
      </td>
      <td>
        <MdEdit onClick={() => onEdit(customer)} />
      </td>
      <td>
        <MdShoppingCart />
      </td>
      <td>
        <MdPets onClick={() => onOwner(customer)} />
      </td>
    </tr>
  );
}

export default Customer;
