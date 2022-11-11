import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerList from "../components/CustomerList";

export const Customers = ({ setCustomer }) => {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in the data
  const [customers, setCustomers] = useState([]);
  const [phone, setPhone] = useState([]);

  // RETRIEVE the list of customers
  const loadCustomers = async () => {
    const response = await fetch("/load-customers");
    const customers = await response.json();
    setCustomers(customers);
  };

  // SEARCH customers
  const searchCustomers = async () => {
    const searchInput = { phone: phone };
    const response = await fetch(
      `/search-customers?${new URLSearchParams(searchInput)}`
    );
    const customers = await response.json();
    setCustomers(customers);
  };

  // UPDATE a customer
  const onEditCustomer = async (customer) => {
    setCustomer(customer);
    history.push("/update-customer");
  };

  // DELETE a customer
  const onDeleteCustomer = async (customer_id) => {
    const response = await fetch(`/load-customers/${customer_id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch("/load-customers");
      const customers = await getResponse.json();
      setCustomers(customers);
    } else {
      console.error(
        `Failed to delete customer with _id = ${customer_id}, status code = ${response.status}`
      );
    }
  };

  // VIEW a customer's pets
  const viewPets = async (customer) => {
    setCustomer(customer);
    history.push("/owner-search");
  };

  // LOAD the customers
  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <>
      <article>
        <h2>Customers</h2>
        <p>
          Here you can view a list of all of the company's customers. You can
          search for a customer in the list by their phone number. You can also
          use the links below to add a new customer to the database or
          link/unlink a pet to its owner. By default the table below only shows
          a random sample of 5 customers.
        </p>

        <label for="add-button">
          <nav className="add-button">
            <Link to="../add-customer">Add New Customer</Link>
            <Link to="../add-owner">Link/Unlink Customer and Pet</Link>
          </nav>
        </label>
        <label for="search">Search for Customer by Phone Number</label>
        <br />
        <input
          type="number"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="search"
        />
        <button type="submit" onClick={searchCustomers} id="submit">
          Search
        </button>
        <button
          type="reset"
          onClick={(e) => {
            setPhone("");
            loadCustomers();
          }}
          id="submit"
        >
          X
        </button>
        <label></label>
        <CustomerList
          customers={customers}
          onEdit={onEditCustomer}
          onDelete={onDeleteCustomer}
          onOwner={viewPets}
        />
      </article>
    </>
  );
};
export default Customers;
