import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AddOwner = ({ owner }) => {
  const [customer_id, setCid] = useState("");
  const [pet_id, setPid] = useState("");
  const [linker, setLinker] = useState("");

  const history = useHistory();

  // ADD relationship
  const addOwner = async () => {
    const newOwner = { customer_id, pet_id };
    const response = await fetch("create-owner", {
      method: "post",
      body: JSON.stringify(newOwner),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the owner!");
    } else {
      alert(`Failed to add owner, status code = ${response.status}.`);
    }
    history.push("/customers");
  };

  // DELETE relationship
  const deleteOwner = async (customer_id, pet_id) => {
    const searchInput = { customer_id: customer_id, pet_id: pet_id };
    const response = await fetch(
      `/load-owners/?${new URLSearchParams(searchInput)}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      alert("Successfully removed the owner!");
    } else {
      alert(`Failed to remove owner, status code = ${response.status}.`);
    }
    history.push("/customers");
  };

  return (
    <>
      <article>
        <h2>Pet Linker</h2>
        <p>Use the form below to link/unlink a pet and a customer!</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Who is getting linked/unlinked?</legend>
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
            <label for="link">Link or Unlink?*</label>
            <select
              type="text"
              value={linker}
              onChange={(e) => setLinker(e.target.value)}
              id="linker"
              required="required"
            >
              <option value="" disabled hidden>
                Select...
              </option>
              <option value="link">Link</option>
              <option value="unlink">Unlink</option>
            </select>

            <label></label>
            <button
              type="submit"
              onClick={() => {
                if (linker === "link") addOwner();
                if (linker === "unlink") deleteOwner(customer_id, pet_id);
              }}
              id="submit"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default AddOwner;
