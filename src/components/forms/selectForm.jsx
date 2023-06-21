import React from "react";
import { Card } from "react-bootstrap";

const SelectForm = ({ field, options, updateData }) => {
  return (
    <div className="form-component">
      <Card.Title>{field}</Card.Title>
      <select name={field} id={field} onChange={updateData}>
        {options.map((x, y) => {
          return (
            <option value={x} key={y * 15}>
              {x}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectForm;
