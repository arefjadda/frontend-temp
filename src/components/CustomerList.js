import React from "react";
import Customer from "./Customer";

function CustomerList({ customers, onDelete, onEdit, onOwner }) {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>CustomerID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Phone</th>
          <th>Email</th>
          <th>OrderCount</th>
          <th>*Delete*</th>
          <th>*Edit*</th>
          <th>*Order*</th>
          <th>*Pets*</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, i) => (
          <Customer
            customer={customer}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
            onOwner={onOwner}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CustomerList;
