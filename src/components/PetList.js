import React from "react";
import Pet from "./Pet";

function PetList({ pets, onDelete, onEdit }) {
  return (
    <table id="pets">
      <thead>
        <tr>
          <th>PetID</th>
          <th>Name</th>
          <th>Species</th>
          <th>Breed</th>
          <th>Sex</th>
          <th>Weight</th>
          <th>Age</th>
          <th>AgeUnit</th>
          <th>*Delete*</th>
          <th>*Edit*</th>
          <th>*Order*</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => (
          <Pet pet={pet} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default PetList;
