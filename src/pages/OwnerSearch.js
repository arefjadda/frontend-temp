import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import OwnerList from "../components/OwnerList";

export const Owners = ({ customer }) => {
  // Use state to bring in the data
  const [customer_id, setCid] = useState(customer.customer_id);
  const [first_name, setFname] = useState(customer.first_name);
  const [last_name, setLname] = useState(customer.last_name);
  const [pets, setPets] = useState([]);

  const history = useHistory();

  // RETRIEVE the list of pets
  const loadPets = async () => {
    const searchInput = { customer_id: customer_id };
    const response = await fetch(
      `/search-owners?${new URLSearchParams(searchInput)}`
    );
    const pets = await response.json();
    setPets(pets);
  };

  // LOAD the pets
  useEffect(() => {
    loadPets();
  }, []);

  return (
    <>
      <article>
        <h2>
          {first_name} {last_name}'s Pets (Owner)
        </h2>
        <p>
          Below is the list of {first_name} {last_name}'s pets (CustomerID:{" "}
          {customer_id}).
        </p>

        <label></label>
        <OwnerList pets={pets} />
      </article>
    </>
  );
};
export default Owners;
