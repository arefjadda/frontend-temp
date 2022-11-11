import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ServiceList from "../components/ServiceList";

export const Services = ({ setService }) => {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in the data
  const [services, setServices] = useState([]);
  const [species, setSpecies] = useState([]);

  // RETRIEVE the list of services
  const loadServices = async () => {
    const response = await fetch("/load-services");
    const services = await response.json();
    setServices(services);
  };

  // SEARCH services
  const searchServices = async () => {
    const searchInput = { species: species };
    const response = await fetch(
      `/search-services?${new URLSearchParams(searchInput)}`
    );
    const services = await response.json();
    setServices(services);
  };

  // UPDATE a service
  const onEditService = async (service) => {
    setService(service);
    history.push("/update-service");
  };

  // DELETE a service
  const onDeleteService = async (service_id) => {
    const response = await fetch(`/load-services/${service_id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch("/load-services");
      const services = await getResponse.json();
      setServices(services);
    } else {
      console.error(
        `Failed to delete service with _id = ${service_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the services
  useEffect(() => {
    loadServices();
  }, []);

  return (
    <>
      <article>
        <h2>Services</h2>
        <p>
          Here you can view a list of all the services the company currently
          offers. You can use the drop down below to filter the services shown
          based on species.
        </p>

        <label for="add-button">
          <nav className="add-button">
            <Link to="../add-service">Add New Service</Link>
          </nav>
        </label>
        <label for="species">Filter Services by Species</label>
        <br />
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
        <button type="submit" onClick={searchServices} id="submit">
          Filter
        </button>
        <button
          type="reset"
          onClick={(e) => {
            setSpecies("");
            loadServices();
          }}
          id="submit"
        >
          X
        </button>

        <label></label>
        <ServiceList
          services={services}
          onEdit={onEditService}
          onDelete={onDeleteService}
        />
      </article>
    </>
  );
};
export default Services;
