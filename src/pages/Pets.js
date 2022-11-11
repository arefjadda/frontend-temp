import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PetList from "../components/PetList";

export const Pets = ({ setPet }) => {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in the data
  const [pets, setPets] = useState([]);

  // RETRIEVE the list of pets
  const loadPets = async () => {
    const response = await fetch("/load-pets");
    const pets = await response.json();
    setPets(pets);
  };

  // UPDATE a pet
  const onEditPet = async (pet) => {
    setPet(pet);
    history.push("/update-pet");
  };

  // DELETE a pet
  const onDeletePet = async (pet_id) => {
    const response = await fetch(`/load-pets/${pet_id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      const getResponse = await fetch("/load-pets");
      const pets = await getResponse.json();
      setPets(pets);
    } else {
      console.error(
        `Failed to delete pet with _id = ${pet_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the pets
  useEffect(() => {
    loadPets();
  }, []);

  return (
    <>
      <article>
        <h2>Pets</h2>
        <p>
          Here you can view a list of the pets that have been to our store for
          services. You can also use the links below to add a new pet to the
          database, link a pet to its owner, or dynamically search the Pets
          table by filtering results. By default the table below only shows a
          random sample of 5 pets.
        </p>

        <label for="add-button">
          <nav className="add-button">
            <Link to="../add-pet">Add New Pet</Link>
            <Link to="../add-owner">Link/Unlink Customer and Pet</Link>
            <Link to="../pet-search">Advanced Pet Search</Link>
          </nav>
        </label>

        <label></label>
        <PetList pets={pets} onEdit={onEditPet} onDelete={onDeletePet} />
      </article>
    </>
  );
};
export default Pets;
