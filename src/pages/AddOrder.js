import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AddOrder = ({ order }) => {
  const [service_id, setSid] = useState("");
  const [customer_id, setCid] = useState("");
  const [pet_id, setPid] = useState("");
  const [discount_percent, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  const [appointment_date, setDate] = useState("");

  const history = useHistory();

  const addOrder = async () => {
    const newOrder = {
      service_id,
      customer_id,
      pet_id,
      discount_percent,
      total,
      appointment_date,
    };
    const response = await fetch("create-order", {
      method: "post",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the order!");
    } else {
      alert(`Failed to add order, status code = ${response.status}.`);
    }
    history.push("/orders");
  };

  return (
    <>
      <article>
        <h2>Create a New Order</h2>
        <p>Use the form below to record a new order!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What is the new order?</legend>
            <label for="customer_id">
              <Link to="../customers" target="_blank">
                Customer ID*
              </Link>
            </label>
            <input
              type="number"
              placeholder="ID number of the customer"
              value={customer_id}
              onChange={(e) => setCid(e.target.value)}
              id="customer_id"
              required
            />

            <label for="service_id">Service Type*</label>
            <select
              type="text"
              value={service_id}
              onChange={(e) => setSid(e.target.value)}
              id="service_id"
              required="required"
            >
              <option value="" disabled hidden>
                Select...
              </option>
              <option value={1}>Bath and Brush</option>
              <option value={2}>Haircut</option>
              <option value={3}>Litter Box Training</option>
              <option value={4}>Behavioral Training</option>
            </select>

            <label for="pet_id">
              <Link to="../pets" target="_blank">
                Pet ID*
              </Link>
            </label>
            <input
              type="number"
              placeholder="ID number of the pet"
              value={pet_id}
              onChange={(e) => setPid(e.target.value)}
              id="pet_id"
              required
            />

            <label for="discount_percent">Discount Percent</label>
            <input
              type="number"
              placeholder="Discount (If applicable)"
              value={discount_percent}
              onChange={(e) => setDiscount(e.target.value)}
              id="discount_percent"
            />

            <label for="total">Total*</label>
            <input
              type="number"
              step=".01"
              placeholder="Total Cost"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              id="total"
              required
            />

            <label for="appointment_date">Appointment Date*</label>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointment_date}
              onChange={(e) => setDate(e.target.value)}
              id="appointment_date"
              required
            />

            <label></label>
            <button type="submit" onClick={addOrder} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default AddOrder;
