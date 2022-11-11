import React from "react";
import Pet from "./Owner";

function OwnerList({ pets }) {
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
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => (
          <Pet pet={pet} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default OwnerList;
