import React from "react";

function Owner({ pet }) {
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
    </tr>
  );
}

export default Owner;
