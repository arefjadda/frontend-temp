import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const AddService = () => {
  const [service_name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [min_weight, setMinw] = useState("");
  const [max_weight, setMaxw] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  const addService = async () => {
    const newService = { service_name, species, min_weight, max_weight, price };
    const response = await fetch("create-service", {
      method: "post",
      body: JSON.stringify(newService),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the service!");
    } else {
      alert(`Failed to add service, status code = ${response.status}.`);
    }
    history.push("/services");
  };

  return (
    <>
      <article>
        <h2>Add a New Service</h2>
        <p>Use the form below to add a new service to the database!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What new service are you adding?</legend>
            <label for="service_name">Service Name*</label>
            <input
              type="text"
              placeholder="Name of the service"
              value={service_name}
              onChange={(e) => setName(e.target.value)}
              id="service_name"
              required
            />

            <label for="species">Species*</label>
            <select
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              id="species"
              required="required"
            >
              <option value="" disabled hidden>
                Select...
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Hamster">Hamster</option>
              <option value="Rabbit">Rabbit</option>
            </select>

            <label for="min_weight">Minimum Weight*</label>
            <input
              type="number"
              placeholder="Min accepted weight"
              value={min_weight}
              onChange={(e) => setMinw(e.target.value)}
              id="min_weight"
              required
            />

            <label for="max_weight">Maximum Weight*</label>
            <input
              type="number"
              placeholder="Max accepted weight"
              value={max_weight}
              onChange={(e) => setMaxw(e.target.value)}
              id="max_weight"
              required
            />

            <label for="price">Price*</label>
            <input
              type="number"
              step=".01"
              placeholder="Current price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              required
            />

            <label></label>
            <button type="submit" onClick={addService} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default AddService;
