import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const AddCustomer = ({ customer }) => {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const addCustomer = async () => {
    const newCustomer = { first_name, last_name, phone, email };
    const response = await fetch("create-customer", {
      method: "post",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the customer!");
    } else {
      alert(`Failed to add customer, status code = ${response.status}.`);
    }
    history.push("/customers");
  };

  return (
    <>
      <article>
        <h2>Add a New Customer</h2>
        <p>Use the form below to add a new customer to the database!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Who are you adding?</legend>
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
            <button type="submit" onClick={addCustomer} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default AddCustomer;
