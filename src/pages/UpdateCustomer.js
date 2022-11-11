import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const UpdateCustomer = ({ customer }) => {
  const [first_name, setFname] = useState(customer.first_name);
  const [last_name, setLname] = useState(customer.last_name);
  const [phone, setPhone] = useState(customer.phone);
  const [email, setEmail] = useState(customer.email);

  const history = useHistory();

  const updateCustomer = async () => {
    const response = await fetch(`/create-customer/${customer.customer_id}`, {
      method: "PUT",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully edited document!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update document. Status ${response.status}. ${errMessage.Error}.`
      );
    }
    history.push("/customers");
  };

  return (
    <>
      <article>
        <h2>Update Customer Details</h2>
        <p>Use the form below to update a customer's info!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What are you updating?</legend>
            <label for="first_name">First Name*</label>
            <input
              type="text"
              placeholder="Customer first name"
              value={first_name}
              onChange={(e) => setFname(e.target.value)}
              id="first_name"
              required
            />

            <label for="last_name">Last Name*</label>
            <input
              type="text"
              placeholder="Customer last name"
              value={last_name}
              onChange={(e) => setLname(e.target.value)}
              id="last_name"
              required
            />

            <label for="phone">Phone Number*</label>
            <input
              type="number"
              placeholder="Primary phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              required
            />

            <label for="email">Email*</label>
            <input
              type="email"
              placeholder="Primary email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />

            <label></label>
            <button type="submit" onClick={updateCustomer} id="submit">
              Save
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default UpdateCustomer;
