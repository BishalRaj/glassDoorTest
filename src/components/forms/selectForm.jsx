import React from "react";
import { Card } from "react-bootstrap";

const SelectForm = ({ field, options }) => {
  return (
    <>
      <Card.Title>{field}</Card.Title>
      <select name={field} id={field}>
        {options.map((x, y) => {
          return (
            <option value={x} key={y * 15}>
              {x}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectForm;
