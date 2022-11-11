import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const PetSearch = ({ pet }) => {
  const history = useHistory();

  return (
    <>
      <article>
        <h2>Search Pet</h2>
        <p>Use the form below to dynamically search and filter the Pets table!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>What filters would you like to add?</legend>
            <label for="name">Pet Name</label>
            <input type="text" placeholder="Name of the pet" id="name" />

            <label for="name">Species</label>
            <select type="text" id="unit" >
              <option value="" selected disabled hidden>
                Select...
              </option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Hamster</option>
              <option>Rabbit</option>
            </select>

            <label for="name">Breed</label>
            <input type="text" placeholder="What is the breed?" id="name" />

            <label for="name">Sex</label>
            <select type="text" id="unit" >
              <option value="" selected disabled hidden>
                Select...
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <label for="reps">Weight</label>
            <input
              type="number"
              placeholder="Weight of the pet"
              id="reps"
            />

            <label for="weight">Age</label>
            <input type="number" placeholder="How old?" id="weight" />

            <label for="name">Age Unit</label>
            <select type="text" id="unit">
              <option value="" selected disabled hidden>
                Select...
              </option>
              <option>Years</option>
              <option>Months</option>
              <option>Days</option>
            </select>

            <label></label>
            <button type="submit" id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default PetSearch;
