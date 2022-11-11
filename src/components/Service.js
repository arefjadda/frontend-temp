import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

function Service({ service, onDelete, onEdit }) {
  return (
    <tr>
      <td>{service.service_id}</td>
      <td>{service.service_name}</td>
      <td>{service.species}</td>
      <td>{service.min_weight}</td>
      <td>{service.max_weight}</td>
      <td>{service.price}</td>
      <td>
        <MdDeleteForever
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this service?")
            ) {
              onDelete(service.service_id);
            }
          }}
        />
      </td>
      <td>
        <MdEdit onClick={() => onEdit(service)} />
      </td>
    </tr>
  );
}

export default Service;
