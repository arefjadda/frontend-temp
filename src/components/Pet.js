import React from "react";
import { useHistory } from "react-router-dom";
import { MdDeleteForever, MdEdit, MdShoppingCart } from "react-icons/md";

function Pet({ pet, onDelete, onEdit }) {
  return (
    <tr>
      <td>{pet.pet_id}</td>
      <td>{pet.pet_name}</td>
      <td>{pet.species}</td>
      <td>{pet.breed}</td>
      <td>{pet.sex}</td>
      <td>{pet.weight}</td>
      <td>{pet.age}</td>
      <td>{pet.age_unit}</td>
      <td>
        <MdDeleteForever
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this pet?")) {
              onDelete(pet.pet_id);
            }
          }}
        />
      </td>
      <td>
        <MdEdit onClick={() => onEdit(pet)} />
      </td>
      <td>
        <MdShoppingCart />
      </td>
    </tr>
  );
}

export default Pet;
