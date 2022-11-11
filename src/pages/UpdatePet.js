import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const UpdatePet = ({ pet }) => {
  const [pet_name, setName] = useState(pet.pet_name);
  const [species, setSpecies] = useState(pet.species);
  const [breed, setBreed] = useState(pet.breed);
  const [sex, setSex] = useState(pet.sex);
  const [weight, setWeight] = useState(pet.weight);
  const [age, setAge] = useState(pet.age);
  const [age_unit, setAgeU] = useState(pet.age_unit);

  const history = useHistory();

  const updatePet = async () => {
    const response = await fetch(`/create-pet/${pet.pet_id}`, {
      method: "PUT",
      body: JSON.stringify({
        pet_name: pet_name,
        species: species,
        breed: breed,
        sex: sex,
        weight: weight,
        age: age,
        age_unit: age_unit,
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
    history.push("/pets");
  };

  return (
    <>
      <article>
        <h2>Update Pet Info</h2>
        <p>Use the form below update a pet's information!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What are you changing?</legend>
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
            <button type="submit" onClick={updatePet} id="submit">
              Save
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default UpdatePet;
