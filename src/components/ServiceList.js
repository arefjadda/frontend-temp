import React from "react";
import Service from "./Service";

function ServiceList({ services, onDelete, onEdit }) {
  return (
    <table id="services">
      <thead>
        <tr>
          <th>ServiceID</th>
          <th>Name</th>
          <th>Species</th>
          <th>MinWeight</th>
          <th>MaxWeight</th>
          <th>Price</th>
          <th>*Delete*</th>
          <th>*Edit*</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, i) => (
          <Service
            service={service}
            key={i}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ServiceList;
