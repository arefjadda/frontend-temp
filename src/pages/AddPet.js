import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const AddPet = () => {
  const [pet_name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [age_unit, setAgeU] = useState("");

  const history = useHistory();

  const addPet = async () => {
    const newPet = { pet_name, species, breed, sex, weight, age, age_unit };
    const response = await fetch("create-pet", {
      method: "post",
      body: JSON.stringify(newPet),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the pet!");
    } else {
      alert(`Failed to add pet, status code = ${response.status}.`);
    }
    history.push("/pets");
  };

  return (
    <>
      <article>
        <h2>Add a New Pet</h2>
        <p>Use the form below to add a new pet to the database!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What are the pet's details?</legend>
            <label for="pet_name">Pet Name</label>
            <input
              type="text"
              placeholder="Name of the pet"
              value={pet_name}
              onChange={(e) => setName(e.target.value)}
              id="pet_name"
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

            <label for="breed">Breed</label>
            <input
              type="text"
              placeholder="What is the breed?"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              id="breed"
            />

            <label for="sex">Sex*</label>
            <select
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              id="sex"
              required="required"
            >
              <option value="" disabled hidden>
                Select...
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>

            <label for="weight">Weight*</label>
            <input
              type="number"
              placeholder="Weight of the pet"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
              required
            />

            <label for="age">Age*</label>
            <input
              type="number"
              placeholder="How old?"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              id="age"
              required
            />

            <label for="age_unit">Age Unit*</label>
            <select
              type="text"
              value={age_unit}
              onChange={(e) => setAgeU(e.target.value)}
              id="age_unit"
              required="required"
            >
              <option value="" disabled hidden>
                Select...
              </option>
              <option value="Y">Years</option>
              <option value="M">Months</option>
              <option value="D">Days</option>
            </select>

            <label></label>
            <button type="submit" onClick={addPet} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default AddPet;
