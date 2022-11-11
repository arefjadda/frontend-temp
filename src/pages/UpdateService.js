import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const UpdateService = ({ service }) => {
  const [service_name, setName] = useState(service.service_name);
  const [species, setSpecies] = useState(service.species);
  const [min_weight, setMinw] = useState(service.min_weight);
  const [max_weight, setMaxw] = useState(service.max_weight);
  const [price, setPrice] = useState(service.price);

  const history = useHistory();

  const updateService = async () => {
    const response = await fetch(`/create-service/${service.service_id}`, {
      method: "PUT",
      body: JSON.stringify({
        service_name: service_name,
        species: species,
        min_weight: min_weight,
        max_weight: max_weight,
        price: price,
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
    history.push("/services");
  };

  return (
    <>
      <article>
        <h2>Update a Service</h2>
        <p>Use the form below to update a service's information!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What are you changing?</legend>
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
            <button type="submit" onClick={updateService} id="submit">
              Save
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default UpdateService;
